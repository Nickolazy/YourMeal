<template>
  <div class="relative w-screen h-auto">
    <img 
      class="w-full h-auto -mt-20 3xl:-mt-72"
      src="../assets/img/svg/bg.svg" 
      alt="Background">
    <div class="absolute inset-0 flex flex-col items-center">
      <img 
        class="w-[200px] mt-28 3xl:mt-80"
        src="../assets/img/svg/logo.svg" 
        alt="Logo">
      <div class="flex items-center gap-5 xl:mt-16 2xl:mt-20">
        <img 
        class="xl:w-[350px] 2xl:w-[500px]"
        src="../assets/img/svg/content.svg" 
        alt="Burger">
        <div class="font-nunito text-white grid gap-16 -mt-20">
          <div class="font-extrabold xl:text-[50px] 2xl:text-[70px]">
            Только самые <br />
            <span class="text-orange">сочные бургеры!</span>
          </div>
          <div class="font-regular xl:text-[18px] 2xl:text-[24px]">
            Бесплатная доставка от {{ costOfDelivery }}₽
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const costOfDelivery = 599;
</script>
