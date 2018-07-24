<template>
  <div class="surveycomp">
    <div class="col-12 aligncenter q-mt-sm" >
        <div class="col-.5"> </div>
        <br/>
        <h2 style="font-weight:bold">Customer Survey</h2>
    </div>

         <div class="col-.5"> </div>

        <div class="col-11 q-mb-sm">
          <span class="StandardText">To help improve our service, please complete this survey pertaining to your case</span><br/>
          <span class="LabelText2">Service Request Number:&nbsp;</span><span class="TextDetails">{{casenumber}}</span>
          <br/>
         
        <span class="LabelText2">Service Type:&nbsp;</span><span class="TextDetails">{{serviceType}}</span>
        </div>
         
         <div id="surveyContainer"><survey :survey="survey"></survey>
         
         </div>
        
         <div class="col-1" v-if="surveyComplete">

           <br/>
           <q-btn @click="$router.push('/')" push color="secondary" >Exit</q-btn>
       </div>
    
  </div>
  
</template>

<!--moved all the scripts to the seperate file RequestScript.js-->
<script>
import { Notify } from "quasar";
import {
  QBtn,
  QIcon,
  QInput,
  QSlider,
  QCarousel,
  QCarouselSlide,
  QBtnGroup,
  QSpinnerOval,
  QDatetime,
  QAlert,
  date,
  QBtnToggle,
  QDialog,
  QSelect,
  Dialog,
  QCollapsible,
  QCard,
  QCardTitle,
  QCardMain,
  QCardMedia,
  QCardSeparator,
  QCardActions
} from "quasar";
import axios from "axios";
import Vue from "vue";
import moment from "moment";

import VueLogger from "vuejs-logger";

//import VueTelInput from 'vue-tel-input'
//import 'vue-tel-input/dist/vue-tel-input.css';
//Vue.use(VueTelInput)

const options = {
  // required ['debug', 'info', 'warn', 'error', 'fatal']
  logLevel: "debug",
  stringifyArguments: true,
  showLogLevel: true,
  showMethodName: true,
  separator: "|",
  showConsoleColors: true
};
Vue.use(VueLogger, options);

const today = new Date();
//Survey Start
// import "survey-vue/survey.css";
//import 'bootstrap.min.css'
import * as SurveyVue from "survey-vue";

Vue.use(SurveyVue);
var survey = new SurveyVue.Model();

console.log("after use(SurveyVue");
//Survey.cssType =  'survey-vue/survey.vue.js'

//Survey End
console.log("before export");
export default {
  name: "surveycomponent",
  components: {
    QBtn,
    QIcon,
    QInput,
    QSlider,
    QCarousel,
    QCarouselSlide,
    QBtnGroup,
    QSpinnerOval,
    QDatetime,
    QDatetime,
    QDialog,
    QSelect,
    Dialog,
    QCollapsible,
    QCard,
    QCardTitle,
    QCardMain,
    QCardMedia,
    QCardSeparator,
    QCardActions,
    SurveyVue
  },

  data() {
    return {
      found: true,
      //survey: SurveyModel,
      //survey,
      survey,
      survey: survey,
      UserID: "",
      email: "test@gmail.com",
      serviceType: "tow",
      casenumber: "00001234",
      //password: '',
      //error: true,

      surveyComplete: false,
      surveyJSON: [],
      questIndex: 0,
      questionArray: []
    };
  },
  beforeRouteEnter(to, from, next) {
    console.log("in beforeRoute");
    if (Object.keys(to.query).length !== 0) {
      //if the url has query (?query)
      next(vm => {
        vm.email = to.query.email;
        vm.serviceType = to.query.serviceType;
        vm.casenumber = to.query.casenum;
      });
    }
    next();
    console.log("leaving beforeRoute");
  },
  mounted() {
    var vm = this;
    console.log("in mounted");

    vm.surveyJSON = {
      questions: [
        {
          type: "radiogroup",
          name: "one",
          isRequired: true,
          title: "Were you able to resolve your request on the first contact?",
          choices: ["Yes", "No "]
        },
        {
          type: "rating",
          name: "two",
          isRequired: true,
          title:
            "How likely are you to recommend this service to your friends and family?",
          mininumRateDescription: "Not Likely",
          maximumRateDescription: "Very Likely"
        }
      ]
    };
    //
    var survey2 = new SurveyVue.Model(vm.surveyJSON);
    vm.survey = survey2;
    //vm.survey.Survey.StylesManager.applyTheme("orange");
    //vm.survey.css.cssType = "bootstrap";
    //vm.survey.css = SurveyVue.surveyCss.getCss();
    //console.log("css="+vm.survey.css)
    // vm.survey.css.navigation.complete = "btn sv_q_complete_btn";
    //  vm.survey.css.navigation["complete"]= "sv_q_complete_btn";
    SurveyVue.StylesManager.applyTheme("bootstrap");

    // vm.survey.onComplete.add(
    //   function(result) {
    //     document.querySelector("#surveyResult");

    //     var currentDate = new Date();
    //     var TransactionDate = moment(currentDate).format(
    //       "YYYY-MM-DDTHH:mm:ss.SSSZ"
    //     );
    //     console.log("num of quest=" + vm.surveyJSON.questions.length);
    //     var returnresponse = "";
    //     vm.questIndex = 0;
    //     vm.questionArray = [];

    //     for (var i = 1; i <= vm.surveyJSON.questions.length; i++) {
    //       //returnresponse = returnresponse + "q"+i+":"+vm.surveyJSON.questions[vm.questIndex].title+",a"+i+":"
    //       switch (i) {
    //         case 1:
    //           //returnresponse = returnresponse +result.data.one
    //           console.log(
    //             "q" + i + " = " + vm.surveyJSON.questions[vm.questIndex].title
    //           );
    //           vm.questionArray[vm.questIndex] = {
    //             Question: vm.surveyJSON.questions[vm.questIndex].title,
    //             Answer: result.data.one
    //           };
    //           break;
    //         case 2:
    //           //returnresponse = returnresponse + result.data.two
    //           vm.questionArray[vm.questIndex] = {
    //             Question: vm.surveyJSON.questions[vm.questIndex].title,
    //             Answer: result.data.two
    //           };
    //           break;
    //         case 3:
    //           //returnresponse = returnresponse + result.data.three
    //           vm.questionArray[vm.questIndex] = {
    //             Question: vm.surveyJSON.questions[vm.questIndex].title,
    //             Answer: result.data.three
    //           };
    //           break;
    //         case 4:
    //           //returnresponse = returnresponse + result.data.four
    //           vm.questionArray[vm.questIndex] = {
    //             Question: vm.surveyJSON.questions[vm.questIndex].title,
    //             Answer: result.data.four
    //           };
    //           break;
    //         case 5:
    //           //returnresponse = returnresponse + result.data.five
    //           vm.questionArray[vm.questIndex] = {
    //             Question: vm.surveyJSON.questions[vm.questIndex].title,
    //             Answer: result.data.five
    //           };
    //           break;
    //       }

    //       vm.questIndex++;
    //       //if (i < vm.surveyJSON.questions.length){
    //       //  returnresponse = returnresponse+','
    //       //}
    //     }

    //     vm.surveyJSON.questions.length;
    //     var json = "";

    //     json = JSON.stringify({
    //       Transdate: TransactionDate,
    //       CaseNumber: vm.casenumber,
    //       Survey: vm.questionArray,
    //       Channel: "mobile"
    //     });
    //     vm.sendResults(json);

    //     vm.surveyComplete = true;
    //   }.bind(this)
    // );

    // vm.survey.onUpdateQuestionCssClasses.add(function(survey, options) {
    //   var classes = options.cssClasses;
    //   if (options.question.getType() !== "rating") {
    //     classes.title = "sq-title";
    //     //classes.root = "sq-root";
    //   } else {
    //     classes.item = "sv_q_rating_item rating-item";
    //   }

    //   if (options.question.isRequired) {
    //     classes.title = "sq-title sq-title-required";
    //     //classes.root = "sq-root sq-root-required";
    //   }

    //   // classes.navigation = "sv_q_complete_btn";
    // });
    // vm.survey.onUpdatePanelCssClasses.add(function(survey, options) {
    //   var classes = options.cssClasses;
    //   classes.complete = "btn sv_q_complete_btn";
    // });
  },

  methods: {
    sendResults(data) {
      console.log("In SendResults Method JsonData=" + data);
      alert("survey results" + data);
    },
    buildSurveyReturn(numOfQuestions) {
      switch (i) {
        case 1:
          //returnresponse = returnresponse + "\""+result.data.one+"\""
          returnresponse = returnresponse + result.data.one;
          break;
        case 2:
          returnresponse = returnresponse + result.data.two;
          break;
        case 3:
          returnresponse = returnresponse + result.data.three;
          break;
        case 4:
          returnresponse = returnresponse + result.data.four;
          break;
        case 5:
          returnresponse = returnresponse + result.data.five;
          break;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
@import '~variables';

.surveycomp {
  margin-top: 20px;

  a {
    color: #35495E;
  }
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

h5 {
  color: white;
}

h2 {
  color: orange;
}

.error {
  color: red;
}

.TextDetails {
  margin-top: 5px;
  font-size: 14px;
  color: orange;
}

.LabelText2 {
  font-size: 14px;
  color: white;
  font-weight: bold;
}

.StandardText {
  font-size: 14px;
  color: white;
}

.sq-title {
  font-size: 20px;
  margin-left: 20px;
  color: black;
}

.sq-title-required {
  color: black;
}

.sq-label {
  margin-left: 30px;
  color: black;
}

.sq-item:nth-child(1) {
  margin-bottom: 5px;
}

.sv_qstn .sv_q_rating_min_text {
  color: #d9534f;
}

.sv_qstn .sv_q_rating_max_text {
  color: #1ab394;
}

.sv_qstn label:first-child .sv_q_rating_item_text {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.sv_qstn label:last-child .sv_q_rating_item_text {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.sv_qstn .sv_q_rating_item_text:hover {
  background: #179d82;
  color: white;
}

.sv_qstn .sv_q_rating_item_text:active .sv_q_rating_item_text {
  background-color: #179d82;
  border-color: #179d82;
  color: white;
}

.sv_complete_btn {
  background-color: orange;
  color: white;
  font-size: 30px;
}

.sv_complete_btn:hover, .sv_complete_btn:focus {
  color: white;
  opacity: 0.8;
}
</style>
