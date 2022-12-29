<template>
  <div class="blog-page">
    <section class="blog">
      <div class="container">
        <h2 class="blog__title title">Our blog</h2>
        <h3 class="blog__subtitle subtitle mb">Createx School Journal</h3>
        <div class="blog__toolbar">
          <div class="blog__btn-wrap">
            <button
              class="blog__toolbar-btn _active"
              @click="filterPostCards($event)"
            >
              All
            </button>

            <button
              class="blog__toolbar-btn"
              type="button"
              @click="filterPostCards($event)"
            >
              Articles
            </button>
            <button
              class="blog__toolbar-btn"
              type="button"
              @click="filterPostCards($event)"
            >
              Videos
            </button>
            <button
              class="blog__toolbar-btn"
              type="button"
              @click="filterPostCards($event)"
            >
              Podcasts
            </button>
          </div>
          <div class="blog__select-wrap">
            <label class="blog__label-select" for="blog_theame"
              >Blog category</label
            >
            <select class="blog__select" name="blog_theame" id="blog_theame">
              <option value="marketing">All theme</option>
              <option value="managment">Manadgment</option>
              <option value="marketing">Marketing</option>
              <option value="managment">Manadgment</option>
            </select>
            <div class="search-wrap">
              <label for="search_blog"></label>
              <input
                class="blog__search"
                type="search"
                name="serch_blog"
                id="search_blog"
                placeholder="Search blog..."
              />
              <button class="btn-search"></button>
            </div>
          </div>
        </div>
        <ul class="blog__posts">
          <PostCardVue
            v-for="post in filteredList"
            :key="post.id"
            :post_data="post"
          />
        </ul>

        <div class="pagging">
          <a href="" class="pagging__arrow"></a>
          <ul class="pagging__list">
            <li>
              <a href="" class="pagging__item _active">1</a>
            </li>
            <li>
              <a href="" class="pagging__item">2</a>
            </li>
            <li>
              <a href="" class="pagging__item">3</a>
            </li>
            <li>
              <a href="" class="pagging__item">4</a>
            </li>
          </ul>
          <a href="" class="pagging__arrow"></a>
        </div>
      </div>
    </section>
    <SubscribeArticle />
  </div>
</template>

<script>
import PostCardVue from "../components/PostCard.vue";
import SubscribeArticle from "../components/SibscribeArticle.vue";
export default {
  components: {
    PostCardVue,
    SubscribeArticle,
  },

  data() {
    return {
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
          title:
            " HR statistics: job search,  interviews, hiring and recruiting",
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

      filteredList: [],
    };
  },
  methods: {
    filterPostCards(el) {
      const listBtns = document.querySelectorAll(".blog__toolbar-btn");
      const value = el.target.textContent.trim();

      for (const btn of listBtns) {
        btn.classList.remove("_active");
      }

      el.target.classList.add("_active");

      if (value == "Articles") {
        return (this.filteredList = this.post_cards.filter(
          (el) => el.badge == "Article"
        ));
      }
      if (value == "Videos") {
        return (this.filteredList = this.post_cards.filter(
          (el) => el.badge == "Video"
        ));
      }
      if (value == "Podcasts") {
        return (this.filteredList = this.post_cards.filter(
          (el) => el.badge == "Podcast"
        ));
      }
      if (value == "All") {
        return (this.filteredList = this.post_cards);
      }
    },
  },
  mounted() {
    this.filteredList = this.post_cards;
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

  &__toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 58px;
  }

  &__btn-wrap {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  &__toolbar-btn {
    padding: 10px 20px;
    border: 1px solid transparent;
    border-radius: 4px;
    background-color: transparent;
    color: $gray-600;
    font-size: inherit;

    &:hover {
      color: $gray-800;
    }

    &._active {
      border: 1px solid $primary;
      color: $primary;
    }
  }

  &__select-wrap {
    display: flex;
  }

  &__label-select {
    margin-right: 12px;
    color: $gray-800;
    align-self: center;
  }

  &__select {
    width: 160px;
    padding: 11px 16px 12px;
    color: $gray-800;
    border: 1px solid $gray-300;
    appearance: none;
    outline: transparent;
  }

  &__search {
    width: 285px;
    margin-left: 48px;
    border: 1px solid $gray-300;
    padding: 11px 16px 12px;

    &::placeholder {
      color: $gray-600;
    }

    @include mediaMax(768px) {
      display: none;
    }
  }

  &__posts {
    display: flex;
    flex-wrap: wrap;
    gap: 40px 20px;
    justify-content: space-evenly;

    @include mediaMin(1200px) {
      display: grid;
      grid-template-columns: 31.7% auto 75px 31.7%;
      gap: 60px 30px;
    }
  }

  &__post {
    text-align: left;
    width: 100%;

    @include mediaMin(768px) {
      width: calc((100% - 20px) / 2);
    }

    @include mediaMin(992px) {
      width: calc((100% - 40px) / 3);
    }

    @include mediaMin(1200px) {
      width: 100%;
    }

    &:nth-child(2) {
      grid-column: span 2;
    }
    &:nth-child(4) {
      grid-column: span 2;
    }
    &:nth-child(5) {
      grid-column: span 2;
    }
    &:nth-child(7) {
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

  // .blog__btn

  &__btn {
    @include btn(40px, 52px, 16px);
  }
}

.blog > .post__img {
  width: 100%;
  height: 300px;
}
</style>

<style lang="scss" scoped>
.blog {
  text-align: center;
}
.post {
  text-align: left;
}
</style>
