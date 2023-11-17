import { onMounted, ref } from "vue";
import rickApi from "@/api/rick-api";
import type { Result, Character } from "../intedaces/characters";
import axios from "axios";

const characters = ref<Result[]>([]);
const isloading = ref(true);
const hasError = ref(false);
const erroMsj = ref('');

export const useCharacters = () => {


  onMounted(async () => {
    loadCharacters();
  })



  // * ESTO LO PODEMOS HACER PARA SIMULAR UNA CACHE, ESTO TAMBIEN SIRVE PARA NO HACER LA PETICION AL ENTRAR O SALI
  const loadCharacters = async () => {
    if (characters.value.length > 0) return;
    isloading.value = true;
    try {
      rickApi.get<Character>('/character')
        .then((resp) => {
          characters.value = resp.data.results;
          isloading.value = false;
          // const name = resp.data.results[0].name
          // console.log({ name });
        })
    } catch (error) {
      hasError.value = true;
      isloading.value = false;
      if (axios.isAxiosError(error)) {
        return erroMsj.value = error.message
      }
      erroMsj.value = JSON.stringify(error)
    }

  }



  return {
    characters,
    isloading,
    hasError,
    erroMsj
  }
}