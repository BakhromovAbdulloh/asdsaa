<template>
  <Carusel />
  <Work />
  <Advantages />
  <AboutСompany />
  <Address />
  <Footer />
</template>
<script>
// import Header from "../src/components/header/header.vue"
import AboutСompany from "./components/AboutСompany/AboutСompany.vue";
import Address from "./components/address/Address.vue";
import Advantages from "./components/advantages/Advantages.vue";
import Work from "./components/work/Work.vue";
import Footer from "./components/footer/Footer.vue";
import Info from "./components/info/Info.vue";
import Carusel from "./components/carusel/Carusel.vue";
export default {
  components: {
    // Header,
    Info,
    Work,
    Advantages,
    AboutСompany,
    Address,
    Footer,
    Carusel,
  },
};
</script>
<style></style>
