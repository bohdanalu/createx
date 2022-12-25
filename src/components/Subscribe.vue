<template>
  <section class="subscribe">
    <div class="container">
      <h2 class="subscribe__title title">Don’t miss anything</h2>
      <h3 class="subscribe__subtitle subtitle">
        Subscribe to the Createx School announcements
      </h3>
      <form class="subscribe__form" action="">
        <input
          class="subscribe__input"
          type="email"
          placeholder="Your working email"
          required
        />
        <button class="subscribe__btn btn--gradient" type="submit">
          Subscribe
        </button>
      </form>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.subscribe {
  padding: 60px 0 100px;
  background: url(../assets/images/illustration.svg) center bottom no-repeat,
    linear-gradient(
      55.95deg,
      rgba(255, 63, 58, 0.2) 0%,
      rgba(247, 94, 5, 0.2) 100%
    );
  text-align: center;

  @include mediaMin(768px) {
    padding: 120px 0 180px;
    background: url(../assets/images/illustration.svg) left bottom no-repeat,
      url(../assets/images/illustration.svg) right bottom no-repeat,
      linear-gradient(
        55.95deg,
        rgba(255, 63, 58, 0.2) 0%,
        rgba(247, 94, 5, 0.2) 100%
      );
  }

  // .subscribe__subtitle

  &__subtitle {
    max-width: 800px;
    margin: 0 auto 60px;
  }

  // .subscribe__form

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
