<template>
  <div>
    <!-- Header Start -->
    <HeaderSection />
    <!-- Header Ends -->
    <div class="inner-content">
      <div class="container">
        <div class="text-wrapper">
          <div class="title" >Server says</div>

          <div class="subtitle">{{ getServerMessage }}.</div>
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
  name: "EmailSent",
  
  components: {
    "HeaderSection": Header,
    "FooterSection": Footer
  },
    
  mounted() {},
  computed: {
    getServerMessage(){
      return this.$store.getters.getServerMessage;
    }

  },
  methods: {},

};
</script>