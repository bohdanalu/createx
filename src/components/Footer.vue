<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrap">
        <div class="footer__block">
          <RouterLink class="header__logo-link" to="/">
            <img
              class="footer__logo logo"
              src="./../assets/images/logo_white.svg"
              alt="Logo Createx"
            />
          </RouterLink>
          <div class="footer__text">
            <p>
              Createx Online School is a leader in online studying. We have lots
              of courses and programs from the main market experts. We provide
              relevant approaches to online learning, internships and employment
              in the largest companies in the country.
            </p>
          </div>
          <div class="footer__social-wrap">
            <ul class="social">
              <Social
                v-for="item in social"
                :key="item.id"
                :social_data="item"
              />
            </ul>
          </div>
        </div>
        <div class="footer__block">
          <h2 class="footer__title" @click="accordionClick($event)">
            Site map
          </h2>
          <Menu class="footer__list" />
        </div>
        <div class="footer__block">
          <h2 class="footer__title" @click="accordionClick($event)">Courses</h2>
          <ul class="footer__list">
            <li class="footer__item">
              <a class="footer__link" href=""> Marketing </a>
            </li>
            <li class="footer__item">
              <a class="footer__link" href=""> Manadgment </a>
            </li>
            <li class="footer__item">
              <a class="footer__link" href=""> HR & Recruting </a>
            </li>
            <li class="footer__item">
              <a class="footer__link" href=""> Design </a>
            </li>
            <li class="footer__item">
              <a class="footer__link" href=""> Development </a>
            </li>
          </ul>
        </div>
        <div class="footer__block">
          <h2 class="footer__title" @click="accordionClick($event)">
            Contacts
          </h2>
          <ul class="footer__list">
            <li class="footer__item">
              <a class="footer__link" href="">(405) 555-0128</a>
            </li>
            <li class="footer__item">
              <a class="footer__link" href="">hello@createx.com</a>
            </li>
          </ul>
        </div>
        <div class="footer__block">
          <h2 class="footer__title footer__title--sign">
            Sign up to our newsletter
          </h2>
          <form class="footer__form" action="">
            <label for="mail"></label>
            <input
              class="footer__mail"
              type="email"
              name="mail"
              placeholder="Email address"
              required
            />
            <button class="footer__btn" type="submit">
              <img
                src="../assets/images/icons/arrow-white-w.svg"
                alt="Button submit mail"
              />
            </button>
          </form>

          <span class="footer__comment"
            >*Subscribe to our newsletter to receive communications and early
            updates from Createx SEO Agency.</span
          >
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="container">
        <div class="footer__copiring">
          <span class="footer__copiring-info"
            >All right reserved. Made with
            <img
              class="footer__heart"
              src="./../assets/images/icons/heart.svg"
              alt=""
            />
            by Createx Studio.</span
          >
          <a class="footer__btn-up" href="#header">Go to top</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Menu from "./Menu.vue";
import Social from "./Social.vue";
export default {
  components: {
    Menu,
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
  },
};
</script>

<style lang="scss" scoped>
@import "./../assets/styles/main.scss";

.footer {
  background-color: $gray-900;
  color: $white;

  // .footer__wrap

  &__wrap {
    display: flex;
    flex-direction: column;
    padding: 60px 0 80px;
    gap: 25px;
    @include mediaMin(992px) {
      flex-direction: row;
      justify-content: space-between;
    }

    @include mediaMin(1200px) {
      gap: 80px;
    }
  }

  // .footer__block

  &__block {
    display: flex;
    flex-direction: column;

    @include mediaMin(992px) {
      max-width: 286px;
      width: 100%;
    }
  }

  // .footer__logo

  &__logo {
    max-width: 130px;
    width: 100%;
    margin-bottom: 25px;
  }

  // .footer__text

  &__text {
    margin-bottom: 38px;
    opacity: 0.6;

    @include mediaMin(1200px) {
      max-width: 280px;
    }
  }

  // .footer__title

  &__title {
    position: relative;
    margin-bottom: 12px;
    font-weight: 700;
    font-size: 20px;
    letter-spacing: 1px;
    text-transform: uppercase;
    white-space: nowrap;

    &:after {
      position: absolute;
      content: url(./../assets/images/icons/chevron.svg);
      transform: rotate(90deg);
      width: 24px;
      height: 24px;
      right: 10px;
      top: 5px;
      transition: all 0.3s ease;
      @include mediaMin(992px) {
        content: "";
      }
    }

    &._active {
      &:after {
        transform: rotate(-90deg);
        transition: all 0.3s ease;
      }
    }

    &--sign {
      margin-bottom: 24px;
      &:after {
        content: "";
      }
    }

    @include mediaMin(992px) {
      font-size: 16px;
    }
  }

  // .footer__list

  &__list {
    max-height: 0;
    overflow: hidden;
    margin: 0;
    transition: max-height 0.3s ease-out;
    padding-bottom: 5px;
    border-bottom: 1px solid $gray-300;
    font-size: 22px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    @include mediaMin(992px) {
      max-height: auto;
      overflow: visible;
      font-size: 16px;
      padding-bottom: 0;
      border-bottom: none;
    }
  }

  &__item {
    opacity: 0.6;
    transition: opacity 0.2s ease;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease;
    }
  }

  // .footer__form

  &__form {
    position: relative;
  }

  // .footer__mail

  &__mail {
    width: 100%;
    margin-bottom: 12px;
    padding: 9px 30px 9px 12px;
    background: rgba(255, 255, 255, 0.12);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: $white;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      border: 1px solid rgba(255, 255, 255, 0.5);
    }
  }

  // .footer__btn

  &__btn {
    position: absolute;
    width: 16px;
    height: 16px;
    right: 12px;
    top: 10px;
    opacity: 0.6;
    border: transparent;
    background-color: transparent;
  }

  // .footer__comment

  &__comment {
    opacity: 0.6;
  }

  // .footer__bottom

  &__bottom {
    background-color: rgba(255, 255, 255, 0.05);
  }

  // .footer__copiring

  &__copiring {
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    flex-direction: column-reverse;
    gap: 15px;

    @include mediaMin(768px) {
      flex-direction: row;
    }
  }
  // .footer__copiring-info

  &__copiring-info {
    font-size: 12px;
    opacity: 0.6;
  }

  // .footer__heart

  &__heart {
    position: relative;
    bottom: -4px;
    width: 16px;
    height: 16px;
    object-fit: contain;
    margin: 0 4px;
    filter: invert(36%) sepia(88%) saturate(2919%) hue-rotate(341deg)
      brightness(101%) contrast(92%);
  }
  // .footer__btn

  &__btn-up {
    font-weight: 700;
    text-transform: uppercase;
    opacity: 0.6;

    &:hover {
      opacity: 1;
    }
  }
}
</style>

<style lang="scss">
@import "./../assets/styles/main.scss";

.menu.footer__list > .menu__item {
  opacity: 0.6;
  transition: opacity 0.2s ease;
  &:hover {
    opacity: 1;
    transition: opacity 0.2s ease;
  }
}
</style>

<style lang="scss" scoped>
@import "./../assets/styles/main.scss";

.footer__social-wrap :deep {
  .social {
    gap: 20px;

    &__item {
      width: 24px;
      height: 24px;
      filter: invert(100%) sepia(0%) saturate(7427%) hue-rotate(23deg)
        brightness(118%) contrast(118%);
    }
    &__link {
      opacity: 0.6;
      transition: opacity 0.2s ease;
      &:hover {
        opacity: 1;
        transition: opacity 0.2s ease;
      }
    }
  }
}
</style>
