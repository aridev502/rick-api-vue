<script setup lang="ts">
import {useCharacters} from "@/characters/composables/useCharacters"

// * ESTO FUNCIONA SOLO CON EL "SUSPENCE" DE VUE 
// const { data  : characters } = await rickApi.get<Character>('/character');


const { characters, isloading } = useCharacters();



</script>

<template>

<h1 v-if="isloading">Loading ...</h1>
<!-- <h1>Error !</h1> -->

  <div>
    <ul>
      <li v-for="c of characters" :key="c.id">{{ c.name }} {{ c.gender }}</li>

    </ul>
  </div>
</template>

<style scoped></style>