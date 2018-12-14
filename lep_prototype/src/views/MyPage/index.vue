<template>
  <div class="home">
    <v-content>
      <v-container>
        
        <v-layout>
          <v-flex xs12>
            <img width="180px" alt="Logo" src="../../assets/LEP_logo.png">
            <h1>LEP program My Page</h1>
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
              <v-btn v-on:click="signout">LogOut</v-btn> 
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

  methods: {
    signout: function () {
      firebase.auth().signOut().then(() => {
        alert('LogOut!')
        this.$router.push('/home')
      });
    }
  }

  
};


</script>


