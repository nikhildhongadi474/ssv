<template>
  <div class="ssv-content">
    <!-- Header Start -->
    <HeaderSection />
    <!-- Header Ends -->
    <!-- Slider Start -->
    <BannerSection />
    <!-- Slider Ends -->
    <!-- Service Section Start -->
    <ServiceSection />
    <!-- Service Section Ends -->
    <!-- About Section Start-->
    <AboutSection />
    <!-- About Section Ends -->
    <!-- Featured Section Start-->
    <FeaturedSection />
    <!-- Feaatured Section Ends -->
    <!-- Svayamwar Section Start-->
    <SvayamwarSection />
    <!-- Svayamwar Section Ends -->
    <!-- USP Section Start-->
    <UspSection />
    <!-- USP Section Ends -->
    <!-- Footer Section Start-->
    <FooterSection />
    <!-- Footer Section Ends-->
  </div>
</template>

<script>
import Header from "@/components/Partials/Header.vue";
import Banner from "@/components/LandingPage/Banner.vue";
import Service from "@/components/LandingPage/Service.vue";
import About from "@/components/LandingPage/About.vue";
import Featured from "@/components/LandingPage/Featured.vue";
import Svayamwar from "@/components/LandingPage/Svayamwar.vue";
import Usp from "@/components/LandingPage/Usp.vue";
import Footer from "@/components/Partials/Footer.vue";

export default {
  name: "home",

  mounted() {},
  methods: {},
  components: {
    "HeaderSection": Header,
    "BannerSection": Banner,
    "ServiceSection": Service,
    "AboutSection": About,
    "FeaturedSection": Featured,
    "SvayamwarSection": Svayamwar,
    "UspSection": Usp,
    "FooterSection": Footer
  }
};
</script>

