<template>
  <div>
    <!-- Header Start -->
    <HeaderSection/>
    <!-- Header Ends -->
    <div class="inner-content">
      <div class="container">

        <div id="generic_price_table">   
          <section>          
              <!-- Membership -->
              <div class="row">

                <div class="top-title">
                  <h3><i class="large material-icons">import_contacts</i> Membership Type </h3>
                </div>

                <div v-for="(item, index) in membershipTypes" :key="index" >

                  <!-- Block -->
                  <div class="col-md-4">

                      <div class="generic_content clearfix"> 
                          <!--HEAD PRICE DETAIL START-->
                          <div class="generic_head_price clearfix">
                              <!--HEAD CONTENT START-->
                              <div class="generic_head_content clearfix">
                                <!--HEAD START-->
                                  <div class="head_bg"></div>
                                  <div class="head">
                                      <span>{{ item.memDesc }}</span>
                                  </div>
                                  <!--//HEAD END--> 
                              </div>
                              <!--//HEAD CONTENT END-->
                              
                              <!--PRICE START-->
                              <div class="generic_price_tag clearfix">	
                                  <span class="price">
                                      <span class="sign">₹</span>
                                      <span class="currency">{{ item.amount }}</span>
                                  </span>
                              </div>
                              <!--//PRICE END-->  
                          </div>                            
                          <!--//HEAD PRICE DETAIL END-->
                          
                          <!--FEATURE LIST START-->
                          <div class="generic_feature_list">
                            <ul>
                              <li><span>Duration : </span> {{ item.duration }}</li>

                              <li><span>Community Type: </span> {{ item.community.communityType }}</li> 
                              </ul>
                          </div>
                          <!--//FEATURE LIST END-->  
                      </div>
                      <!--//PRICE CONTENT END-->     
                  </div>   
                  
                </div>
              </div>	
          </section>

          <section>
              <!-- Packages -->
              <div class="row">

                <div class="top-title">
                  <h3><i class="large material-icons">import_contacts</i> Packages Type </h3>
                </div>

                <div v-for="(item, index) in packageTypes" :key="index">

                  <!-- Block -->
                  <div class="col-md-4">

                      <div class="generic_content clearfix"> 
                          <!--HEAD PRICE DETAIL START-->
                          <div class="generic_head_price clearfix">
                              <!--HEAD CONTENT START-->
                              <div class="generic_head_content clearfix">
                                <!--HEAD START-->
                                  <div class="head_bg"></div>
                                  <div class="head">
                                      <span>{{ item.packageName }}</span>
                                  </div>
                                  <!--//HEAD END--> 
                              </div>
                              <!--//HEAD CONTENT END-->
                              
                              <!--PRICE START-->
                              <div class="generic_price_tag clearfix">	
                                  <span class="price">
                                      <span class="sign">₹</span>
                                      <span class="currency">{{ item.amount }}</span>
                                  </span>
                              </div>
                              <!--//PRICE END-->  
                          </div>                            
                          <!--//HEAD PRICE DETAIL END-->
                          
                          <!--FEATURE LIST START-->
                          <div class="generic_feature_list">
                            <ul>
                              <li><span>Duration : </span> {{ item.duration }}</li>

                              <li><span>Community Type: </span> {{ item.community.communityType }}</li> 
                              </ul>
                          </div>
                          <!--//FEATURE LIST END-->  
                      </div>
                      <!--//PRICE CONTENT END-->     
                  </div>   
                  
                </div>
              </div>
          </section>             
        </div>

        <div class="form-division">
          <div class="top-title">
            <h3>
              <i class="large material-icons">import_contacts</i> Upgrade Membership
            </h3>
          </div>

          <div class="col-md-12 col-sm-12"> 
            
            <div class="card-content">
              <form>
                <div class="row form-wrapper">
                  <div class="col-md-6 form-group">
                    <h5 class="field-label">Name:</h5>
                    <input type="text" class="form-control" placeholder="Enter Name">
                  </div>
                </div>

                <div class="row form-wrapper">
                  <div class="col-md-6 form-group">
                    <h5 class="field-label">Email-address:</h5>
                    <input type="email" class="form-control" placeholder="Enter Email">
                  </div>
                </div>

                <div class="row form-wrapper">
                  <div class="col-md-6 form-group">
                    <h5 class="field-label">Subject:</h5>
                    <select class="form-control" id="subject">
                      <option>Select</option>
                      <option>General Customer Service</option>
                      <option>Suggestions</option>
                      <option>Product Support</option>
                    </select>
                  </div>
                </div>

                <div class="row form-wrapper">
                  <div class="col-md-6 form-group">
                    <h5 class="field-label">Message:</h5>
                    <textarea class="form-control" rows="5" placeholder="Add your message here"/>
                  </div>
                </div>

                <div class="sign-in-btn">
                  <button type="submit" class="btn btn-red">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Section Start-->
    <FooterSection/>
    <!-- Footer Section Ends-->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Header from "@/components/Partials/Header.vue";
import Footer from "@/components/Partials/Footer.vue";
export default {
  mounted() {
    this.fetchMemberTypes()
    // this.fetchPackageTypes();
  },
  components: {
    HeaderSection: Header,
    FooterSection: Footer
  },
  computed: {
    ...mapGetters("Membership", ["membershipTypes", "packageTypes"])
  },
  methods: {
    ...mapActions("Membership", ["fetchMemberTypes", "fetchPackageTypes"])
  }
};
</script>