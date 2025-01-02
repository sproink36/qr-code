export function getDataFromHash (name) {
	let url = window.location.hash.toString();
    url = url.match(new RegExp(name + '=([^&=]+)'));

    return url ? url[1] : null;
}