export default function interactiveMouse(options) {
    const { pageX, pageY, classOrId, intensity, invert } = options;
    const element = document.querySelector(classOrId);
    let mouseX = pageX ? (pageX - window.innerWidth / 2) * intensity : 0;
    let mouseY = pageY ? (pageY - window.innerHeight / 2) * intensity : 0;
    mouseX = invert ? -mouseX : mouseX;
    element.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
}