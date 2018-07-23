<template>
<div class="LoginLayout">
  <router-view> </router-view>
  <!-- <q-btn @click="$router.push('/path/to/new/page')" color="primary" /> -->
</div>
</template>

<script>
import {
  QBtn,
  QIcon
} from 'quasar'
export default {
  name: 'LoginLayout',
  components: {
    QBtn,
    QIcon
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
@import '~variables'

.hello
  margin-top 10px
  a
  color #35495E

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

</style>
