<template>
  <button class="bg-white flex justify-center items-center 
    xl:px-2 2xl:px-3 3xl:px-5 xl:py-1 2xl:py-2 rounded-full gap-2 3xl:gap-5 shadow-xl
    hover:bg-blue text-black hover:text-white hover:border-white hover:scale-105
    active:scale-95 transition-transform duration-100 ease-in-out">
    <img 
      class="xl:w-6 2xl:w-8 3xl:w-12"
      :src="item.icon" 
      alt="icon">
    <div class="font-nunito font-normal
      xl:text-lg 2xl:text-xl 3xl:text-2xl">
      {{ item.name }}
    </div>
  </button>
</template>

<script setup>
  const props = defineProps({
    item: {
      type: Object,
      required: true
    }
  });
</script>
