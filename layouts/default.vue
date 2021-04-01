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

  span, p, h1, h2, h3 {
    display: inline;
    font-size: 1rem;
    color: var(--white-color);
    font-weight: lighter;
  }

  .p-absolute {
    position: absolute;
  }

  .btn {
    padding: 50px;
    text-decoration: none;
    color: var(--white-color);
  }

  .btn.p-absolute.left {
    left: 0;
  }

  .btn.p-absolute.right {
    right: 0;
  }

  .btn.p-absolute.bottom {
    bottom: 0;
  }

  .btn.p-absolute.top {
    bottom: 0;
  }

  .flashing-animation {
      animation: flashingText 3s infinite;
  }

  @keyframes flashingText {
      0% {color: var(--transparent-white-color)}
      50% {color: var(--white-color)}
      100% {color: var(--transparent-white-color)}
  }
</style>
