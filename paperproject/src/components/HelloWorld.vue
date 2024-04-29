<template>
  <v-container class="fill-height">
    <v-responsive
      class="align-centerfill-height mx-auto"
      max-width="900"
    >
      <div class="text-center"> <!-- Add a div with class text-center -->
        <p class="text-h1">Paper</p> <!-- Move the p tag inside the div -->
      </div>
      <v-textarea v-model="inputText" label="TODO" variant="solo-filled"></v-textarea> <!-- Bind v-model to inputText -->
      <v-btn @click="addItem" variant="tonal"> <!-- Add click event handler -->
        SAVE
      </v-btn>
      <!-- Display added items below the button -->
      <div v-if="addedItems.length > 0" class="mt-4">
        <p v-for="(item, index) in addedItems" :key="index">{{ item }}</p>
      </div>
    </v-responsive>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

const inputText = ref(''); // Define a ref for input text
const addedItems = ref([]); // Define a ref for added items

const addItem = () => {
  addedItems.value.push(inputText.value); // Push inputText value to addedItems
  inputText.value = ''; // Clear inputText after adding
};
</script>

<style scoped>
.text-center {
  text-align: center; /* Apply text-align: center to center the content horizontally */
}
</style>
