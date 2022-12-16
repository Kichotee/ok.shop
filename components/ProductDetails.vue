<template>
    <div class="card">
        <div class="grid grid-cols-2 gap-10">
            <div class="p-7">
                <img :src="product.image" alt="Product-image" class="mx-auto my-7">
            </div>
            <div class="p-7">
                <h2 class="text-4xl my-7">
                    {{product.title}}
                </h2>
                <p class="text-xl my-7">
                    Price - ${{product.price}}
                </p>
                <h3 class="font-bold border-b-2 mb-4 pb-2">
                     Product description:
                </h3>
                <p  class="mb-2 ">
                    {{product.description}}
                </p>
                <button @click="Counter++" class="btn mt-7">
                    <i class="material-icons mr-2">
                        add_shopping_cart
                    </i>
                    <span>Add to cart</span>
                </button>
                <button v-if="Counter !== 0" class="btn mt-7 ml-2"> Checkout</button>
            </div>
        </div>
    </div>
</template>

<script setup>

const {product,}= defineProps(['product' ]);
const Counter = useCounter()


</script>

<style lang="scss" scoped>
    img{
        max-width: 400px  ;
    }
</style>