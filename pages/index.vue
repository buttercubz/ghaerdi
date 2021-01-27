<template>
  <div class="container">
    <span>Welcome</span>
  </div>
</template>

<script lang="js">
let vmIndex = {
   created() {
    setTimeout(() => this.$router.push({ path: '/me'}), 1250); 
   }
};

export default vmIndex;
</script>

<style scoped>
.container {
  display: flex;
  width: 100vw;
  height: 100vh;
}

span {
  margin: auto;
  text-transform: uppercase;
  letter-spacing: 20px;
  font-size: 2.5rem;
}
</style>
