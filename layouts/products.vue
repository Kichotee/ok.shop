<template>
<div>
    <header class="shadow-sm bg-neutral">
        <nav class="container mx-auto flex justify-between p-4">
            <NuxtLink to='/products' class="font-bold"> Ok shop Products </NuxtLink>
            <div class="cart" @click="showCheckOut=true">
                <i class="material-icons mr-2">
                    add_shopping_cart
                </i>

                <sup class="text-xl rounded-full bg-green w-2 h-2">{{cartStore.totalProducts()}}</sup>

            </div>

        </nav>
    </header>
</div>
<Teleport   to="body">
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
<div class="container mx-auto p-4 mb-24">
    <slot></slot>
</div>
<footer class=" fixed bottom-0 bg-neutral p-4 w-full flex drop-shadow-sm justify-between z-40">
    <ul class="flex gap-4">
        <li>
            <NuxtLink to='/'> home</NuxtLink>
        </li>
        
        <li>
            <NuxtLink to='/products'> Products</NuxtLink>
        </li>
    </ul>
    <div class="cart float-right" @click="showCheckOut=!showCheckOut">
                <i class="material-icons mr-2" >
                    add_shopping_cart
                </i>
                

                <sup class="text-xl rounded-full bg-green w-2 h-2">{{cartStore.totalProducts()}}</sup>

            </div>
</footer>
</template>

<script setup>
import { useCartStore } from "~~/stores/cart";

let cartStore = computed(()=>{
	return useCartStore()
})




const showCheckOut=ref(false)

</script>

<style lang="scss" scoped>
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
		overflow: hidden;
		position: fixed;
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
li {
    list-style-type: none;
}

a {
    text-decoration: none;
}
.cart{
	cursor:pointer
}

.router-link-active {
    color: #FB923C;
}

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
