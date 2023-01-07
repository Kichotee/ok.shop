<template>
    <div class="card  text-center hover:scale-105 duration-500  " :class='`${ [`/products`].includes($route.path)}`? "h-[80%]": null '>
        <img :src="product.image" alt="product thumb" class="thumb">
        <p class="font-bold text-gray-500 m-4 truncate"></p>
        <NuxtLink :to="`/products/${product.id}`">
            <button class="btn my-4 h-[15%]">
                view Details
            </button>
            <p  class='text-md text-gray-400 text-sm'>
                {{ product.title.substring(0, 25)+ `...` }}
                <!-- {{ product.description.substring(0,10)+ '...' }} -->
            </p>
        </NuxtLink>

    </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
const { product } = defineProps(['product'])


</script>

<style lang="scss" scoped>
.thumb {
    min-height: 40%;
    max-height: 40%;
    max-width: 70%;
    margin: 0 auto;
}
</style>