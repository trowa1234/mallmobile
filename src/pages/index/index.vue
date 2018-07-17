<template>
  <div class="index">
    <div class="content">
      <div class="banner">
        <swiper loop auto dots-position="center" height="5.333333rem">
          <swiper-item v-for="(item,index) in bannerList" :key="index">
            <img class="banner-img" :src="rootUrl+item.adFile" alt="">
          </swiper-item>
        </swiper>
      </div>
    </div>
    <foot-nav></foot-nav>
  </div>
</template>


<script type="text/ecmascript-6">
import { Swiper, SwiperItem } from "vux";
import footNav from "@/components/foot-nav/foot-nav";
import { $GET, $POST } from "@/api/api";
import ApiUrls from "@/api/url";

export default {
  data() {
    return {
      rootUrl: "", //根路径，用于拼接图片路径
      bannerList: [] //轮播图
    };
  },
  created() {
    this._getIndexData();
  },
  components: {
    footNav,
    Swiper,
    SwiperItem
  },
  methods: {
    _getIndexData() {
      let params = { name: "kidd", age: 36 };
      $GET(ApiUrls.getIndexData, params).then(res => {
        console.log(res);
        this.rootUrl = res.domain;
        this.bannerList = res.swiper;
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
  .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding-bottom: 1.3067rem;
    .banner {
      height: 5.333333rem;
      .banner-img{
        width: 100%;
        height: 5.333333rem;
      }
    }
  }
}
</style>
