<template class="page">
    <div class="grid grid-cols-4 gap-4">
        <div  v-for="p in products">
            <ProductCards :product="p"></ProductCards>
    </div>
    </div>
</template>

<script setup>
 definePageMeta({
    layout:'products'
})

const {data:products} = await useFetch('https://fakestoreapi.com/products')

</script>

<style lang="scss" scoped>
    .page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>