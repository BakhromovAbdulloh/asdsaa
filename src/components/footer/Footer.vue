<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <img class="footer__logo" src="@/assets/img/logo-Super.svg" alt="" />

      <nav class="footer__nav">
        <ul class="footer__nav-list">
          <li class="footer__nav-list-item">
            <a href="#info" class="footer__nav-list-item-link">
              <p class="footer__nav-list-item-text">Главная</p></a
            >
          </li>

          <li class="footer__nav-list-item">
            <a href="@work" class="footer__nav-list-item-link">
              <p class="footer__nav-list-item-text">Проекты</p></a
            >
          </li>

          <li class="footer__nav-list-item">
            <a href="#aboutСompany" class="footer__nav-list-item-link">
              <p class="footer__nav-list-item-text">О нас</p></a
            >
          </li>

          <li class="footer__nav-list-item">
            <a href="#advantages" class="footer__nav-list-item-link">
              <p class="footer__nav-list-item-text">Отзывы</p></a
            >
          </li>

          <li class="footer__nav-list-item">
            <a href="#address" class="footer__nav-list-item-link">
              <p class="footer__nav-list-item-text">Адрес</p></a
            >
          </li>
        </ul>
      </nav>

      <div class="footer__wrapper-contacts">
        <p class="footer__contacts">Контакты</p>
        <p class="footer__location">
          160111, Республика Узбекистан, г. Ташкуент, ул. Миробод 10
        </p>
        <p class="footer__number">+9 (890) 123 34 56</p>
        <p class="footer__gmail">goodbox@gmail.com</p>
      </div>
      <div class="footer__wrapper-social">
        <p class="footer__social-media">Социальные сети</p>
        <ul class="footer__social-media-list">
          <li class="footer__social-media-list-item">
            <a href="/"><img src="@/assets/img/facebook.svg" alt="" /></a>
          </li>

          <li class="footer__social-media-list-item">
            <a href="/"><img src="@/assets/img/twitter.svg" alt="" /></a>
          </li>

          <li class="footer__social-media-list-item">
            <a href="/"><img src="@/assets/img/Linked.svg" alt="" /></a>
          </li>

          <li class="footer__social-media-list-item">
            <a href="/"><img src="@/assets/img/pininterest.svg" alt="" /></a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style>
.footer {
  margin-top: 550px;
  background: #2c2c2c;
  padding-top: 58px;
  padding-bottom: 60px;
}

.footer__wrapper {
  display: flex;
  align-items: start;
  max-width: 1284px;
  margin: 0 auto;
  justify-content: space-between;
  padding: 0 15px 0 15px;
}

.footer__nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer__nav-list-item {
  margin-bottom: 15px;
}

.footer__nav-list-item-text {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  margin: 0;
}

.footer__nav-list-item-link {
  color: #ffffff;
  text-decoration: none;
}

.footer__contacts {
  color: #ffffff;
  margin: 0 0 24px 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  position: relative;
}

.footer__location {
  color: #ffffff;
  margin-bottom: 50px;
  max-width: 230px;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
}

.footer__location::before {
  content: "";
  position: absolute;
  display: block;
  background: url("../../assets/img/locatsiya-mini.svg") no-repeat center;
  width: 16px;
  height: 18px;
  transform: translate(-30px, 10px);
}

.footer__number {
  color: #ffffff;
  margin: 0 0 33px 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
}

.footer__number::before {
  content: "";
  position: absolute;
  display: block;
  background: url("../../assets/img/tel-mini.svg") no-repeat center;
  width: 16px;
  height: 16px;
  transform: translate(-30px, 0);
}

.footer__gmail {
  color: #ffffff;
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
}

.footer__gmail::before {
  content: "";
  position: absolute;
  display: block;
  background: url("../../assets/img/sms-mini.svg") no-repeat center;
  width: 16px;
  height: 11px;
  transform: translate(-30px, 5px);
}

.footer__social-media {
  margin: 0 0 26px 0;
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
}

.footer__social-media-list {
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer__social-media-list-item {
  margin-right: 40px;
}

@media screen and (max-width: 800px) {
  .footer__wrapper {
    flex-direction: column;
    text-align: center;
    margin: 0 auto;
  }

  .footer__nav {
    margin: 50px auto 0 auto;
  }

  .footer__nav-list {
    display: flex;
    align-items: center;
  }

  .footer__nav-list-item {
    margin-right: 25px;
  }

  .footer__logo {
    margin: 0 auto;
  }

  .footer__wrapper-contacts {
    margin: 50px auto 0 auto;
  }

  .footer__wrapper-social {
    margin: 50px auto 0 auto;
  }

  .footer__location {
    margin-bottom: 33px;
  }
}
</style>
