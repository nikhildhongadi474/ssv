<template>
  <!-- Inner Content Start -->
  <div class="inner-content">
    <!-- Notification Alert Box -->
    <!-- <Notification/> -->
    <!-- Notification Alert Box -->
    <!-- Recent Matches Starts -->
    <section class="recent-matches">
      <div class="container">
        <div class="top-title">
          <h3>
            <i class="large material-icons">people</i> Recent Matches
          </h3>
        </div>

        <div class="shortlist-slider">
          <Slick ref="slickone" :options="slickOptions">
            <!-- card[1] -->
            <div v-for="member in getRecentMatches" :key="member.memberId">
              <div class="card">
                <div class="profile-image" v-if="member.photoAlbumEntities">
                  <img
                    :src="'https://www.ssvmatrimony.org/images/' + member.photoAlbumEntities[0].image"
                    onerror="this.onerror=null;this.src='/images/dummy/noimage.png';"
                  >
                </div>
                <div class="profile-image" v-else>
                  <img src="/images/dummy/noimage.png">
                </div>
                <div class="card-details">
                  <div class="profile-content">
                    <h4>{{ member.firstName }} {{ member.lastName }}</h4>
                    <h6>{{ member.username }}</h6>
                    <div class="clearfix"/>
                  </div>
                  <div class="personal-info">
                    <h5>{{ member.age }} years | {{ inFeet(member.height) }}</h5>
                    <h5>
                      <span v-if="member.currentPlace">{{ member.currentPlace }} |</span>
                      {{ member.country.countryName }}
                    </h5>
                    <h5>
                      <span
                        v-if="member.education"
                      >{{ member.education.educationLevel.educationLevelDesc }} |</span>
                      {{ member.occupation ? member.occupation.occupationName : 'Not Mentioned' }}
                    </h5>
                  </div>

                  <div class="contact-more">
                    <button
                      class="btn btn-yellow"
                      v-if="getIsShortlisted(member)"
                      @click="unlistProfile(member, 'recentMatches')"
                    >Unlist</button>
                    <button
                      class="btn btn-yellow"
                      v-else
                      @click="shortlistProfile(member, 'recentMatches')"
                    >Shortlist</button>
                    <a
                      class="btn btn-green"
                      tabindex="0"
                      @click="viewProfile(member.memberId)"
                    >Profile</a>
                    <div class="clearfix"/>
                  </div>
                </div>
                <!-- End of card details -->
              </div>
              <!-- End of card -->
            </div>
          </Slick>
        </div>
        <!-- End of shortlist slider -->
        <a class="btn blank-btn" @click="$router.push('/matches')">View All</a>
      </div>
    </section>
    <!-- Recent Matches Ends -->
    <!-- Recently Joined Matches Starts -->
    <section class="recent-matches">
      <div class="container">
        <div class="top-title">
          <h3>
            <i class="large material-icons">people</i> Recently Joined Matches
          </h3>
        </div>

        <div class="shortlist-slider">
          <Slick ref="slicktwo" :options="slickOptions">
            <div v-for="member in getRecentlyJoined" :key="member.memberId">
              <div class="card">
                <div class="profile-image" v-if="member.photoAlbumEntities.length">
                  <img
                    :src="'https://www.ssvmatrimony.org/images/' + member.photoAlbumEntities[0].image"
                    onerror="this.onerror=null;this.src='/images/dummy/noimage.png';"
                  >
                </div>
                <div class="profile-image" v-else>
                  <img src="/images/dummy/noimage.png">
                </div>
                <div class="card-details">
                  <div class="profile-content">
                    <h4>{{ member.firstName }} {{ member.lastName }}</h4>
                    <h6>{{ member.username }}</h6>
                    <div class="clearfix"/>
                  </div>
                  <div class="personal-info">
                    <h5>{{ member.age }} years | {{ inFeet(member.height) }}</h5>
                    <h5>
                      <span v-if="member.currentPlace">{{ member.currentPlace }} |</span>
                      {{ member.country.countryName }}
                    </h5>
                    <h5>
                      <span
                        v-if="member.education"
                      >{{ member.education.educationLevel.educationLevelDesc }} |</span>
                      {{ member.occupation ? member.occupation.occupationName : 'Not Mentioned' }}
                    </h5>
                  </div>

                  <div class="contact-more">
                    <button
                      class="btn btn-yellow"
                      v-if="getIsShortlisted(member)"
                      @click="unlistProfile(member, 'JoinedMatches')"
                    >Unlist</button>
                    <button
                      class="btn btn-yellow"
                      v-else
                      @click="shortlistProfile(member, 'JoinedMatches')"
                      tabindex="0"
                    >Shortlist</button>
                    <a
                      class="btn btn-green"
                      tabindex="0"
                      @click="viewProfile(member.memberId)"
                    >Profile</a>
                    <div class="clearfix"/>
                  </div>
                </div>
              </div>
            </div>
          </Slick>
        </div>

        <!-- Shortlist Slider Ends -->
        <a class="btn blank-btn" @click="$router.push('/recently-joined')">View All</a>
      </div>
    </section>
    <!-- Recently Joined Matches Ends -->
  </div>
  <!-- Inner Content Ends -->
</template>

<script>
/* global  */
import Slick from "vue-slick";
// import Notification from "@/components/Dashboard/Notification.vue";

export default {
  components: {
    // Notification: Notification,
    Slick: Slick
  },

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
      recentMatches: [],
      recentlyJoined: [],
      serverError: "",
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

  computed: {
    // Get the recent matches for carousel
    getRecentMatches() {
      return this.$store.getters.getRecentMatches;
    },
    // Get recently joined for carousel
    getRecentlyJoined() {
      return this.$store.getters.getRecentlyJoined;
    }
  },

  created() {
    this.$store
      .dispatch("retrieveRecentMatches", { pageNum: 1, records: 5 })
      .then(response => {
        this.recentMatches = response.data.component.items;
      });
    this.$store
      .dispatch("retrieveRecentlyJoined", { pageNum: 1, records: 5 })
      .then(response => {
        this.recentlyJoined = response.data.component.items;
      });
  },

  methods: {
    // //view profile call
    viewProfile: function(memberId) {
      this.$store.dispatch("viewProfile", memberId).then(() => {
        let routeData = this.$router.resolve({name: 'profile', params: {id: memberId}});
        window.open(routeData.href, '_blank');
      });
    },
    getIsShortlisted: function(member) {
      if (member.contactActivity && member.contactActivity.shortListed) {
        return member.contactActivity.shortListed;
      }
      return false;
    },
    //unlist call
    unlistProfile(member, type) {
      this.$store.dispatch("unlistProfile", member.memberId).then(() => {
        if (type == 'recentMatches'){
          this.$store.dispatch("setUnsetAsShortlistedInRecentMatches", { profileId: member.memberId, set: false })
        } else {
          this.$store.dispatch("setUnsetAsShortlistedInRecentJoined", { profileId: member.memberId, set: false })
        }
      });
    },
    // shortlist call
    shortlistProfile(member, type) {
      this.$store.dispatch("shortlistProfile", member.memberId).then(() => {
        if (type == 'recentMatches'){
          this.$store.dispatch("setUnsetAsShortlistedInRecentMatches", { profileId: member.memberId, set: true })
        } else {
          this.$store.dispatch("setUnsetAsShortlistedInRecentJoined", { profileId: member.memberId, set: true })
        }
      });
    },
    inFeet(heightId){
      let height = this.heightoptions.find(height => {
        return (height.heightId == heightId);
      });
      if (height) return height.heightDesc;
      return "Not Mentioned";
    }
  },

  beforeUpdate() {
    if (this.$refs.slickone) {
      this.$refs.slickone.destroy();
    }
    if (this.$refs.slicktwo) {
      this.$refs.slicktwo.destroy();
    }
  },

  updated() {
    this.$nextTick(function() {
      if (this.$refs.slickone) {
        this.$refs.slickone.create(this.slickOptions);
      }
      if (this.$refs.slicktwo) {
        this.$refs.slicktwo.create(this.slickOptions);
      }
    });
  },
};
</script>