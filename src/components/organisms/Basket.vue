<template>
  <div class="bg-white rounded-3xl w-[425px] h-full flex-shrink-0 p-5 shadow-xl">
    <div class="flex justify-between items-start
      font-nunito text-black">
      <div class="font-bold text-2xl mb-3">
        Корзина
      </div>
      <div class="bg-gray font-normal text-lg px-5 rounded-lg">
        {{ countPositions }}
      </div>
    </div>
    <div v-if="countPositions">
      <hr class="border-darkGray">
      <PositionInBasket v-for="item in positions" :key="item.id" 
        :item="item"
        :addToBasket="addToBasket"
        :removeFromBasket="removeFromBasket"/>

      <hr class="border-darkGray">

      <div class="flex justify-between items-start
        font-nunito text-black font-medium text-xl
        my-3">
        <div>
          Итого
        </div>
        <div>
          {{ costOfBasket }}₽
        </div>
      </div>
      <div class="flex justify-center my-4">
        <button class="w-full p-2 rounded-xl font-nunito font-base text-lg shadow-xl
         bg-orange text-white hover:bg-lightOrange hover:scale-105
        hover:border-white active:scale-100 transition-transform duration-100 ease-in-out">
          Оформить заказ
        </button>
      </div>
      <div v-if="isFreeDelivery"
        class="flex justify-start items-center gap-2 mb-1">
        <img src="../../assets/img/icons/Доставка.svg" alt="Delivery">
        Бесплатная доставка
      </div>
    </div>

    <div v-else
      class="font-nunito text-black font-medium text-lg">
      Тут пока пусто :(
    </div>
  </div>
</template>

<script setup>
  import { computed } from "vue";
  import PositionInBasket from "../atoms/PositionInBasket.vue";

  const props = defineProps({
    menuStore: {
      type: Object,
      reqiured: true
    }
  });

  const countPositions = computed(() => props.menuStore.getCountPositions);
  const costOfBasket = computed(() => props.menuStore.getCostOfBasket);
  const positions = computed(() => props.menuStore.getBasketItems);

  const addToBasket = props.menuStore.addToBasket;
  const removeFromBasket = props.menuStore.removeFromBasket;

  const isFreeDelivery = computed(() => costOfBasket.value >= 599);
</script>