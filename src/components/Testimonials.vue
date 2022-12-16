<template>
  <section class="testimonials padding">
    <div class="container">
      <h2 class="testimonials__title title">Testimonials</h2>
      <h3 class="testimonials__subtitle subtitle mb">What our students say</h3>
      <CarouselTestimonialsVue />
    </div>
  </section>
</template>

<script>
import CarouselTestimonialsVue from "./CarouselTestimonials.vue";
export default {
  components: {
    CarouselTestimonialsVue,
  },
};
</script>

<style lang="scss">
@import "./../assets/styles/main.scss";
.testimonials {
  text-align: center;
  padding-bottom: 100px;
  background: url(./../assets/images/bg_shapes/circles_testim.svg) left 20%
      no-repeat,
    url(./../assets/images/bg_shapes/shapes_testim.svg) 65% 26% no-repeat,
    url(./../assets/images/bg_shapes/dots.svg) 24% 89% no-repeat,
    url(./../assets/images/bg_shapes/circles_2.svg) right bottom no-repeat;
  background-color: $gray-200;
  // .testimonials__title

  &__title {
  }

  // .testimonials__subtitle

  &__subtitle {
  }

  // .testimonials__slider

  &__slider-content {
  }

  // .testimonials__bloquoter
}
</style>
