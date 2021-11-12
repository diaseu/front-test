<template>
  
  <div class="match">
    <h1>Match</h1>
    <n-button>naive-ui</n-button>

    <n-card title="NSE Tropical (New Match)" header-style="background-color: rgba(250,50,50,0.2);" content-style="background-color: rgba(250,50,50,0.2);">
        <!-- <template #cover>
          <Icon />
        </template> -->
        Recently active, match now!
    </n-card>
    <n-card title="Ken's Philodendron">
        <!-- <template #cover>
          <Icon />
        </template> -->
        Click to match now!
    </n-card>
    <n-card title="Mickey's Nursery">
        <!-- <template #cover>
          <Icon />
        </template> -->
        Click to match now!
    </n-card>
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
  .match {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
  .n-card {
    width: 100%;
    background-color: rgba(0,0,0,0.1);
    display: block;
    text-align: left;
    margin-bottom: 10px;
  }
  .active {
    background-color: rgba(250,50,50,0.3);
  }
</style>