// ==UserScript==
// @name         ZIVE.cz MOBILMANIA.cz - remove ads
// @match        *://*.zive.cz/*
// @match        *://*.mobilmania.cz/*
// @grant        none
// @icon         https://cdn.rawgit.com/MartinMajor/tampermoney-scripts/master/zive-ads/icon.png
// @downloadURL  https://cdn.rawgit.com/MartinMajor/tampermoney-scripts/master/zive-ads/script.js
// @version      1.1
// ==/UserScript==
(function() {
    'use strict';

    var xpath = "//script[contains(text(),'_SAS.ad')]";
    var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    matchingElement.parentElement.parentElement.remove();
})();
