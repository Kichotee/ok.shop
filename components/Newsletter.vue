<template>
	<div class="md:h-[30vh] h-[10vh] bg-[#F6A152]">
		<p class="text-center pt-4 md:hidden">
			<a href="#product-under-20 ">
				Back to Products
			</a>
		</p>
		<div
			id="newsletter h-full"
			class="h-full hidden md:block"
		>
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
					<div
						class="col-span-2 w-full h-full flex flex-col gap-2 text-center pb-4 tracking-wide"
					>
						<label
							for="email"
							class="text-sm font-bold"
							>Get incredible offers in your
							inbox</label
						>
						<form class="md:h-[50%]" action="">
							<input
								type="email"
								class="w-[80%] px-2 h-[90%] rounded-lg text-stone-900"
							/>
						</form>
					</div>
					<div
						class="justify-self-end md:text-sm gap-2 text-xs h-full flex flex-col leading-relaxed"
					>
						<p class="text-sm font-bold">
							Download the OK Shop App for free to
							enjoy more offers
						</p>
						<div class="flex gap-2">



							<div
								class="btn w-max px-2 whitespace-nowrap text-xs rounded-lg"
							>
								<span>
									<font-awesome-icon
										class="text-primary"
										icon="fa-brands fa-google-play "
									/>
								</span>
								Get on play store
							</div>
							<div
								class="btn w-max px-2 whitespace-nowrap text-xs rounded-lg"
							>
								<span>
									<font-awesome-icon
										class="text-primary"
										icon="fa-brands fa-google-play "
									/>
								</span>
								Get on play store
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
