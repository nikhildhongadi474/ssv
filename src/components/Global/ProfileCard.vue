<template>
  <div class="item col-xs-12 col-sm-6 col-lg-3">
    <div class="thumbnail">
      <!-- Grid Starts -->
      <div class="card-wrapper">
        <div class="card">
          <div class="profile-image">
            <img
              class="group list-group-image"
              v-bind:src="profilePic"
              onerror="this.onerror=null;this.src='/images/dummy/noimage.png';"
            >
          </div>
          <div class="card-details">
            <div class="profile-content">
              <h4>{{ profile.firstName }} {{ profile.lastName }}</h4>
              <h6>{{ profile.username }}</h6>
              <div class="clearfix"/>
            </div>
            <div class="personal-info">
              <h5>{{ profile.age }} years | {{ inFeet(profile.height) }}</h5>
              <h5>
                <span v-if="profile.currentPlace">{{ profile.currentPlace }} |</span>
                <span v-if="profile.country">{{ profile.country.countryName }}</span>
              </h5>
              <h5>
                <span
                  v-if="profile.education"
                >{{ profile.education.educationLevel.educationLevelDesc }} |</span>
                <span v-if="profile.occupation">{{ profile.occupation.occupationName }}</span>
              </h5>
            </div>

            <div class="contact-more">
              <button class="btn btn-yellow" v-if="getIsShortlisted" @click="unlistProfile">Unlist</button>
              <button class="btn btn-yellow" v-else @click="shortlistProfile">Shortlist</button>
              <button class="btn btn-green" @click="viewProfile">Profile</button>

              <div class="clearfix"/>
            </div>
          </div>
        </div>
      </div>
      <!-- Grid Ends -->

      <!-- List Starts -->
      <div class="profile-modal-desc">
        <div class="col-md-3 col-sm-3 profile-modal-img">
          <a href="javascript:void(0);">
            <img
              v-bind:src="profilePic"
              onerror="this.onerror=null;this.src='/images/dummy/noimage.png';"
              @click="openGallery(0)"
            >
          </a>
        </div>

        <div class="col-md-9 col-sm-9 profile-modal-content">
          <div class="row">
            <div class="col-md-8 col-sm-8 col-xs-12">
              <h5> <span class="profile-name">{{ profile.firstName }} {{ profile.lastName }} |</span> <span class="profile-id">{{ profile.username }}</span> </h5>

              <h5> <strong>Age:</strong> <span class="profile-height"> {{ profile.age }} </span> yr </h5>

              <h5> <strong>Height:</strong> <span class="profile-height"> {{ inFeet(profile.height) }} </span> </h5>

              <h5> <strong>Weight:</strong> <span class="profile-height">{{ profile.weight }} kg </span> </h5>

              <h5> 
                <span v-if="profile.currentPlace" class="profile">
                  <strong>Current Place:</strong> {{ profile.currentPlace }}, {{ profile.state.stateName }}, {{ profile.country.countryName }} 
                </span>
              </h5>

              <h5> 
                <span class="profile" v-if="profile.cast">
                  <strong>Caste:</strong> {{ profile.cast.castName }} | <strong>Sub Caste:</strong> {{ profile.subCast.subCastName }} </span>
              </h5>

              <h5>     
                <span class="profile" v-if="profile.language">
                  <strong>Language:</strong> {{ profile.language.languageName }}
                </span>
              </h5>

              <h5>
                <span v-if="profile.education">
                  <strong>Education:</strong>
                   {{ profile.education.educationLevel.educationLevelDesc }} 
                </span>
              </h5>

              <h5>
                <span v-if="profile.occupation">
                  <strong>Occupation:</strong>
                  {{ profile.occupation.occupationName }}
                </span>
              </h5>

              <h5>
                <span v-if="profile.maritalStatus">
                  <strong>Marital Status</strong> {{ profile.maritalStatus.msName }}
                </span>
              </h5>

              <h5>
                <span v-if="profile.createdFor">
                  <strong>Created By:</strong>
                  {{ profile.createdFor.createdByDesc }}
                </span>
              </h5>

              <p>
                <span v-if="profile.personalInfoEntity"> 
                  <strong> About Me: </strong> {{ profile.personalInfoEntity.description }}
                </span>
                <span v-else> <strong> About Me: </strong> No description provided</span>
              </p>

            </div>

            <div class="col-md-4 col-sm-4 col-xs-12">
              <SocialConnect :profile="profile"/>
            </div>
          </div>


          <div class="row profile-bottom">
            <div class="col-md-3 col-sm-5 col-xs-12">
              <div class="contact-more">
                <button class="btn btn-yellow" v-if="getIsShortlisted" @click="unlistProfile">Unlist</button>
                <button class="btn btn-yellow" v-else @click="shortlistProfile">Shortlist</button>
                <button class="btn btn-green" @click="viewProfile">Profile</button>

                <div class="clearfix"/>
              </div>
            </div>

            <div class="col-md-9 col-sm-7 col-xs-12">
              <ul class="all-img" v-if="profile.photoAlbumEntities">
                <li v-for="(item, index) in profile.photoAlbumEntities.slice(0,4)" :key="index">
                  <a href="javascript:void(0);">
                    <img
                      v-bind:src="'https://www.ssvmatrimony.org/images' + item.image"
                      @click="openGallery(index)"
                      onerror="this.onerror=null;this.src='/images/dummy/noimage.png';"
                    >
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="clearfix"/>
        </div>

        <div class="clearfix"/>
      </div>
      <!-- List Ends -->
    </div>
    <LightBox
      :siteLoading="'/images/dummy/noimage.png'"
      :images="lightBoxImages"
      ref="lightbox"
      :showThumbs="true"
      :show-caption="true"
      :show-light-box="false"
    ></LightBox>
  </div>
</template>
  
  
<script>
import SocialConnect from "@/components/Global/SocialConnect.vue";
import LightBox from "vue-image-lightbox";

export default {
  name: "ProfileCard",
  components: {
    SocialConnect: SocialConnect,
    LightBox
  },

  props: {
    profileProps: {
      default: () => ({
        id: null,
        reqFrom: null
      })
    }
  },

  data() {
    return {
      profile: [],
      shortlisted: null,
      lightBoxImages: [],
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
      ]
    };
  },

  computed: {
    getIsShortlisted() {
      return this.shortlisted;
    },
    ifConnectionAllowed() {
      // if membership and packages have not expired, allow connections
      return (
        this.$store.getters.getIfMyContactsLeft &&
        !this.$store.getters.getIfMyPackageExpired
      );
    },
    profilePic: {
      get() {
        if (this.profile.photoAlbumEntities) {
          let profileImage = this.profile.photoAlbumEntities.find((gallery, k) => {
            return k == 0;
          });

          if (profileImage) {
            return "https://www.ssvmatrimony.org/images/" + profileImage.image;
          }
        }

        return "/images/dummy/noimage.png";
      },
      set() {}
    }
  },

  mounted() {
    if (this.profileProps.id != 0) {
      switch (this.profileProps.reqFrom) {
        case 0:
        default:
          break;
        case 1: //req coming recent matches
          this.profile = this.$store.getters.getRMProfileById(
            this.profileProps.id
          );
          break;

        case 2: // req coming from recently joined
          this.profile = this.$store.getters.getRJProfileById(
            this.profileProps.id
          );
          break;

        case 3: // req coming from shortlisted
          this.profile = this.$store.getters.getSLProfileById(
            this.profileProps.id
          );
          break;

        case 4: // req coming from search listing
          this.profile = this.$store.getters.getSearchedProfileById(
            this.profileProps.id
          );
          break;
      }

      if (
        this.profile.contactActivity &&
        this.profile.contactActivity.shortListed
      ) {
        this.shortlisted = this.profile.contactActivity.shortListed;
      }
    }
    // this.lightBoxImages = this.$store.getters.getLightBoxImages;
  },
  watch: {
    profile(newValues) {
      let images = newValues.photoAlbumEntities.map(image => {
        return {
          thumb: "https://www.ssvmatrimony.org/images" + image.thumbnail,
          src: "https://www.ssvmatrimony.org/images" + image.image
        };
      });
      this.lightBoxImages = images;
    }
  },

  methods: {
    // shortlist call
    shortlistProfile() {
      this.$store
        .dispatch("shortlistProfile", this.profile.memberId)
        .then(() => {
          this.shortlisted = true;
        });
    },

    //unlist call
    unlistProfile() {
      this.$store.dispatch("unlistProfile", this.profile.memberId).then(
        () => {
          this.shortlisted = false;
        },
        () => {
          this.shortlisted = false;
        }
      );
    },

    //view profile call
    viewProfile() {
      this.$store.dispatch("viewProfile", this.profile.memberId).then(() => {
        let routeData = this.$router.resolve({
          name: "profile",
          params: { id: this.profile.memberId }
        });
        window.open(routeData.href, "_blank");
      });
    },
    openGallery(index) {
      this.$refs.lightbox.showImage(index);
    },
    inFeet(heightId) {
      let height = this.heightoptions.find(height => {
        return height.heightId == heightId;
      });
      if (height) return height.heightDesc;
      return "Not Mentioned";
    }
  }
};
</script>

<style>
</style>
