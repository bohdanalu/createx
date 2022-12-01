<template>
  <ul class="menu">
    <li class="menu__item">
      <a class="menu__link" href="#"> About us </a>
    </li>
    <li class="menu__item">
      <a class="menu__link" href="#"> Courses </a>
    </li>
    <li class="menu__item">
      <a class="menu__link" href="#"> Events </a>
    </li>
    <li class="menu__item">
      <a class="menu__link" href="#"> Blog </a>
    </li>
    <li class="menu__item">
      <a class="menu__link" href="#"> Contacts </a>
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

  // .menu__item

  &__item {
    transition: all 0.2s ease;

    &:hover,
    &:active {
      @extend %hover;
    }
  }

  // .menu__link

  &__link {
    font-size: 24px;

    @include mediaMin(992px) {
      font-size: 16px;
    }
  }
}
</style>
