<template>
  <div id="app">
    <Header />

    <main>
      <section class="about" id="about">
        <div class="container">
          <div class="about__inner">
            <div class="about__content-wrap">
              <div class="about__content">
                <a class="about__video" href="#">
                  <img
                    src="./assets/images/icons/polygon.svg"
                    alt="Button play"
                  />
                </a>
                <span class="about__play">Play showreel</span>
                <h1 class="about__title">
                  Enjoy studying with Createx Online Courses
                </h1>
                <div class="about__btn-wrap">
                  <a class="about__btn btn btn--light btn--large" href=" #"
                    >Explore courses</a
                  >
                  <a class="about__btn btn btn--light btn--large" href=" #"
                    >About us</a
                  >
                </div>
              </div>
              <img
                class="about__img"
                src="./assets/images/home_page/illustration.svg"
                alt="Picture about girl is sitting by computer"
              />
            </div>
            <ul class="about__statistic">
              <li class="about__item">
                1200<label class="about__item-label">Students graduated</label>
              </li>
              <li class="about__item">
                84<label class="about__item-label">Completed courses</label>
              </li>
              <li class="about__item">
                16<label class="about__item-label">Qualified tutors</label>
              </li>
              <li class="about__item">
                5<label class="about__item-label">Years of experience</label>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="why padding">
        <div class="container">
          <div class="why__wrap">
            <img
              src="./assets/images/home_page/image_girl.jpg"
              alt="girl"
              class="why__img"
            />
            <div class="why__content">
              <h2 class="why__title title">Who we are?</h2>
              <h3 class="why__subtitle subtitle">Why Createx?</h3>
              <ul class="why__list">
                <li class="why__item">
                  A fermentum in morbi pretium aliquam adipiscing donec tempus.
                </li>
                <li class="why__item">
                  Vulputate placerat amet pulvinar lorem nisl.
                </li>
                <li class="why__item">
                  Consequat feugiat habitant gravida quisque elit bibendum id
                  adipiscing sed.
                </li>
                <li class="why__item">
                  Etiam duis lobortis in fames ultrices commodo nibh.
                </li>
                <li class="why__item">Tincidunt sagittis neque sem ac eget.</li>
                <li class="why__item">
                  Ultricies amet justo et eget quisque purus vulputate dapibus
                  tortor.
                </li>
              </ul>
              <a class="why__btn btn btn--gradient btn--medium" href="">
                More about us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="courses padding" id="courses">
        <div class="container">
          <div class="courses__head">
            <h2 class="courses__title title">Ready to learn?</h2>
            <h3 class="courses__subtitle subtitle">Featured Courses</h3>
            <a class="courses__btn btn--light btn--large" href="">
              View all courses
            </a>
          </div>
          <ul class="courses__catalog">
            <!-- <li -->
            <!-- class="courses__catalog-card" -->
            <!-- <a class="courses__link" href=""> -->

            <Card v-for="card in cards" :key="card.id" :catalog_data="card" />

            <!-- </a> -->
            <!-- </li> -->
            <!-- <li class="courses__catalog-card"> -->
            <!-- <a class="card__link" href="">
                <article class="courses__card card">
                  <img class="card__img" src="images/card/mcKinny.png" alt="" />
                  <div class="card__content">
                    <span class="card__badge card__badge--management">
                      Management
                    </span>
                    <h4 class="card__title">Prduct Management Fundamentals</h4>
                    <div class="card__info">
                      <span class="card__price">
                        <span class="card__currency">$</span>480</span
                      >
                      <span class="card__speacer"> | by Marvin McKinney </span>
                    </div>
                  </div>
                </article>
              </a> -->
            <!-- </li> -->
            <!-- <li class="courses__catalog-card">
              <a class="card__link" href="">
                <article class="courses__card card">
                  <img class="card__img" src="images/card/li.png" alt="" />
                  <div class="card__content">
                    <span class="card__badge card__badge--hr">
                      HR & recruting</span
                    >
                    <h4 class="card__title">HR Management and Analytics</h4>
                    <div class="card__info">
                      <span class="card__price">
                        <span class="card__currency">$</span>200</span
                      >
                      <span class="card__speacer">
                        | by Leslie Alexander Li
                      </span>
                    </div>
                  </div>
                </article>
              </a>
            </li>
            <li class="courses__catalog-card">
              <a class="card__link" href="">
                <article class="courses__card card">
                  <img class="card__img" src="images/card/hawkins.png" alt="" />
                  <div class="card__content">
                    <span class="card__badge card__badge--design">Design</span>
                    <h4 class="card__title">Graphic Design Basic</h4>
                    <div class="card__info">
                      <span class="card__price"
                        ><span class="card__currency">$</span>500</span
                      >
                      <span class="card__speacer">| by Guy Hawkins</span>
                    </div>
                  </div>
                </article>
              </a>
            </li>  -->
          </ul>
        </div>
      </section>
      <section class="events" id="events">
        <div class="container">
          <h2 class="events__title title">Our events</h2>
          <h3 class="events__subtitle subtitle">Lectures & workshops</h3>
          <ul class="events__list">
            <li class="events__item">
              <article class="event-card">
                <time class="event-card__date" datetime="05-08 14:00">
                  <span class="event-card__num">05</span>
                  <span class="event-card__month">August</span>
                  <span class="event-card__time">11:00-14:00</span>
                </time>
                <div class="event-card__content">
                  <p>
                    Formation of the organizational structure of the company in
                    the face of uncertainty.
                  </p>
                  <span> Onine master-class </span>
                </div>
                <a class="event-card__btn btn btn--light btn--medium" href=""
                  >View more</a
                >
              </article>
            </li>
          </ul>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Card from "./components/Card.vue";
export default {
  components: {
    Header,
    Card,
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          img: "url(images/card/bell.png)",
          badge: "Marketing",
          title: "The Ultimate Google Ads Training Course",
          price: 100,
          speacer: "Jerome Bell",
        },
        {
          id: 2,
          img: "url(images/card/bell.png)",
          badge: "Marketing",
          title: "The Ultimate Google Ads Training Course",
          price: 100,
          speacer: "Jerome Bell",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "./assets/styles/main.scss";
.about {
  position: relative;
  height: 100vh;
  // height: 100%;
  padding: 55px 0;
  width: 100%;
  // background:
  // linear-gradient(55.95deg, #FF3F3A 0%, #F75E05 100%),
  //  url('../../images/icons/circles-3.svg') center;
  // background-image: url('../../images/background.svg');
  // background-repeat: no-repeat;
  // background-position: center;
  // background-size: cover;
  z-index: 1;

  @include mediaMin(762px) {
    padding: 80px 0;
  }

  @include landscape {
    padding: 55px 0;
  }

  &::after {
    position: absolute;
    content: "";
    background: linear-gradient(55.95deg, #ff3f3a 0%, #f75e05 100%);
    opacity: 0.2;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;
  }

  // .about__inner

  &__inner {
    height: calc(100vh - 110px);
    position: relative;
    z-index: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 25px;

    @include mediaMin(768px) {
      height: calc(100vh - 180px);
      padding-top: 35px;
    }
  }

  // .about__content-wrap

  &__content-wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;

    @include mediaMin(768px) {
      flex-direction: row;
      justify-content: space-between;
    }

    @include portrait {
      flex-direction: column;
    }
  }

  // .about__content

  &__content {
    padding-top: 20px;
  }

  // .about__img

  &__img {
    display: none;
    max-width: 602px;
    width: 100%;
    object-fit: contain;

    @include portrait {
      display: block;
    }

    @include mediaMin(768px) {
      display: block;
      width: 40%;
    }

    @include portrait {
      max-width: 602px;
      width: 100%;
    }

    @include mediaMin(1200px) {
      display: block;
      width: 50%;
      max-width: 602px;
    }
  }

  // .about__video

  &__video {
    @include btnPlay(52px);
    margin-right: 16px;

    @include mediaMin(1200px) {
      margin-bottom: 20px;
    }
  }

  // .about__play

  &__play {
    font-weight: 700;
    color: $gray-900;
  }

  // .about__title

  &__title {
    font-weight: 900;
    font-size: 32px;
    line-height: 1.3;
    letter-spacing: 1px;
    margin: 20px 0 40px;

    @include mediaMin(768px) {
      font-size: 34px;
      margin: 24px 0 50px;
    }

    @include landscape {
      font-size: 42px;
      margin: 15px 0 25px;
    }

    @include mediaMin(1200px) {
      margin-bottom: 55px;
      font-size: 64px;
    }
  }

  // .about__btn-wrap

  &__btn-wrap {
    display: flex;
    gap: 24px;
  }

  // .about__btn

  &__btn {
    &.btn--large {
      @include mediaMax(768px) {
        padding: 0 20px;
      }
    }
  }

  // .about__statistic

  &__statistic {
    width: 100%;
    display: flex;
    margin: 0 auto;

    @include landscape {
      display: none;
    }
  }

  // .about__item

  &__item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    font-size: 22px;
    line-height: 1.2;

    @include mediaMin(768px) {
      flex-direction: row;
      gap: 12px;
      font-size: 36px;
    }

    @include mediaMin(992px) {
      font-size: 46px;
    }

    // &:nth-child(2) {
    //     &::after {
    //         position: absolute;
    //         content: url('../../images/icons/shape.svg');
    //         width: 61px;
    //         height: 61px;
    //         bottom: 100px;

    //         @include mediaMin(992px) {
    //             bottom: 180px;
    //         }
    //     }
    // }

    &:not(:first-child) {
      padding-left: 10px;

      @include mediaMin(768px) {
        padding-left: 25px;
      }

      @include mediaMin(992px) {
        padding-left: 35px;
      }

      @include mediaMin(1200px) {
        padding-left: 66px;
      }
    }

    &:not(:last-child) {
      padding-right: 10px;

      @include mediaMin(768px) {
        padding-right: 25px;

        &::before {
          position: absolute;
          content: "";
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: $primary;
          right: -4px;
        }
      }

      @include mediaMin(992px) {
        padding-right: 35px;
      }

      @include mediaMin(1200px) {
        padding-right: 66px;
      }
    }
  }

  // .about__item-label

  &__item-label {
    display: inline-block;
    font-size: 13px;
    font-weight: 400;
    text-align: center;

    @include mediaMin(992px) {
      font-size: 16px;
    }
  }
}

.why {
  // .why__wrap

  &__wrap {
    display: flex;
    flex-direction: column;
    gap: 50px;

    @include mediaMin(768px) {
      flex-direction: row;
      gap: 75px;
    }

    @include mediaMin(1200px) {
      flex-direction: row;
      gap: 135px;
    }
  }

  // .why__img

  &__img {
    width: 100%;

    @include mediaMin(768px) {
      width: calc((705px * 100%) / 1260px);
    }
  }

  // .why__content

  &__content {
    padding-bottom: 25px;
  }

  // .why__title

  &__title {
  }

  // .why__subtitle

  &__subtitle {
    margin-bottom: 40px;
  }

  // .why__list

  &__list {
    margin-bottom: 22px;
  }

  // .why__item

  &__item {
    position: relative;
    padding-left: 32px;
    font-size: 16px;

    &::before {
      position: absolute;
      content: url("./assets/images/icons/check.svg");
      width: 16px;
      height: 16px;
      left: 0;
    }

    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }

  // .why__btn

  &__btn {
  }
}

.courses {
  &__head {
    margin-bottom: 30px;

    @include mediaMin(768px) {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }

  &__catalog {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
  }

  &__catalog-card {
    max-width: 390px;
    width: 100%;

    @include mediaMin(992px) {
      max-width: 600px;
      width: calc(50% - 15px);
    }
  }

  &__title {
    width: 100%;
  }

  &__subtitle {
    margin-bottom: 30px;

    @include mediaMin(768px) {
      margin-bottom: 0;
    }
  }

  &__btn {
    align-self: flex-end;
  }
}

.benefits {
  text-align: center;
  padding-bottom: 120px;

  // .benefits__title

  &__title {
  }

  // .benefits__subtitle

  &__subtitle {
    margin-bottom: 30px;

    @include mediaMin(992px) {
      margin-bottom: 60px;
    }
  }

  // .benefits__list

  &__list {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 60px;
  }

  // .benefits__item

  &__item {
    position: relative;
    border: 1px solid transparent;
    width: 50%;
    padding: 10px;
    color: $gray-600;
    font-weight: 700;

    @include mediaMin(768px) {
      width: 25%;
    }

    &:hover {
      border: 1px solid $primary;
      color: $primary;
      @extend %hover;
    }
  }

  // .benefits__item--tutors

  &__item--tutors {
  }

  // .benefits__link

  &__link {
    position: relative;
    font-size: 16px;
    line-height: 1.6;

    &::before {
      position: absolute;
      width: 16px;
      height: 16px;
      left: -24px;
    }

    &:hover {
    }

    &--tutors {
      &::before {
        content: url("../../images/icons/star.svg");
      }
    }

    &--suport {
      &::before {
        content: url("./assets/images/icons/like.svg");
      }
    }

    &--library {
      &::before {
        content: url("../../images/icons/layouts.svg");
      }
    }

    &--community {
      &::before {
        content: url("../../images/icons/chat.svg");
      }
    }
  }

  // .benefits__item--support

  // .benefits__item--library

  // .benefits__item--community

  // .benefits__content-wrap

  &__content-wrap {
    @include mediaMin(768px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  // .benefits__content

  &__content {
  }

  // .benefits__content-title

  &__content-title {
    font-size: 32px;
    line-height: 1.3;
    font-weight: 900;
    margin-bottom: 24px;
  }

  // .benefits__text

  &__text {
    max-width: 495px;
    font-size: 16px;
    line-height: 1.6;
  }

  // .benefits__img

  &__img {
    // max-width: 600px;
    width: 100%;

    @include mediaMin(768px) {
      width: calc((600px * 100%) / 1260px);
    }
  }
}
</style>
