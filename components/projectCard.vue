<template>
   <div class="card d-flex column justify-content-between" :href="url" target="_blank" rel="noopener">
       <div class="d-flex column">
            <span class="header">{{ name }}</span>
            <span class="text-small">{{ description }}</span>
       </div>

       <div class="footer d-flex justify-content-between max-width">
            <span v-show="language" class="d-flex center text-small">{{ language }} <div class="circle"></div> </span>
            <Link class="ml-auto" :href="url">
                Click to <Img class="icons-beside-of-text" src="/icons/github.svg" size="20px" alt="github white icon" />
            </Link>
        </div>
   </div> 
</template>

<script>
    export default {
        props: ["name", "description", "language", "url"],
    }
</script>

<style scoped>
    .card {
        border: solid 1px var(--white-color);
        border-radius: 5px;
        padding: 10px;
        -webkit-box-shadow: 0px 0px 2.5px 0px var(--white-color);
        -moz-box-shadow: 0px 0px 2.5px 0px var(--white-color);
        box-shadow: 0px 0px 2.5px 0px var(--white-color);
        opacity: var(--default-opacity);
    }

    .circle {
        width: 10px;
        height: 10px;
        background-color: var(--white-color);
        margin: 0 10px;
        transform: translate(0, 2px);
    }

    .footer {
        margin-top: 10px;
    }
</style>