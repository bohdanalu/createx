<template>
  <Carousel class="carousel" :settings="settings" :breakpoints="breakpoints">
    <Slide v-for="post in post_cards" :key="post.id" :post_data="post">
      <PostCardVue :key="post.id" :post_data="post" />
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
import PostCardVue from "./PostCard.vue";

export default defineComponent({
  name: "Breakpoints",
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
    PostCardVue,
  },
  data: () => ({
    post_cards: [
      {
        id: "pc1",
        badge: "Podcast",
        class: "post__badge--podcast",
        img: "/src/assets/images/posts/podcast.png",
        position: "Marceting",
        date: "September 4, 2020",
        lenght: "36 min.",
        title: " What is traffic arbitrage and does it really make money?",
        text: " Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...",
        btn: "Listen",
      },
      {
        id: "pc2",
        badge: "Article",
        class: "post__badge--article",
        img: "/src/assets/images/posts/article_comp.jpg",
        position: "Management",
        date: "August 25, 2020",
        lenght: "45 min.",
        title: " How to choose the first programming language for a beginner",
        text: "Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna sagittis faucibus...",
        btn: "Watch",
      },
      {
        id: "pc3",
        badge: "Video",
        class: "post__badge--video",
        img: "/src/assets/images/posts/article.png",
        position: "Design",
        date: "August 8, 2020",
        lenght: "",
        title:
          " Should you choose a creative profession if you are attracted to creativity?",
        text: "Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices...",
        btn: "Read",
      },
      {
        id: "pc4",
        badge: "Article",
        class: "post__badge--article",
        img: "/src/assets/images/posts/article_big.jpg",
        position: "HR & Recruting",
        date: "August 3, 2020",
        lenght: "",
        title: " HR statistics: job search,  interviews, hiring and recruiting",
        text: " Massa, lectus nibh consectetur aliquet nunc risus aenean. Leo hac netus bibendum diam adipiscing aenean nisl. Molestie nullam ante mattis ac sit vitae pellentesque mi etiam. Morbi commodo tempor, massa vivamus. A molestie id semper fermentum pretium...",
        btn: "Read",
      },
      {
        id: "pc5",
        badge: "Video",
        class: "post__badge--video",
        img: "/src/assets/images/posts/video.png",
        position: "Management",
        date: "August 2, 2020",
        lenght: "25 min.",
        title:
          "What to do and who to talk to if you want to get feedback on the product",
        text: "Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna sagittis faucibus...",
        btn: "Watch",
      },
      {
        id: "pc6",
        badge: "Podcast",
        class: "post__badge--podcast",
        img: "/src/assets/images/posts/podcast_purple.jpg",
        position: "Design",
        date: "August 8, 2020",
        lenght: "",
        title: " What are color profiles and how they work in graphic design",
        text: "Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Consectetur urna arcu eleifend...",
        btn: "Listen",
      },
      {
        id: "pc7",
        badge: "Video",
        class: "post__badge--video",
        img: "/src/assets/images/posts/video_pink.jpg",
        position: "Management",
        date: "September 4, 2020",
        lenght: "36 min.",
        title:
          " Startup: how to build a team that will live longer than a year",
        text: " Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...",
        btn: "Watch",
      },
      {
        id: "pc8",
        badge: "Article",
        class: "post__badge--article",
        img: "/src/assets/images/posts/article_type.jpg",
        position: "Management",
        date: "August 25, 2020",
        lenght: "45 min.",
        title: "How to get customers to love your business from the start",
        text: "Malesuada in augue mi feugiat morbi a aliquet enim. Elementum lacus, pellentesque etiam arcu tristique ac...",
        btn: "Read",
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
  .post {
    max-width: 390px;
    width: 100%;
  }
  &__track {
    display: flex;
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
