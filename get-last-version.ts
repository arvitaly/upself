import pify = require("pify");
import npm = require("npm");
async function check(name: string) {
    await pify(npm.load)({ loglevel: "warn" });
    // disable log
    let lastWrite = process.stdout.write;
    // enable log;
    process.stdout.write = () => { return false; };
    const result = await pify(npm.commands.view)([name]);
    process.stdout.write = lastWrite;
    const latestVersion = Object.keys(result)[0];
    if (!latestVersion) {
        throw new Error("Not found latest version, package info: " + JSON.stringify(result));
    }
    return latestVersion;
}
export default check;
