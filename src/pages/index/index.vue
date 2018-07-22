<template>
  <div class="index">
    <div class="content">
      <div class="banner">
        <swiper loop auto dots-position="center" height="6.186667rem" :interval="3800">
          <swiper-item v-for="(item,index) in bannerList" :key="index">
            <img class="banner-img" :src="rootUrl+item.adFile" alt="">
          </swiper-item>
        </swiper>
      </div>
      <div class="nav-list">
        <grid :show-vertical-dividers="false" :cols="5" :show-lr-borders="false">
          <grid-item v-for="(item,index) in navList" :key="index" :label="item.btnName" @on-item-click="goPage(item)">
            <img slot="icon" :src="rootUrl+item.btnImg">
          </grid-item>
        </grid>
      </div>
      <div class="article-wrap">
        <div class="article-list">
          <i class="article-ico"></i>
          <div class="article-list-item">
            <swiper loop auto height="25px" direction="vertical" :interval="2800" :show-dots="false">
              <swiper-item v-for="(item,index) in articleList" :key="index">
                <p class="article-title" @click="goArticlePage(item.articleId)">{{item.articleTitle}}</p>
              </swiper-item>
            </swiper>
          </div>
          <div class="article-more">更多</div>
        </div>
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
      navList: [], //导航按钮
      articleList: [], //文章列表数据
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
    //首页数据
    _getIndexData() {
      $GET(ApiUrls.getIndexData).then(res => {
        console.log(res);
        this.rootUrl = res.domain;
        this.bannerList = res.swiper;
        this.articleList = res.news;
      });
    },
    //导航数据
    _getIndexNavBtn() {
      $GET(ApiUrls.indexNavBtn).then(res => {
        //console.log(res);
        this.navList = res.data;
      });
    },
    //导航点击
    goPage(item) {
      console.log(item);
    },
    //文字列表点击
    goArticlePage(articleId){
      console.log(articleId);
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
    .nav-list {
      padding: 0.2rem;
    }
    .article-wrap {
      padding: 0.4rem 0.4rem 0 0.4rem;
      .article-list {
        position: relative;
        width: 100%;
        height: 44px;
        background-color: #fff;
        border-radius: 8px;
        .article-ico{
          position: absolute;
          display: block;
          background: url('article_ico.png') no-repeat;
          width: 66px;
          height: 15px;
          top: 16px;
          left: .266667rem;
          background-size: 66px 15px;
        }
        .article-list-item {
          position: absolute;
          top: 10px;
          left: 2.4rem;
          width: 5.8rem;
          line-height: 25px;
          border-left: 1px solid #d7d7d7;
          padding-left: .266667rem;
          box-sizing: border-box;
          .article-title {
            font-size: 13px;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        .article-more{
          position: absolute;
          top: 10px;
          right: .24rem;
          line-height: 25px;
          color: @text-color;
        }
      }
    }
  }
}
</style>
