<template>
    <div class="container d-flex center column">
        <h2 class="header bold">Projects</h2>

        <div class="repositories" v-for="(repository, index) in repositories" :key="index">
            <projectCard
                :name="repository.name"
                :description="repository.description"
                :language="repository.language"
                :url="repository.url"
            />
        </div>

        <NuxtLink class="btn p-absolute flashing-animation bottom left" to="/me">
            Press here to go back to home
        </NuxtLink >
    </div>
</template>

<script>
    import { getRepositories } from "../services/github";

    export default {
        asyncData({ store }) {
            return {
                repositories: store.state.repositories
            }
        },
        async created() {
            // const repositories = [{
            //     name: "ajio"
            // }]
            // const repositories = await getRepositories("ghaerdi");
            // this.repositories = repositories;
            console.log(this.repositories);
        }
    }
</script>

<style scoped>
    .repositories {
        background-color: green;
        width: 90vw;
        height: 80vh;
    }
</style>