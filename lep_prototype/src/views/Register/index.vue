<template>
  <div class="home">
    
    <v-content>
      <v-container>
        <v-layout>
          <v-flex xs12>
            <img width="180px" alt="Logo" src="../../assets/LEP_logo.png" v-icon @click="backhome">
            <h3 class="ma-3">Language Exchange Partner program for TokyoTech</h3>
            <h1 class="mb-4">Registration</h1>
              
          </v-flex>
        </v-layout>

        <v-card>
          <v-card-text v-if="show0">
            <p class="text-xs-left">This application form is for the Language Exchange Partner program (LEP) that takes place during the fourth quarter in 2018 academic year.
            <br>LEP is the system for TokyoTech students learning languages through conversation with your partner. This Google form is required to fill in so we can suggest the best partner for this program.
            <br>The important information (name, student ID, and e-mail address) will be deleted when this program has finished for those who get partners, and when matching has finished for those who could not get partners.</p>
            <v-radio-group v-model="agreement" :mandatory="false">
              <v-radio label="I agree" value="agreement-1"></v-radio>
              <v-radio label="I do not agree" value="agreement-2"></v-radio>
            </v-radio-group>
            <v-btn v-on:click="next">Next</v-btn>
          </v-card-text>
        </v-card>

        <v-card flat v-if='show1'>
          <v-card-text>
            <h1> Create New Account</h1>
            <v-text-field 
            v-model="titechemail" 
            placeholder="Titech email address">
            </v-text-field>
            
            <v-text-field 
            type="password" 
            v-model="password" 
            placeholder="password">
            </v-text-field>
          </v-card-text>
        </v-card>

        <v-card falt v-if="show1">
          <v-card-text>
            <h1 class="mb-3"> Personal Information</h1> 
            <p class="text-xs-left">We will inform you the matching result via e-mail. Please make sure the e-mail written below is correct.
            <br>Also, Please check e-mail regularly.
            <br>Please write your name, Nationality, language in English.</p>
            <v-text-field
              v-model="username"
              label="Name"
              placeholder=""
              box>
            </v-text-field>
             <v-text-field
              v-model="email2"
              label="Second email address"
              placeholder=""
              box>
            </v-text-field>
            <v-text-field
              label="Student ID"
              placeholder=""
              box>
            </v-text-field>
            <v-overflow-btn
              :items="dropdown_gender"
              label="Gender"
            ></v-overflow-btn>
            <v-text-field
              label="Nationality"
              placeholder=""
              box>
            </v-text-field>
            <v-text-field
              label="Department"
              placeholder=""
              box>
            </v-text-field>
            <v-overflow-btn
              :items="dropdown_degree"
              label="Degree"
            ></v-overflow-btn>
          </v-card-text>
        </v-card>

        <v-card flat v-if="show1">
          <v-card-text>
            <h1 class="mb-3">Your Schedule</h1>
            <h3>Please check your schedule available</h3>
            <v-data-table
              :headers="headers"
              :items="time"
              class="elevation-1"
            >
              <template slot="items" slot-scope="props">
                <td>{{ props.item.name }}</td>
                <td><v-checkbox v-model="props.item.mondayValue"></v-checkbox></td>
                <td><v-checkbox v-model="props.item.tuedayValue"></v-checkbox></td>
                <td><v-checkbox v-model="props.item.wednesdayValue"></v-checkbox></td>
                <td><v-checkbox v-model="props.item.thursdayValue"></v-checkbox></td>
                <td><v-checkbox v-model="props.item.fridayValue"></v-checkbox></td>
              </template>
            </v-data-table>
            <v-switch
              :label="`Weekend`"
              v-model="switch1"
            ></v-switch>
            <v-overflow-btn
              :items="dropdown_freaquency"
              label="Preferred frequency per one week"
            ></v-overflow-btn>
          </v-card-text>
        </v-card>

        <v-card flat v-if="show1">
          <v-card-text>
            <h1> Language Want to Learn </h1>
            <v-overflow-btn
              :items="dropdown_want_to_learn1"
              label="Language you want to learn"
            ></v-overflow-btn>
            <v-overflow-btn
              :items="dropdown_want_level1"
              label="Language proficiency"
            ></v-overflow-btn>
            <v-overflow-btn
              :items="dropdown_want_to_learn2"
              label="2nd Language you want to learn (optional)"
            ></v-overflow-btn>
            <v-overflow-btn
              :items="dropdown_want_level2"
              label="Language proficiency"
            ></v-overflow-btn>
          </v-card-text>
        </v-card>

        <v-card flat v-if="show1">
          <v-card-text>
            <h1> Language You Can Teach</h1>
            <v-overflow-btn
              :items="dropdown_teach1"
              label="Language you can teach"
            ></v-overflow-btn>
            <v-overflow-btn
              :items="dropdown_teach_level1"
              label="Language proficiency"
            ></v-overflow-btn>
            <v-overflow-btn
              :items="dropdown_teach2"
              label="2nd Language you can teach (optional)"
            ></v-overflow-btn>
            <v-overflow-btn
              :items="dropdown_teach_level2"
              label="Language proficiency"
            ></v-overflow-btn>
            <v-overflow-btn
              :items="dropdown_teach3"
              label="3rd Language you can teach (optional)"
            ></v-overflow-btn>
            <v-overflow-btn
              :items="dropdown_teach_level3"
              label="Language proficiency"
            ></v-overflow-btn>
          </v-card-text>
        </v-card>

        <v-card flat v-if="show1">
          <v-card-text>
            <h1 class="mb-3"> Information for finding partner</h1>
            <v-text-field
              label="Hobby and Interest"
              placeholder=""
              box>
            </v-text-field>
            
            <v-textarea
              box
              name="input-7-4"
              label="Other Comments"
              value=""
            ></v-textarea>
            <v-btn v-on:click="confirm">Confirm</v-btn>
          </v-card-text>
        </v-card>

        <v-card flat v-if="show2">
          <v-card-text>
            <h1 class="mb-3"> Confirmation</h1>
            <h3> Titech email address: {{titechemail}} </h3>
            <h3> User Name: {{username}} </h3>
            <v-btn v-on:click="back">Back</v-btn>
            <v-btn v-on:click="signUp">Create New Account</v-btn>
          </v-card-text>
        </v-card>

          </v-container>
     </v-content>
   </div>
</template>

<script>
import firebase from "firebase";

export default{
  name: "register",

  data() {
    return {

      titechemail: null,
      username: null,
      password: null,
      agreement: null,
      show0: true,
      show1: false,
      show2: false,

      switch1: false,

      dropdown_gender: ['Male','Female','Others'],

      dropdown_degree: ['B1','B2','B3','B4','Master','Ph.D','Exchange','Visiter','Others'],

      dropdown_freaquency: ['Once','Twice','Three times','More'],
  
      dropdown_want_to_learn1: ['English','Japanese','Other'],
      dropdown_want_level1: ['A0','A1','A2','B1','B2','C1','C2'],
      dropdown_want_to_learn2: ['English','Japanese','Other'],
      dropdown_want_level2: ['A0','A1','A2','B1','B2','C1','C2'],
      
      dropdown_teach1: ['English','Japanese','Other'],
      dropdown_teach_level1: ['native','over C1'],
      dropdown_teach2: ['English','Japanese','Other'],
      dropdown_teach_level2: ['native','over C1'],
      dropdown_teach3: ['English','Japanese','Other'],
      dropdown_teach_level3: ['native','over C1'],
      
      headers:[
        {
          text: 'TIMELINE',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Mon', value: 'mon' },
        { text: 'Tue', value: 'tue' },
        { text: 'Wed', value: 'wed' },
        { text: 'Thu', value: 'thu' },
        { text: 'Fri', value: 'Fri' }
      ],
      time: [
        {
          mondayValue: false,
          tuedayValue: false,
          wednesdayValue: false,
          thursdayValue: false,
          fridayValue: false,
          name: '9:00~10:30'
        },
        {
          mondayValue: false,
          tuedayValue: false,
          wednesdayValue: false,
          thursdayValue: false,
          fridayValue: false,
          name: '10:45~12:15'
        },
        {
          mondayValue: false,
          tuedayValue: false,
          wednesdayValue: false,
          thursdayValue: false,
          fridayValue: false,
          name: 'Lunch Time'
        },
        {
          mondayValue: false,
          tuedayValue: false,
          wednesdayValue: false,
          thursdayValue: false,
          fridayValue: false,
          name: '13:20~14:50'
        },
        {
          mondayValue: false,
          tuedayValue: false,
          wednesdayValue: false,
          thursdayValue: false,
          fridayValue: false,
          name: '15:05~16:35'
        },
        {
          mondayValue: false,
          tuedayValue: false,
          wednesdayValue: false,
          thursdayValue: false,
          fridayValue: false,
          name: '16:50~18:20'
        },
        {
          mondayValue: false,
          tuedayValue: false,
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

    next: function() {
      console.log(this.agreement)
      if (this.agreement=="agreement-1") {
        this.show1=true
        this.show0=false
      }
      else if (this.agreement=="agreement-2") {
        this.show1=false
        this.$router.push('/')
      }
    },

    
    confirm: function() {
      this.show1=false
      this.show2=true

    },

    back: function() {
      this.show1=true
      this.show2=false

    },
    
    signUp: function () {
      firebase.auth().createUserWithEmailAndPassword(this.titechemail, this.password)
      .then(username => {
        alert('Create account:', this.titechemail);
        console.log(username);
        this.$router.push('/mypage')
      })
      .catch(error =>  {
        alert(error.message);
      });
      

    }
  }
}



</script>


