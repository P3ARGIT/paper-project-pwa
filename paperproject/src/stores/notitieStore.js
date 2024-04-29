import { defineStore } from 'pinia'
import axios from 'axios'

//let url = 'http://localhost:8081'
let url = 'https://backend.localhost'
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
      const response = axios.get(`${url}/notes`)
      this.notes = response.data
    }
  }
})
