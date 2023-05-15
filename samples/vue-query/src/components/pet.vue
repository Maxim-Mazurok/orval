<template>
  <div class="pet" v-if="pet && petId" :key="pet.id">
    {{ petId }}
    {{ pet }}
  </div>
</template>

<script lang="ts" setup>
import { computed, unref } from 'vue';
import { useShowPetById } from '../api/endpoints/petstoreFromFileSpecWithTransformer';
import { storeToRefs } from 'pinia';
import { usePetStore } from '../store';

const petStore = usePetStore();
const { selectedPetId: petId } = storeToRefs(petStore);
const petQuery = useShowPetById(petId);
const pet = computed(() => unref(petQuery?.data));
</script>

<style scoped>
.pet {
  padding: 2rem;
  background-color: #c0c2;
}
</style>
