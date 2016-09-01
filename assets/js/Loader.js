var Loader = (function () {
    function Loader() {
    }
    Loader.loadAssets = function (scripts, styles, callback) {
        var filesLoaded = 0;
        var filesToLoad = scripts.length + styles.length;
        var check = function () {
            filesLoaded++;
            if (filesLoaded === filesToLoad) {
                console.log('Finished!');
                callback();
            }
        };
        for (var i = 0; i < scripts.length; i++) {
            console.log('Loading script ' + scripts[i]);
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = "assets/js/" + scripts[i] + ".js";
            script.onload = check;
            document.body.appendChild(script);
        }
        for (var i = 0; i < styles.length; i++) {
            console.log('Loading styles ' + styles[i]);
            var link = document.createElement('link');
            link.rel = "stylesheet";
            link.href = "assets/css/" + styles[i] + ".css";
            link.onload = check;
            document.head.appendChild(link);
        }
    };
    return Loader;
}());
