<template>
	<div class="md:h-[100%] h-[90%]  flex items-center justify-start md:justify-center relative  w-full">
		<input
			type="search"
			name=""
			id=""
			placeholder="Find what you need"
			v-model="searchData"
			class="border  w-[80%] placeholder:text-center focus:border-primary  focus:py-2 px-2 border-[#ddd]"
		/>
		<div
			id="search-result"
			class="absolute h-[40vh]  bg-[#fff] top-[6vh] md:top-[8vh] w-[60vw]  md:w-[80%]  rounded overflow-x-hidden"
			v-if="searchData != '' "
		>
			<p v-if="searchResult" v-for="product in searchResult " class="mb-2 mx-auto w-max">
                <NuxtLink :to="`/products/${product.id}`">
                
                    {{ product.title.substring(0,40) + '...' }}
                </NuxtLink>
        </p>
		<p v-if="searchResult== ''" class="mx-auto my-[20%] w-[40%] ">
			Item not found
		</p>
		</div>
	</div>
</template>

<script setup>

	import { useProductStore } from "~/stores/store";
	// import products Store
	const productStore = useProductStore();
	productStore.getProducts();

	const searchData = ref('');
	const  searchResult = computed(() => {

	    	return(
			
                productStore.products.data.filter(
					(product) =>
                    {
                        return(
						product.title
							.toUpperCase()
							.includes(
								searchData.value.toUpperCase()
							)
                        ||
                        product.category
							.toUpperCase()
							.includes(
								searchData.value.toUpperCase()
							))}
				)
			)
		
	});
</script>

<style lang="scss" scoped></style>
