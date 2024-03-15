const { DateTime } = luxon;

import { contacts } from "./contacts.js";

const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts,
      // messaggio che mando
      newMyText: {
        date: '',
        message: '',
        status: 'sent'
      },
      // messaggio che ricevo
      newUserText: {
        date: '',
        message: 'OK',
        status: 'received'
      },
      // ricerca
      search: '',

      chevronClick : false

    }
  },


  methods: {
    changeUser(indice) {
      // reset per il cambio chat
      this.contacts.forEach(contact => {
        contact.visible = true
      });
      // rendo visibile la chat
      this.contacts[indice].visible = false
    },

    enterMyMessage(indice) {
      if (this.newMyText.message.length + 1 > 0) {
        this.contacts[indice].messages.push(this.newMyText)
        // resetto newMyText
        this.newMyText = {
          date: '',
          message: '',
          status: 'sent'
        }
      }

    },

    userMessage(indice) {
      // ricevo in ritardo il messaggio
      setTimeout(() => {
        this.contacts[indice].messages.push(this.newUserText)
        console.log(this.newUserText.message);
      }, 1000)
    },

    deleteMessage(indice, i) {
      this.contacts[indice].messages.splice(i)
    },

    printMyData(){
      this.newMyText.date = DateTime.now().setLocale('it').toFormat('dd/MM/yyyy hh:mm:ss')
    },
    
    printUserData(){
      setTimeout(() => {
        this.newUserText.date = DateTime.now().setLocale('it').toFormat('dd/MM/yyyy hh:mm:ss')
      }, 1000)
    },
    
    getLastMessage(contact){
      if (contact.messages.length > 0) {
        return contact.messages[contact.messages.length - 1].message
      }
    },

    getLastDate(contact){
      if (contact.messages.length > 0) {
        return contact.messages[contact.messages.length - 1].date
      }
    },

    resetChevron(){
      chevronClick = false
    }

  },

  computed: {
    searchContact() {
      return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(this.search.toLocaleLowerCase()))
    }

  },

  mounted() {
    this.printMyData()
    this. printUserData()
  }
}).mount("#app")

