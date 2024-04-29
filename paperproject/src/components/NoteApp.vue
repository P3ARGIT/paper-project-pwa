<template>
  <v-container class="fill-height">
    <v-responsive
      class="align-center fill-height mx-auto"
      max-width="900">
      <div class="text-center ma-3"> <!-- Add a div with class text-center -->
        <p class="text-h2">voeg notitie toe</p> <!-- Move the p tag inside the div -->

      </div>

      <v-textarea label="TODO" variant="solo-filled" :v-model="note"></v-textarea>
      <v-btn variant="tonal" @click="addNote(note.value)">
        sla op
      </v-btn>
    </v-responsive>
  </v-container>
</template>



<script setup>
  import {ref} from 'vue'
  import {notitieStore} from '@/stores/notitieStore'
  const store = notitieStore();

  let note = ref("");
  async function addNote(text){
    await store.addNote(text);
  }
</script>
