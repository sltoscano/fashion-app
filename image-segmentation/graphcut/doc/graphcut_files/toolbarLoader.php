window.wibiyaToolbar = window.wibiyaToolbar || {};
wibiyaToolbar.pl = "false";
wibiyaToolbar.nc = "false";
wibiyaToolbar.flashFix = false;
wibiyaToolbar.wibiyaTimeoutId = null;
wibiyaToolbar.preventLoad = (typeof prevent_wibiya_load != "undefined") ? prevent_wibiya_load : false;


if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(obj, start) {
        for (var i = (start || 0), j = this.length; i < j; i++) {
            if (this[i] === obj) {
                return i;
            }
        }
        return -1;
    }
}

function loadjscssfile(filename, filetype, where){
    var fileref;
    if (filetype=="js"){ //if filename is a external JavaScript file
        fileref=document.createElement("script");
        fileref.setAttribute("type","text/javascript");
        fileref.setAttribute("src", filename);
    }
    else if (filetype=="css"){ //if filename is an external CSS file
        fileref=document.createElement("link");
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", filename);
    }
    if (typeof fileref!="undefined"){
        if (where=="head"){
            document.getElementsByTagName("head")[0].appendChild(fileref);
        }
        else{
            document.getElementsByTagName("body")[0].appendChild(fileref);
        }
    }
}

function CheckJQueryLoader(toolbarId)
{
    if (typeof jQuery == "function") {
        clearTimeout(wibiyaToolbar.wibiyaTimeoutId);
        SetToolbarLoad();
    }
    else {
        wibiyaToolbar.wibiyaTimeoutId = setTimeout("CheckJQueryLoader("+toolbarId+");",200);
    }
}

function getQueryParam(name){
    var qString = window.location.search.substring(1).split("&");
    var params = new Array();

    var p;
    for(var i=0; i<qString.length; i++){
        p = qString[i].split("=");
        params[p[0]] = p[1];
    }

    return params[name];
}

function wbpad(number, length) {
    var str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
}

function altToolbarUrl(altToolbar){
    var cdn = getQueryParam("cdn");
    cdn = (typeof cdn=="undefined")?"cdn.wibiya.com":cdn;
    if(!cdn.match(/^(st)?cdn\.wibiya\.(com|local)$/)){
        cdn = "cdn.wibiya.com";
    }

    var toolbarId = altToolbar.match(/\d+/);
    var dir = wbpad(Math.floor(toolbarId / 1000), 4);
    var toolbarUrl = 'http://' + cdn + '/Toolbars/dir_' + dir + '/Toolbar_' + toolbarId + '/' + altToolbar;
    return toolbarUrl;
}


function loadWibiyaToolbar(src){
    var bodyRef = document.getElementsByTagName("body");

    if(bodyRef.length == 0){
        window.wiBodyWaitRetry = window.wiBodyWaitRetry || 0;
        window.wiBodyWaitRetry++;
        if(window.wiBodyWaitRetry <= 10){
            window.wiBodyWait = setTimeout("loadWibiyaToolbar('"+src+"');",500);
        }
        else {
            console.log("Could not find body tag and unable to load "+src);
            return;
        }
    }
    else{
        loadjscssfile(src,"js","body");
    }
}

function SetToolbarLoad(){
    var wibiya_mobiles = ["iphone","ipod","ipad","series60","symbian","android","windows ce",
        "blackberry","palm","avantgo","docomo","vodafone","j-phone",
        "xv6850","htc","lg;","lge","mot","nintendo","nokia","samsung","sonyericsson"];
    wibiyaToolbar.wibiya_isMobile = false;
    wibiyaToolbar.wibiya_uAgent = navigator.userAgent.toLowerCase();
    for(var i=0;i<wibiya_mobiles.length;i++){
        if(wibiyaToolbar.wibiya_uAgent.match(wibiya_mobiles[i]) != null){
            wibiyaToolbar.wibiya_isMobile = true;
            var img=new Image(1,1);
            img.src = "http://wstat.wibiya.com/m.jpg?t="+wibiyaToolbar.id;
            break;
        }
    }

    if ((jQuery.browser.msie && parseInt(jQuery.browser.version)==6) || wibiyaToolbar.wibiya_isMobile == true){

    }
    else{
        if(wibiyaToolbar.flashFix === true){
            wibiyaToolbar.rewriteFlash = 0;
            wibiyaToolbar.framework.FlashFix();
            wibiyaToolbar.rewriteFlashInterval = setInterval("wibiyaToolbar.framework.FlashFix();", 3333);
        }

        wibiyadomain = "http://cdn.wibiya.com/Toolbars/dir_0010/Toolbar_10426/";
        // no-conflict
        if (wibiyaToolbar.nc=="true") jQuery.noConflict();

        var altToolbar = getQueryParam("toolbarObjId");
        // detect jd_gallery, ie, user_request - load page after document.ready
        if (typeof (startGallery) == "function" || jQuery.browser.msie || wibiyaToolbar.pl=="true") {
            var wibiyaScriptSrc;
            jQuery(document).ready(function(){
                if (typeof altToolbar == "undefined"){
                    wibiyaScriptSrc = wibiyadomain+"toolbar_10426_4d3ff75eeddbc.js";
                }
                else{
                    wibiyaScriptSrc = altToolbarUrl(altToolbar);
                }
                loadWibiyaToolbar(wibiyaScriptSrc);
            });
        }
        else{
            if (typeof altToolbar == "undefined"){
                wibiyaScriptSrc = wibiyadomain+"toolbar_10426_4d3ff75eeddbc.js";
            }
            else{
                wibiyaScriptSrc = altToolbarUrl(altToolbar);
            }
            loadWibiyaToolbar(wibiyaScriptSrc);
        }
    }
}

if(!wibiyaToolbar.preventLoad){
    if (typeof jQuery != "function"){
        loadjscssfile("http://cdn.wibiya.com/Scripts/jquery-1.4.2.min.js","js","head");
    }
    var wibiyaToolbar = {};
    wibiyaToolbar.framework = {};
        
        wibiyaToolbar.id="10426";
    wibiyaToolbar.referrer=document.referrer;
    CheckJQueryLoader(wibiyaToolbar.id);
}