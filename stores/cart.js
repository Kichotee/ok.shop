import {
	defineStore,
	acceptHMRUpdate,
} from "pinia";
import { useProductStore } from "./store";




export const useCartStore = defineStore(
	"cartStore",
	{
		state: () => {
			return {
				// all these properties will have their type inferred automatically
				cart:  [],
			};
		},
// add  product to cart or increase quantity of product

		actions: {
			addProductToCart( product, quantity ) {
// destructure all product properties in cartItem 
				const cartItem=	{...product, quantity}
				
// find products in cart 
				const productInCart= this.cart.find(item => item.id === product.id)
// increment quantity if Found else add product to cart
				if (productInCart) {	
					productInCart.quantity ++
				}
				else {
                    this.cart.push(cartItem)}
				
			},
// remove existing product from cart or reduce quantity of product

			removeProductFromCart( product, quantity ) {
				const cartItem=	{...product, quantity}
				const productInCart= this.cart.find(item => item.id === product.id)
				if (productInCart || productInCart.quantity > 1) {	
					productInCart.quantity --
				}
				else {
                    this.cart.splice(this.cart.indexOf(cartItem), 1)
				}
				
			},
			// clear cart functionality
            clearCart(  ) {
				
				this.cart = []

			
            },
// calculate number of product in cart
			  totalProducts(){
				  let quantityCart = this.cart.map(function(j) {
					  return j.quantity;
					})
					return quantityCart.reduce((a,b)=> a+b, 0)
					
				},
// calculate price of product in cart
				totalPrice(){
				let priceCart = this.cart.map(function(j) {
					return j.price*j.quantity;
				  })
			
			const totalPrice= priceCart.reduce((a,b)=> a+b, 0)
				 return (totalPrice)
				}
		},
		persist: 	true,
	}
);
if (import.meta.hot) {
	import.meta.hot.accept(
		acceptHMRUpdate(
			useProductStore,
			import.meta.hot
		)
	);
}