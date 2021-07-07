<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
  :root {
    --white-color: white;
    --primary-background-color: #161617;
    --secondary-background-color: #202023;
    --default-opacity: 0.8;
    --default-icon-opacity: 0.6;
    --lower-opacity: 0.2;
    --higher-opacity: 0.9;
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
    font-size: 16px;
  }

  body {
    padding: 0;
    margin: 0;
    background-color: var(--primary-background-color);
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  span, p, h1, h2, h3 {
    display: inline;
    font-size: 1.5rem;
    color: var(--white-color);
    opacity: var(--default-opacity);
    font-weight: lighter;
  }

  .overflow-hidden {
    overflow: hidden;
  }

  .scroll-y {
    overflow-y: auto;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }

  .scroll-y::-webkit-scrollbar {
    width: 5px;
    border-radius: 100px;
  }

  .scroll-y::-webkit-scrollbar-thumb{
    background-color: var(--white-color);
    border-radius: 100px;
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

  .d-grid {
    display: grid;
  }

  .d-grid.columns-3 {
    grid-template-columns: repeat(3, 1fr);
  }

  .d-flex.column {
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

  .d-flex.justify-content-between {
    justify-content: space-between;
  }

  .d-inline-flex {
    display: inline-flex;
  }

  .max-width {
    width: 100%;
  }

  .ml-auto {
      margin-left: auto;
  }

  .circle {
    border-radius: 1000px;
  }

  .p-absolute {
    position: absolute;
  }

  .p-fixed {
    position: fixed;
  }

  .btn {
    padding: 50px;
    text-decoration: none;
    color: var(--white-color);
    opacity: var(--default-opacity);
  }

  .btn.p-fixed.left,
  .btn.p-absolute.left {
    left: 0;
  }

  .btn.p-fixed.right,
  .btn.p-absolute.right {
    right: 0;
  }

  .btn.p-fixed.bottom,
  .btn.p-absolute.bottom {
    bottom: 0;
  }

  .btn.p-fixed.top,
  .btn.p-absolute.top {
    bottom: 0;
  }

  .icons {
    opacity: var(--default-icon-opacity);
  }

  .icons:hover {
    opacity: var(--higher-opacity);
  }

  .bold {
    font-weight: bold;
  }

  .text-center {
    text-align: center;
  }

  .text-small {
    font-size: 1rem;
  }

  .icons-beside-of-text {
    margin-left: 2.5px;
    transform: translate(0, 4.5px)
  }

  .flashing-animation {
    animation: flashingText 3s infinite;
  }

  .comming-from-left-animation {
    animation: leftSideIn 500ms;
  }

  .comming-from-right-animation {
    animation: rightSideIn 500ms;
  }

  .visible-animation {
    animation: visible 1500ms;
  }

  .transparent {
    opacity: var(--default-icon-opacity);
  }

  @keyframes flashingText {
      0% {opacity: var(--default-opacity)}
      50% {opacity: var(--lower-opacity)}
      100% {opacity: var(--default-opacity)}
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

  @keyframes rightSideIn {
    0% {transform: scale(0) translate(800%, 0); opacity: 0.1;}
    100% {transform: scale(1) translate(0, 0); opacity: 1;}
  }

  @media screen and (max-width: 1000px) {
    .d-grid.columns-3 {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 800px) {
    .container {
      justify-content: center;
    }
    .d-grid.columns-3 {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media screen and (max-width: 550px) {
    html {
      font-size: 10px;
    }
    img {
      height: 25px;
      width: 25px;
    }
  }
</style>