<template>
    <h2>Projects</h2>
</template>

<script>
    import { getRepositories } from "../services/github";

    export default {
        data() {
            return { 
                repositories: []
            }
        },
        async mounted() {
            const repositories = await getRepositories("ghaerdi");
            this.repositories = repositories;
        }
    }
</script>
