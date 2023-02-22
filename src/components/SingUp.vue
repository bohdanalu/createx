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
  name: "ModalSignUp",
  data() {
    return {
      social: [
        {
          id: "s1",
          img: "facebook.svg",
          alt: "Facebook",
        },
        {
          id: "s2",
          img: "instagram.svg",
          alt: "Google",
        },
        {
          id: "s3",
          img: "twitter.svg",
          alt: "Facebook",
        },
        {
          id: "s4",
          img: "linked-In.svg",
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
@import "./../assets/styles/main.scss";

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
  overflow: overlay;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-wrapper {
  width: calc((486px * 100%) / 1230px);
  min-width: 360px;
  max-width: 485px;
  max-height: 90%;
}

.modal-container {
  position: relative;
  width: 100%;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 60px 80px -20px rgba(30, 33, 44, 0.16),
    0px 26px 24px -10px rgba(30, 33, 44, 0.1),
    0px 12px 10px -6px rgba(30, 33, 44, 0.08),
    0px 4px 4px -4px rgba(30, 33, 44, 0.05);
  transition: all 0.3s ease;

  @include mediaMin(1320px) {
    padding: 48px;
    gap: 24px;
  }
}

.modal-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
