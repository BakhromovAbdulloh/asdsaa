<template>
    <div class="aboutСompany">
        <div class="aboutСompany__wrapper">

            <div class="aboutСompany__wrapper-img">
                <img class="aboutСompany__im-1" src="@/assets/img/Rectangle1.png" alt="">
                <img class="aboutСompany__im-2" src="@/assets/img/Rectangle2.png" alt="">
            </div>
                <div class="aboutСompany__img">
                    <img class="aboutСompany__im-3" src="@/assets/img/Rectangle3.png" alt="">
                </div>
        </div>
        <div class="aboutСompany__wrapper-text">
            <h2 class="aboutСompany__title">О компании</h2>
            <p class="aboutСompany__text">Разнообразный и богатый опыт говорит нам, что новая модель организационной деятельности играет определяющее значение для форм воздействия. Являясь всего лишь частью общей картины, интерактивные прототипы формируют глобальную экономическую сеть и при этом - подвергнуты целой серии независимых исследований. </p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .aboutСompany{
        display: flex;
        align-items: center;
        max-width: 1284px;
        margin: 122px auto 0 auto;
        padding: 0 10px 0 10px;
        background-size: cover;
    }

    .aboutСompany__wrapper{
        display: flex;
        background-size: cover;
    }

    .aboutСompany__wrapper-img{
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-right: 32px;
    }

    .aboutСompany__wrapper-text{
        display: flex;
        align-items: center;
        flex-direction: column;
        max-width: 435px;
        margin-left: 33px;
    }

    .aboutСompany__title{
        font-weight: 400;
        font-size: 64px;
        line-height: 64px;
        color: #333333;
        margin: 0 0 20px 0;
        text-align: left;
    }

    .aboutСompany__text{
        font-weight: 400;
        font-size: 16px;
        line-height: 25px;
        color: #000000;
        margin: 0;
        text-align: left;
    }

    .aboutСompany__im-1{
        width: 296px;
        height: 265px;
    }

    .aboutСompany__im-2{
        margin-top: 30px;
        width: 296px;
        height: 140px;
    }

    .aboutСompany__im-3{
        width: 296px;
        height: 345px;
    }

    @media screen  and (max-width: 991px){
        .aboutСompany__title{
            font-size: 48px;
            line-height: 56px;
            
        }
    }

    @media screen  and (max-width: 1004px){
        .aboutСompany__title{
        font-size: 45px;
        line-height: 21px;
            
        }
    }

    
    @media screen  and (max-width: 975px){
        .aboutСompany__text{
        font-size: 14px;
        line-height: 22px;
            
        }
    }

    @media screen  and (max-width: 910px){
        .aboutСompany__title{
            font-size: 40px;
            line-height: 50px;
            
        }
    }

    @media screen  and (max-width: 880px){
        .aboutСompany__title{
            font-size: 35px;
            line-height: 50px;
            
        }
    .aboutСompany__im-1{
        width: 250px;
        height: 225px;
    }

    .aboutСompany__im-2{
        margin-top: 30px;
        width: 250px;
        height: 140px;
    }

    .aboutСompany__im-3{
        width: 250px;
        height: 305px;
    }
    }

  

    @media screen  and (max-width: 811px){
        .aboutСompany__im-1{
        width: 210px;
        height: 195px;
    }

    .aboutСompany__im-2{
        margin-top: 30px;
        width: 210px;
        height: 110px;
    }

    .aboutСompany__im-3{
        width: 210px;
        height: 275px;
    }
    } 

    @media screen  and (max-width: 690px){
        .aboutСompany__im-1{
        width: 180px;
        height: 200px;
    }

    .aboutСompany__im-2{
        width: 180px;
        height: 200px;
        margin-top: 0;
        margin-left: 15px;
    }

    .aboutСompany__im-3{
        width: 180px;
        height: 200px;
    }

    .aboutСompany__wrapper-img{
        margin-right: 15px;
    }

    .aboutСompany__wrapper-text{
        margin-left: 0;
        max-width: 570px;
    }

    .aboutСompany{
        flex-direction:column-reverse;
    }

    .aboutСompany__wrapper-img{
        flex-direction: row;
    }

   

    .aboutСompany__text{
        text-align: center;
    }

    .aboutСompany__title{
            font-weight: 500;
            font-size: 45px;
            line-height: 50px;
            
        }

        .aboutСompany__wrapper{
            display: flex;
            align-items: center;
            flex-direction: row;
        }
    } 

   

    @media screen  and (max-width: 564px){
        .aboutСompany__im-1{
        width: 150px;
        height: 170px;
    }

    .aboutСompany__im-2{
        width: 150px;
        height: 170px;
        margin-top: 0;
        margin-left: 15px;
    }

    .aboutСompany__im-3{
        width: 150px;
        height: 170px;
    }

    .aboutСompany__wrapper-img{
        margin-right: 15px;
    }

    .aboutСompany__title{
            font-size: 36px;
            line-height: 43px;
            
        }

    }

    @media screen and (max-width: 484px) {
        .aboutСompany__im-1{
        width: 125px;
        height: 140px;
    }

    .aboutСompany__im-2{
        width: 125px;
        height: 140px;
        margin-top: 0;
        margin-left: 0;
    }

    .aboutСompany__im-3{
        width: 125px;
        height: 140px;
        }
        .aboutСompany__wrapper{
            margin: 25px 0 0 0 ;
        }

        .aboutСompany__wrapper-img{
            margin-right: 0;
        }
    }
</style>