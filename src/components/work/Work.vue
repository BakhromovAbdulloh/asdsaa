<template>
  <section id="work" class="work">
    <h2 class="work__title">Наши работы</h2>

    <div class="work__wrapper-nav">
      <nav class="work__nav">
        <ol class="work__nav-item">
          <li
            v-for="categorie in categories"
            :key="categorie.value"
            @click="() => selectByCategories(categorie.value)"
            class="work__nav-item-list"
          >
            <p class="work__list-item-text">{{ categorie.name }}</p>
          </li>
        </ol>
      </nav>
    </div>

    <div class="work__wrapper">
      <ul class="work__item">
        <WorkImg v-for="option in filteredCategory" :option="option" />
      </ul>
    </div>
  </section>
</template>
<script>
import WorkImg from "../work-img/Work-img.vue";
import Img1 from "../../assets/img/valnaKaropka.png";
import Img2 from "../../assets/img/kishkinaKaropka.png";
import Img3 from "../../assets/img/karopka2.png";
import Img4 from "../../assets/img/karopka4.png";
import Img5 from "../../assets/img/karopka9.png";
import Img6 from "../../assets/img/kota2taKaropka.png";

export default {
  data() {
    return {
      activeCategory: "Все",
      options: [
        { img: Img1, category: "Упаковочный" },
        { img: Img2, category: "Упаковочный" },
        { img: Img3, category: "Олиграфический" },
        { img: Img4, category: "Дизайнерский" },
        { img: Img5, category: "Гофрокартон" },
        { img: Img6, category: "Упаковочный" },
      ],
      categories: [
        { name: "Все", value: "Все" },
        { name: "Упаковочный", value: "Упаковочный" },
        { name: "Олиграфический", value: "Олиграфический" },
        { name: "Дизайнерский", value: "Дизайнерский" },
        { name: "Гофрокартон", value: "Гофрокартон" },
      ],
      sortProducts: [],
      selected: "",
    };
  },
  computed: {
    filteredCategory() {
      return this.options.filter((option) =>
        this.activeCategory === "Все"
          ? true
          : option.category === this.activeCategory
      );
    },
  },

  methods: {
    selectByCategories(category) {
      this.activeCategory = category;
    },
  },

  components: { WorkImg },
};
</script>
<style>
.work {
  max-width: 1284px;
  margin: 102px auto 0 auto;
  padding: 0 15px 0 15px;
}

.work__title {
  font-weight: 400;
  font-size: 48px;
  line-height: 64px;
  color: #333333;
  margin: 0 0 71px 0;
}

.work__nav {
  margin: 0 auto;
}

.work__wrapper-nav {
  display: flex;
  align-items: center;
  margin: 0 auto;
}

.work__nav-item {
  display: flex;
  align-items: center;
  list-style: none;
  max-width: 844px;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
}

.work__list-item-text {
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  margin: 0;
}

.work__nav-item-list {
  color: #8c8c8c;
  cursor: pointer;
  margin: 0 36px 0 0;
}

.work__nav-item-list:nth-child(5) {
  margin-right: 0;
}

.work__nav-item-list:hover {
  color: #333333;
}

.work__nav-item-list:nth-child(1) {
  color: #333333;
}

.work__nav-item-list:hover:nth-child(1) {
  color: rgb(0, 0, 0);
}

.work__wrapper {
  margin-top: 96px;
}

.work__item {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0;
}

@media screen and (max-width: 1285px) {
  .work__item {
    justify-content: space-between;
  }
}

@media screen and (max-width: 880px) {
  .work__title {
    text-align: center;
  }
}

@media screen and (max-width: 845px) {
  .work__nav-item-list:nth-child(5) {
    margin-top: 20px;
  }
}
@media screen and (max-width: 705px) {
  .work__nav-item-list:nth-child(4) {
    margin-top: 0;
  }

  .work__nav-item-list:nth-child(5) {
    margin-top: 20px;
  }
}

@media screen and (max-width: 668px) {
  .work__nav-item-list:nth-child(4) {
    margin-top: 20px;
  }
}

@media screen and (max-width: 527px) {
  .work__wrapper {
    margin-top: 50px;
  }
  .work__nav-item {
    text-align: center;
  }
  .work__nav-item-list {
    text-align: center;
    margin: 0 auto;
  }
  .work__list-item-text {
    text-align: center;
    margin: 0 auto;
  }
  .work__nav-item-list:nth-child(4) {
    margin-top: 20px;
    margin-right: 0;
  }
  .work__nav-item-list:nth-child(3) {
    margin-top: 0;
  }
  .work__nav-item-list:nth-child(5) {
    margin-top: 20px;
    margin-right: 30px;
  }
}

@media screen and (max-width: 379px) {
  .work__nav-item-list:nth-child(1) {
    margin-right: 20px;
  }
  .work__nav-item-list:nth-child(2) {
    margin-left: 30px;
  }
  .work__nav-item-list:nth-child(3) {
    margin-top: 15px;
  }
  .work__nav-item-list:nth-child(4) {
    margin-top: 15px;
  }
  .work__nav-item-list:nth-child(5) {
    margin: 15px auto 0 auto;
  }
}
</style>
