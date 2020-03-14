<template>
  <div class="signup-content">
    <div class="row detailed-info">
      <div class="container">

        <ul class="nav nav-tabs">
          <li>
            <a :class="[ getActiveTab === 1 ? 'active' : '' ]">About</a>
          </li>
          <li>
            <a :class="[ getActiveTab === 2 ? 'active' : '' ]">Personal Information</a>
          </li>
          <li>
            <a :class="[ getActiveTab === 3 ? 'active' : '' ]">Education and Profession</a>
          </li>
          <li>
            <a :class="[ getActiveTab === 4 ? 'active' : '' ]">Family Details</a>
          </li>
          <li>
            <a :class="[ getActiveTab === 5 ? 'active' : '' ]">Partner Preference</a>
          </li>
        </ul>

        <div class="tab-content">
          <!-- Tab 1 -->
          <div v-if="getActiveTab === 1">
            <AboutTab/>  
          </div>
          <!-- About Section Ends -->

          <!-- Tab 2 -->
          <div v-if="getActiveTab === 2">
            <PersonalInfoTab/>
          </div>
          <!-- Basic and Lifestyle Ends -->

          <!-- Tab 3 -->
          <div v-if="getActiveTab === 3">
            <EducationTab/>
          </div>
          <!-- Education Profession Ends -->

          <!-- Tab 4 -->
          <div v-if="getActiveTab === 4">
            <FamilyDetailsTab/>
          </div>
          <!-- Family Details Ends -->

          <!-- Tab 5 -->
          <div v-if="getActiveTab === 5">
            <PartnersTab/>
          </div>
          <!-- Partner Info Ends -->
        </div>
        <!-- Tab Content Ends --> 

      </div>


    </div>
  </div>
</template>

<script>
//plugins
import AboutTab from "@/components/SignUp/About.vue";
import PersonalInfoTab from "@/components/SignUp/PersonalInformation.vue";
import EducationTab from "@/components/SignUp/EducationProfession.vue";
import FamilyDetailsTab from "@/components/SignUp/FamilyDetails.vue";
import PartnersTab from "@/components/SignUp/PartnerPreference.vue";

export default {
  data: function () {
    return {
      activeTab: this.$store.state.activeTab
    }
  },

  components: {
    AboutTab,
    PersonalInfoTab,
    EducationTab,
    FamilyDetailsTab,
    PartnersTab
  },

  computed: {

    getActiveTab: function(){
      return  this.$store.getters.getActiveTab
    },

  },
  
  watch: {
    getActiveTab: function(){
      this.activeTab = this.$store.state.activeTab;
      },
    },

  methods: {

  }
};
</script>