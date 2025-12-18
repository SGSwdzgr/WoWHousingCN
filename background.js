function getTargetUrls(decorId) {
  if (decorId) {
    return {
      wowhead: `https://www.wowhead.com/cn/decor/${decorId}`,
      jiny: `https://db.damijing.com/housedecor/${decorId}`
    };
  }

  return {
    wowhead: "https://www.wowhead.com/cn/decor-gallery",
    jiny: "https://db.damijing.com/housedecor"
  };
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.removeAll(() => {

    chrome.contextMenus.create({
      id: "whh-wowhead",
      title: "跳转至Wowhead",
      contexts: ["page"],
      documentUrlPatterns: ["https://housing.wowdb.com/*"]
    });

    chrome.contextMenus.create({
      id: "whh-jiny",
      title: "跳转至jinY中文数据库",
      contexts: ["page"],
      documentUrlPatterns: ["https://housing.wowdb.com/*"]
    });
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (!tab?.id) return;

  chrome.tabs.sendMessage(tab.id, { type: "WHH_GET_DECOR_ID" }, response => {
    const decorId = response?.decorId;
    const urls = getTargetUrls(decorId);

    if (info.menuItemId === "whh-wowhead") {
      chrome.tabs.create({ url: urls.wowhead });
    }

    if (info.menuItemId === "whh-jiny") {
      chrome.tabs.create({ url: urls.jiny });
    }
  });
});

function updateActionState(tabId, url) {
  if (url && url.startsWith("https://housing.wowdb.com/")) {
    chrome.action.enable(tabId);
  } else {
    chrome.action.disable(tabId);
  }
}

chrome.tabs.onActivated.addListener(async ({ tabId }) => {
  const tab = await chrome.tabs.get(tabId);
  updateActionState(tabId, tab.url);
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    updateActionState(tabId, tab.url);
  }
});
