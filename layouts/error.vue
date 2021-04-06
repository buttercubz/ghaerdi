<template>
    <div class="container d-flex center column text-center">
        <!-- <errorRainBackground /> -->

        <div v-if="error.statusCode === 404" class="d-flex center column text">
            <span class="four-zero-four bold">404</span>
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
    .text {
        margin: 1rem;
        transform: translate(0, -5vh);
    }

    .four-zero-four {
        font-size: 3.5rem;
        letter-spacing: 1rem;
    }

    .error-message {
        font-size: 1rem;
        font-weight: 1.5rem;
        letter-spacing: 0.5rem;
    }
</style>