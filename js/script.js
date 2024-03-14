import { contacts } from "./contacts.js";

const { createApp } = Vue;

createApp({
  data(){
    return{
      contacts,
      newMyText:{
        date: '10/01/2020 15:50:00',
        message: '',
        status: 'sent'
      }
    }
  },

  methods:{
    changeUser(indice){
      this.contacts.forEach(contact => {
        contact.visible = true
      }); 
      this.contacts[indice].visible = false
    },

    enterMyMessage(){
      for (const contact of this.contacts) {
        for (const mes of contact.messages) {
          mes.push(this.newMyText)
        }
      }
    }


  },

  mounted(){
    
  }
}).mount("#app")