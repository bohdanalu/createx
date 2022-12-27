<template>
  <div class="about-page">
    <section class="about">
      <div class="container">
        <div class="about__inner">
          <div class="about__content-wrap">
            <div class="about__content">
              <h2 class="title">About us</h2>
              <h3 class="about__subtitle subtitle">Createx Online School</h3>
              <h4 class="about__info">
                Createx Online School is a leader in online studying. We have
                lots of courses and programs from the main market experts.
              </h4>
              <div class="about__text">
                <p>
                  We provide relevant approaches to online learning, internships
                  and employment in the largest companies in the country. Our
                  educational programs help you get a new specialty from
                  scratch. During your studies, we will help you find a job.
                  Check the courses and online events that we organise..
                </p>
              </div>
              <div class="about__btn-wrap">
                <!-- <a class="about__btn btn--light" href=" #">Explore events</a>
                <a class="about__btn btn--light" href=" #">Browse courses</a> -->
                <RouterLink class="about__btn btn--light" to="/Events"
                  >Explore events</RouterLink
                >
                <RouterLink class="about__btn btn--light" to="/Courses"
                  >Browse courses</RouterLink
                >
              </div>
            </div>
            <img
              class="about__img"
              src="./../assets/images/illustration_about_us.svg"
              alt="Picture about girl is sitting by computer"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="video padding">
      <div class="container">
        <a class="video__btn about__video" href="#">
          <img src="./../assets/images/icons/polygon.svg" alt="Button play" />
        </a>
        <div class="video__wrap">
          <img
            class="video__img"
            src="./../assets/images/image_video.jpg"
            alt=""
          />
          <ul class="video__statistic">
            <li class="video__item">
              <span class="video__item-num">1200</span>
              <span class="video__item-label">Students graduated</span>
            </li>
            <li class="video__item">
              <span class="video__item-num">84</span>
              <span class="video__item-label">Completed courses</span>
            </li>
            <li class="video__item">
              <span class="video__item-num">16</span>
              <span class="video__item-label">Qualified tutors</span>
            </li>
            <li class="video__item">
              <span class="video__item-num">5</span>
              <span class="video__item-label">Years of experience</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="values padding">
      <div class="container">
        <h2 class="values__title title">We always stand for</h2>
        <h3 class="values__subtitle subtitle mb">Our core values</h3>
        <ul class="values__list">
          <li class="values__item values__item--approach">
            <h3 class="values__name">Structured Approach</h3>
            <div class="values__text">
              <p>
                Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.
              </p>
            </div>
          </li>
          <li class="values__item values__item--feedback">
            <h3 class="values__name">Professional Feedbacks</h3>
            <div class="values__text">
              <p>
                Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.
              </p>
            </div>
          </li>
          <li class="values__item values__item--efficienty">
            <h3 class="values__name">Efficiency</h3>
            <div class="values__text">
              <p>
                Viverra scelerisque consequat net. Adipisicing esse consequat.
              </p>
            </div>
          </li>
          <li class="values__item values__item--shedule">
            <h3 class="values__name">Flexible Shedule</h3>
            <div class="values__text">
              <p>Aute eiusmod dolore dolore deserunt veniam ad deserunt.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section class="direction padding">
      <div class="container">
        <h2 class="direction__title title">Our main directions</h2>
        <h3 class="direction__subtitle subtitle mb">What do we teach</h3>
        <ul class="direction__list">
          <DirectionCardVue
            v-for="card in directionCards"
            :key="card.id"
            :direction_data="card"
          />
          <li class="direction__item">
            <article class="direction-card direction-card--soon">
              <span class="direction-card__soon"
                >New studying program coming soon...</span
              >
            </article>
          </li>
        </ul>
      </div>
    </section>

    <section class="process padding">
      <div class="container">
        <div class="process__wrap">
          <div class="process__content">
            <h2 class="process__title title">Studying process</h2>
            <h3 class="process__subtitle subtitle mb">That’s how we do it</h3>
            <ul class="process__list">
              <li class="process__item">
                <span class="process__step">STEP 1</span>
                <h4 class="process__name">Watching online video lectures</h4>
                <div class="process__text">
                  <p>
                    Aliquam turpis viverra quam sit interdum blandit posuere
                    pellentesque. Nisl, imperdiet gravida massa neque.
                  </p>
                </div>
              </li>
              <li class="process__item">
                <span class="process__step">STEP 2</span>
                <h4 class="process__name">Passing test</h4>
                <div class="process__text">
                  <p>
                    Facilisis pellentesque quis accumsan ultricies. Eu egestas
                    eget feugiat lacus, amet, sollicitudin egestas laoreet
                    etiam.
                  </p>
                </div>
              </li>
              <li class="process__item">
                <span class="process__step">STEP 3</span>
                <h4 class="process__name">Curator’s feedback</h4>
                <div class="process__text">
                  <p>
                    Eget amet, enim pharetra leo egestas nisi, odio imperdiet
                    facilisis. Aliquet orci varius volutpat egestas facilisi
                    lobortis.
                  </p>
                </div>
              </li>
              <li class="process__item">
                <span class="process__step">STEP 4</span>
                <h4 class="process__name">Corrections if needed</h4>
                <div class="process__text">
                  <p>
                    Non tempor pulvinar tincidunt aliquam. Placerat ultricies
                    malesuada dui auctor.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <img
            class="process__img"
            src="../assets/images/bg_shapes/illustration_process.svg"
            alt="illustration process"
          />
        </div>
      </div>
    </section>

    <section class="our-team padding">
      <div class="container">
        <h2 class="our-team__title title">Best tutors are all here</h2>
        <h3 class="our-team__subtitle subtitle mb">Meet our team</h3>
        <div class="our-team__list">
          <TeamCardVue
            class="our-team__card"
            v-for="card in teamCards"
            v-if="(teamCards.length = 8)"
            :key="card.id"
            :team_data="card"
          />
        </div>
      </div>
    </section>

    <Testimonials />

    <section class="work padding">
      <div class="container">
        <h2 class="work__title">best jobs for you</h2>
        <h3 class="work__subtitle subtitle mb">Our students work here</h3>
        <ul class="work__list-brends">
          <li class="work__item brands-item">
            <a class="work__link" href="">
              <img
                class="work__img brands-item"
                src="../assets/images/brand/In_Dept.svg"
                alt=""
              />
            </a>
          </li>
          <li class="work__item brands-item">
            <a class="work__link" href="">
              <img
                class="work__img"
                src="../assets/images/brand/Higher.svg"
                alt=""
              />
            </a>
          </li>
          <li class="work__item brands-item">
            <a class="work__link" href="">
              <img
                class="work__img"
                src="../assets/images/brand/Sentinal_Consulting.png"
                alt=""
              />
            </a>
          </li>
          <li class="work__item brands-item">
            <a class="work__link" href="">
              <img
                class="work__img"
                src="../assets/images/brand/Happy_home.png"
                alt=""
              />
            </a>
          </li>
          <li class="work__item brands-item">
            <a class="work__link" href="">
              <img
                class="work__img"
                src="../assets/images/brand/For_sale.png"
                alt=""
              />
            </a>
          </li>
          <li class="work__item brands-item">
            <a class="work__link" href="">
              <img
                class="work__img"
                src="../assets/images/brand/Sunset.png"
                alt=""
              />
            </a>
          </li>
          <li class="work__item brands-item">
            <a class="work__link" href="">
              <img
                class="work__img"
                src="../assets/images/brand/Atlantis_Health.svg"
                alt=""
              />
            </a>
          </li>
          <li class="work__item brands-item">
            <a class="work__link" href="">
              <img
                class="work__img"
                src="../assets/images/brand/Del_Mar_Strategy.png"
                alt=""
              />
            </a>
          </li>
          <li class="work__item brands-item">
            <a class="work__link" href="">
              <img
                class="work__img"
                src="../assets/images/brand/Complete.svg"
                alt=""
              />
            </a>
          </li>
          <li class="work__item brands-item">
            <a class="work__link" href="">
              <img
                class="work__img"
                src="../assets/images/brand/National_Health.png"
                alt=""
              />
            </a>
          </li>
          <li class="work__item brands-item">
            <a class="work__link" href="">
              <img
                class="work__img"
                src="../assets/images/brand/Ultimate.png"
                alt=""
              />
            </a>
          </li>
          <li class="work__item brands-item">
            <a class="work__link" href="">
              <img
                class="work__img"
                src="../assets/images/brand/Unated_Strategy.svg"
                alt=""
              />
            </a>
          </li>
        </ul>
      </div>
    </section>

    <BlogOur />

    <Subscribe />
  </div>
</template>

<script>
import Testimonials from "../components/Testimonials.vue";
import DirectionCardVue from "../components/DirectionCard.vue";
import TeamCardVue from "../components/TeamCard.vue";
import BlogOur from "../components/BlogOur.vue";
import Subscribe from "../components/Subscribe.vue";

export default {
  components: {
    DirectionCardVue,
    TeamCardVue,
    Testimonials,
    BlogOur,
    Subscribe,
  },
  data() {
    return {
      directionCards: [
        {
          id: "dir1",
          img: "src/assets/images/direction/d-marketing.jpg",
          badge: "Marketing",
          class: "direction-card__badge--marketing",
          text: "Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.",
          alt: "lorem ipsum",
        },
        {
          id: "dir2",
          img: "src/assets/images/direction/d-manadgment.jpg",
          badge: "Managment",
          class: "direction-card__badge--management",
          text: "Eget dictum eu viverra faucibus. Viverra scelerisque consequat.Odio posuere netus quisque faucibus lectus arcu donec.",
          alt: "lorem ipsum",
        },
        {
          id: "dir3",
          img: "src/assets/images/direction/d-hr.jpg",
          badge: "HR & Recruting",
          class: "direction-card__badge--hr",
          text: "Eget dictum eu viverra faucibus. Viverra scelerisque consequat.Odio posuere netus quisque faucibus lectus arcu donec.",
          alt: "lorem ipsum",
        },
        {
          id: "dir4",
          img: "src/assets/images/direction/d-design.jpg",
          badge: "Design",
          class: "direction-card__badge--design",
          text: "Eget dictum eu viverra faucibus. Viverra scelerisque consequat.Odio posuere netus quisque faucibus lectus arcu donec.",
          alt: "lorem ipsum",
        },
        {
          id: "dir5",
          img: "src/assets/images/direction/d-dev.jpg",
          badge: "Development",
          class: "direction-card__badge--dev",
          text: "Eget dictum eu viverra faucibus. Viverra scelerisque consequat.Odio posuere netus quisque faucibus lectus arcu donec.",
          alt: "lorem ipsum",
        },
      ],
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
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "./../assets/styles/main.scss";
.video {
  padding-top: 50px;

  @include mediaMin(768px) {
    padding-top: 100px;
  }

  // .video__wrap

  &__wrap {
    @include mediaMin(992px) {
      display: flex;
      gap: calc((135px * 100%) / 1920px);
      align-items: center;
    }
  }

  &__btn.about__video {
    margin-bottom: 32px;
  }

  &__img {
    max-width: 810px;
    width: 100%;
    object-fit: contain;
    flex-shrink: 1;
  }

  // .video__statistic

  &__statistic {
    max-width: 295px;
    flex-grow: 1;
  }

  // .video__item

  &__item {
    display: flex;
    align-items: center;
    gap: 16px;
    font-weight: 900;

    &:not(:last-child) {
      margin-bottom: 20px;
    }

    @include mediaMin(992px) {
      flex-direction: column;
      align-items: start;
      display: flex;
    }

    @include mediaMin(1200px) {
      flex-direction: row;
      align-items: center;
    }
  }
  &__item-label {
    font-weight: 700;
    font-size: 18px;
    color: $gray-900;
  }

  &__item-num {
    font-size: 24px;
    line-height: 1.3;
    letter-spacing: 1px;
    color: $primary;
    @include mediaMin(1200px) {
      font-size: 48px;
    }
  }
}

.values {
  background: url(../assets/images/bg_shapes/dots_yellow.svg) 15% -15% no-repeat,
    url(../assets/images/bg_shapes/shapes_yellow.svg) 95% 25% no-repeat;
  text-align: center;

  // .values__list

  &__list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    row-gap: 30px;
    flex-wrap: wrap;
  }

  // .values__item

  &__item {
    position: relative;
    max-width: 295px;
    width: 100%;
    padding-top: 72px;

    @include mediaMin(1200px) {
      &:not(:last-child) {
        &:after {
          content: "";
          position: absolute;
          width: 1px;
          background: linear-gradient(
            270.01deg,
            rgba(218, 219, 221, 0) 0%,
            rgba(218, 219, 221, 0.5) 12.33%,
            #dadbdd 51.91%,
            rgba(218, 219, 221, 0.5) 87.85%,
            rgba(218, 219, 221, 0) 100%
          );
          height: 100%;
          bottom: 0;
          right: 0;
        }
      }
    }

    &--approach {
      &::before {
        content: url(./../assets/images/values/ic-structure.svg);
      }
    }
    &--feedback {
      &::before {
        content: url(./../assets/images/values/ic-chat.svg);
      }
    }
    &--efficienty {
      &::before {
        content: url(./../assets/images/values/ic-target.svg);
      }
    }
    &--shedule {
      &::before {
        content: url(./../assets/images/values/ic-shedule.svg);
      }
    }
    &:before {
      position: absolute;
      top: 0;
      left: 45%;
    }
  }

  // .values__item

  &__name {
    font-weight: 700;
    font-size: 20px;
    color: $gray-900;
  }

  &__text {
    font-size: 16px;
    line-height: 1.6;
    color: $gray-700;
  }

  // .values__img

  &__img {
    margin-bottom: 24px;
  }
}

.direction {
  text-align: center;

  // .direction__list

  &__list {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
  }

  // .direction__item

  &__item {
    width: 100%;
    @include mediaMin(768px) {
      width: 45%;
    }

    @include mediaMin(992px) {
      max-width: 390px;
      width: 100%;
    }
  }

  .direction-card {
    max-width: 390px;
    width: 100%;
    height: 420px;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
    padding: 24px;
    border: 1px solid $gray-300;
    border-radius: 4px;
    font-size: 16px;
    line-height: 1.6;
    &--soon {
      background-color: $gray-200;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__soon {
      padding: 0 50px;
      font-weight: 700;
      font-size: 20px;
    }
  }
}

.process {
  // .process__title

  &__title {
  }

  // .process__subtitle

  &__subtitle {
  }

  // .process__wrap

  &__wrap {
    @include mediaMin(992px) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  // .process__list

  &__list {
    max-width: 495px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 32px;
  }

  // .process__item

  &__item {
    position: relative;
    padding-left: 40px;
    &:before {
      position: absolute;
      content: "";
      width: 8px;
      height: 8px;
      background-color: $primary;
      border-radius: 50%;
      top: 4px;
      left: -4px;
    }
    &::after {
      position: absolute;
      content: "";
      width: 1px;
      height: 132%;
      background-color: $gray-600;
      top: 4px;
      left: -1px;
      z-index: -1;
    }

    &:last-child {
      &::after {
        height: 100%;
      }
    }
  }

  // .process__step

  &__step {
    font-weight: 900;
    font-size: 12px;
    color: $gray-700;
  }

  // .process__step

  &__name {
    font-weight: 700;
    font-size: 20px;
    color: $gray-900;
  }

  // .process__text

  &__text {
    line-height: 1.6;
    color: $gray-700;
    font-size: 16px;
  }

  &__img {
    max-width: 525px;
    width: 100%;
    margin-top: 68px;
  }
}

.our-team {
  padding-bottom: 60px;

  @include mediaMin(768px) {
    padding-bottom: 120px;
  }

  // .our-team__list

  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  }

  // .our-team__card

  &__card {
    max-width: 285px;
    width: 100%;
    box-shadow: none;
  }
}

.work {
  background-color: $gray-200;
  padding-bottom: 50px;
  text-align: center;
  z-index: -1;

  @include mediaMin(768px) {
    padding-bottom: 100px;
  }

  // .work__subtitle

  &__subtitle {
  }

  // .work__list-brends

  &__list-brends {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    column-gap: 70px;
    row-gap: 40px;

    @include mediaMin(768px) {
      justify-content: space-between;
    }
  }

  // .work__item

  // .work__link

  &__link {
  }

  // .work__img

  &__img {
  }

  // data-v-f22b56f8
}
</style>

<style lang="scss" scoped>
@import "./../assets/styles/main.scss";

.about {
  height: auto;
  background: none;
  background-color: $white;
  height: fit-content;
  padding: 85px 0 0;

  @include landscape {
    padding: 55px 0 0;
  }

  @include mediaMin(1200px) {
    padding: 180px 0 0;
  }

  // .about__inner

  &__inner {
    height: fit-content;
  }

  // .about__content-wrap

  &__subtitle {
    margin-bottom: 48px;
  }

  // .about__content

  &__content {
    max-width: 600px;
    width: 100%;
    padding-top: 0;
  }
  &__info {
    font-weight: 700;
    font-size: 20px;
    color: $gray-900;
    margin-bottom: 24px;
  }

  &__text {
    font-size: 16px;
    line-height: 1.6;
    color: $gray-800;
    margin-bottom: 40px;

    @include mediaMin(768px) {
      margin-bottom: 60px;
    }
  }
  // .about__img

  &__img {
    max-width: 465px;
    width: 100%;
  }

  &__btn {
    cursor: pointer;
    @include btn(40px, 52px, 16px);

    @include mediaMax(768px) {
      @include btn(20px, 32px, 14px);
    }
  }
}

.our-team {
  text-align: center;
}
</style>
