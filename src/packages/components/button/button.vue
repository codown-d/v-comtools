<template>
  <button :type="htmlType" :class="classes" :disabled="disabled" @click="handleClick">
    <span v-if="showSlot" ref="slot">
      <slot></slot>
    </span>
  </button>
</template>
<script>
  import { oneOf } from '../../utils/assist'
  const prefixCls = 'sy-btn'
  export default {
    name: 'Button',
    components: { },
    props: {
      type: {
        validator (value) {
          return oneOf(value, ['primary', 'ghost', 'dashed', 'text', 'info', 'success', 'warning', 'error', 'default'])
        }
      },
      shape: {
        validator (value) {
          return oneOf(value, ['circle', 'circle-outline'])
        }
      },
      size: {
        validator (value) {
          return oneOf(value, ['small', 'large', 'default'])
        }
      },
      loading: Boolean,
      disabled: Boolean,
      htmlType: {
        default: 'button',
        validator (value) {
          return oneOf(value, ['button', 'submit', 'reset'])
        }
      },
      icon: String,
      long: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        showSlot: true
      }
    },
    computed: {
      classes () {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-${this.type}`]: !!this.type,
            [`${prefixCls}-long`]: this.long,
            [`${prefixCls}-${this.shape}`]: !!this.shape,
            [`${prefixCls}-${this.size}`]: !!this.size,
            [`${prefixCls}-loading`]: this.loading != null && this.loading,
            [`${prefixCls}-icon-only`]: !this.showSlot && (!!this.icon || this.loading)
          }
        ]
      }
    },
    methods: {
      handleClick (event) {
        this.$emit('click', event)
      }
    },
    mounted () {
      this.showSlot = this.$slots.default !== undefined
    }
  }
</script>

<style scoped lang="less">
  @import "../../styles/common/default.less";
  @btn-prefix-cls: ~"@{css-prefix}btn";
  .@{btn-prefix-cls} {
    font-weight: bold;
    line-height: 40px;
    margin: 0 auto;
    &-primary{
      background: #ccc;
      color:@sy-text-color
    }
  }
</style>

