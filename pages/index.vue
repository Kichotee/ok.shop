<template>
	<div>
		<div
			class="h-[75vh] w-[90%] bg-orange-400 mx-auto mt-2 relative rounded-lg scroll-smooth"
		>
			<div
				v-for="(item, index) in imageData"
				v-show="index == currentData"
				class="relative h-full w-full flex justify-center items-center overflow-hidden"
			>
				<img
					:src="`${item.imageSrc}`"
					alt=""
					class="w-[50%] absolute right-[-15%] rounded-lg"
				/>
				<div class="w-1/2 absolute left-2">
					<p class="text-5xl font-bold">
						{{ item.imageText }}
					</p>
				</div>
			</div>
		</div>

		<div class="h-max mt-12">
			<div
				class="bg-gray-300 py-2 px-1 rounded-t-xl"
			>
				<h3 class="font-bold text-orange-400">
					Products under 20$
				</h3>
			</div>
			<div
				class="grid grid-cols-5 gap-2 w-full h-[20%] justify-around grid-rows-1 container p-4 mx-auto"
			>
				<div
					class="h-[90%]"
					v-for="p in productStore.products.data
						.filter(
							(product) => product.price < 20
						)
						.slice(0, -1)"
				>
					<ProductCards
						:product="p"
					></ProductCards>
				</div>
			</div>
		</div>
		<div class="h-max">
			<div
				class="bg-gray-300 py-2 px-1 rounded-t-xl"
			>
				<h3 class="font-bold text-orange-400">
					Users' favorites
				</h3>
			</div>
			<div
				class="grid grid-cols-5 gap-2 w-full h-[20%] justify-around grid-rows-1 container p-4 mx-auto"
			>
				<div
					class="h-[90%]"
					v-for="p in productStore.products.data
						.filter(
							(product) =>
								product.rating.rate < 3.5
						)
						.slice(0, 5)
						.reverse()"
				>
					<ProductCards
						:product="p"
					></ProductCards>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { useProductStore } from "../stores/store";
	import image1 from "~/assets/img/image1.png";
	import image2 from "~/assets/img/image2.png";
	import image3 from "~/assets/img/image3.png";

	const productStore = useProductStore();

	productStore.getProducts();

	const imageData = [
		{
			imageSrc: image2,
			imageText:
				"Get affordable house hold materials",
		},
		{
			imageSrc: image1,
			imageText: "Shop for your Gadgets online",
		},
		{
			imageSrc: image3,
			imageText: "Buy all the clothes you need",
		},
	];

	const currentData = ref(0);
	const Next = () => {
		currentData.value++;
		if (currentData.value >= 20) {
			currentData.value = 0;
		}
	};

	const Prev = () => {
		if (currentData.value <= 0) {
			currentData.value = imageData.length - 1;
		} else {
			currentData.value--;
		}
	};
	setInterval(() => {
		Prev();
	}, 5000);
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
