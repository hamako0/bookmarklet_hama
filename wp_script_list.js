try {
  (function () {
    (async $ => {
      const width = 880;
      const style = `<style>
  :root {
    --bg: #0f172a;
    --panel: rgba(255, 255, 255, 0.08);
    --border: rgba(255, 255, 255, 0.15);
    --text: #e2e8f0;
    --muted: #94a3b8;
    --accent: #7c3aed;
    --accent-2: #14b8a6;
  }
  #modal_wrap { backdrop-filter: blur(8px); }
  #modal_outer {
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.04));
    border: 1px solid var(--border);
    border-radius: 18px;
    box-shadow: 0 25px 70px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.08);
  }
  #modal_inner {
    color: var(--text);
    font-family: "DM Sans", "Noto Sans JP", "Helvetica Neue", system-ui, sans-serif;
  }
  #modal_inner p { margin: 0 0 16px; font-size: 26px; letter-spacing: 0.02em; }
  #modal_body { display: flex; flex-direction: column; gap: 18px; }
  #script_list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 12px;
    padding: 0;
    margin: 0;
    list-style: none;
    letter-spacing: normal;
  }
  #script_list li { margin: 0; }
  #script_list li button {
    -webkit-appearance: none;
    background: linear-gradient(135deg, var(--accent), var(--accent-2));
    border: 1px solid rgba(255, 255, 255, 0.12);
    color: #f8fafc;
    display: block;
    width: 100%;
    padding: 14px 12px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 12px;
    outline: 0;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
    transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
  }
  #script_list li button:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 40px rgba(124, 58, 237, 0.35);
    filter: brightness(1.03);
    cursor: pointer;
  }
  #script_list li button:active { transform: translateY(0); }
  #php_version_notice {
    font-size: 18px;
    font-weight: 700;
    color: #f97316;
    border: 1px solid rgba(249, 115, 22, 0.45);
    background: rgba(249, 115, 22, 0.08);
    padding: 10px 12px;
    border-radius: 12px;
    margin: 0 0 8px;
  }
  #php_version_notice a { color: #f8fafc; font-size: 14px; text-decoration: underline; }
</style>`;

      const epressbs = $(`
    <p>制作補助ツール</p>
    <ul id="script_list">
      <!-- <li><button id="wp_default_data_setting">初期設定</button></li> -->
      <li><button id="wp_drop">自動投入（固定）</button></li>
      <!-- <li><button id="wp_auto_post">自動投入（投稿）</button></li> -->
      <li><button id="wp_drop_slug">自動投入（固定）<br>（サブディレクトリ運営）</button></li>
      <!-- <li><button id="wp_meta">メタ情報自動設定</button></li> -->
      <li><button id="wp_upload">ファイルアップロード</button></li>
      <li><button id="wp_upload_slug">ファイルアップロード<br>（サブディレクトリ運営）</button></li>
      <!-- <li><button id="wp_contact_mail_build">問い合わせメール自動生成</button></li> -->
      <!-- <li><button id="wp_media">メディアアップロード</button></li> -->
      <!-- <li><button id="wp_mts_data_setting">MTS初期設定</button></li> -->
      <!-- <li><button id="wp_fastest">高速化設定</button></li> -->
    </ul>
    ` + style + `
  `);

      const epressec = $(`
    <p style="line-height: 2;">EPRESS-EC制作補助ツール</p>
    <ul id="script_list">
      <li><button id="ex_drop">DropHTML</button></li>
      <li><button id="ex_category">カテゴリデータ投入</button></li>
      <li><button id="ex_item">ダミー商品登録</button></li>
      <li><button id="ex_upload">ファイルアップロード</button></li>
      <li><button id="ex_common">メタ情報修正</button></li>
    </ul>
    ` + style + `
  `);

      const rook = $(`
    <p style="line-height: 2;">Rook制作補助ツール</p>
    <ul id="script_list">
      <li><button id="image_csv_create">画像csv作成</button></li>
    </ul>
    ` + style + `
  `);

      const seed = $(`
    <p>HPシードWPオプション制作補助ツール</p>
    <ul id="script_list">
      <!-- <li><button id="wp_default_data_setting">初期設定</button></li> -->
      <li><button id="wp_drop">自動投入（固定）</button></li>
      <!-- <li><button id="wp_auto_post">自動投入（投稿）</button></li> -->
      <li><button id="wp_drop_slug">自動投入（固定）（サブディレクトリ運営）</button></li>
      <!-- <li><button id="wp_meta">メタ情報自動設定</button></li> -->
      <li><button id="wp_upload">ファイルアップロード</button></li>
      <!-- <li><button id="wp_contact_mail_build">問い合わせメール自動生成</button></li> -->
      <!-- <li><button id="wp_media">メディアアップロード</button></li> -->
    </ul>
    ` + style + `
  `);

      $(document).delegate('#script_list button', 'click', e => {
        const id = e.target.id;
        const user = e.target.dataset.user;
        $('#modal_wrap').fadeOut(function () {
          $(this).remove();
        });
        (function () {
          const o = { script: id, name: user };
          const d = document;
          const s = d.createElement('script');
          s.type = 'text/javascript';
          s.src = 'https://hamako0.github.io/bookmarklet_hama/' + o.script + '/' + o.script + '.js';
          d.body.appendChild(s);
          d.body.removeChild(s);
        })();
      });

      if (location.pathname.match(/wp-admin/)) {
        const plan = window.PLANTYPE;
        if (typeof plan === 'undefined' || plan === 'epress' || plan === 'quwrof') {
          modal(epressbs, width, 'wp');
        } else if (plan === 'seed') {
          modal(seed, width, 'wp');
        } else {
          modal(epressbs, width, 'wp');
        }
      } else if (location.host.match(/control\.xaas\d?\.jp/)) {
        modal(epressec, width, 'epressec');
      } else if ($.isFunction(getOriginalHost)) {
        modal(rook, width, 'rook');
      }

      async function modal(elements, widthVal, planType) {
        const elem = $('<div>', { id: 'modal_wrap' }).css({
          'z-index': '100',
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          'background-color': 'hsla(223, 22%, 10%, 0.65)'
        }).append(
          $('<div>', { id: 'modal_outer' }).css({
            'box-sizing': 'border-box',
            padding: '24px',
            margin: 'auto',
            position: 'absolute',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
            height: '80%',
            width: 'min(960px, 92vw)'
          }).append(
            $('<div>', { id: 'modal_inner' }).append(
              $('<p>', { id: 'modal_headline' }),
              $('<div>', { id: 'modal_body' })
            ).css({
              'text-align': 'center',
              'max-height': '70vh',
              'overflow-y': 'auto',
              'overflow-x': 'hidden',
              padding: '6px'
            })
          )
        ).hide();

        $('body').append(
          elem.click(function (e) {
            if (e.target.id === 'modal_wrap') {
              $('#modal_wrap').fadeOut('fast');
              $('#modal_body').empty();
            }
          })
        );

        $('#modal_body').append(elements);

        if (planType === 'wp') {
          const version = await phpVersionCheck();
          if (version) {
            $('#script_list').before(`<p id="php_version_notice">${version}<br><a href="https://www.iflag-moo.com/tools/epress/manual/update/602" target="_blank">制作時のPHPバージョンについて</a></p>`);
          }
        }

        $('#modal_wrap').fadeIn('fast');
        $('#modal_outer').width(widthVal + 57);
      }

      async function phpVersionCheck() {
        const obj = { action: 'epress_php_check' };
        const method = 'POST';
        const body = Object.keys(obj)
          .map(key => key + '=' + encodeURIComponent(obj[key]))
          .join('&');
        const headers = {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        };
        let response = await fetch(ajaxurl, { method, headers, body })
          .then(r => {
            return r.status === 200 ? r.text() : false;
          })
          .catch(() => false);
        if (response && response.match(/^7\.2/)) {
          console.log(`Current PHP version: ${response}`);
          return false;
        } else if (response !== false) {
          response = response.replace(/^(\d+?\.\d+?)(\.\d+?)?$/, '$1');
          return `PHPのバージョンは${response}です。`;
        } else {
          return false;
        }
      }
    })(jQuery);
  })();
} catch (e) {
  alert('ブックマークレット・エラー\n' + e);
}
