<template>
  <div class="flex justify-between items-center my-5
    font-nunito text-black">
    <div class="flex gap-3">
      <img 
      class="w-24 h-auto rounded-xl shadow-md"
      :src="getImageUrl(item.img)"  
      alt="icon">
      <div class="flex flex-col 2xl:gap-1">
        <div>
          <div class="font-medium xl:text-md 2xl:text-lg leading-none">
            {{ item.name }}
          </div>
          <div class="font-normal xl:text-sm 2xl:text-md text-lightText">
            {{ item.weight }}г
          </div>
        </div>
        <div class="font-medium xl:text-md 2xl:text-lg">
          {{ item.cost }}₽
        </div>
      </div>
    </div>
    <div class="bg-gray flex justify-between items-center xl:w-1/4 2xl:w-1/3 xl:py-2 2xl:py-3 xl:px-3 2xl:px-5 rounded-2xl
      font-normal xl:text-xl 2xl:text-2xl">
      <button @click="handleRemove" class="text-3xl hover:scale-125 active:scale-95 transition-transform
        duration-100 ease-in-out"> - </button>
        {{ itemAmount }}
      <button @click="handleAdd" class="hover:scale-125 active:scale-95 transition-transform 
        duration-100 ease-in-out"> + </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

  const props = defineProps({
    item: {
      type: Object,
      required: true
    },
    addToBasket: {
      type: Function,
      required: true
    },
    removeFromBasket: {
      type: Function,
      required: true
    },
    getAmountOfItem: {
      type: Function,
      required: true
    }
  });

  const { item, addToBasket, removeFromBasket, getAmountOfItem } = props;

  const handleAdd = () => {
    itemAmount = addToBasket(item.type, item.id, 1);
  };

  const handleRemove = () => {
    itemAmount = removeFromBasket(item.type, item.id, 1);
  };

  let itemAmount = computed(() => {
    return getAmountOfItem(props.item.type, props.item.id);
  });

  function getImageUrl(imgPath) {
    return new URL(`../../${imgPath}`, import.meta.url).href;
  };

</script>