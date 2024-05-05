<template>
  <v-container>
    <v-responsive
      class="align-center mx-auto"
      max-width="900">
      <div class="text-center ma-3"> <!-- Add a div with class text-center -->
        <p class="text-h2">voeg een notitie toe</p> <!-- Move the p tag inside the div -->

      </div>

      <v-textarea label="TODO" variant="solo-filled" v-model="note"></v-textarea>
      <v-btn variant="tonal" @click="addNote(note)">
        sla op
      </v-btn>
    </v-responsive>
  </v-container>

  <v-container>
  <div v-for="i in store.notes.notes" :key="i.id">
  <v-card class="ma-2" height="200px" >
    <v-btn @click="deleteNote(i.id)">delete</v-btn>
    <p>{{i.content}}</p>



  </v-card>
  </div>
  </v-container>



</template>



<script setup>
  import {notitieStore} from '@/stores/notitieStore'
  const store = notitieStore();

  let note = ""
  async function addNote(text){
    await store.addNote(text);
  }

  async function deleteNote(id){
    await store.deleteNote(id);
  }
</script>

<style scoped>
.v-card{
  position: relative;
  min-height: 20px;
}
.v-card .v-btn{
 position: absolute;
  right: 25px;
  top:15px;
  width: 40px;
}
.v-card p{
  margin: 15px;
  margin-right: 90px;
}
</style>
