<template>
  <div class="home">
    <v-data-table
    :headers="headers"
    :items="time"
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.name }}</td>
      <td><v-checkbox　v-model="props.item.mondayValue"></v-checkbox></td>
      <td><v-checkbox　v-model="props.item.tuedayValue"></v-checkbox></td>
      <td><v-checkbox　v-model="props.item.wednesdayValue"></v-checkbox></td>
      <td><v-checkbox　v-model="props.item.thursdayValue"></v-checkbox></td>
      <td><v-checkbox　v-model="props.item.fridayValue"></v-checkbox></td>

      
    </template>
  </v-data-table>
    <v-content>
      <v-container>
        <v-layout>
          <v-flex xs12>
            <img width="180px" alt="Logo" src="../../assets/LEP_logo.png">
            <h1>Registration to Language Exchange Partner program for TokyoTech</h1>
          </v-flex>
        </v-layout>
      </v-container>

      <v-container>
        <v-layout row>
          <v-flex xs8>
            <v-card flat>
              <v-card-text>
                <HelloWorld/>
              </v-card-text>
            </v-card>
           </v-flex>

          <v-flex xs4>
            <v-card>
              <v-card-text>
              <v-flex xs10 offset-xs1>
               <v-card flat> 
                <v-text-field v-model="email" placeholder="email">
               </v-text-field>
             </v-card>
             <v-card flat>
                <v-text-field type="password" v-model="password" placeholder="password">
                </v-text-field>
             </v-card>
              </v-flex> 
              <v-btn v-on:click="signup">Create New Account</v-btn>
             </v-card-text>
             </v-card>
           </v-flex>

        </v-layout>

       </v-container>
     </v-content>
   </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import firebase from "firebase";

export default {
  name: 'home',
  components: {
    HelloWorld
  },

  data() {
      return {
        email: null,
        password: null,
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
    
    signup: function () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then(user => {
        alert('Create account:', this.email);
        console.log(user);
        this.$router.push('/mypage')
      })
      .catch(error =>  {
        alert(error.message);
      });
      

    }
  }

  
};


</script>


