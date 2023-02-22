<template>
  <li class="social__item" :id="social_data.id">
    <a class="social__link" href="">
      <img
        class="social__img"
        :src="getImageUrl(social_data.img)"
        :alt="social_data.alt"
      />
    </a>
  </li>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    social_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  methods: {
    getImageUrl(imgName) {
      return new URL(
        `/src/assets/images/icons/social/${imgName}`,
        import.meta.url
      ).href;
    },
  },
};
</script>

<style lang="scss">
@import "./../assets/styles/main.scss";
.social {
  display: flex;
  gap: 12px;

  &__item {
    width: 20px;
    height: 20px;
    @extend %filter-gray;
    &:hover {
      @extend %filter-primary;
    }
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
