<template>
  <Carusel />
  <Work />
  <Advantages />
  <AboutСompany />
  <Address />
  <Footer />
</template>
<script>
import AboutСompany from "./components/AboutСompany/AboutСompany.vue";
import Address from "./components/address/Address.vue";
import Advantages from "./components/advantages/Advantages.vue";
import Work from "./components/work/Work.vue";
import Footer from "./components/footer/Footer.vue";
import Carusel from "./components/carusel/Carusel.vue";
export default {
  components: {
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
