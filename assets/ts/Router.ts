class Router {

    private static pathPrefix: string;
    // private static locationMap : <string,Function>;

    public static setDefaultRoute(pathPrefix: string) {
        this.pathPrefix = pathPrefix;
        window.location.hash = pathPrefix;
    }

    public static start() {
        window.onhashchange = function(event) {

        }
    }

    public static on(path: string, callback: Function){

    }
}
