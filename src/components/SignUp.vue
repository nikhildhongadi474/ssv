<template>
  <div>
    <!-- Header Start -->
    <HeaderSection />
    <!-- Header Ends -->
   
    <SignUpSection />
    
    <!-- Footer Section Start-->
    <FooterSection />
    <!-- Footer Section Ends-->
  </div>
</template>

<script>
import Header from "@/components/Partials/Header.vue";
import Footer from "@/components/Partials/Footer.vue";
import SignUp from "@/components/Global/SignUp.vue";

export default {

   components: {
    HeaderSection: Header,
    FooterSection: Footer,
    SignUpSection: SignUp,
  }
 
};
</script>
