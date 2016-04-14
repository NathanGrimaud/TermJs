/**
* isWindows :
* return true if app is running on window
*/
export function isWindows() {
    return /^win/.test(process.platform);
}