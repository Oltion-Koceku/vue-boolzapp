import { contacts } from "./contacts.js";

const { createApp } = Vue;

createApp({
  data(){
    return{
      contacts,
      // messaggio che mando
      newMyText:{
        date: '10/01/2020 15:50:00',
        message: '',
        status: 'sent'
      },
      // messaggio che ricevo
      newUserText : {
        date: '10/01/2020 15:50:00',
        message: 'OK',
        status: 'received'
      },

      search : ''
    }
  },

  methods:{
    changeUser(indice){
      // reset per il cambio chat
      this.contacts.forEach(contact => {
        contact.visible = true
      }); 
      // rendo visibile la chat
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
      // ricevo in ritardo il messaggio
      setTimeout(()=>{
        this.contacts[indice].messages.push(this.newUserText)
          console.log(this.newUserText.message);
      }, 1000)
    },

    deleteMessage(indice, i){
      this.contacts[indice].messages.splice(i)
    }
    
  },
  
  computed:{
    searchContact(){
      return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(this.search.toLocaleLowerCase()))
    }
    
  },

  mounted(){
    
  }
}).mount("#app")

