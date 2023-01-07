<template>
    <div>
          <header class="shadow-sm bg-white">
            <nav class="container mx-auto px-4 py-2 flex justify-between ">
            <NuxtLink to='/' class="font-bold"> Ok shop </NuxtLink>
                <Search></Search>
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
    <div class="h-max   backdrop-blur-lg  mx-auto p-4">
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