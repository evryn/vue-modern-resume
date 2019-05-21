/* eslint-disable no-unused-vars,no-undef */
import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

let requireComponent = require.context(
  '@/components', true, /\.vue$/
)

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName)

  let componentName = upperFirst(
    camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, ''))
  )
  componentName     = `${componentName}`

  Vue.component(componentName, componentConfig.default || componentConfig)
})
