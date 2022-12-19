<template>
  <Carousel>
    <Slide v-for="card in testimonials" :key="card.id">
      <div class="carousel__item">
        <TestimonialsCard :key="card.id" :testimonials_data="card" />
      </div>
    </Slide>

    <template #addons>
      <Navigation class="" />
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import TestimonialsCard from "./TestimonialsCard.vue";

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
      testimonials: [
        {
          id: "t1",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.",
          img: "/src/assets/images/home_page/review.jpg",
          name: "Eleanor Pena",
          position: "Course",
        },
        {
          id: "t2",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.",
          img: "/src/assets/images/home_page/review.jpg",
          name: "Eleanor Pena",
          position: "Course",
        },
        {
          id: "t3",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.",
          img: "/src/assets/images/home_page/review.jpg",
          name: "Eleanor Pena",
          position: "Course",
        },
      ],
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
        itemsToScroll: 1,
        wrapAround: true,
      },
    };
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

  &__slide {
    max-width: 1230px;
    width: 100%;
    position: relative;
    margin: 0;
    transform: translateZ(0);
  }
  &__item {
    max-width: 1230px;
    width: 100%;
    display: flex;
    gap: 0;
    justify-content: center;
  }

  &__prev {
    left: 0;
    transform: rotate(180deg);
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

<style lang="scss">
@import "./../assets/styles/main.scss";

.carousel {
  button.carousel__prev,
  button.carousel__next {
    display: none;
    @include mediaMin(768px) {
      position: absolute;
      top: 35%;
    }
  }
}
</style>
