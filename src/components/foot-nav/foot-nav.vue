<template>
  <div class="foot-nav">
    <div class="foot-wrap">
      <div class="foot-item" v-for="(item,index) in navList" :key="index">
        <i class="iconfont" :class="item.icon"></i>
        <div class="nav-txt">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList:[
        {name:'首页',icon:'icon-home1',linkUrl:''},
        {name:'分类',icon:'icon-fenlei',linkUrl:''},
        {name:'购物车',icon:'icon-cart',linkUrl:''},
        {name:'关注',icon:'icon-guanzhu2',linkUrl:''},
        {name:'我的',icon:'icon-user',linkUrl:''},
      ]
    };
  }
};
</script>

<style scoped lang="less">
@import "../../common/less/main.less";
  .foot-nav{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1.3067rem;
    box-shadow: 0px 0px 8px rgba(0,0,0,.3);
    z-index: 10;
    .foot-wrap{
      display: flex;
      .foot-item{
        flex: 1;
        text-align:center;
        padding-top: .106667rem;
        .iconfont{
          font-size: 26px;
          line-height: 1;
        }
        .nav-txt{
          font-size: 12px;
        }
      }
    }
  }
</style>
