"use client"

import {
  FormEvent,
  PointerEvent as ReactPointerEvent,
  useEffect,
  useRef,
  useState,
} from "react"

import {
  INDICATOR_LICENSE_SECTIONS,
  INDICATOR_LICENSE_TITLE,
  INDICATOR_LICENSE_VERSION,
} from "@/lib/indicator-license"

type LicenseFormProps = {
  token: string
  name: string
  email: string
  tradingViewUser: string
}

export default function LicenseForm({
  token,
  name,
  email,
  tradingViewUser,
}: LicenseFormProps) {
  const canvasRef =
    useRef<HTMLCanvasElement | null>(null)

  const drawingRef =
    useRef(false)

  const hasSignatureRef =
    useRef(false)

  const [documentType, setDocumentType] =
    useState("dni")

  const [documentNumber, setDocumentNumber] =
    useState("")

  const [
    identityConfirmed,
    setIdentityConfirmed,
  ] = useState(false)

  const [
    contractAccepted,
    setContractAccepted,
  ] = useState(false)

  const [
    personalLicenseAccepted,
    setPersonalLicenseAccepted,
  ] = useState(false)

  const [hasSignature, setHasSignature] =
    useState(false)

    const [isSubmitting, setIsSubmitting] =
  useState(false)

const [submitError, setSubmitError] =
  useState("")

const [signedSuccessfully, setSignedSuccessfully] =
  useState(false)

  /*
   * PREPARAR CANVAS DE FIRMA
   */

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) {
      return
    }

    const resizeCanvas = () => {
      const rect =
        canvas.getBoundingClientRect()

      const ratio =
        window.devicePixelRatio || 1

      canvas.width =
        Math.max(
          1,
          Math.floor(rect.width * ratio)
        )

      canvas.height =
        Math.max(
          1,
          Math.floor(rect.height * ratio)
        )

      const context =
        canvas.getContext("2d")

      if (!context) {
        return
      }

      context.setTransform(
        ratio,
        0,
        0,
        ratio,
        0,
        0
      )

      context.lineWidth = 2
      context.lineCap = "round"
      context.lineJoin = "round"
      context.strokeStyle = "#ffffff"

      hasSignatureRef.current = false
      setHasSignature(false)
    }

    resizeCanvas()

    window.addEventListener(
      "resize",
      resizeCanvas
    )

    return () => {
      window.removeEventListener(
        "resize",
        resizeCanvas
      )
    }
  }, [])

  const getPointerPosition = (
    event: ReactPointerEvent<HTMLCanvasElement>
  ) => {
    const canvas = canvasRef.current

    if (!canvas) {
      return null
    }

    const rect =
      canvas.getBoundingClientRect()

    return {
      x:
        event.clientX -
        rect.left,

      y:
        event.clientY -
        rect.top,
    }
  }

  const startDrawing = (
    event: ReactPointerEvent<HTMLCanvasElement>
  ) => {
    const canvas = canvasRef.current
    const position =
      getPointerPosition(event)

    if (!canvas || !position) {
      return
    }

    const context =
      canvas.getContext("2d")

    if (!context) {
      return
    }

    canvas.setPointerCapture(
      event.pointerId
    )

    drawingRef.current = true

    context.beginPath()
    context.moveTo(
      position.x,
      position.y
    )
  }

  const draw = (
    event: ReactPointerEvent<HTMLCanvasElement>
  ) => {
    if (!drawingRef.current) {
      return
    }

    const canvas = canvasRef.current
    const position =
      getPointerPosition(event)

    if (!canvas || !position) {
      return
    }

    const context =
      canvas.getContext("2d")

    if (!context) {
      return
    }

    context.lineTo(
      position.x,
      position.y
    )

    context.stroke()

    if (!hasSignatureRef.current) {
      hasSignatureRef.current = true
      setHasSignature(true)
    }
  }

  const stopDrawing = (
    event: ReactPointerEvent<HTMLCanvasElement>
  ) => {
    const canvas = canvasRef.current

    if (
      canvas &&
      canvas.hasPointerCapture(
        event.pointerId
      )
    ) {
      canvas.releasePointerCapture(
        event.pointerId
      )
    }

    drawingRef.current = false
  }

  const clearSignature = () => {
    const canvas = canvasRef.current

    if (!canvas) {
      return
    }

    const context =
      canvas.getContext("2d")

    if (!context) {
      return
    }

    context.clearRect(
      0,
      0,
      canvas.width,
      canvas.height
    )

    hasSignatureRef.current = false
    setHasSignature(false)
  }

  /*
   * ENVÍO
   *
   * Todavía NO guardamos nada.
   * Añadiremos el POST seguro después.
   */

  const handleSubmit = async (
  event: FormEvent<HTMLFormElement>
) => {
  event.preventDefault()

  if (
    !documentNumber.trim() ||
    !identityConfirmed ||
    !contractAccepted ||
    !personalLicenseAccepted ||
    !hasSignature
  ) {
    setSubmitError(
      "Completa todos los campos, acepta las condiciones y añade tu firma."
    )

    return
  }

  const canvas =
    canvasRef.current

  if (!canvas) {
    setSubmitError(
      "No se ha podido obtener la firma."
    )

    return
  }

  const signatureData =
    canvas.toDataURL("image/png")

  setIsSubmitting(true)
  setSubmitError("")

  try {
    const response =
      await fetch(
        `/api/indicator-license/${encodeURIComponent(
          token
        )}`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            documentType,

            documentNumber:
              documentNumber.trim(),

            identityConfirmed,

            contractAccepted,

            personalLicenseAccepted,

            contractVersion:
              INDICATOR_LICENSE_VERSION,

            signatureData,
          }),
        }
      )

    const result =
      await response.json()

    if (!response.ok) {
      setSubmitError(
        typeof result?.error === "string"
          ? result.error
          : "No se ha podido firmar la licencia."
      )

      return
    }

    setSignedSuccessfully(true)
  } catch (error) {
    console.error(
      "Error enviando firma:",
      error
    )

    setSubmitError(
      "No se ha podido conectar con el servidor. Inténtalo de nuevo."
    )
  } finally {
    setIsSubmitting(false)
  }
}

  const formIsComplete =
    Boolean(
      documentNumber.trim()
    ) &&
    identityConfirmed &&
    contractAccepted &&
    personalLicenseAccepted &&
    hasSignature

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
        <h2 className="text-lg font-medium text-white">
          Identificación del titular
        </h2>

        <p className="mt-2 text-sm text-zinc-400">
          Los datos de esta licencia deben
          corresponder con su titular.
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div>
            <label
              htmlFor="documentType"
              className="mb-2 block text-sm text-zinc-400"
            >
              Tipo de documento
            </label>

            <select
              id="documentType"
              value={documentType}
              onChange={(event) =>
                setDocumentType(
                  event.target.value
                )
              }
              className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 text-white outline-none focus:border-zinc-500"
            >
              <option value="dni">
                DNI
              </option>

              <option value="nie">
                NIE
              </option>

              <option value="passport">
                Pasaporte
              </option>
            </select>
          </div>

          <div>
            <label
              htmlFor="documentNumber"
              className="mb-2 block text-sm text-zinc-400"
            >
              Número de documento
            </label>

            <input
              id="documentNumber"
              type="text"
              value={documentNumber}
              onChange={(event) =>
                setDocumentNumber(
                  event.target.value
                )
              }
              autoComplete="off"
              maxLength={30}
              required
              className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 text-white outline-none focus:border-zinc-500"
            />
          </div>
        </div>

        <div className="mt-6 space-y-3 text-sm">
          <p className="text-zinc-500">
            Nombre
          </p>

          <p className="text-zinc-200">
            {name}
          </p>

          <p className="pt-2 text-zinc-500">
            Email
          </p>

          <p className="text-zinc-200">
            {email}
          </p>

          <p className="pt-2 text-zinc-500">
            Usuario de TradingView
          </p>

          <p className="text-zinc-200">
            {tradingViewUser}
          </p>
        </div>
      </div>

<div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
  <div className="border-b border-zinc-800 pb-5">
    <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
      {INDICATOR_LICENSE_VERSION}
    </p>

    <h2 className="mt-2 text-xl font-medium text-white">
      {INDICATOR_LICENSE_TITLE}
    </h2>

    <p className="mt-3 text-sm leading-6 text-zinc-400">
      Lee detenidamente las condiciones antes de aceptar y firmar
      la licencia.
    </p>
  </div>

  <div className="mt-6 max-h-[520px] overflow-y-auto pr-3">
    <div className="space-y-8">
      {INDICATOR_LICENSE_SECTIONS.map(
        (section) => (
          <section key={section.title}>
            <h3 className="font-medium text-zinc-100">
              {section.title}
            </h3>

            <div className="mt-3 space-y-3">
              {section.paragraphs.map(
                (paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm leading-6 text-zinc-400"
                  >
                    {paragraph}
                  </p>
                )
              )}
            </div>
          </section>
        )
      )}
    </div>
  </div>
</div>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
        <h2 className="text-lg font-medium text-white">
          Aceptación
        </h2>

        <div className="mt-6 space-y-5">
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={identityConfirmed}
              onChange={(event) =>
                setIdentityConfirmed(
                  event.target.checked
                )
              }
              className="mt-1"
            />

            <span className="text-sm leading-6 text-zinc-300">
              Declaro que los datos de
              identificación facilitados son
              verdaderos y me corresponden.
            </span>
          </label>

          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={contractAccepted}
              onChange={(event) =>
                setContractAccepted(
                  event.target.checked
                )
              }
              className="mt-1"
            />

            <span className="text-sm leading-6 text-zinc-300">
              Declaro haber leído y comprendido
              el contrato de licencia de uso del
              indicador Trader Run y acepto sus
              condiciones.
            </span>
          </label>

          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={
                personalLicenseAccepted
              }
              onChange={(event) =>
                setPersonalLicenseAccepted(
                  event.target.checked
                )
              }
              className="mt-1"
            />

            <span className="text-sm leading-6 text-zinc-300">
              Entiendo que la licencia es
              personal e intransferible y que
              no puedo venderla, cederla,
              compartirla, sublicenciarla ni
              facilitar su uso a terceros.
            </span>
          </label>
        </div>
      </div>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-medium text-white">
              Firma
            </h2>

            <p className="mt-2 text-sm text-zinc-400">
              Firma dentro del recuadro con el
              ratón o con el dedo.
            </p>
          </div>

          <button
            type="button"
            onClick={clearSignature}
            className="text-sm text-zinc-400 underline underline-offset-4 hover:text-white"
          >
            Borrar firma
          </button>
        </div>

        <canvas
          ref={canvasRef}
          onPointerDown={startDrawing}
          onPointerMove={draw}
          onPointerUp={stopDrawing}
          onPointerCancel={stopDrawing}
          className="mt-6 h-48 w-full touch-none rounded-xl border border-zinc-700 bg-black"
        />

        {!hasSignature && (
          <p className="mt-3 text-xs text-zinc-500">
            La firma es obligatoria.
          </p>
        )}
      </div>

      {submitError && (
  <div className="rounded-xl border border-red-900/50 bg-red-950/30 px-4 py-3">
    <p className="text-sm text-red-300">
      {submitError}
    </p>
  </div>
)}

{signedSuccessfully ? (
  <div className="rounded-2xl border border-zinc-700 bg-zinc-950 p-6 text-center">
    <h2 className="text-xl font-medium text-white">
      Licencia firmada correctamente
    </h2>

    <p className="mt-3 text-sm leading-6 text-zinc-400">
      Tu firma ha quedado registrada correctamente.
    </p>

    <p className="mt-2 text-sm leading-6 text-zinc-400">
      Conservaremos la evidencia asociada a esta licencia
      conforme a las condiciones aplicables.
    </p>
  </div>
) : (
  <button
    type="submit"
    disabled={
      !formIsComplete ||
      isSubmitting
    }
    className="w-full rounded-xl bg-white px-6 py-4 font-medium text-black transition disabled:cursor-not-allowed disabled:opacity-40"
  >
    {isSubmitting
      ? "Firmando licencia..."
      : "Firmar licencia"}
  </button>
)}
    </form>
  )
}