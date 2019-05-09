<template>
  <div class="home">
    <v-content>
      <v-container grid-list-md>
        
        <v-layout>
          <v-flex xs12>
            <img width="180px" alt="Logo" src="../../assets/LEP_logo.png" v-icon @click="backhome">
            <h3 class="ma-3">Language Exchange Partner program for TokyoTech</h3>
            <h1 class="mb-4">Registration</h1>
          </v-flex>
        </v-layout>

        <v-card flat v-if="showagreement">
          <v-card-text>
            <p class="text-xs-left">This application form is for the Language Exchange Partner program (LEP) that takes place during the fourth quarter in 2018 academic year.
            <br>LEP is the system for TokyoTech students learning languages through conversation with your partner. This Google form is required to fill in so we can suggest the best partner for this program.
            <br>The important information (name, student ID, and e-mail address) will be deleted when this program has finished for those who get partners, and when matching has finished for those who could not get partners.</p>
            <p class="d-inline-flex">*Before you join, please read the overview of LEP and the terms of use.</p>
            <ul>
              <li><a href="https://drive.google.com/open?id=1T8HfqHmq4urYis2j4i8AfRbQbxKCkTuc" target="_blank" rel="noopener">Overview of LEP</a></li>
              <li><a href="https://drive.google.com/file/d/1ka0aC5JxEsRdrHPIEgTpENAHPkLj2VAk/view?usp=sharing" target="_blank" rel="noopener">Terms of use</a></li>
            </ul>
            <br>
            <p class="text-xs-left">本フォームは、2018年度第4クオーター中に行われるLanguage Exchange Partner制度(LEP)のための応募フォームです。
            <br>LEPは，東京工業大学に在籍する学生が，語学パートナーとの会話を通じて言語習得を目指すシステムです．本フォームはより楽しく・効率的に学習が行えるパートナーを提案するために必要なものです．参加をご希望の方は必要事項に記入をお願いいたします．
            <br>なお，マッチングできた学生に関しては制度実施期間終了後に，マッチングできなかった学生に関してはマッチング期間後に重要な個人情報（氏名、学生番号、メールアドレス）を全て消去いたします。</p>
            <p class="d-inline-flex">※参加を希望される方は制度概要と利用規約をお読みください。</p>
            <ul>
              <li><a href="https://drive.google.com/open?id=1T8HfqHmq4urYis2j4i8AfRbQbxKCkTuc" target="_blank" rel="noopener">制度概要</a></li>
              <li><a href="https://drive.google.com/file/d/1ka0aC5JxEsRdrHPIEgTpENAHPkLj2VAk/view?usp=sharing" target="_blank" rel="noopener">利用規約</a></li>
            </ul>
            <v-radio-group v-model="agreement" :mandatory="false">
              <v-radio label="I agree / 同意する" value="agreement-1"></v-radio>
              <v-radio label="I do not agree / 同意しない" value="agreement-2"></v-radio>
            </v-radio-group>
            <v-btn v-on:click="gotonewaccount">Create New Account</v-btn>
          </v-card-text>
        </v-card>
        
        <v-card flat v-if='shownewaccount'>
          <v-card-text>
            <h1> Account Information </h1>
            <v-text-field 
            type="string"
            v-model="titechemail" 
            placeholder="Titech email address">
            </v-text-field>
            <v-text-field
            type="password" 
            v-model="password"
            placeholder="password"
            :rules="[rules.password, rules.length(6)]">
            </v-text-field>
            <h3 v-if="alert1"> <font color="red"> Input 'titech.ac.jp' e-mail address and password </font> </h3>
            <v-btn v-on:click="gotopersonalinfo">Next</v-btn>
          </v-card-text>
        </v-card>

        <v-card flat v-if="showpersonalinfo">
          <v-card-text>
            <h1 class="mb-3"> Personal Information</h1> 
            
            <v-text-field
              v-model="username"
              label="User Name"
              placeholder=""
              box>
            </v-text-field>
             <v-text-field
              v-model="email2"
              label="Second email address (optional)"
              placeholder=""
              box>
            </v-text-field>
            <v-text-field
              v-model="studentid"
              label="Student ID"
              placeholder=""
              box>
            </v-text-field>
            <v-overflow-btn
              v-model="gender"
              :items="dropdown_gender"
              label="Gender"
            ></v-overflow-btn>

            <v-overflow-btn
              v-model="nation"
              :items="countries"
              label="Nationality"
            ></v-overflow-btn>
            <v-overflow-btn
              v-model="major"
              :items="department"
              label="Department"
            ></v-overflow-btn>

            <v-overflow-btn
              v-model="degree"
              :items="dropdown_degree"
              label="Degree"
            ></v-overflow-btn>
            <h3 v-if="alert2"> <font color="red"> Fill in the forms </font> </h3>
            <v-btn v-on:click="backtonewaccount">Back</v-btn>
            <v-btn v-on:click="gotoschedule">Next</v-btn>
          </v-card-text>
        </v-card>

        <v-card flat v-if="showschedule">
          <v-card-text>
            <h1 class="mb-3">Your Schedule</h1>
            <h3>Please check your schedule available</h3>
            <v-data-table
              v-model = "selected"
              :headers="headers"
              :items="time"
              :rows-per-page-items="[-1]"
              hide-actions
            >
              <template slot="items" slot-scope="props">
                <td>{{ props.item.name }}</td>
                <td><v-checkbox v-model="props.item.selected" primary hide-details></v-checkbox></td>
                <td><v-checkbox v-model="props.item.tuesdayValue.selected"></v-checkbox></td>
                <td><v-checkbox v-model="props.item.wednesdayValue.selected"></v-checkbox></td>
                <td><v-checkbox v-model="props.item.thursdayValue.selected"></v-checkbox></td>
                <td><v-checkbox v-model="props.item.fridayValue.selected"></v-checkbox></td>
              </template>
            </v-data-table>

            <p class="text-xs-left"><a>If you are available on weekend, please tap the checkbox below</a></p>

            <v-checkbox
              v-model="weekend"
              color="red darken-3"
              :label="`Weekend: ${weekends[weekend].toString()}`"
            ></v-checkbox>

            <v-overflow-btn
              v-model="campus"
              :items="dropdown_campus"
              label="Campus"
            ></v-overflow-btn>

            <v-overflow-btn
              v-model="frequency"
              :items="dropdown_freaquency"
              label="Preferred frequency per one week"
            ></v-overflow-btn>
            <v-btn v-on:click="backtopersonalinfo">Back</v-btn>
            <v-btn v-on:click="gotolanguagewant">Next</v-btn>
          </v-card-text>
        </v-card>

        <v-card flat v-if="showlanguagewant">
          <v-card-text>
            <h1 class="mb-3"> Language You Want to Learn </h1>
            <p class="d-inline-flex">*As for the language proficiency, please check the CEFR.</p>
              <ul>
                <li><a href="https://drive.google.com/open?id=1T8HfqHmq4urYis2j4i8AfRbQbxKCkTuc" target="_blank" rel="noopener">CEFR</a></li>
              </ul>
             <v-overflow-btn
              v-model="learnlang1"
              :items="languages"
              label="Language you want to learn"
            ></v-overflow-btn>
            <v-overflow-btn
              v-model="learnlang1level"
              :items="dropdown_want_level1"
              label="Language proficiency"
            ></v-overflow-btn>
            <v-overflow-btn
              v-model="learnlang2"
              :items="languages"
              label="2nd Language you want to learn (optional)"
            ></v-overflow-btn>
            <v-overflow-btn
              v-model="learnlang2level"
              :items="dropdown_want_level2"
              label="Language proficiency"
            ></v-overflow-btn>
            <h3 v-if="alert3"> <font color="red"> Select language which you want to learn </font> </h3>
            <v-btn v-on:click="backtoschedule">Back</v-btn>
            <v-btn v-on:click="gotolanguageteach">Next</v-btn>
          </v-card-text>
        </v-card>

        <v-card flat v-if="showlanguageteach">
          <v-card-text>
            <h1> Language You Can Teach</h1>
            <v-overflow-btn
              v-model="teachlang1"
              :items="languages"
              label="Language you can teach"
            ></v-overflow-btn>
            <v-overflow-btn
              v-model="teachlang1level"
              :items="dropdown_teach_level1"
              label="Language proficiency"
            ></v-overflow-btn>
            <v-overflow-btn
              v-model="teachlang2"
              :items="languages"
              label="2nd Language you can teach (optional)"
            ></v-overflow-btn>
            <v-overflow-btn
              v-model="teachlang2level"
              :items="dropdown_teach_level2"
              label="Language proficiency"
            ></v-overflow-btn>
            <v-overflow-btn
              v-model="teachlang3"
              :items="languages"
              label="3rd Language you can teach (optional)"
            ></v-overflow-btn>
            <v-overflow-btn
              v-model="teachlang3level"
              :items="dropdown_teach_level3"
              label="Language proficiency"
            ></v-overflow-btn>
            <h3 v-if="alert4"> <font color="red"> Select language which you can teach </font> </h3>
            <v-btn v-on:click="backtolanguagewant">Back</v-btn>
            <v-btn v-on:click="gotofindinfo">Next</v-btn>
          </v-card-text>
        </v-card>

        <v-card flat v-if="showfindinfo">
          <v-card-text>
            <h1 class="mb-3"> Information for finding partner</h1>
            <v-text-field
              v-model="hobbyinterest"
              label="Hobby and Interest"
              placeholder=""
              box>
            </v-text-field>
            <v-textarea
              v-model="comments"
              box
              name="input-7-4"
              label="Comments"
              value=""
            ></v-textarea>
            <v-btn v-on:click="backtolanguageteach">Back</v-btn>
            <v-btn v-on:click="confirm">Confirm</v-btn>
          </v-card-text>
        </v-card>

        <v-card flat v-if="showconfirm">
          <v-card-text>
            <h1 class="mb-3"> Confirmation</h1>
            <h2 class="mb-3"> Account Information </h2>
            <p> Titech email address: <font size="4" face="bold"> {{titechemail}} </font> </p>
            <p> User Name: <font size="4" face="bold"> {{username}} </font> </p>
            <h2 class="mt-5 mb-3"> Personal Information </h2>
            <p> 2nd email address: <font size="4" face="bold"> {{email2}} </font> </p>
            <p> Student ID: <font size="4" face="bold"> {{studentid}} </font> </p>
            <p> Gender: <font size="4" face="bold"> {{gender}} </font> </p>
            <p> Nationality: <font size="4" face="bold"> {{nation}} </font> </p>
            <p> Department: <font size="4" face="bold"> {{major}} </font> </p>
            <p> Degree: <font size="4" face="bold"> {{degree}} </font> </p>
            <h2 class="mt-5 mb-3"> Language You Want to Learn </h2>
            <p> Language you want to learn: <font size="4" face="bold"> {{learnlang1}} </font>, <font size="4" face="bold"> {{learnlang1level}} </font> </p>
            <p> 2nd language you want to learn: <font size="4" face="bold"> {{learnlang2}} </font>, <font size="4" face="bold"> {{learnlang2level}} </font> </p>
            <h2 class="mt-5 mb-3"> Language You Can Teach </h2>
            <p> Language you can teach: <font size="4" face="bold"> {{teachlang1}} </font>, <font size="4" face="bold"> {{teachlang1level}} </font> </p>
            <p> 2nd language you can teach: <font size="4" face="bold"> {{teachlang2}} </font>, <font size="4" face="bold"> {{teachlang2level}} </font> </p>
            <p> 3rd language you can teach: <font size="4" face="bold"> {{teachlang3}} </font>, <font size="4" face="bold"> {{teachlang3level}} </font> </p>
            <h2 class="mt-5 mb-3"> Information for Finding Partner </h2>
            <p> Hobby and Interest: <font size="4" face="bold"> {{hobbyinterest}} </font> </p>
            <p class="mb-5 mb-3"> Other Comments: <font size="4" face="bold"> {{comments}} </font> </p>
            <v-btn v-on:click="backtofindinfo">Back</v-btn>
            <v-btn v-on:click="signUp">Create New Account</v-btn>
          </v-card-text>
        </v-card>

      </v-container>
    </v-content>
  </div>
</template>

<script>

import firebase from "firebase";
import languages from "../../api/db/languages.js";
import countries from "../../api/db/countries.js";
import department from "../../api/db/department.js";

export default {

  name: "register",

  data() {

    return {
      languages: languages.languages,
      countries: countries.countries,
      department: department.department,
      
      //personal info
      titechemail: null,
      password: null,

      rules: {
        length: len => v => (v || '').length >= len || `Invalid character length, required more than ${len}`,
        password: v => (v || '').match(/^(?=.*[a-z])(?=.*\d)/) ||
          'Password must contain both letters and numbers',
      },
      
      username: null,
      email2: null,
      studentid: null,
      
      gender: null,
      major: null,
      nation: null,
      degree: null,

      weekend: false,
      campus: null,
      frequency: null,

      learnlang1: null,
      learnlang1level: null,
      learnlang2: null,
      learnlang2level: null,

      teachlang1: null,
      teachlang1level: null,
      teachlang2: null,
      teachlang2level: null,
      teachlang3: null,
      teachlang3level: null,

      hobbyinterest: null,
      comments: null,
    //
      agreement: null,

      alert1: false,
      alert2: false,
      alert3: false,
      alert4: false,

      showagreement: true,
      shownewaccount: false,
      showpersonalinfo: false,
      showschedule: false,
      showlanguagewant: false,
      showlanguageteach: false,
      showfindinfo: false,

      selected: [],
      weekends: {true:"available", false:"unavailable"},

      dropdown_gender: ['Male','Female','Others'],

      dropdown_degree: ['B1','B2','B3','B4','Master','Ph.D','Exchange','Visiter','Others'],

      dropdown_campus: ['Ookayama','Suzukake','Both'],

      dropdown_freaquency: ['Once','Twice','Three times','More'],
  
      dropdown_want_level1: ['A0','A1','A2','B1','B2','C1','C2'],
      dropdown_want_level2: ['A0','A1','A2','B1','B2','C1','C2'],
      
      dropdown_teach_level1: ['native','over C1'],
      dropdown_teach_level2: ['native','over C1'],
      dropdown_teach_level3: ['native','over C1'],
     
      headers:[
        {
          text: 'TIMELINE',
          align: 'Center',
          sortable: false,
          value: 'name'
        },
        { text: 'Mon', value: 'mon', sortable: 0 },
        { text: 'Tue', value: 'tue', sortable: 0 },
        { text: 'Wed', value: 'wed', sortable: 0 },
        { text: 'Thu', value: 'thu', sortable: 0 },
        { text: 'Fri', value: 'Fri', sortable: 0 }
      ],
      time: [
        {
          mondayValue: false,
          tuesdayValue: false,
          wednesdayValue: false,
          thursdayValue: false,
          fridayValue: false,
          name: '9:00~10:30'
        },
        {
          mondayValue: false,
          tuesdayValue: false,
          wednesdayValue: false,
          thursdayValue: false,
          fridayValue: false,
          name: '10:45~12:15'
        },
        {
          mondayValue: false,
          tuesdayValue: false,
          wednesdayValue: false,
          thursdayValue: false,
          fridayValue: false,
          name: 'Lunch Time'
        },
        {
          mondayValue: false,
          tuesdayValue: false,
          wednesdayValue: false,
          thursdayValue: false,
          fridayValue: false,
          name: '13:20~14:50'
        },
        {
          mondayValue: false,
          tuesdayValue: false,
          wednesdayValue: false,
          thursdayValue: false,
          fridayValue: false,
          name: '15:05~16:35'
        },
        {
          mondayValue: false,
          tuesdayValue: false,
          wednesdayValue: false,
          thursdayValue: false,
          fridayValue: false,
          name: '16:50~18:20'
        },
        {
          mondayValue: false,
          tuesdayValue: false,
          wednesdayValue: false,
          thursdayValue: false,
          fridayValue: false,
          name: '18:35~'
        }
      ]       
    }
  },

  methods: {

    backhome(){
      this.$router.push('/home')
    },

    gotonewaccount: function() {
      if (this.agreement=="agreement-1") {
        this.shownewaccount=true
        this.showagreement=false
        scrollTo(0,0)
      }
      else if (this.agreement=="agreement-2") {
        this.shownewaccount=false
        //this.$router.push('/')
      }
    },
    
    gotopersonalinfo: function() {
      var value1 = this.titechemail && this.titechemail.trim()
      var value2 = this.password && this.password.trim()
      if (
        value1 != null && value1 != "" &&
        value2 != null && value2 != "" &&
        this.titechemail.match(/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(titech.ac.jp)|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i) != null ) {
          this.shownewaccount=false
          this.showpersonalinfo=true
          this.alert1 = false
          scrollTo(0,0)
      }
      else {
        this.alert1 = true
      }
    },
    backtonewaccount: function() {
      this.shownewaccount=true
      this.showpersonalinfo=false
      scrollTo(0,0)
    },

    gotoschedule: function() {
      var value1 = this.username && this.username.trim()
      var value2 = this.studentid && this.studentid.trim()
      var value3 = this.gender
      var value4 = this.nation
      var value5 = this.degree
      if (
        value1 != null && value1 != "" &&
        value2 != null && value2 != "" &&
        value3 != null && 
        value4 != null &&
        value5 != null) {
          this.showpersonalinfo=false
          this.showschedule=true
          this.alert2 = false
          scrollTo(0,0)
          }
      else {
        this.alert2 = true
      }
    },
    backtopersonalinfo: function() {
      this.showpersonalinfo=true
      this.showschedule=false
      scrollTo(0,0)
    },

    gotolanguagewant: function() {
      this.showschedule=false
      this.showlanguagewant=true
      scrollTo(0,0)
    },
    backtoschedule: function() {
      this.showschedule=true
      this.showlanguagewant=false
      scrollTo(0,0)
    },

    gotolanguageteach: function() {
      if (
        this.learnlang1 != null &&
        this.learnlang1level != null) {
          this.showlanguagewant=false
          this.showlanguageteach=true
          this.alert3 = false
          scrollTo(0,0)
        }
      else {
        this.alert3 = true
      }
    },
    backtolanguagewant: function() {
      this.showlanguagewant=true
      this.showlanguageteach=false
      scrollTo(0,0)
    },

    gotofindinfo: function() {
      if (
        this.teachlang1 != null &&
        this.teachlang1level != null ){
          this.showlanguageteach=false
          this.showfindinfo=true
          this.alert4 = false
          scrollTo(0,0)
        }
      else {
        this.alert4 = true
      }
    },
    backtolanguageteach: function() {
      this.showlanguageteach=true
      this.showfindinfo=false
      scrollTo(0,0)
    },

    confirm: function() {
      this.showfindinfo=false
      this.showconfirm=true
      scrollTo(0,0)
    },
    backtofindinfo: function() {
      this.showfindinfo=true
      this.showconfirm=false
      scrollTo(0,0)
    },
    
    signUp: function () {
      firebase.auth().createUserWithEmailAndPassword(this.titechemail, this.password)
      .then(username => {
        var db = firebase.firestore();
        db.collection("users").add({
          titechemail: this.titechemail,
          username: this.username,
          email2: this.email2,
          studentid: this.studentid,
          gender: this.gender,
          nation: this.nation,
          major: this.major,
          degree: this.degree,
          selected: this.selected,
          weekend: this.weekend,
          campus: this.campus,
          frequency: this.frequency,
          learnlang1: this.learnlang1,
          learnlang1level: this.learnlang1level,
          learnlang2: this.learnlang2,
          learnlang2level: this.learnlang2level,
          teachlang1: this.teachlang1,
          teachlang1level: this.teachlang1level,
          teachlang2: this.teachlang2,
          teachlang2level: this.teachlang2level,
          teachlang3: this.teachlang3,
          teachlang3level: this.teachlang3level,
          hobbyinterest: this.hobbyinterest,
          comments: this.comments
          })
          .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
          })
          .catch(function(error) {
          console.error("Error adding document: ", error);
          });

          alert('Created account:', this.titechemail);
          console.log(username);
          this.$router.push('/mypage')
        })

      .catch(error => {
        alert(error.message);
      });
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: red;
}
</style>
