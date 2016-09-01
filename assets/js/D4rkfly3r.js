var D4rkfly3r = (function () {
    function D4rkfly3r() {
    }
    D4rkfly3r.mount = function (mntDoc) {
        var _this = this;
        console.log("Mounting " + mntDoc);
        this.ajax("mountables/" + mntDoc + ".html", function (e) {
            _this.mountPoint.innerHTML = e.responseText;
            console.log("Mounted " + mntDoc);
        }, function (e) {
            console.log("Failed! ", e);
        });
    };
    D4rkfly3r.setMountPoint = function (mntPnt) {
        this.mountPoint = document.getElementsByTagName(mntPnt).item(0);
    };
    D4rkfly3r.ajax = function (url, successCallback, errorCallback) {
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
        xmlHttpRequest.open("GET", url, true);
        xmlHttpRequest.send();
    };
    return D4rkfly3r;
}());
