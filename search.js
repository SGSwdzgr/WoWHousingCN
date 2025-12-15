window.WHH_SEARCH = (function () {

  function reverseLookup(dict, cn) {
    for (const [en, zh] of Object.entries(dict)) {
      if (zh === cn || zh.includes(cn)) {
        return en;
      }
    }
    return null;
  }

  function replaceQuery(input, dict) {
    if (!input) return false;

    const v = input.value.trim();
    if (!v) return false;

    const en = reverseLookup(dict, v);
    if (en) {
      input.value = en;
      return true;
    }
    return false;
  }

  function bindForm(form, dict) {
    if (!form || form.__whh_bound) return;
    form.__whh_bound = true;

    form.addEventListener("submit", () => {
      const input = form.querySelector('input[name="q"]');
      replaceQuery(input, dict);
    });
  }

  function bindFilterEnterFix(filterForm, dict) {
    const input = filterForm.querySelector('input[name="q"]');
    if (!input || input.__whh_enter_bound) return;
    input.__whh_enter_bound = true;

    input.addEventListener("keydown", e => {
      if (e.key !== "Enter") return;
      replaceQuery(input, dict);
    }, true);
  }

  function enableChineseSearch(dict) {

    document
      .querySelectorAll('form[action="/decor/"]')
      .forEach(form => bindForm(form, dict));

    const filterForm = document.getElementById("filter-form");
    if (filterForm) {
      bindForm(filterForm, dict);
      bindFilterEnterFix(filterForm, dict);
    }
  }

  return {
    enableChineseSearch
  };
})();
