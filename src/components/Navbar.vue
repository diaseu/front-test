<template>
  <nav id="nav">
    <router-link to="/">Browse</router-link>
    <router-link to="/match">Match</router-link>
    <router-link to="/account">Account</router-link>
  </nav>
</template>

<script>
export default {
  
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-evenly;
  background-color: #000;
  color: #fff;
  padding: 40px;
  margin: 0;
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>