<template>
    <div class="">
        <v-card flat v-if='show1'>
          <v-card-text>
            <h1> Create New Account</h1>
            <v-text-field 
            v-model="email" 
            placeholder="Titech email address">
            </v-text-field>
            <v-text-field 
            type="password" 
            v-model="password" 
            placeholder="password">
            </v-text-field>
            <v-btn v-on:click="next">Next</v-btn>
          </v-card-text>
        </v-card>
    </div>
</template>