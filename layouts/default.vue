<template>
  <div>
    <div class="polygon-background"></div>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family:
    'Source Code Pro',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
}

body {
  padding: 0;
  margin: 0;
  background-color: #161617;
  width: 100vw;
  height: 100vh;
}

span, p, h1, h2, h3, a {
  display: inline;
  font-size: 1rem;
  color: white;
  opacity: 0.8;
  font-weight: lighter;
}

a img {
  opacity: 0.8;
  transition: 1s;
}

a img:hover {
  opacity: 1;
}

.polygon-background {
  position: absolute;
  z-index: -100;
  background-color: #202023; 
  height: 100vh;
  width: 70vw;
  min-width: 800px;
  clip-path: polygon(0 0, 0 100%, 30% 100%, 100% 50%, 30% 0);
}

@media screen and (max-width: 800px) {
  .polygon-background {
    min-width: 0;
    width: 100vw;
  }
}
</style>
