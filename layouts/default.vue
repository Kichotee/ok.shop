<template>
	<div id="body-items" class="h-max">
		<header
			class="shadow-lg bg-white fixed z-20 w-full h-[8%] top-0 md:h-[10%]"
            
		>
			<nav
				class="container mx-auto px-2 py-2 h-full grid grid-cols-4 justify-between items-center"
			>
				<NuxtLink
					to="/"
					class="font-bold basis-[20%]"
				>
					Ok shop
				</NuxtLink>
				<Search
					class="col-span-2 h-full md:flex pt-2 md:pt-0"
				></Search>
				<ul
					class="justify-evenly w-full hidden md:flex "
				>
					<li>
						<NuxtLink to="/"> home</NuxtLink>
					</li>
				
					<li>
						<NuxtLink to="/products" class="btn">
							Products</NuxtLink
						>
					</li>
				</ul>
				<div
					class="md:hidden pl-2"
					@click="activeMenu = !activeMenu"
				>
					<i class="material-icons-outlined">
						menu
					</i>
				</div>

			</nav>
		</header>
	</div>
    <div
        class="absolute h-[30vh] left-0 top-1 bg-white justify-between w-screen z-50  md:hidden"
        v-if="activeMenu" @click.self="activeMenu= false"
    >
        <ul class="flex flex-col h-[30vh] justify-around items-center gap-6">
            <p absolute right-4top-8> </p>
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
    </div>
	<div  class="bg-gray-100 ">
		<slot id="body-items" class="container"></slot>
	</div>
</template>

<script setup>
	const activeMenu = ref(false);
</script>

<style lang="scss" scoped>
	li {
		list-style-type: none;
	}
	a {
		text-decoration: none;
	}
	.router-link-active {
		color: #fb923c;
	}
    #body-items::-webkit-scrollbar{
        width: 0;
    }
</style>
