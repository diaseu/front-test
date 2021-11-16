<template>
  <div class="Chat">
    <div class="chatnav">

    </div>
    <div class="chathistory">
      <h1>Matches</h1>
      <!-- <n-button>naive-ui</n-button> -->
      <div class="row">
        <Card />
        <Card />
        <Card />
        <!-- <Card /> -->
      </div>
    </div>

    <div class="message">
      <h2>Messages</h2>
      <div class="matched active">
        <div class="icon">
          <Icon />
        </div>
        <div class="messagecontent">
            <h3>NSE Tropical</h3>
            <span>
              Recently active, match now!
            </span>
        </div>
            <!-- <template #cover>
            
            </template> -->

      </div>

      <div class="matched">
        <div class="icon">
          <Icon />
        </div>
        <div class="messagecontent">
            <h3>Golden Communications</h3>
            Click to match now!
        </div>
      </div>

      <div class="matched">
        <div class="icon">
          <Icon />
        </div>
        <div class="messagecontent">
            <h3>Mojo Solutions</h3>
            Click to match now!
        </div>
      </div>
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

<style scoped>
h3 {
  margin: 0;
}
  .match {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    text-align: left;
  }

  .row {
    display: flex;
    flex-direction: row;
    /* width: 100vw; */
    overflow:scroll;
  }

  .messagecontent {
    width: 100%;
    display: block;
    text-align: left;
    /* margin-bottom: 10px; */
    background-color: transparent;
    border: 0;
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