<template>
  <div class="fixed inset-0 bg-black opacity-85">
  </div>
  <div class="fixed inset-0 flex items-center justify-center">
    <div class="bg-white rounded-3xl shadow-lg font-nunito text-black w-1/2 h-4/6
      flex justify-between">
      <div class="w-1/2 bg-yellow rounded-l-3xl flex justify-center items-center">
        <img 
          class="w-4/6"
          src="../../assets/img/svg/donut.svg" 
          alt="Donut">
      </div>
      <div class="w-1/2 p-8 bg-gray rounded-r-3xl">
        <div class="flex justify-end items-start">
          <button @click="closeDelivery">
            <img 
              class="w-10 hover:scale-125 active:scale-95 transition-transform
                duration-100 ease-in-out"
              src="../../assets/img/icons/Close.svg" 
              alt="Close">
          </button>
        </div>
        <div class="h-full">
          <form @submit.prevent="submitForm"
            class="text-lg h-full flex flex-col justify-between">
            <div>
              <div class="font-semibold text-4xl">
                Доставка
              </div>
              <div>
              <div class="flex flex-col font-base">
                <input 
                  class="mt-5 mb-3 px-4 py-3 rounded-2xl"
                  type="text"
                  v-model="form.name"
                  placeholder="Ваше имя"/>

                <input 
                  class="mb-2 px-4 py-3 rounded-2xl"
                  type="text"
                  v-model="form.phone"
                  placeholder="Телефон"/>
              </div>

              <div class="font-medium text-xl">
                <div class="my-4 flex items-center">
                  <button @click="chooseDelivery" class="mr-2">
                    <div v-if="selectDeliv.delivery">
                      <img 
                        class="w-5"
                        src="../../assets/img/icons/pointBlack.svg" 
                        alt="Yes">
                    </div>
                    <div v-else>
                      <img 
                        class="w-5"
                        src="../../assets/img/icons/pointWhite.svg" 
                        alt="No">
                    </div>
                  </button>

                  Доставка
                </div>
                <div class="mb-4 flex items-center">
                  <button @click="choosePickUp" class="mr-2">
                    <div v-if="selectDeliv.pickUp">
                      <img 
                        class="w-5"
                        src="../../assets/img/icons/pointBlack.svg" 
                        alt="Yes">
                    </div>
                    <div v-else>
                      <img 
                        class="w-5"
                        src="../../assets/img/icons/pointWhite.svg" 
                        alt="No">
                    </div>
                  </button>

                  Самовывоз
                </div>
              </div>
              <div v-if="selectDeliv.delivery">
                <div class="flex flex-col font-base">
                  <input 
                    class="mt-2 mb-3 px-4 py-3 rounded-2xl"
                    type="text"
                    v-model="form.address"
                    placeholder="Улица, дом, квартира"/>
                  
                  <div class="flex justify-center gap-3">
                    <input 
                      class="px-4 py-3 rounded-2xl w-1/2"
                      type="text"
                      v-model="form.flat"
                      placeholder="Этаж"/>
                    
                    <input 
                      class="px-4 py-3 rounded-2xl w-1/2"
                      type="text"
                      v-model="form.doorphone"
                      placeholder="Домофон"/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div class="flex justify-center my-4 mb-10">
              <button type="submit" @click="closeDelivery" class="w-full p-2 rounded-xl font-nunito font-extralight text-2xl shadow-xl
              bg-orange text-white hover:bg-lightOrange hover:scale-105
              hover:border-white active:scale-100 transition-transform duration-100 ease-in-out">
                Отправить
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const props = defineProps({
    menuStore: {
      type: Object,
      reqiured: true
    }
  });

  const emit = defineEmits(['delivClicked']);

  const closeDelivery = () => {
    emit('delivClicked');
  }

  const form = ref({
    name: '',
    phone: '',
    address: '',
    flat: '',
    doorphone: ''
  });

  const submitForm = () => {
    console.log('Form submitted:', form.value);

    // props.menuStore.basket = [];
  };

  const selectDeliv = ref({
    delivery: true,
    pickUp: false
  })

  const chooseDelivery = () => {
    selectDeliv.value.delivery = true;
    selectDeliv.value.pickUp = false;
  }

  const choosePickUp = () => {
    selectDeliv.value.pickUp = true;
    selectDeliv.value.delivery = false;
  }
</script>