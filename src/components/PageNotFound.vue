<template>
  <div>
    <!-- Header Start -->
    <HeaderSection />
    <!-- Header Ends -->
    <div class="inner-content">
      <div class="container">
        <div class="text-wrapper">
          <div class="title" data-content="404">404</div>

          <div class="subtitle">Oops, the page you're looking for doesn't exist.</div>
        </div>
      </div>
    </div>

    <!-- Footer Section Start-->
    <FooterSection />
    <!-- Footer Section Ends-->
  </div>
</template>

<script>
import Header from "@/components/Partials/Header.vue";
import Footer from "@/components/Partials/Footer.vue";
export default {
  mounted() {},
  methods: {},
  components: {
    "HeaderSection": Header,
    "FooterSection": Footer
  }
};
</script>