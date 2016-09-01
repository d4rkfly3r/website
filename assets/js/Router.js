var Router = (function () {
    function Router() {
    }
    Router.setDefaultPrefix = function (pathPrefix) {
        Router.pathPrefix = pathPrefix;
        if (window.location.hash == "") {
            window.location.hash = pathPrefix;
        }
    };
    Router.setDefaultRoute = function (path) {
        if (window.location.hash == Router.pathPrefix) {
            window.location.hash = Router.pathPrefix + path;
        }
    };
    Router.start = function () {
        var path = window.location.hash.substr(Router.pathPrefix.length);
        if (Router.locationMap[path] != null) {
            Router.locationMap[path]();
        }
        window.onhashchange = function (event) {
            var location = (event.target).location;
            var path = location.hash.substr(Router.pathPrefix.length);
            if (Router.locationMap[path] != null) {
                Router.locationMap[path]();
            }
        };
    };
    Router.route = function (path) {
        window.location.hash = Router.pathPrefix + path;
    };
    Router.on = function (path, callback) {
        Router.locationMap[path] = callback;
    };
    Router.pathPrefix = "";
    Router.locationMap = {};
    return Router;
}());
