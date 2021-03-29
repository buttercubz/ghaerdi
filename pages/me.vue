<template>
  <div>
    <polygonBackground />

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
          I am in love with <h2>TypeScript</h2>, <h2>Golang</h2> and <h2>Python</h2>. I also use technologies
          like <h2>React</h2> and <h2>Vue</h2>.
          <br />
          <br />
          Besides programming I like to spend time watching anime, playing video
          games and drawing.
        </span>
        <socialLinks />
      </div>
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
  .paragraph h2,
  .paragraph h3,
  .paragraph span,
  .paragraph p {
    font-size: 1.5rem;
  }


  @keyframes leftSideIn {
    0% {transform: scale(0) translate(-800%, 0); opacity: 0.1;}
    100% {transform: scale(1) translate(0, 0); opacity: 1;}
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
