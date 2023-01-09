<template>
<div>
    <header class="shadow-sm bg-white">
        <nav class="container mx-auto flex justify-between p-4">
            <NuxtLink to='/products' class="font-bold"> Ok shop Products </NuxtLink>
            <div class="cart">
                <i class="material-icons mr-2">
                    add_shopping_cart
                </i>

                <sup class="text-xl rounded-full bg-green w-2 h-2">{{cartStore.totalProducts()}}</sup>

            </div>

        </nav>
    </header>
</div>
<div class="container mx-auto p-4 mb-24">
    <slot></slot>
</div>
<footer class=" fixed bottom-0 bg-gray-100 p-4 w-full flex border-t-2 justify-between z-40">
    <ul class="flex gap-4">
        <li>
            <NuxtLink to='/'> home</NuxtLink>
        </li>
        <li>
            <NuxtLink to='/about'> about</NuxtLink>
        </li>
        <li>
            <NuxtLink to='/products'> Products</NuxtLink>
        </li>
    </ul>
    <div class="cart float-right">
                <i class="material-icons mr-2">
                    add_shopping_cart
                </i>

                <sup class="text-xl rounded-full bg-green w-2 h-2">{{cartStore.totalProducts()}}</sup>

            </div>
</footer>
</template>

<script setup>
import { useCartStore } from "~~/stores/cart";

const cartStore = useCartStore();

</script>

<style lang="scss" scoped>
li {
    list-style-type: none;
}

a {
    text-decoration: none;
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
