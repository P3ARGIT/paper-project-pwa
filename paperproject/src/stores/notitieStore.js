import axios from 'axios'
import { th } from 'vuetify/locale';
import {defineStore} from "pinia";

let url = 'http://localhost:8000'
//let url = 'https://backend.localhost'
export const notitieStore = defineStore('notitieStore', {
  state: () => ({
    notes: [{}, {}],
    error: ''
  }),
  actions: {
    async addNote(content){
      const id = Date.now();
      const newNote = {
        "id" : id,
        "content": content
      }
      this.notes.notes.push(newNote);
      await axios.post(`${url}/notes`,this.notes)
      await this.retrieveAllNotes()

    },
    async retrieveAllNotes() {
      const response = await axios.get(`${url}/notes`)
      this.notes = response.data
    },
    async deleteNote(id){
      console.log(id)

      this.notes.notes.forEach(
        (note) =>{
        if(note.id == id){
          this.notes.notes.splice(this.notes.notes.indexOf(note),1)
        }
        }
      )
      await axios.post(`${url}/notes`,this.notes)
      this.retrieveAllNotes();

    }
  }
})
