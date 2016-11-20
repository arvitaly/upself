"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const get_last_version_1 = require("./get-last-version");
const update_1 = require("./update");
function check(packName, latestVersion, params) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let newVersion = yield get_last_version_1.default(packName);
            if (newVersion !== latestVersion) {
                yield update_1.default(packName);
                latestVersion = newVersion;
            }
        }
        catch (e) {
            console.error(e);
        }
        setTimeout(check.bind(packName, latestVersion, params), params.timeout);
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = check;
