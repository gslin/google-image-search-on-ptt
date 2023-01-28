// ==UserScript==
// @name         Google Image Search on Ptt
// @namespace    https://wiki.gslin.org/wiki/GoogleImageSearchOnPtt
// @version      0.20230129.0
// @description  Add Google image search buttons on Ptt.
// @author       Gea-Suan Lin <darkkiller@gmail.com>
// @match        https://www.ptt.cc/bbs/*/*.html
// @grant        GM_openInTab
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    function ev() {
        let img_re = new RegExp('\.(gif|jpeg|jpg|png)$');
        let timeout = 0;

        document.querySelectorAll('#main-content a').forEach(function(el){
            let href = el.getAttribute('href');
            if (!href.match(img_re)) {
                return;
            }

            let url = 'https://lens.google.com/uploadbyurl?url=' + encodeURIComponent(href);
            setTimeout(function() {
                GM_openInTab(url, true);
            }, timeout);
            timeout += 1500;
        });
    };

    let btn = document.createElement('button');
    btn.addEventListener('click', ev);
    btn.innerHTML = 'Google Image Search';
    btn.setAttribute('style', 'height: 1.5em; margin-bottom: 3px; vertical-align: text-bottom;');
    document.querySelectorAll('.article-metaline')[2].appendChild(btn);
})();
