<template>
  <div class="courses-page">
    <section class="catalog">
      <div class="container">
        <h2 class="catalog__title title">Enjoy your studying!</h2>
        <h3 class="catalog__subtitle subtitle mb">Our online courses</h3>
        <div class="catalog__wrap-btn">
          <ul class="catalog__nav">
            <li class="catalog__item">
              <label class="catalog__label" for="all">17</label>
              <button class="catalog__btn" id="all">All</button>
            </li>
            <li class="catalog__item">
              <label class="catalog__label" for="all">4</label>
              <button class="catalog__btn">Marketing</button>
            </li>
            <li class="catalog__item">
              <label class="catalog__label" for="all">3</label>
              <button class="catalog__btn">Manadgment</button>
            </li>
            <li class="catalog__item">
              <label class="catalog__label" for="all">5</label>
              <button class="catalog__btn">HR & Recruting</button>
            </li>
            <li class="catalog__item">
              <label class="catalog__label" for="all">2</label>
              <button class="catalog__btn">Design</button>
            </li>
            <li class="catalog__item">
              <label class="catalog__label" for="all">3</label>
              <button class="catalog__btn">Development</button>
            </li>
          </ul>
          <input
            class="catalog__search"
            type="search"
            placeholder="Search course..."
          />
        </div>
        <div class="catalog__courses">
          <CardVue
            class="card--vertical"
            v-for="card in cards"
            :key="card.id"
            :catalog_data="card"
          />
        </div>
        <button class="catalog__load" @click="rr">Load More</button>
      </div>
    </section>

    <Testimonials />
    <Certificate />

    <Subscribe />
  </div>
</template>

<script>
import axios from "axios";
import Certificate from "../components/Certificate.vue";
import CardVue from "../components/Card.vue";
import Testimonials from "../components/Testimonials.vue";
import Subscribe from "../components/Subscribe.vue";
export default {
  components: {
    axios,
    CardVue,
    Testimonials,
    Certificate,
    Subscribe,
  },
  data() {
    return {
      cards: [],
    };
  },

  methods: {
    rr() {
      console.log(this.cards);
    },
  },

  mounted() {
    axios({
      method: "get",
      url: "https://bohdanalu.github.io/courses.json",
    })
      .then(function (response) {
        console.log(response.data);
        this.cards = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss">
@import "../assets/styles/main.scss";
.catalog {
  padding: 80px 0 40px;
  text-align: center;

  @include mediaMin(768px) {
    padding: 152px 0 120px;
  }

  @include landscape {
    padding: 60px 0 40px;
  }

  // .catalog__title

  &__title {
  }

  // .catalog__wrap-btn

  &__wrap-btn {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: baseline;
    margin-bottom: 30px;

    @include mediaMin(1200px) {
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 60px;
    }
  }

  // .catalog__nav

  &__nav {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  // .catalog__item

  &__item {
    position: relative;
    color: $gray-600;
    border: 1px solid transparent;

    &:hover {
      color: $primary;
      border: 1px solid $primary;
    }
  }

  &__label {
    display: inline-block;
    width: 12px;
    position: absolute;
    top: 2px;
    right: 0px;
    font-size: 10px;
    font-weight: 900;

    @include mediaMin(768px) {
      top: 9px;
      right: 6px;
    }
  }

  // .catalog__btn

  &__btn {
    padding: 5px 10px;
    background: transparent;
    border-color: transparent;
    color: inherit;
    border-radius: 4px;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.6;

    @include mediaMin(768px) {
      padding: 10px 20px;
    }
  }

  // .catalog__courses

  &__search {
    width: 100%;
    max-width: 315px;
    padding: 12px 16px;
    border: 1px solid $gray-300;
    border-radius: 4px;
    &:hover {
      border-color: $primary;
    }
  }

  // .catalog__card

  &__courses {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;
    gap: 30px;

    @include mediaMin(768px) {
      margin-bottom: 60px;
    }
  }

  // .catalog__load

  &__load {
    padding-left: 32px;
    background-color: transparent;
    border-color: transparent;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.6;
    color: $gray-800;
    background-image: url(../assets/images/icons/arrow-convert.svg);
    background-repeat: no-repeat;
    background-position: left center;
    background-size: contain;
    &:hover {
      @extend %filter-primary;
    }
  }
}
</style>
