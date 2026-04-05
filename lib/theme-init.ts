export const themeInitScript = `
(function () {
  try {
    var k = "portfolio-theme";
    var t = localStorage.getItem(k);
    var root = document.documentElement;
    if (t === "dark") root.classList.add("dark");
    else if (t === "light") root.classList.remove("dark");
    else if (window.matchMedia("(prefers-color-scheme: dark)").matches)
      root.classList.add("dark");
  } catch (e) {}
})();
`;
