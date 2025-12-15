// translator.js
window.WHH_TRANSLATOR = (function () {

  function translateParenthesized(text, dict) {
    if (!text.startsWith("(") || !text.endsWith(")")) return null;

    const inner = text.slice(1, -1).trim();

    if (dict[inner]) {
      return "（" + dict[inner] + "）";
    }

    if (inner.includes(", ")) {
      const parts = inner.split(", ");

      if (parts.length === 2) {
        const partA = parts[0];
        const partB = parts[1];

        const transA = dict[partA] || partA;
        const transB = dict[partB] || partB;

        return "（" + transA + "，" + transB + "）"; 
      }
    }

    return null;
  }

  function translateTrailingColon(text, dict) {
    if (!text.endsWith(":")) return null;

    const inner = text.slice(0, -1).trim(); // 去掉冒号

    if (dict[inner]) {
      return dict[inner] + "：" ; // 全角中文冒号
    }

    return null;
  }

  async function loadTranslations() {
    const files = [
      "DyeColor.json",
      "addons_elements.json",
      "addons_filters.json",
      "addons_vendors.json",
      "addons_item.json",
      "addons_quest.json",
      "Faction.json",
      "AreaTable.json",
      "Achievement.json",
      "CurrencyTypes.json",
      "DataTagInfo.json",
      "DataTagGroup.json",
      "DecorSubcategory.json",
      "DecorCategory.json",
      "addons_endeavors.json",
      "HouseTheme.json",
      "HouseRoom.json",
      "HouseDecor.json",
    ];

    let merged = {};

    for (const file of files) {
      try {
        const url = chrome.runtime.getURL(`translations/${file}`);
        const json = await fetch(url).then(r => r.json());
        merged = { ...merged, ...json };
      } catch (e) {
        console.warn("翻译文件加载失败:", file, e);
      }
    }

    return merged;
  }

  function translateTextNode(node, dict) {
    const text = node.nodeValue.trim();
    if (!text) return;

    const pair = translateParenthesized(text, dict);
    if (pair) {
      node.nodeValue = pair;
      return;
    }

    const colon = translateTrailingColon(text, dict);
    if (colon) {
      node.nodeValue = colon;
      return;
    }

    if (dict[text]) {
      node.nodeValue = dict[text];
      return;
    }

    const pure = text.replace(/\(\d+\)/g, "").trim();
    if (dict[pure]) {
      node.nodeValue = text.replace(pure, dict[pure]);
    }
  }

  function translateElement(el, dict) {
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      translateTextNode(node, dict);
    }
  }

  function translateSelectOptions(dict) {
    document.querySelectorAll("select option").forEach(opt => {
      const raw = opt.textContent.trim();
      if (!raw) return;

      const pair = translateParenthesized(raw, dict);
      if (pair) {
        opt.textContent = pair;
        return;
      }

      const colon = translateTrailingColon(raw, dict);
      if (colon) {
        opt.textContent = colon;
        return;
      }

      if (dict[raw]) {
        opt.textContent = dict[raw];
        return;
      }

      const pure = raw.replace(/\(\d+\)/g, "").trim();
      if (dict[pure]) {
        opt.textContent = raw.replace(pure, dict[pure]);
      }
    });
  }

  return {
    loadTranslations,
    translateElement,
    translateSelectOptions,
  };

})();
