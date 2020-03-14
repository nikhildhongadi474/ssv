<template>
  <div>
    <!-- Header Start -->
    <SearchHeader/>
    <!-- Header Ends -->
    <!-- Inner Content Start -->
    <div class="inner-content">
      <!-- Search Box Starts -->
      <div class="search-inner">
        <div class="container">
          <div class="search-listing">
            <h1 class="section-title">Keyword search</h1>
          </div>
          <div class="col-md-3 col-sm-2"/>

          <div class="col-md-7 col-sm-8">
            <form class="search-bar" action="#" @submit.prevent="keySearch">
              <div class="row">
                <div class="col-md-10">
                  <div class="form-group">
                    <label class="form-label" for="your-username">Phone number or username address</label>
                    <input
                      v-validate="{ required: true, regex: /^[ A-Za-z0-9@.]*$/ }"
                      name="username"
                      type="username"
                      class="form-control"
                      placeholder="Enter name or phone or email id "
                      v-model="data"
                    >
                    <div class="error">{{ errors.first('username') }}</div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 col-sm-12 search-buttons">
                  <button type="submit" class="btn btn-red">
                    <i class="material-icons">search</i> Search
                  </button>
                  <!-- <a class="btn btn-red">
                    <i class="material-icons">search</i> Search
                  </a>-->
                  <a href="javascript:void(0);" @click="reset" class="btn blank-btn">
                    <i class="material-icons">clear</i> Reset
                  </a>
                </div>
              </div>
            </form>
          </div>
          <div class="col-md-2 col-sm-2"/>
        </div>
      </div>
      <!-- Search Box Ends-->
    </div>
    <!-- Inner Content Ends -->
    <!-- Footer Section Start-->
    <FooterSection/>
    <!-- Footer Section Ends-->
  </div>
</template>
<script>
import SearchHeader from "@/components/Partials/SearchHeader.vue";
import Footer from "@/components/Partials/Footer.vue";

export default {
  name: "KeywordSearch",

  components: {
    SearchHeader: SearchHeader,
    FooterSection: Footer
  },

  data() {
    return {
      data: []
    };
  },
  watch: {},
  mounted() {},

  methods: {
    keySearch() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.loading = true;

          this.$store
            .dispatch("retrieveKeySearchResults", {
              pageNum: 1,
              records: 12,
              dataReq: this.data
            })
            .then(() => {
                this.$router.push({
                  name: "searchListing"
                });
              
            });
        }
      });
    },
    reset() {
      this.data = null;
    }
  }
};
</script>