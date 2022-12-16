<template>
  <section class="certificate">
    <div class="container">
      <div class="certificate__wrap">
        <div class="certificate__content">
          <h2 class="certificate__title title">Createx Certificate</h2>
          <h3 class="certificate__subtitle subtitle">
            Your expertise will be confirmed
          </h3>
          <div class="certificate__text">
            <p>
              We are accredited by international professional organizations and
              institutes:
            </p>
          </div>
          <ul class="certificate__list brands">
            <li class="brands__item">
              <a href="">
                <img
                  src="./../assets/images/brand/Del_Mar_Strategy.png"
                  alt="Del Mar Strategy"
                />
              </a>
            </li>
            <li class="brands__item">
              <a href="">
                <img
                  src="./../assets/images/brand/Sentinal_Consulting.png"
                  alt="Sentinal Consulting"
                />
              </a>
            </li>
            <li class="brands__item">
              <a href="">
                <img
                  src="./../assets/images/brand/National_Health.png"
                  alt="National Health"
                />
              </a>
            </li>
          </ul>
        </div>
        <div class="certificate__img-container">
          <img
            class="certificate__img certificate__img--absolute"
            src="./../assets/images/home_page/certificate.png"
            alt="certificate"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

<style lang="scss">
@import "./../assets/styles/main.scss";
.certificate {
  padding: 60px 0;

  @include mediaMin(768px) {
    padding: 120px 0;
  }

  // .certificate__wrap

  &__wrap {
    display: flex;
    flex-direction: column;
    gap: 50px;

    @include mediaMin(768px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  // .certificate__content

  &__content {
    max-width: 392px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  // .certificate__subtitle

  &__subtitle {
    margin-bottom: 20px;

    @include mediaMin(992px) {
      margin-bottom: 48px;
    }
  }

  // .certificate__text

  &__text {
    font-size: 16px;
    margin-bottom: 32px;
  }

  // .certificate__img-container

  &__img-container {
    position: relative;
    max-width: 705px;
    width: 100%;
  }

  // .certificate__img

  &__img {
    width: 100%;
    object-fit: cover;
    border: 1px solid $gray-300;
    @extend %border;
    @extend %shadow-hover;

    &--absolute {
      @include mediaMin(768px) {
        position: absolute;
        max-height: 500px;
        z-index: 1;
      }
    }
  }
}

.brands {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @include mediaMin(768px) {
    gap: 30px;
  }

  &__item {
    max-width: 105px;
    width: 100%;
  }
}
</style>
