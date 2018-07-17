<template>
  <div class="foot-nav">
    <div class="foot-wrap">
      <router-link tag="div" class="foot-item" v-for="(item,index) in navList" :key="index" :to="item.linkUrl">
        <i class="iconfont" :class="item.icon"></i>
        <div class="nav-txt">{{item.name}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        { name: "首页", icon: "icon-home1", linkUrl: "/home" },
        { name: "分类", icon: "icon-fenlei", linkUrl: "/classification" },
        { name: "购物车", icon: "icon-cart", linkUrl: "/cart" },
        { name: "关注", icon: "icon-guanzhu2", linkUrl: "/favorite" },
        { name: "我的", icon: "icon-user", linkUrl: "/userindex" }
      ]
    };
  }
};
</script>

<style scoped lang="less">
@import "../../common/less/main.less";
.foot-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1.3067rem;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  z-index: 10;
  .foot-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.3067rem;
    .foot-item {
      flex: 1;
      text-align: center;
      .iconfont {
        font-size: 26px;
        line-height: 1;
      }
      .nav-txt {
        font-size: 12px;
      }
      &.router-link-active {
        .iconfont,
        .nav-txt {
          color:#FF5562;
        }
      }
    }
  }
}
</style>
