<template>
    <div class="p-absolute polygon-background"></div>
</template>

<style>
    .polygon-background {
        z-index: -100;
        background-color: #202023; 
        height: 100vh;
        width: 70vw;
        min-width: 800px;
        clip-path: polygon(0 0, 0 100%, 30% 100%, 100% 50%, 30% 0);
    }

    @media screen and (max-width: 800px) {
        .polygon-background {
            min-width: 0;
            width: 100vw;
        }
    }
</style>