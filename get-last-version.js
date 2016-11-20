"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const pify = require("pify");
const npm = require("npm");
function check(name) {
    return __awaiter(this, void 0, void 0, function* () {
        yield pify(npm.load)({ loglevel: "warn" });
        // disable log
        let lastWrite = process.stdout.write;
        // enable log;
        process.stdout.write = () => { return false; };
        const result = yield pify(npm.commands.view)([name]);
        process.stdout.write = lastWrite;
        const latestVersion = Object.keys(result)[0];
        if (!latestVersion) {
            throw new Error("Not found latest version, package info: " + JSON.stringify(result));
        }
        return latestVersion;
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = check;
