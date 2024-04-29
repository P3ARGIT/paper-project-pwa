<template>
  <v-container class="fill-height">
    <v-responsive
      class="align-center fill-height mx-auto"
      max-width="900"
    >
      <div class="text-center ma-3"> <!-- Add a div with class text-center -->
        <p class="text-h2">voeg notitie toe</p> <!-- Move the p tag inside the div -->

      </div>
      
      <v-textarea label="TODO" variant="solo-filled"></v-textarea>
      <v-btn variant="tonal">
        sla op 
      </v-btn>
    </v-responsive>
  </v-container>

  <v-container>

    </v-container>
</template>

<script setup>
  import {notitieStore} from '@/stores/notitieStore'
  const store = notitieStore();
</script>
