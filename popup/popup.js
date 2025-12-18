async function getActiveTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab;
}

function getTargetUrls(decorId) {
  if (decorId) {
    return {
      wowhead: `https://www.wowhead.com/cn/decor/${decorId}`,
      jiny: `https://db.damijing.com/housedecor/${decorId}`,
      hint: `DecorID: ${decorId}`
    };
  }

  return {
    wowhead: "https://www.wowhead.com/cn/decor-gallery",
    jiny: "https://db.damijing.com/housedecor",
    hint: "无DecorID，将跳转至相应装饰浏览页"
  };
}

document.addEventListener("DOMContentLoaded", async () => {
  const tab = await getActiveTab();

  const wowdbActions = document.getElementById("wowdb-actions");
  const fallbackActions = document.getElementById("fallback-actions");
  const hintEl = document.getElementById("hint");

  if (!tab?.url || !tab.url.startsWith("https://housing.wowdb.com/")) {
    fallbackActions.style.display = "flex";
    hintEl.textContent = "当前不在WoWDB页面";

    document.getElementById("open-wowdb").onclick = () => {
      chrome.tabs.create({
        url: "https://housing.wowdb.com/decor/"
      });
      window.close();
    };

    return;
  }

  wowdbActions.style.display = "flex";

  chrome.tabs.sendMessage(
    tab.id,
    { type: "WHH_GET_DECOR_ID" },
    response => {
      const decorId = response?.decorId || null;
      const urls = getTargetUrls(decorId);

      hintEl.textContent = urls.hint;

      document.getElementById("wowhead").onclick = () => {
        chrome.tabs.create({ url: urls.wowhead });
        window.close();
      };

      document.getElementById("jiny").onclick = () => {
        chrome.tabs.create({ url: urls.jiny });
        window.close();
      };
    }
  );
});
