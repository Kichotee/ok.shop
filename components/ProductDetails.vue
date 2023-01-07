<template>
	<div class="card">
		<div class="grid grid-cols-2 gap-10">
			<div class="p-7">
				<img
					:src="product.image"
					alt="Product-image"
					class="mx-auto my-7"
				/>
			</div>
			<div class="p-7">
				<h2 class="text-4xl my-7">
					{{ product.title }}
				</h2>
				<p class="text-xl my-7">
					Price - ${{ product.price }}
				</p>
				<h3
					class="font-bold border-b-2 mb-4 pb-2"
				>
					Product description:
				</h3>
				<p class="mb-2">
					{{ product.description }}
				</p>
				<button
					@click="pushToCart"
					class="btn mt-7"
				>
					<i class="material-icons mr-2">
						add_shopping_cart
					</i>
					<span>Add to cart</span>
				</button>
				<button
					@click="removeFromCart"
					v-if="cartItems.cart.length !== 0"
					class="btn mt-7 ml-2"
				>
					remove fom cart
				</button>
				<button
					@click.prevent="getTotal"
					v-if="cartItems.cart.length !== 0"
					class="btn mt-7 ml-2"
				>
					Checkout
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { useCartStore } from "~~/stores/cart.js";

	const { product } = defineProps(["product"]);
	const cartItems = useCartStore();

	const pushToCart = () => {
		const quantity = ref(1);

		cartItems.addProductToCart(
			product,
			quantity.value
		);
	};
	const removeFromCart = () => {
		cartItems.removeProductFromCart(product);
		console.log("deleted");
	};
    const getTotal=()=>{
        cartItems.totalPrice()
    }
</script>

<style lang="scss" scoped>
	img {
		max-width: 400px;
	}
</style>
