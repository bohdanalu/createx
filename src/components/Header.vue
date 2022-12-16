<template>
  <header class="header" id="header">
    <div class="container">
      <div class="header__wrap">
        <a class="header__logo-link" href="#about">
          <img
            class="header__logo logo"
            src="./../assets/images/logo.svg"
            alt="Logo Createx"
          />
        </a>
        <div
          class="header__inner"
          :class="{ active: isActive }"
          v-bind="toggleClass"
        >
          <nav class="header__nav">
            <Menu />
          </nav>
          <button class="header__btn btn--gradient" type="button">
            Get consultation
          </button>
          <div class="header__log">
            <a class="header__log-item" href="#"> Log in </a>
            <span>/</span>
            <a class="header__log-item" href="#"> Register </a>
          </div>
        </div>
        <button
          class="burger"
          :class="{ active: isActive }"
          @click="toggleClass"
          type="button"
        ></button>
      </div>
    </div>
  </header>
</template>

<script>
import Menu from "./Menu.vue";

export default {
  components: {
    Menu,
  },

  props: {},

  data() {
    return {
      isActive: false,
    };
  },

  methods: {
    toggleClass(e) {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style lang="scss">
@import "./../assets/styles/main.scss";

.header {
  position: absolute;
  width: 100%;
  padding: 10px 0;
  z-index: 2;
  font-size: 24px;
  font-weight: 700;

  @include mediaMin(992px) {
    font-size: 16px;
    padding: 20px 0;
  }

  // .header__wrap

  &__wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  // .header__logo-link

  &__logo-link {
    display: inline;
    z-index: 5;
    margin-right: 40px;

    @include mediaMin(1200px) {
      margin-right: 60px;
    }
  }

  // .header__inner

  &__inner {
    position: absolute;
    transform: translateY(-500%);
    transition: all 0.7s ease;

    &.active {
      transform: translateY(0);
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 100px 25px 25px;
      text-align: center;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100vw;
      height: 100vh;
      background-color: $white;
      overflow-y: auto;
      transition: all 0.7s ease;
      z-index: 4;
    }

    @include mediaMin(992px) {
      position: static;
      transform: translateY(0);
      display: flex;
      flex-direction: row;
      align-items: center;
      flex: 1 1 auto;
      z-index: 4;
    }
  }

  // .header__nav

  &__nav {
    padding: 0 10xp;

    @include mediaMin(992px) {
      margin-right: auto;
    }
  }

  // .header__btn

  &__btn {
    width: 100%;
    @include btn(32px, 44px, 14px);

    @include mediaMin(992px) {
      max-width: 206px;
      margin: 0 15px;
    }

    @include mediaMin(1200px) {
      margin-right: 36px;
      @include btn(40px, 52px, 16px);
    }
  }

  // .header__log

  &__log {
    position: relative;
    padding-left: 32px;
    align-self: center;
    justify-self: end;
    @include mediaMin(1200px) {
      max-width: 210px;
      flex: 1 0 auto;
    }

    &::before {
      position: absolute;
      content: url("./../assets/images/icons/profile.svg");
      width: 24px;
      height: 24px;
      left: 0;
      top: 5px;

      @include mediaMin(992px) {
        width: 20px;
        height: 20px;
        top: auto;
      }
    }
  }

  // .header__log-item

  &__log-item {
    transition: all 0.2 ease-in-out;

    &:hover {
      @extend %hover;
    }
  }
}
</style>
