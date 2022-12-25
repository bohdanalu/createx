<template>
  <ul class="menu">
    <li class="menu__item" @click="removeClass">
      <RouterLink to="/About">About us</RouterLink>
    </li>
    <li class="menu__item" @click="removeClass">
      <RouterLink to="/Courses#">Courses</RouterLink>
    </li>
    <li class="menu__item" @click="removeClass">
      <RouterLink to="/Events">Events</RouterLink>
    </li>
    <li class="menu__item" @click="removeClass">
      <RouterLink to="/Blog">Blog</RouterLink>
    </li>
    <li class="menu__item" @click="removeClass">
      <RouterLink to="/Contacts">Contacts</RouterLink>
    </li>
  </ul>
</template>

<script>
export default {
  methods: {
    removeClass() {
      const inner = document.querySelector(".header__inner");
      inner.classList.remove("active");
    },
  },
};
</script>

<style lang="scss">
@import "./../assets/styles/main.scss";

.menu {
  display: flex;
  flex-direction: column;
  gap: 40px;

  @include mediaMin(992px) {
    flex-direction: row;
  }
}
</style>
