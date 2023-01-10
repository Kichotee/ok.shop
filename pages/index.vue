<template>
	<div class="pt-24 z-10 relative overflow-x-hidden">
		<Transition name="showcase" appear>
					<div
						class="h-[70vh] w-[90%] bg-orange-400  z-20 mx-auto  relative rounded-lg scroll-smooth duration-500"
					>
						<div
							v-for="(item, index) in imageData"
							v-show="index == currentData"
							class=" h-full w-full  flex flex-col-reverse pt-4  md:flex-row-reverse justify-center items-center overflow-hidden md:translate-x-24 absolute z-10"
						>
							<img
								:src="`${item.imageSrc}`"
								alt=""
								class="w-3/5 md:w-1/2 basis-3/4 rounded-lg"
							/>
							<div class="w-full justify-self-center basis-1/4 px-2 text-center">
								<p class="text-5xl font-bold ">
									{{ item.imageText }}
								</p>
							</div>
						</div>
					</div>
		</Transition>

		<div class="h-max mt-12 container pt-24 z-20 relative  mx-auto " id="product-under-20">
			<div
				class="bg-black/50 py-2 px-1 rounded-t-xl"
			>
				<h3 class="font-bold text-orange-400 text-center md:text-left">
					Products under 20$
				</h3>
			</div>
			<div
				class="flex px-4 h-[40vh] md:grid overflow-y-hidden overflow-x-auto md:overflow-hidden border md:grid-cols-5 gap-4 w-max md:w-full  justify-around md:h-[60vh] pt-4 "
			>
				<div
					class="h-[30vh] w-[50vw] md:w-full"
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
				<h3 class="font-bold text-orange-400 text-center md:text-left">
					Users' favorites
				</h3>
			</div>
			<div
				class="flex px-4 h-[45vh] md:grid md:grid-cols-5 gap-2 md:w-full w-[40vh*5] overflow-x-auto md:overflow-x-hidden  justify-around grid-rows-1  pt-4 "
			>
				<transition-group tag="div" appear @before-enter="productBeforeEnter" @enter="productEnter"
					class="h-[90%]"
					:key="p"
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
				</transition-group >
			</div>
		</div>
		<newsletter/>
		<FooterView/>
		
	</div>
</template>

<script setup>
	import { useProductStore } from "../stores/store";
	import image1 from "~/assets/img/image1.png";
	import image2 from "~/assets/img/image2.png";
	import image3 from "~/assets/img/image2.png";
	import {gsap} from "gsap";
	import scrollTrigger from 'gsap/ScrollTrigger'

	const productStore = useProductStore();

	productStore.getProducts();
	gsap.registerPlugin(scrollTrigger)


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
	const productBeforeEnter = (el) => {
            el.style.opacity = 0
            el.style.transform = 'translateY(-10%)'
            
    }
	const productEnter = (el)=>{
		gsap.to(
                el, {
                    scrollTrigger: {
                        target: el,
                        toggleActions: "play reverse play none ",
                        start: "18% 10%",
                        end: "30% center",
                        // markers: true,
                    },
                    duration: 3,
                    y: 0,
                    opacity: 1,
                    ease: 'elastic',
                    delay: el.dataset.index * 0.5,
                }
            )
	}

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
