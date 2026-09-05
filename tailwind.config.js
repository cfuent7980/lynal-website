/** Built with `npm run build:css`. Theme extracted from the former inline CDN config. */
module.exports = {
  "content": [
    "./*.html"
  ],
  "theme": {
    "extend": {
      "fontFamily": {
        "display": [
          "Outfit",
          "system-ui",
          "sans-serif"
        ],
        "sans": [
          "\"DM Sans\"",
          "system-ui",
          "sans-serif"
        ]
      },
      "colors": {
        "bg": "#0e0d14",
        "card": "#15141e",
        "card2": "#1a1924",
        "line": "#1e1c2a",
        "ink": "#0a0910",
        "t1": "#e8e8f0",
        "t2": "#6a7a8a",
        "t2r": "#8c97a6",
        "t3": "#3a3a52",
        "tb": "#aeb4c6",
        "brand": {
          "DEFAULT": "#3a7ab8",
          "bright": "#5aa6e6",
          "deep": "#2a5d92"
        },
        "disc": "#3a7ab8",
        "phys": "#3a7a4a",
        "ment": "#9a7ac8",
        "fin": "#c8b86a",
        "goal": "#8a6a2a",
        "soc": "#c85a7a",
        "good": "#5fae78",
        "bad": "#d07a7a"
      },
      "boxShadow": {
        "glow": "0 0 0 1px rgba(58,122,184,.22), 0 6px 20px -6px rgba(58,122,184,.45)",
        "card": "0 1px 2px rgba(0,0,0,.6), 0 8px 24px -8px rgba(0,0,0,.7), 0 40px 80px -32px rgba(0,0,0,.85)"
      }
    }
  },
  "corePlugins": {
    "preflight": true
  }
}
