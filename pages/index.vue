<template class="page">
    <div>
      
<h2 class="font-bold text-3xl">
    OK. <span class="text-green-300 text-4xl italic ">Shop</span> 
</h2>
<div class="h-[70vh] flex justify-center items-center">

    <swiper class="border h-full w-full"
        :modules="[Pagination,Navigation ]"
        :slides-per-view="3"
        :space-between="50"
        :navigation="true"
        pagination="true"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :grab-cursor="true"
      >
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        ...
      </swiper>
</div>
    </div>
</template>

<script setup>

import { Navigation, Pagination, Scrollbar, A11y, grabCursor } from 'swiper';
 import { Swiper, SwiperSlide } from 'swiper/vue';
 import 'swiper/css';
 import 'swiper/css/navigation';
  import 'swiper/css/pagination';

</script>

<style  scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>