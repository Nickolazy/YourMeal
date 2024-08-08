<template>
  <div class="w-3/4 flex flex-wrap gap-12 h-full flex-shrink-0 justify-end flex-grow">
    <InformationElem  
      v-for="item in positions" 
      :key="item.id"
      :item="item"
      @click="emitItemClick(item.id, item.type)"/>
  </div>
</template>

<script setup>
import { computed, defineEmits } from 'vue';
import InformationElem from '../atoms/InformationElem.vue';

const props = defineProps({
    menuStore: {
      type: Object,
      reqiured: true
    },
    isActiveButton: {
      type: String,
      required: true
    }
  });

  const positions = computed(() => {
    return props.menuStore.getPositionsByType(props.isActiveButton);
  });

  const emit = defineEmits(['itemClicked']);

  const emitItemClick = (id, type) => {
    emit('itemClicked', id, type);
  };
</script>