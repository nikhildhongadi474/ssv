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
            <h5 class="field-label">Profile Photo</h5>
            <MyUpload
              field="img"
              @crop-success="cropSuccess"
              @crop-upload-success="cropUploadSuccess"
              @crop-upload-fail="cropUploadFail"
              v-model="show"
              :width="300"
              :height="300"
              :params="params"
              :headers="headers"
              url="/upload"
              lang-type="en"
              img-format="png"
            />
            <div class="upload-picture">
              <img style="width:100%;" :src="imgDataUrl">
              <a @click="showUpdateImageModel" class="upload-btn">Upload Picture</a>
            </div>
          </div>

          <div class="col-md-9 form-group">
            <h5 class="field-label">Additional Photos</h5>
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
              A brief about you<span class="required">*</span>
            </h5>
          </div>

          <div class="col-md-8 form-group">
            <textarea
              v-model="data.description"
              v-validate="{ required: true, max: 2000 }"
			  maxlength="2000"
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
            <h5 class="field-label">Height
			<span class="required">*</span></h5>
			
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
              data-vv-name="height"
              data-vv-value-path="height"
            />
            <div v-show="errors.has('height')" class="error">{{ errors.first('height') }}</div>
          </div>
          
          <div class="col-md-3 form-group">
            <h5 class="field-label">Weight</h5>
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
            />
          </div>

          <div class="col-md-4 form-group">
            <h5 class="field-label">Complexion</h5>
            <Multiselect
              v-model="data.complexion"
              :options="complexionoptions"
              placeholder="Select or start typing"
              label="complexionType"
              track-by="complexionId"
              :multiple="false"
              :close-on-select="true"
              :preserve-search="true"
              :searchable="true"
            />
          </div>
        </div>

        <div class="row form-wrapper">
          <div class="col-md-4 form-group">
            <h5 class="field-label">Body Type</h5>
            <Multiselect
              v-model="data.bodyType"
              :options="bodytypeoptions"
              placeholder="Select or start typing"
              label="bodyTypeName"
              track-by="bodyTypeId"
              :multiple="false"
              :close-on-select="true"
              :preserve-search="true"
              :searchable="true"
            />
          </div>

          <div class="col-md-4 form-group">
            <h5 class="field-label">Disability</h5>
            <Multiselect
              v-model="data.disability"
              :options="disabilityoptions"
              placeholder="Select or start typing"
              label="disabilityType"
              track-by="disabilityId"
              :multiple="false"
              :close-on-select="true"
              :preserve-search="true"
              :searchable="true"
            />
          </div>

          <div class="col-md-4 form-group">
            <h5 class="field-label">Blood Group</h5>
            <Multiselect
              v-model="data.bloodGroup"
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
              v-model="data.interests"
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
              v-model="data.hobbies"
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
              v-model="data.facebook"
              v-validate="{ max: 255 }"
			  maxlength="255"
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
              v-model="data.diet"
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
              v-model="data.drink"
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
              v-model="data.smoke"
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
              v-model="data.star"
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
              v-model="data.moonSign"
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
              v-model="data.gotra"
            >
            <div class="error">{{ errors.first('gotra') }}</div>
          </div>
          <!-- End -->
        </div>
        <!-- End -->
        <!-- City, State, Country -->
        <div class="row form-wrapper">
          <div class="col-md-4 form-group">
            <h5 class="field-label">Birth Country
			<span class="required">*</span></h5>
            <Multiselect
              v-model="birthCountryValue"
              placeholder="Select country or start typing"
              label="countryName"
              track-by="countryId"
			  :options="countryoptions"
              :multiple="false"
              :close-on-select="true"
              :preserve-search="true"
              :searchable="true"
              v-validate="'required'"
              data-vv-name="birthCountry"
              data-vv-value-path="birthCountry"
            />
            <div v-show="errors.has('birthCountry')" class="error">{{ errors.first('birthCountry') }}</div>
          </div>

          <div v-if="birthCountryValue.countryName">
            <div v-if="stateoptions.length">
              <div class="col-md-4 form-group">
                <h5 class="field-label">Birth State
				<span class="required">*</span></h5>
                <Multiselect
                  v-model="birthStateValue"
				  placeholder="Select state or start typing"
				  label="stateName"
                  track-by="stateId"
                  :options="stateoptions"
				  :multiple="false"
				  v-validate="'required'"
                  data-vv-name="State"
                  data-vv-value-path="State"
                />
				<div v-show="errors.has('State')" class="error">{{ errors.first('State') }}</div>
              </div>
            </div>
          </div>

          <div class="col-md-4 form-group">
            <h5 class="field-label">
              Birth City
              <span class="required">*</span>
            </h5>
            <input
              v-model="data.birthCity"        
              v-validate="{ required: true, max: 20 }"
			  maxlength="20"
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
        <button class="btn btn-red" @click="onNextButtonPress">Next</button>
        <router-link
          :to="{ name: 'home' }"
          class="btn blank-btn"
          exact
        >
          Cancel
        </router-link>
      </div> 

    </div>
    <!-- Astrological Details Ends -->

  </div>
</template>

<script>
//plugins
import Multiselect from "vue-multiselect";
import MyUpload from "vue-image-crop-upload";

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
      activeTab: this.$store.state.activeTab,
      heightValue: [],
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
      weightValue: [],
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
      birthCountryValue: [], 
      countryoptions: [],
      stateoptions: [],
      birthStateValue: [],
      moonsignoptions: [],
      birthstaroptions: [],
      smokeoptions: [],
      dietoptions: [],
      drinkoptions: [],
      interestValue: [], interestoptions: [],
      hobbiesValue: [], hobbiesoptions: [],

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
        token: "123456798",
        name: "avatar"
      },
      headers: {
        smail: "*_~"
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
        birthState: null,
        birthCity: '',
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
      },
    };
  },
  components: {
    Multiselect,
    MyUpload,
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

  watch: {

    heightValue(newValues) {
      this.data.height = newValues.heightId;
    },

    weightValue(newValues) {
      this.data.weight = newValues.weightId;
    },  
    
    birthCountryValue: {
      handler(newValues) {
        // Will work for single select only
        this.data.birthCountry = newValues;
        this.stateoptions = newValues.states
      }
    },
    
    birthStateValue: {
      handler(newValues) {
        this.data.birthCountry.states = [];
        this.data.birthCountry.states.push(newValues);
        this.data.birthState = newValues;
      }
    },
  
  },
  
  methods: {

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
    },
    /**
     * upload fail
     *
     * [param] status    server api return error status, like 500
     * [param] field
     */
    cropUploadFail() {
      
    },
    onNextButtonPress: function() {

      this.$validator.validateAll().then(result => {
        if (result) {
          this.$store.commit ('setSignupPersonalInfo', this.data)
          this.$store.commit ('setActiveTab', (this.activeTab + 1)); 
          window.scrollTo(0, 0);        

        }
      });      
    }, // end of onNextButtonPress    

    onBackButtonPress: function() {  
      if (this.activeTab > 1)
      {
        this.$store.commit ('setActiveTab', (this.activeTab - 1));          
      }    
    }  
  },
};
</script>