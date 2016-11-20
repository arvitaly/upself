// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/56295f5058cac7ae458540423c50ac2dcf9fc711/pify/pify.d.ts
declare module "pify" {
    interface PifyOptions {
        multiArgs?: boolean,
        include?: [string | RegExp],
        exclude?: [string | RegExp],
        excludeMain?: boolean
    }

    function pify(input: Function, promiseModule?: Function, options?: PifyOptions): (...args:any[]) => Promise<any>;
    function pify(input: any, promiseModule?: Function, options?: PifyOptions): any;
    function pify(input: Function, options?: PifyOptions): (...args:any[]) => Promise<any>;
    function pify(input: any, options?: PifyOptions): any;

	namespace pify {}
	export = pify;
}