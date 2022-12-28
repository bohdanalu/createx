<template>
  <header class="header" id="header">
    <div class="container">
      <div class="header__wrap">
        <RouterLink class="header__logo-link" to="/">
          <img
            class="header__logo logo"
            src="./../assets/images/logo.svg"
            alt="Logo Createx"
        /></RouterLink>
        <div
          class="header__inner"
          :class="{ active: isActive }"
          v-bind="toggleClass"
        >
          <nav class="header__nav">
            <Menu class="header__menu" />
          </nav>
          <button class="header__btn btn--gradient" type="button">
            Get consultation
          </button>
          <div class="header__log">
            <button
              class="header__log-item"
              type="button"
              id="show-modal-in"
              @click="showModalIn = true"
            >
              Log in
            </button>
            <span> / </span>
            <button
              class="header__log-item"
              id="show-modal-up"
              @click="showModalUp = true"
              type="button"
            >
              Register
            </button>
            <Teleport to="body">
              <ModalSingUP :show="showModalUp" @close="showModalUp = false">
                <template #header>
                  <button
                    class="modal-default-button"
                    @click="showModalUp = false"
                  ></button>
                  <h2 class="modal__title">{{ singUp.title }}</h2>
                  <span class="modal__comment">{{ singUp.comment }}</span>
                </template>
                <template #body>
                  <form class="madal__form form-modal" action="">
                    <label class="form-modal__label" for="fullName"
                      >Full Name
                      <input
                        class="form-modal__input"
                        type="text"
                        id="fuulName"
                        placeholder="Your full Name"
                      />
                    </label>
                    <label class="form-modal__label" for="email"
                      >Email
                      <input
                        class="form-modal__input"
                        type="email"
                        id="email"
                        placeholder="Your working email"
                      />
                    </label>
                    <label class="form-modal__label" for="password"
                      >Password
                      <input
                        class="form-modal__input"
                        type="password"
                        id="password"
                        placeholder="Your password"
                      />
                    </label>
                    <label class="form-modal__label" for="pswConfirm">
                      Confirm Password
                      <input
                        class="form-modal__input"
                        type="password"
                        id="pswCongirm"
                        placeholder="Your password"
                      />
                    </label>
                    <label
                      class="form-modal__label form-modal__label--check"
                      for="check"
                    >
                      <input
                        class="form-modal__check checkbox"
                        type="checkbox"
                        name="check"
                        id="check"
                      />
                      {{ singUp.check }}
                    </label>
                    <button class="form-modal__btn btn--gradient" type="submit">
                      {{ singUp.title }}
                    </button>
                  </form>
                  <span class="modal__qw"
                    >{{ singUp.qw }} <a href="">Sign in</a></span
                  >
                </template>
                <template #footer>
                  <span class="modal__sign">Or sign with</span>
                </template>
              </ModalSingUP>
              <ModalSingIn :show="showModalIn" @close="showModalIn = false">
                <template #header>
                  <button
                    class="modal-default-button"
                    @click="showModalIn = false"
                  ></button>
                  <h2 class="modal__title">{{ singIn.title }}</h2>
                  <span class="modal__comment">{{ singIn.comment }}</span>
                </template>
                <template #body>
                  <form class="madal__form form-modal" action="">
                    <label class="form-modal__label" for="email"
                      >Email
                      <input
                        class="form-modal__input"
                        type="email"
                        id="email"
                        placeholder="Your working email"
                      />
                    </label>
                    <label class="form-modal__label" for="password"
                      >Password
                      <input
                        class="form-modal__input"
                        type="password"
                        id="password"
                        placeholder="Your password"
                      />
                    </label>
                    <div class="form-modal-wrap">
                      <label
                        class="form-modal__label form-modal__label--check"
                        for="check"
                      >
                        <input
                          class="form-modal__check checkbox"
                          type="checkbox"
                          name="check"
                          id="check"
                          :checked="(isHide = false)"
                        />
                        {{ singIn.check }}
                      </label>
                      <a
                        class="form-modal__link"
                        :class="{ hide: isHide }"
                        href=""
                        >Forgot password?</a
                      >
                    </div>

                    <button class="form-modal__btn btn--gradient" type="submit">
                      {{ singIn.title }}
                    </button>
                  </form>
                  <span class="modal__qw"
                    >{{ singIn.qw }} <a href="">Sign in</a></span
                  >
                </template>
                <template #footer>
                  <span class="modal__sign">Or sign with</span>
                </template>
              </ModalSingIn>
            </Teleport>
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
import ModalSingUP from "./SingUp.vue";
import ModalSingIn from "./SingIn.vue";

export default {
  components: {
    Menu,
    ModalSingUP,
    ModalSingIn,
  },

  props: {},

  data() {
    return {
      isActive: false,
      showModalIn: false,
      showModalUp: false,
      isHide: true,
      singUp: {
        name: "ModalSignUp",
        title: "Sign up",
        comment:
          "Registration takes less than a minute but gives you full control over your studying.",
        qw: "Already have an account?",
        check: "Remember me",
      },
      singIn: {
        name: "ModalSignIn",
        title: "Sign in",
        comment:
          "Sign in to your account using email and password provided during registration.",
        qw: "Don't have an account?",
        check: "Keep me signed in",
      },
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
    width: 100%;
    transform: translateY(-200%);
    transition: all 0.5s ease;

    &.active {
      transform: translateY(0);
      transition: all 0.5s ease;
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
      left: 0;
      top: 5px;

      @include mediaMin(992px) {
        top: 3px;
      }
    }
  }

  // .header__log-item

  &__log-item {
    font-weight: 700;
    font-size: 16px;
    line-height: 1.6;
    color: $gray-800;
    background-color: transparent;
    border: transparent;
    outline: transparent;
    transition: all 0.2 ease-in-out;

    &:hover {
      @extend %hover;
    }
  }
}

.modal {
  // .modal_qw

  &__qw {
    color: $gray-800;
    a {
      color: $primary;
    }
  }

  // .modal__title

  &__title {
    font-weight: 700;
    font-size: 28px;
    color: $gray-900;
    margin-bottom: 2.2%;
    text-align: center;
  }

  // .modal__comment

  &__comment {
    color: $gray-700;
    text-align: center;
    display: block;
    text-align: center;
  }

  // .modal__sign

  &__sign {
    display: block;
    color: $gray-700;
    text-align: center;
    margin-bottom: 16px;
  }
}

.form-modal {
  display: flex;
  flex-direction: column;
  gap: 12px;

  @include mediaMin(1320px) {
    gap: 24px;
  }
  // .form-modal__label

  &__label {
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: $gray-800;

    &--check {
      flex-direction: row;
      gap: 24px;
    }
  }

  &__link {
    color: $primary;
    &.hide {
      display: none;
    }
  }

  // .form-modal__input

  &__input {
    width: 100%;
    padding: 11px 16px 12px;
    border: 1px solid $gray-300;
    &:placeholder {
      color: $gray-600;
    }
  }

  // .form-modal__check

  &__check {
    align-self: start;
  }

  // .form-modal__btn

  &__btn {
    @include btn(32px, 44px, 14px);
    margin-bottom: 12px;
    @include mediaMin(1320px) {
      margin-bottom: 24px;
    }
  }
}

.modal-default-button {
  position: absolute;
  right: 24px;
  top: 24px;
  width: 24px;
  height: 24px;
  background-image: url(./../assets/images/icons/cross.svg);
  @extend %bg-position;
  background-color: transparent;
  border: transparent;
  outline: transparent;
}
</style>

<style lang="scss">
@import "./../assets/styles/main.scss";
.header__menu .menu__item {
  font-size: 24px;
  transition: all 0.2s ease;

  &:hover {
    @extend %hover;
  }

  @include mediaMin(992px) {
    font-size: 16px;
  }

  .router-link-active {
    color: $primary;
  }
}
</style>
