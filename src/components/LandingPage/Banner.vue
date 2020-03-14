<template>
  <!-- Home Banner Starts -->
  <section class="home-banner">
    <div class="container">
      <div class="slider-wrapper">
        <div class="banner-slider">
          <Slick ref="slickbanner" :options="slickOptions">
            <!-- Slide[1] -->
            <div>
              <div class="slide-one">
                <h1 class="main-title">
                  The Largest, Most Trusted & Exclusive Matrimony Portal For The
                  Vokkaligas Communities Across The Globe
                </h1>
              </div>
            </div>

            <!-- Slide[2] -->
            <div>
              <div class="slide-two">
                <h1 class="main-title">Under the mentorship of</h1>

                <div class="row">
                  <div class="col-md-6 col-sm-6 slide-info">
                    <div class="col-md-4">
                      <img src="/images/extra/swami-1.png">
                    </div>
                    <div class="col-md-8">
                      <h3>Swami Name Ji</h3>
                      <p>What is the loop of Creation? How is there something from nothing</p>
                    </div>
                    <div class="clearfix" />
                  </div>

                  <div class="col-md-6 col-sm-6 slide-info">
                    <div class="col-md-4">
                      <img src="/images/extra/swami-2.png">
                    </div>
                    <div class="col-md-8">
                      <h3>Swami Name Ji</h3>
                      <p>What is the loop of Creation? How is there something from nothing</p>
                    </div>
                    <div class="clearfix" />
                  </div>
                </div>
              </div>
            </div>
          </Slick>
        </div>
      </div>
      <!-- Slider Wrapper Ends -->
      <div class="slide-bottom">
        <div class="row">
          <div class="col-md-4 col-sm-4 quick-details">
            <div class="col-md-3">
              <img src="/images/icons/find-someone.png">
            </div>

            <div class="col-md-9">
              <h5>Find that special someone</h5>
            </div>
          </div>

          <div class="col-md-4 col-sm-4 quick-details">
            <div class="col-md-3">
              <img src="/images/icons/trusted.png">
            </div>

            <div class="col-md-9">
              <h5>Most trusted matrimony brand</h5>
            </div>
          </div>

          <div class="col-md-4 col-sm-4 quick-details">
            <div class="col-md-3">
              <img src="/images/icons/contact.png">
            </div>

            <div class="col-md-9">
              <h5>Contact genuine profiles</h5>
            </div>
          </div>
        </div>
      </div>
      <!-- Slide Bottom Ends -->
      <SignUpForm />
      <!-- Add Banner Form Here -->
    </div>
  </section>
  <!-- Home Banner Ends -->
</template>

<script>
import Slick from "vue-slick";
import SignUpForm from "@/components/Global/SignUpForm.vue";

export default {
  data() {
    return {
      slickOptions: {
        dots: true,
        infinite: true,
        speed: 500,
        draggable: true,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000
      }
    }
  },
  components: {
    "SignUpForm": SignUpForm,
    Slick: Slick
  },
  mounted() {
  }
};
</script>



