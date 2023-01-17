<template>
    <TransitionGroup
    appear
				@before-enter="sellersBeforeEnter"
				@enter="sellersEnter"
                @leave="sellersLeave"
      tag="div" class="page">

        <div class="spinner" key="0"></div>

        <div class="text-box" key="1">
            <div class="text-change-box">
                <div class="change-box">

                    <p class="textChange">

                    </p>
                    <span class="caret">|</span>
                </div>

            </div>
        </div>
    </TransitionGroup>
</template>

<script setup>
import {gsap} from 'gsap'
import {TextPlugin} from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin)
let texts = [
				"Getting Store Items",
				"Getting you a cart",
				"At the cashier ",
			];
            const sellersBeforeEnter = ref('')
            const  sellersLeave = ref('')
			
onMounted(() => {
				// get element

               sellersBeforeEnter.value=(el)=>{
                    gsap.fromTo(el,{
                        opacity:0,
                        duration:3
                    },{
                        opacity:1,
                        
                    })
                }
               sellersLeave.value=(el)=>{
                    gsap.from(el,{
                        opacity:0,
                        y:'-100%',
                        duration:3
                    })
                }
                gsap.to('.caret',{
                    opacity:0,
                    repeat:-1
                })
				const masterTL = gsap.timeline({repeat:-1});
				texts.forEach((text) => {
					let tl = gsap.timeline({
						
						
					});
					tl.to(".textChange", {
                        duration: 3,
                            text: text,
                            yoyo:true,
                        repeat:1
                            
                         
					})
                   .to(".change-box", {
                        duration: 1,
                        y:'100%',
                        
                       
                        
                       
                    },  '>')
                    .to(".change-box", {
                        duration: 1,
                        y:'0',
                        
                        
                    }, '>')
					masterTL.add(tl);
				});
    
   })
 
            

  

</script>

<style lang="scss" scoped>
.page{
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    // display: flex;
    // align-items: center;
    // justify-content: center;
}
.text-box{
    overflow: hidden;
    position: absolute;
    bottom: 20%;
    left: 50%;
    translate: -50%;
    font-size: larger;
    // letter-spacing: 1rem;
    text-align: center;
}.change-box{
    display: inline-flex;
}
.spinner {
    
    translate: -50% -50% ;
 --size: 60px;
 --first-block-clr: gray;
 --second-block-clr: orange;
 --clr: #111;
 width: 100px;
 height: 100px;
 position: absolute;
 top: 50%;

left: 50%;
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