<template>
  <v-container>
    <h1 class="text">About</h1>
    <div v-for="textBox in textBoxes" :key="textBox.id">
      <p>{{ textBox.text }}</p>
    </div>
  </v-container>
</template>
<script setup lang="ts">
import { ref } from "vue";

interface Text {
  id: number;
  text: string;
}

const textBoxes = ref<Text[]>([
  { id: 1, text: "" },
  { id: 2, text: "to" },
  { id: 3, text: "my" },
  { id: 4, text: "page" },
]);
</script>
<style lang="scss" scoped></style>
