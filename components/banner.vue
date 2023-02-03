<template>
    <div class="bg-[#B70C0C] h-[55vh] my-8 w-full grid grid-cols-5 ">
        
        
       <img :src="image1">
       <div class="col-span-2">

           <p class=" text-neutral text-5xl py-4 font-bold">
            Enjoy 50% Discount on our Valentine Specificals
           </p>
           <div class="btn py-2 rounded-lg text-lg px-6">
            Shop Now!
           </div>
       </div>
       <img :src="image1">
       <div class="relative ">

           <img :src="image2" class="absolute z-50 bottom-0   ">
       </div>
       
    </div>
</template>

<script setup>
import  image1 from "assets/unsplash_d55BPRk0dnk.png";
import image2 from 'assets/unsplash_Iz1ae_tdK6k.png'

</script>

<style lang="scss" scoped>

</style>