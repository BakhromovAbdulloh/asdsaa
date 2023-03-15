<template>
    <section id="advantages" class="advantages">
        <h2 class="advantages__title">Наши преимущества</h2>
        <ul  class="advantages__list">
           <AdvantagesItem v-for="movie in movies" v-bind:movie="movie"/>
        </ul>
    </section>
</template>
<script>

import AdvantagesItem from "../advantages-item/Advantages-item.vue"
import Servis from "../../assets/img/servis.svg"
import Medal from "@/assets/img/medal.svg"
import Malatok from "@/assets/img/malatok.svg"
import Sertifikat from "@/assets/img/sertifikat.svg"
export default {
    
    data() {
        return {
            movies: [
                {
                    img: Medal,
                    name: "Качество",
                    text: "Интерактивные прототипы набирают популярность среди определенных слоев населения, а значит, должны быть обнародованы"
                },
                {
                    img: Servis,
                    name: "Сервис",
                    text: "Интерактивные прототипы набирают популярность среди определенных слоев населения, а значит, должны быть обнародованы"
                },
                {
                    img: Malatok,
                    name: "Прочность",
                    text: "Интерактивные прототипы набирают популярность среди определенных слоев населения, а значит, должны быть обнародованы"
                },
                {
                    img: Sertifikat,
                    name: "На рынке",
                    text: "Интерактивные прототипы набирают популярность среди определенных слоев населения, а значит, должны быть обнародованы"
                },
            ]
        };
    },
    components: { AdvantagesItem }
}
</script>
<style>
    .advantages{
        max-width: 1284px;
        margin: 120px auto 0 auto;
    }
    
    .advantages__title{
        text-align: center;
        font-weight: 400;
        font-size: 36px;
        line-height: 64px;
        color: #333333;
    }

    .advantages__list{
        margin-top: 48px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: 0;
        
    }
    
   
    @media screen and (max-width: 1280px) {
        .advantages__list{
            justify-content: space-between;
        }

        .advantages__list-item:nth-child(1) {
        margin-left: 28px;
         }

         .advantages__list-item:nth-child(4) {
        margin-top: 28px;
        margin-left: 28px;
         }
    }

 

    @media screen and (max-width: 713px) {
        .advantages__list{
            flex-direction: column;
            align-items: center;
        }


      
    }
</style>