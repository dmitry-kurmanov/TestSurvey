// Configuration for roam app

module.exports = function (ctx) {
  return {
    plugins: [
      'axios'
    ],
    css: [
      'app.styl'
    ],
    extras: [
      ctx.theme.mat ? 'roboto-font' : null,
      'material-icons',
      'ionicons',
      // 'mdi',
      'fontawesome'
    ],
    supportIE: true,
    vendor: {
      add: [],
      remove: []
    },
    build: {
      scopeHoisting: true,
      vueRouterMode: 'history',
      env: ctx.dev
      ? { // so on dev we'll have
      API: JSON.stringify('http://localhost:1272/api/')
      

    }
    : { // and on build (production):
    
      API: JSON.stringify('http://localhost:1272/api/')

    },
    //publicPath: "/ds/",
    // gzip: true,
    // analyze: true,
    // extractCSS: false,
    // useNotifier: false,
    extendWebpack (cfg) {
    }
  },
  devServer: {
     https: false,
     //port: 8080,
    open: true // opens browser window automatically
  },
  // framework: 'all' --- includes everything; for dev only!
  framework: {
    components: [
      'QLayout',
      'QLayoutDrawer',
      'QPageContainer',
      'QPage',
      'QToolbar',
      'QToolbarTitle',
      'QBtn',
      'QIcon',
      'QList',
      'QListHeader',
      'QItem',
      'QItemMain',
      'QItemSide',
      'QModal',
      'QBtnGroup',
      'QBtnDropdown',
      'QBtnToggle',
      'QSpinnerDots',
      'QDatetimePicker',
      'QDatetime',
      'QAlert',
      'QSelect',
      'QDialog',
      'QChip',
      'QPageSticky'
    ],
    directives: [
      'Ripple'
    ],
    plugins: [
      'Notify','AddressbarColor',
      'Dialog',
      'Loading'

    ]
  },
  // animations: 'all' --- includes all animations
  animations: [
  ],
  pwa: {
    cacheExt: 'js,html,css,ttf,eot,otf,woff,woff2,json,svg,gif,jpg,jpeg,png,wav,ogg,webm,flac,aac,mp4,mp3',
    manifest: {
      gcm_sender_id:'395648779914',
      name: 'Dispatch Service',
      short_name: 'Dispatch Service',
      description: 'DXC Dispatch Service - Roadside Vehicle Assistance',
      display: 'standalone',
      orientation: 'portrait',
      background_color: '#555',
      theme_color: '#027be3',
      icons: [
        {
          'src': 'statics/icons/icon-128x128.png',
          'sizes': '128x128',
          'type': 'image/png'
        },
        {
          'src': 'statics/icons/icon-192x192.png',
          'sizes': '192x192',
          'type': 'image/png'
        },
        {
          'src': 'statics/icons/icon-256x256.png',
          'sizes': '256x256',
          'type': 'image/png'
        },
        {
          'src': 'statics/icons/icon-384x384.png',
          'sizes': '384x384',
          'type': 'image/png'
        },
        {
          'src': 'statics/icons/icon-512x512.png',
          'sizes': '512x512',
          'type': 'image/png'
        }
      ]
    }
  },
  cordova: {
    // id: 'org.cordova.quasar.app'
  },
  electron: {
    extendWebpack (cfg) {
      // do something with cfg
    },
    packager: {
      // OS X / Mac App Store
      // appBundleId: '',
      // appCategoryType: '',
      // osxSign: '',
      // protocol: 'myapp://path',

      // Window only
      // win32metadata: { ... }
    }
  },

  // leave this here for Quasar CLI
  starterKit: '1.0.0-beta.4'
}
}
