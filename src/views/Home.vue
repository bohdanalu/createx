<template>
  <div class="home-page">
    <section class="about" id="about">
      <div class="container">
        <div class="about__inner">
          <div class="about__content-wrap">
            <div class="about__content">
              <a
                class="about__video"
                href="https://www.bing.com/videos/search?q=%d0%b4%d0%be%d0%b1%d1%80%d0%be%d0%b3%d0%be+%d0%b2%d0%b5%d1%87%d0%be%d1%80%d0%b0+%d0%bc%d0%b8+%d0%b7+%d1%83%d0%ba%d1%80%d0%b0%d1%97%d0%bd%d0%b8&docid=607998285368288627&mid=0F2B970CEBB80C239F1B0F2B970CEBB80C239F1B&view=detail&FORM=VIREHT"
              >
                <img
                  src="./../assets/images/icons/polygon.svg"
                  alt="Button play"
                />
              </a>
              <span class="about__play">Play showreel</span>
              <h1 class="about__title">
                Enjoy studying with Createx Online Courses
              </h1>
              <div class="about__btn-wrap">
                <RouterLink class="about__btn btn--light" to="/Courses"
                  >Explore courses</RouterLink
                >
                <RouterLink class="about__btn btn--light" to="/About"
                  >About us</RouterLink
                >
              </div>
            </div>
            <img
              class="about__img"
              src="./../assets/images/home_page/illustration.svg"
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
            src="./../assets/images/home_page/image_girl.jpg"
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
            <RouterLink class="why__btn btn--gradient" to="/About"
              >More about us</RouterLink
            >
          </div>
        </div>
      </div>
    </section>

    <section class="courses padding" id="courses">
      <div class="container">
        <div class="courses__head">
          <h2 class="courses__title title">Ready to learn?</h2>
          <h3 class="courses__subtitle subtitle">Featured Courses</h3>
          <RouterLink class="courses__btn btn--light" to="/Courses"
            >View all courses</RouterLink
          >
        </div>
        <div class="courses__catalog">
          <Card
            class="card--horisontal"
            v-for="card in cards"
            :key="card.id"
            :catalog_data="card"
          />
        </div>
      </div>
    </section>

    <section class="benefits padding">
      <div class="container">
        <h2 class="benefits__title title">Our benefits</h2>
        <h3 class="benefits__subtitle subtitle mb">That’s how we do it</h3>
        <ul class="benefits__list">
          <li class="benefits__item">
            <a
              class="benefits__link benefits__link--tutors"
              @click.prevent="setActive('tutors')"
              :class="{ active: isActive('tutors') }"
              href="#tutors"
            >
              Experienced Tutors
            </a>
          </li>
          <li class="benefits__item">
            <a
              class="benefits__link benefits__link--support"
              @click.prevent="setActive('support')"
              :class="{ active: isActive('support') }"
              href="#support"
            >
              Feedback & Support
            </a>
          </li>
          <li class="benefits__item">
            <a
              class="benefits__link benefits__link--library"
              @click.prevent="setActive('library')"
              :class="{ active: isActive('library') }"
              href="#library"
            >
              24/7 Online Library
            </a>
          </li>
          <li class="benefits__item">
            <a
              class="benefits__link benefits__link--community"
              @click.prevent="setActive('community')"
              :class="{ active: isActive('community') }"
              href="community"
            >
              Community
            </a>
          </li>
        </ul>
        <div class="benefits__content-wrap">
          <div
            class="benefits__content"
            :class="{ show: isActive('tutors') }"
            id="tutors"
          >
            <h4 class="benefits__content-title">Only practicing tutors</h4>
            <div class="benefits__text">
              <p>
                Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames
                dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis
                mollis augue. Nunc, sodales tortor sit diam mi amet massa.
                Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id
                dignissim massa ut amet. Amet enim, nisi tempus vehicula.
              </p>
            </div>
          </div>
          <div
            class="benefits__content"
            :class="{ 'active show': isActive('support') }"
            id="support"
          >
            <h4 class="benefits__content-title">Feedback and support</h4>
            <div class="benefits__text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus harum sed odio reiciendis dolores porro odit! Ea
                necessitatibus amet est? Molestiae hic rem perspiciatis odit?
              </p>
            </div>
          </div>
          <div
            class="benefits__content"
            :class="{ show: isActive('library') }"
            id="library"
          >
            <h4 class="benefits__content-title">Use library</h4>
            <div class="benefits__text">
              <p>
                Aenean quam est lobortis mi non fames dictum suspendisse. Morbi
                mauris cras massa ut dolor quis sociis mollis augue. Nunc,
                sodales tortor sit diam mi amet massa. Fermentum diam diam
                sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut
                amet.
              </p>
            </div>
          </div>
          <div
            class="benefits__content"
            :class="{ show: isActive('community') }"
            id="community"
          >
            <h4 class="benefits__content-title">Join our community</h4>
            <div class="benefits__text">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Suscipit, consectetur? Fuga quam amet cum minus facere voluptate
                dolorum quos, aliquid vitae vero labore corporis accusantium,
                autem molestias magni dolore harum quasi, laboriosam id. Quidem
                dolore, amet perferendis modi asperiores quam tenetur in unde
                aliquam, ipsam iusto excepturi temporibus veritatis dolor!
              </p>
            </div>
          </div>

          <img
            class="benefits__img"
            src="./../assets/images/home_page/illustration_benefits.svg"
            alt="Illustration about two people and computer"
          />
        </div>
      </div>
    </section>

    <section class="events-mini" id="events">
      <div class="container">
        <h2 class="events-mini__title title">Our events</h2>
        <h3 class="events-mini__subtitle subtitle mb">Lectures & workshops</h3>
        <div class="events-mini__list">
          <EventCard
            v-for="card in eventCards"
            :key="card.id"
            :event_data="card"
          />
        </div>
        <div class="explore">
          <span class="explore__label" for="explore">Do you want more?</span>
          <RouterLink class="explore__btn btn--gradient" to="/Events"
            >Explore all events</RouterLink
          >
        </div>
      </div>
    </section>
    <Certificate />
    <section class="team">
      <div class="container">
        <h2 class="team__title title">Best tutors are all here</h2>
        <h3 class="team__subtitle subtitle">Meet our team</h3>
        <CarouselTeamVue />
      </div>
    </section>
    <Testimonials />
    <BlogOurVue />
    <Subscribe />
  </div>
</template>
<script>
import Card from "./../components/Card.vue";
import CarouselTeamVue from "./../components/CarouselTeam.vue";
import BlogOurVue from "../components/BlogOur.vue";
import Subscribe from "./../components/Subscribe.vue";
import EventCard from "./../components/EventCard.vue";
import Certificate from "./../components/Certificate.vue";
import Testimonials from "./../components/Testimonials.vue";

export default {
  components: {
    Card,
    BlogOurVue,
    Subscribe,
    CarouselTeamVue,
    EventCard,
    Certificate,
    Testimonials,
  },
  data() {
    return {
      activeItem: "tutors",
      cards: [
        {
          id: 1,
          img: "/src/assets/images/card/bell.png",
          badge: "Marketing",
          title: "The Ultimate Google Ads Training Course",
          price: 100,
          speacer: "Jerome Bell",
        },
        {
          id: 2,
          img: "/src/assets/images/card/mcKinny.png",
          badge: "Managment",
          title: "Prduct Management Fundamentals",
          price: 480,
          speacer: "Marvin McKinney",
        },
        {
          id: 3,
          img: "/src/assets/images/card/li.png",
          badge: "HR & Recruting",
          title: "HR  Management and Analytics",
          price: 200,
          speacer: "Leslie Alexander Li",
        },
        {
          id: 4,
          img: "/src/assets/images/card/watson.png",
          badge: "Marketing",
          title: "Brand Management & PR Communications",
          price: 530,
          speacer: "Kristin Watson",
        },
        {
          id: 5,
          img: "/src/assets/images/card/russell.png",
          badge: "Managment",
          title: "Business Development Management",
          price: 400,
          speacer: "Dianne Russell",
        },
        {
          id: 6,
          img: "/src/assets/images/card/hawkins.png",
          badge: "Design",
          title: "Graphic Design Basic",
          price: 500,
          speacer: "Guy Hawkins",
        },
      ],
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
      ],
    };
  },
  methods: {
    accordionClick(el) {
      const list = el.target.nextElementSibling;
      if (list.style.maxHeight) {
        list.style.maxHeight = null;
        el.target.classList.remove("_active");
      } else {
        const allList = document.querySelectorAll(".footer__list");

        for (let i = 0; i < allList.length; i++) {
          if (allList[i].style.maxHeight) {
            allList[i].style.maxHeight = null;
            allList[i].previousElementSibling.classList.remove("_active");
          }
        }

        list.style.maxHeight = list.scrollHeight + "px";
        el.target.classList.add("_active");
      }
    },
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;
    },
    windowScroll() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss">
@import "./../assets/styles/main.scss";
.about {
  position: relative;
  height: 100vh;
  padding: 55px 0;
  width: 100%;
  background: url(../assets/images/bg_shapes/dots.svg) right 75% no-repeat,
    url(.//assets/images/bg_shapes/shapes_arrows_transform.svg) 82px 133px
      no-repeat,
    url(../assets/images/bg_shapes/shapes_arrows.svg) 95% top no-repeat,
    url(../assets/images/bg_shapes/circles_yellow.svg) left bottom no-repeat,
    url(../assets/images/bg_shapes/shapes-grey.svg) 47% 50% no-repeat,
    url(../assets/images/bg_shapes/Vector.svg) 40% 75% no-repeat,
    linear-gradient(
      55.95deg,
      rgba(255, 63, 58, 0.2) 0%,
      rgba(247, 94, 5, 0.2) 100%
    );

  @include mediaMin(762px) {
    padding: 80px 0;
  }

  @include landscape {
    padding: 55px 0;
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

    @include mediaMin(768px) {
      height: calc(100vh - 100px);
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

    @include mediaMin(1320px) {
      max-width: 550px;
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
    @include btn(24px, 36px, 14px);
    @include mediaMin(768px) {
      @include btn(40px, 52px, 16px);
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
    line-height: 1.3;

    @include mediaMin(768px) {
      flex-direction: row;
      gap: 12px;
      font-size: 36px;
    }

    @include mediaMin(992px) {
      font-size: 46px;
    }

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
    font-size: 13px;
    font-weight: 400;
    text-align: center;

    @include mediaMin(992px) {
      font-size: 16px;
    }
  }
}

.why {
  background: url(../assets/images/bg_shapes/dots_yellow.svg) left 45% no-repeat,
    url(../assets/images/bg_shapes/circles_yellow_2.svg) right bottom no-repeat;
  // .why__wrap

  &__wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;

    @include mediaMin(992px) {
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
      content: url(../assets/images/icons/check.svg);
      filter: invert(43%) sepia(40%) saturate(6077%) hue-rotate(339deg)
        brightness(104%) contrast(101%);
      object-fit: contain;
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
    @include btn(32px, 44px, 14px);
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
    @include btn(40px, 52px, 16px);
    align-self: flex-end;
  }
}

.benefits {
  position: relative;
  text-align: center;
  padding-bottom: 120px;
  &::after {
    position: absolute;
    content: url(./assets/images/bg_shapes/circles_gradient.svg);
    right: 0;
    bottom: -15%;
  }

  // .benefits__list

  &__list {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 60px;
  }

  // .benefits__item

  &__item {
    width: 100%;
    color: $gray-600;
    font-weight: 700;

    @include mediaMin(768px) {
      width: 25%;
    }
  }

  // .benefits__link

  &__link {
    display: block;
    border: 1px solid transparent;
    padding: 10px 24px;
    font-size: 16px;
    line-height: 1.6;
    &.active {
      color: $primary;
      border: 1px solid $primary;
      &::before {
        filter: invert(36%) sepia(78%) saturate(3345%) hue-rotate(341deg)
          brightness(101%) contrast(102%);
      }
    }

    &:hover {
      border: 1px solid $primary;
      color: $primary;
      @extend %hover;
      &::before {
        filter: invert(36%) sepia(78%) saturate(3345%) hue-rotate(341deg)
          brightness(101%) contrast(102%);
      }
    }

    &::before {
      content: "";
      filter: invert(72%) sepia(3%) saturate(703%) hue-rotate(192deg)
        brightness(87%) contrast(90%);
      width: 16px;
      height: 16px;
      margin-right: 8px;
    }

    &--tutors {
      &::before {
        content: url("../assets/images/icons/star.svg");
        filter: invert(72%) sepia(3%) saturate(703%) hue-rotate(192deg)
          brightness(87%) contrast(90%);
      }
    }

    &--support {
      &::before {
        content: url("../assets/images/icons/like.svg");
      }
    }

    &--library {
      &::before {
        content: url("../assets/images/icons/layouts.svg");
      }
    }

    &--community {
      &::before {
        content: url("../assets/images/icons/chat.svg");
      }
    }
  }

  // .benefits__content-wrap

  &__content-wrap {
    @include mediaMin(768px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  &__content {
    scale: 0;
    width: 0;
    height: 0;

    &.show {
      transition: all 0.4s ease-in;
      width: auto;
      height: auto;
      scale: 1;
    }
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
    width: 100%;
    object-fit: contain;

    @include mediaMin(768px) {
      width: calc((600px * 100%) / 1260px);
    }
  }
}

.events-mini {
  padding: 80px 0;
  background: linear-gradient(
    55.95deg,
    rgba(255, 63, 58, 0.2) 0%,
    rgba(247, 94, 5, 0.2) 100%
  );
  text-align: center;

  // .events__list

  &__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin-bottom: 60px;
  }
}

.team {
  padding-top: 66px;
  background: url(./assets/images/bg_shapes/Vector.svg) 10% 10% no-repeat,
    url(./assets/images/bg_shapes/shapes_arrows_transform.svg) 101% 80%
      no-repeat;
  background-color: $gray-200;
  @include mediaMin(768px) {
    padding-top: 166px;
  }

  // .team__subtitle

  &__subtitle {
    margin-bottom: 60px;
  }

  // .team__list

  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;

    @include mediaMin(992px) {
      justify-content: space-around;
    }

    @include mediaMin(1200px) {
      justify-content: space-between;
    }
  }

  // .team__item

  &__item {
    max-width: 285px;
    width: 100%;
  }
}

.explore {
  // .explore__label

  &__label {
    font-weight: 700;
    font-size: 28px;
  }
}
</style>
