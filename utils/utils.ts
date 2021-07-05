export function random(limit: number) {
    const { floor, random } = Math;
    return floor(random() * limit)
}

export function interactiveMouse(options: Record<string, any>) {
    const { pageX, pageY, classOrId, intensity, invert } = options;
    const element = document.querySelector(classOrId);
    const mouseY = pageY ? (pageY - window.innerHeight / 2) * intensity : 0;
    let mouseX = pageX ? (pageX - window.innerWidth / 2) * intensity : 0;
    mouseX = invert ? -mouseX : mouseX;
    element.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
}

export function mobileDevice(navigator: Navigator){
    const { userAgent } = navigator;
    return (/Android|webOS|iPhone|iPad|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent));
}