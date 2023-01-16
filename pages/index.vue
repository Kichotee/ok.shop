<template>
	<div id="body-items"
		class="md:pt-24 pt-32 z-10 relative overflow-x-hidden"
	>
		
			<div
				class="sticky left-0 w-screen h-[50vh] md:h-[70vh] md:w-[90%] bg-orange-400 overflow-hidden z-20 mx-auto md:relative rounded-lg scroll-smooth duration-500"
			>
				<div
					v-for="(item, index) in imageData"
					v-show="index == currentData"
					class="h-full w-full flex flex-col-reverse pt-4 md:flex-row-reverse justify-center items-center overflow-hidden md:translate-x-24 absolute z-10"
				>
					<img
						:src="`${item.imageSrc}`"
						alt=""
						class="w-3/5 basis-3/4"
						:class="
							index == 1
								? 'w-1/3 md:translate-0'
								:''
						"
					/>
					<div
						class="w-full h-full grid grid-cols-1 place-items-center basis-1/4 px-2 text-center md:text-left"
					>
						<p class="text-5xl font-bold">
							{{ item.imageText }}
						</p>
					</div>
				</div>
			</div>
	

		<div
			class="h-max container pt-24 z-20 relative mx-auto"
			id="product-under-20"
			v-show="show"
		>
			<div
				class="bg-black/50 py-2 px-1 rounded-t-xl"
			>
				<h3
					class="font-bold text-orange-400 text-center md:text-left"
				>
					Products under 20$
				</h3>
			</div>
			<transition-group
				v-if="show"
					tag="div"
					appear
					@before-enter="firstSlideBeforeEnter"
					@enter="firstSlideEnter"
					
					class="px-4 h-[55vh] overflow-x-scroll md:overflow-hidden md:grid-cols-5 md:grid md flex flex-c gap-4 md:w-full whitespace-nowrap"
				>
			
				
					<span
						class="h-[90%] md:w-full mt-4"
						v-for="p in productStore.products.data
							.filter(
								(product) => product.price < 20
							)
							.slice(0, -1)"
							:key="p"
							
					>
						<ProductCards
							:product="p"
						></ProductCards>
					</span>
				
			
			
			</transition-group>
			
			
		</div>
		<div
			class="h-max container z-20 relative mx-auto"
			
		>
			<div
				class="bg-stone-500 py-2 px-1 rounded-t-xl"
			>
				<h3
					class="font-bold text-orange-400 text-center md:text-left"
				>
					Users' favorites
				</h3>
			</div>
			<div>
				<transition-group
				
					tag="div"
					appear
					@before-enter="beforeEnter"
					@enter="enter"
					class="px-4 h-[55vh] overflow-x-scroll md:overflow-hidden md:grid-cols-5 md:grid md flex flex-c gap-4 md:w-full whitespace-nowrap"
				>
					<div
						class="h-full md:w-full mt-4"
						v-for="p in productStore.products.data
							.filter(
								(product) =>
									product.rating.rate < 3.5
							)
							.slice(0, 5)
							.reverse()"
						:key="p.title"
					>
						<ProductCards
							:product="p"
						></ProductCards>
					</div>
				</transition-group>
			</div>
		</div>
		<newsletter />
		<FooterView />
	</div>
</template>

<script setup>
	import { useProductStore } from "../stores/store";
	import image1 from "~/assets/img/image1.png";
	import image2 from "~/assets/img/image2.png";
	import image3 from "~/assets/img/image3.png";
	import { gsap } from "gsap";
	import scrollTrigger from "gsap/ScrollTrigger";

	const productStore = useProductStore();

	productStore.getProducts();
	gsap.registerPlugin(scrollTrigger);
	const show = ref(false);
	onMounted(() => {
		show.value = true;
	});

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
			imageText:
				"Buy all the school stuff you need",
		},
	];
	const beforeEnter = (el) => {
		el.style.opacity = 0;
		el.style.transform = "translateX(100%)";
	};
	const enter = (el) => {
		gsap.to(el, {
			scrollTrigger: {
				target: el,
				toggleActions: "play play play reverse ",
				start: "40% 10%",
				end: "30% center",
				// markers: true,
				
			},
			duration: 3,
			x: 0,
			opacity: 1,
			ease: "elastic",
			delay: el.dataset.index * 0.5,
			
		});
	};
	const firstSlideBeforeEnter = (el) => {
		el.style.opacity = 0;
		el.style.transform = "translateX(-100%)";
	};
	const firstSlideEnter = (el) => {
		gsap.to(el, {
			scrollTrigger: {
				target: el,
				toggleActions: "play play play reverse ",
				start: "10% 10%",
				end: "30% center",
				// markers: true,
				
			},
			duration: 3,
			x: 0,
			opacity: 1,
			ease: "elastic",
			delay: el.dataset.index * 0.5,
			
		});
	};

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
	#body-items::-webkit-scrollbar{
        width: 0;
    }
</style>
