import {
    defineStore,
    acceptHMRUpdate,
} from "pinia";
import { useProductStore } from "./store";

export const useFavouriteStore = defineStore('favouriteStore', {
    state: () => {
        return {
            favourites: []
        }
    },
    actions: {

        likedProducts(product, quantity) {
            // destructure all product properties in cartItem 
            const likedItem = { ...product, quantity }

            // find products in cart 
            const productInFavourites = this.favourites.find(item => item.id === product.id)
            // increment quantity if Found else add product to cart
            if (productInFavourites) {
                productInFavourites.quantity++
            }
            else {
                this.favourites.push(likedItem)
            }


        },
        totalLikedProducts() {
            let quantityLiked = this.favourites.map((i) => {
                return i.quantity
            })
            return quantityLiked.reduce((a,b)=>a+b,0)
        }
    },
    persist: true,
})

