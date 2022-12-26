<template>
  <div class="contact-page">
    <section class="contacts padding">
      <div class="container">
        <div class="contacts__wrap">
          <div class="contacts__info">
            <h2 class="contacts__title title">Contact info</h2>
            <h3 class="contacts__subtitle subtitle">Get in touch</h3>
            <span class="contacts__label"> Talk to us: </span>
            <a class="contacts__link" href="tel:4055550128">(405) 555-0128</a>
            <span class="contacts__label"> Call us: </span>
            <a class="contacts__link" href="mailto:hello@createx.com"
              >hello@createx.com</a
            >
            <span class="contacts__label"> Address: </span>
            <span class="contacts__link"
              >2464 Royal Ln. Mesa, New Jersey 45463, USA</span
            >
            <h2 class="contacts__title title">Follow us:</h2>
            <ul class="social">
              <Social
                v-for="item in social"
                :key="item.id"
                :social_data="item"
              />
            </ul>
          </div>
          <img
            class="contacts__img"
            src="../assets/images/map.jpg"
            alt="Location"
          />
        </div>
      </div>
    </section>

    <section class="question padding">
      <div class="container">
        <div class="question__wrap">
          <img
            class="question__img"
            src="../assets/images/contact_woman.svg"
            alt="Illustracion for contact"
          />
          <div class="question__block">
            <h2 class="question__title title">Any questions?</h2>
            <h3 class="question__subtitle subtitle">Drop us a line</h3>
            <form class="question__form form-qw" action="">
              <label class="form-qw__label" for="firstName"
                >First Name*
                <input
                  class="form-qw__input"
                  type="text"
                  required
                  id="firstName"
                  placeholder="Your first name"
                />
              </label>

              <label class="form-qw__label" for="lastName"
                >Last Name*
                <input
                  class="form-qw__input"
                  type="text"
                  required
                  id="lastName"
                  placeholder="Your last name"
                />
              </label>

              <label class="form-qw__label" for="mail"
                >Email*
                <input
                  class="form-qw__input"
                  type="text"
                  required
                  id="mail"
                  placeholder="Your working email"
                />
              </label>

              <label class="form-qw__label" for="phone"
                >Phone*
                <input
                  class="form-qw__input"
                  type="text"
                  id="phone"
                  placeholder="Your phone number"
                />
              </label>

              <label class="form-qw__label form-qw__label--msg" for="msg"
                >Message*
                <textarea
                  class="form-qw__area"
                  name="msg"
                  id="msg"
                  rows="10"
                  placeholder="Your message"
                  required
                ></textarea>
              </label>

              <input
                class="form-qw__checkbox checkbox"
                type="checkbox"
                name="check"
                id="check"
              />
              <label class="form-qw__label form-qw__label--check" for="check"
                >I agree to receive communications from Createx Online
                School</label
              >
              <button class="form-qw__btn btn--gradient">Send message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Social from "../components/Social.vue";

export default {
  components: {
    Social,
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
          id: "s5",
          img: "/src/assets/images/icons/social/youTube.svg",
          alt: "You Tube",
        },
        {
          id: "s6",
          img: "/src/assets/images/icons/social/telegram.svg",
          alt: "Telegram",
        },
        {
          id: "s2",
          img: "/src/assets/images/icons/social/instagram.svg",
          alt: "Instagram",
        },

        {
          id: "s4",
          img: "/src/assets/images/icons/social/linked-In.svg",
          alt: "LinkedIn",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
@import "../assets/styles/main.scss";

.contacts {
  // .contacts__info

  &__wrap {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__info {
  }

  // .contacts__title

  &__title {
    margin-bottom: 24px;
  }

  // .contacts__subtitle

  &__subtitle {
    margin-bottom: 40px;
  }

  // .contacts__label

  &__label {
    display: block;
    font-weight: 700;
    color: $gray-700;
  }

  // .contacts__link

  &__link {
    display: block;
    font-size: 18px;
    color: $gray-900;
    margin-bottom: 24px;
  }

  // .contacts__img

  &__img {
    margin-top: 30px;
    max-width: 705px;
    width: 100%;
    object-fit: cover;
  }
}

.question {
  margin-bottom: 60px;

  @include mediaMin(992px) {
    margin-bottom: 180px;
  }
  // .question__wrap

  &__wrap {
    display: flex;
  }

  // .question__img

  &__img {
    display: none;

    @include mediaMin(992px) {
      display: block;
      margin-top: 30px;
      max-width: 435px;
      width: 100%;
    }
  }

  // .question__block

  &__bl {
  }

  // .question__title

  &__title {
  }

  // .question__subtitle

  &__subtitle {
    margin-bottom: 40px;
  }

  // .question__form

  &__form {
  }
}

.form-qw {
  max-width: 705px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  font-size: 16px;
  line-height: 1.6;
  // .form-qw__label

  &__label {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: calc((100% - 25px) / 2);

    color: $gray-800;

    &--msg {
      width: 100%;
    }

    &--check {
      width: 80%;

      @include mediaMin(768px) {
        max-width: 287px;
        width: 100%;
      }
    }
  }

  // .form-qw__input

  &__input,
  &__area {
    padding: 13px 16px;
    border: 1px solid $gray-300;
    border-radius: 4px;

    &::placeholder {
      color: $gray-600;
      font-size: 16px;
    }
  }

  // .form-qw__area

  &__area {
    width: 100%;
    resize: none;
    font-family: "Lato", sans-serif;
  }

  &__btn {
    flex-grow: 1;
    @include btn(40px, 52px, 16px);
  }
}

// .social {
//   display: flex;
// }
</style>
