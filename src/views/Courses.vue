<template>
  <div class="courses-page">
    <section class="catalog">
      <div class="container">
        <h2 class="catalog__title title">Enjoy your studying!</h2>
        <h3 class="catalog__subtitle subtitle mb">Our online courses</h3>
        <div class="catalog__wrap-btn">
          <ul class="catalog__nav">
            <li class="catalog__item _active">
              <span class="catalog__label">17</span>
              <button class="catalog__btn" @click="filterCards($event)">
                All
              </button>
            </li>
            <li class="catalog__item">
              <span class="catalog__label">4</span>
              <button class="catalog__btn" @click="filterCards($event)">
                Marketing
              </button>
            </li>
            <li class="catalog__item">
              <span class="catalog__label">3</span>
              <button class="catalog__btn" @click="filterCards($event)">
                Management
              </button>
            </li>
            <li class="catalog__item">
              <span class="catalog__label">5</span>
              <button class="catalog__btn" @click="filterCards($event)">
                HR & Recruting
              </button>
            </li>
            <li class="catalog__item">
              <label class="catalog__label">2</label>
              <button class="catalog__btn" @click="filterCards($event)">
                Design
              </button>
            </li>
            <li class="catalog__item">
              <label class="catalog__label">3</label>
              <button class="catalog__btn" @click="filterCards($event)">
                Development
              </button>
            </li>
          </ul>
          <div class="search-wrap">
            <input
              class="catalog__search"
              type="search"
              placeholder="Search course..."
            />
            <button class="btn-search" type="submit"></button>
          </div>
        </div>
        <div class="catalog__courses">
          <CardVue
            class="card--vertical"
            v-for="card in filteredCards"
            :key="card.id"
            :catalog_data="card"
          />
        </div>
        <button class="catalog__load">Load More</button>
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
      filteredCards: [],
    };
  },

  methods: {
    filterCards(el) {
      console.log(el.target.parentElement);
      const listItems = document.querySelectorAll(".catalog__item");
      const value = el.target.textContent.trim();
      for (const btn of listItems) {
        btn.classList.remove("_active");
      }
      el.target.parentElement.classList.add("_active");
      if (value == "Marketing") {
        return (this.filteredCards = this.cards.filter(
          (el) => el.badge == "Marketing"
        ));
      }
      if (value == "Management") {
        return (this.filteredCards = this.cards.filter(
          (el) => el.badge == "Management"
        ));
      }
      if (value == "HR & Recruting") {
        return (this.filteredCards = this.cards.filter(
          (el) => el.badge == "HR & Recruting"
        ));
      }
      if (value == "Design") {
        return (this.filteredCards = this.cards.filter(
          (el) => el.badge == "Design"
        ));
      }
      if (value == "Development") {
        return (this.filteredCards = this.cards.filter(
          (el) => el.badge == "Development"
        ));
      }
      if (value == "All") {
        return (this.filteredCards = this.cards);
      }
    },
  },

  beforeMount() {
    axios
      .get("https://bohdanalu.github.io/courses.json")
      .then((response) => {
        this.cards = response.data;
        this.filteredCards = this.cards;
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

    &._active {
      color: $primary;
      border: 1px solid $primary;
    }

    &:hover {
      color: $gray-800;
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
    border: 1px solid transparent;
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

.card {
  text-align: left;
}
</style>
