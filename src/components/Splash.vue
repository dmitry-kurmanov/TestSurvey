<template>
  <div class="splash fixed-center" style="width:95%">
    <img src="~assets/logo_full.png"/>
    <h2>DISPATCH SERVICE</h2>
    <br/>
    <q-spinner-oval size="40" color="white" />
 </div>
</template>

<script>
import { QBtn, QIcon, QSpinnerOval } from 'quasar'
import axios from 'axios'
export default {
  name: 'Splash',
  components: { QBtn, QIcon, QSpinnerOval },
   data () {
    return {
      CsrNumber: '',
      EmergNumber: '',
      UserAuthenticated: false,
      ChatBotUrl: '',
      Custom1Label:'',
      Custom1URL:'',
      Custom2Label:'',
      Custom2URL:'',
      Custom3Label:'',
      Custom3URL:'',
      Custom4Label:'',
      Custom4URL:'',
      AppInstance: true
    }
  },
  mounted () {
    var vm = this
      
      
    setTimeout(()=>this.$router.push('surveycomp'), 2000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
@import '~variables'
h2
  color #F2C037
  font-weight 600
</style>
