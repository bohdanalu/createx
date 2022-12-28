<template>
  <div class="post-page">
    <section class="post-section">
      <div class="container">
        <div class="post-section__main">
          <article class="blog__post-card single-post">
            <span class="single-post__badge post__badge--article">Article</span>
            <span class="single-post__category">HR & Recruting</span>

            <div class="single-postpost__info">
              <h2 class="single-post__title subtitle">
                What is traffic arbitrage and does it really make money?
              </h2>
              <div class="single-post__head">
                <div class="single-postpost__meta">
                  <time class="post__date" datetime="2020-09-04"
                    >September 4, 2020</time
                  >
                  <span class="post__lenght">4 min. read</span>
                </div>
                <ul class="social">
                  <span class="single-post__social-name">Share:</span>
                  <Social
                    v-for="item in social"
                    :key="item.id"
                    :social_data="item"
                  />
                </ul>
              </div>

              <img
                class="single-post__img"
                src="../assets/images/posts/article_big.jpg"
                alt=""
              />
              <div class="single-post__text">
                <p class="single-post__p">
                  Vulputate vitae pellentesque scelerisque luctus consequat
                  mattis pellentesque dui odio. Interdum aenean sit malesuada
                  ornare sed gravida rhoncus, congue. Purus auctor nullam diam
                  quis est hendrerit ac euismod.
                </p>
                <p>
                  At facilisi sapien posuere eget nunc senectus proin nullam.
                  Tortor senectus in et sagittis, vitae diam cras dignissim.
                  Varius adipiscing eget diam nisi. Orci, consectetur vulputate
                  metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non
                  nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio.
                  Mi varius viverra risus vel.
                </p>
                <p>
                  At facilisi sapien posuere eget nunc senectus proin nullam.
                  Tortor senectus in et sagittis, vitae diam cras dignissim.
                  Varius adipiscing eget diam nisi. Orci, consectetur vulputate
                  metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non
                  nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio.
                  Mi varius viverra risus vel.
                </p>
              </div>
              <blockquote class="single-post__quote">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo,
                amet lectus quam viverra mus lobortis fermentum amet, eu.
                Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare
                turpis quis non. Congue tortor in tot euismod vulputate etiam
                eros. Vel accumsan at elit neque, ipsum.
              </blockquote>
              <div class="single-post__text">
                <p>
                  Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed
                  id ut erat mattis. Vitae mus blandit in neque amet non
                  fringilla blandit:
                </p>
              </div>
              <ul class="single-post__list">
                <li class="single-post__list-item">
                  A fermentum in morbi pretium aliquam adipiscing donec tempus.
                </li>
                <li class="single-post__list-item">
                  Vulputate placerat amet pulvinar lorem nisl.
                </li>
                <li class="single-post__list-item">
                  Consequat feugiat habitant gravida quisque elit bibendum id
                  adipiscing sed.
                </li>
                <li class="single-post__list-item">
                  Etiam duis lobortis in fames ultrices commodo nibh.
                </li>
              </ul>
              <div class="lsingle-post__text">
                <p>
                  Enim, vel massa odio diam. Blandit massa gravida feugiat
                  elementum id nec sed leo. Nisi in ornare lectus eget. Urna,
                  risus, consectetur volutpat lorem purus. Velit aliquet nibh
                  vitae maecenas. Consectetur neque ut aliquam eros, purus enim
                  dignissim aenean vitae. Ultrices fames augue mattis tortor est
                  justo, pharetra nibh risus. Facilisi at porttitor volutpat
                  natoque proin amet, nulla. Vivamus ut lobortis sagittis
                  curabitur tellus convallis eget netus vitae.
                </p>
              </div>
            </div>
            <div class="single-post__bottom">
              <ul class="single-post__tag-list">
                <span class="single-post__tag-name">Tags:</span>
                <li class="single-post__tag-item">
                  <a class="single-post__tag-link" href=""> #learning </a>
                </li>
                <li class="single-post__tag-item">
                  <a class="single-post__tag-link" href=""> #HR </a>
                </li>
                <li class="single-post__tag-item">
                  <a class="single-post__tag-link" href="">
                    #self-development
                  </a>
                </li>
              </ul>
              <ul class="social">
                <span class="single-post__social-name">Share:</span>
                <Social
                  v-for="item in social"
                  :key="item.id"
                  :social_data="item"
                />
              </ul>
            </div>
          </article>
          <div class="single-post__sidebar sidebar-post">
            <div class="search-wrap">
              <input
                class="sidebar-post__search"
                type="search"
                placeholder="Search blog..."
              />
              <button class="btn-search"></button>
            </div>

            <h4 class="sidebar-post__title title">Autor</h4>
            <div class="sidebar-post__autor-card">
              <div class="sidebar-post__card-wrap">
                <img
                  class="sidebar-post__img"
                  src="../assets/images/team/watson.png"
                  alt=""
                />
              </div>
              <div class="sidebar-post__wrap">
                <span class="sidebar-post__autor-name">Kristin Watson</span>
                <span class="sidebar-post__autor-position"
                  >Curator of Marketing Course</span
                >
                <ul class="sidebar-post__social-list">
                  <Social
                    v-if="(social.length = 3)"
                    v-for="item in social"
                    :key="item.id"
                    :social_data="item"
                  />
                </ul>
              </div>
            </div>
            <div class="sidebar-post__trending">
              <h4 class="sidebar-post__trending-title title">
                Trending Articles
              </h4>
              <ul class="sidebar-post__post-list">
                <li class="sidebar-post__post-item">
                  <article class="post-mini">
                    <img
                      class="post-mini__img"
                      src="../assets/images/posts/podcast.png"
                      alt=""
                    />
                    <div class="post-mini__info">
                      <time class="post__date" datetime="2020-09-04"
                        >September 4, 2020</time
                      >
                      <a class="post__link" href="">
                        <h2 class="post__title">
                          What is traffic arbitrage and does it really make
                          money?
                        </h2>
                      </a>
                    </div>
                  </article>
                </li>
                <li class="sidebar-post__post-item">
                  <article class="post-mini">
                    <img
                      class="post-mini__img"
                      src="../assets/images/posts/video_pink.jpg"
                      alt=""
                    />
                    <div class="post-mini__info">
                      <time class="post__date" datetime="2020-09-04"
                        >August 15, 2020</time
                      >
                      <a class="post__link" href="">
                        <h2 class="post__title">
                          Startup: how to build a team that will live longer
                          than a year
                        </h2>
                      </a>
                    </div>
                  </article>
                </li>
                <li class="sidebar-post__post-item">
                  <article class="post-mini">
                    <img
                      class="post-mini__img"
                      src="../assets/images/posts/article.png"
                      alt=""
                    />
                    <div class="post-mini__info">
                      <time class="post__date" datetime="2020-09-04"
                        >July 20, 2020</time
                      >
                      <a class="post__link" href="">
                        <h2 class="post__title">
                          What is traffic arbitrage and does it really make
                          money?
                        </h2>
                      </a>
                    </div>
                  </article>
                </li>
              </ul>
            </div>
            <div class="sidebar-post__tags">
              <h4 class="sidebar-post__title title">Tags</h4>
              <ul class="sidebar-post__tags-list">
                <li class="sidebar-post__tags-item">
                  <a class="sidebr-post__tags-link" href=""> #marceting </a>
                </li>
                <li class="sidebar-post__tags-item">
                  <a class="sidebr-post__tags-link" href=""> #recuiting </a>
                </li>
                <li class="sidebar-post__tags-item">
                  <a class="sidebr-post__tags-link" href=""> #coding </a>
                </li>
                <li class="sidebar-post__tags-item">
                  <a class="sidebr-post__tags-link" href=""> #learning </a>
                </li>
                <li class="sidebar-post__tags-item">
                  <a class="sidebr-post__tags-link" href=""> #HR </a>
                </li>
                <li class="sidebar-post__tags-item">
                  <a class="sidebr-post__tags-link" href="">
                    #self-developing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SubscribeArticle />

    <section class="blog-carousel">
      <div class="container">
        <h2 class="blog__title title">Our blog</h2>
        <h3 class="blog__subtitle subtitle mb">You may also like</h3>
        <CarouselBlogs />
        <div class="check__wrap-btn explore">
          <span class="explore__label" for="explore"
            >Do you want more articles, podcasts and videos?</span
          >
          <RouterLink class="explore__btn btn--gradient" to="/Blog"
            >Go to blog</RouterLink
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Social from "../components/Social.vue";
import SubscribeArticle from "../components/SibscribeArticle.vue";
import CarouselBlogs from "../components/CarouselBlogs.vue";
export default {
  components: {
    Social,
    SubscribeArticle,
    CarouselBlogs,
  },
  data() {
    return {
      social: [
        {
          id: "s1",
          img: "/src/assets/images/icons/social/facebook.svg",
          alt: "Facebook",
        },
        {
          id: "s2",
          img: "/src/assets/images/icons/social/instagram.svg",
          alt: "Google",
        },
        {
          id: "s3",
          img: "/src/assets/images/icons/social/twitter.svg",
          alt: "Facebook",
        },
        {
          id: "s4",
          img: "/src/assets/images/icons/social/linked-In.svg",
          alt: "Google",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../assets/styles/main.scss";
.post-section {
  padding: 150px 0 120px;
}
.post-section__main {
  display: flex;
  justify-content: space-between;
  gap: 30px;
}

.single-post {
  max-width: 810px;
  width: 100%;
  flex-shrink: 1;

  &__head {
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
  }

  // .single-post__badge

  &__badge {
    padding-right: 12px;
    border-right: 1px solid $gray-300;
    font-size: 16px;
  }

  &__category {
    padding-left: 12px;
    color: $primary;
  }

  // .single-post__img

  &__img {
    width: 100%;
    max-height: 360px;
    object-fit: cover;
  }

  // .single-post__position

  &__position {
  }

  // .single-post__date

  &__date {
  }

  // .single-post__lenght

  &__lenght {
  }

  // .single-post__title

  &__title {
    margin-bottom: 24px;
  }

  // .single-post__text

  &__text {
    font-size: 16px;
    color: $gray-800;

    & p:not(:last-child) {
      margin-bottom: 24px;
    }
  }
  &__p {
    color: $gray-900;
    font-size: 20px;
    font-weight: 700;
  }
  &__quote {
    position: relative;
    padding-left: 58px;
    margin: 48px 0;
    color: $gray-900;
    font-size: 20px;
    font-weight: 700;
    &::before {
      position: absolute;
      content: url(../assets/images/icons/braces.svg);
      left: 0;
    }
  }

  // .single-post__btn
  &__list {
    margin: 24px 0;
  }

  &__list-item {
    position: relative;
    padding-left: 32px;
    &:before {
      position: absolute;
      content: url(../assets/images/icons/check.svg);
      left: 0;
      @extend %filter-primary;
    }
  }

  &__bottom {
    padding-top: 60px;
    display: flex;
    justify-content: space-between;
  }

  &__tag-list {
    display: flex;
    gap: 12px;
  }

  &__tag-item {
    padding: 5.5px 16px;
    border: 1px solid $gray-300;
    color: $gray-700;
    font-weight: 700;
  }
}
.sidebar-post {
  display: none;

  @include mediaMin(992px) {
    display: block;
    max-width: 342px;
    width: 100%;
  }

  // .sidebar-post__search

  &__search {
    width: 100%;
    padding: 11px 16px 12px;
    border: 1px solid $gray-300;
    margin-bottom: 60px;

    &::placeholder {
      color: $gray-600;
    }
  }

  .title {
    margin-bottom: 24px;
  }

  // .sidebar-post__autor-card

  &__autor-card {
    height: 100px;
    display: flex;
    margin-bottom: 44px;
  }

  &__wrap {
    padding: 0 20px;
    display: flex;
    flex-direction: column;
  }
  &__card-wrap {
    background-color: $secondary;
  }

  &__img {
    max-width: 100px;
    width: 100%;
    height: 100%;
  }

  // .sidebar-post__title

  &__title {
  }

  // .sidebar-post__autor-name

  &__autor-name {
    font-weight: 700;
    font-size: 20px;
    color: $gray-800;
    margin-bottom: 4px;
  }

  // .sidebar-post__autor-position

  &__autor-position {
    margin-bottom: 20px;
  }

  // .sidebar-post__social-list

  &__social-list {
    display: flex;
    gap: 12px;
  }

  // .sidebar-post__social-item

  &__social-item {
    width: 20px;
    height: 20px;
    filter: invert(53%) sepia(1%) saturate(1485%) hue-rotate(188deg)
      brightness(89%) contrast(85%);

    &:hover {
      filter: invert(40%) sepia(13%) saturate(7062%) hue-rotate(334deg)
        brightness(99%) contrast(104%);
    }
  }

  // .sidebar-post__social-link

  &__social-link {
  }

  // .sidebar-post__social-img

  &__social-img {
    width: 100%;
    height: 100%;
  }

  // .sidebar-post__trending

  &__trending {
    margin-bottom: 60px;
  }

  // .sidebar-post__trending-title

  &__trending-title {
  }

  // .sidebar-post__post-list

  &__post-list {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  // .sidebar-post__post-item

  &__post-item {
    width: 100%;
  }

  // .sidebar-post__tags

  &__tags {
  }

  // .sidebar-post__tags-list

  &__tags-list {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  // .sidebar-post__tags-item

  &__tags-item {
    padding: 6px 16px;
    border: 1px solid $gray-300;
    border-radius: 4px;
    font-weight: 700;
    color: $gray-700;

    &:hover {
      color: $white;
      background-color: $primary;
    }
  }
}

.post-mini {
  display: flex;
  width: 100%;
  height: 100px;

  &__img {
    max-width: 100px;
    width: 100%;
    height: 100%;
  }
  &__info {
    padding: 0 20px;
  }
}

.post {
  // .post__img

  &__img {
    height: 300px;
  }

  // .post__info

  // .post__date

  &__date {
    // color: $gray-700;
    // margin-bottom: 4px;
    // &::before {
    //   display: none;
    // }
  }

  // .post__title

  &__title {
    font-weight: 700;
    font-size: 16px;
    line-height: 1.6;
    color: $gray-900;

    &:hover {
      color: $primary;
    }
  }

  &__date {
  }
}

.blog-carousel {
  padding: 120px 0 180px;
}
</style>
