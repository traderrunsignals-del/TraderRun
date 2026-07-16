module.exports = [
"[project]/components/site-header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteHeader",
    ()=>SiteHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.mjs [app-ssr] (ecmascript) <export default as TrendingUp>");
"use client";
;
;
;
const navLinks = [
    {
        label: "Programa",
        href: "#programa"
    },
    {
        label: "Comunidad",
        href: "#comunidad"
    },
    {
        label: "Precios",
        href: "#precios"
    },
    {
        label: "Testimonios",
        href: "#testimonios"
    },
    {
        label: "FAQ",
        href: "#faq"
    }
];
function SiteHeader() {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                    className: "size-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/site-header.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/site-header.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-display text-lg font-bold tracking-tight",
                                children: [
                                    "Trader",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary",
                                        children: "Run"
                                    }, void 0, false, {
                                        fileName: "[project]/components/site-header.tsx",
                                        lineNumber: 25,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/site-header.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/site-header.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden items-center gap-8 md:flex",
                        children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: link.href,
                                className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
                                children: link.label
                            }, link.href, false, {
                                fileName: "[project]/components/site-header.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/site-header.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "flex size-9 items-center justify-center rounded-md text-foreground md:hidden",
                        onClick: ()=>setOpen((v)=>!v),
                        "aria-label": open ? "Cerrar menú" : "Abrir menú",
                        children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "size-5"
                        }, void 0, false, {
                            fileName: "[project]/components/site-header.tsx",
                            lineNumber: 48,
                            columnNumber: 19
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            className: "size-5"
                        }, void 0, false, {
                            fileName: "[project]/components/site-header.tsx",
                            lineNumber: 48,
                            columnNumber: 46
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/site-header.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/site-header.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-border/60 bg-background px-4 py-4 md:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "flex flex-col gap-1",
                    children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: link.href,
                            onClick: ()=>setOpen(false),
                            className: "rounded-md px-2 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground",
                            children: link.label
                        }, link.href, false, {
                            fileName: "[project]/components/site-header.tsx",
                            lineNumber: 56,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/site-header.tsx",
                    lineNumber: 54,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/site-header.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/site-header.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/faq.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Faq",
    ()=>Faq
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-ssr] (ecmascript) <export default as ChevronDown>");
"use client";
;
;
;
const faqs = [
    {
        q: "¿Necesito experiencia previa para empezar?",
        a: "No. El programa arranca desde los fundamentos, así que puedes empezar desde cero. Si ya tienes experiencia, puedes saltar directamente a los niveles avanzados."
    },
    {
        q: "¿TraderRun garantiza que voy a ganar dinero?",
        a: "No. El trading conlleva riesgo y nadie puede garantizar beneficios. Lo que ofrecemos es formación seria, un método probado y acompañamiento para que operes con criterio y gestión de riesgo."
    },
    {
        q: "¿Cuánto tiempo necesito dedicarle?",
        a: "Con 3 a 5 horas semanales puedes avanzar de forma constante. Todo el contenido esta disponible, así que puede organizarte yaprendes a tu ritmo."
    },
    {
        q: "¿Puedo cancelar cuando quiera?",
        a: "Sí. Los planes son mensuales y puedes cancelar en cualquier momento."
    },
    {
        q: "¿En qué mercados se enfoca la formación?",
        a: "Cubrimos índices como el Nasdaq y Sp principalemente, forex y nuestra propia cartera de acciones. Los principios de análisis y gestión de riesgo se aplican a todos ellos."
    }
];
function Faq() {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "faq",
        className: "mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium uppercase tracking-widest text-primary",
                        children: "Preguntas frecuentes"
                    }, void 0, false, {
                        fileName: "[project]/components/faq.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mt-3 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl",
                        children: "Resolvemos tus dudas"
                    }, void 0, false, {
                        fileName: "[project]/components/faq.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/faq.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-12 divide-y divide-border/60 rounded-xl border border-border/60 bg-card",
                children: faqs.map((item, i)=>{
                    const isOpen = open === i;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flex w-full items-center justify-between gap-4 px-5 py-5 text-left",
                                onClick: ()=>setOpen(isOpen ? null : i),
                                "aria-expanded": isOpen,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: item.q
                                    }, void 0, false, {
                                        fileName: "[project]/components/faq.tsx",
                                        lineNumber: 53,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        className: `size-5 shrink-0 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`
                                    }, void 0, false, {
                                        fileName: "[project]/components/faq.tsx",
                                        lineNumber: 54,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/faq.tsx",
                                lineNumber: 48,
                                columnNumber: 15
                            }, this),
                            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "px-5 pb-5 text-sm leading-relaxed text-muted-foreground",
                                children: item.a
                            }, void 0, false, {
                                fileName: "[project]/components/faq.tsx",
                                lineNumber: 61,
                                columnNumber: 17
                            }, this)
                        ]
                    }, item.q, true, {
                        fileName: "[project]/components/faq.tsx",
                        lineNumber: 47,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/faq.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/faq.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeClasses",
    ()=>mergeClasses
]);
/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
;
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toKebabCase",
    ()=>toKebabCase
]);
/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
;
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toCamelCase",
    ()=>toCamelCase
]);
/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toCamelCase = (string)=>string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2)=>p2 ? p2.toUpperCase() : p1.toLowerCase());
;
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toPascalCase",
    ()=>toPascalCase
]);
/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toCamelCase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs [app-ssr] (ecmascript)");
;
const toPascalCase = (string)=>{
    const camelCase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toCamelCase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toCamelCase"])(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
;
}),
"[project]/node_modules/lucide-react/dist/esm/defaultAttributes.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasA11yProp",
    ()=>hasA11yProp
]);
/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hasA11yProp = (props)=>{
    for(const prop in props){
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
            return true;
        }
    }
    return false;
};
;
}),
"[project]/node_modules/lucide-react/dist/esm/context.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LucideProvider",
    ()=>LucideProvider,
    "useLucideContext",
    ()=>useLucideContext
]);
/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use strict";
"use client";
;
const LucideContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({});
function LucideProvider({ children, size, color, strokeWidth, absoluteStrokeWidth, className }) {
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            size,
            color,
            strokeWidth,
            absoluteStrokeWidth,
            className
        }), [
        size,
        color,
        strokeWidth,
        absoluteStrokeWidth,
        className
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(LucideContext.Provider, {
        value
    }, children);
}
const useLucideContext = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LucideContext);
;
}),
"[project]/node_modules/lucide-react/dist/esm/Icon.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Icon
]);
/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/defaultAttributes.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$hasA11yProp$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/context.mjs [app-ssr] (ecmascript)");
"use strict";
"use client";
;
;
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ color, size, strokeWidth, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>{
    const { size: contextSize = 24, strokeWidth: contextStrokeWidth = 2, absoluteStrokeWidth: contextAbsoluteStrokeWidth = false, color: contextColor = "currentColor", className: contextClass = "" } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLucideContext"])() ?? {};
    const calculatedStrokeWidth = absoluteStrokeWidth ?? contextAbsoluteStrokeWidth ? Number(strokeWidth ?? contextStrokeWidth) * 24 / Number(size ?? contextSize) : strokeWidth ?? contextStrokeWidth;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        width: size ?? contextSize ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].width,
        height: size ?? contextSize ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].height,
        stroke: color ?? contextColor,
        strokeWidth: calculatedStrokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", contextClass, className),
        ...!children && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$hasA11yProp$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasA11yProp"])(rest) && {
            "aria-hidden": "true"
        },
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]);
});
;
}),
"[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toKebabCase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/Icon.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toKebabCase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toKebabCase"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName))}`, `lucide-${iconName}`, className),
            ...props
        }));
    Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName);
    return Component;
};
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Menu
]);
/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M4 5h16",
            key: "1tepv9"
        }
    ],
    [
        "path",
        {
            d: "M4 12h16",
            key: "1lakjw"
        }
    ],
    [
        "path",
        {
            d: "M4 19h16",
            key: "1djgab"
        }
    ]
];
const Menu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("menu", __iconNode);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-ssr] (ecmascript) <export default as Menu>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Menu",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>X
]);
/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }
    ],
    [
        "path",
        {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }
    ]
];
const X = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("x", __iconNode);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "X",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/trending-up.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TrendingUp
]);
/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M16 7h6v6",
            key: "box55l"
        }
    ],
    [
        "path",
        {
            d: "m22 7-8.5 8.5-5-5L2 17",
            key: "1t1m79"
        }
    ]
];
const TrendingUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("trending-up", __iconNode);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/trending-up.mjs [app-ssr] (ecmascript) <export default as TrendingUp>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrendingUp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.mjs [app-ssr] (ecmascript)");
}),
"[project]/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getComputedStyle",
    ()=>getComputedStyle,
    "getContainingBlock",
    ()=>getContainingBlock,
    "getDocumentElement",
    ()=>getDocumentElement,
    "getFrameElement",
    ()=>getFrameElement,
    "getNearestOverflowAncestor",
    ()=>getNearestOverflowAncestor,
    "getNodeName",
    ()=>getNodeName,
    "getNodeScroll",
    ()=>getNodeScroll,
    "getOverflowAncestors",
    ()=>getOverflowAncestors,
    "getParentNode",
    ()=>getParentNode,
    "getWindow",
    ()=>getWindow,
    "isContainingBlock",
    ()=>isContainingBlock,
    "isElement",
    ()=>isElement,
    "isHTMLElement",
    ()=>isHTMLElement,
    "isLastTraversableNode",
    ()=>isLastTraversableNode,
    "isNode",
    ()=>isNode,
    "isOverflowElement",
    ()=>isOverflowElement,
    "isShadowRoot",
    ()=>isShadowRoot,
    "isTableElement",
    ()=>isTableElement,
    "isTopLayer",
    ()=>isTopLayer,
    "isWebKit",
    ()=>isWebKit
]);
function hasWindow() {
    return ("TURBOPACK compile-time value", "undefined") !== 'undefined';
}
function getNodeName(node) {
    if (isNode(node)) {
        return (node.nodeName || '').toLowerCase();
    }
    // Mocked nodes in testing environments may not be instances of Node. By
    // returning `#document` an infinite loop won't occur.
    // https://github.com/floating-ui/floating-ui/issues/2317
    return '#document';
}
function getWindow(node) {
    var _node$ownerDocument;
    return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
    var _ref;
    return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
    if (!hasWindow()) {
        return false;
    }
    //TURBOPACK unreachable
    ;
}
function isElement(value) {
    if (!hasWindow()) {
        return false;
    }
    //TURBOPACK unreachable
    ;
}
function isHTMLElement(value) {
    if (!hasWindow()) {
        return false;
    }
    //TURBOPACK unreachable
    ;
}
function isShadowRoot(value) {
    if (!hasWindow() || typeof ShadowRoot === 'undefined') {
        return false;
    }
    //TURBOPACK unreachable
    ;
}
function isOverflowElement(element) {
    const { overflow, overflowX, overflowY, display } = getComputedStyle(element);
    return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && display !== 'inline' && display !== 'contents';
}
function isTableElement(element) {
    return /^(table|td|th)$/.test(getNodeName(element));
}
function isTopLayer(element) {
    try {
        if (element.matches(':popover-open')) {
            return true;
        }
    } catch (_e) {
    // no-op
    }
    try {
        return element.matches(':modal');
    } catch (_e) {
        return false;
    }
}
const willChangeRe = /transform|translate|scale|rotate|perspective|filter/;
const containRe = /paint|layout|strict|content/;
const isNotNone = (value)=>!!value && value !== 'none';
let isWebKitValue;
function isContainingBlock(elementOrCss) {
    const css = isElement(elementOrCss) ? getComputedStyle(elementOrCss) : elementOrCss;
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    // https://drafts.csswg.org/css-transforms-2/#individual-transforms
    return isNotNone(css.transform) || isNotNone(css.translate) || isNotNone(css.scale) || isNotNone(css.rotate) || isNotNone(css.perspective) || !isWebKit() && (isNotNone(css.backdropFilter) || isNotNone(css.filter)) || willChangeRe.test(css.willChange || '') || containRe.test(css.contain || '');
}
function getContainingBlock(element) {
    let currentNode = getParentNode(element);
    while(isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)){
        if (isContainingBlock(currentNode)) {
            return currentNode;
        } else if (isTopLayer(currentNode)) {
            return null;
        }
        currentNode = getParentNode(currentNode);
    }
    return null;
}
function isWebKit() {
    if (isWebKitValue == null) {
        isWebKitValue = typeof CSS !== 'undefined' && CSS.supports && CSS.supports('-webkit-backdrop-filter', 'none');
    }
    return isWebKitValue;
}
function isLastTraversableNode(node) {
    return /^(html|body|#document)$/.test(getNodeName(node));
}
function getComputedStyle(element) {
    return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
    if (isElement(element)) {
        return {
            scrollLeft: element.scrollLeft,
            scrollTop: element.scrollTop
        };
    }
    return {
        scrollLeft: element.scrollX,
        scrollTop: element.scrollY
    };
}
function getParentNode(node) {
    if (getNodeName(node) === 'html') {
        return node;
    }
    const result = // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node);
    return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
    const parentNode = getParentNode(node);
    if (isLastTraversableNode(parentNode)) {
        return (node.ownerDocument || node).body;
    }
    if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
        return parentNode;
    }
    return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
    var _node$ownerDocument2;
    if (list === void 0) {
        list = [];
    }
    if (traverseIframes === void 0) {
        traverseIframes = true;
    }
    const scrollableAncestor = getNearestOverflowAncestor(node);
    const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
    const win = getWindow(scrollableAncestor);
    if (isBody) {
        const frameElement = getFrameElement(win);
        return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
    } else {
        return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
    }
}
function getFrameElement(win) {
    return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}
;
}),
"[project]/node_modules/@base-ui/utils/safeReact.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SafeReact",
    ()=>SafeReact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const SafeReact = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
};
}),
"[project]/node_modules/@base-ui/utils/useRefWithInit.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRefWithInit",
    ()=>useRefWithInit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
const UNINITIALIZED = {};
function useRefWithInit(init, initArg) {
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](UNINITIALIZED);
    if (ref.current === UNINITIALIZED) {
        ref.current = init(initArg);
    }
    return ref;
}
}),
"[project]/node_modules/@base-ui/utils/useStableCallback.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useStableCallback",
    ()=>useStableCallback
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$utils$2f$safeReact$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/utils/safeReact.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$utils$2f$useRefWithInit$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/utils/useRefWithInit.mjs [app-ssr] (ecmascript)");
'use client';
;
;
const useInsertionEffect = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$utils$2f$safeReact$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SafeReact"].useInsertionEffect;
const useSafeInsertionEffect = // React 17 doesn't have useInsertionEffect.
useInsertionEffect && // Preact replaces useInsertionEffect with useLayoutEffect and fires too late.
useInsertionEffect !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$utils$2f$safeReact$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SafeReact"].useLayoutEffect ? useInsertionEffect : (fn)=>fn();
function useStableCallback(callback) {
    const stable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$utils$2f$useRefWithInit$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRefWithInit"])(createStableCallback).current;
    stable.next = callback;
    useSafeInsertionEffect(stable.effect);
    return stable.trampoline;
}
function createStableCallback() {
    const stable = {
        next: undefined,
        callback: assertNotCalled,
        trampoline: (...args)=>stable.callback?.(...args),
        effect: ()=>{
            stable.callback = stable.next;
        }
    };
    return stable;
}
function assertNotCalled() {
    if ("TURBOPACK compile-time truthy", 1) {
        // TODO: fix mui/no-guarded-throw
        // eslint-disable-next-line mui/no-guarded-throw
        throw /* minify-error-disabled */ new Error('Base UI: Cannot call an event handler while rendering.');
    }
}
}),
"[project]/node_modules/@base-ui/utils/error.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "error",
    ()=>error,
    "reset",
    ()=>reset
]);
let set;
if ("TURBOPACK compile-time truthy", 1) {
    set = new Set();
}
function error(...messages) {
    if ("TURBOPACK compile-time truthy", 1) {
        const messageKey = messages.join(' ');
        if (!set.has(messageKey)) {
            set.add(messageKey);
            console.error(`Base UI: ${messageKey}`);
        }
    }
}
function reset() {
    set?.clear();
}
}),
"[project]/node_modules/@base-ui/utils/useIsoLayoutEffect.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsoLayoutEffect",
    ()=>useIsoLayoutEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
const noop = ()=>{};
const useIsoLayoutEffect = typeof document !== 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"] : noop;
}),
"[project]/node_modules/@base-ui/utils/mergeObjects.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeObjects",
    ()=>mergeObjects
]);
function mergeObjects(a, b) {
    if (a && !b) {
        return a;
    }
    if (!a && b) {
        return b;
    }
    if (a || b) {
        return {
            ...a,
            ...b
        };
    }
    return undefined;
}
}),
"[project]/node_modules/@base-ui/react/merge-props/mergeProps.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "makeEventPreventable",
    ()=>makeEventPreventable,
    "mergeClassNames",
    ()=>mergeClassNames,
    "mergeProps",
    ()=>mergeProps,
    "mergePropsN",
    ()=>mergePropsN
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$utils$2f$mergeObjects$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/utils/mergeObjects.mjs [app-ssr] (ecmascript)");
;
const EMPTY_PROPS = {};
function mergeProps(a, b, c, d, e) {
    if (!c && !d && !e && !a) {
        return createInitialMergedProps(b);
    }
    // We need to mutably own `merged`.
    let merged = createInitialMergedProps(a);
    if (b) {
        merged = mergeInto(merged, b);
    }
    if (c) {
        merged = mergeInto(merged, c);
    }
    if (d) {
        merged = mergeInto(merged, d);
    }
    if (e) {
        merged = mergeInto(merged, e);
    }
    return merged;
}
function mergePropsN(props) {
    if (props.length === 0) {
        return EMPTY_PROPS;
    }
    if (props.length === 1) {
        return createInitialMergedProps(props[0]);
    }
    // We need to mutably own `merged`.
    let merged = createInitialMergedProps(props[0]);
    for(let i = 1; i < props.length; i += 1){
        merged = mergeInto(merged, props[i]);
    }
    return merged;
}
function createInitialMergedProps(inputProps) {
    if (isPropsGetter(inputProps)) {
        // Getter-returned handlers intentionally keep their existing semantics.
        return {
            ...resolvePropsGetter(inputProps, EMPTY_PROPS)
        };
    }
    return copyInitialProps(inputProps);
}
function mergeInto(merged, inputProps) {
    if (isPropsGetter(inputProps)) {
        return resolvePropsGetter(inputProps, merged);
    }
    return mutablyMergeInto(merged, inputProps);
}
function copyInitialProps(inputProps) {
    const copiedProps = {
        ...inputProps
    };
    // `copiedProps` is our fresh own-object copy, so iterating with `for...in` is safe here.
    // eslint-disable-next-line guard-for-in
    for(const propName in copiedProps){
        const propValue = copiedProps[propName];
        if (isEventHandler(propName, propValue)) {
            copiedProps[propName] = wrapEventHandler(propValue);
        }
    }
    return copiedProps;
}
/**
 * Merges two sets of props. In case of conflicts, the external props take precedence.
 */ function mutablyMergeInto(mergedProps, externalProps) {
    if (!externalProps) {
        return mergedProps;
    }
    // eslint-disable-next-line guard-for-in
    for(const propName in externalProps){
        const externalPropValue = externalProps[propName];
        switch(propName){
            case 'style':
                {
                    mergedProps[propName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$utils$2f$mergeObjects$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeObjects"])(mergedProps.style, externalPropValue);
                    break;
                }
            case 'className':
                {
                    mergedProps[propName] = mergeClassNames(mergedProps.className, externalPropValue);
                    break;
                }
            default:
                {
                    if (isEventHandler(propName, externalPropValue)) {
                        mergedProps[propName] = mergeEventHandlers(mergedProps[propName], externalPropValue);
                    } else {
                        mergedProps[propName] = externalPropValue;
                    }
                }
        }
    }
    return mergedProps;
}
function isEventHandler(key, value) {
    // This approach is more efficient than using a regex.
    const code0 = key.charCodeAt(0);
    const code1 = key.charCodeAt(1);
    const code2 = key.charCodeAt(2);
    return code0 === 111 /* o */  && code1 === 110 /* n */  && code2 >= 65 /* A */  && code2 <= 90 /* Z */  && (typeof value === 'function' || typeof value === 'undefined');
}
function isPropsGetter(inputProps) {
    return typeof inputProps === 'function';
}
function resolvePropsGetter(inputProps, previousProps) {
    if (isPropsGetter(inputProps)) {
        return inputProps(previousProps);
    }
    return inputProps ?? EMPTY_PROPS;
}
function mergeEventHandlers(ourHandler, theirHandler) {
    if (!theirHandler) {
        return ourHandler;
    }
    if (!ourHandler) {
        return wrapEventHandler(theirHandler);
    }
    return (...args)=>{
        const event = args[0];
        if (isSyntheticEvent(event)) {
            const baseUIEvent = event;
            makeEventPreventable(baseUIEvent);
            const result = theirHandler(...args);
            if (!baseUIEvent.baseUIHandlerPrevented) {
                ourHandler?.(...args);
            }
            return result;
        }
        const result = theirHandler(...args);
        ourHandler?.(...args);
        return result;
    };
}
function wrapEventHandler(handler) {
    if (!handler) {
        return handler;
    }
    return (...args)=>{
        const event = args[0];
        if (isSyntheticEvent(event)) {
            makeEventPreventable(event);
        }
        return handler(...args);
    };
}
function makeEventPreventable(event) {
    event.preventBaseUIHandler = ()=>{
        event.baseUIHandlerPrevented = true;
    };
    return event;
}
function mergeClassNames(ourClassName, theirClassName) {
    if (theirClassName) {
        if (ourClassName) {
            // eslint-disable-next-line prefer-template
            return theirClassName + ' ' + ourClassName;
        }
        return theirClassName;
    }
    return ourClassName;
}
function isSyntheticEvent(event) {
    return event != null && typeof event === 'object' && 'nativeEvent' in event;
}
}),
"[project]/node_modules/@base-ui/react/internals/composite/root/CompositeRootContext.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompositeRootContext",
    ()=>CompositeRootContext,
    "useCompositeRootContext",
    ()=>useCompositeRootContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const CompositeRootContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) CompositeRootContext.displayName = "CompositeRootContext";
function useCompositeRootContext(optional = false) {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](CompositeRootContext);
    if (context === undefined && !optional) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: CompositeRootContext is missing. Composite parts must be placed within <Composite.Root>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/node_modules/@base-ui/react/utils/useFocusableWhenDisabled.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFocusableWhenDisabled",
    ()=>useFocusableWhenDisabled
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function useFocusableWhenDisabled(parameters) {
    const { focusableWhenDisabled, disabled, composite = false, tabIndex: tabIndexProp = 0, isNativeButton } = parameters;
    const isFocusableComposite = composite && focusableWhenDisabled !== false;
    const isNonFocusableComposite = composite && focusableWhenDisabled === false;
    // we can't explicitly assign `undefined` to any of these props because it
    // would otherwise prevent subsequently merged props from setting them
    const props = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        const additionalProps = {
            // allow Tabbing away from focusableWhenDisabled elements
            onKeyDown (event) {
                if (disabled && focusableWhenDisabled && event.key !== 'Tab') {
                    event.preventDefault();
                }
            }
        };
        if (!composite) {
            additionalProps.tabIndex = tabIndexProp;
            if (!isNativeButton && disabled) {
                additionalProps.tabIndex = focusableWhenDisabled ? tabIndexProp : -1;
            }
        }
        if (isNativeButton && (focusableWhenDisabled || isFocusableComposite) || !isNativeButton && disabled) {
            additionalProps['aria-disabled'] = disabled;
        }
        if (isNativeButton && (!focusableWhenDisabled || isNonFocusableComposite)) {
            additionalProps.disabled = disabled;
        }
        return additionalProps;
    }, [
        composite,
        disabled,
        focusableWhenDisabled,
        isFocusableComposite,
        isNonFocusableComposite,
        isNativeButton,
        tabIndexProp
    ]);
    return {
        props
    };
}
}),
"[project]/node_modules/@base-ui/react/internals/use-button/useButton.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useButton",
    ()=>useButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$utils$2f$useStableCallback$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/utils/useStableCallback.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$utils$2f$error$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/utils/error.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$utils$2f$safeReact$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/utils/safeReact.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$utils$2f$useIsoLayoutEffect$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/utils/useIsoLayoutEffect.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$merge$2d$props$2f$mergeProps$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/react/merge-props/mergeProps.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$composite$2f$root$2f$CompositeRootContext$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/react/internals/composite/root/CompositeRootContext.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$utils$2f$useFocusableWhenDisabled$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/react/utils/useFocusableWhenDisabled.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
function useButton(parameters = {}) {
    const { disabled = false, focusableWhenDisabled, tabIndex = 0, native: isNativeButton = true, composite: compositeProp } = parameters;
    const elementRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const compositeRootContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$composite$2f$root$2f$CompositeRootContext$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCompositeRootContext"])(true);
    const isCompositeItem = compositeProp ?? compositeRootContext !== undefined;
    const { props: focusableWhenDisabledProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$utils$2f$useFocusableWhenDisabled$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFocusableWhenDisabled"])({
        focusableWhenDisabled,
        disabled,
        composite: isCompositeItem,
        tabIndex,
        isNativeButton
    });
    if ("TURBOPACK compile-time truthy", 1) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
            if (!elementRef.current) {
                return;
            }
            const isButtonTag = isButtonElement(elementRef.current);
            if (isNativeButton) {
                if (!isButtonTag) {
                    const ownerStackMessage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$utils$2f$safeReact$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SafeReact"].captureOwnerStack?.() || '';
                    const message = 'A component that acts as a button expected a native <button> because the ' + '`nativeButton` prop is true. Rendering a non-<button> removes native button ' + 'semantics, which can impact forms and accessibility. Use a real <button> in the ' + '`render` prop, or set `nativeButton` to `false`.';
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$utils$2f$error$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["error"])(`${message}${ownerStackMessage}`);
                }
            } else if (isButtonTag) {
                const ownerStackMessage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$utils$2f$safeReact$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SafeReact"].captureOwnerStack?.() || '';
                const message = 'A component that acts as a button expected a non-<button> because the `nativeButton` ' + 'prop is false. Rendering a <button> keeps native behavior while Base UI applies ' + 'non-native attributes and handlers, which can add unintended extra attributes (such ' + 'as `role` or `aria-disabled`). Use a non-<button> in the `render` prop, or set ' + '`nativeButton` to `true`.';
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$utils$2f$error$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["error"])(`${message}${ownerStackMessage}`);
            }
        }, [
            isNativeButton
        ]);
    }
    // handles a disabled composite button rendering another button, e.g.
    // <Toolbar.Button disabled render={<Menu.Trigger />} />
    // the `disabled` prop needs to pass through 2 `useButton`s then finally
    // delete the `disabled` attribute from DOM
    const updateDisabled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        const element = elementRef.current;
        if (!isButtonElement(element)) {
            return;
        }
        if (isCompositeItem && disabled && focusableWhenDisabledProps.disabled === undefined && element.disabled) {
            element.disabled = false;
        }
    }, [
        disabled,
        focusableWhenDisabledProps.disabled,
        isCompositeItem
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$utils$2f$useIsoLayoutEffect$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])(updateDisabled, [
        updateDisabled
    ]);
    const getButtonProps = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((externalProps = {})=>{
        const { onClick: externalOnClick, onMouseDown: externalOnMouseDown, onKeyUp: externalOnKeyUp, onKeyDown: externalOnKeyDown, onPointerDown: externalOnPointerDown, ...otherExternalProps } = externalProps;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$merge$2d$props$2f$mergeProps$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeProps"])({
            onClick (event) {
                if (disabled) {
                    event.preventDefault();
                    return;
                }
                externalOnClick?.(event);
            },
            onMouseDown (event) {
                if (!disabled) {
                    externalOnMouseDown?.(event);
                }
            },
            onKeyDown (event) {
                if (disabled) {
                    return;
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$merge$2d$props$2f$mergeProps$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeEventPreventable"])(event);
                externalOnKeyDown?.(event);
                if (event.baseUIHandlerPrevented) {
                    return;
                }
                const isCurrentTarget = event.target === event.currentTarget;
                const currentTarget = event.currentTarget;
                const isButton = isButtonElement(currentTarget);
                const isLink = !isNativeButton && isValidLinkElement(currentTarget);
                const shouldClick = isCurrentTarget && (isNativeButton ? isButton : !isLink);
                const isEnterKey = event.key === 'Enter';
                const isSpaceKey = event.key === ' ';
                const role = currentTarget.getAttribute('role');
                const isTextNavigationRole = role?.startsWith('menuitem') || role === 'option' || role === 'gridcell';
                if (isCurrentTarget && isCompositeItem && isSpaceKey) {
                    if (event.defaultPrevented && isTextNavigationRole) {
                        return;
                    }
                    event.preventDefault();
                    if (isLink || isNativeButton && isButton) {
                        currentTarget.click();
                        event.preventBaseUIHandler();
                    } else if (shouldClick) {
                        externalOnClick?.(event);
                        event.preventBaseUIHandler();
                    }
                    return;
                }
                // Keyboard accessibility for native and non-native elements.
                if (shouldClick) {
                    if (!isNativeButton && (isSpaceKey || isEnterKey)) {
                        event.preventDefault();
                    }
                    if (!isNativeButton && isEnterKey) {
                        externalOnClick?.(event);
                    }
                }
            },
            onKeyUp (event) {
                if (disabled) {
                    return;
                }
                // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
                // https://codesandbox.io/p/sandbox/button-keyup-preventdefault-dn7f0
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$merge$2d$props$2f$mergeProps$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeEventPreventable"])(event);
                externalOnKeyUp?.(event);
                if (event.target === event.currentTarget && isNativeButton && isCompositeItem && isButtonElement(event.currentTarget) && event.key === ' ') {
                    event.preventDefault();
                    return;
                }
                if (event.baseUIHandlerPrevented) {
                    return;
                }
                // Keyboard accessibility for non interactive elements
                if (event.target === event.currentTarget && !isNativeButton && !isCompositeItem && event.key === ' ') {
                    externalOnClick?.(event);
                }
            },
            onPointerDown (event) {
                if (disabled) {
                    event.preventDefault();
                    return;
                }
                externalOnPointerDown?.(event);
            }
        }, isNativeButton ? {
            type: 'button'
        } : {
            role: 'button'
        }, focusableWhenDisabledProps, otherExternalProps);
    }, [
        disabled,
        focusableWhenDisabledProps,
        isCompositeItem,
        isNativeButton
    ]);
    const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$utils$2f$useStableCallback$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStableCallback"])((element)=>{
        elementRef.current = element;
        updateDisabled();
    });
    return {
        getButtonProps,
        buttonRef
    };
}
function isButtonElement(elem) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHTMLElement"])(elem) && elem.tagName === 'BUTTON';
}
function isValidLinkElement(elem) {
    return Boolean(elem?.tagName === 'A' && elem?.href);
}
}),
"[project]/node_modules/@base-ui/utils/useMergedRefs.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMergedRefs",
    ()=>useMergedRefs,
    "useMergedRefsN",
    ()=>useMergedRefsN
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$utils$2f$useRefWithInit$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/utils/useRefWithInit.mjs [app-ssr] (ecmascript)");
;
function useMergedRefs(a, b, c, d) {
    const forkRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$utils$2f$useRefWithInit$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRefWithInit"])(createForkRef).current;
    if (didChange(forkRef, a, b, c, d)) {
        update(forkRef, [
            a,
            b,
            c,
            d
        ]);
    }
    return forkRef.callback;
}
function useMergedRefsN(refs) {
    const forkRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$utils$2f$useRefWithInit$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRefWithInit"])(createForkRef).current;
    if (didChangeN(forkRef, refs)) {
        update(forkRef, refs);
    }
    return forkRef.callback;
}
function createForkRef() {
    return {
        callback: null,
        cleanup: null,
        refs: []
    };
}
function didChange(forkRef, a, b, c, d) {
    // prettier-ignore
    return forkRef.refs[0] !== a || forkRef.refs[1] !== b || forkRef.refs[2] !== c || forkRef.refs[3] !== d;
}
function didChangeN(forkRef, newRefs) {
    return forkRef.refs.length !== newRefs.length || forkRef.refs.some((ref, index)=>ref !== newRefs[index]);
}
function update(forkRef, refs) {
    forkRef.refs = refs;
    if (refs.every((ref)=>ref == null)) {
        forkRef.callback = null;
        return;
    }
    forkRef.callback = (instance)=>{
        if (forkRef.cleanup) {
            forkRef.cleanup();
            forkRef.cleanup = null;
        }
        if (instance != null) {
            const cleanupCallbacks = Array(refs.length).fill(null);
            for(let i = 0; i < refs.length; i += 1){
                const ref = refs[i];
                if (ref == null) {
                    continue;
                }
                switch(typeof ref){
                    case 'function':
                        {
                            const refCleanup = ref(instance);
                            if (typeof refCleanup === 'function') {
                                cleanupCallbacks[i] = refCleanup;
                            }
                            break;
                        }
                    case 'object':
                        {
                            ref.current = instance;
                            break;
                        }
                    default:
                }
            }
            forkRef.cleanup = ()=>{
                for(let i = 0; i < refs.length; i += 1){
                    const ref = refs[i];
                    if (ref == null) {
                        continue;
                    }
                    switch(typeof ref){
                        case 'function':
                            {
                                const cleanupCallback = cleanupCallbacks[i];
                                if (typeof cleanupCallback === 'function') {
                                    cleanupCallback();
                                } else {
                                    ref(null);
                                }
                                break;
                            }
                        case 'object':
                            {
                                ref.current = null;
                                break;
                            }
                        default:
                    }
                }
            };
        }
    };
}
}),
"[project]/node_modules/@base-ui/utils/reactVersion.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isReactVersionAtLeast",
    ()=>isReactVersionAtLeast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const majorVersion = parseInt(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"], 10);
function isReactVersionAtLeast(reactVersionToCheck) {
    return majorVersion >= reactVersionToCheck;
}
}),
"[project]/node_modules/@base-ui/utils/getReactElementRef.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getReactElementRef",
    ()=>getReactElementRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$utils$2f$reactVersion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/utils/reactVersion.mjs [app-ssr] (ecmascript)");
;
;
function getReactElementRef(element) {
    if (!/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](element)) {
        return null;
    }
    const reactElement = element;
    const propsWithRef = reactElement.props;
    return ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$utils$2f$reactVersion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReactVersionAtLeast"])(19) ? propsWithRef?.ref : reactElement.ref) ?? null;
}
}),
"[project]/node_modules/@base-ui/utils/warn.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "warn",
    ()=>warn
]);
let set;
if ("TURBOPACK compile-time truthy", 1) {
    set = new Set();
}
function warn(...messages) {
    if ("TURBOPACK compile-time truthy", 1) {
        const messageKey = messages.join(' ');
        if (!set.has(messageKey)) {
            set.add(messageKey);
            console.warn(`Base UI: ${messageKey}`);
        }
    }
}
}),
"[project]/node_modules/@base-ui/utils/empty.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EMPTY_ARRAY",
    ()=>EMPTY_ARRAY,
    "EMPTY_OBJECT",
    ()=>EMPTY_OBJECT,
    "NOOP",
    ()=>NOOP
]);
function NOOP() {}
const EMPTY_ARRAY = Object.freeze([]);
const EMPTY_OBJECT = Object.freeze({});
}),
"[project]/node_modules/@base-ui/react/internals/getStateAttributesProps.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getStateAttributesProps",
    ()=>getStateAttributesProps
]);
function getStateAttributesProps(state, customMapping) {
    const props = {};
    /* eslint-disable-next-line guard-for-in */ for(const key in state){
        const value = state[key];
        if (customMapping?.hasOwnProperty(key)) {
            const customProps = customMapping[key](value);
            if (customProps != null) {
                Object.assign(props, customProps);
            }
            continue;
        }
        if (value === true) {
            props[`data-${key.toLowerCase()}`] = '';
        } else if (value) {
            props[`data-${key.toLowerCase()}`] = value.toString();
        }
    }
    return props;
}
}),
"[project]/node_modules/@base-ui/react/utils/resolveClassName.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * If the provided className is a string, it will be returned as is.
 * Otherwise, the function will call the className function with the state as the first argument.
 *
 * @param className
 * @param state
 */ __turbopack_context__.s([
    "resolveClassName",
    ()=>resolveClassName
]);
function resolveClassName(className, state) {
    return typeof className === 'function' ? className(state) : className;
}
}),
"[project]/node_modules/@base-ui/react/utils/resolveStyle.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * If the provided style is an object, it will be returned as is.
 * Otherwise, the function will call the style function with the state as the first argument.
 *
 * @param style
 * @param state
 */ __turbopack_context__.s([
    "resolveStyle",
    ()=>resolveStyle
]);
function resolveStyle(style, state) {
    return typeof style === 'function' ? style(state) : style;
}
}),
"[project]/node_modules/@base-ui/react/internals/useRenderElement.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRenderElement",
    ()=>useRenderElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$utils$2f$useMergedRefs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/utils/useMergedRefs.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$utils$2f$getReactElementRef$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/utils/getReactElementRef.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$utils$2f$mergeObjects$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/utils/mergeObjects.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$utils$2f$warn$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/utils/warn.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$utils$2f$empty$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/utils/empty.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$getStateAttributesProps$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/react/internals/getStateAttributesProps.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$utils$2f$resolveClassName$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/react/utils/resolveClassName.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$utils$2f$resolveStyle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/react/utils/resolveStyle.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$merge$2d$props$2f$mergeProps$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/react/merge-props/mergeProps.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
function useRenderElement(element, componentProps, params = {}) {
    const renderProp = componentProps.render;
    const outProps = useRenderElementProps(componentProps, params);
    if (params.enabled === false) {
        return null;
    }
    const state = params.state ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$utils$2f$empty$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EMPTY_OBJECT"];
    return evaluateRenderProp(element, renderProp, outProps, state);
}
/**
 * Computes render element final props.
 */ function useRenderElementProps(componentProps, params = {}) {
    const { className: classNameProp, style: styleProp, render: renderProp } = componentProps;
    const { state = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$utils$2f$empty$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EMPTY_OBJECT"], ref, props, stateAttributesMapping, enabled = true } = params;
    const className = enabled ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$utils$2f$resolveClassName$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveClassName"])(classNameProp, state) : undefined;
    const style = enabled ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$utils$2f$resolveStyle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveStyle"])(styleProp, state) : undefined;
    const stateProps = enabled ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$getStateAttributesProps$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStateAttributesProps"])(state, stateAttributesMapping) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$utils$2f$empty$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EMPTY_OBJECT"];
    const resolvedProps = enabled && props ? resolveRenderFunctionProps(props) : undefined;
    // Ensure outProps is always a new mutable object when enabled, never EMPTY_OBJECT.
    // This prevents potential TypeError when setting ref, className, or style properties,
    // since EMPTY_OBJECT is frozen and mutations would fail in strict mode.
    const outProps = enabled ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$utils$2f$mergeObjects$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeObjects"])(stateProps, resolvedProps) ?? {} : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$utils$2f$empty$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EMPTY_OBJECT"];
    // SAFETY: The `useMergedRefs` functions use a single hook to store the same value,
    // switching between them at runtime is safe. If this assertion fails, React will
    // throw at runtime anyway.
    // This also skips the `useMergedRefs` call on the server, which is fine because
    // refs are not used on the server side.
    /* eslint-disable react-hooks/rules-of-hooks */ if (typeof document !== 'undefined') {
        if (!enabled) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$utils$2f$useMergedRefs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMergedRefs"])(null, null);
        } else if (Array.isArray(ref)) {
            outProps.ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$utils$2f$useMergedRefs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMergedRefsN"])([
                outProps.ref,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$utils$2f$getReactElementRef$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getReactElementRef"])(renderProp),
                ...ref
            ]);
        } else {
            outProps.ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$utils$2f$useMergedRefs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMergedRefs"])(outProps.ref, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$utils$2f$getReactElementRef$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getReactElementRef"])(renderProp), ref);
        }
    }
    if (!enabled) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$utils$2f$empty$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EMPTY_OBJECT"];
    }
    if (className !== undefined) {
        outProps.className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$merge$2d$props$2f$mergeProps$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClassNames"])(outProps.className, className);
    }
    if (style !== undefined) {
        outProps.style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$utils$2f$mergeObjects$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeObjects"])(outProps.style, style);
    }
    return outProps;
}
function resolveRenderFunctionProps(props) {
    if (Array.isArray(props)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$merge$2d$props$2f$mergeProps$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergePropsN"])(props);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$merge$2d$props$2f$mergeProps$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeProps"])(undefined, props);
}
// The symbol React uses internally for lazy components
// https://github.com/facebook/react/blob/a0566250b210499b4c5677f5ac2eedbd71d51a1b/packages/shared/ReactSymbols.js#L31
//
// TODO delete once https://github.com/facebook/react/issues/32392 is fixed
const REACT_LAZY_TYPE = Symbol.for('react.lazy');
const COMPONENT_IDENTIFIER_PATTERN = /^[A-Z][A-Za-z0-9$]*$/;
const LOWERCASE_CHARACTER_PATTERN = /[a-z]/;
function evaluateRenderProp(element, render, props, state) {
    if (render) {
        if (typeof render === 'function') {
            if ("TURBOPACK compile-time truthy", 1) {
                warnIfRenderPropLooksLikeComponent(render);
            }
            return render(props, state);
        }
        const mergedProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$merge$2d$props$2f$mergeProps$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeProps"])(props, render.props);
        mergedProps.ref = props.ref;
        let newElement = render;
        // Workaround for https://github.com/facebook/react/issues/32392
        // This works because the toArray() logic unwrap lazy element type in
        // https://github.com/facebook/react/blob/a0566250b210499b4c5677f5ac2eedbd71d51a1b/packages/react/src/ReactChildren.js#L186
        if (newElement?.$$typeof === REACT_LAZY_TYPE) {
            const children = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].toArray(render);
            newElement = children[0];
        }
        // There is a high number of indirections, the error message thrown by React.cloneElement() is
        // hard to use for developers, this logic provides a better context.
        //
        // Our general guideline is to never change the control flow depending on the environment.
        // However, React.cloneElement() throws if React.isValidElement() is false,
        // so we can throw before with custom message.
        if ("TURBOPACK compile-time truthy", 1) {
            if (!/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](newElement)) {
                // TODO: fix mui/no-guarded-throw
                // eslint-disable-next-line mui/no-guarded-throw
                throw new Error([
                    'Base UI: The `render` prop was provided an invalid React element as `React.isValidElement(render)` is `false`.',
                    'A valid React element must be provided to the `render` prop because it is cloned with props to replace the default element.',
                    'https://base-ui.com/r/invalid-render-prop'
                ].join('\n'));
            }
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"](newElement, mergedProps);
    }
    if (element) {
        if (typeof element === 'string') {
            return renderTag(element, props);
        }
    }
    // Unreachable, but the typings on `useRenderElement` need to be reworked
    // to annotate it correctly.
    throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: Render element or function are not defined.' : "TURBOPACK unreachable");
}
function warnIfRenderPropLooksLikeComponent(renderFn) {
    const functionName = renderFn.name;
    if (functionName.length === 0) {
        return;
    }
    if (!COMPONENT_IDENTIFIER_PATTERN.test(functionName)) {
        return;
    }
    if (!LOWERCASE_CHARACTER_PATTERN.test(functionName)) {
        return;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$utils$2f$warn$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["warn"])(`The \`render\` prop received a function named \`${functionName}\` that starts with an uppercase letter.`, 'This usually means a React component was passed directly as `render={Component}`.', 'Base UI calls `render` as a plain function, which can break the Rules of Hooks during reconciliation.', 'If this is an intentional render callback, rename it to start with a lowercase letter.', 'Use `render={<Component />}` or `render={(props) => <Component {...props} />}` instead.', 'https://base-ui.com/r/invalid-render-prop');
}
function renderTag(Tag, props) {
    if (Tag === 'button') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("button", {
            type: "button",
            ...props,
            key: props.key
        });
    }
    if (Tag === 'img') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("img", {
            alt: "",
            ...props,
            key: props.key
        });
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Tag, props);
}
}),
"[project]/node_modules/@base-ui/react/button/Button.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$use$2d$button$2f$useButton$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/react/internals/use-button/useButton.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$useRenderElement$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/react/internals/useRenderElement.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function Button(componentProps, forwardedRef) {
    const { render, className, disabled = false, focusableWhenDisabled = false, nativeButton = true, style, ...elementProps } = componentProps;
    const { getButtonProps, buttonRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$use$2d$button$2f$useButton$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useButton"])({
        disabled,
        focusableWhenDisabled,
        native: nativeButton
    });
    const state = {
        disabled
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$useRenderElement$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('button', componentProps, {
        state,
        ref: [
            forwardedRef,
            buttonRef
        ],
        props: [
            elementProps,
            getButtonProps
        ]
    });
});
if ("TURBOPACK compile-time truthy", 1) Button.displayName = "Button";
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ChevronDown
]);
/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }
    ]
];
const ChevronDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("chevron-down", __iconNode);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-ssr] (ecmascript) <export default as ChevronDown>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronDown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=_00~xg7_._.js.map