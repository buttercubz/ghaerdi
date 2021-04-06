<template>
    <div class="socials d-flex justify-content-end">
        <Link class="icons" v-for="(social, index) in socials"
            :key="index"
            :title="social.title"
            :href="social.url">
            <img width="40" height="40" :src="social.path" :alt="social.description"/>
        </Link>
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
    animation: visible 1500ms;
  }

  .socials .icons {
    margin: 0 15px;
    transition: 0.3s;
  }

  @media screen and (max-width: 650px) {
    .socials {
      justify-content: center;
    }
  }
</style>