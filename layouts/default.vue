<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
  :root {
    --white-color: rgba(255,255,255,.8);
    --transparent-white-color: rgba(255,255,255,.2);
    --background-color: #161617;
  }

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
    background-color: var(--background-color);
    width: 100vw;
    height: 100vh;
  }

  span, p, h1, h2, h3{
    display: inline;
    font-size: 1rem;
    color: var(--white-color);
    font-weight: lighter;
  }
</style>
