<template>
  <div id="q-app">
    <main>
    <router-view />
    </main>
  </div>
</template>

<script type="text/javascript" src="../src/common.js"></script>
<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
@import '~variables'
@import 'css/common.css'

main
  text-align center
  margin-top 0px

header
  margin 0
  height 10px
  background-color $dark

body
  background-color $primary


</style>
