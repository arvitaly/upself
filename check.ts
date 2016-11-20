import { IParams } from ".";
const semver = require("semver");
import getLastVersion from "./get-last-version";
import update from "./update";
async function check(packName: string, latestVersion: string, params: IParams) {
    try {
        let newVersion = await getLastVersion(packName);
        if (newVersion !== latestVersion && semver.gt(newVersion, latestVersion)) {
            console.log("Found new version " + packName + "@" + newVersion, " start updating...");
            await update(packName);
            console.log("Updated successfully, process will restarted");
            process.exit(0);
            return;
        }
    } catch (e) {
        console.error(e);
    }
    setTimeout(check.bind(undefined, packName, latestVersion, params), params.timeout);
}
export default check;
