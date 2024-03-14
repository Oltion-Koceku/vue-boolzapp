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
      },

      newUserText : {
        date: '10/01/2020 15:50:00',
        message: 'OK',
        status: 'received'
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

    enterMyMessage(indice){
      if (this.newMyText.message.length + 1 > 0) {
        this.contacts[indice].messages.push(this.newMyText)
        // resetto newMyText
        this.newMyText={
          date: '10/01/2020 15:50:00',
          message: '',
          status: 'sent'
        }
      }

    },

    userMessage(indice){
      setTimeout(()=>{
        this.contacts[indice].messages.push(this.newUserText)
          console.log(this.newUserText.message);
      }, 1000)
    }
 
  },

  mounted(){
    
  }
}).mount("#app")

