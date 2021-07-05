export default () => {
	const { pathname, hostname } = window.location;

	const path = pathname === "/" ? "/me" : pathname;
	const hrefRedirect = "https://ghaerdi.mod.land" + path;

	if (hostname !== "ghaerdi.mod.land" && hostname !== "localhost") {
		window.location = hrefRedirect;
	}
}