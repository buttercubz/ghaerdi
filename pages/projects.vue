<template>
    <div class="d-flex align-items-center column">
        <h2 class="header bold">Projects</h2>

        <div class="repositories d-grid columns-3">
            <projectCard v-for="(repository, index) in repositories" :key="index"
                :name="repository.name"
                :description="repository.description"
                :language="repository.language"
                :url="repository.url"
            />
        </div>

        <NuxtLink class="btn p-fixed flashing-animation bottom left" to="/me">
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
            const repositories = await getRepositories("ghaerdi", this.repositories);

            if (!repositories) return;
            
            this.repositories = repositories;
            this.$store.commit("setRepositories", repositories);
        }
    }
</script>

<style scoped>
    .repositories {
        overflow-y: auto;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        width: 90vw;
        max-height: calc(100vh - 221px);
        grid-gap: 20px;
        padding: 0 10px;
    }

    .repositories::-webkit-scrollbar {
        width: 5px;
        border-radius: 100px;
    }

    .repositories::-webkit-scrollbar-thumb{
        background-color: var(--white-color);
        border-radius: 100px;
    }
</style>