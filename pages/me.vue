<template>
  <div class="overflow-hidden">
    <polygonBackground />

    <div class="comming-from-left-animation container d-flex align-items-center">
      <div class="about d-flex column">
        <span class="header">
          I am <h1>Gil Rudolf Härdi</h1>
          <br />
          (<h1>ghaerdi</h1>).
        </span>
        <br />
        <span>
          I am a <h1>{{ role }}</h1>.
          <br>
          I am in love with <h2>TypeScript</h2>, <h2>Golang</h2> and <h2>Python</h2>. I also use technologies
          like <h2>React</h2> and <h2>Vue</h2>.
          <br />
          <br />
          Besides programming I like to spend time watching anime, playing video
          games and drawing.
        </span>
        <socialLinks class="visible-animation" />
      </div>
    </div>

    <div class="comming-from-right-animation">
      <NuxtLink class="btn p-absolute flashing-animation bottom right" to="/projects">
        Click here to see my projects
      </NuxtLink >
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        roles: ["software developer", "web developer"],
        role: null,
      };
    },
    mounted() {
      let index = 0;
      this.role = this.roles[index];

      setInterval(() => {
        if (index > this.roles.length-1) {
          index = 0;
        }

        this.role = this.roles[index];
        index++;
      }, 2000);
    },
  };
</script>

<style scoped>
  .about {
    width: 30vw;
    min-width: 550px;
    margin-left: 10vw;
  }

  @media screen and (max-width: 800px) {
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
  }
</style>