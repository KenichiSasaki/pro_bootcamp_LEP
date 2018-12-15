<template>
  <div class="home">
    <v-content>
      <v-container>
        
        <v-layout>
          <v-flex xs12>
            <img width="180px" alt="Logo" src="../../assets/LEP_logo.png" v-icon @click="backhome">
            <h1>LEP program My Page</h1>
          </v-flex>
        </v-layout>
      </v-container>

      <v-container>
        <v-layout row>

          <v-flex xs8>
            <v-card flat>
              <v-card-text>
                <v-tabs
                  v-model="active"
                  color="cyan"
                  dark
                  slider-color="yellow"
                >
                <v-tab
                  v-for="n in 4"
                  :key="n"
                   ripple
                >
               Item {{ n }}

              </v-tab>
              <v-tab-item
                v-for="n in 4"
                :key="n"
              >
                <v-card flat>
                  <v-card-text>mypage</v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>
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

  beforeCreate() {
    if(firebase.auth().currentUser){
      console.log(firebase.auth().currentUser)
    }else{
      alert("You need to login to see this page.")
      this.$router.push("/")
    }

  },

  methods: {
    backhome(){
       this.$router.push('/home')
      },

    signout: function () {
      firebase.auth().signOut().then(() => {
        alert('LogOut!')
        this.$router.push('/home')
      });
    }
  }  
};

</script>


