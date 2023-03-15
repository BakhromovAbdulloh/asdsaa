<template>
  <div class="wrapper">
    <nav class="header-nav">
      <ul class="header-nav__list">
        <li class="header-nav__list-item">
          <a class="header-nav__list-item-link" href="#aboutСompany">О нас</a>
        </li>
        <li class="header-nav__list-item">
          <a class="header-nav__list-item-link" href="#work">Наши работы</a>
        </li>
        <li class="header-nav__list-item">
          <a class="header-nav__list-item-link" href="#advantages"
            >Преимущества</a
          >
        </li>
        <li class="header-nav__list-item">
          <a class="header-nav__list-item-link" href="#address">Контакты</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>
<style>
.header-nav__list {
  display: flex;
}
.header-nav__list-item {
  list-style: none;
  margin-right: 30px;
}

.header-nav__list-item-link {
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
  text-decoration: none;
}

@media screen and (max-width: 726px) {
  .header-nav__list {
    position: absolute;
    flex-direction: column;
    background: linear-gradient(92.54deg, #232526 10.17%, #414345 99.75%);
    height: 100%;
    margin-top: 0;
    padding-top: 50px;
  }

  .header-nav__list-item {
    margin-bottom: 50px;
  }
}
</style>
