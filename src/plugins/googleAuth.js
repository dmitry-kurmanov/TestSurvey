import GoogleAuth from 'vue-google-oauth'

// leave the export, even if you don't use it
export default ({ app, router, Vue }) => {
  //Vue.use(GoogleAuth, { clientID: 'xxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com' })
  Vue.use(GoogleAuth, { client_id: '3653819628-350cb8k3fhpgpsah2bonr3jtn1jbj1qk.apps.googleusercontent.com' })
  
  Vue.googleAuth().load()
}
