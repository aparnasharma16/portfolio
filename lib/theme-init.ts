/** localStorage key for the chosen theme. Kept here (server-safe) so the root layout can use it. */
export const THEME_STORAGE_KEY = 'portfolio-theme';

export const themeInitScript = `
(function () {
  try {
    var k = "${THEME_STORAGE_KEY}";
    var t = localStorage.getItem(k);
    var root = document.documentElement;
    if (t === "dark") root.classList.add("dark");
    else if (t === "light") root.classList.remove("dark");
    else if (window.matchMedia("(prefers-color-scheme: dark)").matches)
      root.classList.add("dark");
  } catch (e) {}
})();
`;
