<template>
  <div class="fixed inset-0 bg-black opacity-85">
  </div>
  <div class="fixed inset-0 flex items-center justify-center">
    <div class="bg-white p-8 rounded-3xl shadow-lg font-nunito text-black xl:w-7/12 2xl:w-1/2 ">
      <div class="flex justify-between items-start mb-8">
        <div class="font-semibold xl:text-5xl 2xl:text-6xl">
          {{ item.name }}
        </div>
        <button @click="closeDescription">
          <img 
            class="w-10 hover:scale-125 active:scale-95 transition-transform
              duration-100 ease-in-out"
            src="../../assets/img/icons/Close.svg" 
            alt="Close">
        </button>
      </div>
      <div class="flex justify-start gap-10 mb-16">
        <img 
          class="w-8/12"
          :src="getImageUrl(item.img)" 
          alt="imageItem">
        <div class="w-2/3">
          <div class="font-medium xl:text-xl 2xl:text-2xl">
            {{ item.description }}
          </div>
          <div class="">
            <p class="font-bold xl:text-md 2xl:text-lg mt-2">Состав:</p>
            <div v-for="(composition, id) in item.composition" :key="item.composition.id" class="font-base xl:text-md 2xl:text-lg">
              {{ composition }}
            </div>
            <div class="font-base xl:text-md 2xl:text-lg text-lightText mt-1">
              {{ item.weight }}г, ккал {{ item.calorie }}
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-start items-center gap-10">
        <button @click="addToBacket" class="w-full p-3 rounded-2xl font-nunito font-base text-2xl shadow-lg
         bg-orange text-white hover:bg-lightOrange hover:scale-105 active:scale-100 
         transition-transform duration-100 ease-in-out">
          Добавить
        </button>
        <div class="flex w-full justify-between items-center">
          <div class="bg-gray flex justify-between w-[125px] py-3 px-5 rounded-2xl
          font-normal text-2xl">
            <button @click="removeItems" class="text-3xl hover:scale-125 active:scale-95 transition-transform
              duration-100 ease-in-out"> - </button>
              {{ amountToAdd }}
            <button @click="addItems" class="hover:scale-125 active:scale-95 transition-transform 
              duration-100 ease-in-out"> + </button>
          </div>
          <div class="font-semibold text-4xl">
            {{ costOfAdded }} ₽
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';

  const props = defineProps({
    menuStore: {
      type: Object,
      reqiured: true
    },
    id: {
      type: Number,
      required: false,
    },
    type: {
      type: String,
      required: false,
    }
  });

  const emit = defineEmits(['itemClicked']);
  const amountToAdd = ref(1);

  const item = computed(() => {
    if (props.id && props.type) {
      const items = props.menuStore[props.type];
      return items ? items.find(item => item.id === props.id) || {} : {};
    }
    return {};
  });

  const costOfAdded = computed(() => {
    return item.value.cost * amountToAdd.value;
  });

  const closeDescription = () => {
    emit('itemClicked', null, null);
  };

  const addItems = () => {
    amountToAdd.value++;
  };

  const removeItems = () => {
    if(amountToAdd.value > 1) {
      amountToAdd.value--;
    }
  };

  const addToBacket = () => {
    emit('itemClicked', null, null);

    props.menuStore.addToBasket(props.type, props.id, amountToAdd.value);
  }

  function getImageUrl(imgPath) {
    return new URL(`../../${imgPath}`, import.meta.url).href;
  };
</script>
