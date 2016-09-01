class D4rkfly3r {

    private static mountPoint: Element;

    static mount(mntDoc: string) {
        console.log("Mounting " + mntDoc);
        this.ajax("mountables/" + mntDoc + ".html", (e) => {
            this.mountPoint.innerHTML = e.responseText;
            console.log("Mounted " + mntDoc);
        }, (e) => {
            console.log("Failed! ", e);
        });
    }

    static setMountPoint(mntPnt: string) {
        this.mountPoint = document.getElementsByTagName(mntPnt).item(0);
    }

    static ajax(url: string, successCallback: Function = null, errorCallback: Function = null) {
        let xmlHttpRequest = new XMLHttpRequest();

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
    }
}
