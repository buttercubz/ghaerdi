<template>
    <div class="p-absolute polygon-background"></div>
</template>

<style scoped>
    .polygon-background {
        z-index: -100;
        background-color: var(--secondary-background-color);
        height: 100vh;
        width: 75vw;
        min-width: 800px;
        clip-path: polygon(0 0, 0 100%, 60% 100%, 100% 50%, 60% 0);
    }

    @media screen and (max-width: 800px) {
        .polygon-background {
            min-width: 0;
            width: 100vw;
        }
    }
</style>