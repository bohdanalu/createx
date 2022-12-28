<template>
  <Carousel class="carousel" :settings="settings" :breakpoints="breakpoints">
    <Slide v-for="card in cards" :key="card.id" :catalog_data="card">
      <Card class="card--gorisontal" :key="card.id" :catalog_data="card" />
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination class="paggin" />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import Card from "./Card.vue";

export default defineComponent({
  name: "Breakpoints",
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
    Card,
  },
  data: () => ({
    cards: [
      {
        id: 1,
        img: "/src/assets/images/card/bell.png",
        badge: "Marketing",
        title: "The Ultimate Google Ads Training Course",
        price: 100,
        speacer: "Jerome Bell",
      },
      {
        id: 2,
        img: "/src/assets/images/card/mcKinny.png",
        badge: "Managment",
        title: "Prduct Management Fundamentals",
        price: 480,
        speacer: "Marvin McKinney",
      },
      {
        id: 3,
        img: "/src/assets/images/card/li.png",
        badge: "HR & Recruting",
        title: "HR  Management and Analytics",
        price: 200,
        speacer: "Leslie Alexander Li",
      },
      {
        id: 4,
        img: "/src/assets/images/card/watson.png",
        badge: "Marketing",
        title: "Brand Management & PR Communications",
        price: 530,
        speacer: "Kristin Watson",
      },
      {
        id: 5,
        img: "/src/assets/images/card/russell.png",
        badge: "Managment",
        title: "Business Development Management",
        price: 400,
        speacer: "Dianne Russell",
      },
      {
        id: 6,
        img: "/src/assets/images/card/hawkins.png",
        badge: "Design",
        title: "Graphic Design Basic",
        price: 500,
        speacer: "Guy Hawkins",
      },
    ],
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
      itemsToScroll: 1,
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 2,
        snapAlign: "start",
      },
    },
  }),
});
</script>

<style lang="scss">
@import "./../assets/styles/main.scss";
.carousel * {
  box-sizing: border-box;
}
.carousel {
  position: relative;
  text-align: center;
  box-sizing: border-box;

  &__viewport {
    overflow: hidden;
  }
  &__track {
    display: flex;
    margin: 0;
    padding: 0;
    position: relative;

    // gap: 0;

    // @include mediaMin(700px) {
    //   gap: 30px;
    // }
  }

  // &__sr-only {
  //   position: absolute;
  //   width: 1px;
  //   height: 1px;
  //   padding: 0;
  //   margin: -1px;
  //   overflow: hidden;
  //   clip: rect(0, 0, 0, 0);
  //   border: 0;
  // }

  &__slide {
    // width: 100%;
    scroll-snap-stop: auto;
    flex-shrink: 0;
    margin: 0;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateZ(0);

    // @include mediaMin(700px) {
    //   max-width: 600px;
    //   width: 100%;
    // }
  }

  &__prev,
  &__next {
    display: none;
    @include mediaMin(992px) {
      top: -125px;
      display: block;
      position: absolute;
      background-image: url(./../assets/images/icons/arrow-right.svg);
      border-radius: 50%;
      background-color: transparent;
      border: transparent;
      background-position: center;
      background-repeat: no-repeat;
      background-size: 24px;
      height: 48px;
      width: 48px;
      padding: 18.5px 15px;
      transition: background-color 0.2s ease;
    }

    &:hover {
      background-image: url("./../assets/images/icons/arrow-white-w.svg");
      background-color: $primary;
      transition: background-color 0.2s ease;
    }
  }

  &__prev {
    transform: rotate(180deg);
    right: 36px;
  }

  &__next {
    right: 0;
  }

  .paggin {
    @include mediaMin(992px) {
      display: none;
    }
  }

  &__icon {
    display: none;
  }

  .card--gorisontal {
    display: flex;
    flex-direction: column;
    @include mediaMin(768px) {
      display: flex;
      flex-direction: row;
    }
  }
}
</style>
