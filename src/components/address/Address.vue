<template >
    <section id="address" class="address">
        <h2 class="address__title">Адрес отдела продаж</h2>
        <div class="address__wrapper-info">
            <p class="address__location">160111, Республика  Узбекистан, 
                г. Ташкуент, ул. Миробод 10</p>
            <p class="address__number">+9 (890) 123 34 56 </p>
        </div>
        <iframe class="address__karta"  src="https://yandex.ru/map-widget/v1/?um=constructor%3A863dc85f0740ddf6166f7500ebb633849c76c81fe31924c63d2184176c334d54&amp;source=constructor"  frameborder="0"></iframe>  
        </section>
</template>
<script>
export default {
    
}
</script>
<style >


    canvas{
    background-size: auto;
}

    .address__karta{
        width: 100%;
        height: 500px;
    }

    .address{
        max-width: 1284px;
        margin: 89px auto 0 auto;
        padding: 0 15px 0 15px;
    }

    .address__title{
        font-weight: 400;
        font-size: 48px;
        line-height: 56px;
        color: #333333;
        margin: 0 0 101px 0;
        text-align: center
    }

    .address__wrapper-info{
        display: flex;
        align-items: center;
        position: relative;
        max-width: 800px;
        justify-content: space-between;
    }

    .address__location{
        font-weight: 400;
        font-size: 24px;
        line-height: 24px;
        color: #333333;
        max-width: 340px;
        margin-left: 60px;
    }

    .address__location::before{
        content: "";
        background: url("../../assets/img/locatsiya.svg") center no-repeat;
        display: block;
        transform: translateX(-50px);
        position: absolute;
        width: 32px;
        height: 47px;
    }

    .address__number{
        font-weight: 400;
        font-size: 24px;
        line-height: 24px;
        color: #333333;
        /* margin-left: 139px; */
    }

    .address__number::before{
        content: "";
        background: url("../../assets/img/tel.svg") center no-repeat;
        display: block;
        transform: translate(-50px, -10px);
        position: absolute;
        width: 32px;
        height: 47px;
    }

    @media screen and (max-width: 668px) {

         .address__location{
        font-weight: 400;
        font-size: 22px;
        line-height: 22px;
        color: #333333;
        max-width: 340px;
        margin-left: 60px;
    }
        
        /* .address__number{
        font-weight: 400;
        font-size: 20px;
        line-height: 20px;
        color: #333333;
    }  */

    .address__wrapper-info{
     flex-direction: column;
    }
    }

    


</style>