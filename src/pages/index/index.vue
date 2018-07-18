<template>
  <div class="index">
    <div class="content">
      <div class="banner">
        <swiper loop auto dots-position="center" height="6.186667rem" :interval="3000">
          <swiper-item v-for="(item,index) in bannerList" :key="index">
            <img class="banner-img" :src="rootUrl+item.adFile" alt="">
          </swiper-item>
        </swiper>
      </div>
      <div class="nav-list">
        <grid :show-vertical-dividers="false" :cols="5" :show-lr-borders="false">
          <grid-item v-for="(item,index) in navList" :key="index" :label="item.btnName">
            <img slot="icon" :src="rootUrl+item.btnImg">
          </grid-item>
        </grid>
      </div>
    </div>
    <foot-nav></foot-nav>
  </div>
</template>


<script type="text/ecmascript-6">
import { Swiper, SwiperItem, Grid, GridItem } from "vux";
import footNav from "@/components/foot-nav/foot-nav";
import { $GET, $POST } from "@/api/api";
import ApiUrls from "@/api/url";

export default {
  data() {
    return {
      rootUrl: "", //根路径，用于拼接图片路径
      bannerList: [], //轮播图
      navList:[],//导航按钮
    };
  },
  created() {
    this._getIndexData();
    this._getIndexNavBtn();
  },
  components: {
    footNav,
    Swiper,
    SwiperItem,
    Grid,
    GridItem
  },
  methods: {
    _getIndexData() {
      $GET(ApiUrls.getIndexData).then(res => {
        console.log(res);
        this.rootUrl = res.domain;
        this.bannerList = res.swiper;
      });
    },
    _getIndexNavBtn(){
      $GET(ApiUrls.indexNavBtn).then(res => {
        console.log(res);
        this.navList =res.data;
      });
    }
  }
};
</script>

<style scoped lang='less'>
@import "../../common/less/main.less";
.index {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: @body-bg-grayer;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding-bottom: 1.3067rem;
    background-color: @body-bg-grayer;
    .banner {
      height: 6.186667rem;
      .banner-img {
        width: 100%;
        height: 6.186667rem;
      }
    }
    .nav-list{
      padding: 0.2rem;
    }
  }
}
</style>
