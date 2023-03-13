<template>

    <li class="advantages__list-item">
            <img :src="movie.img" alt="">
            <h3 class="advantages__list-item-title">{{ movie.name }}</h3>
            <p class="advantages__list-item-text">{{movie.text}}</p>
        </li>

</template>
<script>
export default {
props: {
    movie: {
        type: Object,
        required: true  
    }
}
}
</script>
<style scoped>
 .advantages__list-item{
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 264px;
    background: #FFFFFF;
    padding: 40px 18px 34px 18px;
    margin-right: 28px;
    list-style: none;
    text-decoration: none;
}

.advantages__list-item:nth-child(4) {
    margin-right: 0;
}

.advantages__list-item-title{
    font-weight: 500;
    font-size: 36px;
    margin: 42px 0 28px 0;
    line-height: 42px;
    color: #222222;
}

.advantages__list-item-text{
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #4E4E4E;
}

@media screen and (max-width: 1280px) {

    .advantages__list-item:nth-child(1) {
    margin-left: 28px;
     }

     .advantages__list-item:nth-child(4) {
    margin-top: 28px;
    margin-left: 28px;
     }
}

@media screen and (max-width: 1013px) {

    .advantages__list-item:nth-child(3) {
    margin-left: 28px;
    margin-top: 28px;

     }

     .advantages__list-item:nth-child(4) {
    margin-top: 28px;
    margin-right: 28px;
     }
}

@media screen and (max-width: 713px) {

    .advantages__list-item{
        margin: 0 0 20px 0;
        align-items: center;
    }

    .advantages__list-item:nth-child(1) {
        margin: 0 0 20px 0;
     }

     .advantages__list-item:nth-child(3) {
        margin: 0 0 20px 0;
     }

     .advantages__list-item:nth-child(4) {
        margin: 0 ;
     }
    }
</style>