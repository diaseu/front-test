<template>
  
  <div class="match">
    <h1>Match</h1>
    <n-button>naive-ui</n-button>

    <div class="matched active">
      <div class="icon">
        <Icon />
      </div>
      <div class="card">
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
      <n-card title="Golden Communications">
          <!-- <template #cover>
            <Icon />
          </template> -->
          Click to match now!
      </n-card>
    </div>

    <div class="matched">
      <div class="icon">
        <Icon />
      </div>
      <n-card title="Mojo Solutions">
          <!-- <template #cover>
            <Icon />
          </template> -->
          Click to match now!
      </n-card>
    </div>
  </div>


</template>

<script>
  import Icon from '@/components/Icon'
  import { defineComponent } from 'vue'
  import { NButton } from 'naive-ui'
  import { NCard } from 'naive-ui'

  export default defineComponent({
    components: {
      NButton,
      NCard,
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
  }
  .card {
    width: 100%;
    display: block;
    text-align: left;
    margin-bottom: 10px;
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
    border-bottom: 1px solid rgba(0,0,0,0.5);
  }

  .icon {
    /* display: inline-block; */
    padding: 8px 12px;
    margin: -1px;
    /* flex-grow: 0; */
  }
  .active {
    background-color: rgba(250,50,50,0.3);
  }
</style>