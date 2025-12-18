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

    const inner = text.slice(0, -1).trim();

    if (dict[inner]) {
      return dict[inner] + "：" ;
    }

    return null;
  }

  async function loadTranslations() {
    const files = [
      "DyeColor.json",                //染料
      "Faction.json",                 //声望
      "AreaTable.json",               //小地图区域
      "Achievement.json",             //成就
      "CurrencyTypes.json",           //货币
      "DataTagInfo.json",             //tag详情
      "DataTagGroup.json",            //tag分类
      "DecorSubcategory.json",        //子类别
      "DecorCategory.json",           //类别
      "HouseLevelRewardInfo.json",    //住宅等级奖励
      "NeighborhoodInitiative.json",  //文化节
      "HouseTheme.json",              //住宅主题
      "HouseRoom.json",               //房间类型
      "addons_quest.json",            //任务（筛选）
      "addons_item.json",             //物品（筛选）
      "addons_vendors.json",          //商人（筛选）
      "addons_elements.json",         //网页元素
      "addons_filters.json",          //过滤器
      "HouseDecor.json",              //住宅装饰
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
