<template>
  <router-link to="/chat">
  <div class="card">
    <div class="cardimg"></div>
    <h3>Target, Inc</h3>
  </div>
  </router-link>
</template>

<script>
export default {
  
}
</script>

<style scoped>
h3 {
  margin: 0;
}
.card {
  display: flex;
  flex-direction: column;
}
.cardimg {
  display: block;
  border-radius: 5%;
  width: 90px;
  height: 120px;
  background-image: url('https://i.imgur.com/WFqSBgc.png');
  background-color: rgba(20,20,20,0.3);
  background-position: 50% 0;
  background-size: auto 125%;
  margin-right: 12px;
}
</style>