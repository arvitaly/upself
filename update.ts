const exec = require("child-process-promise").exec;
export default async (name: string) => {
    return await exec("npm install -g " + name);
};
