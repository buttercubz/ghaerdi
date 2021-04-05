<template>
   <div class="card d-flex column" :href="url" target="_blank" rel="noopener">
       <span>{{ name }}</span>
       <span>{{ description }}</span>
       <span>{{ language }}</span>
       <Link :href="url">See the repository</Link>
   </div> 
</template>

<script>
    export default {
        props: ["name", "description", "language", "url"],
        mounted(){
            // console.log(this.name);
        }
    }
</script>

<style>
    .card {
        width: 20vw;
        border: solid 1px var(--white-color);
        border-radius: 5px;
    }
</style>