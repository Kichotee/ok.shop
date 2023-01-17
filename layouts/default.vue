<template>
	<pageLoader v-if="isLoading"/>
	<div class="h-max" v-else>

		<div id="body-items" class="h-max">
			<header
				class="shadow-lg bg-white fixed z-20 w-full h-[8%] top-0 md:h-[10%] "
				
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
						class="md:hidden justify-self-center"
						@click="activeMenu = true"
					>
						<i class="material-icons-outlined">
							
							<font-awesome-icon icon="fa-solid fa-bars " class="text-orange-400 " />
						</i>
	
					</div>
	
				</nav>
			</header>
		</div>
		<div
			class="absolute h-[30vh] left-0 top-1 bg-white items-center justify-center flex w-screen z-50  md:hidden"
			v-if="activeMenu" @click.self="activeMenu= false"
		>
			<ul class="flex flex-col h-[80%] justify-center  items-center  gap-6 relative w-full">
				<p class='w-2 absolute h-2 z-20 top-4 right-8 ' @click="activeMenu=false">
					<font-awesome-icon icon="fa-close"/>	
				</p>
	
				<li>
					<NuxtLink to='/'> home</NuxtLink>
				</li>
				<li>
					<!-- <NuxtLink to='/about'> about</NuxtLink> -->
				</li> 
				<li>
					<NuxtLink to='/products' class="btn"> Products</NuxtLink>
				</li> 
			   
	
			</ul>
		</div>
		<div  class="bg-gray-100 ">
			<slot id="body-items" class="container"></slot>
		</div>
	</div>
</template>

<script setup>
import { useProductStore } from '~~/stores/store';
const productStore = useProductStore()

productStore.getProducts();

	const activeMenu = ref(false);
	const isLoading = ref(true);

	onMounted(()=>{
		setTimeout(()=>{
			isLoading.value=false
		},12000)
	})
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
