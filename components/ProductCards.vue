<template>
	
		<div
			class="card text-left flex gap-2 flex-col h-[40vh] hover:scale-105 duration-500 relative z-20 md:w-full  md:h-[40vh]"
			
		><NuxtLink class="w-full h-[50%]" :to="`/products/${product.id}`">
		
			<img
				:src="product.image"
				alt="product thumb"
				class="h-full w-full object-contain aspect-square basis-1/2"
			/>
		</NuxtLink>
			<div class="basis-1/2 h-[50%]">
				<p
					class="text-md mb-2 w-3/4 overflow-hidden text-black font-bold tracking-[0.025rem] text-xs"
				>
					{{
						product.title.substring(0, 20) + `...`
					}}
				</p>
				<p
					class="text-md w-3/4 overflow-hidden text-black font-bold tracking-[0.025rem] text-xs"
				>
					<span
						class="text-[#686868] line-through"
					>
						${{ Math.round(product.price + 10) }}
					</span>
					${{ Math.round(product.price) }}
				</p>
			</div>
			<div
				class="flex w-full justify-between items-center"
			>
				<NuxtLink :to="`/products/${product.id}`">
					<button
						class="btn text-primary h-[20%]"
					>
						Buy now
					</button>
				</NuxtLink>

				<font-awesome-icon
					class="text-primary/70 hover:text-primary"
					:class="liked==true?'text-primary':''"
					icon="fa-solids fa-heart "
					@click="likeProduct() && toggleClick() "
				/>

				<font-awesome-icon
					class="text-primary"
					icon="fa-solids fa-cart-plus"
				/>
			</div>
			<!-- <vue3starRatings starColor="#Fb923C" v-model="product.rating.rate" starSize="8" :showControl="false" class="w-[10%]" > </vue3starRatings> -->
		</div>
	
</template>

<script setup>
	import vue3starRatings from "vue3-star-ratings";
	import { faHeart, faLeftLong } from "@fortawesome/free-solid-svg-icons";
	import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
	import { useFavouriteStore } from "~~/stores/favourites";

	const { product } = defineProps(["product"]);
	const favourites = useFavouriteStore();

	let liked= ref(false)
	const likeProduct = computed(() => {
		const quantity = ref(1);

		return favourites.likedProducts(
			product,
			quantity.value
		);

		
	});
	const toggleClick=()=>{
		liked.value=true
	}

</script>

<style lang="scss" scoped>
	.thumb {
		// min-height: 30%;
		width: 50%;
		max-height: 30%;
		max-width: 70%;
		margin: 0 auto;
	}
</style>
