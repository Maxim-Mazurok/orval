import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePetStore = defineStore('pet', () => {
  const selectedPetId = ref();

  return {
    selectedPetId,
  };
});
