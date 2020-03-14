<template>
  <div>
    <!-- Header Start -->
    <HeaderSection />

    <SingleProfile/>

    <!-- Footer Section Start-->
    <FooterSection />
    <!-- Footer Section Ends-->
  </div>
</template>

<script>
import Header from "@/components/Partials/Header.vue";
import Footer from "@/components/Partials/Footer.vue";
import SingleProfile from "@/components/Global/SingleProfile.vue";

export default {
  name: "Profile",
  mounted() {},
  methods: {},
  components: {
    "HeaderSection": Header,
    "FooterSection": Footer,
    "SingleProfile": SingleProfile
  }
};
</script>