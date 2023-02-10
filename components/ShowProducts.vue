<template>
	<div
		class="h-max container  z-30 relative mx-auto "
		
		
	>
		<div class="flex w-full justify-between">
			<h3
				class="font-bold text-black text-center md:text-left"
			>
				{{ section }}
			</h3>
			<h4 class="underline">
				<NuxtLink to="/products">

					View all products
				</NuxtLink>
			</h4>
		</div>
		<transition-group
			v-if="show"
			tag="div"
			appear
			@before-enter="firstSlideBeforeEnter"
			@enter="firstSlideEnter"
			class="h-[55vh] overflow-x-scroll md:overflow-hidden md:grid-cols-5 md:grid md flex gap-4 md:w-full relative  whitespace-nowrap"
		>
			<span
				class="h-[90%] md:w-full mt-4"
				v-for="p in products"
				:key="p"
			>
				<ProductCards :product="p"></ProductCards>
			</span>

		</transition-group>
        <span class="h-8 w-8 flex items-center justify-center text-neutral  bg-primary absolute top-1/2 -right-10 z-50 rounded-full   ">
					<font-awesome-icon icon="fa-solids text-lg fa-arrow-right" class=" " />
            
        </span>
	</div>
</template>

<script setup>
	import { gsap } from "gsap";
	import scrollTrigger from "gsap/ScrollTrigger";
	const { products, show, section } = defineProps(["products", "show", "section"]);
	// const {  } = defineProps(["show"]);
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

</script>

<style lang="scss" scoped></style>
