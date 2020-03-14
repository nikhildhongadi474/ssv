<template>
  <!-- Service Slider Starts -->
  <section class="services-slider">
    <div class="service-slider">
      <Slick ref="slickservice" :options="slickOptions">
        <!-- Slide[1] -->
        <div>
          <div class="service-slide">
            <img src="/images/background/service-slide-1.jpg">

            <div class="slider-content">
              <div class="row">
                <div class="container">
                  <div class="col-md-5 col-sm-8">
                    <h1>Why SSV Matrimony</h1>
                    <h4>24-hour customer service team</h4>
                    <h5>For your assistance & response to any/every query raised</h5>
                  </div>

                  <div class="col-md-7 col-sm-4">
                    <img src="/images/icons/support.png">
                  </div>
                </div>
              </div>
            </div>
            <!-- Container Ends -->
          </div>
          <!-- Service Slide Ends -->
        </div>

        <!-- Slide[2] -->
        <div>
          <div class="service-slide">
            <img src="/images/background/service-slide-2.jpg">

            <div class="slider-content">
              <div class="row">
                <div class="container">
                  <div class="col-md-5 col-sm-8">
                    <h1>Why SSV Matrimony</h1>
                    <h4>Secure and privacy protected</h4>
                    <h5>We take care of the security or privacy of the members and also protect your photograph uploaded on ssvmatrimony.com.</h5>
                  </div>

                  <div class="col-md-7 col-sm-4">
                    <img src="/images/icons/lock.png">
                  </div>
                </div>
              </div>
            </div>
            <!-- Container Ends -->
          </div>
          <!-- Service Slide Ends -->
        </div>

        <!-- Slide[3] -->
        <div>
          <div class="service-slide">
            <img src="/images/background/service-slide-3.jpg">

            <div class="slider-content">
              <div class="row">
                <div class="container">
                  <div class="col-md-5 col-sm-8">
                    <h1>Why SSV Matrimony</h1>
                    <h4>Association with Negilayogi Samaja Seva Trust</h4>
                    <h5>Delivered with a sense of warmth, understanding, respect, and spirit</h5>
                  </div>

                  <div class="col-md-7 col-sm-4">
                    <img src="/images/icons/negilayogi.png">
                  </div>
                </div>
              </div>
            </div>
            <!-- Container Ends -->
          </div>
          <!-- Service Slide Ends -->
        </div>
      </Slick>
    </div>
  </section>
  <!-- Service Slider Ends -->
</template>

<script>
import Slick from "vue-slick";

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
    Slick: Slick
  },
  mounted() {
  }
};
</script>