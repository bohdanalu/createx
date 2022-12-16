<template>
  <article class="courses__card card" :id="catalog_data.id">
    <a class="card__link" href="">
      <img class="card__img" :src="catalog_data.img" alt="" />
    </a>
    <div class="card__content">
      <span class="card__badge card__badge--marketing">{{
        catalog_data.badge
      }}</span>
      <h4 class="card__title">{{ catalog_data.title }}</h4>
      <div class="card__info">
        <span class="card__price">
          <span class="card__currency">$</span>{{ catalog_data.price }}
        </span>
        <span class="card__speacer"> by {{ catalog_data.speacer }} </span>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {};
  },

  props: {
    catalog_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  computed: {},
};
</script>

<style lang="scss">
@import "./../assets/styles/main.scss";

.card {
  @extend %border;
  @extend %shadow;
  display: flex;
  transition: box-shadow 0.3s ease;

  // &__card {
  //   max-width: 390px;
  //   width: 100%;

  //   @include mediaMin(992px) {
  //     max-width: 600px;
  //     width: calc(50% - 15px);
  //   }
  // }

  &--horisontal {
    max-width: 390px;
    width: 100%;
    height: 438px;
    flex-direction: column;

    @include mediaMin(768px) {
      flex-direction: row;
      max-width: 600px;
      width: 100%;
      height: 214px;

      .card__link {
        max-width: 214px;
        width: 100%;
        height: 100%;
      }

      @include mediaMin(992px) {
        max-width: 600px;
        width: calc(50% - 15px);
      }

      @include mediaMin(1200px) {
        .card__content {
          padding: 32px;
        }
      }
    }
  }

  &--vertical {
    max-width: 390px;
    width: 100%;
    height: 438px;
    flex-direction: column;
  }

  &:hover {
    @extend %shadow-hover;
  }

  // .card__img

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  // .card__content

  &__content {
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
  }

  // .card__badge

  &__badge {
    display: inline-block;
    color: $white;
    font-weight: 400;
    padding: 1px 8px;
    border-radius: 4px;

    &--marketing {
      background-color: $green;
    }

    &--management {
      background-color: $blue;
    }

    &--hr {
      background-color: $orange;
    }

    &--design {
      background-color: $pink;
    }
  }

  // .card__title

  &__title {
    font-size: 20px;
    font-weight: 700;
    color: $gray-900;
    @include line-clamp(2);
  }

  // .card__info

  &__info {
    margin-top: auto;
    font-size: 18px;
    white-space: nowrap;
  }

  // .card__price

  &__price {
    color: $danger;
    font-weight: 700;
    padding-right: 8px;
  }

  // .card__currency

  &__currency {
    display: inline-block;
  }

  // .card__speacer

  &__speacer {
    display: inline-block;
    padding-left: 8px;
    color: $gray-700;
    border-left: 1px solid $gray-700;
  }
}
</style>
