import {
	defineStore,
	acceptHMRUpdate,
} from "pinia";
import { useProductStore } from "./store";

const products =  useProductStore()

export const useCartStore = defineStore(
	"cartStore",
	{
		state: () => {
			return {
				// all these properties will have their type inferred automatically
				cart: [],
			};
		},

		actions: {
			addProductToCart( product, quantity ) {
				const cartItem=	{...product, quantity}
				const productInCart= this.cart.find(item => item.id === product.id)
				if (productInCart) {	
					productInCart.quantity ++
				}
				else {
                    this.cart.push(cartItem)}
				this.updateLocalStorage()
			},
            removeProductFromCart( product ) {
				
				this.cart = this.cart.filter((item)=>{
					return item.id !== product.id
				})

			this.updateLocalStorage();
            },
			updateLocalStorage() {
				localStorage.setItem('products-list', JSON.stringify(this.cart));
			  },
		  
			loadLocalStorage() {
				if (localStorage.getItem('products-list'))
				  this.cart = JSON.parse(localStorage.getItem('products-list'));
			  },
			totalProducts(){
				let quantityCart = this.cart.map(function(j) {
					return j.quantity;
				  })
			return quantityCart.reduce((a,b)=> a+b, 0)
				
			  },
			totalPrice(){
				let priceCart = this.cart.map(function(j) {
					return j.price*j.quantity;
				  })
			
			const totalPrice= priceCart.reduce((a,b)=> a+b, 0)
				  console.log( totalPrice);
				}
		},
	}
);
