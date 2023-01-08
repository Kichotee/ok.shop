<template>
	<div class="h-[30vh] bg-orange-400 ">
		<div id="newsletter h-full" class="h-full">
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
						<form class="h-[50%]" action="">
							<input
								type="email"
								class="w-[80%] px-2 bg-yellow-100 h-[90%] rounded-lg text-stone-900"
							/>
						</form>
					</div>
					<div class="justify-self-end text-sm leading-relaxed">
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
