<template>
  <div>
    <!-- Header Start -->
    <HeaderSection />
    <!-- Header Ends -->
    <div class="inner-content">
      <!-- Recent Matches Starts -->
      <section class="recent-matches">
        <div class="container">
          <div class="top-title">
            <h3>
              <i class="material-icons">search</i> Sorry, we couldn’t find the profile you are looking for!
            </h3>
          </div>

          <div class="top-profile">
            <h2>Why not check our top profiles?</h2>
          </div>

          <div class="shortlist-slider">
            <Slick ref="slickone" :options="slickOptions">
              <!-- card[1] -->
              <div>
                <div class="card">
                  <div class="profile-image">
                    <img src="/images/dummy/profile-image.jpg">
                  </div>
                  <div class="card-details">
                    <div class="profile-content">
                      <h4>Ravi Kumar</h4>
                      <h6>SSVB03452</h6>
                      <div class="clearfix" />
                    </div>
                    <div class="personal-info">
                      <h5>28 | 5’4”</h5>
                      <h5>Maysore | India</h5>
                      <h5>M.TECH | Software Professional</h5>
                    </div>

                    <div class="contact-more">
                      <a href="#" class="btn btn-yellow" tabindex="0">Shortlist</a>
                      <a href="#" class="btn btn-green" tabindex="0">Profile</a>
                      <div class="clearfix" />
                    </div>
                  </div>
                </div>
              </div>

              <!-- card[2] -->
              <div>
                <div class="card">
                  <div class="profile-image">
                    <img src="/images/dummy/profile-image.jpg">
                  </div>
                  <div class="card-details">
                    <div class="profile-content">
                      <h4>Ravi Kumar</h4>
                      <h6>SSVB03452</h6>
                      <div class="clearfix" />
                    </div>
                    <div class="personal-info">
                      <h5>28 | 5’4”</h5>
                      <h5>Maysore | India</h5>
                      <h5>M.TECH | Software Professional</h5>
                    </div>

                    <div class="contact-more">
                      <a href="#" class="btn btn-yellow" tabindex="0">Shortlist</a>
                      <a href="#" class="btn btn-green" tabindex="0">Profile</a>
                      <div class="clearfix" />
                    </div>
                  </div>
                </div>
              </div>

              <!-- card[3] -->
              <div>
                <div class="card">
                  <div class="profile-image">
                    <img src="/images/dummy/profile-image.jpg">
                  </div>
                  <div class="card-details">
                    <div class="profile-content">
                      <h4>Ravi Kumar</h4>
                      <h6>SSVB03452</h6>
                      <div class="clearfix" />
                    </div>
                    <div class="personal-info">
                      <h5>28 | 5’4”</h5>
                      <h5>Maysore | India</h5>
                      <h5>M.TECH | Software Professional</h5>
                    </div>

                    <div class="contact-more">
                      <a href="#" class="btn btn-yellow" tabindex="0">Shortlist</a>
                      <a href="#" class="btn btn-green" tabindex="0">Profile</a>
                      <div class="clearfix" />
                    </div>
                  </div>
                </div>
              </div>

              <!-- card[4] -->
              <div>
                <div class="card">
                  <div class="profile-image">
                    <img src="/images/dummy/profile-image.jpg">
                  </div>
                  <div class="card-details">
                    <div class="profile-content">
                      <h4>Ravi Kumar</h4>
                      <h6>SSVB03452</h6>
                      <div class="clearfix" />
                    </div>
                    <div class="personal-info">
                      <h5>28 | 5’4”</h5>
                      <h5>Maysore | India</h5>
                      <h5>M.TECH | Software Professional</h5>
                    </div>

                    <div class="contact-more">
                      <a href="#" class="btn btn-yellow" tabindex="0">Shortlist</a>
                      <a href="#" class="btn btn-green" tabindex="0">Profile</a>
                      <div class="clearfix" />
                    </div>
                  </div>
                </div>
              </div>

              <!-- card[5] -->
              <div>
                <div class="card">
                  <div class="profile-image">
                    <img src="/images/dummy/profile-image.jpg">
                  </div>
                  <div class="card-details">
                    <div class="profile-content">
                      <h4>Ravi Kumar</h4>
                      <h6>SSVB03452</h6>
                      <div class="clearfix" />
                    </div>
                    <div class="personal-info">
                      <h5>28 | 5’4”</h5>
                      <h5>Maysore | India</h5>
                      <h5>M.TECH | Software Professional</h5>
                    </div>

                    <div class="contact-more">
                      <a href="#" class="btn btn-yellow" tabindex="0">Shortlist</a>
                      <a href="#" class="btn btn-green" tabindex="0">Profile</a>
                      <div class="clearfix" />
                    </div>
                  </div>
                </div>
              </div>
            </Slick>  
          </div>
          <!-- Shortlist Slider Ends -->
          <a href="matches.html" class="btn blank-btn">View All</a>
        </div>
      </section>
      <!-- Recent Matches Ends -->
    </div>

    <!-- Footer Section Start-->
    <FooterSection />
    <!-- Footer Section Ends-->
  </div>
</template>

<script>
/* global  */
import Slick from "vue-slick";
import Header from "@/components/Partials/Header.vue";
import Footer from "@/components/Partials/Footer.vue";
export default {
  mounted() {},
  methods: {},
  components: {
    "HeaderSection": Header,
    "FooterSection": Footer,
    Slick: Slick
  },
  data() {
    return {
      slickOptions: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        draggable: false,
        autoplaySpeed: 3000,
        prevArrow:
          '<div class="slick-prev"> <i class="material-icons">chevron_left</i> </div>',
        nextArrow:
          '<div class="slick-next"> <i class="material-icons">chevron_right</i> </div>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    };
  },

};
</script>