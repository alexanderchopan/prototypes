// Machines design tokens — JS mirror of styles/tokens.css
// Use in JSX: import style from inline, reference window.MachinesTokens.
window.MachinesTokens = {
  C: {
    bg: "#000000",
    text: "#ffffff",
    surface: "rgba(255,255,255,0.045)",
    border:  "rgba(255,255,255,0.07)",
    muted:   "rgba(255,255,255,0.38)",
    dim:     "rgba(255,255,255,0.15)",
    orange: "#FF4500",
    yellow: "#FFCC00",
    green:  "#00CC66",
    mint:   "#6ee7b7",
    purple: "#7B2FFF",
    blue:   "#0066FF",
    pink:   "#FF1493",
    red:    "#ef4444",
    gray:   "#A0A0A0",
  },
  radius: { r4: 4, r6: 6, r8: 8, r10: 10, r12: 12, r14: 14, r18: 18, r22: 22, r99: 999 },
  ease: {
    standard: "cubic-bezier(0.32,0.72,0,1)",
    spring:   "cubic-bezier(0.34,1.56,0.64,1)",
    outSoft:  "cubic-bezier(0.22,1,0.36,1)",
    inOut:    "cubic-bezier(0.4,0,0.2,1)",
  },
  tile: (extra = {}) => ({
    background: "rgba(255,255,255,0.045)",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: 18,
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 4px 12px rgba(0,0,0,0.25)",
    position: "relative",
    ...extra,
  }),
};
