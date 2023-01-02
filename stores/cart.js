import {
	defineStore,
	acceptHMRUpdate,
} from "pinia";

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
			addProductToCart({ product, quantity }) {
				this.cart.push({product, quantity})
			},
            removeProductFromCart({ product, quantity }) {
                this.cart.delete({product, quantity})
            }
		},
	}
);
