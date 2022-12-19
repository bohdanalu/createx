<template>
  <li class="social__item" v-for="item in social" key="social_data.id">
    <a class="social__link" href="">
      <img :src="social_date.img" alt="social_date.alt" />
    </a>
  </li>
</template>

<script>
export default {
  date() {
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
};
</script>
