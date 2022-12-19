<template>
  <div class="modal">
    <button class=".modal__btn-close"></button>
    <div class="modal__content">
      <h2 class="modal_title">Sign Up</h2>
      <span class="modal__comment"
        >Registration takes less than a minute but gives you full control over
        your studying.</span
      >
      <form class="sign-up__form" action="">
        <label for="fullName"
          >Full Name
          <input type="text" id="fuulName" placeholder="Your full Name" />
        </label>
        <label for="email"
          >Email
          <input type="text" id="fuulName" placeholder="Your working email" />
        </label>
        <label for="password"
          >Password <input type="text" id="password" /> </label
        >Confirm Password
        <label for="pswConfirm">
          <input type="text" id="pswCongirm" />
        </label>
        <label for="check">
          <input type="checkbox" name="check" id="check" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
      <span class="modal_qw"
        >Already have an account? <a href="">Sign in</a></span
      >
      <div class="modal__footer">
        <span class="modal__sign">Or sign in with</span>
        <ul class="social">
          <Social v-for="item in social" :key="item.id" :social_data="social" />
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Social from "./Social.vue";

export default {
  name: "ModalSignUp",
  components: {
    Social,
  },
  data() {
    return {
      social: [
        {
          id: s1,
          img: "src/images/icons/social/facebook.svg",
          alt: "Facebook",
        },
      ],
    };
  },
  components: { Social },
};
</script>
