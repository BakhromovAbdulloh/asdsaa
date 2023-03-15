<template>
  <div class="info">
    <div class="info__wrapper">
      <div class="info__text-wrapper">
        <p class="info__text">{{ name }}</p>
        <button @click="formInput = !formInput" class="info__button">
          <p class="info__button-text">Оставить заявку</p>
        </button>

        <form
          @submit="addName"
          class="info__form"
          v-if="formInput"
          @submit.prevent
        >
          <input
            class="info__form-input"
            type="text"
            name="text"
            :value="name"
          />
          <button class="info__from-input-button" type="submit">Add</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../header/header.vue";
export default {
  data() {
    return {
      formInput: false,
      name: "Производство коробок с наивысшим качеством",
    };
  },

  methods: {
    addName(e) {
      e.preventDefault();
      this.formInput = false;
      this.name = e.target.elements.text.value;
    },
  },

  components: {
    Header,
  },
};
</script>
<style>
.info {
  position: relative;
  z-index: 10;
  width: 100%;
  height: 720px;
  background: url(../../assets/img/karobka.png) no-repeat center;
  background-size: cover;
}

.info__wrapper {
  max-width: 1284px;
  margin: 0 auto;
}

.info__wrapper::before {
  content: "";
  display: block;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  z-index: 1;
}
.info__text-wrapper {
  position: relative;
  z-index: 10;
  text-align: start;
  margin-top: 300px;
  padding: 0 15px 0 15px;
}

.info__text {
  font-weight: 500;
  font-size: 48px;
  line-height: 59px;
  color: #ffffff;
  max-width: 500px;
  margin: 0 0 38px 0;
}
.info__button {
  background: #555555;
  border-radius: 6px;
  border: none;
  text-align: start;
}
.info__button-text {
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  margin: 14px 17px;
}

.info__form {
  position: absolute;
  top: 100px;
  right: 80px;
  background: linear-gradient(92.54deg, #232526 10.17%, #414345 99.75%);
  border: 1px solid #414042;
  border-radius: 15px;
  padding: 40px 20px 40px 20px;
  background-size: auto;
  display: flex;
  flex-direction: column;
}

.info__form-input {
  padding-left: 10px;
  height: 50px;
  width: 300px;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
}

.info__from-input-button {
  background: #c4c4c4;
  border-radius: 15px;
  padding: 10px;
  width: 150px;
  margin: 20px auto 0 auto;
}

@media screen and (max-width: 496px) {
  .info__text-wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
  }
  .info__text {
    text-align: center;
    display: flex;
    margin: 204px 0 38px 0;
    margin-left: auto;
    margin-right: auto;
  }
  .info__button {
    display: flex;
    margin: 0 auto;
  }

  .info__form {
    top: 400px;
  }
}
</style>
