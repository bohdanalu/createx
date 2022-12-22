<template>
  <ul class="menu">
    <li class="menu__item">
      <!-- <a class="menu__link" href="#"> About us </a> -->
      <RouterLink to="/About">About us</RouterLink>
    </li>
    <li class="menu__item">
      <!-- <a class="menu__link" href="#"> Courses </a> -->
      <RouterLink to="/Courses">Courses</RouterLink>
    </li>
    <li class="menu__item">
      <!-- <a class="menu__link" href="#"> Events </a> -->
      <RouterLink to="/Events">Events</RouterLink>
    </li>
    <li class="menu__item">
      <!-- <a class="menu__link" href="#"> Blog </a> -->
      <RouterLink to="/Blog">Blog</RouterLink>
    </li>
    <li class="menu__item">
      <!-- <a class="menu__link" href="#"> Contacts </a> -->
      <RouterLink to="/Contacts">Contacts</RouterLink>
    </li>
  </ul>
</template>

<script>
export default {};
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
