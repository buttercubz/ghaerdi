<template>
    <div>
        <h2>Projects</h2>

        <div style="color: white;" v-for="(repository, index) in repositories" :key="index">
            <projectCard
                :name="repository.name"
                :description="repository.description" 
                :url="repository.url"
            />
            {{ repository.name }}
        </div>

        <NuxtLink class="btn p-absolute flashing-animation bottom left" to="/me">
            Press here to go back to home
        </NuxtLink >
    </div>
</template>

<script>
    import { getRepositories } from "../services/github";

    export default {
        data() {
            return { 
                repositories: []
            }
        },
        async created() {
            // const repositories = [{
            //     name: "ajio"
            // }]
            // const repositories = await getRepositories("ajio");
            this.repositories = repositories;
        }
    }
</script>