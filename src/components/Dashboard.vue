<template>
  <div>
    <!-- Header Start -->
    <HeaderSection />
    <!-- Header Ends -->
    <!-- Dashboard Section Starts-->
    <DashboardSection />
    <!-- Dashboard Section Ends -->
    <!-- Footer Section Start-->
    <FooterSection />
    <!-- Footer Section Ends-->
  </div>
</template>

<script>
import Header from "@/components/Partials/Header.vue";
import Dashboard from "@/components/Dashboard/Dashboard.vue";
import Footer from "@/components/Partials/Footer.vue";
export default {
  mounted() {},
  methods: {},
  components: {
    HeaderSection: Header,
    DashboardSection: Dashboard,
    FooterSection: Footer
  }
};
</script>
