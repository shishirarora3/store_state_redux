var providerSelector = document.querySelector("article");
var getStoreState = function (dom) {
    for (var key in dom) {
        if (key.startsWith("__reactInternalInstance$")) {
            var compInternals = dom[key]._currentElement;
            var compWrapper = compInternals._owner;
            var comp = compWrapper._instance;
            var state = comp._reactInternalInstance._context.store.getState();
            var stateString = JSON.stringify(state);
            console.log(stateString);
            navigator.clipboard.writeText(stateString).then(function () {
                //alert('Async: Copying to clipboard was successful!');
            }, function (err) {
                console.error('Async: Could not copy text: ', err);
            });
            //return comp;
        }
    }
    //return null;
};
console.log(getStoreState(providerSelector));