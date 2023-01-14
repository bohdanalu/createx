<template>
  <Carousel class="carousel" :settings="settings" :breakpoints="breakpoints">
    <Slide v-for="card in eventCards" :key="card.id" :event_data="card">
      <EventCard class="event vertical" :key="card.id" :event_data="card" />
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
import EventCard from "./EventCard.vue";

export default defineComponent({
  name: "Breakpoints",
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
    EventCard,
  },
  data: () => ({
    eventCards: [
      {
        id: "evc1",
        data: {
          date: "05",
          mounth: "August",
          hour: "11.00 - 14.00",
        },
        title:
          "Formation of the organizational structure of the company in the face of uncertainty.",
        event: "Onine master-class",
        btn: "View more",
      },
      {
        id: "evc2",
        data: {
          date: "24",
          mounth: "July",
          hour: "11.00 - 12.30",
        },
        title: "Building a customer service department. Best Practices.",
        event: "Onine lecture",
        btn: "View more",
      },
      {
        id: "evc3",
        data: {
          date: "16",
          mounth: "July",
          hour: "10.00 - 13.00",
        },
        title:
          "How to apply methods of speculative design in practice. Worldbuilding prototyping.",
        event: "Onine master-class",
        btn: "View more",
      },
      {
        id: "evc4",
        data: {
          date: "10",
          mounth: "July",
          hour: "10.00 - 12.30",
        },
        title: "Find and evaluate: search and assessment tools for candidates.",
        event: "Onine workshop",
        btn: "View more",
      },
      {
        id: "evc5",
        data: {
          date: "26",
          mounth: "June",
          hour: "15.00 - 19.00",
        },
        title:
          "Connection to Microsoft Excel and Google Sheets, Data Visualization in Power BI.",
        event: "Onine master-class",
        btn: "View more",
      },
      {
        id: "evc6",
        data: {
          date: "15",
          mounth: "June",
          hour: "10.00 - 12.30",
        },
        title:
          "Marketing or growth hacking: main differences and what business needs.",
        event: "Onine lecture",
        btn: "View more",
      },
      {
        id: "evc7",
        data: {
          date: "02",
          mounth: "June",
          hour: "15.00 - 19.00",
        },
        title:
          "How to brief a client and present your design to approve it from the first show.",
        event: "Onine lecture",
        btn: "View more",
      },
      {
        id: "evc8",
        data: {
          date: "15",
          mounth: "June",
          hour: "10.00 - 12.30",
        },
        title:
          "Marketing or growth hacking: main differences and what business needs.",
        event: "Onine lecture",
        btn: "View more",
      },
      {
        id: "evc9",
        data: {
          date: "29",
          mounth: "May",
          hour: "15.00 - 19.00",
        },
        title: "Who is a project manager and do I want to be PM?",
        event: "Onine lecture",
        btn: "View more",
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
        itemsToShow: 2,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 3,
        snapAlign: "start",
      },
      1200: {
        itemsToShow: 3,
        snapAlign: "start",
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
    // gap: 0;
    position: relative;
    // @include mediaMin(700px) {
    //   gap: 30px;
    // }
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
    //   max-width: 390px;
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

  .blog__post {
    width: 100%;
  }
}
</style>
