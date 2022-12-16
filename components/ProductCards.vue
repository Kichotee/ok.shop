<template>
    <div class="card text-center hover:scale-105 duration-500"  >
        <img :src="product.image" alt="product thumb" class="thumb">
        <p class="font-bold text-gray-500 m-4 truncate"></p>
        <NuxtLink :to="`/products/${product.id}`">
        <button class="btn my-4">
            view Details
        </button>
        </NuxtLink>

    </div>
</template>

<script setup>
const {product} = defineProps(['product'])
</script>

<style lang="scss" scoped>
.thumb{
    min-height: 120px;
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
}
</style>