<template>
  <div class="bg-gray min-h-screen">
    <Brand />
    <Header 
    :menuHeader="menuHeader"
    :isActiveButton="isActiveButton"
    @update:isActiveButton="isActiveButton = $event"/>
    <div class="mx-10 flex items-start">
      <Basket 
      :menuStore="menuStore"
      @delivClicked="handleDelivOpen"/>

      <InformationPage 
      :menuStore="menuStore"
      :isDescOpened="isDescOpened"
      @itemClicked="handleItemOpen"
      :isActiveButton="isActiveButton"/>
    </div>
    <Footer />
  </div>

  <div v-if="isDescOpened">
    <Description 
    :menuStore="menuStore"
    :id="selectedItemId" 
    :type="selectedItemType"
    @itemClicked="handleItemClose"/>
  </div>

  <div v-if="isDelivopened">
    <Delivery
    :menuStore="menuStore"
    @delivClicked="handleDelivClose"/>
  </div>
</template>

<script setup>
  import Brand from "./components/organisms/Brand.vue";
  import Header from "./components/organisms/Header.vue";
  import Basket from "./components/organisms/Basket.vue";
  import InformationPage from "./components/organisms/InformationPage.vue";
  import Footer from "./components/organisms/Footer.vue";
  import Description from "./components/organisms/Description.vue";
  import Delivery from "./components/organisms/Delivery.vue";

  import { useMenuStore } from "./store/MenuStore";
  import { ref } from "vue";

  const menuStore = useMenuStore();

  const isDescOpened = ref(false);
  const isDelivopened = ref(false);
  const selectedItemId = ref(null);
  const selectedItemType = ref(null);

  const handleItemOpen = (id, type) => {
    selectedItemId.value = id;
    selectedItemType.value = type;
    isDescOpened.value = true;
  };

  const handleItemClose = (id, type) => {
    isDescOpened.value = false;
  };

  const handleDelivOpen = () => {
    isDelivopened.value = true;
  };

  const handleDelivClose = () => {
    isDelivopened.value = false;
  };

  const menuHeader = [
    { name: "Бургеры", icon: new URL('assets/img/icons/Бургеры.svg', import.meta.url).href },
    { name: "Закуски", icon: new URL('assets/img/icons/Закуски.svg', import.meta.url).href },
    { name: "Хотдоги", icon: new URL('assets/img/icons/Хот-доги.svg', import.meta.url).href },
    { name: "Комбо", icon: new URL('assets/img/icons/Комбо.svg', import.meta.url).href },
    { name: "Шаурма", icon: new URL('assets/img/icons/Шаурма.svg', import.meta.url).href },
    { name: "Пицца", icon: new URL('assets/img/icons/Пицца.svg', import.meta.url).href },
    { name: "Вок", icon: new URL('assets/img/icons/Вок.svg', import.meta.url).href },
    { name: "Десерты", icon: new URL('assets/img/icons/Десерты.svg', import.meta.url).href },
    { name: "Соусы", icon: new URL('assets/img/icons/Соусы.svg', import.meta.url).href },
  ];

  const isActiveButton = ref(menuHeader[0].name);

</script>
