import { defineStore } from 'pinia'
import axios from 'axios'

//let url = 'http://localhost:8081'
let url = 'https://backend.localhost'
export const notitieStore = defineStore('notitieStore', {
  state: () => ({
    notes: [{ "id":0, "noteContent": "test"}, { "id":2, "noteContent": "test2"}],
    error: ''
  }),
  actions: {
    async addNote(content){
      const id = Date.now();
      const newNote = {
        "id" : id,
        "content": content
      }
      //console.log(newNote);
      //console.log(typeof this.notes)
      this.notes.push(newNote);
      await axios.post(`${url}/notes`,this.notes)
      await this.retrieveAllNotes()

    },
    async retrieveAllNotes() {
      const response = await axios.get(`${url}/notes`)
      this.notes = response.data
      //console.log(this.notes.notes)
    },
    async deleteNote(id){
      for (let i =0; i < this.notes.length; i++){
        if(this.notes[i].id == id){
          this.notes.pop(i);
        }
      }
      await axios.post(`${url}/notes`,this.notes)
      this.retrieveAllNotes();

    }
  }
})
