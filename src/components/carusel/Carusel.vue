<template>
  <Header />
  <carousel :wrap-around="true" :items-to-show="1">
    <slide :key="1">
      <Info />
    </slide>

    <slide :key="2">
      <Info />
    </slide>

    <slide :key="3">
      <Info />
    </slide>

    <template #addons>
      <div class="carousel-navigatsion">
        <pagination />
      </div>
    </template>
  </carousel>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import Info from "../info/Info.vue";
import Header from "../header/header.vue";
import Container from "../container/Container.vue";

export default {
  name: "App",
  components: {
    Header,
    Carousel,
    Slide,
    Pagination,
    Navigation,
    Info,
    Container,
  },
};
</script>
<style></style>
