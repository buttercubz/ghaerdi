<template>
  <div class="container">
    <div class="about">
      <span class="header">
        I am <h1>Gil Rudolf Härdi</h1>
        <br />
        (<h1>ghaerdi</h1>).
      </span>
      <br />
      <span class="paragraph">
        I am a <h1>{{ role }}</h1>.
        <br />
        I am in love with TypeScript, Golang and Python. I also use technologies
        like React and Vue.
        <br />
        <br />
        Besides programming I like to spend time watching anime, playing video
        games and drawing.
      </span>
      <div class="socials" >
        <a v-for="social in socials" :href="social.url" target="_blank">
          <img :src="social.imgPath" :alt="social.description"/>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="js">
class Social {
  constructor(url, imgPath, description) {
    this.url = url;
    this.imgPath = imgPath;
    this.description = description;
  }
}

const github = new Social("https://github.com/ghaerdi", "/icons/github.svg", "GitHub grey icon");
const linkedin = new Social("https://www.linkedin.com/in/ghaerdi", "/icons/linkedin.svg", "Linkedin grey icon");
const instagram = new Social("https://www.instagram.com/ghaerdi/", "/icons/instagram.svg", "Instragram grey icon");

const vmIndex = {
  data() {
    return {
      roles: ["software engineer", "software developer", "web developer"],
      role: "software engineer",
      socials: [github, linkedin, instagram]
    };
  },
  mounted() {
    let index = 0;
    setInterval(() => {
      this.role = this.roles[index];
      index = index > 1 ? 0 : index += 1;
    }, 2000);
  },
};

export default vmIndex;
</script>

<style>
.container {
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
}

.about {
  width: 30vw;
  min-width: 550px;
  margin-left: 10vw;
  display: flex;
  flex-direction: column;
  animation: leftSideIn 500ms ease-in;
}

.header,
.header h1 {
  font-size: 1.9rem;
  letter-spacing: 5px;
}

.paragraph,
.paragraph h1 {
  font-size: 1.5rem;
}

.socials {
  margin-top: 2.5vh;
  margin-right: 2vw;
  display: flex;
  justify-content: flex-end;
  animation: visible 2000ms;
}

.socials img {
  margin: 0 15px;
}

@keyframes leftSideIn {
  0% {transform: scale(0) translate(-900%, 0); opacity: 0.1;}
  100% {transform: scale(1) translate(0, 0); opacity: 1;}
}

@keyframes visible{
  0% {opacity: 0;}
  50% {opacity: 0;}
  100% {opacity: 1;}
}

@media screen and (max-width: 800px) {
  .container {
    justify-content: center;
  }

  .about {
    margin: 0;
    min-width: 0;
    width: 80vw;
  }
}

@media screen and (max-width: 650px) {
  .about {
    width: 95vw;
    text-align: center;
  }

  .header,
  .header h1 {
    font-size: 1.5rem;
    letter-spacing: 2.5px;
  }
  .paragraph,
  .paragraph h1 {
    font-size: 1.25rem;
  }

  .socials {
    justify-content: center;
  }
}
</style>
