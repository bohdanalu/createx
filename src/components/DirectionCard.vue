<template>
  <li class="direction__item" :id="direction_data.id">
    <article class="direction-card">
      <img
        class="direction-card__img"
        :src="direction_data.img"
        :alt="direction_data.alt"
      />
      <span class="direction-card__badge" :class="direction_data.class">{{
        direction_data.badge
      }}</span>
      <div class="direction-card__text">
        <p>
          {{ direction_data.text }}
        </p>
      </div>
      <RouterLink class="direction-card__btn" to="/Courses"
        >Check courses</RouterLink
      >
    </article>
  </li>
</template>

<script>
export default {
  data() {
    return {};
  },

  props: {
    direction_data: {
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
@import "../assets/styles/main.scss";
.direction-card {
  max-width: 390px;
  width: 100%;
  height: 420px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
  padding: 24px;
  border: 1px solid $gray-300;
  border-radius: 4px;
  font-size: 16px;
  line-height: 1.6;

  // .direction-card__img

  &__img {
    width: 100%;
    object-fit: cover;
  }

  // .direction-card__badge

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

    &--dev {
      background-color: $purple;
    }
  }

  // .direction-card__text

  &__text {
    text-align: left;
    color: $gray-700;
  }

  &__btn {
    position: relative;
    font-weight: 700;
    color: $gray-900;
    padding-right: 32px;
    &::after {
      position: absolute;
      content: url(../assets/images/icons/arrow_primary.svg);
      right: 0;
      top: 10%;
    }
    &:hover {
      color: $primary;
    }
  }
}
</style>
