<template>
  <div>
    <!-- Header Start -->
    <HeaderSection />
    
    <!-- Header Ends -->
    <div class="inner-content">
      <EditAboutTab :member="member"/>
    </div>

    <!-- Inner Content Ends -->
    <div class="row detailed-info">
      <div class="container">
        <ul class="nav nav-tabs">
          <li class="active">
            <a data-toggle="tab" href="#personal-information">Personal Information</a>
          </li>

          <li>
            <a data-toggle="tab" href="#education-details">Education Details</a>
          </li>

          <li>
            <a data-toggle="tab" href="#family-details">Family Details</a>
          </li>

          <li>
            <a data-toggle="tab" href="#partner-preference">Partner Preference</a>
          </li>
        </ul>

        <div class="tab-content">

          <!-- Tab 1 -->
          <div id="personal-information" class="tab-pane fade in active">
            <EditPersonalInfoTab  :member="member"/>
          </div>
          <!-- Personal Info Ends -->

          <!-- Tab 2 -->
          <div id="education-details" class="tab-pane fade in">
            <EditEducationTab  :member="member"/>
          </div>
          <!-- Family Detail Ends -->

          <!-- Tab 3 -->
          <div id="family-details" class="tab-pane fade in">
            <EditFamilyDetailsTab  :member="member"/>
          </div>
          <!-- Partner Info Ends -->

          <!-- Tab 4 -->
          <div id="partner-preference" class="tab-pane fade in">
            <EditPartnersTab  :member="member"/>
          </div>
          <!-- Partner Info Ends -->

        </div>
        <!-- Tab Content Ends -->
      </div>
    </div>

    <!-- Footer Section Start-->
    <FooterSection />
    <!-- Footer Section Ends-->
  </div>
</template>

<script>
//plugins
import EditAboutTab from "@/components/EditProfile/EditAbout.vue";
import EditPersonalInfoTab from "@/components/EditProfile/EditPersonalInformation.vue";
import EditEducationTab from "@/components/EditProfile/EditEducationProfession.vue";
import EditFamilyDetailsTab from "@/components/EditProfile/EditFamilyDetails.vue";
import EditPartnersTab from "@/components/EditProfile/EditPartnerPreference.vue";
import Header from "@/components/Partials/Header.vue";
import Footer from "@/components/Partials/Footer.vue";
import { mapActions } from 'vuex'

export default {
  name: 'EditProfile',
  data: function () {
    return {
      activeTab: this.$store.state.activeTab,
      member : []
    }
  },
  
  mounted() {
      const { memberId } = this.$store.getters.getMyData
      this.viewProfile(memberId)
  },
  components: {
    "HeaderSection": Header,
    "FooterSection": Footer,
    EditAboutTab,
    EditPersonalInfoTab,
    EditEducationTab,
    EditFamilyDetailsTab,
    EditPartnersTab
  },
  methods: {
      ...mapActions('Profile', ['viewProfile']),
  }

};
</script>
