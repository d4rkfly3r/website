var D4rkfly3r = (function () {
    function D4rkfly3r() {
    }
    D4rkfly3r.mount = function (mntDoc, mntPnt) {
        if (mntPnt === void 0) { mntPnt = null; }
        // console.log("Mounting " + mntDoc);
        this.ajax("GET", "mountables/" + mntDoc + ".html", function (e) {
            if (mntPnt == null) {
                var dirtyElements = D4rkfly3r.parser.parseFromString(e.responseText, 'text/html');
                // console.log("Dirty Elements:", dirtyElements);
                D4rkfly3r.recursivelyCheckForBindings(dirtyElements.body);
                D4rkfly3r.mountPoint.innerHTML = dirtyElements.body.innerHTML;
            }
            else {
                var dirtyElements = D4rkfly3r.parser.parseFromString(e.responseText, 'text/html');
                // console.log("Dirty Elements:", dirtyElements);
                D4rkfly3r.recursivelyCheckForBindings(dirtyElements.body);
                document.getElementsByTagName(mntPnt).item(0).innerHTML = dirtyElements.body.innerHTML;
            }
            // console.log("Mounted " + mntDoc);
        }, function (e) {
            console.log("Failed Mounting! ", e);
        });
    };
    D4rkfly3r.recursivelyCheckForBindings = function (dirtyElement) {
        // if (dirtyElement.hasAttribute("d4-bind")) {
        //     console.log("ITEM HAS ATTR:", dirtyElement.getAttribute("d4-bind"), dirtyElement);
        //     let tempD = dirtyElement.getAttribute("d4-bind");
        //
        // }
        // for (var i = 0; i < dirtyElement.children.length; i++) {
        //     // console.log("Child:", dirtyElement.children.item(i));
        //     D4rkfly3r.recursivelyCheckForBindings(<HTMLElement>dirtyElement.children.item(i))
        // }
    };
    D4rkfly3r.setMountPoint = function (mntPnt) {
        this.mountPoint = document.getElementsByTagName(mntPnt).item(0);
    };
    D4rkfly3r.ajax = function (method, url, successCallback, errorCallback) {
        if (successCallback === void 0) { successCallback = null; }
        if (errorCallback === void 0) { errorCallback = null; }
        var xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.onreadystatechange = function () {
            if (xmlHttpRequest.readyState == XMLHttpRequest.DONE) {
                if (xmlHttpRequest.status == 200) {
                    if (successCallback != null) {
                        successCallback(xmlHttpRequest);
                    }
                }
                else if (xmlHttpRequest.status == 404) {
                    if (errorCallback != null) {
                        errorCallback(xmlHttpRequest);
                    }
                }
                else {
                    console.error('Something else other than 200 was returned!');
                }
            }
        };
        xmlHttpRequest.open(method, url, true);
        xmlHttpRequest.send();
    };
    D4rkfly3r.parser = new DOMParser();
    return D4rkfly3r;
}());
