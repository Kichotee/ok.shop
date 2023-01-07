<template>
<div>
    
    <div class="h-[75vh] flex justify-center items-center w-[90%] bg-orange-400 mx-auto mt-2 relative rounded-lg overflow-hidden">
     <img src="../assets/images/—Pngtree—modern single blue couch sofa_8408376.png" alt="" class="  w-[60%] absolute right-[-15%] rounded-lg">
    <div class=" w-1/2 absolute left-2 ">

        <p class="text-5xl font-bold ">
           Get affordable household materials
        </p>
    </div>
</div>
<NuxtLink to="/products">Check them out</NuxtLink>
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
