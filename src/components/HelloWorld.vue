<template>
    <div class="hello">
      <h1>{{ msg }}</h1>
      <p @click="jump">跳转到demo</p>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    name: "HelloWorld",
    data() {
        return {
            msg: "Welcome to Your Vue.js App"
        };
    },
    methods: {
        jump() {
            this.$router.push({
                path: `/demo`
            });
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.hello {
    width: 100%;
    height: 2000px;
}
</style>
