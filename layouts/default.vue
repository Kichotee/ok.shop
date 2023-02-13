<template>
	<pageLoader
		v-if="
			productStore.products.data == null ||
			isLoading
		"
	/>
	<div class="h-max" >
		<div id="body-items" class="h-max">
			<header
				class=" bg-[#fff] fixed z-20 w-full h-[8%] top-0 md:h-[12%]"
			>
				<nav
					class="container mx-auto px-2 py-2 h-full grid grid-cols-7 justify-between items-center"
				>
					<NuxtLink
						to="/"
						class="font-bold basis-[20%]  md:col-span-1 col-span-2"
					>
						Ok shop
					</NuxtLink>
					<ul
						
						class="justify-evenly relative  md:col-span-3 w-full font-bold hidden md:flex"
					>
						<li>
							<NuxtLink to="/"> Home</NuxtLink>
						</li>

						<li>
							<NuxtLink
								to="/products"
								class="font-bold"
							>
								Shop
								</NuxtLink>
						</li>

						
							<li
								@click="toggleDropdown"
								to="/products"
								class="cursor-pointer"
							>
								<DropList v-if="dropdown==true" :products="productStore.products.data"></DropList>
								Products
								<font-awesome-icon icon="fa-solids fa-caret-down" />
								<span></span>
								</li>
					
						<li>
							<NuxtLink
								to="/products"
								class=""
							>
								Contact
								</NuxtLink>
						</li>
					</ul>
					<div class="col-span-4   w-full  md:col-span-3 md:justify-end flex gap-4" >
						<Search
							class="h-full  md:flex pt-2 md:pt-0"
						></Search>
						
						<div class="w-16 hidden md:flex h-full   items-center ">
							<font-awesome-icon class="text-primary " icon="fa-solids fa-cart-plus" />
							<font-awesome-icon class="text-primary ml-4" icon="fa-solids fa-heart " >
							
							</font-awesome-icon>
							<sup class="text-sm ml-1  z-50  " >{{favourites.totalLikedProducts()}}</sup>
	
							



				</div>
						
                
					</div>
					<div
						class="md:hidden justify-self-end mr-2 col-span-1 "
						@click="activeMenu = true"
					>
						<i class="material-icons-outlined">
							<font-awesome-icon
								icon="fa-solid fa-bars "
								class="text-primary text-3xl"
							/>
						</i>
					</div>
				</nav>
			</header>
		</div>
		<div
			class="absolute h-[30vh] left-0 top-1 bg-neutral items-center justify-center flex w-screen z-50 md:hidden"
			v-if="activeMenu"
			@click.self="activeMenu = false"
		>
			<ul
				class="flex flex-col h-[80%] justify-center items-center gap-6 relative w-full"
			>
				<p
					class="w-2 absolute h-2 z-20 top-4 right-8"
					@click="activeMenu = false"
				>
					<font-awesome-icon icon="fa-solids fa-close" />
				</p>

				<li>
					<NuxtLink to="/"> home</NuxtLink>
				</li>
				<li>
					<!-- <NuxtLink to='/about'> about</NuxtLink> -->
				</li>
				<li>
					<NuxtLink to="/products" class="btn">
						Products</NuxtLink
					>
				</li>
			</ul>
		</div>
		<div class="">
			<slot
				id="body-items"
				class=""
			></slot>
		</div>
	</div>
	<div class="h-screen" v-if="productStore.products.error"></div>
</template>

<script setup>
	import { useProductStore } from "~~/stores/store";
	import {useFavouriteStore} from  "~~/stores/favourites";	
	const productStore = useProductStore();


	const activeMenu = ref(false);
	const isLoading = ref(true);
	let favourites=computed(()=>{
	return useFavouriteStore()
})


	onMounted(() => {
		productStore.getProducts();
		setTimeout(() => {
			isLoading.value = false;
		}, 12000);
	});
	
	const dropdown = ref(false)
	const toggleDropdown = ()=>{
		dropdown.value=!dropdown.value
	}

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
	#body-items::-webkit-scrollbar {
		width: 0;
	}
</style>
