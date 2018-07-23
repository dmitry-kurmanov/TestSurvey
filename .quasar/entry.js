/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding initialization code.
 * Use "quasar new plugin <name>" and add it there.
 * One plugin per concern. Then reference the file(s) in quasar.conf.js > plugins:
 * plugins: ['file', ...] // do not add ".js" extension to it.
 **/
import './quasar'

import Vue from 'vue'
Vue.config.productionTip = false


import 'quasar-extras/roboto-font'

import 'quasar-extras/material-icons'

import 'quasar-extras/ionicons'

import 'quasar-extras/fontawesome'




import 'quasar-app-styl'


import 'src/css/app.styl'


import App from 'src/App'

import router from 'src/router'


const app = {
  el: '#q-app',
  router,

  ...App
}


const plugins = []

import pluginAxios from 'src/plugins/axios'
plugins.push(pluginAxios)

import pluginGoogleAuth from 'src/plugins/googleAuth'
plugins.push(pluginGoogleAuth)

plugins.forEach(plugin => plugin({ app, router, Vue }))





import FastClick from 'fastclick'
// Needed only for iOS PWAs
if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && window.navigator.standalone) {
  document.addEventListener('DOMContentLoaded', () => {
    FastClick.attach(document.body)
  }, false)
}





new Vue(app)



