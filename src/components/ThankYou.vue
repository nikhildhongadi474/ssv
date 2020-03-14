<template>
  <div>
    <!-- Header Start -->
    <HeaderSection />
    <!-- Header Ends -->

    <div class="signup-content">
      <div class="row">
        <div class="container">
          <div class="form-division">
            <div class="top-title">
              <h3> <i class="large material-icons">check</i> Registration Successfull </h3>
            </div>

            <div class="card-content">

              <h1 class="thanks-title"> Thank You </h1>
              <p class="thanks-content">Your account has been registered successfully. Please check your email for confirmation of your registration.</p>
            </div>
          </div>
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

   components: {
    HeaderSection: Header,
    FooterSection: Footer,
  }
 
};
</script>

