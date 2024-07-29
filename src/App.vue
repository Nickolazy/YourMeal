<template>
  <div class="bg-gray">
    <Brand />
    <Header />
    <div class="mx-10 flex justify-between ">
      <Basket 
      :menuStore="menuStore"/>
      
      <InformationPage />
    </div>
    <Footer />
  </div>
</template>

<script setup>
  import Brand from "./components/organisms/Brand.vue";
  import Header from "./components/organisms/Header.vue";
  import Basket from "./components/organisms/Basket.vue";
  import InformationPage from "./components/organisms/InformationPage.vue";
  import Footer from "./components/organisms/Footer.vue";

  import { useMenuStore } from "./store/MenuStore";

  const menuStore = useMenuStore();
</script>

