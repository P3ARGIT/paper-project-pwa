<template>
  <v-container class="fill-height">
    <v-responsive
      class="align-centerfill-height mx-auto"
      max-width="900"
    >
      <div class="text-center"> <!-- Add a div with class text-center -->
        <p class="text-h1">Paper</p> <!-- Move the p tag inside the div -->
      </div>
      <v-textarea label="TODO" variant="solo-filled"></v-textarea>
      <v-btn variant="tonal">
        SAVE
      </v-btn>
    </v-responsive>
  </v-container>
</template>

<script setup>
  //
</script>
