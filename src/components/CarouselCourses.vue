<template>
  <Carousel class="carousel" :settings="settings" :breakpoints="breakpoints">
    <Slide v-for="card in cards" :key="card.id" :catalog_data="card">
      <Card class="card--gorisontal" :key="card.id" :catalog_data="card" />
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import Card from "./Card.vue";

export default defineComponent({
  name: "Breakpoints",
  components: {
    Carousel,
    Slide,
    Navigation,
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
        speaker: "Jerome Bell",
      },
      {
        id: 2,
        img: "/src/assets/images/card/mcKinny.png",
        badge: "Managment",
        title: "Prduct Management Fundamentals",
        price: 480,
        speaker: "Marvin McKinney",
      },
      {
        id: 3,
        img: "/src/assets/images/card/li.png",
        badge: "HR & Recruting",
        title: "HR  Management and Analytics",
        price: 200,
        speaker: "Leslie Alexander Li",
      },
      {
        id: 4,
        img: "/src/assets/images/card/watson.png",
        badge: "Marketing",
        title: "Brand Management & PR Communications",
        price: 530,
        speaker: "Kristin Watson",
      },
      {
        id: 5,
        img: "/src/assets/images/card/russell.png",
        badge: "Managment",
        title: "Business Development Management",
        price: 400,
        speaker: "Dianne Russell",
      },
      {
        id: 6,
        img: "/src/assets/images/card/hawkins.png",
        badge: "Design",
        title: "Graphic Design Basic",
        price: 500,
        speaker: "Guy Hawkins",
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
  }

  &__slide {
    scroll-snap-stop: auto;
    flex-shrink: 0;
    margin: 0;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateZ(0);
  }

  &__prev,
  &__next {
    top: -75px;
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
    @include mediaMin(768px) {
      top: -125px;
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

  &__icon {
    display: none;
  }

  .card--gorisontal {
    max-width: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    @include mediaMin(768px) {
      display: flex;
      flex-direction: row;
    }
  }
}
</style>
