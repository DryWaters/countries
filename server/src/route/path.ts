import {Ipath, IPathRoute} from "../domain/IPath";

function path(url: string): IPathRoute {
    const allRoutes: Ipath = {
        "/countries": {
            methods: ["GET"]
        },
        "/countries/:name": {
            methods: ["GET"]
        }
    }
    return allRoutes[url];
}

export default path;