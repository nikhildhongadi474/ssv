<template>
  <div>
    <!-- Header Start -->
    <SearchHeader/>
    <!-- Header Ends -->
    <!-- Inner Content Start -->
    <Search :req-from="4"/>
    <!-- Inner Content Ends -->
    <!-- Footer Section Start-->
    <FooterSection/>
    <!-- Footer Section Ends-->
  </div>
</template>
<script>
import SearchHeader from "@/components/Partials/SearchHeader.vue";
import Footer from "@/components/Partials/Footer.vue";
import Search from "@/components/Global/Search.vue";
import { mapActions } from "vuex";

export default {
  name: "QuickSearch",

  components: {
    SearchHeader: SearchHeader,
    FooterSection: Footer,
    Search: Search
  },

  data() {
    return {};
  },
  methods: {
    ...mapActions("Profile", ["viewProfile"])
  },
  mounted() {
    const { memberId } = this.$store.getters.getMyData;
    this.viewProfile(memberId);
  }
};
</script>