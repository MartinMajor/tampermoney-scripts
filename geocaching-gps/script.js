// ==UserScript==
// @name         Geocaching.com - show GPS from images
// @match        https://www.geocaching.com/seek/gallery.aspx*
// @match        https://www.geocaching.com/profile/?guid=*
// @require      https://cdn.rawgit.com/exif-js/exif-js/master/exif.js
// @grant        GM_xmlhttpRequest
// @icon         https://cdn.rawgit.com/MartinMajor/tampermoney-scripts/master/geocaching-gps/icon.png
// @downloadURL  https://cdn.rawgit.com/MartinMajor/tampermoney-scripts/master/geocaching-gps/script.js
// @version      1.0
// ==/UserScript==

(function() {
    'use strict';

    var links = $('table.Table.GalleryTable td a');
    links.each(function(index) {
        var image = $(this).attr('href');
        var largeImage = image.replace(/.+\/large\//, "https://s3.amazonaws.com/gs-geo-images/");
        var exifInfo = 'http://regex.info/exif.cgi?imgurl=' + encodeURIComponent(largeImage);

        var elem = $(this);

        GM_xmlhttpRequest({
            method: "GET",
            url: largeImage,
            responseType: 'arraybuffer',
            onload: function(response) {
                var exif = EXIF.readFromBinaryFile(response.response);
                elem.after('(<a href="http://regex.info/exif.cgi?imgurl=' + encodeURIComponent(largeImage) + '">EXIF</a>)');
                if (typeof exif.GPSLatitude !== 'undefined') {
                    var lat = exif.GPSLatitude;
                    var lon = exif.GPSLongitude;
                    var latRef = exif.GPSLatitudeRef || "N";
                    var lonRef = exif.GPSLongitudeRef || "E";
                    lat = (lat[0] + lat[1]/60 + lat[2]/3600) * (latRef === "N" ? 1 : -1);
                    lon = (lon[0] + lon[1]/60 + lon[2]/3600) * (lonRef === "E" ? 1 : -1);

                    if (lat > 0 || lon > 0) {
                        elem.after('<a href="https://www.google.com/maps/preview?q=' + encodeURIComponent("" + lat + ", " + lon) + '" style="color: #F00;">!MAP!</a> ');
                    }
                }

                // alert(JSON.stringify(exif));
            }
        });
    });
})();
