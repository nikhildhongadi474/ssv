<template>
  <div>
    <!-- Header Start -->
    <HeaderSection />
    <!-- Header Ends -->

    <div class="inner-page">
      <div class="container">
        <div class="top-title">
          <h3><i class="large material-icons">grade</i> Contact Us</h3>
        </div>

        <div class="content-wrapper">
          <p class="main-heading"> The Largest, Most Trusted & Exclusive Matrimony Portal For The Vokkaligas Communities Across The Globe. </p>

          <div class="row">
            <div class="col-md-5">
              <div class="address">
                <h6> Samaja Samparka Vedike </h6>
                <p> Adichunchanagiri Mahasamstana Matta, <br> Vijayanagar, Bangalore-560040 </p>
              </div>
              <div class="phone-no">
                <h6> Telephone </h6>
                <p> <a href="tel:080-23386028"> 080-23386028 </a> </p>
              </div>

              <div class="email">
                <h6> Email </h6>
                <p> <a href="mailto:ssvadmin@gmail.com?Subject=Request%20a%20query"> ssvadmin@gmail.com </a> </p>
              </div>
            </div>

            <div class="col-md-7">
              <div class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4119.170832843847!2d77.53992266414863!3d12.973162169485771!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3de5d3d5878b%3A0x2e8d8bce34d51e65!2sSri+Adichunchanagiri+Mutt!5e0!3m2!1sen!2sin!4v1551424384575" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen />
              </div>
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
  mounted() {},
  methods: {},
  components: {
    "HeaderSection": Header,
    "FooterSection": Footer
  }
};
</script>