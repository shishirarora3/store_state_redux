
const injectScripts = (script ="inject.js")=> (script)=>{
    var s = document.createElement('script');
    s.src = chrome.extension.getURL(script);
    (document.head || document.documentElement).appendChild(s);
};
injectScripts();



chrome.runtime.onMessage.addListener(
    function(message, callback) {
            console.log(message, callback);
            injectScripts('inject_immediate.js');
    });



// TODO: add "script.js" to web_accessible_resources in manifest.json
//console.log("found...");


