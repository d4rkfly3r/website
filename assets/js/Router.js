var Router = (function () {
    function Router() {
    }
    // private static locationMap : <string,Function>;
    Router.setDefaultRoute = function (pathPrefix) {
        this.pathPrefix = pathPrefix;
        window.location.hash = pathPrefix;
    };
    Router.start = function () {
        window.onhashchange = function (event) {
        };
    };
    Router.on = function (path, callback) {
    };
    return Router;
}());
