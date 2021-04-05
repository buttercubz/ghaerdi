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
    --icon-opacity: 0.6;
    --text-opacity: 0.8;
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
    font-size: 1.5rem;
    color: var(--white-color);
    font-weight: lighter;
  }

  .header,
  .header h1,
  .header h2,
  .header h3 {
    font-size: 1.9rem;
    letter-spacing: 5px;
  }

  .container {
    width: 100vw;
    height: 100vh;
  }

  .d-flex {
    display: flex;
  }

  .d-flex.column{
    flex-direction: column;
  }

  .d-flex.center {
    align-items: center;
    justify-content: center;
  }
  
  .d-flex.align-items-center {
    align-items: center;
  }

  .d-flex.justify-content-center {
    justify-content: center;
  }

  .d-flex.justify-content-end {
    justify-content: flex-end;
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

  .icons {
      opacity: var(--icon-opacity);
  }

  .icons a:hover {
      opacity: 0.9;
  }

  .bold {
    font-weight: bold;
  }

  @keyframes flashingText {
      0% {color: var(--transparent-white-color)}
      50% {color: var(--white-color)}
      100% {color: var(--transparent-white-color)}
  }

  @keyframes visible {
      0% {opacity: 0;}
      50% {opacity: 0;}
      100% {opacity: 1;}
  }

  @keyframes leftSideIn {
    0% {transform: scale(0) translate(-800%, 0); opacity: 0.1;}
    100% {transform: scale(1) translate(0, 0); opacity: 1;}
  }

  @media screen and (max-width: 650px) {
    .header,
    .header h1, 
    .header h2, 
    .header h3 {
      font-size: 1.5rem;
      letter-spacing: 2.5px;
    }

    span, p, h1, h2, h3 {
      font-size: 1.25rem;
    }
  }

  @media screen and (max-width: 800px) {
    .container {
      justify-content: center;
    }
  }
</style>
