/**
 * Runs before paint: hides `.splash` unless this is the session's first visit and it
 * starts on the home page. Deep links (a shared /resume or /work link) open straight
 * to the content they point at.
 */
export const splashInitScript = `
(function () {
  try {
    var key = "portfolio-splash-seen";
    if (sessionStorage.getItem(key) || location.pathname !== "/")
      document.documentElement.dataset.splashSeen = "";
    sessionStorage.setItem(key, "1");
  } catch (e) {}
})();
`;
