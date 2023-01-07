import {
	defineStore,
	acceptHMRUpdate,
} from "pinia";

export const useProductStore = defineStore(
	"productStore",
	{
		state: () => {
			return {
				// all these properties will have their type inferred automatically
				products: [],
			};
		},

		actions: {
			async getProducts() {
				this.products = await useFetch(
					"https://fakestoreapi.com/products/"
				);
			},
			addToCart() {
				
			}
		},
	}
);


// Vite HMR
if (import.meta.hot) {
	import.meta.hot.accept(
		acceptHMRUpdate(
			useProductStore,
			import.meta.hot
		)
	);
}
