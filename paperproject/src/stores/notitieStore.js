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
      const id = this.notes.length;
      const newNote = {
        id,
        noteContent
      }
      this.notes.push(newNote)
      await axios.put(`${url}/notes`,this.notes)
     await this.retrieveAllNotes()

    },
    async retrieveAllNotes() {
      const response = await axios.get(`${url}/notes`)
      this.notes = response.data
    }
  }
})
