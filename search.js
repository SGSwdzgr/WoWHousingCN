window.WHH_SEARCH = (function () {

  function reverseLookup(dict, cn) {
    for (const [en, zh] of Object.entries(dict)) {
      if (zh === cn || zh.includes(cn)) {
        return en;
      }
    }
    return null;
  }

  function enableChineseSearch(dict) {
    const form = document.querySelector('form[action="/decor/"]');
    if (!form) return;

    form.addEventListener('submit', e => {
      const input = form.querySelector('input[name="q"]');
      if (!input) return;

      const v = input.value.trim();
      if (!v) return;

      const en = reverseLookup(dict, v);
      if (en) input.value = en;
    });
  }

  return {
    enableChineseSearch
  };
})();
