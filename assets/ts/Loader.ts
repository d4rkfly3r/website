class Loader {

    public static loadJS(scripts: Array<string>, callback: Function) {
        var filesloaded = 0;
        for (var i = 0; i < scripts.length; i++) {
            console.log('Loading script ' + scripts[i]);
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = `assets/js/${scripts[i]}.js`;
            script.onload = function() {
                filesloaded++;
                if (filesloaded === scripts.length) {
                    console.log('Finished!');
                    callback();
                }
            };
            document.body.appendChild(script);
        }
    }
}
