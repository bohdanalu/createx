<template>
  <section class="blog">
    <div class="container">
      <div class="blog__head head-block">
        <h2 class="blog__title title">Our blog</h2>
        <h3 class="blog__subtitle subtitle">Latest posts</h3>
        <a class="blog__btn btn--gradient" href="">View all courses</a>
      </div>
      <div class="blog__posts">
        <PostCard v-for="post in post_cards" :key="post.id" :post_data="post" />
      </div>
    </div>
  </section>
</template>

<script>
import PostCard from "./PostCard.vue";

export default {
  components: {
    PostCard,
  },

  data() {
    return {
      post_cards: [
        {
          id: "pc1",
          badge: "Podcast",
          img: "/src/assets/images/posts/podcast.png",
          position: "Marceting",
          date: "September 4, 2020",
          lenght: "36 min.",
          title: " What is traffic arbitrage and does it really make money?",
          text: " Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...",
          btn: "Listen",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../assets/styles/main.scss";

.blog {
  padding: 60px 0 80px;

  @include mediaMin(768px) {
    padding: 120px 0 180px;
  }

  // .blog_post

  &__posts {
    display: grid;
    gap: 30px;

    @include mediaMin(768px) {
      grid-template-columns: minMax(30%, 390px) minMax(30%, 390px);
      grid-template-rows: auto;
    }
  }

  &__post {
    &:nth-child(2) {
      grid-column: span 2;
    }
  }

  // .blog__head

  &__head {
    margin-bottom: 60px;
  }

  // .blog__title

  &__title {
    width: 100%;
  }

  // .blog__subtitle

  &__subtitle {
    margin-bottom: 30px;

    @include mediaMin(768px) {
      margin-bottom: 0;
    }
  }

  // .blog__btn

  &__btn {
    @include btn(40px, 52px, 16px);
  }

  // .blog__posts

  &__posts {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  }

  // .blog__post-card

  &__post-card {
    max-width: 390px;
    width: 100%;
  }
}
</style>
