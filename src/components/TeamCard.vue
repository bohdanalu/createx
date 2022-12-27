<template>
  <article class="team__card card-team" :id="team_data.id">
    <a class="card-team__link" href="">
      <div class="card-team__img-wrap">
        <img class="card-team__img" :src="team_data.img" alt="" />
      </div>
    </a>
    <ul class="card-team__social">
      <li class="card-team__social-item">
        <a class="card-team__social-link" href="">
          <img
            class="card-team__social-icon"
            src="./../assets/images/icons/social/facebook.svg"
            alt=""
          />
        </a>
      </li>
      <li class="card-team__social-item">
        <a class="card-team__social-link" href="">
          <img
            class="card-team__social-icon"
            src="./../assets/images/icons/social/instagram.svg"
            alt=""
          />
        </a>
      </li>
      <li class="card-team__social-item">
        <a class="card-team__social-link" href="">
          <img
            class="card-team__social-icon"
            src="./../assets/images/icons/social/linked-In.svg"
            alt=""
          />
        </a>
      </li>
    </ul>
    <h4 class="card-team__name">{{ team_data.name }}</h4>
    <span class="card-team__position">{{ team_data.position }}</span>
  </article>
</template>

<script>
export default {
  data() {
    return {};
  },

  props: {
    team_data: {
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
.card-team {
  position: relative;
  text-align: center;
  @extend %shadow;

  &__link {
    &:hover {
      ~ .card-team__social {
        transition: all 0.2s ease;
        transform: scale(1);
      }
    }
  }

  &__img-wrap {
    position: relative;
    padding: 20px 20px 0;
    background-color: $secondary;
    margin-bottom: 16px;
    border-radius: 4px;
    &::after {
      display: none;
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: linear-gradient(
        180deg,
        rgba(30, 33, 44, 0) 43.9%,
        rgba(30, 33, 44, 0.03) 55.21%,
        rgba(30, 33, 44, 0.33) 68.73%,
        rgba(30, 33, 44, 0.56) 76.17%,
        rgba(30, 33, 44, 0.768225) 83.75%,
        rgba(30, 33, 44, 0.92) 91.49%,
        #1e212c 100%
      );
      transition: all 0.2s ease;
    }

    &:hover {
      &::after {
        transition: all 0.2s ease;
        display: block;
      }
    }
  }

  // .card-team__img

  &__img {
    border-radius: 4px;
    margin-bottom: -6px;
  }

  // .card-team__name

  &__name {
    font-size: 20px;
    font-weight: 700;
    color: $gray-800;
  }

  // .card-team__position

  &__position {
    font-size: 16px;
    line-height: 1.6;
    color: $gray-700;
  }

  &__social {
    position: absolute;
    display: flex;
    gap: 12px;
    bottom: 84px;
    right: 20px;
    transform: scale(0);
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1);
    }
  }

  &__social-item {
    width: 20px;
    height: 20px;
  }
  &__social-icon {
    filter: invert(99%) sepia(0%) saturate(2%) hue-rotate(310deg)
      brightness(104%) contrast(101%);
    width: 100%;
    height: 100%;
    object-fit: contain;
    opacity: 0.6;

    &:hover {
      opacity: 1;
    }
  }
}
</style>
