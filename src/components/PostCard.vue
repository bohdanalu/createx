<template>
  <li class="blog__post" :class="post_data.classItem" :id="post_data.id">
    <article class="blog__post-card post">
      <span class="post__badge" :class="post_data.class">{{
        post_data.badge
      }}</span>
      <img class="post__img" :src="post_data.img" alt="" />
      <div class="post__info">
        <div class="post__meta">
          <span class="post__position">{{ post_data.position }}</span>
          <time class="post__date" datetime="2020-09-04">{{
            post_data.date
          }}</time>
          <span class="post__lenght">{{ post_data.lenght }}</span>
        </div>
        <h2 class="post__title">
          {{ post_data.title }}
        </h2>
        <div class="post__text">
          <p>
            {{ post_data.text }}
          </p>
        </div>
      </div>
      <a class="post__btn" href="">{{ post_data.btn }}</a>
    </article>
  </li>
</template>

<script>
export default {
  data() {
    return {};
  },

  props: {
    post_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.post {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;

  // .post__badge

  &__badge {
    position: absolute;
    padding: 1px 8px 1px 28px;
    top: 12px;
    left: 12px;
    background: $white;
    border-radius: 4px;

    &--video {
      &::before {
        content: url(./../assets/images/icons/play.svg);
      }
    }

    &--article {
      &::before {
        content: url(./../assets/images/icons/files.svg);
      }
    }

    &--podcast {
      &::before {
        content: url(./../assets/images/icons/mic.svg);
      }
    }

    &::before {
      position: absolute;
      width: 16px;
      height: 16px;
      left: 8px;
      top: 2px;
    }
  }

  // .post__img

  &__img {
    width: 100%;
    max-height: 300px;
    border-radius: 4px;
  }

  // .post__meta

  &__meta {
    margin-bottom: 8px;
    color: $gray-700;
  }

  // .post__position

  &__position {
    padding-right: 12px;
    border-right: 1px solid $gray-700;
  }

  // .post__date

  &__date {
    padding: 0 12px;
    border-right: 1px solid $gray-700;
  }

  // .post__lenght

  &__lenght {
    padding-left: 12px;
  }

  // .post__title

  &__title {
    font-weight: 700;
    font-size: 20px;
    color: $gray-900;
  }

  // .post__text

  &__text {
    font-size: 16px;
    line-height: 1.6;
    color: $gray-800;
    @include line-clamp(2);
  }

  // .post__btn

  &__btn {
    position: relative;
    display: inline-flex;
    padding-right: 32px;
    max-width: 75px;
    width: 100%;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.6;
    color: $gray-900;
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
