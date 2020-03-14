<template>
  <div>
    <!-- Header Start -->
    <HeaderSection/>
    <!-- Header Ends -->
    <div class="inner-content" v-if="getTotalSearchResults > 0">
      <div class="container">
        <!-- Top Grid Starts -->
        <div class="well well-sm">
          <div class="col-md-4 col-sm-12 top-title">
            <h3>
              <i class="large material-icons">people</i> Search Results
            </h3>
          </div>

          <!-- Pagination Starts -->
          <div class="col-md-4 col-sm-6">
            <Pagination
              :records="getTotalSearchResults"
              v-model="pageNum"
              :options="options"
              :per-page="recordsPerPage"
              @paginate="callback"
            />
          </div>
          <!-- Pagination Ends -->
          <div class="col-md-4 col-sm-6" v-cloak>
            <div class="switch">
              <a href="#" id="grid" class="btn btn-sm">
                <span class="glyphicon glyphicon-th"/>Grid View
              </a>
              <a href="#" id="list" class="btn btn-sm">
                <span class="glyphicon glyphicon-th"/>List View
              </a>
            </div>
          </div>
          <div class="clearfix"/>
        </div>
        <!-- Top Grid Ends -->
        <!-- Listing Starts -->
        <div id="listing" class="row list-group">
          <div v-for="member in getSearchedProfiles" :key="member.memberId">
            <ProfileCard :profile-props="{ id:member.memberId, reqFrom:4 }"/>
          </div>
        </div>
        <!-- Listing Ends -->
        <!-- Pagination Starts -->
        <div class="col-md-12 pagination-list bottom-list">
          <Pagination
            :records="getTotalSearchResults"
            v-model="pageNum"
            :per-page="recordsPerPage"
            :options="options"
            @paginate="callback"
          />
        </div>
        <!-- Pagination Ends -->
      </div>
      <!-- Container Ends -->
    </div>
    <!-- no profile found -->
    <div class="inner-content" v-else>
      <div class="container" :style="{ minHeight : '300px' }">
        <!-- Top Grid Starts -->
        <div class="top-title">
            <h3>
              <i class="material-icons">search</i> Sorry, we couldn’t find the profile you are looking for!
            </h3>
          </div>
        <!-- Top Grid Ends -->
      </div>
      <!-- Container Ends -->
    </div>

    <!-- Inner Content Ends -->
    <!-- Footer Section Start-->
    <FooterSection/>
    <!-- Footer Section Ends-->
  </div>
</template>

<script>
/* global $ */
import SearchHeader from "@/components/Partials/SearchHeader.vue";
import Footer from "@/components/Partials/Footer.vue";
import ProfileCard from "@/components/Global/ProfileCard.vue";
import Pagination from "vue-pagination-2";

export default {
  name: "SearchListing",

  components: {
    HeaderSection: SearchHeader,
    FooterSection: Footer,
    ProfileCard: ProfileCard,
    Pagination: Pagination
  },

  data() {
    return {
      searchResults: [],
      totalRecords: 0,
      pageNum: 1, //TODO - pages cant go in negative
      recordsPerPage: 12,
      options: {
        chunk: 5
      },
      serverError: "",
      searchRequest: {}
    };
  },

  computed: {
    // Get the Search results
    getSearchedProfiles() {
      this.setSearchRequest(this.$store.getters.getSearchedReq);
      return this.$store.getters.getSearchedProfiles;
    },
    // Get the total records
    getTotalSearchResults() {
      return this.$store.getters.getTotalSearchResults;
    },

    getSearchedReq() {
      return this.$store.getters.getSearchedReq;
    }
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
      if (
        pageNum >= 1 &&
        pageNum <=
          this.$store.getters.getTotalSearchResults / this.recordsPerPage
      ) {
        this.$store
          .dispatch("retrieveSearchResults", {
            pageNum: this.pageNum,
            records: this.recordsPerPage,
            dataReq: this.getSearchedReq
          })
          .then(() => {});
      }
    },
    setSearchRequest(newvalues) {
      if (!Object.keys(newvalues).length) {
        var searchRequest = JSON.parse(localStorage.getItem("searchRequest"));
        if (Object.keys(searchRequest).length) {
          this.$store
            .dispatch("retrieveSearchResults", {
              pageNum: 1,
              records: 12,
              dataReq: searchRequest
            })
            .then(() => {});
          this.searchRequest = searchRequest;
        }
      } else {
        localStorage.setItem("searchRequest", JSON.stringify(newvalues));
      }
    }
  }
};
</script>
