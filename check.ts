import { IParams } from ".";
import getLastVersion from "./get-last-version";
import update from "./update";
async function check(packName: string, latestVersion: string, params: IParams) {
    try {
        let newVersion = await getLastVersion(packName);
        if (newVersion !== latestVersion) {
            await update(packName);
            latestVersion = newVersion;
        }
    } catch (e) {
        console.error(e);
    }
    setTimeout(check.bind(packName, latestVersion, params), params.timeout);
}
export default check;
