import { defineStore } from 'pinia'
import axios from 'axios'

let url = 'http://localhost:8081'
export const notitieStore = defineStore('paardenfokkerij', {
  state: () => ({
    notes: [],
    error: ''
  }),
  actions: {
    async addNote(noteContent){
      //this.notes.push(noteContent)
    },
    async retrieveAllNotes() {
      //some action
    }
  }
})
