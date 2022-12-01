<template>
  <article class="courses__card card" id="{{id}}">
    <a class="card__link" href="">
      <img class="card__img" src="{{} img }}" alt="" />
      <div class="card__content">
        <span class="card__badge card__badge--marketing">{{ badge }}</span>
        <h4 class="card__title">{{ title }}</h4>
        <div class="card__info">
          <span class="card__price">
            <span class="card__currency">$</span>{{ price }}</span
          >
          <span class="card__speacer"> | by {{ speacer }} </span>
        </div>
      </div>
    </a>
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
};
</script>

<style lang="scss">
@import "./../assets/styles/main.scss";

.card {
  width: 100%;
  border: 1px solid $gray-300;
  box-shadow: 0px 80px 80px -20px rgba(154, 156, 165, 0.08),
    0px 30px 24px -10px rgba(154, 156, 165, 0.05),
    0px 12px 10px -6px rgba(154, 156, 165, 0.04),
    0px 4px 4px -4px rgba(30, 33, 44, 0.03);
  border-radius: 4px;

  @include mediaMin(768px) {
    display: flex;
    transition: box-shadow 0.3s ease;
  }

  &:hover {
    transition: box-shadow 0.3s ease;
    box-shadow: 0px 80px 80px -20px rgba(154, 156, 165, 0.16),
      0px 30px 24px -10px rgba(154, 156, 165, 0.1),
      0px 12px 10px -6px rgba(154, 156, 165, 0.08),
      0px 4px 4px -4px rgba(30, 33, 44, 0.05);
  }

  // .card__img

  &__img {
    width: 100%;
    height: 214px;
    object-fit: cover;

    @include mediaMin(768px) {
      width: calc((214px * 100%) / 600px);
    }
  }

  // .card__content

  &__content {
    padding: 24px;
    height: 198px;
  }

  // .card__badge

  &__bage {
    display: inline-block;
    color: $white;
    font-weight: 400;
    padding: 1px 8px;
    border-radius: 4px;
    margin-bottom: 20px;

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

  // .card__badge--marketing

  &__bage--marketing {
  }

  // .card__title

  &__title {
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 700;
    color: $gray-900;
  }

  // .card__info

  &__info {
    font-size: 18px;
  }

  // .card__price

  &__price {
    color: $danger;
    font-weight: 700;
    // padding-right: 8px;
  }

  // .card__currency

  &__currency {
  }

  // .card__speacer

  &__speacer {
    display: inline-block;
    // padding-left: 8px;
    color: $gray-700;
    // border-left: 1px solid $gray-700;
  }
}
</style>
