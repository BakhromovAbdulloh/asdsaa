
<template>
    <header>
        <div class="header">
            <img class="header__logo" src="@/assets/img/logo-Super.svg" alt="">
            <button @click="style = !style"  class="header__burger">
            <span class="header__burger-inner"></span>
            <span class="visually-hidden"></span>
          </button>
                <HeaderNav class="header__wrapper-nav" v-bind:class="[ style ? navStyle : null]"/>
            </div>
    </header>
</template>

<script>
import HeaderNav from "../header-nav/header-nav.vue"
export default{

    data() {
        return { 
            style: false,
            navStyle: "header__nav--opened"
        }
    },

    components: {
        HeaderNav,
     }
}
</script>
<style>

.header{
    position: relative;
    z-index: 30;
    display: flex;
    align-items: center;
    max-width: 1284px;
    margin: 0 auto;
    
}
.header__burger{
    display: none;
    background: none;
    border: none;
}

.header__logo{
    padding-left: 15px;
}

@media screen and (max-width: 726px) {

    .header__wrapper-nav{
        display: none;
    }

    .header__nav--opened{
        position: absolute;
        left: 0;
        top: 0;
        z-index: 0;
        display: block;
        height: 670px;
        width: 50%;
    }
 
    .header__burger{
        padding: 0 15px 0 0;
        display: block;
        margin: 0 0 0 auto;

       
    }
        .header__burger-inner,
        .header__burger::after,
        .header__burger::before{
            content: '';
            display: block;
            width: 16px;
            height: 3px;
            background:  #000;
            border-radius: 1.5px;
           
        }
        .header__burger-inner{
            margin: 3px 0;
        }

        .header__nav--opened .header__burger::after{
            display: none;
        }

        .header__nav--opened .header__burger::before {
            transform: rotate(45deg);
        }

        .header__nav--opened .header__burger::before {
            transform: rotate(-45deg);
        }
}
</style>