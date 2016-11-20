"use strict";
const cluster = require("cluster");
const path = require("path");
const check_1 = require("./check");
const upself = (params) => {
    params = params || {};
    params.timeout = params.timeout || 15000;
    const packageJSONPath = path.join(path.resolve(module.parent["paths"][0], "..", "package.json")); // tslint:disable-line no-string-literal     
    const pack = require(packageJSONPath);
    if (cluster.isMaster) {
        cluster.fork();
        cluster.on("exit", (worker, code, signal) => {
            cluster.fork();
        });
    }
    else {
        check_1.default(pack.name, pack.version, params);
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = upself;
