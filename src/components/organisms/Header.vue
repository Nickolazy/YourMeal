<template>
  <div class="flex justify-between xl:mx-28 2xl:mx-40 3xl:mx-20 mt-20 mb-20">
    <ButtonHeader v-for="(item, index) in menuHeader" 
    :key="index" 
    :item="item"
    :isActiveButton="isActiveButton" 
    @update:isActiveButton="updateActiveButton"/>
  </div>
</template>

<script setup>
  import ButtonHeader from "../atoms/ButtonHeader.vue"

  const props = defineProps({
    menuHeader: {
      type: Array,
      required: true
    },
    isActiveButton: {
      type: String,
      required: true
    }
  });

  const emit = defineEmits(['update:isActiveButton']);

  const updateActiveButton = (newActiveButton) => {
    emit('update:isActiveButton', newActiveButton);
  };
  
</script>