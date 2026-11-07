/**
 * Runs before paint: tags Apple platforms with `data-os="mac"` so keyboard hints can
 * read ⌘K there and Ctrl K elsewhere (see the `mac:` / `not-mac:` variants in globals.css).
 */
export const platformInitScript = `
(function () {
  try {
    var p = (navigator.userAgentData && navigator.userAgentData.platform) || navigator.platform || "";
    if (/mac|iphone|ipad|ipod/i.test(p)) document.documentElement.dataset.os = "mac";
  } catch (e) {}
})();
`;
