<template>
    <div class="container">
        <div class="comming-from-right-animation d-flex align-items-center column">
            <h2 class="header bold">Projects</h2>

            <div class="visible-animation repositories scroll-y d-grid columns-3">
                <projectCard v-for="(repository, index) in repositories" :key="index"
                    :name="repository.name"
                    :description="repository.description"
                    :language="repository.language"
                    :url="repository.url"
                />
            </div>

        </div>
        
        <buttonToHome />
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
            const repositories = await getRepositories($nuxt, "ghaerdi", this.repositories);

            if (!repositories) return;
            
            this.repositories = repositories;
            this.$store.commit("setRepositories", repositories);
        }
    }
</script>

<style scoped>
    .repositories {
        width: 90vw;
        max-height: calc(100vh - 221px);
        grid-gap: 20px;
        padding: 0 10px;
    }
</style>