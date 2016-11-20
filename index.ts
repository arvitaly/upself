import cluster = require("cluster");
import path = require("path");
import check from "./check";
const findRoot = require("find-root");
export interface IParams {
    timeout?: number;
}
const upself = (params?: IParams) => {
    if (cluster.isMaster) {
        cluster.fork();
        cluster.on("exit", (worker, code, signal) => {
            cluster.fork();
        });
    } else {
        params = params || {};
        params.timeout = params.timeout || 15000;
        const packageJSONPath = path.join(
            findRoot(module.parent["paths"][0]), // tslint:disable-line no-string-literal
            "package.json");
        const pack = require(packageJSONPath);
        console.log("Start checking " + pack.name + " with current version " + pack.version +
            ", timeout of checking " + params.timeout + "ms");
        check(pack.name, pack.version, params);
    }
    return (cb: () => any) => {
        if (!cluster.isMaster) {
            cb();
        }
    };
};
export default upself;
