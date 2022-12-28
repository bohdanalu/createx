<template>
  <section class="subscribe-art">
    <div class="container">
      <div class="subscribe-art__wrap">
        <div class="subscribe-art__wrap-img">
          <img
            class="subscribe-art__img"
            src="../assets/images/illustration-article.svg"
            alt=""
          />
        </div>

        <div class="subscribe-art__inner">
          <h3 class="subscribe-art__title">
            Want to get the best articles weekly? Subscribe to our newsletter!
          </h3>
          <form class="subscribe-art__form" action="">
            <label class="subscribe-art__label" for="email">
              <input
                class="subscribe__input"
                type="email"
                placeholder="Your working email"
                id="email"
                required
              />
            </label>

            <button class="subscribe__btn btn--gradient" type="submit">
              Subscribe
            </button>
            <label class="subscribe-art__label" for="checkbox">
              <input class="checkbox" type="checkbox" name="" id="checkbox" />
              I agree to receive communications from Createx Online School
            </label>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "../assets/styles/main.scss";

.subscribe-art {
  // .subscribe-art__wrap
  background-color: $gray-200;

  &__wrap {
    display: flex;
    justify-content: space-between;
    flex-direction: column-reverse;
    align-items: center;
    @include mediaMin(992px) {
      flex-direction: row;
    }
  }

  // .subscribe-art__img

  &__wrap-img {
    max-width: 507px;
    width: 100%;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  // .subscribe-art__inner

  &__inner {
    max-width: 600px;
    width: 100%;
  }

  &__title {
    font-size: 32px;
    font-weight: 900;
    color: $gray-900;
    margin: 48px 0;
    @include mediaMin(992px) {
      margin: 0 0 48px;
    }
  }

  &__form {
    width: 100%;
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &__label {
    max-width: 412px;
    width: 100%;
    display: flex;
    gap: 32px;
  }
}

.subscribe {
  // .subscribe__subtitle

  &__subtitle {
  }

  // .subscribe__form

  &__form {
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
  }
}
</style>
