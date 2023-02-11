<template>
	<div
		id="body-items"
		class="pt-12 z-10 relative overflow-x-hidden"
	>
		<div
			class="left-0 w-screen h-[50vh] lg:h-[70vh] bg-primary overflow-hidden z-20 mx-auto relative rounded-lg scroll-smooth"
		>
			<div
				v-for="(item, index) in imageData"
				v-show="index == currentData"
				class="h-full w-full flex flex-col-reverse   pt-6 md:flex-row-reverse  items-center pl-12 absolute z-10"
			>
				<div
					class="basis-3/5 w-full  md:h-full justify-self-end rounded-full gradient "
					:class="
						index == 3
							? 'basis-4/5 md:translate-0'
							: ''
					"
				>
					<img
						:src="`${item.imageSrc}`"
						alt=""
						class="h-[100%] backdrop-blur-sm w-[60%] mx-auto md:w-full object-contain aspect-square"
					/>
					<div class="btn  block md:hidden mt-6 py-2 rounded-lg text-lg px-6">Shop now</div>

				</div>
				<div
					class=" basis-2/5 w-[60%] md:block flex flex-col items-center mx-auto md:w-[20vw] text-center  md:text-left"
				>
					<p class="text-2xl lg:text-5xl font-bold lg:leading-[62px] leading-12">
						{{ item.imageText1 }}
						<span  class="text-neutral"> {{ item.imageText2 }} </span> <br>
						<span>{{ item.imageText3 }} </span> <br>
						<span class="text-neutral">{{ item.imageText4 }} </span>
					</p>
					<div class="btn  opacity-0 mt-6 py-2 rounded-lg text-lg px-6">Shop now</div>
				</div>
			</div>
		</div>

		

		<ShowProducts
		class="pt-12"
			:show="show"
			section="Products under $20"
			:products="cheapProducts"
		/>
		<ShowProducts
			:show="show"
			section="User's favorite"
			:products="favorite"
		/>
		<ShowProducts
			:show="show"
			section="Electronics"
			:products="electronics"
		/>
		
		<Banner />
		<ShowProducts
			:show="show"
			section="Electronics"
			:products="electronics"
		/>

		<newsletter />
		<FooterView />
	</div>
</template>

<script setup>
	import { useProductStore } from "../stores/store";
	import image1 from "~/assets/img/image1.png";
	import image2 from "~/assets/img/image2.png";
	import image3 from "~/assets/img/image3.png";
	const productStore = useProductStore();

	productStore.getProducts()
	const show = ref(false);
	onMounted(() => {
		show.value = true;
	});

	const imageData = [
		{
			imageSrc: image2,
			imageText1:"Get ",
			imageText2:"Affordable ",
			imageText3:"HouseHold ",
			imageText4:"Materials ",
		},
		{
			imageSrc: image1,
			imageText1: "Shop ",
		
			imageText2:"for your  ",
			imageText3:"Gadgets  ",
			imageText4:"online ",
		},
		{
			imageSrc: image3,
			imageText1:
				"Buy all the",		
			imageText2:"school ",
			imageText3:"Stuff  ",
			imageText4:"you need ",
		},
	];
	

	const currentData = ref(0);

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
	const cheapProducts = computed(() => {
		return productStore.products.data.filter((product) => product.price < 20)
			.slice(0, -1);
	});

	const electronics = computed(() => {
		return productStore.products.data.filter(
				(product) =>
					product.category == "electronics"
			)
			.slice(0, 5)
			.reverse();
	});
	const favorite = computed(() => {
		return productStore.products.data.filter(
				(product) => product.rating.rate < 3.5
			)
			.slice(0, 5)
			.reverse();
	});
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
	#body-items::-webkit-scrollbar {
		width: 0;
	}
	.gradient {
		background: radial-gradient( #fff 0%, #f9b97c 30%,  #FF7C02 60%);

		
	}
</style>
