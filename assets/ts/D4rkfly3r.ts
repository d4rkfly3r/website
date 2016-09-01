class D4rkfly3r {

    private static mountPoint: Element;
    private static parser: DOMParser = new DOMParser();

    static mount(mntDoc: string, mntPnt: string = null) {
        // console.log("Mounting " + mntDoc);
        this.ajax("GET", "mountables/" + mntDoc + ".html", (e) => {
            if (mntPnt == null) {
                var dirtyElements = D4rkfly3r.parser.parseFromString(e.responseText, 'text/html');
                // console.log("Dirty Elements:", dirtyElements);
                D4rkfly3r.recursivelyCheckForBindings(dirtyElements.body);
                D4rkfly3r.mountPoint.innerHTML = dirtyElements.body.innerHTML;
            } else {
                var dirtyElements = D4rkfly3r.parser.parseFromString(e.responseText, 'text/html');
                // console.log("Dirty Elements:", dirtyElements);
                D4rkfly3r.recursivelyCheckForBindings(dirtyElements.body);
                document.getElementsByTagName(mntPnt).item(0).innerHTML = dirtyElements.body.innerHTML;
            }
            // console.log("Mounted " + mntDoc);
        }, (e) => {
            console.log("Failed Mounting! ", e);
        });
    }

    private static recursivelyCheckForBindings(dirtyElement: HTMLElement) {
        // if (dirtyElement.hasAttribute("d4-bind")) {
        //     console.log("ITEM HAS ATTR:", dirtyElement.getAttribute("d4-bind"), dirtyElement);
        //     let tempD = dirtyElement.getAttribute("d4-bind");
        //
        // }
        // for (var i = 0; i < dirtyElement.children.length; i++) {
        //     // console.log("Child:", dirtyElement.children.item(i));
        //     D4rkfly3r.recursivelyCheckForBindings(<HTMLElement>dirtyElement.children.item(i))
        // }
    }

    static setMountPoint(mntPnt: string) {
        this.mountPoint = document.getElementsByTagName(mntPnt).item(0);
    }

    static ajax(method: string, url: string, successCallback: Function = null, errorCallback: Function = null) {
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

        xmlHttpRequest.open(method, url, true);
        xmlHttpRequest.send();
    }
}
