<template>
	<div class="card" v-if="product !== null">
		<div class="grid grid-cols-2 gap-10">
			<div class="p-7">
				<img
					:src="product.image"
					alt="Product-image"
					class="mx-auto my-7"
				/>
			</div>
			<div class="p-7 flex-col">
				<div class="flex">
					<h2 class="text-4xl my-7" :class="product.title.length>40?'text-[1rem] font-bold leading-8':'' ">
						{{ product.title }}
					</h2>
					<vue3starRatings starColor="#Fb923C" v-model="product.rating.rate" starSize="16" :showControl="false" class="w-[80%] float-left"> </vue3starRatings>
				</div>
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
					@click="showCheckOut = true"
					v-if="cartItems.cart.length !== 0"
					class="btn mt-7 ml-2"
				>
					Checkout
				</button>
			</div>
		</div>
		<Teleport  to="body">
			<transition appear name="modal">

				<div
					v-if="showCheckOut"
					class="popup z-30"
					@click.self="showCheckOut = false"
				>
				<Transition name="checkout-box" appear>

					<Checkout/>

				</Transition>
				</div>
			</transition>
		</Teleport>
	</div>
	<p>Similar Products</p>
	<div class="max-h-[50vh]  mt-2 overflow-x-scroll overflow-y-hidden " id="similar-products">
		<div class="max-h-[45vh] h-[45vh]  w-full flex  gap-4 mt-4 justify-evenly overflow-x-scroll overflow-y-hidden" id="items">
			<div
						class="w-1/4 mt-4 h-[40vh] "
						v-for="p in category "
					>
						<ProductCards
							:product="p"
						></ProductCards>
					</div>
		</div>

	</div>
</template>

<script setup>
	import vue3starRatings from "vue3-star-ratings";
	import { useCartStore } from "~~/stores/cart.js";
	import { useProductStore } from "~~/stores/store";

	const { product } = defineProps(["product"]);
	const cartItems = useCartStore();
	const products = useProductStore();
	const showCheckOut = ref(false);
	products.getProducts()
	const pushToCart = () => {
		const quantity = ref(1);

		cartItems.addProductToCart(
			product,
			quantity.value
		);
	};
	const removeFromCart = () => {
		cartItems.removeProductFromCart(product);
	};
	const category = computed(() => {
		return( products.products.data.filter(
			(item) => {
				return(
					
				item.category == product.category  && item.title !== product.title)
			}
		))
	})
	const getTotal = () => {
		return cartItems.totalPrice();
	};
</script>

<style lang="scss" scoped>
	img {
		max-width: 400px;
	}
	.popup {
		position: fixed;
		top: 0%;
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgba(0, 0, 0, 0.6);
		backdrop-filter: blur(1rem);
		font-family: poppins;
		color: blue;
		overflow: hidden;
		position: fixed;
	}
	#similar-products::-webkit-scrollbar{
		width: 0px;
	}
	#items::-webkit-scrollbar{
		width: 0px;
    
	}
	.modal-enter-from{
		opacity: 0;
    
	}
.checkout-box-enter-from, .checkout-box-leave-from{
		translate: 0 100%;
    
	}
	.modal-leave-to{
        opacity: 0;	}
	
		.checkout-box-enter-active, .checkout-box-leave-active{
			transition: all 1s ;
		}
	.modal-enter-active, .modal-leave-active{
		transition: all 0.5s ease-in-out;
    }
	
</style>
