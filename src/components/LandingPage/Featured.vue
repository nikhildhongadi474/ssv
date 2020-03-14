<template>
  <div>
    <!-- Featured Brides & Grooms Section Starts -->
    <div class="featured-listing">
      <div class="container">
        <div class="bride-listing">
          <h1 class="section-title">Featured Brides</h1>

          <div class="featured-slider">
            <Slick ref="slickbride" :options="slickOptions">
              <!-- Slide -->
              <div v-for="brides in bridesJson" :key="brides.id">
                <div class="card">
                  <div class="card-image">
                    <img :src="brides.photoAlbumEntities[0].image">
                  </div>
                  <div class="card-details">
                    <h5>
                       <span
                        v-if="brides.age"
                      >{{ brides.age }} years </span>

                      <span
                        v-if="brides.height"
                      > | {{ inFeet(brides.height) }} </span>      
                    </h5>

                    <h5> 
                      <span v-if="brides.currentPlace">{{ brides.currentPlace }} </span> 

                      <span v-if="brides.education"> | {{ brides.education }} </span>
                    
                    </h5>

                    <h5>
                      <span v-if="brides.occupation.occupationName">{{ brides.occupation.occupationName }} </span>
                    </h5>

                    <button
                      type="button"
                      class="btn btn-yellow"
                      data-toggle="modal"
                      @click="showingModal(brides)"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
              <!-- End -->
            </Slick>
          </div>
          <!-- Bride Slider Ends -->
        </div>
        <!-- Bride Listing Ends -->
        
        <!-- Groom Listing Ends -->
        <div class="groom-listing">
          <h1 class="section-title">Featured Grooms</h1>
          <div class="featured-slider">
            <Slick ref="slickgroom" :options="slickOptions">
              <!-- Slide -->
              <div v-for="grooms in groomsJson" :key="grooms.id">
                <div class="card">
                  <div class="card-image">
                    <img :src="grooms.photoAlbumEntities[0].image">
                  </div>
                  <div class="card-details">
                    <h5>
                       <span
                        v-if="grooms.age"
                      >{{ grooms.age }} years </span>

                      <span
                        v-if="grooms.height"
                      > | {{ inFeet(grooms.height) }} </span>      
                    </h5>

                    <h5> 
                      <span v-if="grooms.currentPlace">{{ grooms.currentPlace }} </span> 

                      <span v-if="grooms.education"> | {{ grooms.education }} </span>
                    
                    </h5>

                    <h5>
                      <span v-if="grooms.occupation.occupationName">{{ grooms.occupation.occupationName }} </span>
                    </h5>

                    <button type="button" class="btn btn-yellow" @click="showingModal(grooms)">Details</button>
                  </div>
                </div>
              </div>
              <!-- End -->
            </Slick>
          </div>
          <!-- Groom Slider Ends -->
        </div>
        <!-- Groom Listing Ends -->
      </div>
    </div>
    <!-- Featured Brides & Grooms Section Ends -->

    <!-- Profile Details -->

    <!-- Modal -->
    <div v-if="showModal" class="detail-modal">
      <Transition name="modal">
        <div class="modal-mask">
          <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content">
              <div class="modal-wrapper">
                <div class="modal-header">
                  <button type="button" class="close" @click="showModal=false">&times;</button>
                </div>

                <div class="modal-body">
                  <!-- Profile Modal Descriptiion Starts -->
                  <div class="profile-modal-desc">
                    <div class="col-md-2 profile-modal-img">
                      <img :src="detailmodalData.photoAlbumEntities[0].image">
                    </div>

                    <div class="col-md-10 profile-modal-content">
                      <div class="row">
                        <div class="col-md-8">
                          <h5>
                            <span
                        v-if="detailmodalData.age"
                      >{{ detailmodalData.age }} years </span>

                          <span
                        v-if="detailmodalData.height"
                      >| {{ detailmodalData.height }} ft </span>
                          </h5>

                          <h5>

                            <span
                        v-if="detailmodalData.currentPlace"
                      >{{ detailmodalData.currentPlace }}</span>

                          <span
                        v-if="detailmodalData.education"
                      >| {{ detailmodalData.education }}</span>

                          <span
                        v-if="detailmodalData.occupation.occupationName"
                      >| {{ detailmodalData.occupation.occupationName }} </span>
 
                          </h5>
                        </div>

                        <div class="col-md-4">
                          <ul class="profile-connect disabled">
                            <li>
                              <a href="#" target="_blank">
                                <i class="large material-icons">call</i>
                              </a>
                            </li>
                            <li>
                              <a href="#" target="_blank">
                                <i class="large material-icons">star</i>
                              </a>
                            </li>
                            <li>
                              <a href="#" target="_blank">
                                <img src="/images/icons/facebook.png">
                              </a>
                            </li>
                            <li>
                              <a href="#" target="_blank">
                                <i class="large material-icons">mail</i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-12">
                          <p>
                            <span
                        v-if="detailmodalData.description"
                      >{{ detailmodalData.description }}</span>
                      <span v-else>Not Mentioned</span>
                          </p>
                        </div>
                      </div>

                      <div class="row profile-bottom">

                        <div class="col-md-6">
                          <ul class="all-img disabled">
                            <li>
                              <img src="/images/dummy/profile-small.png">
                            </li>
                            <li>
                              <img src="/images/dummy/profile-small.png">
                            </li>
                            <li>
                              <img src="/images/dummy/profile-small.png">
                            </li>
                            <li>
                              <img src="/images/dummy/profile-small.png">
                            </li>
                            <li>
                              <img src="/images/dummy/profile-small.png">
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div class="clearfix" />
                    </div>

                    <div class="clearfix" />
                  </div>
                  <!-- Profile Modal Descriptiion Ends -->
                  <!-- Quick Login Starts  -->
                  <div class="quick-login">
                    <SignUpForm />
                  </div>
                  <!-- Login Starts Ends -->
                </div>
                <!-- Modal Body Ends -->
              </div>
              <!-- Modal Wrapper Ends -->
            </div>
            <!-- Modal Content Ends -->
          </div>
        </div>
      </Transition>
    </div>
    <!-- Modal Ends -->
    
  </div>
</template>

<script>
import Slick from "vue-slick";
import SignUpForm from "@/components/Global/SignUpForm.vue";
import groomsData from "../../assets/json/homepage/grooms.json";
import bridesData from "../../assets/json/homepage/brides.json";

export default {
  data() {
    return {
      heightoptions: [
        { heightId: "48", heightDesc: "4 ft 0 in" },
        { heightId: "49", heightDesc: "4 ft 1 in" },
        { heightId: "50", heightDesc: "4 ft 2 in" },
        { heightId: "51", heightDesc: "4 ft 3 in" },
        { heightId: "52", heightDesc: "4 ft 4 in" },
        { heightId: "53", heightDesc: "4 ft 5 in" },
        { heightId: "54", heightDesc: "4 ft 6 in" },
        { heightId: "55", heightDesc: "4 ft 7 in" },
        { heightId: "56", heightDesc: "4 ft 8 in" },
        { heightId: "57", heightDesc: "4 ft 9 in" },
        { heightId: "58", heightDesc: "4 ft 10 in" },
        { heightId: "59", heightDesc: "4 ft 11 in" },
        { heightId: "60", heightDesc: "5 ft 0 in" },
        { heightId: "61", heightDesc: "5 ft 1 in" },
        { heightId: "62", heightDesc: "5 ft 2 in" },
        { heightId: "63", heightDesc: "5 ft 3 in" },
        { heightId: "64", heightDesc: "5 ft 4 in" },
        { heightId: "65", heightDesc: "5 ft 5 in" },
        { heightId: "66", heightDesc: "5 ft 6 in" },
        { heightId: "67", heightDesc: "5 ft 7 in" },
        { heightId: "68", heightDesc: "5 ft 8 in" },
        { heightId: "69", heightDesc: "5 ft 9 in" },
        { heightId: "70", heightDesc: "5 ft 10 in" },
        { heightId: "71", heightDesc: "5 ft 11 in" },
        { heightId: "72", heightDesc: "6 ft 0 in" },
        { heightId: "73", heightDesc: "6 ft 1 in" },
        { heightId: "74", heightDesc: "6 ft 2 in" },
        { heightId: "75", heightDesc: "6 ft 3 in" },
        { heightId: "76", heightDesc: "6 ft 4 in" },
        { heightId: "77", heightDesc: "6 ft 5 in" }
      ],
      groomsJson: groomsData,
      bridesJson: bridesData,
      showModal: false,
      detailmodalData: [],
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
  components: {
    "SignUpForm": SignUpForm,
    Slick: Slick
  },
  methods: {
    showingModal: function(data) {
      this.showModal = true;
      this.detailmodalData = data;
    },
    beforeUpdate() {
      if (this.$refs.slickbride) {
        this.$refs.slickbride.destroy();
      }
      if (this.$refs.slickgroom) {
        this.$refs.slickgroom.destroy();
      }
    },
    inFeet(heightId) {
      let height = this.heightoptions.find(height => {
        return height.heightId == heightId;
      });
      if (height) return height.heightDesc;
      return "Not Mentioned";
    }

  },
  updated() {
    this.$nextTick(function() {
      if (this.$refs.slickbride) {
        this.$refs.slickbride.create(this.slickOptions);
      }
      if (this.$refs.slickgroom) {
        this.$refs.slickgroom.create(this.slickOptions);
      }
    });
  },
  
};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
.modal-wrapper {
  vertical-align: middle;
}
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}
.modal-body {
  margin: 20px 0;
}
</style>