import cluster = require("cluster");
import path = require("path");
import check from "./check";
export interface IParams {
    timeout?: number;
}
const upself = (params?: IParams) => {
    params = params || {};
    params.timeout = params.timeout || 15000;
    const packageJSONPath = path.join(path.resolve(
        module.parent["paths"][0], "..", "package.json")); // tslint:disable-line no-string-literal     
    const pack = require(packageJSONPath);
    if (cluster.isMaster) {
        cluster.fork();
        cluster.on("exit", (worker, code, signal) => {
            cluster.fork();
        });
    } else {
        check(pack.name, pack.version, params);
    }
};
export default upself;
