<template>
  <div class="overflow-hidden">
    <polygonBackground />

    <div class="comming-from-left-animation container d-flex align-items-center">
      <div class="about d-flex column">
        <span class="header">
          <h1 class="bold">Gil Rudolf Härdi (ghaerdi)</h1>.
        </span>
        <br />

        <span class="transparent">
          <div class="d-inline-flex">
            I'm a
            <ul class="dynamic-text">
              <li><h1>software developer.</h1></li>
              <li><h1>fullstack developer.</h1></li>
              <li><h1>web developer.</h1></li>
            </ul>
          </div>
          <br>

          I am in love with <h2>TypeScript</h2>. I also use technologies
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

<style scoped>
  .dynamic-text {
    margin: 0;
    padding: 0;
    margin-left: 0.75rem;
    text-align: left !important;
    height: 2rem;
    overflow: hidden;
  }

  .dynamic-text li {
    list-style: none;
    position: relative;
    top: 0;
    animation: slide 6s steps(3) infinite;
    animation-delay: .5s;
  }

  @keyframes slide {
    100% {
      top: -6rem;
    }
  }

  .dinamic-text li h1 {
    position: relative;
    margin: 15px 0;
  }

  .dynamic-text li h1::after {
    content: "";
    position: absolute;
    left: 0;
    height: 100%;
    width: 100%;
    border-left: solid 2px var(--white-color);
    background-color: var(--secondary-background-color);
    animation: typing 2s steps(20) infinite;
    animation-delay: .5s;
  }

  @keyframes typing {
    40%, 60% {
      left: 100%;
    }
    100% {
      left: 0;
    }
  }

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