// BEGIN
export default (url) => {
    const browserName = navigator.userAgent.split(' ')[0];
    return browserName + ' ' + url;
}
// END