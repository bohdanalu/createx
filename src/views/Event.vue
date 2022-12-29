<template>
  <div class="event-page">
    <section class="hero-mini">
      <div class="container">
        <h2 class="hero-mini__title title">Online lecture</h2>
        <h3 class="hero-mini__subtitle subtitle">
          Formation of the organizational structure of the company in the face
          of uncertainty
        </h3>
      </div>
    </section>

    <section class="about-event">
      <div class="container">
        <div class="about-event__wrap">
          <div class="about-event__info">
            <h2 class="about-event__title subtitle">We will talk about:</h2>
            <ul class="about-event__program program__list">
              <li class="program__item">
                <div class="program__item-wrap" @click="accordionClick($event)">
                  <span class="program__lesson"> Theme 1. </span>
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
                  <span class="program__lesson"> Theme 2. </span>
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
                <div class="program__item-wrap" @click="accordionClick($event)">
                  <span class="program__lesson"> Theme 3. </span>
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
                  <span class="program__lesson"> Theme 4. </span>
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
            </ul>
          </div>
          <div class="about-course__sidebar sidebar">
            <div class="sidebar__block">
              <h3 class="sidebar__title">Time</h3>
              <span class="sidebar__info"> August 5, 11:00 – 14:00 </span>
              <div class="sidebar__text">
                Metus turpis sit lorem lacus, in elit tellus lacus.
              </div>
            </div>
            <div class="sidebar__block sidebar__block--hide">
              <h3 class="sidebar__title">Duration</h3>
              <span class="sidebar__info"> 2 months – 8 lessons </span>
              <div class="sidebar__text">2 months – 8 lessons</div>
            </div>
            <div class="sidebar__block">
              <h3 class="sidebar__title">Price</h3>
              <span class="sidebar__info"> Free </span>
              <div class="sidebar__text">
                Nulla sem adipiscing adipiscing felis fringilla. Adipiscing
                mauris quam ac elit tristique dis.
              </div>
            </div>
            <div class="sidebar__block">
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
              src="../assets/images/team/murphy.png"
              alt=""
            />
          </div>
          <div class="person__info">
            <h2 class="person__title title">Speaker</h2>
            <h3 class="person__subtitle subtitle">Kathryn Murphy</h3>
            <span class="person__position"
              >Analyst and Marketing specialist in IT company</span
            >
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
            <ul class="person__brands brands">
              <li class="brands-item">
                <img
                  src="../assets/images/brand/Del_Mar_Strategy.png"
                  alt="Del Mar Strategy"
                />
              </li>
              <li class="brands-item">
                <img
                  src="../assets/images/brand/Sentinal_Consulting.png"
                  alt="Sentinal Consulting"
                />
              </li>
              <li class="brands-item">
                <img
                  src="../assets/images/brand/National_Health.png"
                  alt="National Health"
                />
              </li>
            </ul>
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

    <section class="subscribe-mini">
      <div class="container">
        <div class="subscribe-mini__wrap">
          <img
            class="subscribe-mini__img"
            src="../assets/images/illustration-subscr.svg"
            alt=""
          />
          <div class="subscribe-mini__content">
            <h3 class="subscribe-mini__subtitle subtitle">
              Don’t want to miss the best events? Subscribe to our newsletter!
            </h3>
            <form class="subscribe-mini__form subscribe__form" action="">
              <input
                class="subscribe__input"
                type="email"
                placeholder="Your working email"
              />
              <button class="subscribe__btn btn--gradient" type="submit">
                Subscribe
              </button>
              <label for=""></label>
              <label class="subscribe-mini__box" for=""
                ><input
                  class="subscribe-mini__checkbox checkbox"
                  type="checkbox"
                />
                I agree to receive communications from Createx Online
                School</label
              >
            </form>
          </div>
        </div>
      </div>
    </section>

    <section class="event-register request padding">
      <div class="container">
        <div class="request__wrap request__wrap--reverse">
          <img
            class="request__img"
            src="../assets/images/illustration-event.svg"
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
    <section class="check-event check">
      <div class="container">
        <h2 class="check__title title">Check other online events</h2>
        <h3 class="check__subtitle subtitle mb">You may be interested in</h3>
        <div class="check__slider">
          <CarouselEvents />
        </div>
        <div class="check__wrap-btn explore">
          <span class="explore__label" for="explore">Do you want more?</span>
          <RouterLink class="explore__btn btn--gradient" to="/Events"
            >Explore all events</RouterLink
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CarouselEvents from "../components/CarouselEvents.vue";
import Social from "../components/Social.vue";

export default {
  components: {
    Social,
    CarouselEvents,
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
.about-event {
  margin-top: 60px;

  @include mediaMin(768px) {
    margin-top: 120px;
  }

  // .about-event__wrap

  &__wrap {
    display: flex;
    flex-direction: column;
    gap: 30px;

    @include mediaMin(768px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  // .about-event__info

  &__info {
  }

  // .about-event__title

  &__title {
  }
}
// .about-event__program

.subscribe-mini {
  margin-top: 60px;
  padding: 60px 20px;
  background: linear-gradient(
    55.95deg,
    rgba(255, 63, 58, 0.2) 0%,
    rgba(247, 94, 5, 0.2) 100%
  );

  @include mediaMin(768px) {
    margin-top: 180px;
  }

  // .subscribe-mini__wrap

  &__wrap {
    @include mediaMin(992px) {
      display: flex;
      gap: 20px;
      justify-content: space-between;
    }
  }

  // .subscribe-mini__img

  &__img {
    display: none;

    @include mediaMin(992px) {
      display: block;
      max-width: 308px;
      width: 100%;
    }
  }

  // .subscribe-mini__content

  &__content {
    max-width: 745px;
    width: 100%;
  }

  // .subscribe-mini__subtitle

  &__subtitle {
    margin-bottom: 48px;
  }

  &__form {
    &.subscribe__form {
      justify-content: start;
    }

    justify-content: start;
  }

  &__box {
    width: 100%;
    display: flex;
    gap: 28px;
    align-items: baseline;
  }

  &__checkbox {
    top: -13px;
  }
}

.subscribe {
  &__form {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;
  }

  // .subscribe__input

  &__input {
    max-width: 422px;
    width: 100%;
    padding: 13px 16px;
    outline: transparent;
    border: transparent;
    font-size: 16px;
    line-height: 1.6;
    color: $gray-600;
  }

  // .subscribe__btn

  &__btn {
    @include btn(40px, 52px, 16px);
  }
}
</style>
