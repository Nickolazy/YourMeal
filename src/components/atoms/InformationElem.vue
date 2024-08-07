<template>
    <div class="bg-white rounded-3xl shadow-xl w-[400px] p-4 hover:scale-105 transition-transform duration-100 ease-in-out">
      <img 
        class="w-full"
        :src="getImageUrl(item.img)" 
        alt="Image">
      <div class="font-nunito text-black flex-col space-y-8 my-3">
        <div class="space-y-1">
          <div class="font-semibold text-3xl">
            {{ item.cost }}₽
          </div>
          <div class="font-medium text-2xl leading-none">
            {{ item.name }}
          </div>
        </div>
        <div class="font-medium text-xl text-lightText">
          {{ item.weight }}г
        </div>
      </div>

      <div class="flex justify-center">
        <button @click="handleClick" class="w-full p-2 rounded-xl font-nunito font-base text-lg
        bg-midGray text-black hover:scale-105
        hover:border-white active:scale-95 transition-transform duration-100 ease-in-out">
          Добавить
        </button>
      </div>
    </div>
</template>

<script setup>

  const props = defineProps({
    item: {
      type: Object,
      required: true
    }
  });

  const emit = defineEmits(['click']);

  const handleClick = () => {
    emit('click', props.item.id, props.item.type);
  };

  function getImageUrl(imgPath) {
    return new URL(`../../${imgPath}`, import.meta.url).href;
  };
</script>