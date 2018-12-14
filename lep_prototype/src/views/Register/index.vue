<template>
  <div class="home">
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
        password: null
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


