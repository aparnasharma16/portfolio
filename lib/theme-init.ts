/** localStorage key for a pinned theme (`light` or `dark`). No entry means "follow the OS". */
export const THEME_STORAGE_KEY = 'portfolio-theme';

/**
 * Runs before paint: applies a pinned theme by writing it into <meta name="color-scheme">,
 * which the CSS reads (see the `dark` variant in globals.css). Without a pinned theme, or
 * without JS, the meta stays `light dark` and the site follows the OS.
 */
export const themeInitScript = `
(function () {
  try {
    var t = localStorage.getItem("${THEME_STORAGE_KEY}");
    if (t !== "light" && t !== "dark") return;
    var m = document.querySelector('meta[name="color-scheme"]');
    if (!m) {
      m = document.createElement("meta");
      m.name = "color-scheme";
      document.head.appendChild(m);
    }
    m.content = t;
  } catch (e) {}
})();
`;
