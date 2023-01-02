<template>
<div>

    <h2 class="font-bold text-3xl">
        OK. <span class="text-green-300 text-4xl italic ">Shop</span>
    </h2>
    <div v-if="productStore.length!==0" class="h-[60vh] flex justify-center items-center w-4/5  mx-auto mt-2">
      <div class="img-box w-full max-w-full h-full flex justify-center items-center" v-for="(product, index) in productStore.products.data" :key="index"  v-show="currentData==index">
        <i @click="Prev" class="material-icons cursor-pointer">
          chevron_left
        </i>
        
            <img  :src="product.image" alt class="w-2/4 h-full mx-auto">
        
            <i @click="Next" class="material-icons cursor-pointer ">
                chevron_right
            </i>
        </div>
        
    </div>
</div>
</template>

<script setup>
import {useProductStore} from '../stores/store';

const productStore = useProductStore()

productStore.getProducts();
const products= computed(()=>{

  productStore.products.data
})
// console.log(productStore.products.data.length);

const currentData = ref(0);
const Next = () => {
    currentData.value++
    if (currentData.value >= 20) {
        currentData.value = 0
    }

}
const indx=computed(()=>{
  console.log(currentData.value);
})
console.log(indx);
const Prev = () => {
    if (currentData.value <= 0) {
        currentData.value = 20
    } else {
        currentData.value--
    }
}
setInterval(() => {
    Prev()
}, 5000)
</script>

<style scoped>
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
