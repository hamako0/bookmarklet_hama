try {
  (function () {
    (($) => {
      window.$ = $;
      let timestamp = new Date().getTime();
      let dir = "https://hamako0.github.io/wp_tools/wp_drop";
      jQuery("body")
        .append('<div id="root"></div>')
        .append(`<link rel="stylesheet" href="${dir}/css/main.css?${timestamp}">`)
        .append(`<script src="${dir}/js/main.js?${timestamp}"></script>`);
    })(jQuery);
  })();
} catch (e) {
  alert("ブックマクレッ・エラー\n" + e);
}
