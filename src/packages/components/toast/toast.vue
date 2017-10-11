<template>
  <transition name="sy-toast-pop">
    <div v-show="visible" class="sy-toast" :class="customClass">
      <div v-if="type==='toast'" >{{message}}</div>
      <div v-if="type==='toast'" >{{message}}</div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'toast',
  props: {
    message: String,
    type: {
      type: String,
      default: 'toast'
    },
    position: {
      type: String,
      default: 'middle'
    }
  },
  data () {
    return {
      visible: false
    }
  },
  created: function () {
  },
  methods: {
  },
  components () {
  },
  computed: {
    customClass () {
      var classes = []
      switch (this.position) {
        case 'top':
          classes.push('is-placetop')
          break
        case 'bottom':
          classes.push('is-placebottom')
          break
        default:
          classes.push('is-placemiddle')
      }
      classes.push(this.className)
      return classes.join(' ')
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../../styles/common/default.less";
  @toast-prefix-cls: ~"@{css-prefix}toast";
  .@{toast-prefix-cls} {
    background: rgba(0,0,0,0.70);
    border-radius: 10px;
    font-size: 20px;
    color: #FFFFFF;
    position: fixed;
    padding:16px 30px;
    transition: opacity .3s linear;
    &-default{
    }
    &-pop-enter, &-pop-leave-active {
      opacity: 0;
    }
  }
  .is-placetop{
    left: 50%;
    top: 50px;
    transform: translate(-50%, 0%);
  }
  .is-placemiddle{
     left: 50%;
     top: 50%;
     transform: translate(-50%, -50%);
  }
  .is-placebottom{
    left: 50%;
    bottom: 50px;
    transform: translate(-50%, 0%);
  }
</style>
