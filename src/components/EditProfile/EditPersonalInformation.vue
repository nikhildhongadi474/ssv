<template>
  <div>
    <div class="form-division">
      <div class="top-title">
        <h3>
          <i class="large material-icons">account_circle</i> Add your photos
        </h3>
      </div>

      <div class="card-content">
        <!-- Profile Picture -->
        <div class="row form-wrapper">
          <div class="col-md-3">
            <MyUpload
              field="image"
              @crop-success="cropSuccess"
              @crop-upload-success="cropUploadSuccess"
              @crop-upload-fail="cropUploadFail"
              v-model="show"
              :width="300"
              :height="300"
              :params="params"
              :headers="headers"
              :url="cropUploadUrl"
              lang-type="en"
            />
            <!-- <div class="upload-picture">
              <img style="width:100%;" :src="imgDataUrl">
              <a @click="showUpdateImageModel" class="upload-btn">Upload Picture</a>
            </div>-->
          </div>

          <div class="col-md-9 form-group">
            <h5 class="field-label">Additional Photos</h5>
            <div class="single-gallery">
              <ul v-if="memberData.photoAlbumEntities">
                <li class="min-height-140" v-for="index in this.photoCount" :key="index">
                  <div class="col-md-12" v-if="memberData.photoAlbumEntities[index]">
                    <div class="upload-picture">
                      <img
                        style="width:100%;"
                        :src="'https://www.ssvmatrimony.org/images' + memberData.photoAlbumEntities[index].image"
                      >
                    </div>

                    <div v-if="memberData.photoAlbumEntities[index].isProfilePic !== 'Y'">
                      <a
                        href="javascript:void(0);"
                        class="set-as-profile-pic"
                        @click="setAsProfilePicture(memberData.photoAlbumEntities[index].photoId)"
                        v-tooltip.top-center="'Set as profile pic'"
                      >
                        <i class="fa fa-user picture-actions"></i>
                        <!-- <u>Set as profile pic</u> -->
                      </a>
                      <a
                        href="javascript:void(0);"
                        class="remove-profile-pic ml-2"
                        @click="deletePicture(memberData.photoAlbumEntities[index].photoId)"
                        v-tooltip.top-center="'Remove from gallery'"
                      >
                        <i class="fa fa-remove picture-actions"></i>
                        <!-- <u>Remove</u> -->
                      </a>
                    </div>
                    <div v-else>
                      <a href="javascript:void(0);">Current Profile Pic</a>
                    </div>
                  </div>
                  <div class="col-md-12" v-else>
                    <div class="upload-picture">
                      <img style="width:100%;">
                      <a @click="showUpdateImageModel" class="upload-btn">Upload Picture</a>
                    </div>
                  </div>
                </li>
              </ul>
              <span v-else>No images found</span>
            </div>
          </div>
        </div>
        <!-- End -->
      </div>

      <!-- Card Content Ends -->
    </div>

    <!-- Brief Introduction -->
    <div class="form-division">
      <div class="top-title">
        <h3>
          <i class="large material-icons">import_contacts</i> About You
        </h3>
      </div>

      <!-- Brief Introduction -->
      <div class="card-content">
        <div class="row form-wrapper">
          <div class="col-md-12">
            <h5 class="field-label">
              A brief about you
              <span class="required">*</span>
            </h5>
          </div>

          <div class="col-md-8 form-group">
            <textarea
              v-model="personalInformationData.description"
              v-validate="{ required: true, max: 2000 }"
              name="description"
              class="form-control"
              rows="5"
              placeholder="A brief about you"
            />
            <div class="error">{{ errors.first('description') }}</div>
          </div>
        </div>
      </div>
      <!-- End -->
    </div>

    <!-- Physical details -->
    <div class="form-division">
      <div class="top-title">
        <h3>
          <i class="large material-icons">directions_run</i> About your physical details
        </h3>
      </div>

      <div class="card-content">
        <div class="row form-wrapper">
          <div class="col-md-3 form-group">
            <h5 class="field-label">
              Height
              <span class="required">*</span>
            </h5>
            <Multiselect
              v-model="heightValue"
              placeholder="Select or start typing"
              label="heightDesc"
              track-by="heightId"
              :options="heightoptions"
              :multiple="false"
              :close-on-select="true"
              :preserve-search="true"
              :searchable="true"
              v-validate="'required'"
              data-vv-name="Height"
              data-vv-value-path="Height"
            />
            <div v-show="errors.has('Height')" class="error">{{ errors.first('Height') }}</div>
          </div>

          <div class="col-md-3 form-group">
            <h5 class="field-label">
              Weight
              <span class="required">*</span>
            </h5>
            <Multiselect
              v-model="weightValue"
              placeholder="Select or start typing"
              label="weightDesc"
              track-by="weightId"
              :options="weightoptions"
              :multiple="false"
              :close-on-select="true"
              :preserve-search="true"
              :searchable="true"
              v-validate="'required'"
              data-vv-name="Weight"
              data-vv-value-path="Weight"
            />
            <div v-show="errors.has('Weight')" class="error">{{ errors.first('Weight') }}</div>
          </div>

          <div class="col-md-4 form-group">
            <h5 class="field-label">
              Complexion
              <span class="required">*</span>
            </h5>
            <Multiselect
              v-model="complexionValue"
              :options="complexionoptions"
              placeholder="Select or start typing"
              label="complexionType"
              track-by="complexionId"
              :multiple="false"
              :close-on-select="true"
              :preserve-search="true"
              :searchable="true"
              v-validate="'required'"
              data-vv-name="Complexion"
              data-vv-value-path="Complexion"
            />
            <div v-show="errors.has('Complexion')" class="error">{{ errors.first('Complexion') }}</div>
          </div>
        </div>

        <div class="row form-wrapper">
          <div class="col-md-4 form-group">
            <h5 class="field-label">
              Body Type
              <span class="required">*</span>
            </h5>
            <Multiselect
              v-model="bodyTypeValue"
              :options="bodytypeoptions"
              placeholder="Select or start typing"
              label="bodyTypeName"
              track-by="bodyTypeId"
              :multiple="false"
              :close-on-select="true"
              :preserve-search="true"
              :searchable="true"
              v-validate="'required'"
              data-vv-name="Body Type"
              data-vv-value-path="Body Type"
            />
            <div v-show="errors.has('Body Type')" class="error">{{ errors.first('Body Type') }}</div>
          </div>

          <div class="col-md-4 form-group">
            <h5 class="field-label">
              Disability
              <span class="required">*</span>
            </h5>
            <Multiselect
              v-model="disabilityValue"
              :options="disabilityoptions"
              placeholder="Select or start typing"
              label="disabilityType"
              track-by="disabilityId"
              :multiple="false"
              :close-on-select="true"
              :preserve-search="true"
              :searchable="true"
              v-validate="'required'"
              data-vv-name="Disability"
              data-vv-value-path="Disability"
            />
            <div v-show="errors.has('Disability')" class="error">{{ errors.first('Disability') }}</div>
          </div>

          <div class="col-md-4 form-group">
            <h5 class="field-label">Blood Group</h5>
            <Multiselect
              v-model="personalInformationData.bloodGroup"
              :options="bloodgroupoptions"
              placeholder="Select or start typing"
              label="bgType"
              track-by="bloodGroupId"
              :multiple="false"
              :close-on-select="true"
              :preserve-search="true"
              :searchable="true"
            />
          </div>
        </div>
      </div>
      <!-- Card Content Ends -->
    </div>
    <!-- Physical details Ends -->
    <!-- Interests and Hobbies -->
    <div class="form-division">
      <div class="top-title">
        <h3>
          <i class="large material-icons">people</i> Interests and Hobbies
        </h3>
      </div>

      <div class="card-content">
        <!-- Interest -->
        <div class="row form-wrapper">
          <div class="col-md-4 form-group">
            <h5 class="field-label">Interests</h5>
            <Multiselect
              v-model="personalInformationData.interests"
              placeholder="Select or start typing"
              label="interestName"
              track-by="interestId"
              :options="interestoptions"
              :multiple="true"
              :close-on-select="true"
              :preserve-search="true"
              :searchable="true"
            />
          </div>

          <div class="col-md-4 form-group">
            <h5 class="field-label">Hobbies</h5>
            <Multiselect
              v-model="personalInformationData.hobbies"
              placeholder="Select or start typing"
              label="hobbyName"
              track-by="hobbyId"
              :options="hobbiesoptions"
              :multiple="true"
              :close-on-select="true"
              :preserve-search="true"
              :searchable="true"
            />
          </div>

          <div class="col-md-4 form-group">
            <h5 class="field-label">Facebook Link</h5>
            <input
              v-model="personalInformationData.facebook"
              v-validate="{ max: 255 }"
              name="facebook-id"
              type="text"
              class="form-control"
              id="facebook-link"
              placeholder="Enter Facebook Id"
            >
            <div class="error">{{ errors.first('facebook-id') }}</div>
          </div>
        </div>

        <div class="row form-wrapper">
          <div class="col-md-4 form-group">
            <h5 class="field-label">Food / Diet Type</h5>
            <Multiselect
              v-model="personalInformationData.diet"
              placeholder="Select or start typing"
              label="dietType"
              track-by="dietId"
              :options="dietoptions"
              :multiple="false"
              :close-on-select="true"
              :preserve-search="true"
              :searchable="true"
            />
          </div>

          <div class="col-md-4 form-group">
            <h5 class="field-label">Drinking Habits</h5>
            <Multiselect
              v-model="personalInformationData.drink"
              tag-placeholder="Add this as new tag"
              placeholder="Select or start typing"
              label="drinkDesc"
              track-by="drinkId"
              :options="drinkoptions"
              :multiple="false"
              :close-on-select="true"
              :preserve-search="true"
              :searchable="true"
            />
          </div>

          <div class="col-md-4 form-group">
            <h5 class="field-label">Smoking Habits</h5>
            <Multiselect
              v-model="personalInformationData.smoke"
              placeholder="Select or start typing"
              label="smokeLevel"
              track-by="smokeId"
              :options="smokeoptions"
              :multiple="false"
              :close-on-select="true"
              :preserve-search="true"
              :searchable="true"
            />
          </div>
        </div>
      </div>
      <!-- Card Content Ends -->
    </div>
    <!-- Interests and Hobbies Ends -->
    <!-- Astrological Details -->
    <div class="form-division">
      <div class="top-title">
        <h3>
          <i class="large material-icons">star</i> Add your astrological details
        </h3>
      </div>

      <div class="card-content">
        <!-- Gotra, Birth Star, Moon Sign -->
        <div class="row form-wrapper">
          <!-- Birth Star -->
          <div class="col-md-4 form-group">
            <h5 class="field-label">Birth Star</h5>
            <Multiselect
              v-model="personalInformationData.star"
              :options="birthstaroptions"
              placeholder="Select or start typing"
              label="starName"
              track-by="starId"
              :multiple="false"
              :close-on-select="true"
              :preserve-search="true"
              :searchable="true"
            />
          </div>
          <!-- End -->
          <!-- Moon Sign -->
          <div class="col-md-4 form-group">
            <h5 class="field-label">Raasi / Moon Sign</h5>
            <Multiselect
              v-model="personalInformationData.moonSign"
              :options="moonsignoptions"
              placeholder="Select or start typing"
              label="moonSignName"
              track-by="moonSignId"
              :multiple="false"
              :close-on-select="true"
              :preserve-search="true"
              :searchable="true"
            />
          </div>
          <!-- End -->
          <!-- Gotra -->
          <div class="col-md-4 form-group">
            <h5 class="field-label">Gotra</h5>
            <input
              v-validate="{ max: 60 }"
              name="gotra"
              type="text"
              class="form-control"
              id="gotra"
              placeholder="Enter Gotra"
              v-model="personalInformationData.gotra"
            >
            <div class="error">{{ errors.first('gotra') }}</div>
          </div>
          <!-- End -->
        </div>
        <!-- End -->
        <!-- City, State, Country -->
        <div class="row form-wrapper">
          <div class="col-md-4 form-group">
            <h5 class="field-label">Birth Country</h5>
            <Multiselect
              v-model="birthCountryValue"
              :options="countryoptions"
              :multiple="false"
              :close-on-select="true"
              :preserve-search="true"
              :searchable="true"
              placeholder="Select country or start typing"
              label="countryName"
              track-by="countryId"
            />
          </div>

          <div
            v-if="birthCountryValue && Object.keys(birthCountryValue).length && birthCountryValue.states"
          >
            <div v-if="birthCountryValue.states.length">
              <div class="col-md-4 form-group">
                <h5 class="field-label">Birth State</h5>
                <Multiselect
                  v-model="birthStateValue"
                  :options="stateOptions"
                  placeholder="Select state or start typing"
                  label="stateName"
                  track-by="stateId"
                  :multiple="false"
                />
              </div>
            </div>
          </div>

          <div class="col-md-4 form-group">
            <h5 class="field-label">Birth City</h5>
            <input
              v-model="personalInformationData.birthCity"
              v-validate="{ max: 125 }"
              name="birth-city"
              class="form-control"
              type="text"
              placeholder="Enter city"
            >
            <div class="error">{{ errors.first('birth-city') }}</div>
          </div>
        </div>
      </div>
      <!-- Card Content Ends -->
      <div class="bottom-buttons">
        <button class="btn btn-red" @click="onSaveButtonPress">Save</button>
        <a
          href="javascript:void(0);"
          class="btn blank-btn"
          @click="viewProfile(personalInformationData.memberId)"
        >Reset</a>
      </div>
    </div>
    <LightBox
      :siteLoading="'/images/dummy/noimage.png'"
      :images="lightBoxImages"
      ref="lightbox"
      :showThumbs="true"
      :show-caption="true"
      :show-light-box="false"
    ></LightBox>
    <!-- Astrological Details Ends -->
  </div>
</template>

<script>
//plugins
import Vue from "vue";
import Multiselect from "vue-multiselect";
import MyUpload from "vue-image-crop-upload";
import { mapGetters, mapActions } from "vuex";
import LightBox from "vue-image-lightbox";
import VTooltip from "v-tooltip";
import Swal from "sweetalert2";
Vue.use(VTooltip);

// Json files

import CountryData from "../../assets/json/info/country.json";
import ComplexionData from "../../assets/json/info/complexion.json";
import BodytypeData from "../../assets/json/info/body-type.json";
import DisabilityData from "../../assets/json/info/disability.json";
import BloodgroupData from "../../assets/json/info/blood-group.json";
import InterestData from "../../assets/json/info/interest.json";
import HobbiesData from "../../assets/json/info/hobby.json";
import DietData from "../../assets/json/info/diet.json";
import DrinkData from "../../assets/json/info/drink.json";
import SmokeData from "../../assets/json/info/smoke.json";
import BirthstarData from "../../assets/json/info/birth-star.json";
import MoonsignData from "../../assets/json/info/moon-sign.json";

export default {
  data() {
    return {
      photoCount: [0, 1, 2, 3, 4, 5],
      activeTab: this.$store.state.activeTab,
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
      weightoptions: [
        { weightId: "40", weightDesc: "40 kg" },
        { weightId: "41", weightDesc: "41 kg" },
        { weightId: "42", weightDesc: "42 kg" },
        { weightId: "43", weightDesc: "43 kg" },
        { weightId: "44", weightDesc: "44 kg" },
        { weightId: "45", weightDesc: "45 kg" },
        { weightId: "46", weightDesc: "46 kg" },
        { weightId: "47", weightDesc: "47 kg" },
        { weightId: "48", weightDesc: "48 kg" },
        { weightId: "49", weightDesc: "49 kg" },
        { weightId: "50", weightDesc: "50 kg" },
        { weightId: "51", weightDesc: "51 kg" },
        { weightId: "52", weightDesc: "52 kg" },
        { weightId: "53", weightDesc: "53 kg" },
        { weightId: "54", weightDesc: "54 kg" },
        { weightId: "55", weightDesc: "55 kg" },
        { weightId: "56", weightDesc: "56 kg" },
        { weightId: "57", weightDesc: "57 kg" },
        { weightId: "58", weightDesc: "58 kg" },
        { weightId: "59", weightDesc: "59 kg" },
        { weightId: "60", weightDesc: "60 kg" },
        { weightId: "61", weightDesc: "61 kg" },
        { weightId: "62", weightDesc: "62 kg" },
        { weightId: "63", weightDesc: "63 kg" },
        { weightId: "64", weightDesc: "64 kg" },
        { weightId: "65", weightDesc: "65 kg" },
        { weightId: "66", weightDesc: "66 kg" },
        { weightId: "67", weightDesc: "67 kg" },
        { weightId: "68", weightDesc: "68 kg" },
        { weightId: "69", weightDesc: "69 kg" },
        { weightId: "70", weightDesc: "70 kg" },
        { weightId: "71", weightDesc: "71 kg" },
        { weightId: "72", weightDesc: "72 kg" },
        { weightId: "73", weightDesc: "73 kg" },
        { weightId: "74", weightDesc: "74 kg" },
        { weightId: "75", weightDesc: "75 kg" },
        { weightId: "76", weightDesc: "76 kg" },
        { weightId: "77", weightDesc: "77 kg" },
        { weightId: "78", weightDesc: "78 kg" },
        { weightId: "79", weightDesc: "79 kg" },
        { weightId: "80", weightDesc: "80 kg" },
        { weightId: "81", weightDesc: "81 kg" },
        { weightId: "82", weightDesc: "82 kg" },
        { weightId: "83", weightDesc: "83 kg" },
        { weightId: "84", weightDesc: "84 kg" },
        { weightId: "85", weightDesc: "85 kg" },
        { weightId: "86", weightDesc: "86 kg" },
        { weightId: "87", weightDesc: "87 kg" },
        { weightId: "88", weightDesc: "88 kg" },
        { weightId: "89", weightDesc: "89 kg" },
        { weightId: "90", weightDesc: "90 kg" }
      ],
      bodytypeoptions: [],
      bloodgroupoptions: [],
      complexionoptions: [],
      disabilityoptions: [],
      countryoptions: [],
      moonsignoptions: [],
      birthstaroptions: [],
      smokeoptions: [],
      dietoptions: [],
      drinkoptions: [],
      interestValue: [],
      interestoptions: [],
      hobbiesValue: [],
      hobbiesoptions: [],
      stateOptions: [],
      BodytypeData: BodytypeData,
      BloodgroupData: BloodgroupData,
      ComplexionData: ComplexionData,
      DisabilityData: DisabilityData,
      CountryData: CountryData,
      MoonsignData: MoonsignData,
      BirthstarData: BirthstarData,
      DietData: DietData,
      DrinkData: DrinkData,
      SmokeData: SmokeData,
      InterestData: InterestData,
      HobbiesData: HobbiesData,
      en: {
        hint: "Click or drag the file here to upload",
        loading: "Uploading…",
        noSupported:
          "Browser is not supported, please use IE10+ or other browsers",
        success: "Upload success",
        fail: "Upload failed",
        preview: "Preview",
        btn: {
          off: "Cancel",
          close: "Close",
          back: "Back",
          save: "Save"
        },
        error: {
          onlyImg: "Image only",
          outOfSize: "Image exceeds size limit: ",
          lowestPx: "Image's size is too low. Expected at least: "
        }
      },
      show: false,
      params: {
        // token: "123456798",
        // name: "avatar"
      },
      headers: {
        smail: "*_~",
        Authorization: "Bearer " + this.$store.getters.getToken
      },
      imgDataUrl: "",

      data: {
        // memberId: '',
        height: "",
        weight: "",
        bodyType: [],
        bloodGroup: [],
        complexion: [],
        disability: [],
        birthCountry: [],
        birthState: [],
        birthCity: "",
        moonSign: [],
        star: [],
        gotra: "",
        smoke: [],
        diet: [],
        description: "",
        facebook: "",
        drink: [],
        interests: [],
        hobbies: []
      }
    };
  },
  components: {
    Multiselect,
    MyUpload,
    LightBox
  },
  mounted() {
    this.getCountryData();
    this.getComplexionData();
    this.getBodyTypeData();
    this.getDisabilityData();
    this.getBloodgroupData();
    this.getInterestData();
    this.getHobbiesData();
    this.getDietData();
    this.getDrinkData();
    this.getSmokeData();
    this.getBirthstarData();
    this.getMoonsignData();
  },
  computed: {
    ...mapGetters("Profile", [
      "personalInformationData",
      "memberData",
      "lightBoxImages"
    ]),
    cropUploadUrl: {
      get() {
        return (
          "http://18.216.27.3:8080/api/photo/upload/" +
          this.personalInformationData.memberId
        );
      },
      set() {}
    },
    heightValue: {
      get() {
        let heightId = this.personalInformationData.height;
        let selectedHeight = this.heightoptions.find(height => {
          return height.heightId == heightId;
        });
        return selectedHeight;
      },
      set(value) {
        this.personalInformationData.height = value.heightId;
      }
    },
    weightValue: {
      get() {
        let weightId = this.personalInformationData.weight;
        let selectedweight = this.weightoptions.find(weight => {
          return weight.weightId == weightId;
        });
        return selectedweight;
      },
      set(value) {
        this.personalInformationData.weight = value.weightId;
      }
    },
    complexionValue: {
      get() {
        return this.personalInformationData.complexion;
      },
      set(value) {
        this.personalInformationData.complexion = value;
      }
    },
    bodyTypeValue: {
      get() {
        return this.personalInformationData.bodyType;
      },
      set(value) {
        this.personalInformationData.bodyType = value;
      }
    },
    disabilityValue: {
      get() {
        return this.personalInformationData.disability;
      },
      set(value) {
        this.personalInformationData.disability = value;
      }
    },
    birthCountryValue: {
      get() {
        let selectedcountry = {};
        let countryId = this.personalInformationData.birthCountry.countryId;
        selectedcountry = this.countryoptions.find(country => {
          return country.countryId == countryId;
        });
        if (selectedcountry) this.setstateOptions(selectedcountry.states);
        return selectedcountry;
      },
      set(value) {
        this.personalInformationData.birthCountry = value;
        let selectedCountry = this.CountryData.find(country => {
          return value.countryId == country.countryId;
        });
        this.stateOptions = selectedCountry.states;
        // this.personalInformationData.birthCountry.states = []
      }
    },
    birthStateValue: {
      get() {
        let selectedstate = {};
        let selectedcountry = {};
        let countryId = this.personalInformationData.birthCountry.countryId;
        selectedcountry = this.countryoptions.find(country => {
          return country.countryId == countryId;
        });
		
		if (this.personalInformationData.birthState != null) {
			let stateId = this.personalInformationData.birthState.stateId;
			selectedstate = selectedcountry.states.find(state => {
			  return state.stateId == stateId;
			});
		}
        return selectedstate;
      },
      set(value) {
        this.personalInformationData.birthState = value;
      }
    }
  },
  watch: {
    heightValue(newValues) {
      this.data.height = newValues.heightId;
    },

    weightValue(newValues) {
      this.data.weight = newValues.weightId;
    }
  },

  methods: {
    ...mapActions("Profile", [
      "updatePersonalData",
      "viewProfile",
      "setProfilePicture",
      "removePicture"
    ]),
    findInArray(array, key, value) {
      return array.find(arr => {
        return arr[key] == value;
      });
    },
    getCountryData() {
      let countries = CountryData.map(country => {
        return {
          countryId: country.countryId,
          countryName: country.countryName,
          states: country.states
        };
      });
      this.countryoptions = countries;
    },

    getComplexionData() {
      this.ComplexionData.forEach(ComplexionData => {
        this.complexionoptions.push(ComplexionData);
      });
    },
    getBodyTypeData() {
      this.BodytypeData.forEach(BodytypeData => {
        this.bodytypeoptions.push(BodytypeData);
      });
    },
    getDisabilityData() {
      this.DisabilityData.forEach(DisabilityData => {
        this.disabilityoptions.push(DisabilityData);
      });
    },
    getBloodgroupData() {
      this.BloodgroupData.forEach(BloodgroupData => {
        this.bloodgroupoptions.push(BloodgroupData);
      });
    },
    getInterestData() {
      this.InterestData.forEach(InterestData => {
        this.interestoptions.push(InterestData);
      });
    },
    getHobbiesData() {
      this.HobbiesData.forEach(HobbiesData => {
        this.hobbiesoptions.push(HobbiesData);
      });
    },
    getDietData() {
      this.DietData.forEach(DietData => {
        this.dietoptions.push(DietData);
      });
    },
    getDrinkData() {
      this.DrinkData.forEach(DrinkData => {
        this.drinkoptions.push(DrinkData);
      });
    },
    getSmokeData() {
      this.SmokeData.forEach(SmokeData => {
        this.smokeoptions.push(SmokeData);
      });
    },
    getBirthstarData() {
      this.BirthstarData.forEach(BirthstarData => {
        this.birthstaroptions.push(BirthstarData);
      });
    },
    getMoonsignData() {
      this.MoonsignData.forEach(MoonsignData => {
        this.moonsignoptions.push(MoonsignData);
      });
    },
    showUpdateImageModel() {
      this.show = !this.show;
    },
    /**
     * crop success
     *
     * [param] imgDataUrl
     * [param] field
     */
    cropSuccess(imgDataUrl) {
      this.imgDataUrl = imgDataUrl;
    },
    /**
     * upload success
     *
     * [param] jsonData  server api return data, already json encode
     * [param] field
     */
    cropUploadSuccess() {
      this.viewProfile(this.memberData.memberDTO.memberId);
    },
    /**
     * upload fail
     *
     * [param] status    server api return error status, like 500
     * [param] field
     */
    cropUploadFail() {},
    onSaveButtonPress: function() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.updatePersonalData()
            .then(() => {
              // this.$router.push({ name: "" });
            })
            .catch(() => {});
        }
      });
    },
    onBackButtonPress: function() {
      if (this.activeTab > 1) {
        this.$store.commit("setActiveTab", this.activeTab - 1);
      }
    },
    setstateOptions(stateOptions) {
      this.stateOptions = stateOptions;
    },
    openGallery(index) {
      this.$refs.lightbox.showImage(index);
    },
    setAsProfilePicture(photoid) {
      this.setProfilePicture(photoid)
        .then(() => {
          this.viewProfile(this.memberData.memberDTO.memberId);
        })
        .catch(() => {});
    },
    deletePicture(photoid) {
      Swal.fire({
        title: "Are you sure?",
        text: "You will not be able to recover this image!",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, keep it"
      }).then(result => {
        if (result.value) {
          this.removePicture(photoid)
            .then(() => {
              this.viewProfile(this.memberData.memberDTO.memberId);
            })
            .catch(() => {});
        }
      });
    }
  }
};
</script>