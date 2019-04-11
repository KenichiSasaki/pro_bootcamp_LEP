<template>
  <div class="home">
    <v-content>
      <v-container grid-list-md>
        
        <v-layout>
          <v-flex xs12>
            <img width="180px" alt="Logo" src="../../assets/LEP_logo.png" v-icon @click="backhome">
            <h1>Welcome to Language Exchange Partner program for TokyoTech</h1>
          </v-flex>
        </v-layout>
      </v-container>

      <v-container>
        <v-layout row wrap>

          <v-flex md8>
            <v-card flat>
              <v-card-text>
              <HelloWorld/>
              </v-card-text>
             </v-card>
           </v-flex>

          <v-flex md4>
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
                <v-btn v-on:click="signin">LogIn</v-btn> 
              </v-card-text>
            </v-card>
            <v-card>
              <v-card-text>
                <v-btn v-on:click="newaccount">Create New Account</v-btn>
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
import HelloWorld from '@/components/HelloWorld.vue';
import firebase from "firebase";

export default {
  name: 'home',
  components: {
    HelloWorld
  },

  data() {
      return {
        email: null,
        password: null
      }
  },

  methods: {
    backhome(){
      this.$router.push('/home')
      },

    signin: function () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(user => {
        alert('Success!')
        this.$router.push('/mypage')
      },
      error => {
        alert(error.message)
      });
    },
    newaccount: function () {
      this.$router.push('/register')
    } 
    
  }
  

  
};


</script>


