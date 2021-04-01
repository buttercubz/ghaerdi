<template>
    <div class="flex-center column error-page">
        <!-- <errorRainBackground /> -->

        <div v-if="error.statusCode === 404" class="flex-center column text">
            <span class="four-zero-four">404</span>
            <span class="error-message">Page not found</span>
        </div>

        <div v-else class="flex-center column text">
            <span class="error-message">An error occurred</span>
        </div>

        <NuxtLink class="btn p-absolute flashing-animation bottom left" to="/me">
            Press here to go back to home
        </NuxtLink>
    </div>
</template>

<script>
    export default {
        props: ["error"]
    }
</script>

<style scoped>
    .flex-center {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .flex-center.column {
        flex-direction: column;
    }

    .text {
        margin: 1rem;
        transform: translate(0, -5vh);
    }

    .text span {
        text-align: center;
    }

    .error-page {
        width: 100vw;
        height: 100vh;
    }

    .four-zero-four {
        font-size: 3.5rem;
        font-weight: bold;
        letter-spacing: 1rem;
    }

    .error-message {
        font-size: 1rem;
        font-weight: 1.5rem;
        letter-spacing: 0.5rem;
    }

    .go-back-button {
        position: absolute;
        bottom: 0;
        left: 0;
    }
</style>