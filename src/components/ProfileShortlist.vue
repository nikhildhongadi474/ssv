<template>
  <div>
    <!-- Header Start -->
    <HeaderSection />
    <!-- Header Ends -->
    <!-- Inner Content Starts -->
    <div class="inner-content">
      <div class="container">
        <!-- Top Grid Starts -->
        <div class="well well-sm">
          <div class="col-md-3 col-sm-12 top-title">
            <h3>
              <i class="large material-icons">people</i> Shortlisted Profile
            </h3>
          </div>

          <!-- Pagination Starts -->
          <div class="col-md-6 col-sm-6">
            <Pagination :records="getTotalShortlistedProfiles" v-model="pageNum" :options="options" :per-page="recordsPerPage" @paginate="callback"/>
          </div>
          <!-- Pagination Ends -->
          <div class="col-md-3 col-sm-6" v-cloak>
            <div class="switch">
              <a href="#" id="grid" class="btn btn-sm">
                <span class="glyphicon glyphicon-th" />Grid View
              </a>
              <a href="#" id="list" class="btn btn-sm">
                <span class="glyphicon glyphicon-th" />List View
              </a>
            </div>
          </div>
          <div class="clearfix" />
        </div>
        <!-- Top Grid Ends -->
				
        <!-- Listing Starts -->
        <div id="listing" class="row list-group">
          <div v-for="member in getShortlistedProfiles" :key="member.memberId">
            <ProfileCard :profile-props="{ id:member.memberId, reqFrom:3 }"/>
          </div>
        </div>
        <!-- Listing Ends -->

        <!-- Pagination -->
        <div class="col-md-12 pagination-list bottom-list">
          <Pagination :records="getTotalShortlistedProfiles" v-model="pageNum" :per-page="recordsPerPage" :options="options" @paginate="callback"/>
        </div>
        <!-- Pagination Ends -->
      </div>
      <!-- Container Ends -->
    </div>
    <!-- Inner Content Ends -->
    <!-- Footer Section Start-->
    <FooterSection />
    <!-- Footer Section Ends-->
  </div>
</template>

<script>
/* global $ */
import Header from "@/components/Partials/Header.vue";
import Footer from "@/components/Partials/Footer.vue";
import ProfileCard from "@/components/Global/ProfileCard.vue";
import Pagination from "vue-pagination-2";

export default {
  name: "ShortlistedProfiles",

  components: {
    HeaderSection: Header,
    FooterSection: Footer,
    ProfileCard: ProfileCard,
    Pagination: Pagination
  },

  data() {  
    return {
      shortlistedProfiles: [],
      totalRecords: 0,
      pageNum: 1, //TODO - pages cant go in negative
      recordsPerPage: 12,
      options: {
        chunk: 5
      },
      serverError: ""
    };
  },  

  created() {
    this.$store
      .dispatch("retrieveShortlistedProfiles", {
        pageNum: this.pageNum,
        records: this.recordsPerPage
      })
      .then(response => {
      });
  },  

  computed: {
    // Get the shortlisted profiles
    getShortlistedProfiles() {
      return this.$store.getters.getShortlistedProfiles;
    },
    // Get the  total records
    getTotalShortlistedProfiles() {
      return this.$store.getters.getTotalShortlistedProfiles;
    },    
  },

  mounted() {
    $("#list").click(function(event) {
      event.preventDefault();
      $("#listing .item").addClass("list-group-item");
    });
    $("#grid").click(function(event) {
      event.preventDefault();
      $("#listing .item").removeClass("list-group-item");
      $("#listing .item").addClass("grid-group-item");
    });
  },

  methods: {
    callback: function(pageNum) {
      if ((pageNum>=1) && (pageNum <=(this.$store.getters.getTotalShortlistedProfiles/this.recordsPerPage))) {
        this.$store
        .dispatch("retrieveShortlistedProfiles", {
          pageNum: this.pageNum,
          records: this.recordsPerPage
        })
        .then(response => {
        });
      }
    }
  }  
};
</script>