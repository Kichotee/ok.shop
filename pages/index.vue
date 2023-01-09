<template>
	<div class="pt-24 z-10 relative">
		<Transition name="showcase" appear>
					<div
						class="h-[70vh] w-[90%] bg-orange-400 mx-auto  relative rounded-lg scroll-smooth"
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
		</Transition>

		<div class="h-max mt-12 container pt-24 z-20 relative  mx-auto">
			<div
				class="bg-black/50 py-2 px-1 rounded-t-xl"
			>
				<h3 class="font-bold text-orange-400">
					Products under 20$
				</h3>
			</div>
			<div
				class="grid grid-cols-5 gap-2 w-full  justify-around h-[60vh] pt-4 "
			>
				<div
					class="h-[70%]"
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
		<div class="h-max container  z-20 relative mx-auto">
			<div
				class="bg-stone-500 py-2 px-1 rounded-t-xl"
			>
				<h3 class="font-bold text-orange-400">
					Users' favorites
				</h3>
			</div>
			<div
				class="grid grid-cols-5 gap-2 w-full  justify-around grid-rows-1 h-[70vh] pt-4 "
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
		<newsletter/>
		<FooterView/>
		<!-- <svg class="absolute top-[30%] z-0 right-[0%]" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
  <path fill="#FB923C" d="M52.6,-53.7C58.9,-46.2,48.5,-23.1,47.9,-0.6C47.3,22,56.7,44,50.3,51C44,58,22,50,3.5,46.6C-15.1,43.1,-30.2,44.2,-44.7,37.2C-59.2,30.2,-73.2,15.1,-74.2,-1C-75.2,-17,-63.2,-34.1,-48.6,-41.6C-34.1,-49.1,-17,-47.1,3,-50.1C23.1,-53.1,46.2,-61.2,52.6,-53.7Z" transform="translate(100 100)" />
</svg> -->
	</div>
</template>

<script setup>
	import { useProductStore } from "../stores/store";
	import image1 from "~/assets/img/image1.png";
	import image2 from "~/assets/img/image2.png";
	import image3 from "~/assets/img/image2.png";
	import gsap from "gsap"
	

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
	.showcase-enter-active,
	.showcase-leave-active {
		transition: all 2s;
	}

	.showcase-enter-from,
	.showcase-leave-to {
		opacity: 0;
		translate: 0 -100%;
		filter: blur(1rem);
	}

</style>
