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
					"https://fakestoreapi.com/products/?limit=30"
				);
			},
			cheaperProducts() {
				if (this.products.length!==0) {
					
					this.products.filter((product)=>{
						if (product.price > 0) {
                            return product;}
					})
				}
				
				
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
