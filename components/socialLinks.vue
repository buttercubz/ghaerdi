<template>
    <div class="socials d-flex justify-content-end">
        <Link v-for="(social, index) in socials"
            :key="index"
            class="icons"
            :title="social.title"
            :href="social.url">
            <Img size="40px" :src="social.path" :alt="social.description"/>
        </Link>
    </div>
</template>

<script>
    import { newSocialLink } from "../utils/initializer";

    const github = newSocialLink("GitHub");
    const instagram = newSocialLink("Instagram");
    const twitter = newSocialLink("Twitter");
    const linkedin = newSocialLink("Linkedin", "https://linkedin.com/in/ghaerdi");
    const dev = newSocialLink("Dev", "https://dev.to/ghaerdi");

    export default {
        data() {
            return {
                socials: [github, linkedin, instagram, twitter, dev]
            }
        }
    }
</script>

<style scoped>
  .socials {
    margin-top: 2.5vh;
    margin-right: 2vw;
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