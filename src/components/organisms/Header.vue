<template>
  <div class="flex justify-between xl:mx-32 2xl:mx-40 3xl:mx-20 mt-20 mb-20">
    <ButtonHeader v-for="(item, index) in menuHeaders" 
    :key="index" 
    :item="item"/>
  </div>
</template>

<script setup>
  import ButtonHeader from "../atoms/ButtonHeader.vue"

  const isActiveButton = "Бургеры";

  const menuHeaders = [
    { name: "Бургеры", icon: new URL('../../assets/img/icons/Бургеры.svg', import.meta.url).href },
    { name: "Закуски", icon: new URL('../../assets/img/icons/Закуски.svg', import.meta.url).href },
    { name: "Хот-доги", icon: new URL('../../assets/img/icons/Хот-доги.svg', import.meta.url).href },
    { name: "Комбо", icon: new URL('../../assets/img/icons/Комбо.svg', import.meta.url).href },
    { name: "Шаурма", icon: new URL('../../assets/img/icons/Шаурма.svg', import.meta.url).href },
    { name: "Пицца", icon: new URL('../../assets/img/icons/Пицца.svg', import.meta.url).href },
    { name: "Вок", icon: new URL('../../assets/img/icons/Вок.svg', import.meta.url).href },
    { name: "Десерты", icon: new URL('../../assets/img/icons/Десерты.svg', import.meta.url).href },
    { name: "Соусы", icon: new URL('../../assets/img/icons/Соусы.svg', import.meta.url).href },
  ];
</script>