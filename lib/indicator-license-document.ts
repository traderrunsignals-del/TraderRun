import {
  PDFDocument,
  PDFFont,
  PDFPage,
  StandardFonts,
  rgb,
} from "pdf-lib"

import {
  INDICATOR_LICENSE_SECTIONS,
  INDICATOR_LICENSE_TITLE,
  INDICATOR_LICENSE_VERSION,
} from "@/lib/indicator-license"

export type IndicatorLicenseDocumentData = {
  licenseId: string
  name: string
  email: string
  tradingViewUser: string
  documentType: string
  documentNumber: string
  signedAt: Date
  signatureData: string
}

type LicenseDocumentSnapshot = {
  title: string
  contractVersion: string
  licenseId: string

  holder: {
    name: string
    email: string
    tradingViewUser: string
    documentType: string
    documentNumber: string
  }

  signedAt: string

  declarations: string[]

  sections: typeof INDICATOR_LICENSE_SECTIONS

  signatureData: string
}

const PAGE_WIDTH = 595.28
const PAGE_HEIGHT = 841.89

const MARGIN_X = 50
const MARGIN_TOP = 55
const MARGIN_BOTTOM = 55

const BODY_FONT_SIZE = 10
const BODY_LINE_HEIGHT = 15

function formatSignedAt(
  signedAt: Date
) {
  return new Intl.DateTimeFormat(
    "es-ES",
    {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "Europe/Madrid",
    }
  ).format(signedAt)
}

function getDocumentTypeLabel(
  documentType: string
) {
  switch (documentType) {
    case "dni":
      return "DNI"

    case "nie":
      return "NIE"

    case "passport":
      return "Pasaporte"

    default:
      return "Documento de identidad"
  }
}

export function buildIndicatorLicenseDocumentData(
  data: IndicatorLicenseDocumentData
): LicenseDocumentSnapshot {
  return {
    title:
      INDICATOR_LICENSE_TITLE,

    contractVersion:
      INDICATOR_LICENSE_VERSION,

    licenseId:
      data.licenseId,

    holder: {
      name:
        data.name,

      email:
        data.email,

      tradingViewUser:
        data.tradingViewUser,

      documentType:
        getDocumentTypeLabel(
          data.documentType
        ),

      documentNumber:
        data.documentNumber,
    },

    signedAt:
      formatSignedAt(
        data.signedAt
      ),

    declarations: [
      "El titular declara que los datos de identificación facilitados son verdaderos y le corresponden.",

      "El titular declara haber leído y comprendido el contrato de licencia de uso del Indicador Trader Run y acepta sus condiciones.",

      "El titular entiende que la licencia es personal e intransferible y que no puede venderla, cederla, compartirla, sublicenciarla ni facilitar su uso a terceros.",
    ],

    sections:
      INDICATOR_LICENSE_SECTIONS,

    signatureData:
      data.signatureData,
  }
}

function sanitizePdfText(
  value: string
) {
  return value
    .replace(/\u2018|\u2019/g, "'")
    .replace(/\u201C|\u201D/g, '"')
    .replace(/\u2013|\u2014/g, "-")
    .replace(/\u2026/g, "...")
    .replace(/\u00A0/g, " ")
}

function wrapText(
  text: string,
  font: PDFFont,
  fontSize: number,
  maxWidth: number
) {
  const cleanText =
    sanitizePdfText(text)

  const paragraphs =
    cleanText.split(/\n+/)

  const lines: string[] = []

  for (const paragraph of paragraphs) {
    const words =
      paragraph
        .trim()
        .split(/\s+/)
        .filter(Boolean)

    if (words.length === 0) {
      lines.push("")
      continue
    }

    let currentLine = ""

    for (const word of words) {
      const candidate =
        currentLine
          ? `${currentLine} ${word}`
          : word

      const width =
        font.widthOfTextAtSize(
          candidate,
          fontSize
        )

      if (
        width <= maxWidth ||
        currentLine.length === 0
      ) {
        currentLine =
          candidate
      } else {
        lines.push(
          currentLine
        )

        currentLine =
          word
      }
    }

    if (currentLine) {
      lines.push(
        currentLine
      )
    }
  }

  return lines
}

export async function generateIndicatorLicensePdf(
  data: IndicatorLicenseDocumentData
) {
  const snapshot =
    buildIndicatorLicenseDocumentData(
      data
    )

  const pdfDocument =
    await PDFDocument.create()

  const regularFont =
    await pdfDocument.embedFont(
      StandardFonts.Helvetica
    )

  const boldFont =
    await pdfDocument.embedFont(
      StandardFonts.HelveticaBold
    )

  let page: PDFPage =
    pdfDocument.addPage([
      PAGE_WIDTH,
      PAGE_HEIGHT,
    ])

  let y =
    PAGE_HEIGHT -
    MARGIN_TOP

  const contentWidth =
    PAGE_WIDTH -
    MARGIN_X * 2

  const addPage = () => {
    page =
      pdfDocument.addPage([
        PAGE_WIDTH,
        PAGE_HEIGHT,
      ])

    y =
      PAGE_HEIGHT -
      MARGIN_TOP
  }

  const ensureSpace = (
    requiredHeight: number
  ) => {
    if (
      y -
        requiredHeight <
      MARGIN_BOTTOM
    ) {
      addPage()
    }
  }

  const drawWrappedText = ({
    text,
    font = regularFont,
    fontSize = BODY_FONT_SIZE,
    lineHeight = BODY_LINE_HEIGHT,
    gapAfter = 8,
  }: {
    text: string
    font?: PDFFont
    fontSize?: number
    lineHeight?: number
    gapAfter?: number
  }) => {
    const lines =
      wrapText(
        text,
        font,
        fontSize,
        contentWidth
      )

    for (const line of lines) {
      ensureSpace(
        lineHeight
      )

      if (line) {
        page.drawText(
          line,
          {
            x: MARGIN_X,
            y,
            size: fontSize,
            font,
            color:
              rgb(
                0.12,
                0.12,
                0.12
              ),
          }
        )
      }

      y -=
        lineHeight
    }

    y -=
      gapAfter
  }

  /*
   * ============================================================
   * CABECERA
   * ============================================================
   */

  page.drawText(
    "TRADER RUN ACADEMY",
    {
      x: MARGIN_X,
      y,
      size: 11,
      font: boldFont,
      color:
        rgb(
          0.08,
          0.55,
          0.25
        ),
    }
  )

  y -= 30

  drawWrappedText({
    text:
      snapshot.title,
    font:
      boldFont,
    fontSize:
      18,
    lineHeight:
      23,
    gapAfter:
      14,
  })

  drawWrappedText({
    text:
      `Version del contrato: ${snapshot.contractVersion}`,
    fontSize:
      9,
    lineHeight:
      13,
    gapAfter:
      2,
  })

  drawWrappedText({
    text:
      `Referencia de licencia: ${snapshot.licenseId}`,
    fontSize:
      9,
    lineHeight:
      13,
    gapAfter:
      20,
  })

  /*
   * ============================================================
   * DATOS DEL TITULAR
   * ============================================================
   */

  drawWrappedText({
    text:
      "Datos del titular",
    font:
      boldFont,
    fontSize:
      13,
    lineHeight:
      18,
    gapAfter:
      8,
  })

  drawWrappedText({
    text:
      `Nombre: ${snapshot.holder.name}`,
    gapAfter:
      2,
  })

  drawWrappedText({
    text:
      `Email: ${snapshot.holder.email}`,
    gapAfter:
      2,
  })

  drawWrappedText({
    text:
      `Usuario de TradingView: ${snapshot.holder.tradingViewUser}`,
    gapAfter:
      2,
  })

  drawWrappedText({
    text:
      `${snapshot.holder.documentType}: ${snapshot.holder.documentNumber}`,
    gapAfter:
      2,
  })

  drawWrappedText({
    text:
      `Fecha y hora de firma: ${snapshot.signedAt}`,
    gapAfter:
      20,
  })

  /*
   * ============================================================
   * CONTRATO
   * ============================================================
   */

  for (
    const section
    of snapshot.sections
  ) {
    ensureSpace(60)

    drawWrappedText({
      text:
        section.title,
      font:
        boldFont,
      fontSize:
        12,
      lineHeight:
        17,
      gapAfter:
        6,
    })

  for (
  const paragraph
  of section.paragraphs
) {
  drawWrappedText({
    text:
      paragraph,
    fontSize:
      BODY_FONT_SIZE,
    lineHeight:
      BODY_LINE_HEIGHT,
    gapAfter:
      8,
  })
}

y -= 8
  }

  /*
   * ============================================================
   * DECLARACIONES ACEPTADAS
   * ============================================================
   */

  ensureSpace(100)

  drawWrappedText({
    text:
      "Declaraciones aceptadas",
    font:
      boldFont,
    fontSize:
      13,
    lineHeight:
      18,
    gapAfter:
      8,
  })

  for (
    const declaration
    of snapshot.declarations
  ) {
    drawWrappedText({
      text:
        `- ${declaration}`,
      fontSize:
        BODY_FONT_SIZE,
      lineHeight:
        BODY_LINE_HEIGHT,
      gapAfter:
        8,
    })
  }

  /*
   * ============================================================
   * FIRMA
   * ============================================================
   */

  ensureSpace(180)

  drawWrappedText({
    text:
      "Firma del titular",
    font:
      boldFont,
    fontSize:
      13,
    lineHeight:
      18,
    gapAfter:
      8,
  })

  const signatureBase64 =
    snapshot.signatureData.replace(
      /^data:image\/png;base64,/,
      ""
    )

  const signatureBytes =
    Uint8Array.from(
      Buffer.from(
        signatureBase64,
        "base64"
      )
    )

  const signatureImage =
    await pdfDocument.embedPng(
      signatureBytes
    )

  const maxSignatureWidth =
    220

  const maxSignatureHeight =
    100

  const originalDimensions =
    signatureImage.scale(1)

  const signatureScale =
    Math.min(
      maxSignatureWidth /
        originalDimensions.width,

      maxSignatureHeight /
        originalDimensions.height,

      1
    )

  const signatureDimensions =
    signatureImage.scale(
      signatureScale
    )

  ensureSpace(
    signatureDimensions.height +
      65
  )

  page.drawRectangle({
    x:
      MARGIN_X,
    y:
      y -
      signatureDimensions.height -
      12,
    width:
      maxSignatureWidth +
      24,
    height:
      signatureDimensions.height +
      24,
    borderWidth:
      1,
    borderColor:
      rgb(
        0.75,
        0.75,
        0.75
      ),
  })

  page.drawImage(
    signatureImage,
    {
      x:
        MARGIN_X + 12,

      y:
        y -
        signatureDimensions.height,

      width:
        signatureDimensions.width,

      height:
        signatureDimensions.height,
    }
  )

  y -=
    signatureDimensions.height +
    35

  drawWrappedText({
    text:
      `Firmado electronicamente el ${snapshot.signedAt}`,
    fontSize:
      9,
    lineHeight:
      13,
    gapAfter:
      5,
  })

  drawWrappedText({
    text:
      `Referencia: ${snapshot.licenseId}`,
    fontSize:
      9,
    lineHeight:
      13,
    gapAfter:
      0,
  })

  /*
   * ============================================================
   * METADATOS DEL PDF
   * ============================================================
   */

  pdfDocument.setTitle(
    snapshot.title
  )

  pdfDocument.setSubject(
    `Licencia ${snapshot.contractVersion}`
  )

  pdfDocument.setCreator(
    "Trader Run Academy"
  )

  pdfDocument.setProducer(
    "Trader Run Academy"
  )

  return await pdfDocument.save()
}