<template>
  <div>
    <!-- Partner's Physical Details -->
    <div class="form-division">
      <div class="top-title">
        <h3>
          <i class="large material-icons">directions_run</i> Partner’s Physical Details
        </h3>
      </div>

      <div class="card-content">
        <!-- Age -->
        <div class="row form-wrapper">
          <div class="col-md-4 form-group">
            <h5 class="field-label">Minimum Age</h5>
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
            />
          </div>

          <div class="col-md-4 form-group">
            <h5 class="field-label">Maximum Age</h5>
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
            />
          </div>
        </div>

        <!-- Height -->
        <div class="row form-wrapper">
          <div class="col-md-4 form-group">
            <h5 class="field-label">Minimum Height</h5>
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
            />
          </div>

          <div class="col-md-4 form-group">
            <h5 class="field-label">Maximum Height</h5>
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
            />
          </div>
        </div>

        <!-- End -->
        <div class="group-seperator"/>

        <!-- Marital Status, Country, State -->
        <div class="row form-wrapper">
          <!-- Marital Status -->
          <div class="col-md-4 form-group">
            <h5 class="field-label">Marital Status</h5>
            <Multiselect
              v-model="data.maritalStatuses"
              :options="maritaloptions"
              placeholder="Select or start typing"
              label="msName"
              track-by="maritalStatusId"
              :multiple="true"
              :close-on-select="true"
              :preserve-search="true"
              :searchable="true"
            />
          </div>

          <!-- Country -->
          <div class="col-md-4 form-group">
            <h5 class="field-label">Country / states</h5>
            <Treeselect
              v-model="countryValues"
              :multiple="true"
              :options="countryoptions"
              :flatten-search-results="true"
              value-format="Object"
            />
          </div>
        </div>
        <!-- End -->
        <div class="group-seperator"/>

        <!-- Religion, Caste, Sub Caste -->
        <div class="row form-wrapper">
          <!-- Religion -->
          <div class="col-md-4 form-group">
            <h5 class="field-label">Religion</h5>
            <Multiselect
              v-model="religionValues"
              :options="religionoptions"
              :multiple="false"
              :close-on-select="true"
              :preserve-search="true"
              :searchable="true"
              label="religionName"
              track-by="religionId"
            />
          </div>

          <!-- Caste -->
          <div class="col-md-4 form-group">
            <h5 class="field-label">Caste / Sub Caste</h5>
            <Treeselect
              v-model="castValues"
              :multiple="true"
              :options="casteoptions"
              :flatten-search-results="true"
              value-format="Object"
            />
            <!-- <Multiselect
              v-model="castValues"
              :options="casteoptions"
              :multiple="false"
              :close-on-select="true"
              :preserve-search="true"
              placeholder="Select or start typing"
              :searchable="true"
              label="castName"
              track-by="castId"
            />-->
          </div>

          <!-- SubCaste -->
          <!-- <div v-if="castValues.castName && castValues.subCasts" class="col-md-4 form-group">
            <h5 class="field-label">Sub Caste</h5>
            <Multiselect
              v-model="subCastValues"
              :options="castValues.subCasts"
              :multiple="true"
              :close-on-select="true"
              :preserve-search="true"
              :searchable="true"
              placeholder="Select or start typing"
              track-by="subCastId"
              label="subCastName"
            />
          </div>-->
        </div>
        <!-- End -->
        <div class="group-seperator"/>

        <!-- Body Type, Complexion, Language -->
        <div class="row form-wrapper">
          <!-- Body Type -->
          <div class="col-md-4 form-group">
            <h5 class="field-label">Body Type</h5>
            <Multiselect
              v-model="data.bodyTypes"
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

          <!-- Complexion -->
          <div class="col-md-4 form-group">
            <h5 class="field-label">Complexion</h5>
            <Multiselect
              v-model="data.complexions"
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

          <!-- Languages -->
          <div class="col-md-4 form-group">
            <h5 class="field-label">Mother-tongue / Language</h5>
            <Multiselect
              v-model="data.languages"
              :options="languageoptions"
              placeholder="Select or start typing"
              label="languageName"
              track-by="languageId"
              :multiple="true"
              :close-on-select="true"
              :preserve-search="true"
              :searchable="true"
            />
          </div>
          <!-- End -->
        </div>
        <!-- End -->
        <div class="group-seperator"/>

        <!-- Food, Drinking, Smoking Preference -->
        <div class="row form-wrapper">
          <!-- Food -->
          <div class="col-md-4 form-group">
            <h5 class="field-label">Food Preference</h5>
            <Multiselect
              v-model="data.dietTypes"
              :options="dietoptions"
              placeholder="Select or start typing"
              label="dietType"
              track-by="dietId"
              :multiple="true"
              :close-on-select="true"
              :preserve-search="true"
              :searchable="true"
            />
          </div>

          <!-- Drinking -->
          <div class="col-md-4 form-group">
            <h5 class="field-label">Drinking Preference</h5>
            <Multiselect
              v-model="data.drinkTypes"
              :options="drinkoptions"
              placeholder="Select or start typing"
              label="drinkDesc"
              track-by="drinkId"
              :multiple="true"
              :close-on-select="true"
              :preserve-search="true"
              :searchable="true"
            />
          </div>

          <!-- Smoking -->
          <div class="col-md-4 form-group">
            <h5 class="field-label">Smoking Preference</h5>
            <Multiselect
              v-model="data.smokeTypes"
              :options="smokeoptions"
              placeholder="Select or start typing"
              label="smokeLevel"
              track-by="smokeId"
              :multiple="true"
              :close-on-select="true"
              :preserve-search="true"
              :searchable="true"
            />
          </div>
        </div>
        <!-- End -->
      </div>
      <!-- Card Content Ends -->
    </div>
    <!-- Partner's Physical Details Ends -->
    <!-- Partner's Education & Occupation Details -->
    <div class="form-division">
      <div class="top-title">
        <h3>
          <i class="large material-icons">assignment_turned_in</i> Partner’s Education and Occupation
        </h3>
      </div>

      <div class="card-content">
        <!-- Highest Education -->
        <div class="row form-wrapper">
          <div class="col-md-6 form-group">
            <h5 class="field-label">Highest Education / Degrees</h5>
            <Treeselect
              v-model="educationLevelValues"
              :multiple="true"
              :options="educationleveloptions"
              :flatten-search-results="true"
              value-format="Object"
            />
          </div>
          <!-- End -->
        </div>
        <!-- End -->
        <!-- Occupation -->
        <div class="row form-wrapper">
          <div class="col-md-5 form-group">
            <h5 class="field-label">Occupation</h5>
            <Multiselect
              v-model="data.occupations"
              :options="occupationoptions"
              placeholder="Select or start typing"
              label="occupationName"
              track-by="occupationId"
              :multiple="true"
              :close-on-select="true"
              :preserve-search="true"
              :searchable="true"
            />
          </div>
        </div>
        <!-- End -->
        <!-- Annual Income, Currency -->
        <div class="row form-wrapper">
          <div class="col-md-4 form-group">
            <h5 class="field-label">Annual Income - Min</h5>
            <Multiselect
              v-model="minsalaryValue"
              placeholder="Select or start typing"
              label="salaryDesc"
              track-by="salaryId"
              :options="minSalaryoptions"
              :multiple="false"
              :close-on-select="true"
              :preserve-search="true"
              :searchable="true"
            />
            <div class="error">{{ errors.first('annual-income-min') }}</div>
          </div>

          <div class="col-md-4 form-group">
            <h5 class="field-label">Annual Income - Max</h5>
            <Multiselect
              v-model="maxsalaryValue"
              placeholder="Select or start typing"
              label="salaryDesc"
              track-by="salaryId"
              :options="maxSalaryoptions"
              :multiple="false"
              :close-on-select="true"
              :preserve-search="true"
              :searchable="true"
            />
            <div class="error">{{ errors.first('annual-income-max') }}</div>
          </div>

          <div class="col-md-4">
            <h5 class="field-label">Currency</h5>
            <Multiselect
              v-model="currenyValue"
              :options="currencyoptions"
              placeholder="Select or start typing"
              label="currency"
              track-by="currencyId"
              :multiple="false"
              :close-on-select="true"
              :preserve-search="true"
              :searchable="true"
            />
          </div>
        </div>
        <!-- End -->
        <!-- Expectation -->
        <div class="row form-wrapper">
          <div class="col-md-12">
            <h5 class="field-label">Expectations</h5>
          </div>

          <div class="col-md-8 form-group">
            <textarea
              v-validate="{ max: 1000 }"
              v-model="data.expectation"
              name="partner-expectation"
			  maxlength="1000"
              class="form-control"
              rows="5"
              id="partner-expectation"
              placeholder="Write some exmaple paragraph here"
            />
            <div class="error">{{ errors.first('partner-expectation') }}</div>
          </div>
        </div>
        <!-- End -->
      </div>
      <!-- Card Content Ends -->
    </div>
    <!-- Partner's Education & Occupation Details Ends -->
    <div class="bottom-buttons">
      <button class="btn btn-red" @click="OnSubmitButtonPress">Submit</button>
     <router-link
          :to="{ name: 'home' }"
          class="btn blank-btn"
          exact
        >
          Cancel
        </router-link>
    </div>
  </div>
</template>

<script>
//plugins
import Multiselect from "vue-multiselect";
import Treeselect from "@riophae/vue-treeselect";
import "@riophae/vue-treeselect/dist/vue-treeselect.css";

// Json files

import MaritalStatusData from "../../assets/json/info/marital-status.json";
import CountryData from "../../assets/json/info/country.json";
import ReligionData from "../../assets/json/info/religion.json";
import CasteData from "../../assets/json/info/casts.json";
import BodytypeData from "../../assets/json/info/body-type.json";
import ComplexionData from "../../assets/json/info/complexion.json";
import LanguageData from "../../assets/json/info/language.json";
import DietData from "../../assets/json/info/diet.json";
import DrinkData from "../../assets/json/info/drink.json";
import SmokeData from "../../assets/json/info/smoke.json";
import EducationlevelData from "../../assets/json/info/education-level.json";
import OccupationData from "../../assets/json/info/occupation.json";
import CurrencyData from "../../assets/json/info/currency.json";

export default {
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
    const allSalaryOptions = [
      { salaryId: "01", salaryDesc: "10000" },
      { salaryId: "02", salaryDesc: "15000" },
      { salaryId: "03", salaryDesc: "20000" },
      { salaryId: "04", salaryDesc: "25000" },
      { salaryId: "05", salaryDesc: "30000" },
      { salaryId: "06", salaryDesc: "35000" },
      { salaryId: "07", salaryDesc: "40000" },
      { salaryId: "08", salaryDesc: "45000" },
      { salaryId: "09", salaryDesc: "50000" },
      { salaryId: "10", salaryDesc: "55000" },
      { salaryId: "11", salaryDesc: "60000" },
      { salaryId: "12", salaryDesc: "65000" },
      { salaryId: "13", salaryDesc: "70000" },
      { salaryId: "14", salaryDesc: "75000" },
      { salaryId: "15", salaryDesc: "80000" },
      { salaryId: "16", salaryDesc: "85000" },
      { salaryId: "17", salaryDesc: "90000" },
      { salaryId: "18", salaryDesc: "95000" },
      { salaryId: "19", salaryDesc: "100000" }
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
      minageValue: {},
      maxageValue: {},
      allAges: allAges,
      minageoptions: allAges,
      maxageoptions: allAges,
      minheightValue: {},
      maxheightValue: {},
      maxHeightOptions: allHeightOptions,
      minHeightOptions: allHeightOptions,
      allHeightOptions: allHeightOptions,
      maritaloptions: [],
      valueConsistsOf: "BRANCH_PRIORITY",
      countryValues: [],
      stateValues: [],
      countryoptions: [],
      religionValues: [],
      religionoptions: [],
      castValues: [],
      subCastValues: [],
      casteoptions: [],
      bodytypeoptions: [],
      complexionoptions: [],
      languageoptions: [],
      dietoptions: [],
      drinkoptions: [],
      partnersmokeValue: [],
      smokeoptions: [],
      educationLevelValues: [],
      educationleveloptions: [],
      degreeValues: [],
      occupationoptions: [],
      minsalaryValue: [],
      maxsalaryValue: [],
      allSalaryoptions: allSalaryOptions,
      minSalaryoptions: allSalaryOptions,
      maxSalaryoptions: allSalaryOptions,
      currenyValue: [],
      currencyoptions: [],

      MaritalStatusData: MaritalStatusData,
      CountryData: CountryData,
      ReligionData: ReligionData,
      CasteData: CasteData,
      BodytypeData: BodytypeData,
      ComplexionData: ComplexionData,
      LanguageData: LanguageData,
      DietData: DietData,
      DrinkData: DrinkData,
      SmokeData: SmokeData,
      EducationlevelData: EducationlevelData,
      OccupationData: OccupationData,
      CurrencyData: CurrencyData,
      countryStateOptions: [],
      data: {
        bodyTypes: [],
        complexions: [],
        languages: [],
        dietTypes: [],
        smokeTypes: [],
        drinkTypes: [],
        maritalStatuses: [],
        educationLevels: [],
        degrees: [],
        countries: [],
        states: [],
        countryStateVal: null,
        occupations: [],
        religions: [],
        casts: [],
        subCasts: [],
        minHeight: "",
        maxHeight: "",
        minAge: "",
        maxAge: "",
        minSalary: "",
        maxSalary: "",
        expectation: "",
        currencyId: ""
      }
    };
  },
  components: {
    Multiselect,
    Treeselect
  },
  mounted() {
    this.getMaritalData();
    this.getCountryData();
    this.getReligionData();
    this.getCasteData();
    this.getBodyTypeData();
    this.getComplexionData();
    this.getLanguageData();
    this.getDietData();
    this.getDrinkData();
    this.getSmokeData();
    this.getEducationlevelData();
    this.getOccupationData();
    this.getCurrencyData();
    // this.createCountryStateStructure();
  },

  watch: {
    minageValue(newValues) {
      if (newValues) {
        const { ageId } = newValues;
        if (ageId)
          this.maxageoptions = this.allAges.filter(age => {
            return age.ageId > ageId;
          });
          this.data.minAge = newValues.ageId;
      } else {
        this.maxageoptions = this.allAges;
      }
      
    },

    maxageValue(newValues) {
      if (newValues != null) {
        const { ageId } = newValues;
        if (ageId)
          return (this.minageoptions = this.allAges.filter(age => {
            return age.ageId < ageId;
          }));
          this.data.maxAge = newValues.ageId;
      } else {
        this.minageoptions = this.allAges;
      }
      
    },

    minheightValue(newValues) {
      if (newValues) {
        const { heightId } = newValues;
        if (heightId)
          this.maxHeightOptions = this.allHeightOptions.filter(height => {
            return height.heightId > heightId;
          });
          this.data.minHeight = newValues.heightId;
      } else {
        this.maxHeightOptions = this.allHeightOptions;
      }

      
    },

    maxheightValue(newValues) {
      if (newValues) {
        const { heightId } = newValues;
        if (heightId)
          this.minHeightOptions = this.allHeightOptions.filter(height => {
            return height.heightId < heightId;
          });
          this.data.maxHeight = newValues.heightId;
      } else {
        this.minHeightOptions = this.allHeightOptions;
      }
      
    },

    religionValues(newValues) {
      // Will work for single select only
      this.data.religions.push({
        religionId: newValues.religionId,
        religionName: newValues.religionName
      });
      let CasteData = this.CasteData;
      CasteData = CasteData.filter(caste => {
        return newValues.religionId === caste.religionId;
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
      this.casteoptions = CasteData;
    },

    castValues: {
      handler(selectedValues) {
        let religion = this.data.religions;
        let CasteData = this.CasteData;
        CasteData = CasteData.filter(caste => {
          return religion[0].religionId === caste.religionId;
        });
        let casts = selectedValues.map(caste => {
          //if selected value is country
          if (caste.hasOwnProperty("children")) {
            return {
              castId: caste.id,
              castName: caste.label,
              subCasts: [],
              religionId: religion[0].religionId
            };
          }
          //if selected value is state
          if (caste.hasOwnProperty("castId")) {
            let selectedCaste = CasteData.find(data => {
              if (data != undefined) return data.castId == caste.castId;
            });
            // if any is selected
            if (caste.hasOwnProperty("any")) {
              return {
                castId: selectedCaste.castId,
                castName: selectedCaste.castName,
                subCasts: null,
                religionId: religion[0].religionId
              };
            } else {
              return {
                castId: selectedCaste.castId,
                castName: selectedCaste.castName,
                subCasts: [],
                religionId: religion[0].religionId
              };
            }
          }
        });

        casts = this.getUnique(casts, "castId");

        let subCasts = selectedValues.filter(subcaste => {
          //if selected value is state
          if (subcaste.hasOwnProperty("castId")) {
            return true;
          }
          return false;
        });

        subCasts = subCasts.map(subcaste => {
          return {
            subCastId: subcaste.subCastId,
            subCastName: subcaste.label,
            castId: subcaste.castId
          };
        });
        this.data.casts = casts;
        this.data.subCasts = subCasts;
      }
    },

    subCastValues(newValues) {
      this.data.casts.subCasts = [];
      this.data.casts.subCasts.push(newValues);
      this.data.subCasts = newValues;
    },
    countryValues: {
      handler(selectedValues) {
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
          return {
            stateId: state.id,
            stateName: state.label
          };
        });

        this.data.countries = countries;
        this.data.states = states;
      },
      deep: true
    },

    educationLevelValues: {
      handler(selectedValues) {
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
        degrees = degrees.map(degree => {
          return {
            degreeId: degree.id,
            degreeName: degree.label,
            educationLevelId: degree.educationLevelId
          };
        });

        this.data.educationLevels = educationLevels;
        this.data.degrees = degrees;
      }
    },

    degreeValues(newValues) {
      this.data.educationLevels.degrees = [];
      this.data.educationLevels.degrees.push(newValues);
      this.data.degrees = newValues;
    },

    minsalaryValue(newValues) {
      if (newValues) {
        const { salaryId } = newValues;
        if (salaryId)
          this.maxSalaryoptions = this.allSalaryoptions.filter(salary => {
            return salary.salaryId > salaryId;
          });
          this.data.minSalary = newValues.salaryDesc;
      } else {
        this.maxSalaryoptions = this.allSalaryoptions;
      }
      
    },

    maxsalaryValue(newValues) {
      if (newValues) {
        const { salaryId } = newValues;
        if (salaryId)
          this.minSalaryoptions = this.allSalaryoptions.filter(salary => {
            return salary.salaryId < salaryId;
          });
          this.data.maxSalary = newValues.salaryDesc;
      } else {
        this.minSalaryoptions = this.allSalaryoptions;
      }
      
    },

    currenyValue(newValues) {
      this.data.currencyId = newValues.currencyId;
    }
  },

  methods: {
    getMaritalData() {
      this.MaritalStatusData.forEach(MaritalStatusData => {
        this.maritaloptions.push(MaritalStatusData);
      });
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
    getReligionData() {
      this.ReligionData.forEach(ReligionData => {
        this.religionoptions.push(ReligionData);
      });
    },
    getCasteData() {
      this.casteoptions = [];
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
    getLanguageData() {
      this.LanguageData.forEach(LanguageData => {
        this.languageoptions.push(LanguageData);
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

    getOccupationData() {
      this.OccupationData.forEach(OccupationData => {
        this.occupationoptions.push(OccupationData);
      });
    },
    getCurrencyData() {
      this.CurrencyData.forEach(CurrencyData => {
        this.currencyoptions.push(CurrencyData);
      });
    },

    normalizer(node) {
      return {
        id: node.countryId,
        label: node.countryName,
        children: node.states
      };
    },

    createCountryStateStructure() {
      Object.values(this.CountryData).forEach((country) => {
        let obj = {
          id: country.countryId,
          label: country.countryName,
          children: []
        };
        Object.values(country.states).forEach(state => {
          obj.children.push({
            id: country.countryId + "_" + state.stateId,
            label: state.stateName
          });
        });
        this.countryStateOptions.push(obj);
      });
    },

    OnSubmitButtonPress: function() {

      this.$validator.validateAll().then(result => {
        if (result) {
          this.$store.commit("setSignupPartnerInfo", this.data);
          this.$store.dispatch("submitSignupReq");
        }
      });
    }, // end of onNextButtonPress

    onBackButtonPress: function() {
      if (this.activeTab > 1) {
        this.$store.commit("setActiveTab", this.activeTab - 1);
      }
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
    }
  }
};
</script>