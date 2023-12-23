<template>
  <div class="wrapper">
    <div>
      <h1
        class="animate__animated animate__tada"
        v-for="title in titles"
        :key="title.id"
        style="color: #000000"
      >
        {{ title.text }}
      </h1>
    </div>
  </div>
  <v-row justify="center" no-gutters class="spacing-playground">
    <v-col>
      <v-container
        style="color: #000000; font-size: 20px"
        size="30px"
        class="text-center"
      >
      </v-container>
    </v-col>
  </v-row>
  <v-footer d-flex justify-center mb-6 bg-surface-variant>
    <v-row justify="center" no-gutters>
      <v-col class="text-center mt-4" cols="10" style="color: #000000">
        Copyright © {{ new Date().getFullYear() }} Chiaki Izutsu. All rights
        reserved.
      </v-col>
    </v-row>
  </v-footer>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import "animate.css";

interface Title {
  id: number;
  text: string;
}

const titles = ref<Title[]>([
  { id: 1, text: "Welcome" },
  { id: 2, text: "to" },
  { id: 3, text: "my" },
  { id: 4, text: "page" },
]);
</script>

<style lang="scss" scoped>
.wrapper {
  @media (max-width: 768px) {
    margin-left: 7%;
  }
  @media (min-width: 769px) {
    margin-left: 6%;
  }
}
h1 {
  &.animate__animated.animate__tada {
    @media (min-width: 769px) {
      font-size: 70px;
    }
  }
}
</style>
