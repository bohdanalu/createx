<template>
  <div class="course-page">
    <section class="hero-mini">
      <div class="container">
        <h2 class="hero-mini__title title">Course</h2>
        <h3 class="hero-mini__subtitle subtitle">
          User Experience. Principles of Human-Centered Design
        </h3>
      </div>
    </section>
    <section class="about-course">
      <div class="container">
        <div class="about-course__wrap">
          <div class="about-course__content">
            <h2 class="about-course__title subtitle">About the course</h2>
            <div class="about-course__text">
              <p>
                Bibendum vulputate adipiscing venenatis at est, a eu tincidunt.
                Leo aenean congue in sagittis, felis maecenas amet varius at.
                Pellentesque euismod in faucibus at elementum. Tellus maecenas
                libero est tempus sit cras at malesuada diam. Consequat senectus
                dictumst non hac dignissim montes, pretium, egestas molestie.
                Sed magna aliquet ornare nibh vel lectus diam eget pretium.
                Lorem risus nunc tincidunt tortor, mi nulla pellentesque
              </p>
            </div>
            <h3 class="about-course__subtitle">You will learn:</h3>
            <ul class="about-course__list">
              <li class="about-course-item">
                A fermentum in morbi pretium aliquam adipiscing donec tempus.
              </li>
              <li class="about-course-item">
                Vulputate placerat amet pulvinar lorem nisl.
              </li>
              <li class="about-course-item">
                Consequat feugiat habitant gravida quisque elit bibendum id
                adipiscing sed.
              </li>
              <li class="about-course-item">
                Etiam duis lobortis in fames ultrices commodo nibh.
              </li>
              <li class="about-course-item">
                Fringilla in nec risus congue venenatis pretium posuere nec.
              </li>
              <li class="about-course-item">
                Cursus eu pretium, vulputate tempus quam massa sed at.
              </li>
            </ul>
          </div>
          <div class="about-course__sidebar sidebar sidebar--course">
            <div class="sidebar__block">
              <h3 class="sidebar__title">Dates</h3>
              <span class="sidebar__info"> Sept 7 – Nov 2 </span>
              <div class="sidebar__text">
                Metus turpis sit lorem lacus, in elit tellus lacus.
              </div>
            </div>
            <div class="sidebar__block">
              <h3 class="sidebar__title">Duration</h3>
              <span class="sidebar__info"> 2 months – 8 lessons </span>
              <div class="sidebar__text">2 months – 8 lessons</div>
            </div>
            <div class="sidebar__block">
              <h3 class="sidebar__title">Price</h3>
              <span class="sidebar__info"> $120 per month </span>
              <div class="sidebar__text">
                Nulla sem adipiscing adipiscing felis fringilla. Adipiscing
                mauris quam ac elit tristique dis.
              </div>
            </div>
            <div class="sidebar__block sidebar__block--hide">
              <a class="sidebar__link" href="#">Event on Facebook</a>
            </div>
            <button class="sidebar__btn btn--gradient">Join the course</button>
          </div>
        </div>
      </div>
    </section>

    <section class="person padding">
      <div class="container">
        <div class="person__wrap">
          <div class="person__img-container">
            <img
              class="person__img"
              src="../assets/images/team/fisher.png"
              alt=""
            />
          </div>
          <div class="person__info">
            <h2 class="person__title title">Course person</h2>
            <h3 class="person__subtitle subtitle">Cody Fisher</h3>
            <span class="person__position"
              >Senior UX designer in IT Product Company</span
            >
            <div class="person__statistic">
              <span class="person__statistic-item person__statistic-item--rate"
                >4.9 rate</span
              >
              <span
                class="person__statistic-item person__statistic-item--course"
                >4 courses</span
              >
              <span
                class="person__statistic-item person__statistic-item--student"
                >350 students</span
              >
            </div>
            <div class="person__text">
              <p>
                Mattis adipiscing aliquam eu proin metus a iaculis faucibus.
                Tempus curabitur venenatis, vulputate venenatis fermentum ante.
                Nisl, amet id semper semper quis commodo, consequat. Massa
                rhoncus sit morbi odio. Sit maecenas nibh consectetur vel diam.
                Sem vulputate molestie laoreet at massa sed pharetra. Ac commodo
                platea id habitasse proin. Nullam sit nec ipsum posuere non. Nam
                vel aliquam tristique sollicitudin interdum quam.
              </p>
            </div>
            <ul class="person__social">
              <Social
                v-for="item in social"
                :key="item.id"
                :social_data="item"
              />
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="steps padding">
      <div class="container">
        <h2 class="steps__title title">Main steps</h2>
        <h3 class="steps__subtitle subtitle">Online learning process</h3>
        <ul class="steps__list">
          <li class="steps__item">
            <span class="steps__num">01</span>
            <h4 class="steps__action">Watching online video lectures</h4>
            <div class="steps__text">
              <p>
                Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam
                velit nostrud aliquip sunt.
              </p>
            </div>
          </li>
          <li class="steps__item">
            <span class="steps__num">02</span>
            <h4 class="steps__action">Passing test</h4>
            <div class="steps__text">
              <p>
                Anim reprehenderit sint voluptate exercitation adipisicing
                laborum adipisicing. Minim ad tempor est ea.
              </p>
            </div>
          </li>
          <li class="steps__item">
            <span class="steps__num">03</span>
            <h4 class="steps__action">person’s feedback</h4>
            <div class="steps__text">
              <p>
                Adipisicing esse aliqua aliquip qui amet. Aute eiusmod dolore
                dolore et ad et veniam ad deserunt.
              </p>
            </div>
          </li>
          <li class="steps__item">
            <span class="steps__num steps__num--end">04</span>
            <h4 class="steps__action">Corrections if needed</h4>
            <div class="steps__text">
              <p>
                Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit
                voluptate ullamco proident ea ad.
              </p>
            </div>
          </li>
        </ul>
        <div class="steps__bottom-block">
          <div class="steps__inner">
            <h4 class="steps__discount">20% discount for early birds!</h4>

            <ul class="steps__countdown">
              <li class="steps__count-item">
                <span class="steps__count-num">06</span>Days
              </li>
              <li class="steps__count-item">
                <span class="steps__count-num">18</span>Hours
              </li>
              <li class="steps__count-item">
                <span class="steps__count-num">24</span>Mins
              </li>
              <li class="steps__count-item">
                <span class="steps__count-num">12</span>Sec
              </li>
            </ul>
          </div>
          <form class="steps__form register register--gorisontal" action="">
            <label class="register__label" for="name"
              >Full name
              <input
                class="register__input"
                type="text"
                placeholder="Your full name"
              />
            </label>
            <label class="register__label" for="name"
              >Full name
              <input
                class="register__input"
                type="text"
                placeholder="Your working email"
              />
            </label>
            <label class="register__label" for="name"
              >Full name
              <input
                class="register__input"
                type="text"
                placeholder="Your phone number"
              />
            </label>
            <button
              class="register__btn btn--gradient register__btn--vertical"
              type="submit"
            >
              Join the course
            </button>
            <span class="register__comment"
              >* You will receive a link to the online lecture in an email after
              registration.</span
            >
          </form>
        </div>
      </div>
    </section>

    <section class="whom padding">
      <div class="container">
        <div class="whom__wrap">
          <div class="whom__title-wrap">
            <h2 class="whom__title title">For whom?</h2>
            <h3 class="whom__subtitle subtitle">
              Who will benefit from the course:
            </h3>
          </div>
          <ul class="whom__list">
            <li class="whom__item">
              Specialists with more than 1 year of active work experience
            </li>
            <li class="whom__item">
              Mobile app designers who want to improve their skills in solving
              business problems, creating and testing human-centered interfaces
            </li>
            <li class="whom__item">
              Professional designers who want to feel more confident in UX
            </li>
            <li class="whom__item">
              Specialists who would like to structure their knowledge, fill in
              the gaps
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="program padding">
      <div class="container">
        <div class="program__wrap">
          <div class="program__content">
            <h2 class="program__title title">Course program</h2>
            <h3 class="program__subtitle subtitle">What will you learn</h3>
            <ul class="program__list">
              <li class="program__item">
                <div class="program__item-wrap" @click="accordionClick($event)">
                  <span class="program__lesson"> Lesson 1. </span>
                  <h4 class="program__name-lesson">
                    Aliquet lectus urna viverra in odio.
                  </h4>
                </div>

                <div class="program__text">
                  <p>
                    Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec
                    pulvinar aliquet donec enim, ornare. Lacus facilisi
                    curabitur turpis varius mauris. Nisi, tempus risus, odio mi
                    suscipit sed. Curabitur faucibus porttitor quis sem lacus,
                    arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.
                  </p>
                </div>
              </li>
              <li class="program__item">
                <div class="program__item-wrap" @click="accordionClick($event)">
                  <span class="program__lesson"> Lesson 2. </span>
                  <h4 class="program__name-lesson">
                    Orci commodo, viverra orci mollis ut euismod.
                  </h4>
                </div>
                <div class="program__text">
                  <p>
                    Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec
                    pulvinar aliquet donec enim, ornare. Lacus facilisi
                    curabitur turpis varius mauris. Nisi, tempus risus, odio mi
                    suscipit sed. Curabitur faucibus porttitor quis sem lacus,
                    arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.
                  </p>
                </div>
              </li>
              <li class="program__item">
                <div
                  class="program__item-wrap"
                  @click="accordionClick($event)"
                ></div>
                <span class="program__lesson"> Lesson 3. </span>
                <h4 class="program__name-lesson">
                  Sagittis vitae facilisi rutrum amet mauris quisque vel.
                </h4>
                <div class="program__text">
                  <p>
                    Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec
                    pulvinar aliquet donec enim, ornare. Lacus facilisi
                    curabitur turpis varius mauris. Nisi, tempus risus, odio mi
                    suscipit sed. Curabitur faucibus porttitor quis sem lacus,
                    arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.
                  </p>
                </div>
              </li>
              <li class="program__item">
                <div class="program__item-wrap" @click="accordionClick($event)">
                  <span class="program__lesson"> Lesson 4. </span>
                  <h4 class="program__name-lesson">
                    Sagittis vitae facilisi rutrum amet mauris quisque vel.
                  </h4>
                </div>

                <div class="program__text">
                  <p>
                    Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec
                    pulvinar aliquet donec enim, ornare. Lacus facilisi
                    curabitur turpis varius mauris. Nisi, tempus risus, odio mi
                    suscipit sed. Curabitur faucibus porttitor quis sem lacus,
                    arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.
                  </p>
                </div>
              </li>
              <li class="program__item">
                <div class="program__item-wrap" @click="accordionClick($event)">
                  <span class="program__lesson"> Lesson 5. </span>
                  <h4 class="program__name-lesson">
                    Est, ut tempus id rutrum facilisi.
                  </h4>
                </div>

                <div class="program__text">
                  <p>
                    Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec
                    pulvinar aliquet donec enim, ornare. Lacus facilisi
                    curabitur turpis varius mauris. Nisi, tempus risus, odio mi
                    suscipit sed. Curabitur faucibus porttitor quis sem lacus,
                    arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.
                  </p>
                </div>
              </li>
              <li class="program__item">
                <div class="program__item-wrap" @click="accordionClick($event)">
                  <span class="program__lesson"> Lesson 6. </span>
                  <h4 class="program__name-lesson">
                    Amet nec in pellentesque.
                  </h4>
                </div>

                <div class="program__text">
                  <p>
                    Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec
                    pulvinar aliquet donec enim, ornare. Lacus facilisi
                    curabitur turpis varius mauris. Nisi, tempus risus, odio mi
                    suscipit sed. Curabitur faucibus porttitor quis sem lacus,
                    arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.
                  </p>
                </div>
              </li>
              <li class="program__item">
                <div class="program__item-wrap" @click="accordionClick($event)">
                  <span class="program__lesson"> Lesson 7. </span>
                  <h4 class="program__name-lesson">
                    Massa vel arcu mauris, id vel rhoncus mattis quis.
                  </h4>
                </div>

                <div class="program__text">
                  <p>
                    Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec
                    pulvinar aliquet donec enim, ornare. Lacus facilisi
                    curabitur turpis varius mauris. Nisi, tempus risus, odio mi
                    suscipit sed. Curabitur faucibus porttitor quis sem lacus,
                    arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.
                  </p>
                </div>
              </li>
              <li class="program__item">
                <div class="program__item-wrap" @click="accordionClick($event)">
                  <span class="program__lesson"> Lesson 8. </span>
                  <h4 class="program__name-lesson">
                    Neque, cursus sapien nullam id.
                  </h4>
                </div>
                <div class="program__text">
                  <p>
                    Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec
                    pulvinar aliquet donec enim, ornare. Lacus facilisi
                    curabitur turpis varius mauris. Nisi, tempus risus, odio mi
                    suscipit sed. Curabitur faucibus porttitor quis sem lacus,
                    arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <img
            class="program__img"
            src="../assets/images/illustration_course.svg"
            alt=""
          />
        </div>
      </div>
    </section>

    <TestimonialsVue />

    <section class="course-register request padding">
      <div class="container">
        <div class="request__wrap">
          <img
            class="request__img"
            src="../assets/images/home_page/illustration.svg"
            alt=""
          />
          <div class="request__block">
            <h2 class="request__title title">
              Leave a request now and get 20% off!
            </h2>
            <h3 class="request__subtitle subtitle">Register for the course</h3>
            <form class="request__form register register--vertical" action="">
              <label class="register__label" for="name"
                >Full name
                <input
                  class="register__input"
                  type="text"
                  placeholder="Your full name"
                />
              </label>
              <label class="register__label" for="name"
                >Full name
                <input
                  class="register__input"
                  type="text"
                  placeholder="Your working email"
                />
              </label>
              <label class="register__label" for="name"
                >Full name
                <input
                  class="register__input"
                  type="text"
                  placeholder="Your phone number"
                />
              </label>
              <button
                class="register__btn btn--gradient register__btn--vertical"
                type="submit"
              >
                Join the course
              </button>
              <span class="register__comment"
                >* You will receive a link to the online lecture in an email
                after registration.</span
              >
            </form>
          </div>
        </div>
      </div>
    </section>

    <section class="check-course check">
      <div class="container">
        <h2 class="check__title title">Check other courses</h2>
        <h3 class="check__subtitle subtitle mb">You may also like</h3>
        <div class="check__slider">
          <CarouselCourses />
        </div>
        <div class="check__wrap-btn explore">
          <label class="explore__label" for="explore"
            >Do you want more courses?</label
          >

          <RouterLink class="explore__btn btn--gradient" to="/Courses"
            >Explore all courses</RouterLink
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Social from "../components/Social.vue";
import TestimonialsVue from "../components/Testimonials.vue";
import CarouselCourses from "../components/CarouselCourses.vue";

export default {
  components: {
    Social,
    TestimonialsVue,
    CarouselCourses,
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
          id: "s3",
          img: "/src/assets/images/icons/social/twitter.svg",
          alt: "Twitter",
        },

        {
          id: "s4",
          img: "/src/assets/images/icons/social/linked-In.svg",
          alt: "LinkedIn",
        },
      ],
    };
  },

  methods: {
    accordionClick(el) {
      const item = el.target.parentElement;
      const list = item.nextElementSibling;
      if (list.style.maxHeight) {
        list.style.maxHeight = null;
        item.classList.remove("_active");
      } else {
        const allList = document.querySelectorAll(".program__text");

        for (let i = 0; i < allList.length; i++) {
          if (allList[i].style.maxHeight) {
            allList[i].style.maxHeight = null;
            allList[i].previousElementSibling.classList.remove("_active");
          }
        }

        list.style.maxHeight = list.scrollHeight + "px";
        item.classList.add("_active");
      }
    },
  },
};
</script>

<style lang="scss">
@import "../assets/styles/main.scss";
.hero-mini {
  padding: 80px 0 60px;
  text-align: center;
  background: linear-gradient(
    55.95deg,
    rgba(255, 63, 58, 0.2) 0%,
    rgba(247, 94, 5, 0.2) 100%
  );

  @include mediaMin(992px) {
    padding: 228px 0 120px;
  }

  // .hero-course__title

  &__title.title {
    color: $primary;
  }

  // .hero-course__subtitle

  &__subtitle {
    margin: 0 auto;
    max-width: 750px;

    @include mediaMin(1200px) {
      max-width: 1020px;
    }
  }
}

.about-course {
  padding-top: 60px;
  font-size: 16px;

  @include mediaMin(768px) {
    padding-top: 120px;
  }

  // .about-course__wrap

  &__wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    @include mediaMin(992px) {
      flex-direction: row;
    }
  }

  // .about-course__content

  &__content {
    max-width: 600px;
    width: 100%;
  }

  // .about-course__title

  &__title {
    margin-bottom: 40px;
  }

  // .about-course__text

  &__text {
    margin-bottom: 48px;
  }

  // .about-course__subtitle

  &__subtitle {
    font-weight: 700;
    font-size: 28px;
    color: $gray-900;
    margin-bottom: 24px;
  }

  // .about-course__list

  &__list {
    &:not(:last-child) {
      margin-bottom: 4px;
    }
  }

  // .about-course__sidebar

  &__sidebar {
  }
}

.sidebar {
  padding: 40px 32px;
  border: 1px solid $gray-300;
  box-shadow: 0px 80px 80px -20px rgba(154, 156, 165, 0.08),
    0px 30px 24px -10px rgba(154, 156, 165, 0.05),
    0px 12px 10px -6px rgba(154, 156, 165, 0.04),
    0px 4px 4px -4px rgba(30, 33, 44, 0.03);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @include mediaMin(992px) {
    max-width: 495px;
    width: 100%;
  }

  // .sidebar__block

  &__block {
    &--hide {
      display: none;
    }
  }

  // .sidebar__title

  &__title {
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: $gray-900;
  }

  // .sidebar__info

  &__info {
    font-weight: 700;
    font-size: 24px;
    line-height: 1.3;
    color: $primary;
  }

  // .sidebar__text

  &__text {
    font-size: 16px;
    line-height: 1.6;
    color: $gray-700;
  }

  // .sidebar__link

  &__link {
    font-weight: 700;
    letter-spacing: 1px;
    text-decoration-line: underline;
    text-transform: uppercase;
    color: $primary;
  }

  // .sidebar__btn

  &__btn {
    margin-top: 8px;
    @include btn(44px, 36px, 14px);
    width: 100%;
  }
}

.person {
  // .person__wrap

  &__wrap {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    text-align: center;

    @include mediaMin(768px) {
      flex-direction: row;
    }
  }

  // .person__img-container

  &__img-container {
    position: relative;
    max-width: 495px;
    width: 100%;
    height: 240px;
    background-color: $secondary;
    @include mediaMin(768px) {
      height: 580px;
    }
  }

  // .person__img

  &__img {
    position: absolute;
    height: 110%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) scaleX(-1);
    @include mediaMin(768px) {
      height: 600px;
    }
  }

  // .person__info

  &__info {
    text-align: left;
    max-width: 600px;
    width: 100%;
  }

  // .person__title

  &__title {
  }

  // .person__subtitle

  &__subtitle {
    margin-bottom: 16px;
  }

  // .person__position

  &__position {
    display: inline-block;
    font-size: 20px;
    color: $gray-700;
    margin-bottom: 32px;
  }

  // .person__statistic

  &__statistic {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 14px;
    margin-bottom: 30px;
  }

  // .person__statistic-item

  &__statistic-item {
    padding-left: 24px;
    font-weight: 700;
    font-size: 16px;
    position: relative;
    &::before {
      position: absolute;
      width: 16px;
      height: 16px;
      left: 0;
    }
    &--rate {
      &:before {
        content: url(../assets/images/icons/star.svg);
        filter: invert(47%) sepia(41%) saturate(4686%) hue-rotate(332deg)
          brightness(96%) contrast(123%);
      }
    }
    &--course {
      &:before {
        content: url(../assets/images/icons/play.svg);
        filter: invert(47%) sepia(41%) saturate(4686%) hue-rotate(332deg)
          brightness(96%) contrast(123%);
      }
    }
    &--student {
      &:before {
        content: url(../assets/images/icons/profile.svg);
        filter: invert(47%) sepia(41%) saturate(4686%) hue-rotate(332deg)
          brightness(96%) contrast(123%);
      }
    }
  }

  // .person__text

  &__text {
    text-align: left;
    margin-bottom: 40px;
    font-size: 16px;
  }

  &__brands {
    margin-bottom: 40px;
  }

  // .person__social

  &__social {
    display: flex;
    gap: 24px;
  }

  // .person__social-item

  &__social-item {
  }

  // .person__social-link

  &__social-link {
    &:hover {
      filter: invert(38%) sepia(41%) saturate(6065%) hue-rotate(341deg)
        brightness(108%) contrast(104%);
    }
  }
}

.steps {
  // .steps__title

  &__title {
  }

  // .steps__subtitle

  &__subtitle {
    margin-bottom: 30px;

    @include mediaMin(768px) {
      margin-bottom: 60px;
    }
  }

  // .steps__list

  &__list {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
  }

  // .steps__item

  &__item {
    position: relative;
    max-width: 285px;
    width: 100%;

    &:not(:last-child) {
      &:after {
        position: absolute;
        content: "";
        width: 75%;
        height: 1px;
        background-color: $gray-300;
        right: 0;
        top: 20%;
      }
    }
  }

  // .steps__num

  &__num {
    display: inline-block;
    margin-bottom: 16px;

    font-weight: 900;
    font-size: 46px;
    line-height: 1.3;
    color: $gray-300;

    &--end {
      width: 84px;
      height: 84px;
      text-align: center;
      line-height: 80px;
      color: $primary;
      border-radius: 50%;
      background: linear-gradient(
        55.95deg,
        rgba(255, 63, 58, 0.12) 0%,
        rgba(247, 94, 5, 0.12) 100%
      );
      box-shadow: linear-gradient(
        55.95deg,
        rgba(255, 63, 58, 0.06) 0%,
        rgba(247, 94, 5, 0.06) 100%
      );
    }
  }

  // .steps__action

  &__action {
    font-weight: 700;
    font-size: 20px;
    color: $gray-900;
    margin-bottom: 8px;
  }

  // .steps__text

  &__text {
    font-size: 16px;
    line-height: 1.6;
    color: $gray-700;
  }

  // .steps__bottom-block

  &__bottom-block {
    margin-top: 177px;
    padding: 48px 60px;
    background: linear-gradient(
      55.95deg,
      rgba(255, 63, 58, 0.12) 0%,
      rgba(247, 94, 5, 0.12) 100%
    );
  }

  // .steps__inner

  &__inner {
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;

    @include mediaMin(768px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  // .steps__discount

  &__discount {
    font-weight: 900;
    font-size: 32px;
    line-height: 1.3;
    color: $gray-900;
  }

  // .steps__countdown

  &__countdown {
    display: flex;
    gap: 24px;
  }

  &__count-item {
    display: flex;
    flex-direction: column;
    font-size: 12px;
    color: $gray-900;
    align-items: center;
  }

  &__count-num {
    font-weight: 700;
    font-size: 20px;
    line-height: 1.3;
  }

  // .steps__form

  &__form {
    width: 100%;
  }
}

.register {
  display: flex;
  gap: 24px;

  @include mediaMax(991.9px) {
    max-width: 505px;
    width: 100%;
    margin: 0 auto;
  }

  &--vertical {
    flex-direction: column;
  }

  &--gorisontal {
    flex-direction: column;

    @include mediaMin(992px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
    }
  }

  // .register__label

  &__label {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: $gray-800;
  }

  // .register__input

  &__input {
    border: transparent;
    outline: transparent;
    padding: 12px 16px;
    border: 1px solid $gray-300;
    border-radius: 4px;

    &::placeholder {
      color: $gray-600;
    }
  }

  // .register__btn

  &__btn {
    margin-top: 16px;
    width: 100%;
    @include btn(36px, 44px, 14px);

    @include mediaMin(992px) {
      margin-top: 16px;
    }
  }

  &__comment {
    display: none;

    &--vertical {
      display: block;
      font-size: 16px;
      line-height: 1.6;
      color: $gray-800;
    }
  }
}

.whom {
  // .whom__title-wrap

  &__wrap {
    @include mediaMin(768px) {
      display: flex;
      gap: 20px;
      justify-content: space-between;
    }
  }

  // .whom__title

  &__title {
  }

  // .whom__subtitle

  &__subtitle {
  }

  // .whom__list

  &__list {
    max-width: 600px;
    width: 100%;
  }

  // .whom__item

  &__item {
    position: relative;
    font-weight: 700;
    font-size: 20px;
    color: $gray-800;
    padding-left: 36px;

    &:not(:last-child) {
      margin-bottom: 20px;
    }

    &::before {
      position: absolute;
      left: 0;
      content: url(../assets/images/icons/check.svg);
      filter: invert(47%) sepia(41%) saturate(4686%) hue-rotate(332deg)
        brightness(96%) contrast(123%);
    }
  }
}

.program {
  padding-bottom: 120px;

  // .program__title

  &__wrap {
    @include mediaMin(992px) {
      display: flex;
      justify-content: space-between;
      gap: 20px;
    }
  }

  // .program__subtitle

  &__subtitle {
    margin-bottom: 30px;

    @include mediaMin(768px) {
      margin-bottom: 60px;
    }
  }

  // .program__list

  &__list {
    max-width: 600px;
    width: 100%;
  }

  // .program__item

  &__item {
    position: relative;
    display: inline-block;

    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }

  // .program__lesson

  &__item-wrap {
    &._active {
      .program__lesson::after {
        display: none;
      }
    }
  }
  &__lesson {
    margin-right: 8px;
    padding-left: 40px;
    font-size: 20px;
    color: $primary;
    &:before {
      position: absolute;
      content: "";
      width: 20px;
      height: 1px;
      left: 0;
      top: 15px;
      background-color: $primary;
    }
    &:after {
      position: absolute;
      content: "";
      width: 20px;
      height: 1px;
      transform: rotate(90deg);
      left: 0;
      top: 15px;
      background-color: $primary;
    }
  }

  // .program__name-lesson

  &__name-lesson {
    display: inline-block;
    font-weight: 700;
    font-size: 20px;
    color: $gray-900;
  }

  // .program__text

  &__text {
    max-height: 0;
    overflow: hidden;
    margin: 0;
    transition: max-height 0.3s ease-out;
    //   &._active {
    //     max-height: auto;
    //     overflow: visible;
    //   }
  }

  &__img {
    max-width: 495px;
    width: 100%;
  }
}

.request {
  // .request__wrap

  &__wrap {
    display: flex;
    flex-direction: column;
    gap: 20px;

    @include mediaMin(992px) {
      flex-direction: row;
      justify-content: space-between;
    }

    &--reverse {
      @include mediaMin(992px) {
        flex-direction: row-reverse;
      }
    }
  }

  // .request__img

  &__img {
    max-width: 550px;
    width: 100%;
  }

  // .request__block

  &__block {
  }

  // .request__title

  &__title {
  }

  // .request__subtitle

  &__subtitle {
    margin-bottom: 40px;
  }
}

.course-register {
  padding-bottom: 100px;
  background-color: $gray-200;
}

.event-register {
  padding: 60px 0;

  @include mediaMin(992px) {
    padding: 120px 0;
  }
}

.check-course {
  padding: 60px 0;

  @include mediaMin(768px) {
    padding: 120px 0 180px;
  }
}

.check-event {
  padding: 60px 0;
  background-color: $gray-200;

  @include mediaMin(768px) {
    padding: 100px 0 180px;
  }
}

.explore {
  margin-top: 120px;
}
</style>
