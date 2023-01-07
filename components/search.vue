<template>
	<div class="h-[100%] relative">
		<input
			type="search"
			name=""
			id=""
			placeholder="Find what you need"
			v-model="searchData"
			class="border"
		/>
		<div
			id="search-result"
			class="absolute h-[40vh] bg-white mt-2 z-10 w-[100%] rounded overflow-hidden"
			v-if="searchData != '' "
		>
			<p v-for="product in searchResult " class="mb-2 mx-auto w-max">
                <NuxtLink :to="`/products/${product.id}`">
                
                    {{ product.title.substring(0,14) + '...' }}
                </NuxtLink>
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
