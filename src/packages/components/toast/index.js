import Vue from 'vue'
import toast from './toast.vue'

const ToastConstructor = Vue.extend(toast)
let instanceList = []
let getAnInstance = () => {
  if (instanceList.length > 0) {
    let instance = instanceList[0]
    instance.splice(0, 1)
    return instance
  }
  return new ToastConstructor({
    el: document.createElement('div')
  })
}
let removeDom = function (event) {
  if (event.target.parentNode) {
    event.target.parentNode.removeChild(event.target)
  }
}
ToastConstructor.prototype.close = function () {
  this.visible = false
  this.$el.addEventListener('transitionend', removeDom)
}
let Toast = (options = {}) => {
  let duration = options.duration
  let instance = getAnInstance()
  instance.type = options.type
  instance.message = options.message
  instance.position = options.position || 'middle'
  instance.duration = options.duration || 2500
  console.log(instance.position)
  document.body.appendChild(instance.$el)
  Vue.nextTick(() => {
    instance.visible = true
    ~duration && (instance.timer = setTimeout(function () {
      if (instance.closed) return
      instance.close()
    }, duration))
  })
  return instance
}
export default Toast
