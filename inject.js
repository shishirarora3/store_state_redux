console.save = function (data, filename) {

    if (!data) {
        console.error('Console.save: No data')
        return;
    }

    if (!filename) filename = 'console.json'

    if (typeof data === "object") {
        data = JSON.stringify(data, undefined, 4)
    }

    var blob = new Blob([data], {type: 'text/json'}),
        e = document.createEvent('MouseEvents'),
        a = document.createElement('a');

    a.download = filename
    a.href = window.URL.createObjectURL(blob)
    a.dataset.downloadurl = ['text/json', a.download, a.href].join(':')
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    a.dispatchEvent(e);
};



window.findPathWithKey = (obj, key) => {
    const findPathMeta = (obj, result = [], path = []) => Object.keys(obj).reduce((_result, _key) => {

        if (key === _key) {
            console.log(key);
            _result = [..._result, [obj[_key], [...path, _key]]];
        }
        console.log(_result);
        if (typeof obj[_key] === "object") {
            _result = findPathMeta(obj[_key], _result, [...path, _key]);
        }
        return _result;
    }, result);
    return findPathMeta(obj);
};

window.traverse = (element, levels = "", lastLevel = 0) => Array.from(element.children).forEach((child, i) => {
    try {
        console.log("found....", child);

    } catch (e) {
        if (e.name !== "TypeError") {
            console.log(e.name);
        }
    }
    if (child.children && child.children.length > 0) {
        window.traverse(child, `${levels} ${lastLevel}`, lastLevel++);
    } else {
        //console.log(levels);
    }
});
