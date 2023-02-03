<template>
	<div class="h-1/2 md:h-80 w-3/4 md:w-1/2  z-30 px-4  text-primary rounded-md bg-neutral relative overflow-x-hidden">
        <div class="h-full flex flex-col  justify-evenly pb-2">

            <div class="h-3/ z-30 basis-3/4 ">
    
                <div class="flex w-full pt-2  gap-4  border-b items-baseline" v-for="item in cart">
                    <p class="font-bold text-md md:text-xl basis-1/2">{{ item.title }}</p>
                    <p class=" basis-1/4 text-xs">{{" " + "$"+ item.price + " " }}</p>
                    <p class=" basis-1/4 text-sm">{{ item.quantity }}</p> 
                </div>
            </div>
            <div class="flex basis-1/4 w-full justify-between items-center pb-2 mt-4" v-if="cart.length>0">
                <button class="btn h-12">
                    Confirm payment
                </button>
    
                <p class="text-stone-700 text-sm md:text-2xl  w-max"> <span class="font-bold">Total</span> -{{"  "+"$"+ getTotal() }}</p>
            </div>
            <button class="btn" @click="clearCart()">
                clear cart
                    </button>
        </div>
    
	</div>
</template>

<script setup>
	import { useCartStore } from "~~/stores/cart.js";
	const store = useCartStore();
	// const { getTotal } = defineProps(["getTotal"]);
	const cart = computed(() => {
		return( store.cart)
	});
    const getTotal = () => {
		return store.totalPrice();
	};
    const clearCart = () => {
		return store.clearCart();
	};
</script>

<style lang="scss" scoped></style>
