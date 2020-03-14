  <template>
  <div>
    <!-- Inner Content Start -->
    <div class="inner-content">
      <!-- Search Box Starts -->
      <div class="search-inner">
        <div class="container">
          <div class="search-listing">
            <h1 class="section-title" v-if="this.reqFromValue==4">Quick Search</h1>
            <h1 class="section-title" v-else-if="this.reqFromValue==1">Basic Search</h1>
            <h1 class="section-title" v-else>Advanced Search</h1>
            <span>Start your search by filling the details below</span>
          </div>
          <div class="col-md-3 col-sm-2"/>

          <div class="col-md-7 col-sm-8">
            <form class="search-bar" action="#" @submit.prevent="basicSearch">
              <div class="row">
                <label class="form-label col-sm-12">Age</label>
                <div class="col-md-5">
                  <Multiselect
                    v-model="minageValue"
                    placeholder="Select or start typing"
                    label="ageDesc"
                    track-by="ageId"
                    :options="minageoptions"
                    :multiple="false"
                    :close-on-select="true"
                    :preserve-search="true"
                    :searchable="true"
                    v-validate="'required'"
                    name="minimum age"
                  />
                  <div class="error">{{ errors.first('minimum age') }}</div>
                </div>
                <div class="col-md-2 text-center">to</div>
                <div class="col-md-5">
                  <Multiselect
                    v-model="maxageValue"
                    placeholder="Select or start typing"
                    label="ageDesc"
                    track-by="ageId"
                    :options="maxageoptions"
                    :multiple="false"
                    :close-on-select="true"
                    :preserve-search="true"
                    :searchable="true"
                    v-validate="'required'"
                    name="maximum age"
                  />
                  <div class="error">{{ errors.first('maximum age') }}</div>
                </div>
              </div>
              <!-- TODO add selected age  -->
              <div
                class="row"
                v-if="this.reqFromValue==1 || this.reqFromValue==2 || this.reqFromValue==4 "
              >
                <label class="form-label col-md-12">Height</label>
                <div class="col-md-5">
                  <Multiselect
                    v-model="minheightValue"
                    placeholder="Select or start typing"
                    label="heightDesc"
                    track-by="heightId"
                    :options="minHeightOptions"
                    :multiple="false"
                    :close-on-select="true"
                    :preserve-search="true"
                    :searchable="true"
                    v-validate="'required'"
                    name="minimum height"

                  />

                  <div class="error">{{ errors.first('minimum height') }}</div>
                </div>
                <div class="col-md-2 text-center">to</div>
                <div class="col-md-5">
                  <Multiselect
                    v-model="maxheightValue"
                    placeholder="Select or start typing"
                    label="heightDesc"
                    track-by="heightId"
                    :options="maxHeightOptions"
                    :multiple="false"
                    :close-on-select="true"
                    :preserve-search="true"
                    :searchable="true"
                    v-validate="'required'"
                    name="maximum height"
                  />
                  <div class="error">{{ errors.first('maximum height') }}</div>
                </div>
              </div>
              <!-- TODO add selected height  -->
              <div class="row">
                <div class="col-md-12">
                  <label class="form-label">Marital Status</label>
                  <Multiselect
                    v-model="maritalStatusValues"
                    :options="maritaloptions"
                    :multiple="true"
                    :close-on-select="true"
                    :preserve-search="true"
                    :searchable="true"
                    placeholder="Select or start typing"
                    label="msName"
                    track-by="maritalStatusId"
                  />
                </div>
              </div>

              <div class="row" v-if="this.reqFromValue==1 || this.reqFromValue== 2">
                <div class="col-md-12">
                  <label class="form-label">Caste / Subcaste</label>
                  <Treeselect
                    v-model="castValues"
                    :multiple="true"
                    :options="casteoptions"
                    :flatten-search-results="true"
                    value-format="Object"
                  />
                </div>
              </div>

              <div class="row" v-if="this.reqFromValue!=4">
                <div class="col-md-12">
                  <label class="form-label">Language</label>
                  <Multiselect
                    v-model="languageValues"
                    :options="languageoptions"
                    :multiple="true"
                    :close-on-select="true"
                    :preserve-search="true"
                    :searchable="true"
                    placeholder="Select or start typing"
                    label="languageName"
                    track-by="languageId"
                  />
                </div>
              </div>

              <div class="row" v-if="this.reqFromValue!=4">
                <div class="col-md-12">
                  <label class="form-label">Country / States</label>
                  <!-- Country -->
                  <Treeselect
                    v-model="countryValues"
                    :multiple="true"
                    :options="countryoptions"
                    :flatten-search-results="true"
                    value-format="Object"
                  />
                </div>
              </div>
              <div class="row" v-if="this.reqFromValue!=4">
                <div class="col-md-12">
                  <label class="form-label">Education Level / Degrees</label>
                  <Treeselect
                    v-model="educationLevelValues"
                    :multiple="true"
                    :options="educationleveloptions"
                    :flatten-search-results="true"
                    value-format="Object"
                  />
                </div>
              </div>

              <div class="row" v-if="this.reqFromValue==2">
                <div class="col-md-12">
                  <label class="form-label">Food / Diet Type</label>
                  <Multiselect
                    v-model="dietValues"
                    placeholder="Select or start typing"
                    label="dietType"
                    track-by="dietId"
                    :options="dietoptions"
                    :multiple="true"
                    :close-on-select="true"
                    :preserve-search="true"
                    :searchable="true"
                  />
                </div>
              </div>

              <div class="row" v-if="this.reqFromValue==2">
                <div class="col-md-12">
                  <label class="form-label">Smoking Habits</label>
                  <Multiselect
                    v-model="smokingValues"
                    placeholder="Select or start typing"
                    label="smokeLevel"
                    track-by="smokeId"
                    :options="smokeoptions"
                    :multiple="true"
                    :close-on-select="true"
                    :preserve-search="true"
                    :searchable="true"
                  />
                </div>
              </div>

              <div class="row" v-if="this.reqFromValue==2">
                <div class="col-md-12">
                  <label class="form-label">Drinking Habits</label>
                  <Multiselect
                    v-model="drinkValues"
                    tag-placeholder="Add this as new tag"
                    placeholder="Select or start typing"
                    label="drinkDesc"
                    track-by="drinkId"
                    :options="drinkoptions"
                    :multiple="true"
                    :close-on-select="true"
                    :preserve-search="true"
                    :searchable="true"
                  />
                </div>
              </div>

              <div class="row" v-if="this.reqFromValue==2">
                <div class="col-md-12">
                  <label class="form-label">Body Type</label>
                  <Multiselect
                    v-model="bodyTypeValues"
                    :options="bodytypeoptions"
                    placeholder="Select or start typing"
                    label="bodyTypeName"
                    track-by="bodyTypeId"
                    :multiple="true"
                    :close-on-select="true"
                    :preserve-search="true"
                    :searchable="true"
                  />
                </div>
              </div>

              <div class="row" v-if="this.reqFromValue==2">
                <div class="col-md-12">
                  <label class="form-label">Complexion</label>
                  <Multiselect
                    v-model="complexionValues"
                    :options="complexionoptions"
                    placeholder="Select or start typing"
                    label="complexionType"
                    track-by="complexionId"
                    :multiple="true"
                    :close-on-select="true"
                    :preserve-search="true"
                    :searchable="true"
                  />
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <label class="form-label">Occupation</label>
                  <Multiselect
                    v-model="occupationValues"
                    :options="occupationoptions"
                    :multiple="true"
                    :close-on-select="true"
                    :preserve-search="true"
                    :searchable="true"
                    placeholder="Select or start typing"
                    label="occupationName"
                    track-by="occupationId"
                  />
                </div>
              </div>

              <div class="row" v-if="this.reqFromValue==2">
                <div class="col-md-12">
                  <label class="form-label">Raashi</label>
                  <Multiselect
                    v-model="raashiValues"
                    :options="raashioptions"
                    :multiple="true"
                    :close-on-select="true"
                    :preserve-search="true"
                    :searchable="true"
                    placeholder="Select or start typing"
                    label="moonSignName"
                    track-by="moonSignId"
                  />
                </div>
              </div>

              <div class="row" v-if="this.reqFromValue==2">
                <div class="col-md-12">
                  <label class="form-label">Nakshatra</label>
                  <Multiselect
                    v-model="nakshatraValues"
                    :options="nakshatraoptions"
                    :multiple="true"
                    :close-on-select="true"
                    :preserve-search="true"
                    :searchable="true"
                    placeholder="Select or start typing"
                    label="starName"
                    track-by="starId"
                  />
                </div>
              </div>
              <!-- close for v if for basic and advanced seearch -->
              <div class="row">
                <div class="col-md-12 col-sm-12 search-buttons">
                  <button type="submit" class="btn btn-red">
                    <i class="material-icons">search</i> Search
                  </button>
                  <!-- <a class="btn btn-red">
                      <i class="material-icons">search</i> Search
                  </a>-->
                  <a
                    href="javascript:void(0);"
                    class="btn blank-btn"
                    @click="viewProfile(memberData.memberDTO.memberId)"
                  >
                    <i class="material-icons">clear</i> reset
                  </a>
                  <a href="javascript:void(0);" class="btn blank-btn" @click="clearForm">Clear</a>
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
  </div>
</template>


  <script>
import Multiselect from "vue-multiselect";
import { mapGetters, mapActions } from "vuex";
import Treeselect from "@riophae/vue-treeselect";
import "@riophae/vue-treeselect/dist/vue-treeselect.css";

import MaritalStatusData from "../../assets/json/info/marital-status.json";
import CasteData from "../../assets/json/info/casts.json";
import LanguageData from "../../assets/json/info/language.json";
import CountryData from "../../assets/json/info/country.json";
import EducationlevelData from "../../assets/json/info/education-level.json";
import OccupationData from "../../assets/json/info/occupation.json";
import RaashiData from "../../assets/json/info/moon-sign.json";
import NakshatraData from "../../assets/json/info/birth-star.json";
import DietData from "../../assets/json/info/diet.json";
import DrinkData from "../../assets/json/info/drink.json";
import SmokeData from "../../assets/json/info/smoke.json";
import ComplexionData from "../../assets/json/info/complexion.json";
import BodytypeData from "../../assets/json/info/body-type.json";

export default {
  name: "Search",

  components: {
    Multiselect,
    Treeselect
  },

  props: {
    reqFrom: {
      type: Number,
      default: null
    }
  },

  data() {
    const allAges = [
      { ageId: "18", ageDesc: "18 Years" },
      { ageId: "19", ageDesc: "19 Years" },
      { ageId: "20", ageDesc: "20 Years" },
      { ageId: "21", ageDesc: "21 Years" },
      { ageId: "22", ageDesc: "22 Years" },
      { ageId: "23", ageDesc: "23 Years" },
      { ageId: "24", ageDesc: "24 Years" },
      { ageId: "25", ageDesc: "25 Years" },
      { ageId: "26", ageDesc: "26 Years" },
      { ageId: "27", ageDesc: "27 Years" },
      { ageId: "28", ageDesc: "28 Years" },
      { ageId: "29", ageDesc: "29 Years" },
      { ageId: "30", ageDesc: "30 Years" },
      { ageId: "31", ageDesc: "31 Years" },
      { ageId: "32", ageDesc: "32 Years" },
      { ageId: "33", ageDesc: "33 Years" },
      { ageId: "34", ageDesc: "34 Years" },
      { ageId: "35", ageDesc: "35 Years" },
      { ageId: "36", ageDesc: "36 Years" },
      { ageId: "37", ageDesc: "37 Years" },
      { ageId: "38", ageDesc: "38 Years" },
      { ageId: "39", ageDesc: "39 Years" },
      { ageId: "40", ageDesc: "40 Years" },
      { ageId: "41", ageDesc: "41 Years" },
      { ageId: "42", ageDesc: "42 Years" },
      { ageId: "43", ageDesc: "43 Years" },
      { ageId: "44", ageDesc: "44 Years" },
      { ageId: "45", ageDesc: "45 Years" }
    ];

    const allHeightOptions = [
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
    ];
    return {
      allAges: allAges,
      minageoptions: allAges,
      maxageoptions: allAges,
      maxHeightOptions: allHeightOptions,
      minHeightOptions: allHeightOptions,
      allHeightOptions: allHeightOptions,
      reqFromValue: this.reqFrom,
      // maritalStatusValues: [],
      maritaloptions: [],
      // castValues: [],
      // subCastValues: [],
      casteoptions: [],
      stateValues: [],
      countryoptions: [],
      degreeValues: [],
      educationleveloptions: [],
      languageoptions: [],
      occupationoptions: [],
      raashiValues: [],
      raashioptions: [],
      nakshatraValues: [],
      nakshatraoptions: [],
      dietoptions: [],
      smokeoptions: [],
      drinkoptions: [],
      bodytypeoptions: [],
      complexionoptions: [],

      // Data to be read from json files
      MaritalStatusData: MaritalStatusData,
      CasteData: CasteData,
      LanguageData: LanguageData,
      CountryData: CountryData,
      EducationlevelData: EducationlevelData,
      OccupationData: OccupationData,
      RaashiData: RaashiData,
      NakshatraData: NakshatraData,
      DietData: DietData,
      SmokeData: SmokeData,
      DrinkData: DrinkData,
      BodytypeData: BodytypeData,
      ComplexionData: ComplexionData,
      withPhoto: false,
      loading: false,
      data: {
        // Fields for basic search
        minAge: null,
        maxAge: null,
        minHeight: null,
        maxHeight: null,
        maritalStatus: [], //array
        cast: [], //array
        subCast: [], //array
        language: [], //array
        country: [], //array
        state: [], //array
        educationLevel: [], //array
        degree: [], //array
        occupation: [], //array
        raashi: [],
        nakshatra: [],
        diet: [],
        smoke: [],
        drink: [],
        bodyType: [],
        complexion: [],
        withPhoto: false,
        withHoroscope: false,
        withPremiumMembership: false,
        reqFrom: this.reqFrom
      }
    };
  },
  computed: {
    ...mapGetters("Profile", ["memberData", "partnerPrefrencesData"]),
    minageValue: {
      get() {
        let ageId = this.partnerPrefrencesData.minAge;
        this.setMinAge(ageId);
        let selectedAge = this.allAges.find(age => {
          return age.ageId == ageId;
        });
        if (selectedAge) {
          const { ageId } = selectedAge;
          if (ageId)
            var maxageoptions = this.allAges.filter(age => {
              return age.ageId > ageId;
            });
          this.setMaxAgeOptions(maxageoptions);
        } else {
          this.setMaxAgeOptions(this.allAges);
        }
        return selectedAge;
      },
      set(newValues) {
        if (newValues) {
          const { ageId } = newValues;
          if (ageId)
            this.maxageoptions = this.allAges.filter(age => {
              return age.ageId > ageId;
            });
          this.partnerPrefrencesData.minAge = newValues.ageId;
          this.data.minAge = newValues.ageId;
        } else {
          this.maxageoptions = this.allAges;
        }
      }
    },
    maxageValue: {
      get() {
        let ageId = this.partnerPrefrencesData.maxAge;
        this.setMaxAge(ageId);
        let selectedAge = this.allAges.find(age => {
          return age.ageId == ageId;
        });
        if (selectedAge != null) {
          const { ageId } = selectedAge;
          if (ageId)
            var minageoptions = this.allAges.filter(age => {
              return age.ageId < ageId;
            });
          this.setMinageoptions(minageoptions);
        } else {
          this.setMinageoptions(this.allAges);
        }
        return selectedAge;
      },
      set(newValues) {
        if (newValues != null) {
          const { ageId } = newValues;
          if (ageId)
            this.minageoptions = this.allAges.filter(age => {
              return age.ageId < ageId;
            });
          this.partnerPrefrencesData.maxAge = newValues.ageId;
          this.data.maxAge = newValues.ageId;
        } else {
          this.minageoptions = this.allAges;
        }
      }
    },
    minheightValue: {
      get() {
        let minHeight = this.partnerPrefrencesData.minHeight;
        this.setMinHeight(minHeight);
        let selectedHeight = this.allHeightOptions.find(height => {
          return height.heightId == minHeight;
        });
        if (selectedHeight) {
          const { heightId } = selectedHeight;
          if (heightId)
            var maxHeightOptions = this.allHeightOptions.filter(height => {
              return height.heightId > heightId;
            });
          this.setMaxHeightOptions(maxHeightOptions);
        } else {
          this.setMaxHeightOptions(this.allHeightOptions);
        }
        return selectedHeight;
      },
      set(newValues) {
        if (newValues) {
          const { heightId } = newValues;
          if (heightId)
            this.maxHeightOptions = this.allHeightOptions.filter(height => {
              return height.heightId > heightId;
            });
          this.partnerPrefrencesData.minHeight = newValues.heightId;
          this.data.minHeight = newValues.heightId;
        } else {
          this.maxHeightOptions = this.allHeightOptions;
        }
      }
    },
    maxheightValue: {
      get() {
        let maxHeight = this.partnerPrefrencesData.maxHeight;
        this.setMaxHeight(maxHeight);
        let selectedHeight = this.allHeightOptions.find(height => {
          return height.heightId == maxHeight;
        });
        return selectedHeight;
      },
      set(newValues) {
        if (newValues) {
          const { heightId } = newValues;
          if (heightId)
            this.minHeightOptions = this.allHeightOptions.filter(height => {
              return height.heightId < heightId;
            });
          this.partnerPrefrencesData.maxHeight = newValues.heightId;
          this.data.maxHeight = newValues.heightId;
        } else {
          this.minHeightOptions = this.allHeightOptions;
        }
      }
    },
    maritalStatusValues: {
      get() {
        let maritalStatus = this.partnerPrefrencesData.maritalStatuses.map(
          maritalStatus => {
            return maritalStatus.maritalStatusId;
          }
        );
        this.setMaritalStatus(maritalStatus);
        return this.partnerPrefrencesData.maritalStatuses;
      },
      set(newValues) {
        this.partnerPrefrencesData.maritalStatuses = newValues;
        this.data.maritalStatus = newValues.map(obj => obj.maritalStatusId);
      }
    },
    languageValues: {
      get() {
        let language = this.partnerPrefrencesData.languages.map(language => {
          return language.languageId;
        });
        this.setLangauge(language);
        return this.partnerPrefrencesData.languages;
      },
      set(newValues) {
        this.partnerPrefrencesData.languages = newValues;
        this.data.language = newValues.map(obj => obj.languageId);
      }
    },
    occupationValues: {
      get() {
        let occupation = this.partnerPrefrencesData.occupations.map(
          occupation => {
            return occupation.occupationId;
          }
        );
        this.setOccupation(occupation);
        return this.partnerPrefrencesData.occupations;
      },
      set(newValues) {
        this.partnerPrefrencesData.occupations = newValues;
        this.data.occupation = newValues.map(obj => obj.occupationId);
      }
    },
    complexionValues: {
      get() {
        let complexion = this.partnerPrefrencesData.complexions.map(
          complexion => {
            return complexion.complexionId;
          }
        );
        this.setComplexion(complexion);

        return this.partnerPrefrencesData.complexions;
      },
      set(newValues) {
        this.partnerPrefrencesData.complexions = newValues;
        this.data.complexion = newValues.map(obj => obj.complexionId);
      }
    },
    dietValues: {
      get() {
        let dietType = this.partnerPrefrencesData.dietTypes.map(diet => {
          return diet.dietId;
        });
        this.setDietType(dietType);
        return this.partnerPrefrencesData.dietTypes;
      },
      set(newValues) {
        this.partnerPrefrencesData.dietTypes = newValues;
        this.data.dietType = newValues.map(obj => obj.dietId);
      }
    },
    bodyTypeValues: {
      get() {
        let bodyType = this.partnerPrefrencesData.bodyTypes.map(bodyType => {
          return bodyType.bodyTypeId;
        });
        this.setBodyType(bodyType);
        return this.partnerPrefrencesData.bodyTypes;
      },
      set(newValues) {
        this.partnerPrefrencesData.bodyTypes = newValues;
        this.data.bodyType = newValues.map(obj => obj.bodyTypeId);
      }
    },
    smokingValues: {
      get() {
        let smoking = this.partnerPrefrencesData.smokeTypes.map(smokeType => {
          return smokeType.smokeId;
        });
        this.setSmoking(smoking);
        return this.partnerPrefrencesData.smokeTypes;
      },
      set(newValues) {
        this.partnerPrefrencesData.smokeTypes = newValues;
        this.data.smokeType = newValues.map(obj => obj.smokeId);
      }
    },
    drinkValues: {
      get() {
        var drinkType = this.partnerPrefrencesData.drinkTypes.map(drinkType => {
          return drinkType.drinkId;
        });
        this.setDrinkType(drinkType);
        return this.partnerPrefrencesData.drinkTypes;
      },
      set(newValues) {
        this.partnerPrefrencesData.drinkTypes = newValues;
        this.data.drinkTypeType = newValues.map(obj => obj.drinkId);
      }
    },
    countryValues: {
      get() {
        let selectedIds = [];
        let countryValues = this.partnerPrefrencesData.countries;
        let country = countryValues.map(country => {
          return country.countryId;
        });
        this.setCountry(country);
        let selectedStates = this.partnerPrefrencesData.states;
        let state = selectedStates.map(state => {
          return state.stateId;
        });
        this.setState(state);

        let allStats = this.CountryData.map(country => {
          return country.states;
        });
        allStats = allStats.flat();
        selectedStates = selectedStates.map(state => {
          let stateOption = this.findInArray(
            allStats,
            "stateId",
            state.stateId
          );
          return {
            countryId: stateOption.countryId,
            stateId: stateOption.stateId,
            stateName: stateOption.stateName
          };
        });

        countryValues.forEach(country => {
          if (
            !this.findInArray(selectedStates, "countryId", country.countryId)
          ) {
            selectedIds.push({ id: country.countryId });
          }
        });

        selectedStates.forEach(state => {
          selectedIds.push({ id: state.stateId });
        });

        return selectedIds;
      },
      set(selectedValues) {
        let countriesData = this.CountryData;
        let countries = selectedValues.map(country => {
          //if selected value is country
          if (country.hasOwnProperty("children")) {
            return {
              countryId: country.id,
              countryName: country.label
            };
          }
          //if selected value is state
          if (country.hasOwnProperty("countryId")) {
            let selectedCountry = countriesData.find(countryData => {
              if (countryData != undefined)
                return countryData.countryId == country.countryId;
            });
            // if any is selected
            if (country.hasOwnProperty("any")) {
              return {
                countryId: selectedCountry.countryId,
                countryName: selectedCountry.countryName,
                states: null
              };
            } else {
              return {
                countryId: selectedCountry.countryId,
                countryName: selectedCountry.countryName
              };
            }
          }
        });

        countries = this.getUnique(countries, "countryId");

        let states = selectedValues.filter(state => {
          //if selected value is state
          if (
            state.hasOwnProperty("countryId") &&
            !state.hasOwnProperty("any")
          ) {
            return true;
          }
          return false;
        });

        states = states.map(state => {
          return state.id;
        });

        countries = countries.map(country => {
          return country.countryId;
        });

        this.data.country = countries;
        this.data.state = states;
      }
    },
    castValues: {
      get() {
        //religion data
        if (this.partnerPrefrencesData.religions.length) {
          let religion = this.partnerPrefrencesData.religions[0];
          let CasteData = this.CasteData;
          CasteData = CasteData.filter(caste => {
            return religion.religionId === caste.religionId;
          });
          CasteData = CasteData.map(caste => {
            let subcasts = caste.subCasts.map(subcaste => {
              return {
                id: subcaste.subCastId + "subcast",
                label: subcaste.subCastName,
                castId: subcaste.castId,
                subCastId: subcaste.subCastId
              };
            });
            subcasts.unshift({
              id: caste.castId + "any",
              label: "Any",
              castId: caste.castId,
              any: true
            });
            return {
              id: caste.castId,
              label: caste.castName,
              religionId: caste.religionId,
              children: subcasts
            };
          });
          this.setCasteOptions(CasteData);
        }

        //caste data
        if (
          this.partnerPrefrencesData.casts &&
          this.partnerPrefrencesData.casts.length
        ) {
          let selectedIds = [];
          let casteValues = this.partnerPrefrencesData.casts;
          let cast = casteValues.map(caste => {
            return caste.castId;
          });
          this.setCast(cast);

          let selectedSubcasts = this.partnerPrefrencesData.subCasts;
          let subCast = selectedSubcasts.map(subCast => {
            return subCast.subCastId;
          });
          this.setSubCast(subCast);

          let allSubCasts = this.CasteData.map(caste => {
            return caste.subCasts;
          });
          allSubCasts = allSubCasts.flat();
          selectedSubcasts = selectedSubcasts.map(subcaste => {
            let subCasteOption = this.findInArray(
              allSubCasts,
              "subCastId",
              subcaste.subCastId
            );
            return {
              castId: subCasteOption.castId,
              subCastId: subCasteOption.subCastId,
              subCastName: subCasteOption.subCastName
            };
          });

          casteValues.forEach(caste => {
            if (!this.findInArray(selectedSubcasts, "castId", caste.castId)) {
              selectedIds.push({ id: caste.castId });
            }
          });

          selectedSubcasts.forEach(subcaste => {
            selectedIds.push({ id: subcaste.subCastId + "subcast" });
          });
          return selectedIds;
        }
        return [];
      },
      set(newValues) {
        let religion = this.partnerPrefrencesData.religions;
        let CasteData = this.CasteData;
        CasteData = CasteData.filter(caste => {
          return religion[0].religionId === caste.religionId;
        });
        let casts = newValues.map(caste => {
          //if selected value is country
          if (caste.hasOwnProperty("children")) {
            return {
              castId: caste.id
            };
          }
          //if selected value is state
          if (caste.hasOwnProperty("castId")) {
            let selectedCaste = CasteData.find(data => {
              if (data != undefined) return data.castId == caste.castId;
            });
            return {
              castId: selectedCaste.castId
            };
          }
        });
        casts = this.getUnique(casts, "castId");
        let subCasts = newValues.filter(subcaste => {
          //if selected value is state
          if (subcaste.hasOwnProperty("castId")) {
            return true;
          }
          return false;
        });

        casts = casts.map(caste => {
          return caste.castId;
        });

        subCasts = subCasts.map(subcaste => {
          return subcaste.subCastId;
        });
        this.data.cast = casts;
        this.data.subCast = subCasts;
      }
    },
    educationLevelValues: {
      get() {
        let selectedIds = [];
        let educationLevelValues = this.partnerPrefrencesData.educationLevels;
        let educationLevel = educationLevelValues.map(educationLevel => {
          return educationLevel.educationLevelId;
        });
        this.setEducationLevel(educationLevel);
        let selectedDegrees = this.partnerPrefrencesData.degrees;
        let degree = selectedDegrees.map(degree => {
          return degree.degreeId;
        });
        this.setDegree(degree);
        let allDegrees = this.EducationlevelData.map(educationLevel => {
          return educationLevel.degrees;
        });
        allDegrees = allDegrees.flat();
        selectedDegrees = selectedDegrees.map(degree => {
          let degreeOption = this.findInArray(
            allDegrees,
            "degreeId",
            degree.degreeId
          );
          return {
            educationLevelId: degreeOption.educationLevelId,
            degreeId: degreeOption.degreeId,
            degreeName: degreeOption.degreeName
          };
        });

        educationLevelValues.forEach(educationLevel => {
          if (
            !this.findInArray(
              selectedDegrees,
              "educationLevelId",
              educationLevel.educationLevelId
            )
          ) {
            selectedIds.push({ id: educationLevel.educationLevelId });
          }
        });

        selectedDegrees.forEach(degree => {
          selectedIds.push({ id: degree.degreeId });
        });

        return selectedIds;
      },
      set(selectedValues) {
        let EducationlevelData = this.EducationlevelData;
        let educationLevels = selectedValues.map(level => {
          //if selected value is education level
          if (level.hasOwnProperty("children")) {
            return {
              educationLevelId: level.id,
              educationLevelDesc: level.label
            };
          }
          //if selected value is state
          if (level.hasOwnProperty("educationLevelId")) {
            let selectedEducationLevel = EducationlevelData.find(levelData => {
              if (levelData != undefined)
                return levelData.educationLevelId == level.educationLevelId;
            });
            // if any is selected
            if (level.hasOwnProperty("any")) {
              return {
                educationLevelId: selectedEducationLevel.educationLevelId,
                educationLevelDesc: selectedEducationLevel.educationLevelDesc
              };
            } else {
              return {
                educationLevelId: selectedEducationLevel.educationLevelId,
                educationLevelDesc: selectedEducationLevel.educationLevelDesc
              };
            }
          }
        });

        educationLevels = this.getUnique(educationLevels, "educationLevelId");

        let degrees = selectedValues.filter(degree => {
          //if selected value is state
          if (degree.hasOwnProperty("educationLevelId")) {
            return true;
          }
          return false;
        });
        educationLevels = educationLevels.map(educationLevel => {
          return educationLevel.educationLevelId;
        });
        degrees = degrees.map(degree => {
          return degree.id;
        });

        this.data.educationLevel = educationLevels;
        this.data.degree = degrees;
      }
    }
  },

  mounted() {
    this.getMaritalData();
    this.getCasteData();
    this.getLanguageData();
    this.getCountryData();
    this.getEducationlevelData();
    this.getOccupationData();
    this.getRaashiData();
    this.getNakshatraData();
    this.getDietData();
    this.getSmokeData();
    this.getDrinkData();
    this.getBodyTypeData();
    this.getComplexionData();
  },

  watch: {
    raashiValues(newValues) {
      this.data.raashi = newValues.map(obj => obj.moonSignId);
    },

    nakshatraValues(newValues) {
      this.data.nakshatra = newValues.map(obj => obj.starId);
    },
    reqFrom(newValues) {
      this.data.reqFrom = newValues;
    }
  },

  methods: {
    ...mapActions("Profile", ["viewProfile"]),
    findInArray(array, key, value) {
      return array.find(arr => {
        return arr[key] == value;
      });
    },
    getUnique(arr, comp) {
      const unique = arr
        .map(e => e[comp])

        // store the keys of the unique objects
        .map((e, i, final) => final.indexOf(e) === i && i)

        // eliminate the dead keys & store unique objects
        .filter(e => arr[e])
        .map(e => arr[e]);

      return unique;
    },
    getCountryData() {
      let countries = CountryData.map(country => {
        let states = country.states.map(state => {
          return {
            id: state.stateId,
            label: state.stateName,
            countryId: country.countryId
          };
        });
        states.unshift({
          id: country.countryId + "any",
          label: "Any",
          countryId: country.countryId,
          any: true
        });
        return {
          id: country.countryId,
          label: country.countryName,
          children: states
        };
      });
      this.countryoptions = countries;
    },
    getEducationlevelData() {
      let educationleveloptions = this.EducationlevelData.map(level => {
        let degrees = level.degrees.map(degree => {
          return {
            id: degree.degreeId,
            label: degree.degreeName,
            educationLevelId: level.educationLevelId
          };
        });
        degrees.unshift({
          id: level.educationLevelId + "any",
          label: "Any",
          educationLevelId: level.educationLevelId,
          any: true
        });
        return {
          id: level.educationLevelId,
          label: level.educationLevelDesc,
          children: degrees
        };
      });
      this.educationleveloptions = educationleveloptions;
    },
    basicSearch() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.loading = true;

          this.$store
            .dispatch("retrieveSearchResults", {
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

    getMaritalData() {
      this.MaritalStatusData.forEach(MaritalStatusData => {
        this.maritaloptions.push(MaritalStatusData);
      });
    },

    getCasteData() {
      this.CasteData.forEach(CasteData => {
        this.casteoptions.push(CasteData);
      });
    },

    getLanguageData() {
      this.LanguageData.forEach(LanguageData => {
        this.languageoptions.push(LanguageData);
      });
    },
    getOccupationData() {
      this.OccupationData.forEach(OccupationData => {
        this.occupationoptions.push(OccupationData);
      });
    },

    getRaashiData() {
      this.RaashiData.forEach(RaashiData => {
        this.raashioptions.push(RaashiData);
      });
    },

    getNakshatraData() {
      this.NakshatraData.forEach(NakshatraData => {
        this.nakshatraoptions.push(NakshatraData);
      });
    },

    getDietData() {
      this.DietData.forEach(DietData => {
        this.dietoptions.push(DietData);
      });
    },

    getSmokeData() {
      this.SmokeData.forEach(SmokeData => {
        this.smokeoptions.push(SmokeData);
      });
    },

    getDrinkData() {
      this.DrinkData.forEach(DrinkData => {
        this.drinkoptions.push(DrinkData);
      });
    },

    getBodyTypeData() {
      this.BodytypeData.forEach(BodytypeData => {
        this.bodytypeoptions.push(BodytypeData);
      });
    },

    getComplexionData() {
      this.ComplexionData.forEach(ComplexionData => {
        this.complexionoptions.push(ComplexionData);
      });
    },

    setMaxAge(ageId) {
      this.data.maxAge = ageId;
    },

    setMinAge(ageId) {
      this.data.minAge = ageId;
    },

    setMaxHeight(maxHeight) {
      this.data.maxHeight = maxHeight;
    },

    setMinHeight(minHeight) {
      this.data.minHeight = minHeight;
    },

    setDietType(diet) {
      this.data.diet = diet;
    },

    setMaxHeightOptions(options) {
      this.maxHeightOptions = options;
    },

    setMaxAgeOptions(options) {
      this.maxageoptions = options;
    },

    setDrinkType(drink) {
      this.data.drink = drink;
    },

    setSmoking(smoke) {
      this.data.smoke = smoke;
    },

    setMinageoptions(minageoptions) {
      this.minageoptions = minageoptions;
    },

    setDegree(degree) {
      this.data.degree = degree;
    },

    setEducationLevel(level) {
      this.data.educationLevel = level;
    },

    setMaritalStatus(status) {
      this.data.maritalStatus = status;
    },

    setBodyType(bodyType) {
      this.data.bodyType = bodyType;
    },

    setCasteOptions(casteoptions) {
      this.casteoptions = casteoptions;
    },

    setCast(cast) {
      this.data.cast = cast;
    },

    setSubCast(subcast) {
      this.data.subCast = subcast;
    },

    setLangauge(language) {
      this.data.language = language;
    },

    setCountry(value) {
      this.data.country = value;
    },

    setState(value) {
      this.data.state = value;
    },

    setOccupation(value) {
      this.data.occupation = value;
    },

    setComplexion(value) {
      this.data.complexion = value;
    },

    clearForm() {
      this.minageValue = [];
      this.maxageValue = [];
      this.minheightValue = [];
      this.maxheightValue = [];
      this.maritalStatusValues = [];
      this.castValues = [];
      this.languageValues = [];
      this.countryValues = [];
      this.stateValues = [];
      this.degreeValues = [];
      this.raashiValues = [];
      this.nakshatraValues = [];
      this.occupationValues = [];
      this.complexionValues = [];
      this.drinkValues = [];
      this.smokingValues = [];
      this.bodyTypeValues = [];
      this.educationLevelValues = [];
      this.dietValues = [];
      this.partnerPrefrencesData.countries = [];
      this.partnerPrefrencesData.states = [];
      this.partnerPrefrencesData.educationLevels = [];
      this.partnerPrefrencesData.degrees = [];
      this.partnerPrefrencesData.casts = [];
      this.partnerPrefrencesData.subCasts = [];
    }
  }
};
</script>