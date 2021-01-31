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
        <br>
        <p>
          I am in love with TypeScript, Golang and Python. I also use technologies
          like React and Vue.
          <br />
          <br />
          Besides programming I like to spend time watching anime, playing video
          games and drawing.
        </p>
      </span>
      <div class="socials" >
        <div v-for="social in socials">
          <a :title="social.title" :href="social.url" target="_blank" rel="noopener">
            <img width="40" height="40" :src="social.path" :alt="social.description"/>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
class Social {
  constructor(title, url, path, description) {
    this.title = title
    this.url = url;
    this.path = path;
    this.description = description;
  }
}

const github = new Social("ghaerdi's GitHub", "https://github.com/ghaerdi", "/icons/github.svg", "GitHub white icon");
const linkedin = new Social("ghaerdi's Linkedin", "https://www.linkedin.com/in/ghaerdi", "/icons/linkedin.svg", "Linkedin white icon");
const instagram = new Social("ghaerdi's Instragram", "https://www.instagram.com/ghaerdi/", "/icons/instagram.svg", "Instragram white icon");

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
  animation: leftSideIn 500ms;
}

.header,
.header h1 {
  font-size: 1.9rem;
  letter-spacing: 5px;
}

.paragraph,
.paragraph h1,
.paragraph span,
.paragraph p {
  font-size: 1.5rem;
}

.socials {
  margin-top: 2.5vh;
  margin-right: 2vw;
  display: flex;
  justify-content: flex-end;
  animation: visible 1500ms;
}

.socials div {
  margin: 0 15px;
}

@keyframes leftSideIn {
  0% {transform: scale(0) translate(-800%, 0); opacity: 0.1;}
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
