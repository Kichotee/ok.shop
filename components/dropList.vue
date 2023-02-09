<template>
    <div
			id="search-result"
			class="absolute h-[40vh]  bg-[#fff] top-[6vh] md:top-[8vh] w-[60vw]  md:w-[80%]  rounded overflow-x-hidden"
			
		>

        <font-awesome-icon class="text-primary absolute right-10 top-2" icon="fa-close"/>
        <p  v-for="product in newArray " key="product" class="mt-4 mb-2 mx-auto w-max">
			
                {{ product }}
                
        </p>
		
    </div>

</template>
<script setup>
import { onMounted } from "vue";



const {products} = defineProps(['products'])
const categories= ref([])

// const cheapProducts = computed(() => {
// 		return products
// 			.filter((product) => product.price < 20)
// 			.slice(0, -1);
// 	});
let newArray=ref(new Set([]))
onMounted(()=>{
   for (let i = 0; i < products.length; i++) {
   newArray.value.add(products[i].category)
   }

   
    
   
})


</script>