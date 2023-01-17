<template>
  <article class="event-card" :id="event_data.id">
    <time class="event-card__date" datetime="05-08 14:00">
      <span class="event-card__num">{{ event_data.data.date }}</span>
      <span class="event-card__month">{{ event_data.data.month }}</span>
      <span class="event-card__time">{{ event_data.data.hour }}</span>
    </time>
    <div class="event-card__content">
      <p>
        {{ event_data.title }}
      </p>
      <span> {{ event_data.event }} </span>
    </div>
    <RouterLink class="event-card__btn btn--light" to="/Event"
      >View more</RouterLink
    >
  </article>
</template>

<script>
export default {
  data() {
    return {};
  },

  props: {
    event_data: {
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
.event-card {
  max-width: 390px;
  width: 100%;
  height: 323px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: $white;
  border: 1px solid $gray-300;
  border-radius: 4px;

  &:hover {
    @extend %shadow-hover;
  }

  &.vertical {
    @extend %shadow;
    max-width: 390px;
    width: 100%;
    height: 323px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: start;
    background-color: $white;
    border: 1px solid $gray-300;
    border-radius: 4px;

    @include mediaMin(768px) {
      max-width: 355px;
      width: 100%;
      height: 323px;
      padding: 24px;
    }

    @include mediaMin(992px) {
      max-width: 390px;
      width: 100%;
    }

    .event-card__date {
      margin-bottom: 20px;
      display: grid;
      grid-template-columns: 40px 1fr;
      text-align: left;

      //   @include mediaMin(768px) {
      //     grid-template-columns: auto auto;
      //     margin-bottom: 0;
      //     column-gap: 20px;
      //   }
    }

    .event-card__month {
      position: relative;

      &::after {
        position: absolute;
        left: 51px;
        content: "";
        width: 80px;
        height: 45px;
        background-color: $white;

        @include mediaMin(768px) {
          display: none;
        }
      }
    }

    .event-card__num,
    .event-card__month {
      font-weight: 700;
      font-size: 28px;
      color: $primary;
    }

    .event-card__date {
      margin-bottom: 20px;
      display: grid;
      grid-template-columns: 40px 1fr;
      text-align: left;
    }

    .event-card__btn {
      width: 100%;
      text-align: center;
      @include btn(32px, 44px, 14px);
    }
  }

  &.gorisontal {
    @include mediaMin(768px) {
      max-width: 1230px;
      width: 100%;
      height: auto;
      gap: 40px;
      padding: 32px 40px;
      flex-direction: row;
      gap: 40px;
      box-shadow: none;
    }

    .event-card__num {
      @include mediaMin(768px) {
        grid-row: span 2;
        font-weight: 900;
        font-size: 48px;
        line-height: 1.3;
        letter-spacing: 1px;
      }
    }

    .event-card__date {
      margin-bottom: 20px;
      display: grid;
      grid-template-columns: 40px 1fr;
      text-align: left;

      @include mediaMin(768px) {
        grid-template-columns: auto auto;
        margin-bottom: 0;
        column-gap: 20px;
      }
    }
  }

  // .event-card__date

  &__num,
  &__month {
    font-weight: 700;
    font-size: 28px;
    color: $primary;
  }

  &__month {
    position: relative;

    @include mediaMin(768px) {
      font-size: 20px;
      color: $gray-900;
    }

    &::after {
      position: absolute;
      left: 51px;
      content: "";
      width: 80px;
      height: 45px;
      background-color: $white;

      @include mediaMin(768px) {
        display: none;
      }
    }
  }

  &__time {
    color: $gray-700;
    font-size: 16px;
    white-space: nowrap;
  }

  // .event-card__content

  &__content {
    text-align: left;
    margin-bottom: auto;
    padding-right: 40px;

    @include mediaMin(768px) {
      padding-right: 0;
      margin-right: auto;
    }

    p {
      margin-bottom: 8px;
      font-size: 18px;
      font-weight: 700;
      color: $gray-900;
      @include line-clamp(3);
    }

    span {
      color: $gray-700;
      font-size: 16px;
    }
  }

  // .event-card__btn

  &__btn {
    width: 100%;
    text-align: center;
    @include btn(32px, 44px, 14px);

    @include mediaMin(768px) {
      width: 136px;
    }
  }
}
</style>
