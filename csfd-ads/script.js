// ==UserScript==
// @name         CSFD.cz - remove ads
// @match        *://www.csfd.cz/*
// @grant        none
// @icon         https://cdn.rawgit.com/MartinMajor/tampermoney-scripts/master/csfd-ads/icon.png
// @downloadURL  https://cdn.rawgit.com/MartinMajor/tampermoney-scripts/master/csfd-ads/script.js
// @version      1.0
// ==/UserScript==

(function() {
    'use strict';

    $("div[id$='ad-wrapper']").remove();
})();
