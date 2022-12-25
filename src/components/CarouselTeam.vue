<template>
  <Carousel class="carousel" :settings="settings" :breakpoints="breakpoints">
    <Slide v-for="card in teamCards" :key="card.id" :team_data="card">
      <TeamCard :key="card.id" :team_data="card" />
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
import TeamCard from "./TeamCard.vue";

export default defineComponent({
  name: "Breakpoints",
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
    TeamCard,
  },
  data: () => ({
    teamCards: [
      {
        id: "tc1",
        img: "/src/assets/images/team/russell.png",
        name: "Dianne Russell",
        position: "Founder and CEO",
        facebook: true,
        instagram: true,
        linkedin: true,
      },
      {
        id: "tc2",
        img: "/src/assets/images/team/bell.png",
        name: "Jerome Bell",
        position: "Founder and Program Director",
        facebook: true,
        instagram: true,
        linkedin: true,
      },
      {
        id: "tc3",
        img: "/src/assets/images/team/watson.png",
        name: "Kristin Watson",
        position: "Marketer, Curator of Marketing Course",
        facebook: true,
        instagram: true,
        linkedin: true,
      },
      {
        id: "tc4",
        img: "/src/assets/images/team/mackinny.png",
        name: "Marvin McKinney",
        position: "PM, Curator of Management Course",
        facebook: true,
        instagram: true,
        linkedin: true,
      },
      {
        id: "tc5",
        img: "/src/assets/images/team/li.png",
        name: "Leslie Alexander Li",
        position: "Curator of HR & Recruting Course",
        facebook: true,
        instagram: true,
        linkedin: true,
      },
      {
        id: "tc6",
        img: "/src/assets/images/team/murphy.png",
        name: "Kathryn Murphy",
        position: "Analyst and Marketing specialist",
        facebook: true,
        instagram: true,
        linkedin: true,
      },
      {
        id: "tc7",
        img: "/src/assets/images/team/simmons.png",
        name: "Brooklyn Simmons",
        position: "Curator of Development Course",
        facebook: true,
        instagram: true,
        linkedin: true,
      },
      {
        id: "tc8",
        img: "/src/assets/images/team/fisher.png",
        name: "Cody Fisher",
        position: "UX Designer, Curator of Design Course",
        facebook: true,
        instagram: true,
        linkedin: true,
      },
      {
        id: "tc2",
        img: "/src/assets/images/team/russell.png",
        name: "Dianne Russell",
        position: "Founder and CEO",
        facebook: true,
        instagram: true,
        linkedin: true,
      },
      {
        id: "tc2",
        img: "/src/assets/images/team/russell.png",
        name: "Dianne Russell",
        position: "Founder and CEO",
        facebook: true,
        instagram: true,
        linkedin: true,
      },
    ],
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
      itemsToScroll: 1,
      wrapAround: true,
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 2,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 3,
        snapAlign: "center",
      },
      1200: {
        itemsToShow: 4,
        snapAlign: "center",
      },
    },
  }),
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
  &__track {
    display: flex;
    position: relative;
    @include mediaMin(700px) {
      gap: 30px;
    }
  }

  &__sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  &__slide {
    width: 100%;
    scroll-snap-stop: auto;
    flex-shrink: 0;
    margin: 0;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateZ(0);

    @include mediaMin(700px) {
      max-width: 285px;
      width: 100%;
    }
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
}
</style>
