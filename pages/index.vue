<template>
  <div>
    <polygonBackground/>
    <div class="container d-flex center">
      <h3>Hello World</h3>
    </div>
  </div>
</template>

<script>
  export default {
    created() {
      setTimeout(() => this.$router.push({ path: '/me'}), 2500);
    },
  };
</script>

<style scoped>
  .container {
    max-width: 100vw;
    max-height: 100vh;
  }

  h3 {
    opacity: 0;
    padding: 10px;
    text-transform: uppercase;
    letter-spacing: 20px;
    font-size: 2.5rem;
    animation: inAndOut 2500ms ease-in;
  }

  @keyframes inAndOut {
    0% {transform: scale(0) translate(0, -500%); opacity: 0;}
    30% {transform: scale(1) translate(0, 0); opacity: var(--text-opacity);}
    90% {transform: scale(1) translate(0, 0); opacity: var(--text-opacity);}
    100% {transform: scale(0.5) translate(0, 500%); opacity: 0;}
  }

  @media screen and (max-width: 600px) {
    h3 {
      letter-spacing: 15px;
      font-size: 1.75rem;
    }
  }
</style>
