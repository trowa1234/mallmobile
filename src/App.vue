<template>
  <div id="app">
    
    <router-view/>
    
  </div>
</template>

<script type="text/ecmascript-6">
import demo from './components/demo/demo'
export default {
  name: 'App',
  components:{
    demo
  }
}
</script>

<style scoped lang='less'>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>