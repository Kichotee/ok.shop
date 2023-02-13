<template>
    <div class="bg-[#B70C0C] h-[40vh] md:h-[55vh] my-8 w-full grid grid-cols-5 ">
        
        
       <img :src="image1 " class="h-full">
       <div class="col-span-2">

           <p class=" text-neutral text-2xl md:text-5xl py-4 font-bold">
            Enjoy 50% Discount on our Valentine Specificals
           </p>
           <div class="btn py-2 rounded-lg text-lg px-6">
            Shop Now!
           </div>
       </div>
       <img :src="image1" class="hidden md:block">
       <div class="relative h-full col-span-2 md:col-span-1">

           <img :src="image2" class="absolute z-50 bottom-0  h-[50vh] md:h-auto ">
       </div>
       
    </div>
</template>

<script setup>
import  image1 from "assets/unsplash_d55BPRk0dnk.png";
import image2 from 'assets/unsplash_Iz1ae_tdK6k.png'

</script>

<style lang="scss" scoped>

</style>