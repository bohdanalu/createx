<template>
  <section class="blog">
    <div class="container">
      <div class="blog__head head-block">
        <h2 class="blog__title title">Our blog</h2>
        <h3 class="blog__subtitle subtitle">Latest posts</h3>
        <RouterLink class="blog__btn btn--gradient" to="/Blog"
          >Go to blog</RouterLink
        >
      </div>
      <ul class="blog__posts">
        <PostCardVue
          v-for="post in post_cards"
          :key="post.id"
          :post_data="post"
        />
      </ul>
    </div>
  </section>
</template>

<script>
import PostCardVue from "./PostCard.vue";

export default {
  components: {
    PostCardVue,
  },

  data() {
    return {
      post_cards: [
        {
          id: "pc1",
          classItem: "",
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
          classItem: "",
          badge: "Video",
          class: "post__badge--video",
          img: "/src/assets/images/posts/video.png",
          position: "Management",
          date: "August 25, 2020",
          lenght: "45 min.",
          title:
            " What to do and who to talk to if you want to get feedback on the product",
          text: "Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna sagittis faucibus...",
          btn: "Watch",
        },
        {
          id: "pc3",
          classItem: "",
          badge: "Article",
          class: "post__badge--article",
          img: "/src/assets/images/posts/article.png",
          position: "Design",
          date: "August 8, 2020",
          lenght: "",
          title:
            " Should you choose a creative profession if you are attracted to creativity?",
          text: "Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices...",
          btn: "Read",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.blog {
  padding: 60px 0 80px;

  @include mediaMin(768px) {
    padding: 120px 0 180px;
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

  &__post {
    max-width: 390px;
    width: 100%;
  }
}
</style>
