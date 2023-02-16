<template>
  <Carousel>
    <Slide v-for="card in testimonials" :key="card.id">
      <TestimonialsCard key="card.id" :testimonials_data="card" />
    </Slide>

    <template #addons>
      <Navigation class="v-nav" />
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import TestimonialsCard from "./TestimonialsCard.vue";
import axios from "axios";

export default defineComponent({
  name: "Basic",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    TestimonialsCard,
  },

  data() {
    return {
      testimonials: [],
      settings: {
        itemsToShow: 1,
        itemsToScroll: 1,
        wrapAround: true,
        snapAlign: "center",
      },
    };
  },

  beforeMount() {
    axios
      .get("https://bohdanalu.github.io/review.json")
      .then((response) => {
        this.testimonials = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
});
</script>

<style lang="scss">
@import "./../assets/styles/main.scss";

.carousel {
  position: relative;
  text-align: center;
  box-sizing: border-box;

  &__viewport {
    overflow: hidden;
  }
  .carousel__track {
    display: flex;
    margin: 0;
    padding: 0;
    position: relative;
  }

  &__slide {
    width: 100%;
    scroll-snap-stop: auto;
    flex-shrink: 0;
    margin: 0;
    position: relative;
    display: flex;
    gap: 0;
    justify-content: center;
    align-items: center;
    transform: translateZ(0);
    @include mediaMin(700px) {
      max-width: 1230px;
      width: 100%;
    }
  }

  .v-nav {
    display: none;
    @include mediaMin(992px) {
      display: block;
      top: 35%;
    }
  }

  .v-nav.carousel__prev {
    left: 0;
  }

  &__pagination {
    display: flex;
    justify-content: center;
    gap: 12px;
    list-style: none;
    line-height: 0;
    margin-top: 60px;
  }

  &__pagination-button {
    display: block;
    border: 0;
    margin: 0;
    cursor: pointer;
    width: 30px;
    height: 3px;
    background-color: $gray-300;
  }

  &__pagination-button:hover {
    background-color: $gray-800;
  }
  &__pagination-button {
    &--active {
      background-color: $gray-800;
    }
  }
}
</style>
