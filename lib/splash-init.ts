/**
 * Runs before paint: marks the document once the splash has been seen this session,
 * so `.splash` stays hidden on reloads and later page views.
 */
export const splashInitScript = `
(function () {
  try {
    var key = "portfolio-splash-seen";
    if (sessionStorage.getItem(key)) document.documentElement.dataset.splashSeen = "";
    else sessionStorage.setItem(key, "1");
  } catch (e) {}
})();
`;
