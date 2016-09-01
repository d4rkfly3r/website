var Router = (function () {
    function Router() {
    }
    Router.setDefaultRoute = function (pathPrefix) {
        Router.pathPrefix = pathPrefix;
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
    Router.on = function (path, callback) {
        Router.locationMap[path] = callback;
    };
    Router.pathPrefix = "";
    Router.locationMap = {};
    return Router;
}());
