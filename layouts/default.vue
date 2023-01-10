<template>
    <div class="h-max">
          <header class="shadow-lg bg-white fixed z-20 w-full h-[8%] top-0 ">
            <nav class="container mx-auto px-2 py-2 h-full grid grid-cols-4 justify-between items-center ">
            <NuxtLink to='/' class="font-bold basis-[20%]"> Ok shop </NuxtLink>
                <Search class="col-span-2 hidden md:block"></Search>
                <ul class=" justify-between w-full hidden md:flex">
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
                <div class="md:hidden col-span-3">

                    <font-awesome-icon class=" " icon="fa-brands fa-twitter" />
                </div>
                
            </nav>
        </header>
    </div>
    <div class=" bg-gray-100 ">
        <slot class="container"></slot>
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
        color: #FB923C;
    }
</style>