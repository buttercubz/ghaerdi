<template>
    <div class="socials" >
        <a v-for="(social, index) in socials"
            :key="index"
            :title="social.title"
            :href="social.url"
            target="_blank" 
            rel="noopener">
            <img width="40" height="40" :src="social.path" :alt="social.description"/>
        </a>
    </div>
</template>

<script>
    import { newSocialLink } from "../utils/initializer";

    const github = newSocialLink("GitHub");
    const instagram = newSocialLink("Instagram");
    const twitter = newSocialLink("Twitter");
    const linkedin = newSocialLink("Linkedin", "https://linkedin.com/in/ghaerdi");

    export default {
        data() {
            return {
                socials: [github, linkedin, instagram, twitter]
            }
        }
    }
</script>

<style scoped>
    .socials {
        margin-top: 2.5vh;
        margin-right: 2vw;
        display: flex;
        justify-content: flex-end;
        animation: visible 1500ms;
    }

    .socials a {
        margin: 0 15px;
        opacity: 0.6;
        transition: 0.3s;
    }

    .socials a:hover {
        opacity: 0.9;
    }

    @keyframes visible {
       0% {opacity: 0;}
       50% {opacity: 0;}
       100% {opacity: 1;}
  }
</style>