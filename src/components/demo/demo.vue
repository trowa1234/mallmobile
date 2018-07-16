<template>
  <div class="demo">
    <h1>{{ msg }}</h1>
    <div class="aaa">
    </div>
    <div class="bbb">
      1像素边框
    </div>
    <p class="vux-1px demo-p">vux 1px边框</p>
    <grid :cols="3" :show-lr-borders="false">
      <grid-item label="Grid" v-for="(i,index) in 9" :key="index" link="/">
        <img slot="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAMAAAC7m5rvAAAAllBMVEUAAAC/v7+qqqrHx8evr6/ExMS5ubmxsbGsrKysrKytra2pqam8vLy9vb2lpaXExMT////s7Oz8/Pz09PTu7u729vb5+fnp6enMzMzLy8vm5ub4+Pjj4+O3t7fx8fHb29vAwMDHx8ePj4/S0tLf39+rq6ulpaWSkpK7u7vY2NjR0dGnp6eenp6ampqysrLPz8+fn5+ioqKXtObzAAAAEHRSTlMA6wT4/e/f0KyZSy/z8mz4uKbH2gAAA6FJREFUSMellody2zAMhuXEGU6TVBgkbGp529np+79cKREUpbrxdfxnn7g+cYACkKku7m5vricPl4v5Yq5arWLJN14+TK5vbu8udLhCsyuHeY6QD0Q0rEHb765mA/DbJIw4j4XGybdIPV5q13lMC9NHnWvKpxhiAVBYPMX4ezffxSQnHmFoahFgkRpEmHCEMeWTdn8zygOnmAVhkxZZ1AImYdyOnvnJrrohrBiymF/3ZgGsYty1XV1kdy6MATKGnJRgoiAVuRRH/inhTe4uu9U1Q8MMmy0nOcdJ5bMwbEs9g9vsJg8yjq2UXxugdJYBtHKTXUeM64bO2c00bGP/dTbBIAIBERyIaFgTASHQyiS7hyC3KaHcQNSm2r2+vbwvBFRt91OjlfssXizZ+q2WjN3yqvXrcfWxmS/362lYGJfYjQm6zBah4InWbtRyy3UlGPaGvDxU6B8EvqVo9NgX2TwUGDosJzb7vQyPBHafxNSZ2zq9hXOdzYoJWM6Hyo5P0h4PkAcMwI5mAxOx/bvgGEOpfqBihoezoeSKLffWAA4xBLIvS8VywYR5RjFaix8PmDBs77+sa8XYDDA2ilVV9xbAiCF0cFUpZniASa6Yn0y5aICO8tMplkvCMGKbV8x7jqhbYSf8fI4YJgwUq46+FjmillIdK8UgYQUrtlvliaspUflqpxgXHbYiIhD/d77w+kG9oGkg1T5eiYhLImkbV2PsbUO96qcnStq8jbCwyFoX+TJPjhK8kpucv+gi66LfmwXF3peJMkQmcct3xcCeGmCxx55qDdBzuF8kA5yYW9bcUy3Wc7x2p+bOuQgYTJdKxctVBG65g4AVMMCoVgwOECjFlOMDKFbTbz+camcRilwxvS84rX79cPQztYrh51HM+DMtZPmGilkYOQUDiuX1iVPA44F7p2DGLghYZwP+8SJDjKdvADqbg+SCOtmyw9p94anDKwCDw7Pq8JJ7LduTga69rtaf0b3uIJyneAySe32AIPdc+r8D1bM6c23oulzvzB9S6BDnf1+HDifkUugYBCrT1OcCVd1QClQpLALQubDoHAGlsBiDMG3J0pMUthdzKhfw5LtLiUE4hnx0AgDNtnEQVZYQ5XyHf8jWasjXBAPBxgQDziQYFqwmGNmMlIrpDH+ZzihHs5A8+co4eeKUPEFKngKHIXnKvn0H++epmoWppoaP079JDL8//lsa+p9Jb0qx77sUexG0WmmhS7HvRyn2TxZ1zUyK+LY0AAAAAElFTkSuQmCC">
        <span slot="label">{{index}}</span>
      </grid-item>
    </grid>
    <p>
      <i class="iconfont icon-checked"></i>
      <i class="iconfont icon-bcm"></i>
    </p>
    <div class="odiv"></div>
  </div>
</template>

<script>
import { Grid, GridItem } from "vux";
import { $GET,$POST } from "@/api/api";
import ApiUrls from "@/api/url";

export default {
  name: "demo",
  data() {
    return {
      msg: "2x，3x背景图",
      list: []
    };
  },
  created() {
    this._getIndexData();
  },
  components: {
    Grid,
    GridItem
  },
  methods: {
    _getIndexData() {
      let params = { name: "kidd",age:36};
      $GET(ApiUrls.getIndexData, params).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style scoped lang="less">
@import "../../common/less/main.less";
@import "~vux/src/styles/1px.less";
.demo {
  height: 2000px;
}
.aaa {
  width: 90px;
  height: 96px;
  .bg-image("test");
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 auto;
}
.bbb {
  width: 100%;
  height: 96px;
  .border-1px(#f00);
  line-height: 96px;
  text-align: center;
}
.demo-p {
  border-color: aqua;
  width: 90%;
  margin: 20px auto;
  font-size: 0.1867rem;
}
.odiv {
  width: 2rem;
  height: 2rem;
  background-color: #f00;
}
</style>
