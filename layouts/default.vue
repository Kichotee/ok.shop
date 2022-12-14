<template>
    <div>
          <header>
            <nav>
            <NuxtLink to='/'> Ok shop </NuxtLink>

                <ul>
                    <li>
                        <NuxtLink to='/'> home</NuxtLink>
                        <NuxtLink to='/about'> about</NuxtLink>
                        <NuxtLink to='/products'> products</NuxtLink>
                        

                    </li>
                </ul>
            </nav>
        </header>
    </div>
    <div class="">
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
        color: aqua;
    }
</style>