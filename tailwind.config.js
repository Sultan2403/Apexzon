/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        surface: "#101010",
        "surface-lowest": "#070707",
        "surface-low": "#111111",
        "surface-container": "#151515",
        "surface-high": "#1B1B1B",
        primary: "#F3F0EF",
        "on-surface": "#E5E2E1",
        "on-surface-variant": "#B7B7B7",
        outline: "rgba(255, 255, 255, 0.08)",
        gold: "#D4AF37",
      },
      fontFamily: {
        display: ["Montserrat", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["clamp(3.1rem, 6.4vw, 5.9rem)", { lineHeight: "0.98", letterSpacing: "-0.045em", fontWeight: "800" }],
        headline: ["clamp(2.2rem, 4vw, 4.05rem)", { lineHeight: "1.03", letterSpacing: "-0.035em", fontWeight: "800" }],
        eyebrow: ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.34em", fontWeight: "800" }],
        micro: ["0.68rem", { lineHeight: "1rem", letterSpacing: "0.16em", fontWeight: "800" }],
      },
      maxWidth: {
        container: "1280px",
      },
      spacing: {
        section: "clamp(5rem, 10vw, 9rem)",
        gutter: "clamp(1.25rem, 5vw, 4rem)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(212, 175, 55, 0.18)",
        "gold-soft": "0 0 70px rgba(212, 175, 55, 0.16)",
        card: "0 24px 80px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        "app-shell": "radial-gradient(circle at 74% 5%, rgba(212, 175, 55, 0.09), transparent 18rem), linear-gradient(180deg, #0c0c0c 0%, #101010 42%, #080808 100%)",
        "hero-fade": "linear-gradient(90deg, #0d0d0d 0%, rgba(13, 13, 13, 0.94) 34%, rgba(13, 13, 13, 0.35) 100%)",
        "office-lines": "linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px), linear-gradient(180deg, rgba(255, 255, 255, 0.09), rgba(0, 0, 0, 0.7))",
      },
      borderRadius: {
        brand: "0.125rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translate3d(0, 0, 0) rotate(32deg) skewX(-11deg)" },
          "50%": { transform: "translate3d(0, -18px, 0) rotate(34deg) skewX(-11deg)" },
        },
        "pulse-gold": {
          "0%, 100%": { opacity: "0.18", transform: "scale(1)" },
          "50%": { opacity: "0.34", transform: "scale(1.04)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 800ms ease-out both",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "pulse-gold": "pulse-gold 4.5s ease-in-out infinite",
        shimmer: "shimmer 2.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
