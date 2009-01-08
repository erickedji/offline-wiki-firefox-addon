/*
 * Last edit on 03/01/2009 by
 * KEDJI Komlan Akpédjé <eric.kedji@gmail.com>
 */

Components.utils.import("resource://offlinewiki-modules/utils.js");
var offlineWiki = {
    setup: function () { }
    ,statusBarClicked: function () {
        Application.activeWindow.open(
            Utils.url("chrome://offlinewiki/content/home.html")).focus();    
    }

};
window.addEventListener("load", function(e) { offlineWiki.setup(); }, false);
