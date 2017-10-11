<template>
  <div class="hello">
    <!--<Button type="primary" htmlType="button">-->
      <!--<span>123546</span>-->
    <!--</Button>-->
    <Button type="primary" htmlType="button" @click="showToast">
      <span>123546</span>
    </Button>
    <button >45645646</button>
  </div>
</template>

<script>
  import Toast from './components/toast'// eslint-disable-line
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      showToast () {
        this.$toast({
          type: 'toast',
          message: '取消关注成功',
          position: 'bottom',
          duration: 2500
        })
      }
    },
    components: {
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
