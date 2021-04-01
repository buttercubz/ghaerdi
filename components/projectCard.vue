<template>
   <a :href="url" target="_blank" rel="noopener">
       <span>{{ name }}</span>
       <span>{{ description }}</span>
   </a> 
</template>

<script>
    export default {
        props: ["name", "description", "url"],
        mounted(){
            console.log(this.name);
        }
    }
</script>