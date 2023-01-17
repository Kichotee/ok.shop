<template>
    <TransitionGroup  tag="div" class="page">

        <div class="spinner" key="0"></div>

        <div class="text-box" key="1">
            <div class="text-change-box">

                <p class="textChange"></p>
            </div>
        </div>
    </TransitionGroup>
</template>

<script setup>
import {gsap} from 'gsap'
import TextPlugin from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin)
let texts = [
				"Getting products.",
				"Providing your cart",
				,
			];
			
onMounted(() => {
				// get element
				const masterTL = gsap.timeline({repeat:-1});
				
					let tl = gsap.timeline({
						
						
					});
                    
					tl.from(".textChange", {
                        duration: 1,
                        y:'-100%',
                      
                        delay:0.2
                       
                    })
                    .to(".textChange", {
                        duration: 2,
						text: texts[0], 
					})
                    .to(".textChange", {
                        duration: 1,
                        y:'-100%',
                      
                        delay:0.2
                       
                    })
                    .from(".textChange", {
                        duration: 4,
                        y:'-100%',
                      
                        delay:0.2
                       
                    })
                    .to(".textChange", {
                        duration: 6,
						text: texts[1], 
					})
                    .to(".textChange", {
                        duration: 1,
                        y:'-100%',
                      
                        delay:0.2
                       
                    }) 
                    .from(".textChange", {
                        duration: 1,
                        y:'-100%',
                      
                        delay:0.2
                       
                    })
                    .to(".textChange", {
                        duration: 2,
						text: texts[2], 
					})
                    .to(".textChange", {
                        duration: 1,
                        y:'-100%',
                      
                        delay:0.2
                       
                    })
					masterTL.add(tl);
				;
    
   })
 
            

  

</script>

<style lang="scss" scoped>
.page{
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.text-box{
    overflow: hidden;
    position: absolute;
    width: 20%;
    bottom: 20%;

    left: 50%;
    translate: -50%;
}
.textChange{
    background-color: blue;
}
.spinner {
    
    translate: 0 50% ;
 --size: 60px;
 --first-block-clr: gray;
 --second-block-clr: orange;
 --clr: #111;
 width: 100px;
 height: 100px;
 margin:  auto;
 
}

.spinner::after,.spinner::before {
 box-sizing: border-box;
 position: absolute;
 content: "";
 width: var(--size);
 height: var(--size);
 top: 50%;
 animation: up 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite;
 left: 50%;
 background: var(--first-block-clr);
}

.spinner::after {
 background: var(--second-block-clr);
 top: calc(50% - var(--size));
 left: calc(50% - var(--size));
 animation: down 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite;
}

@keyframes down {
 0%, 100% {
  transform: none;
 }

 25% {
  transform: translateX(100%);
 }

 50% {
  transform: translateX(100%) translateY(100%);
 }

 75% {
  transform: translateY(100%);
 }
}

@keyframes up {
 0%, 100% {
  transform: none;
 }

 25% {
  transform: translateX(-100%);
 }

 50% {
  transform: translateX(-100%) translateY(-100%);
 }

 75% {
  transform: translateY(-100%);
 }
}


</style>