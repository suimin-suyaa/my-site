<template>
  <v-app-bar flat>
    <v-app-bar-title class="d-flex justify-end mr-5">
      <template v-for="icon in icons" :key="icon.id">
        <a :href="icon.href" target="_blank" rel="noopener noreferrer">
          <v-icon :icon="icon.image" class="ma-1 pa-1" style="color: #000000" />
        </a>
      </template>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import "animate.css";

interface Icon {
  id: number;
  href: string;
  image: string;
}

const icons = ref<Icon[]>([
  {
    id: 1,
    href: "https://www.instagram.com/c__96_i/?hl=am-et",
    image: "fab fa-instagram",
  },
  { id: 2, href: "https://github.com/suimin-suyaa", image: "fab fa-github" },
  { id: 3, href: "https://note.com/suimin_suyaa", image: "fas fa-comment" },
]);
</script>
