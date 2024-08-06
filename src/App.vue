<template>
  <div class="bg-gray min-h-screen">
    <Brand />
    <Header />
    <div class="mx-10 flex">
      <Basket 
      :menuStore="menuStore"/>

      <InformationPage 
      :menuStore="menuStore"
      :isDescOpened="isDescOpened"
      @itemClicked="handleItemOpen"/>
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
</template>

<script setup>
  import Brand from "./components/organisms/Brand.vue";
  import Header from "./components/organisms/Header.vue";
  import Basket from "./components/organisms/Basket.vue";
  import InformationPage from "./components/organisms/InformationPage.vue";
  import Footer from "./components/organisms/Footer.vue";
  import Description from "./components/organisms/Description.vue";


  import { useMenuStore } from "./store/MenuStore";
  import { ref } from "vue";

  const menuStore = useMenuStore();

  const isDescOpened = ref(false);
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

  console.log(menuStore.basket);

</script>
