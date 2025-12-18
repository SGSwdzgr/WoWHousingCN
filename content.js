(async function () {
  console.log("[WoW Housing CN] content script loaded");

  const dict = await WHH_TRANSLATOR.loadTranslations();
  console.log("[WoW Housing CN] translations loaded:", Object.keys(dict).length);

  function applyTranslation() {
  WHH_TRANSLATOR.translateElement(document.body, dict);
  WHH_TRANSLATOR.translateSelectOptions(dict);
}


  applyTranslation();

  const observer = new MutationObserver(() => applyTranslation());
  observer.observe(document.body, { childList: true, subtree: true });

  WHH_SEARCH.enableChineseSearch(dict);
})();


function getDecorIdFromUrl() {
  const match = location.pathname.match(/^\/decor\/(\d+)\//);
  return match ? match[1] : null;
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === "WHH_GET_DECOR_ID") {
    sendResponse({
      decorId: getDecorIdFromUrl()
    });
  }
});
