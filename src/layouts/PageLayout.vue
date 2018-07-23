<template>
<div>
  <q-layout ref="layout" view="hHh lpr fff">
    <q-layout-header>
      <q-toolbar class='toolbarbkground'>
        <div  class v-if="this.AppInstance === true ">
            <q-btn flat @click="showLeft = !showLeft">
              <q-icon name="menu" />
            </q-btn>
        </div>
        <q-toolbar-title>
          TEST SERVICE
        </q-toolbar-title>
        <img src="~assets/logo_small.png" />
      </q-toolbar>
    </q-layout-header>
    <div  class v-if="this.AppInstance === true ">
    <q-layout-drawer side="left" v-model="showLeft">
      <q-list-header class="menulogo"> </q-list-header>
      <q-item :to= HomeURL>
        <q-item-main label="Home" />
      </q-item>
      <q-item :to= Custom1URL>
        <q-item-main label>{{Custom1Label}}</q-item-main>
      </q-item>
      <q-item :to= Custom2URL>
        <q-item-main label>{{Custom2Label}}</q-item-main>
      </q-item>
      <q-item :to= Custom3URL>
        <q-item-main label>{{Custom3Label}}</q-item-main>
      </q-item>
      <q-item :to= Custom4URL>
        <q-item-main label>{{Custom4Label}}</q-item-main>
      </q-item>
      <q-item link @click.native="callChat()">
          <q-item-side icon="chat" />
      <q-item-main label="Chat Channel" sublabel="Digital Bot" />
        </q-item>
      
       
        
    </q-layout-drawer>
    </div>

    <q-page-container>
      <!-- Page insertion point -->
      <router-view></router-view>
    </q-page-container>
    <div  class v-if="this.AppInstance === true ">
    <q-layout-footer v-model="footer" reveal>
        <q-toolbar class='footerToolbarbkground'>      
          <a v-bind:href=CSRNumber>
          <q-btn flat class="footertext">
            <q-icon name="phone" color="yellow" size="30pt"  class="q-mr-x" />
            <span class="q-ml-xs"> CALL AGENT </span>
          </q-btn>
          </a>
          <q-toolbar-title>
            
          </q-toolbar-title>
         <a v-bind:href=EmergNumber><q-btn flat @click="showLeft = !showLeft" class="footertext">
            <!-- <q-icon name="live_help" color="red-14" size="30pt" /> -->
            
            <q-chip round color="red-14">911</q-chip>
            <span class="q-ml-xs">EMERGENCY </span> 
          </q-btn></a>
        </q-toolbar>
    </q-layout-footer>
    </div>

  </q-layout>
</div>
</template>

<script>
import { openURL} from 'quasar'
import {
  QLayout,
  QToolbar,
  QBtn,
  QIcon,
  QItemMain,
  QLayoutHeader,
  QLayoutFooter,
  
 
} from 'quasar'
export default {
  name: 'PageLayout',
  components: {
    QLayout,
    QToolbar,
    QBtn,
    QIcon,
    QItemMain,
    QLayoutHeader,
    openURL,
     QLayoutFooter,
  },
  data() {
    return {
      showLeft: true,
      footer:true,
      CSRNumber: '',
      EmergNumber: '',
      UserAuthenticated: false,
      ChatBoxUrl: '',
      AppInstance: false,
      HomeURL: '/app/home',
      Custom1Label: '',
      Custom1URL: '',
      Custom2Label: '',
      Custom2URL: '',
      Custom3Label: '',
      Custom3URL: '',
      Custom4Label: '',
      Custom4URL: ''
    }
  },
  mounted () {
     var vm = this 
     vm.UserAuthenticated = vm.$root.UserAuthenticated
     vm.CSRNumber = 'tel:'+this.$root.CsrNumber
     vm.EmergNumber = 'tel:'+this.$root.EmergNumber
     vm.ChatBoxUrl = this.$root.ChatBotUrl
     vm.Custom1Label = this.$root.Custom1Label
     vm.Custom1URL = this.$root.Custom1URL
     vm.Custom2Label = this.$root.Custom2Label
     vm.Custom2URL = this.$root.Custom2URL
     vm.Custom3Label = this.$root.Custom3Label
     vm.Custom3URL = this.$root.Custom3URL
     vm.Custom4Label = this.$root.Custom4Label
     vm.Custom4URL = this.$root.Custom4URL

     vm.AppInstance = this.$root.AppInstance
     console.log("PageLayout="+vm.AppInstance)
  },
    methods:{
    openURL,
    callChat(){
      var vm = this
      openURL(vm.ChatBoxUrl)
    }
  }
}
</script>

<style>
.toolbarbkground {
  background-color: black;
  }
.footerToolbarbkground
{
   background-color: black;
   padding-left: 20px;
    padding-right: 20px;
}
  
.footertext{
  color: white;
   margin-top:2px;
   font-size:8pt;
   margin-left:-25px;
   margin-right:-25px;
}

.menulogo {
  background-color: black;
  height: 45px;
}
</style>
