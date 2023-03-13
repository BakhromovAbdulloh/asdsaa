<template >
    <div class="wrapper ">
        <nav class="header-nav">
            <ul class="header-nav__list">
                <li class="header-nav__list-tem">О нас</li>
                <li class="header-nav__list-tem">Наши работы</li>
                <li class="header-nav__list-tem">Преимущества</li>
                <li class="header-nav__list-tem">Контакты</li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
   
}
</script>
<style >
    .wrapper {
        margin-left: auto;
    }

    .header-nav__list{
        display: flex;
    }
    .header-nav__list-tem{
        list-style: none;
        margin-right: 30px;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        color: #FFFFFF;
    }   

    @media screen and (max-width: 726px) {
        .header-nav__list{
            position: absolute;
            flex-direction: column;
            background: linear-gradient(92.54deg, #232526 10.17%, #414345 99.75%);
            height: 100%;
            margin-top: 0;
            padding-top: 50px;
        }

        .header-nav__list-tem{
            margin-bottom: 50px;
        }
    }
</style>