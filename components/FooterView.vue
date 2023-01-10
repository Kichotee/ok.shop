<template>
	<div class="h-[40vh] md:h-[80vh] bg-orange-500">
		<footer
			id="footer h-full"
			class="h-full"
		>

        <div class="md:grid grid-cols-5 h-[70%] container mx-auto hidden  ">
            <div class="col-start-1 ">
                <div class="h-[80%] flex flex-col gap-7 mt-4">
                    <h2 class="font-medium">
                        About
                    </h2>
                    <ul class="flex flex-col gap-5">
                        <li v-for="i in aboutData">
                        <p>{{ i }}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class=" col-start-2">
                <div class="h-[80%] flex flex-col gap-7 mt-4 ">
                    <h2 class="font-medium">
                        Help
                    </h2>
                    <ul class="flex flex-col gap-5">
                        <li v-for="i in helpData">
                        <p>{{ i }}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class=" col-start-3">
                <div class="h-[70%] flex flex-col gap-7 mt-4 ">
                    <h2 class="font-medium">
                        Help
                    </h2>
                    <ul class="flex flex-col gap-5">
                        <li v-for="i in resourcesData">
                        <p>{{ i }}</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="col-span-2  justify-self-end mt-4">
                <h2 class="font-medium">
                        Social Media
                    </h2>
                 <div class="flex justify-between w-full">
                    <font-awesome-icon icon="fa-brands fa-twitter " />
                    <font-awesome-icon icon="fa-brands fa-github " />
                    <font-awesome-icon icon="fa-brands fa-linkedin " />
                 </div>
                    
            </div>
           
        </div>
        <div class="flex flex-col  w-full md:grid md:grid-cols-5 container mx-auto h-[30%] pt-8">
            <div class="md:col-span-3 flex flex-col md:w-full  md:flex-row gap-48 ">
                <div class="font-bold text-2xl md:text-4xl text-yellow-100">
                    <h1>
                        OK.Shop
                    </h1>
                </div>
                <div class="address md:flex flex-col w-[40%] hidden">
                    <h2 class="font-bold text-xl">
                        Address
                    </h2>
                    <p>
                        San Francisco, CA
560 Bush St & 20th Ave, Apt
+1 555 333 44 22
                    </p>
                </div>
            </div>
            <div class="col-span-2 md:text-left text-center">
                <div class="font-bold text-xl  text-yellow-100">
                    <h1>
                        Payment
                    </h1>
                </div>
                <div class="address flex flex-col w-full md:w-[40%] text-xs  text-center">
                   <p>
                    Start a 14 Day Free Trial on any of our paid plans. No credit card required.
                   </p>          
                 </div>
            </div>
        </div>
    
    </footer>
	</div>
</template>

<script setup> 
    const aboutData=['Features','Templates', 'Integrations','Team']
    const helpData=['Support','Help Center', 'Contact us']
    const resourcesData=['Ebooks','Infographics', 'Tools','Videos','Podcasts']
</script>

<style lang="scss" scoped></style>
