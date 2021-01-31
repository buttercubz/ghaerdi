<template>
  <div class="container">
    <span>Hello World</span>
  </div>
</template>

<script lang="js">
let vmIndex = {
   created() {
    setTimeout(() => this.$router.push({ path: '/me'}), 2500); 
   }
};

export default vmIndex;
</script>

<style scoped>
html, body, .container {
  overflow: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

html, body, .container::-webkit-scrollbar {
  display: none;
}

.container {
  display: flex;
  justify-content: center;
  align-items:center;
  text-align: center;
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
}

span {
  opacity: 0;
  padding: 10px;
  text-transform: uppercase;
  letter-spacing: 20px;
  font-size: 2.5rem;
  animation: in-and-out 2500ms ease-in;
}

@keyframes in-and-out {
  0% {transform: scale(0) translate(0,-1000%); opacity: 0;}
  35% {transform: scale(1) translate(0,0); opacity: 1;}
  90% {transform: scale(1) translate(0,0); opacity: 1;}
  100% {transform: scale(0.5) translate(0,1000%); opacity: 0.1;}
}

@media screen and (max-width: 600px) {
  span {
    letter-spacing: 15px;
    font-size: 1.75rem;
  }
}
</style>
