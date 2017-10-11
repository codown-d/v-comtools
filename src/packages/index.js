import Button from './components/button'
import Toast from './components/toast'

const iview = {
  Button
}
const install = function (Vue, opts = {}) {
  if (install.installed) return

  Object.keys(iview).forEach((key) => {
    Vue.component(key, iview[key])
  })
  Vue.$toast = Vue.prototype.$toast = Toast
  install.installed = true
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default Object.assign(iview, {install}) // eslint-disable-line no-undef

