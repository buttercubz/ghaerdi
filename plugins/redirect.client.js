export default function () {
	if (window.location.hostname.indexOf("www") === 0) {
		window.location = window.location.href.replace("www.","");
	}
}