<template>
  <div class="index">
    <h1>首页</h1>
    <foot-nav></foot-nav>
  </div>
</template>

<script type="text/ecmascript-6">
import footNav from '@/components/foot-nav/foot-nav'

export default {
  data() {
    return { 
    };
  },
  components:{
    footNav
  }
};
</script>

<style scoped lang='less'>
@import "../../common/less/main.less";
.index {
  
}
</style>
