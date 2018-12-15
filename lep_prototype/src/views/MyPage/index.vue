<template>
  <div class="home">
    <v-content>
      <v-container>
        
        <v-layout align-center>
          <v-flex xs12>
            <img width="180px" alt="Logo" src="../../assets/LEP_logo.png" v-icon @click="backhome">
            <h1>LEP program My Page</h1>
          </v-flex>
        </v-layout>
      </v-container>

      <v-container>
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
              Requests
              <v-icon>notifications_active</v-icon>
            </v-tab>

            <v-tab href="#tab-2">
              Find Partner
              <v-icon>person_add</v-icon>
            </v-tab>

            <v-tab href="#tab-3">
              Report
              <v-icon>create</v-icon>
            </v-tab>

            <v-tab href="#tab-4">
              Setting
              <v-icon>settings</v-icon>
            </v-tab>

            <v-tab href="#tab-5">
              logout
              <v-icon>directions_run</v-icon>
            </v-tab>

            <v-tabs-items>

              <v-tab-item :id="'tab-1'">
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

              <v-tab-item :id="'tab-2'">
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

              <v-tab-item :id="'tab-3'">
                <v-card flat height="600px">
                  <v-card-text>
                    <h2 class="text-xs-left">Activity Report</h2>
                        <p class="text-xs-left">After each meeting with your partner, please report the information of the activity.
                        <br>The report from one of the pair is enough for us. We don't need reports from both of the pair.
                        <br>If you have any problem or question, don't hesitate to send email to us.
                        <br>matsuo.h.ae-lep-support@ml.m.titech.ac.jp</p>
                        
                        <v-text-field
                          v-model="pairnumber"
                          label="Pair Number"
                          placeholder=""
                          box>
                        </v-text-field>
                        <v-text-field
                          v-model="countmeeting"
                          label="Count of Meeting"
                          placeholder=""
                          box>
                        </v-text-field>

                        <v-menu
                          ref="menu"
                          :close-on-content-click="false"
                          v-model="menu"
                          :nudge-right="40"
                          :return-value.sync="date"
                          lazy
                          transition="scale-transition"
                          offset-y
                          full-width
                          min-width="290px"
                          ><v-text-field
                            slot="activator"
                            v-model="date"
                            label="Meeting Date"
                            prepend-icon="event"
                            readonly
                          ></v-text-field>
                          <v-date-picker v-model="date" no-title scrollable>
                            <v-spacer></v-spacer>
                            <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                            <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                          </v-date-picker>
                        </v-menu>

                        <v-menu
                          ref="menu2"
                          :close-on-content-click="false"
                          v-model="menu2"
                          :nudge-right="40"
                          :return-value.sync="time"
                          lazy
                          transition="scale-transition"
                          offset-y
                          full-width
                          max-width="290px"
                          min-width="290px"
                        >
                          <v-text-field
                            slot="activator"
                            v-model="time"
                            label="Start Time"
                            prepend-icon="access_time"
                            readonly
                          ></v-text-field>
                          <v-time-picker
                            v-if="menu2"
                            v-model="time"
                            format="24hr"
                            full-width
                            @change="$refs.menu2.save(time)"
                          ></v-time-picker>
                        </v-menu>

                        <v-menu
                          ref="menu3"
                          :close-on-content-click="false"
                          v-model="menu3"
                          :nudge-right="40"
                          :return-value.sync="time2"
                          lazy
                          transition="scale-transition"
                          offset-y
                          full-width
                          max-width="290px"
                          min-width="290px"
                        >
                          <v-text-field
                            slot="activator"
                            v-model="time2"
                            label="Finish Time"
                            prepend-icon="access_time"
                            readonly
                          ></v-text-field>
                          <v-time-picker
                            v-if="menu3"
                            v-model="time2"
                            format="24hr"
                            full-width
                            @change="$refs.menu3.save(time2)"
                          ></v-time-picker>
                        </v-menu>

                        <v-layout right>
                          <v-btn v-on:click="send">Send Report</v-btn>
                        </v-layout>

                  </v-card-text>
                </v-card>
              </v-tab-item>

              <v-tab-item :id="'tab-4'">
                <v-card flat>
                  <v-card-text>
                    <h2 class="text-xs-left">Setting Account</h2>
                    <v-card>
                      <v-card-text> 
                        <p>Name: AAAAAAAAA
                        <br>Language: AAAAAAAAA
                        <br>Schedule Matching: 90%</p>
                      </v-card-text>
                    </v-card>
                    <v-card>
                      <v-card-text> 
                        <p>Name: BBBBBBBB
                        <br>Language: BBBBBBBBB
                        <br>Schedule Matching: 80%</p>
                      </v-card-text>
                    </v-card>
                  </v-card-text>
                </v-card>
              </v-tab-item>

              <v-tab-item :id="'tab-5'">
                <v-card flat>
                  <v-card-text>
                    <v-btn v-on:click="signout">LogOut</v-btn>
                    <h3>See you soon!</h3>
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

export default {
  name: 'home',
  components: {
    HelloWorld
  },

  data() {
    return {
    date: new Date().toISOString().substr(0,10),
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
    showmemberbig3: false


    }
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
      this.showmembersmall2=true
      this.showmemberbig2=false
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


    signout: function () {
      firebase.auth().signOut().then(() => {
        alert('LogOut!')
        this.$router.push('/home')
      });
    }
  }  
};

</script>


