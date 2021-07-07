export default () => {
	const { pathname, hostname } = window.location;

	const path = pathname === "/" ? "/me" : pathname;
	const domain = "ghaerdi.mod.land";
	const hrefRedirect = `https://${domain}${path}`;

	if (hostname !== domain && hostname !== "localhost") {
		window.location = hrefRedirect;
	}
}