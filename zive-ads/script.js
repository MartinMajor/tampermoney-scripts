// ==UserScript==
// @name         ZIVE.cz MOBILMANIA.cz - remove ads
// @match        *://*.zive.cz/*
// @match        *://*.mobilmania.cz/*
// @grant        none
// @icon         https://cdn.rawgit.com/MartinMajor/tampermoney-scripts/master/zive-ads/icon.png
// @downloadURL  https://cdn.rawgit.com/MartinMajor/tampermoney-scripts/master/zive-ads/script.js
// @version      1.0
// ==/UserScript==
(function() {
    'use strict';

    document.getElementsByClassName('branding-wrapper')[0].previousSibling.previousSibling.remove();
})();
