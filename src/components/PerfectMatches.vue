<template>
  <div>
    <!-- Header Start -->
    <HeaderSection />
    <!-- Header Ends -->
    <div class="inner-content">
      <div class="container">
        <!-- Top Grid Starts -->
        <div class="well well-sm">
          <div class="col-md-3 col-sm-12 top-title">
            <h3>
              <i class="large material-icons">people</i> Perfect Matches
            </h3>
          </div>

          <!-- Pagination Starts -->
          <div class="col-md-6 col-sm-6 pagination-list">
            <ul class="pagination">
              <li class="previous">
                <a href="#">
                  <i class="fa fa-angle-double-left" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a class="active" href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">5</a>
              </li>
              <li class="next">
                <a href="#">
                  <i class="fa fa-angle-double-right" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
          <!-- Pagination Ends -->

          <div class="col-md-3 col-sm-6">
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
          <ProfileCard />
        </div>
        <!-- Listing Ends -->

        <!-- Pagination -->
        <div class="col-md-12 pagination-list bottom-list">
          <ul class="pagination">
            <li class="previous">
              <a href="#">
                <i class="fa fa-angle-double-left" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a class="active" href="#">1</a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">4</a>
            </li>
            <li>
              <a href="#">5</a>
            </li>
            <li class="next">
              <a href="#">
                <i class="fa fa-angle-double-right" aria-hidden="true" />
              </a>
            </li>
          </ul>
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
export default {
  components: {
    "HeaderSection": Header,
    "FooterSection": Footer,
    "ProfileCard": ProfileCard
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
  }
};
</script>