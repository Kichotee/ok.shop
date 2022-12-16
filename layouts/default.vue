<template>
    <div>
          <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between ">
            <NuxtLink to='/' class="font-bold"> Ok shop </NuxtLink>

                <ul class="flex gap-4">
                    <li>
                        <NuxtLink to='/'> home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to='/about'> about</NuxtLink>
                    </li> 
                    <li>
                        <NuxtLink to='/products' class="btn"> Products</NuxtLink>
                    </li> 

                    
                </ul>
            </nav>
        </header>
    </div>
    <div class="container mx-auto p-4">
        <slot></slot>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
li{
    list-style-type: none;
}
a{
    text-decoration: none;
}
    .router-link-active{
        color: green;
    }
</style>