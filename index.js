"use strict";
const cluster = require("cluster");
const path = require("path");
const check_1 = require("./check");
const findRoot = require("find-root");
const upself = (params) => {
    if (cluster.isMaster) {
        cluster.fork();
        cluster.on("exit", (worker, code, signal) => {
            cluster.fork();
        });
    }
    else {
        params = params || {};
        params.timeout = params.timeout || 15000;
        const packageJSONPath = path.join(findRoot(module.parent["paths"][0]), // tslint:disable-line no-string-literal
        "package.json");
        const pack = require(packageJSONPath);
        check_1.default(pack.name, pack.version, params);
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = upself;
