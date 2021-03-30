<template>
    <NuxtLink class="btn" :to="route">
        <slot />
    </NuxtLink>
</template>

<script>
    export default {
        props: ["route"]
    }
</script>

<style scoped>
    .btn {
        padding: 50px;
        text-decoration: none;
        color: var(--white-color);
        animation: flashingText 3s infinite;
    }

    @keyframes flashingText{
        0% {color: var(--transparent-white-color)}
        50% {color: var(--white-color)}
        100% {color: var(--transparent-white-color)}
    }
</style>