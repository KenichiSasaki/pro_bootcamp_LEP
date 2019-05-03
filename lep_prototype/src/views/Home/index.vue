<template>
  <div class="home">
    <v-content>
      <v-container grid-list-xl>
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
            <v-card flat>
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
                <br>
                <v-btn v-on:click="newaccount">Create New Account</v-btn>
              </v-card-text>
            </v-card>
            <v-card flat>
              <timeline :id="'titech_action'" :sourceType="'profile'" :options="{ height: '400' }"></timeline>
            </v-card>
          </v-flex>
        </v-layout>
        <!--
        <v-layout row wrap>
          <v-flex md6>
            <v-card flat>
              <timeline :id="'titech_action'" :sourceType="'profile'" :options="{ height: '300' }"></timeline>
            </v-card>
          </v-flex>
          <v-flex md6>
            <v-card flat>
              <v-card-title>
                <a href="https://www.facebook.com/Tokyo.Tech.ACTION" target="_blanck"><h3>Facebook</h3></a>
              </v-card-title>
              <div class="fb-page" data-href="https://www.facebook.com/Tokyo.Tech.ACTION" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/Tokyo.Tech.ACTION" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Tokyo.Tech.ACTION">Facebook</a></blockquote></div>
            </v-card>
          </v-flex>
        </v-layout>
        -->
      </v-container>
    </v-content>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import firebase from "firebase";
import {Timeline, Tweet, Moment} from 'vue-tweet-embed';

export default {
  name: 'home',
  components: {
    HelloWorld,
    Timeline,
    Tweet,
    Moment,
  },

  data() {
      return {
        email: null,
        password: null
      }
  },

  mounted() {
    if (!document.getElementById('facebook-jssdk')) {
      (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v3.2';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
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
