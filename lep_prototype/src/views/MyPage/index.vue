<template>
  <div class="home">
    <v-content>
      <v-container>

        <v-layout align-center>
          <v-flex xs12>
            <img width="180px" alt="Logo" src="../../assets/LEP_logo.png">
            <h1>LEP program My Page</h1>
          </v-flex>
        </v-layout>
      </v-container>

      <v-container>
        <v-toolbar color="white" flat>
          <v-layout row justify-end>
            <v-flex sm3>
              <v-btn v-on:click="signout">LogOut</v-btn>
            </v-flex>
          </v-layout>
        </v-toolbar>

        <v-layout align-center>
          <v-flex xs12>
            <v-tabs
              centered
              color=""
              light
              icons-and-text
            >
              <v-tabs-slider color="black"></v-tabs-slider>

              <v-tab href="#tab-1">
                Your Partner
                <v-icon>group</v-icon>
              </v-tab>
              
              <v-tab href="#tab-2">
                Requests
                <v-icon>notifications_active</v-icon>
              </v-tab>

              <v-tab href="#tab-3">
                Find Partner
                <v-icon>person_add</v-icon>
              </v-tab>

              <v-tab href="#tab-4">
                Setting
                <v-icon>settings</v-icon>
              </v-tab>

              <v-tabs-items>

                <v-tab-item :id="'tab-1'">
                  <v-card flat>
                    <v-card-text>
                      <h2 class="text-xs-left">Your Partner</h2>
                      <v-btn>activity report</v-btn>
                    </v-card-text>
                  </v-card>
                </v-tab-item>

                <v-tab-item :id="'tab-2'">
                  <v-card flat>
                    <v-card-text>
                      <h2 class="text-xs-left mb-3">You've got 2 requests!!</h2>

                      <v-card color="pink" height="150px" v-if='showrequestsmall1'>
                        <v-card-text> 
                          <p class="text-xs-left">Name: AAAAAAAAA
                          <br>Language: AAAAAAAAA
                          <br>Schedule Matching: 90%</p>
                          <v-layout right>
                          <v-btn v-on:click="detailrequest1">See detail</v-btn>
                          </v-layout>
                        </v-card-text>
                      </v-card>
                      <br>

                      <v-card color="pink" height="300px" v-if='showrequestbig1'>
                        <v-card-text> 
                          <p class="text-xs-left">Name: AAAAAAAAA
                          <br>Language: AAAAAAAAA
                          <br>Schedule Matching: 90%
                          <br>Hobby and Interest: 
                          <br>Comments
                          <br><br><br><br><br><br>
                          </p>
                          <v-layout right>
                          <v-btn v-on:click="Accept">Accept Request</v-btn>
                          <v-btn v-on:click="Reject">Reject Request</v-btn>
                          <v-btn v-on:click="hiderequest1">Hide detail</v-btn>
                          </v-layout>
                        </v-card-text>
                      </v-card>
                      <br>

                      <v-card color="pink" height="150px" v-if='showrequestsmall2'>
                        <v-card-text> 
                          <p class="text-xs-left">Name: BBBBBBBB
                          <br>Language: BBBBBBBBB
                          <br>Schedule Matching: 80%</p>
                          <v-layout right>
                            <v-btn v-on:click="detailrequest2">See detail</v-btn>
                          </v-layout>
                        </v-card-text>
                      </v-card>
                      <br>

                      <v-card color="pink" height="300px" v-if='showrequestbig2'>
                        <v-card-text> 
                          <p class="text-xs-left">Name: BBBBBBBB
                          <br>Language: BBBBBBBBB
                          <br>Schedule Matching: 80%
                          <br>Hobby and Interest: 
                          <br>Comments
                          <br><br><br><br><br><br></p>
                          <v-layout right>
                          <v-btn v-on:click="Accept">Accept Request</v-btn>
                          <v-btn v-on:click="Reject">Reject Request</v-btn>
                          <v-btn v-on:click="hiderequest2">Hide detail</v-btn>
                          </v-layout>
                        </v-card-text>
                      </v-card>
                      
                    </v-card-text>
                  </v-card>
                </v-tab-item>

                <v-tab-item :id="'tab-3'">
                  <v-card flat>
                    <v-card-text>
                      <h2 class="text-xs-left mb-3">Member lists</h2>

                      <v-card color="light-blue" height="150px" v-if='showmembersmall1'>
                        <v-card-text> 
                          <p class="text-xs-left">Name: CCCCCCCCC
                          <br>Language: CCCCCCCCC
                          <br>Schedule Matching: 90%</p>
                          <v-layout right>
                          <v-btn v-on:click="detailmember1">See detail</v-btn>
                          </v-layout>
                        </v-card-text>
                      </v-card>
                      <br>

                      <v-card color="light-blue" height="300px" v-if='showmemberbig1'>
                        <v-card-text> 
                          <p class="text-xs-left">Name: CCCCCCCCC
                          <br>Language: CCCCCCCCC
                          <br>Schedule Matching: 90%
                          <br>Hobby and Interest: 
                          <br>Comments
                          <br><br><br><br><br><br>
                          </p>
                          <v-layout right>
                          <v-btn v-on:click="sendrequest1">Send Request</v-btn>
                          <v-btn v-on:click="hidemember1">Hide detail</v-btn>
                          </v-layout>
                        </v-card-text>
                      </v-card>
                      <br>

                      <v-card color="light-blue" height="150px" v-if='showmembersmall2'>
                        <v-card-text> 
                          <p class="text-xs-left">Name: DDDDD
                          <br>Language: DDDDD
                          <br>Schedule Matching: 80%</p>
                          <v-layout right>
                            <v-btn v-on:click="detailmember2">See detail</v-btn>
                          </v-layout>
                        </v-card-text>
                      </v-card>
                      <br>

                      <v-card color="light-blue" height="300px" v-if='showmemberbig2'>
                        <v-card-text> 
                          <p class="text-xs-left">Name: DDDDD
                          <br>Language: DDDDD
                          <br>Schedule Matching: 80%
                          <br>Hobby and Interest: 
                          <br>Comments
                          <br><br><br><br><br><br>
                          </p>
                          <v-layout right>
                          <v-btn v-on:click="sendrequest2">Send Request</v-btn>
                          <v-btn v-on:click="hidemember2">Hide detail</v-btn>
                          </v-layout>
                        </v-card-text>
                      </v-card>
                      <br>

                      <v-card color="light-blue" height="150px" v-if='showmembersmall3'>
                        <v-card-text> 
                          <p class="text-xs-left">Name: EEEEEEEE
                          <br>Language: EEEEEEEE
                          <br>Schedule Matching: 80%</p>
                          <v-layout right>
                            <v-btn v-on:click="detailmember3">See detail</v-btn>
                          </v-layout>
                        </v-card-text>
                      </v-card>
                      <br>

                      <v-card color="light-blue" height="300px" v-if='showmemberbig3'>
                        <v-card-text> 
                          <p class="text-xs-left">Name: EEEEEEEE
                          <br>Language: EEEEEEEE
                          <br>Schedule Matching: 80%
                          <br>Hobby and Interest: 
                          <br>Comments
                          <br><br><br><br><br><br>
                          </p>
                          <v-layout right>
                          <v-btn v-on:click="sendrequest3">Send Request</v-btn>
                          <v-btn v-on:click="hidemember3">Hide detail</v-btn>
                          </v-layout>
                        </v-card-text>
                      </v-card>

                    </v-card-text>
                  </v-card>
                </v-tab-item>

                <v-tab-item :id="'tab-4'">
                  <v-card flat>
                    <v-card-text>
                      <h2 class="text-xs-left">Account information</h2>
                      <v-card flat>
                        <v-card-text>
                              <p class="text-xs-center">User Name:   {{userDetail.username}}
                              <br>Titech email:   {{userDetail.titechemail}}
                              <br>2nd email:   {{userDetail.email2}}
                              <br>Student ID:   {{userDetail.studentid}}
                              <br>Gender:   {{userDetail.gender}}
                              <br>Nationality:   {{userDetail.nation}}
                              <br>Department:   {{userDetail.major}}
                              <br>Degree:   {{userDetail.degree}}
                              <br>Schedule:   {{userDetail.username}}
                              <br>Weekend:   {{userDetail.weekend}}
                              <br>Campus:   {{userDetail.campus}}
                              <br>Preferred frequency:   {{userDetail.frequency}}
                              <br>Language want to learn (level):  {{userDetail.learnlang1}},{{userDetail.learnlang1level}}
                              <br>2nd Language want to learn (level):   {{userDetail.learnlang2}},{{userDetail.learnlang2level}}
                              <br>Language you can teach (level): {{userDetail.teachlang1}},{{userDetail.teachlang1level}}
                              <br>2nd Language you can teach (level):   {{userDetail.teachlang2}},{{userDetail.teachlang1leve2}}
                              <br>3rd Language you can teach (level):   {{userDetail.teachlang3}},{{userDetail.teachlang1leve3}}
                              <br>Hobby and Interest:   {{userDetail.hobbyinterest}}
                              <br>Comments:  {{userDetail.comments}}
                              <br></p>
                              <v-btn>Edit</v-btn>
                            <!--
                            <v-flex xs7>
                              <p class="text-xs-left">{{userDetail.username}}
                              <br>{{userDetail.titechemail}}
                              <br>{{userDetail.email2}}
                              <br>{{userDetail.studentid}}
                              <br>{{userDetail.gender}}
                              <br>{{userDetail.nation}}
                              <br>{{userDetail.major}}
                              <br>{{userDetail.degree}}
                              <br>{{userDetail.username}}
                              <br>{{userDetail.weekend}}
                              <br>{{userDetail.campus}}
                              <br>{{userDetail.frequency}}
                              <br>{{userDetail.learnlang1}},{{userDetail.learnlang1level}}
                              <br>{{userDetail.learnlang2}},{{userDetail.learnlang2level}}
                              <br>{{userDetail.teachlang1}},{{userDetail.teachlang1level}}
                              <br>{{userDetail.teachlang2}},{{userDetail.teachlang1leve2}}
                              <br>{{userDetail.teachlang3}},{{userDetail.teachlang1leve3}}
                              <br>{{userDetail.hobbyinterest}}
                              <br>{{userDetail.comments}}
                              <br></p>
                            </v-flex>
                            <v-flex xs1>
                              <p class="text-xs-left">[Edit]
                              <br>[Edit]
                              <br>[Edit]
                              <br>[Edit]
                              <br>[Edit]
                              <br>[Edit]
                              <br>[Edit]
                              <br>[Edit]
                              <br>[Edit]
                              <br>[Edit]
                              <br>[Edit]
                              <br>[Edit]
                              <br>[Edit]
                              <br>[Edit]
                              <br>[Edit]
                              <br>[Edit]
                              <br></p>
                            </v-flex>
                            -->
                        </v-card-text>
                      </v-card>

                      <h2 class="text-xs-left">Setting Account</h2>
                      <v-card flat v-if='showchange1stsmall'>
                        <v-card-text>
                          <v-layout row>
                            <v-flex xs6>
                            <h3 class="text-xs-right">Language you want to learn: </h3>
                            </v-flex>
                            <v-btn v-on:click="change1st">Change</v-btn>
                          </v-layout>
                        </v-card-text>
                      </v-card>
                      
                      <v-card flat v-if='showchange1stbig'>
                        <v-card-text>
                          <v-layout row>
                            <v-flex xs6>
                            <h3 class="text-xs-right">Language you want to learn: </h3>
                            </v-flex>
                            <v-flex xs6>
                            <v-overflow-btn
                              :items="languages"
                              label="Language you want to learn"
                            ></v-overflow-btn>
                            <v-overflow-btn
                              :items="dropdown_want_level1"
                              label="Language proficiency"
                            ></v-overflow-btn>
                            <v-btn v-on:click="confirm1st">Confirm</v-btn>
                            </v-flex>
                          </v-layout>
                        </v-card-text>
                      </v-card>

                      <v-card flat v-if='showchange2ndsmall'>
                        <v-card-text>
                          <v-layout row>
                            <v-flex xs6>
                            <h3 class="text-xs-right">2nd language you want to learn: </h3>
                            </v-flex>
                            <v-btn v-on:click="change2nd">Change/Set</v-btn>
                          </v-layout>
                        </v-card-text>
                      </v-card>

                      <v-card flat v-if='showchange2ndbig'>
                        <v-card-text>
                          <v-layout row>
                            <v-flex xs6>
                            <h3 class="text-xs-right">2nd language you want to learn: </h3>
                            </v-flex>
                            <v-flex xs6>
                            <v-overflow-btn
                              :items="languages"
                              label="2nd Language you want to learn (optional)"
                            ></v-overflow-btn>
                            <v-overflow-btn
                              :items="dropdown_want_level2"
                              label="Language proficiency"
                            ></v-overflow-btn>
                            <v-btn v-on:click="confirm2nd">Confirm</v-btn>
                            </v-flex>
                          </v-layout>
                        </v-card-text>
                      </v-card>
                      
                      <v-card flat v-if='showchangeemailsmall'>
                        <v-card-text>
                          <v-layout row>
                            <v-flex xs6>
                            <h3 class="text-xs-right">2nd email address: </h3>
                            </v-flex>
                            <v-btn v-on:click="changeemail">Change/Set</v-btn>
                          </v-layout>
                        </v-card-text>
                      </v-card>

                      <v-card flat v-if='showchangeemailbig'>
                        <v-card-text>
                          <v-layout row>
                            <v-flex xs6>
                            <h3 class="text-xs-right">2nd email address: </h3>
                            </v-flex>
                            <v-flex xs6>
                            <v-text-field
                              v-model="email2"
                              label="Second email address"
                              placeholder=""
                              box>
                            </v-text-field>
                            <v-btn v-on:click="confirmemail">Confirm</v-btn>
                            </v-flex>
                          </v-layout>
                        </v-card-text>
                      </v-card>

                    </v-card-text>
                  </v-card>
                </v-tab-item>

              </v-tabs-items>
            </v-tabs>
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
import languages from "../../api/db/languages.js"

export default {
  name: 'home',
  components: {
    HelloWorld
  },

  data() {
    return {
    date: new Date().toISOString().substr(0,10),
    
    //For identification
    register_email: null,
    
    languages: languages.languages,
    dropdown_want_level1: ['A0','A1','A2','B1','B2','C1','C2'],
    dropdown_want_level2: ['A0','A1','A2','B1','B2','C1','C2'],

    menu: false,
    time: null,
    menu2: false,
    time2: null,
    menu3: false,

    showrequestsmall1: true,
    showrequestsmall2: true,
    showrequestbig1: false,
    showrequestbig2: false,

    showmembersmall1: true,
    showmembersmall2: true,
    showmembersmall3: true,
    showmemberbig1: false,
    showmemberbig2: false,
    showmemberbig3: false,

    showchange1stsmall: true,
    showchange1stbig: false,
    showchange2ndsmall: true,
    showchange2ndbig: false,
    showchangeemailsmall: true,
    showchangeemailbig: false,

    allprofile: null,
    profile: {},
    userProfile: null,
    }
  },
  computed: {
    userDetail() {
      if(this.userProfile == null || this.allprofile == null){
        return null;
      }

      var result = this.allprofile.filter(profile => profile.titechemail == this.userProfile.email);
      
      if(result.length > 0){
        return result[0];
      }

      return null;
    }
  },

  beforeCreate() {
  },
  
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.userProfile = user;
        console.log(this.userProfile)
      }else{
        //alert("You need to login to see this page.")
        this.$router.push("/")
      }
    })

    this.getallprofile();
  },

  methods: {
    
    detailrequest1: function (){
      this.showrequestsmall1=false
      this.showrequestbig1=true
    },

    hiderequest1: function (){
      this.showrequestsmall1=true
      this.showrequestbig1=false
    },


    detailrequest2: function (){
      this.showrequestsmall2=false
      this.showrequestbig2=true
    },

    hiderequest2: function (){
      this.showrequestsmall2=true
      this.showrequestbig2=false
    },

    detailmember1: function (){
      this.showmembersmall1=false
      this.showmemberbig1=true
    },

    hidemember1: function (){
      this.showmembersmall1=true
      this.showmemberbig1=false
    },


    detailmember2: function (){
      this.showmembersmall2=false
      this.showmemberbig2=true
    },

    hidemember2: function (){
      this.showmembersmall2=true
      this.showmemberbig2=false
    },
    
    detailmember3: function (){
      this.showmembersmall3=false
      this.showmemberbig3=true
    },

    hidemember3: function (){
      this.showmembersmall3=true
      this.showmemberbig3=false
    },

    change1st: function (){
      this.showchange1stsmall=false
      this.showchange1stbig=true
    },

    change2nd: function (){
      this.showchange2ndsmall=false
      this.showchange2ndbig=true
    },

    changeemail: function (){
      this.showchangeemailsmall=false
      this.showchangeemailbig=true
    },

    confirm1st: function (){
      this.showchange1stsmall=true
      this.showchange1stbig=false
      this.$router.push('/mypage')
      alert("Language changed")
    },

    confirm2nd: function (){
      this.showchange2ndsmall=true
      this.showchange2ndbig=false
      this.$router.push('/mypage')
      alert("2nd Language changed")
    },

    confirmemail: function (){
      this.showchangeemailsmall=true
      this.showchangeemailbig=false
      this.$router.push('/mypage')
      alert("2nd email changed")
    },

    signout: function () {
      firebase.auth().signOut().then(() => {
        alert('LogOut!')
        this.$router.push('/home')
      });
    },
    getallprofile: function (){
      var db = firebase.firestore();
      db.collection("users").get().then((querySnapshot) => {
        var result = querySnapshot.docs.map((doc) => {
          return doc.data()
        });
        console.log(result)
        this.allprofile = result
      });
    },
    getmyid: function(){
      var user = firebase.auth().currentUser;
      console.log(user.email)
      return user.email;
    },
    getmyprofile: function(){
      var db = firebase.firestore();
      var allprof = db.collection("users");
      var email = this.getmyid();
      var prof = allprof.where("titechemail", "==", email)
      this.profile = prof
    }
  }  
};

</script>
