<template>
  <Transition>
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header"></slot>
          </div>

          <div class="modal-body">
            <slot name="body"></slot>
          </div>

          <div class="modal-footer">
            <slot name="footer"></slot>
            <ul class="social">
              <Social
                v-for="item in social"
                :key="item.id"
                :social_data="item"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import Social from "./Social.vue";

export default {
  name: "ModalSignIn",
  data() {
    return {
      social: [
        {
          id: "s1",
          img: "/src/assets/images/icons/social/facebook.svg",
          alt: "Facebook",
        },
        {
          id: "s2",
          img: "/src/assets/images/icons/social/instagram.svg",
          alt: "Google",
        },
        {
          id: "s3",
          img: "/src/assets/images/icons/social/twitter.svg",
          alt: "Facebook",
        },
        {
          id: "s4",
          img: "/src/assets/images/icons/social/linked-In.svg",
          alt: "Google",
        },
      ],
    };
  },
  props: {
    show: Boolean,
  },

  components: { Social },
};
</script>

<style lang="scss">
@import "../assets/styles/main.scss";

.form-modal-wrap {
  display: flex;
  justify-content: space-between;
}
</style>
