class Router {

    static pathPrefix: string = "";
    static locationMap: { [key: string]: Function; } = {};

    public static setDefaultRoute(pathPrefix: string) {
        Router.pathPrefix = pathPrefix;
    }

    public static start() {
        const path = window.location.hash.substr(Router.pathPrefix.length);
        if (Router.locationMap[path] != null) {
            Router.locationMap[path]();
        }

        window.onhashchange = function (event: HashChangeEvent) {
            const location = (<Window>(event.target)).location;
            const path = location.hash.substr(Router.pathPrefix.length);
            if (Router.locationMap[path] != null) {
                Router.locationMap[path]();
            }
        }
    }

    public static on(path: string, callback: Function) {
        Router.locationMap[path] = callback;
    }
}
