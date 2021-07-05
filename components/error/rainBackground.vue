<template>
    <div class="rain p-absolute container overflow-hidden"></div>
</template>

<script>
    import { interactiveMouse, random, mobileDevice} from "../../utils/utils";
    export default {
        mounted() {
            function newRain(gouts, size, velocity) {
                const rainBackground = document.querySelector(".rain");
                for (let i = 0; i < gouts; i++) {
                    const gout = newGout(size, velocity);
                    rainBackground.appendChild(gout);
                }
            }

            function newGout(size, velocity) {
                const gout = document.createElement("DIV");
                const color = "rgb(106, 106, 155, .5)";
                gout.className = `gout-${size}`;
                gout.style.position = "absolute";
                gout.style.background = "transparent"; 
                gout.style.width =`${0.5 * size}px`;
                gout.style.height = `${20 * size}px`;
                gout.style.left = `${random(100)}vw`;

                const start = random(5000);
                setTimeout(() => gout.style.background = color, start);
                gout.animate([{ transform: `translateY(${100}vh)`}], { duration: 1000 * velocity, iterations: Infinity, delay: start });
                return gout;
            }

            newRain(250, 1, 1.25)
            newRain(100, 2, 1)
            newRain(50, 3, 0.35)

            if (!mobileDevice(navigator)) {
                window.addEventListener("mousemove", event => {
                    const options = {
                        classOrId: ".rain",
                        pageX: event.pageX,
                        intensity: 0.075,
                        invert: true
                    };
                    interactiveMouse(options);
                });
            }
        }
    }
</script>