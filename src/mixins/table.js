import Vue from 'vue'

export default {
  data () {
    return {
      vueComponents: []
    }
  },
  methods: {
    vueComponent (obj) {
      const key = `_vue_component_${this.vueComponents.length}`
      this.vueComponents.push({
        el: `.${key}`,
        name: key,
        ...obj
      })
      return `<div class="${key}"></div>`
    },
    onBsTablePostBody () {
      if (!this.vueComponents.length) return
      for (let i = this.vueComponents.length - 1; i >= 0; i--) {
        const component = this.vueComponents[i]
        if (document.getElementsByClassName(component.name)) {
          new Vue(component)
          this.vueComponents.splice(i, 1)
        }
      }
    }
  }
}
