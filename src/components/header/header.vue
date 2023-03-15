<template>
  <header class="header">
    <div class="header__wrapper">
      <img class="header__logo" src="@/assets/img/logo-Super.svg" alt="" />
      <button
        @click="style = !style"
        class="header__burger"
        :class="[style ? buttonActiv : null]"
      >
        <span
          :class="[style ? buttonActiv : null]"
          class="header__burger-inner"
        ></span>
        <span class="visually-hidden"></span>
      </button>
      <HeaderNav
        class="header__wrapper-nav"
        :class="[style ? navStyle : null]"
      />
    </div>
  </header>
</template>

<script>
import Container from "../container/container.vue";
import HeaderNav from "../header-nav/header-nav.vue";
export default {
  data() {
    return {
      style: false,
      navStyle: "header__nav--opened",
      buttonActiv: "activ",
    };
  },

  components: {
    HeaderNav,
    Container,
  },
};
</script>
<style>
.header {
  max-width: 1284px;
  margin: 0 auto;
}
.header__wrapper {
  position: absolute;
  z-index: 10;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  max-width: 1284px;
  margin: 0 auto;
  padding-top: 20px;
}
.header__burger {
  display: none;
  background: none;
  border: none;
}

.header__logo {
  padding-left: 15px;
}

@media screen and (max-width: 726px) {
  .header__wrapper-nav {
    display: none;
  }

  .header__nav--opened {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
    display: block;
    height: 670px;
    width: 50%;
  }

  .header__burger {
    padding: 0 15px 0 0;
    display: block;
    margin: 0 0 0 auto;
  }
  .header__burger-inner,
  .header__burger::after,
  .header__burger::before {
    content: "";
    display: block;
    width: 20px;
    height: 3px;
    background: #000;
    border-radius: 1.5px;
    transition: 0.3s ease all;
  }
  .header__burger-inner {
    margin: 3px 0;
  }

  .header__burger-inner.activ {
    display: none;
  }

  .header__burger.activ::after {
    transform: translateY(-4px) rotate(45deg);
  }

  .header__burger.activ::before {
    transform: translateY(-50%) rotate(-45deg);
  }
}
</style>
