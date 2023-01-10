<template>
    <div class="card  text-center hover:scale-105 duration-500 w-[45vw] relative z-20 md:w-full  h-[35vh] md:h-[40vh] " >
        <img :src="product.image" alt="product thumb" class="thumb">
        <p class="font-bold text-gray-500 m-4 truncate"></p>
        <NuxtLink :to="`/products/${product.id}`">
            <button class="btn my-6 h-[20%]">
                view Details
            </button>
            <p  class='text-md text-gray-400 text-xs'>
                {{ product.title.substring(0, 25)+ `...` }}
                
            </p>
        </NuxtLink>
        
        <!-- <vue3starRatings starColor="#Fb923C" v-model="product.rating.rate" starSize="8" :showControl="false" class="w-[10%]" > </vue3starRatings> -->
    </div>
</template>

<script setup>
import vue3starRatings from "vue3-star-ratings";
const { product } = defineProps(['product'])


</script>

<style lang="scss" scoped>
.thumb {
    min-height: 30%;
    max-height: 30%;
    max-width: 70%;
    margin: 0 auto;
}
</style>