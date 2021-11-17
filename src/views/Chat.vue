<template>
  <div class="Chat">

    <div class="chatnav">
      <span>&lt; Back</span>
      <h3>Company Name</h3>
      <span>...</span>
    </div>

    <div class="chathistory">
      <span>Hey there... </span>
    </div>

    <div class="message">
      <!-- <h2>Messages</h2> -->
      <span>Type messages here...</span>
    </div>

  </div>


</template>

<script>
  import Icon from '@/components/Icon'
  import Card from '@/components/Card'
  import { defineComponent } from 'vue'
  import { NButton } from 'naive-ui'

  export default defineComponent({
    components: {
      NButton,
      Card,
      Icon
    }
  })
</script>

<style lang="scss">
  h3 {
    margin: 0;
  }
  .Chat {
    width: 100%;
    display: flex;
    flex-direction: column;
    /* padding: 20px; */
    text-align: left;
  }

  .chatnav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0,0,0,0.5);
    width: 100%;
    & > * {
      padding: 10px;
    }
  }

  .chathistory {
    padding: 20px;
  }

  .row {
    display: flex;
    flex-direction: row;
    /* width: 100vw; */
    overflow:scroll;
  }

  .message {
    position: relative;
    bottom: 0;
    height: 10vh;
    width: 100%;
    display: block;
    text-align: left;
    /* margin-bottom: 10px; */
    background-color: transparent;
    border: 1px solid #ccc;
    padding: 12px;
    
  }
  .n-card__content {
    padding-top: 0;
  }

  .matched {
    display: flex;
    flex-direction: row;
    background-color: rgba(0,0,0,0.0);
    margin-bottom: 12px;
    border-bottom: 1px solid rgba(150,150,150,0.25);
  }

  .icon {
    /* display: inline-block; */
    padding: 8px 12px;
    margin: -1px;
    /* flex-grow: 0; */
    border-bottom: 1px solid rgba(250,250,250,0.95);
  }
  .active {
    /* background-color: rgba(250,50,50,0.3); */
  }
</style>