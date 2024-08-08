<template>
  <div class="fixed inset-0 bg-black opacity-85">
  </div>
  <div class="fixed inset-0 flex items-center justify-center">
    <div class="bg-white xl:rounded-2xl 2xl:rounded-3xl shadow-lg font-nunito text-black w-1/2 xl:h-[550px] 2xl:h-[650px]
      flex justify-between">
      <div class="w-1/2 bg-yellow xl:rounded-l-2xl 2xl:rounded-l-3xl flex justify-center items-center">
        <img 
          class="w-4/6"
          src="../../assets/img/svg/donut.svg" 
          alt="Donut">
      </div>
      <div class="w-1/2 xl:p-6 2xl:p-8 bg-gray xl:rounded-r-2xl 2xl:rounded-r-3xl">
        <div class="flex justify-end items-start">
          <button @click="closeDelivery">
            <img 
              class="xl:w-8 2xl:w-10 hover:scale-125 active:scale-95 transition-transform
                duration-100 ease-in-out"
              src="../../assets/img/icons/Close.svg" 
              alt="Close">
          </button>
        </div>
        <div class="h-full">
          <form @submit.prevent="submitForm"
            class="xl:text-md 2xl:text-lg h-full flex flex-col justify-between">
            <div>
              <div class="font-semibold text-4xl">
                Доставка
              </div>
              <div>
              <div class="flex flex-col font-base">
                <input 
                  class="mt-5 mb-3 xl:px-3 2xl:px-4 xl:py-2 2xl:py-3 xl:rounded-xl 2xl:rounded-2xl"
                  type="text"
                  v-model="form.name"
                  placeholder="Ваше имя"/>

                <input 
                  class="mb-2 xl:px-3 2xl:px-4 xl:py-2 2xl:py-3 xl:rounded-xl 2xl:rounded-2xl"
                  type="text"
                  v-model="form.phone"
                  placeholder="Телефон"/>
              </div>

              <div class="font-medium xl:text-md 2xl:text-xl">
                <div class="my-4 flex items-center">
                  <button type="button" @click="chooseDelivery" class="mr-2">
                    <div v-if="selectDeliv.delivery">
                      <img 
                        class="xl:w-4 2xl:w-5"
                        src="../../assets/img/icons/pointBlack.svg" 
                        alt="Yes">
                    </div>
                    <div v-else>
                      <img 
                        class="xl:w-4 2xl:w-5"
                        src="../../assets/img/icons/pointWhite.svg" 
                        alt="No">
                    </div>
                  </button>

                  Доставка
                </div>
                <div class="mb-4 flex items-center">
                  <button type="button" @click="choosePickUp" class="mr-2">
                    <div v-if="selectDeliv.pickUp">
                      <img 
                        class="xl:w-4 2xl:w-5"
                        src="../../assets/img/icons/pointBlack.svg" 
                        alt="Yes">
                    </div>
                    <div v-else>
                      <img 
                        class="xl:w-4 2xl:w-5"
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
                    class="mt-2 mb-3 xl:px-3 2xl:px-4 xl:py-2 2xl:py-3 xl:rounded-xl 2xl:rounded-2xl"
                    type="text"
                    v-model="form.address"
                    placeholder="Улица, дом, квартира"/>
                  
                  <div class="flex justify-center gap-3">
                    <input 
                      class="xl:px-3 2xl:px-4 xl:py-2 2xl:py-3 xl:rounded-xl 2xl:rounded-2xl w-1/2"
                      type="text"
                      v-model="form.flat"
                      placeholder="Этаж"/>
                    
                    <input 
                      class="xl:px-3 2xl:px-4 xl:py-2 2xl:py-3 xl:rounded-xl 2xl:rounded-2xl w-1/2"
                      type="text"
                      v-model="form.doorphone"
                      placeholder="Домофон"/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div class="flex justify-center my-4 mb-10">
              <button type="submit" class="w-full p-2 rounded-xl font-nunito font-extralight text-2xl shadow-xl
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

    closeDelivery();
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