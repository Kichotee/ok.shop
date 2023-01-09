<template>
	<div class="h-80 w-1/2 z-30 px-4  text-orange-400 rounded-md bg-white relative overflow-x-hidden" @click="logcart">
        <div class="h-max flex flex-col justify-between">

            <div class="h-full z-30">
    
                <div class="flex w-full pt-2  gap-4  border-b items-baseline" v-for="item in cart">
                    <p class="font-bold text-xl basis-1/2">{{ item.title }}</p>
                    <p class=" basis-1/4">{{" " + "$"+ item.price + " " }}</p>
                    <p class=" basis-1/4">{{ item.quantity }}</p> 
                </div>
            </div>
            <div class="flex w-full justify-between pb-2 mt-4">
                <button class="btn">
                    Confirm payment
                </button>
    
                <p class="text-stone-700 text-2xl  w-max"> <span class="font-bold">Total</span> -{{"  "+"$"+ getTotal() }}</p>
            </div>
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
		return cartItems.totalPrice();
	};
</script>

<style lang="scss" scoped></style>
