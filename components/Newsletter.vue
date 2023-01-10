<template>
	<div class="md:h-[30vh] h-[10vh] bg-orange-400 ">
		<p class="text-center pt-4">
			<a href="#product-under-20 ">

				Back to Products
			</a>
		</p>
		<div id="newsletter h-full" class="h-full hidden md:block">
			<div class="container mx-auto h-full">
				<div class="grid grid-cols-4 pt-4 h-full">
					<div class="self-start text-black">
						<NuxtLink
							to="/"
							class="font-bold text-2xl"
						>
							Ok shop
						</NuxtLink>
					</div>
					<div class="col-span-2 h-full pb-4 tracking-wide">
						<label for="email" class="text-sm "
							>Get incredible offers in your
							inbox</label
						>
						<form class="md:h-[50%] " action="">
							<input
								type="email"
								class="w-[80%] px-2 bg-yellow-100 h-[90%] rounded-lg text-stone-900"
							/>
						</form>
					</div>
					<div class="justify-self-end md:text-sm text-xs leading-relaxed">
						Stay in the loop and never miss a
						deal! Subscribe to our newsletter now
						and get the latest sales, discounts,
						and product launches delivered
						straight to your inbox. Click here to
						join the list.
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
