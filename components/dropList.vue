<template>
    <div
			id="search-result"
			class="absolute h-[40vh]  bg-[#fff] top-[6vh] md:top-[8vh] w-[60vw]  md:w-[80%]  rounded overflow-x-hidden"
			
		>
        <p  v-for="product in categories " key="product" class="mb-2 mx-auto w-max">
			
                {{ product }}
                
        </p>
		
    </div>

</template>
<script setup>
const {products} = defineProps(['products'])
const categories= ref([])
const allCategories =computed(()=>{

    
    
    
    for(let i in products){
       let newArray=[]
       newArray.push(products[i].category)

       console.log(newArray);
       return newArray
    }
    return newArray
    })
    


    onMounted(( )=>{
        
    computed(()=>{
        
     console.log(allCategories.value);
    })
})



</script>