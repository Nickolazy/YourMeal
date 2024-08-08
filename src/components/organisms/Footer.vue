<template>
  <div class="bg-white flex mt-32">
    <div class="mt-10 mb-5 xl:mx-14 2xl:mx-20 xl:mr-20 2xl:mr-60 w-full flex justify-between items-start flex-wrap">
    <div class="grid gap-6">
      <img 
      class=""
      src="../../assets/img/svg/footerLogo.svg" 
      alt="Logo"> 

      <div class="font-nunito font-normal text-sm">
        © YouMeal, 2024 <br>
        Post Design: Usmanskiy Nickolay
      </div>
    </div>
    <div class="flex gap-32 font-nunito font-medium text-2xl flex-wrap">
      <div class="grid gap-5">
        Номер для заказа
        <div class="flex gap-2 items-center text-lg">
          <img 
            class="w-6 h-auto"
            src="../../assets/img/icons/Call.svg" 
            alt="Phone">

            <a href="tel:+79788333811">+7(978)833-38-11</a>
        </div>
      </div>
      <div class="grid gap-5">
        Я в соцсетях
        <div class="flex justify-start gap-3">
          <button @click="openLink('tg')">
            <img 
            class="w-9 h-auto hover:scale-110 transition-transform"
            src="../../assets/img/svg/tg.svg" 
            alt="TG">
          </button>
          <button @click="openLink('vk')">
            <img 
              class="w-9 h-auto hover:scale-110 transition-transform"
              src="../../assets/img/svg/vk.svg" 
              alt="VK">
          </button>
        </div>
      </div>
    </div>
    </div>
  </div>  
</template>

<script setup>
  const openLink = (net) => {
    switch(net) {
      case 'tg':
        window.open('https://t.me/tired_of_pretence', '_blank'); 
        break;
      case 'vk':
        window.open('https://vk.com/sandman_9', '_blank'); 
        break;
      default:
        alert("Link is not found!");
        break;
    }
  }
</script>