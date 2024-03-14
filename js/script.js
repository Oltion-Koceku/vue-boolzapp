import { contacts } from "./contacts.js";

const { createApp } = Vue;

createApp({
  data(){
    return{
      contacts,
    }
  },

  methods:{
    changeUser(indice){
      this.contacts.forEach(contact => {
        contact.visible = true
      }); 
      this.contacts[indice].visible = false

     
    },



  },

  mounted(){
    
  }
}).mount("#app")