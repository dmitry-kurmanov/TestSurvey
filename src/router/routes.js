import splash from 'components/Splash.vue'

import PageLayout from 'layouts/PageLayout.vue'

import SurveyComponent from 'components/SurveyComponent.vue'



export default [
  {
    path: '/',
    component: PageLayout,
    children: [
     
      
      {path: 'surveycomp', name: 'surveycomponent', component: SurveyComponent}
    ]
  },
 
  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
