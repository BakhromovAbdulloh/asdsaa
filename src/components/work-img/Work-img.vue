<template>
  <li class="work__item-list">
    <img
      class="work__item-list-img"
      :key="option.img"
      :src="option.img"
      alt=""
    />
  </li>
</template>
<script>
export default {
  props: {
    option: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style>
.work__item-list {
  margin-right: 18px;
  list-style: none;
}

.work__item-list-img {
  width: 410px;
  height: 320px;
}

.work__item-list {
  margin-bottom: 40px;
}

@media screen and (max-width: 861px) {
  .work__item-list {
    margin: 0 auto;
    margin: 0 0 15px 0;
  }

  .work__item-list-img {
    width: 300px;
    height: 210px;
  }
}

@media screen and (max-width: 621px) {
  .work__item-list-img {
    width: 240px;
    height: 160px;
  }
}

@media screen and (max-width: 507px) {
  .work__item-list-img {
    width: 170px;
    height: 120px;
  }
}
</style>
