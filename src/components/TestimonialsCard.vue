<template>
  <blockquote class="testimonials__blockquote" :id="testimonials_data.id">
    <div class="testimonials__text">
      <p>
        {{ testimonials_data.text }}
      </p>
    </div>

    <div class="testimonials__user-profile">
      <img class="testimonials__img" :src="testimonials_data.img" alt="" />
      <div class="testimonials__user-info">
        <cite class="testimonials__user-name">{{
          testimonials_data.name
        }}</cite>
        <span class="testimonials__user-position"
          >Position, {{ testimonials_data.position }}</span
        >
      </div>
    </div>
  </blockquote>
</template>

<script>
export default {
  data() {
    return {};
  },

  props: {
    testimonials_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style lang="scss">
@import "./../assets/styles/main.scss";
.testimonials {
  &__blockquote {
    display: block;
    max-width: 1020px;
    padding: 20px 10px;
    background-color: $white;
    @extend %shadow;
    @extend %border;
    text-align: left;
    color: $gray-900;

    @include mediaMin(768px) {
      padding: 64px 105px;
    }
  }

  &__text {
    position: relative;
    padding-left: 38px;
    font-size: 20px;
    margin-bottom: 24px;

    @include mediaMin(768px) {
      padding-left: 58px;
      &::before {
        position: absolute;
        content: url(./../assets/images/icons/braces.svg);
        width: 28px;
        left: -30px;
      }
    }
  }

  // .testimonials__user-profile

  &__user-profile {
    padding-left: 58px;
    display: flex;
    gap: 20px;
    align-items: center;
  }

  // .testimonials__img

  &__img {
    width: 72px;
    height: 72px;
    border-radius: 50px;
    object-fit: cover;
  }

  // .testimonials__user-name

  &__user-name {
    display: block;
    font-size: 16px;
  }

  // .testimonials__user-position

  &__user-position {
    color: $gray-700;
  }
}
</style>
