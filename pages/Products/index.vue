<template class="page">
    <div class="grid md:grid-cols-4 grid-cols-2 gap-4 md:gap-4 z-20 relative w-full pl-4 pr-2">
        <div  v-for="p in productStore.products.data">
            <ProductCards  :product="p"></ProductCards>
    </div>
  
   
    </div>
</template>

<script setup>
// import modules
   import {useProductStore} from '~~/stores/store'


// define layouts
 definePageMeta({
    layout:'products'
})
// use store data
const productStore = useProductStore()

productStore.getProducts();


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