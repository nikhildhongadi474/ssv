<template>
  <div>
    <!-- Form Division Ends -->
    <div class="form-division">
      <div class="top-title">
        <h3>
          <i class="large material-icons">import_contacts</i> Personal details about you
        </h3>
      </div>

      <div class="card-content">
        <!-- Full Name -->
        <div class="row form-wrapper">
          <div class="col-md-12">
            <h5 class="field-label">
              Your Full Name
              <span class="required">*</span>
            </h5>
          </div>

          <div class="col-md-4 form-group">
            <input
              v-validate="{ required: true, min: 3, max: 30 }"
			  maxlength="30"
              name="first-name"
              type="text"
              class="form-control"
              placeholder="First Name"
              v-model="data.firstName"
            >
            <div class="error">{{ errors.first('first-name') }}</div>
          </div>

          <div class="col-md-4 form-group">
            <input
              v-validate="{ required: true, min: 1, max: 30 }"
			  maxlength="30"
              name="last-name"
              type="text"
              class="form-control"
              placeholder="Last Name"
              v-model="data.lastName"
            >
            <div class="error">{{ errors.first('last-name') }}</div>
          </div>
        </div>

        <!-- Email, Password, Confirm Password -->
        <div class="row form-wrapper">
          <!-- Email -->
          <div class="col-md-4 form-group">
            <h5 class="field-label">
              Email ID
              <span class="required">*</span>
            </h5>
            <input
              v-validate="{ required: true, email: true, max: 60 }"
              v-model="data.email"
			  maxlength="60"
              name="email"
              class="form-control"
              type="email"
              id="email"
              placeholder="Your Email ID"
            >
            <div class="error">{{ errors.first('email') }}</div>
          </div>
          <!-- End -->
          <!-- Password -->
          <div class="col-md-4 form-group">
            <h5 class="field-label">
              Password
              <span class="required">*</span>
            </h5>
            <input
              v-validate="{ required: true, min:8, max: 255 }"
              class="form-control"
              name="password"
              type="password"
              placeholder="Password"
              ref="password"
            >

            <div class="error" v-if="errors.has('password')">{{ errors.first('password') }}</div>
          </div>
          <!-- End -->
          <!-- Confirm Password -->
          <div class="col-md-4 form-group">
            <h5 class="field-label">
              Confirm Password
              <span class="required">*</span>
            </h5>
            <input
              v-validate="'required|confirmed:password'"
              v-model="data.password"
              class="form-control"
              name="password_confirmation"
              type="password"
              placeholder="Password, Again"
              data-vv-as="password"
            >

            <div
              class="error"
              v-if="errors.has('password_confirmation')"
            >{{ errors.first('password_confirmation') }}</div>
          </div>
          <!-- End -->
        </div>
        <!-- End -->

        <div class="group-seperator"/>

        <!-- Created By, Gender -->
        <div class="row form-wrapper">
          <div class="col-md-4 form-group">
            <h5 class="field-label">
              Created By
              <span class="required">*</span>
            </h5>
            <Multiselect
              v-model="createdbyValue"
              placeholder="Select or start typing"
              label="createdByDesc"
              track-by="createdById"
              :options="createdbyoptions"
              :multiple="false"
              :close-on-select="true"
              :preserve-search="true"
              :searchable="true"
              v-validate="'required'"
              data-vv-name="Created By"
              data-vv-value-path="Created By"
            />
            <div v-show="errors.has('Created By')" class="error">{{ errors.first('Created By') }}</div>
          </div>
          <!-- End -->
          <!-- Gender -->
          <div class="col-md-4 form-group">
            <h5 class="field-label">
              Gender
              <span class="required">*</span>
            </h5>
            <Multiselect
              v-model="genderValue"
              placeholder="Select or start typing"
              label="genderDesc"
              track-by="genderId"
              :options="genderoptions"
              :multiple="false"
              :close-on-select="true"
              :preserve-search="true"
              :searchable="true"
              v-validate="'required'"
              data-vv-name="Gender"
              data-vv-value-path="Gender"
            />
            <div v-show="errors.has('Gender')" class="error">{{ errors.first('Gender') }}</div>
          </div>

          <!-- Maritial status -->
          <div class="col-md-4 form-group">
            <h5 class="field-label">
              Maritial status
              <span class="required">*</span>
            </h5>
            <Multiselect
              v-model="maritalStatusValue"
              placeholder="Select or start typing"
              label="msName"
              track-by="maritalStatusId"
              :options="maritaloptions"
              :multiple="false"
              :close-on-select="true"
              :preserve-search="true"
              :searchable="true"
              v-validate="'required'"
              data-vv-name="Marital Status"
              data-vv-value-path="Marital Status"
            />
            <div
              v-show="errors.has('Marital Status')"
              class="error"
            >{{ errors.first('Marital Status') }}</div>
          </div>
        </div>
        <!-- End -->
        <!-- Languages, Dob & time -->
        <div class="row form-wrapper">
          <!-- Languages -->
          <div class="col-md-4 form-group">
            <h5 class="field-label">
              Mother-tongue / Language
              <span class="required">*</span>
            </h5>
            <Multiselect
              v-model="languageValue"
              placeholder="Select or start typing"
              label="languageName"
              track-by="languageId"
              :multiple="false"
              :close-on-select="true"
              :preserve-search="true"
              :searchable="true"
              :options="languageoptions"
              v-validate="'required'"
              data-vv-name="Language"
              data-vv-value-path="Language"
            />
            <div v-show="errors.has('Language')" class="error">{{ errors.first('Language') }}</div>
          </div>
          <!-- End -->
          <!-- Dob & time  -->
          <div class="col-md-4 form-group">
            <h5 class="field-label">
              Date of Birth with Time
              <span class="required">*</span>
            </h5>
            <Datetime
              type="datetime"
              v-model="data.memberDob"
              class="theme-red"
              use12-hour
              format="dd-MM-yyyy HH:mm:ss"
              v-validate="'required'"
              data-vv-name="Date and Time"
              data-vv-value-path="Date and Time"
            />

            <div
              v-show="errors.has('Date and Time')"
              class="error"
            >{{ errors.first('Date and Time') }}</div>
          </div>
          <!-- End -->
        </div>

        <!-- Religion -->
        <div class="row form-wrapper">
          <div class="col-md-4 form-group">
            <h5 class="field-label">
              Religion
              <span class="required">*</span>
            </h5>
            <Multiselect
              v-model="religionValue"
              :options="religionoptions"
              :multiple="false"
              :close-on-select="true"
              :preserve-search="true"
              :searchable="true"
              label="religionName"
              track-by="religionId"
              v-validate="'required'"
              data-vv-name="Religion"
              data-vv-value-path="Religion"
            />
            <div v-show="errors.has('Religion')" class="error">{{ errors.first('Religion') }}</div>
          </div>

          <!-- Caste, Sub Caste -->
          <div class="col-md-4 form-group">
            <h5 class="field-label">
              Caste
              <span class="required">*</span>
            </h5>
            <Multiselect
              v-model="casteValue"
              :options="casteoptions"
              :multiple="false"
              :close-on-select="true"
              :preserve-search="true"
              :searchable="true"
              label="castName"
              track-by="castId"
              v-validate="'required'"
              data-vv-name="Caste"
              data-vv-value-path="Caste"
            />
            <div v-show="errors.has('Caste')" class="error">{{ errors.first('Caste') }}</div>
          </div>

          <div v-if="casteValue.castName && casteValue.subCasts" class="col-md-4 form-group">
            <h5 class="field-label">
              Sub Caste
              <span class="required">*</span>
            </h5>
            <Multiselect
              v-model="subcasteValue"
              :options="casteValue.subCasts"
              :multiple="false"
              :close-on-select="true"
              :preserve-search="true"
              :searchable="true"
              track-by="subCastId"
              label="subCastName"
              v-validate="'required'"
              data-vv-name="Subcaste"
              data-vv-value-path="Subcaste"
            />
            <div v-show="errors.has('Subcaste')" class="error">{{ errors.first('Subcaste') }}</div>
          </div>
        </div>
        <!-- End -->
        <!-- Mobile, Alternate Number -->
        <div class="row form-wrapper">
          <div class="col-md-4 form-group">
            <h5 class="field-label">
              Mobile Number
              <span class="required">*</span>
            </h5>
            <input
              v-validate="{ required: true, max: 14 }"
              v-model="data.primaryPhone"
			  maxlength="14"
              name="Mobile Number"
			  pattern="[0-9]{10}"
              class="form-control"
              type="tel"
              placeholder="Your mobile number"
            >
            <div class="error">{{ errors.first('Mobile Number') }}</div>
          </div>

          <div class="col-md-4 form-group">
            <h5 class="field-label">Alternate Phone Number</h5>
            <input
              v-validate="{ max: 14 }"
              v-model="data.alternativePhone"
			  maxlength="14"
              name="alternate-mobile-number"
			  pattern="[0-9]{10}"
              class="form-control"
              type="tel"
              id="alt-number"
              placeholder="Your phone number"
            >
            <div class="error">{{ errors.first('alternate-mobile-number') }}</div>
          </div>
        </div>
        <!-- End -->
        <div class="group-seperator"/>

        <!-- City, State, Country -->
        <div class="row form-wrapper">
          <div class="col-md-4 form-group">
            <h5 class="field-label">
              Current Country
              <span class="required">*</span>
            </h5>
            <Multiselect
              v-model="countryValue"
              :options="countryoptions"
              :multiple="false"
              :close-on-select="true"
              :preserve-search="true"
              :searchable="true"
              placeholder="Select country or start typing"
              label="countryName"
              track-by="countryId"
              v-validate="'required'"
              data-vv-name="Country"
              data-vv-value-path="Country"
            />
            <div v-show="errors.has('Country')" class="error">{{ errors.first('Country') }}</div>
          </div>

          <div v-if="countryValue.countryName && countryValue.states">
            <div v-if="countryValue.states.length">
              <div class="col-md-4 form-group">
                <h5 class="field-label">
                  Current State
                  <span class="required">*</span>
                </h5>
                <Multiselect
                  v-model="stateValue"
                  placeholder="Select state or start typing"
                  label="stateName"
                  track-by="stateId"
                  :options="countryValue.states"
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
              Current City
              <span class="required">*</span>
            </h5>
            <input
              v-validate="{ required: true, max: 20 }"
              v-model="data.currentPlace"
			  maxlength="20"
              name="City"
              class="form-control"
              type="text"
              id="city"
              placeholder="City"
            >
            <div class="error">{{ errors.first('City') }}</div>
          </div>
        </div>
      </div>
      <!-- Card Content Ends -->
      <!-- Form Division Ends -->
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
  </div>
</template>

<script>
//plugins
import Multiselect from "vue-multiselect";
import { Datetime } from "vue-datetime";
import moment from "moment";

// Json files
import MaritalStatusData from "../../assets/json/info/marital-status.json";
import LanguageData from "../../assets/json/info/language.json";
import CreatedbyData from "../../assets/json/info/created-by.json";
import CountryData from "../../assets/json/info/country.json";
import StateData from "../../assets/json/info/state.json";
import CasteData from "../../assets/json/info/casts.json";
import ReligionData from "../../assets/json/info/religion.json";
export default {
  data() {
    return {
      activeTab: this.$store.state.activeTab,
      isTouched: false,
      value: [],
      checked: false,
      isActive: false,
      formatted: "",
      maritalStatusValue: [],
      maritaloptions: [],
      languageValue: [],
      languageoptions: [],
      createdbyValue: [],
      createdbyoptions: [],
      genderValue: [],
      genderoptions: [
        { genderId: "01", genderDesc: "Male" },
        { genderId: "02", genderDesc: "Female" },
        { genderId: "03", genderDesc: "None" }
      ],
      casteValue: [],
      subcasteValue: [],
      casteoptions: [],
      countryValue: [],
      countryoptions: [],
      stateValue: [],
      stateoptions: [],
      religionValue: [],
      religionoptions: [],

      MaritalStatusData: MaritalStatusData,
      LanguageData: LanguageData,
      CreatedbyData: CreatedbyData,
      CasteData: CasteData,
      CountryData: CountryData,
      StateData: StateData,
      ReligionData: ReligionData,

      data: {
        createdForId: "",
        firstName: "",
        lastName: "",
        memberDob: "",
        gender: "",
        castId: "",
        subCastId: "",
        maritalStatusId: "",
        languageId: "",
        currentPlace: "",
        countryId: "",
        primaryPhone: "",
        email: "",
        password: "",
        religionId: "",
        alternativePhone: "",
        stateId: ""
      }
    };
  },
  components: {
    Multiselect,
    Datetime
  },
  mounted() {
    this.getMaritalData();
    this.getLanguageData();
    this.getCreatedbyData();
    this.getCountryData();
    this.getStateData();
    this.getCasteData();
    this.getReligionData();
    this.getInitialSignupData();
  },
  watch: {
    createdbyValue(newValues) {
      this.data.createdForId = newValues.createdById;
    },
    genderValue(newValues) {
      this.data.gender = newValues.genderDesc;
    },

    casteValue(newValues) {
      this.data.castId = newValues.castId;
    },

    subcasteValue(newValues) {
      this.data.subCastId = newValues.subCastId;
    },

    maritalStatusValue(newValues) {
      this.data.maritalStatusId = newValues.maritalStatusId;
    },

    languageValue(newValues) {
      this.data.languageId = newValues.languageId;
    },

    countryValue(newValues) {
      this.data.countryId = newValues.countryId;
    },

    religionValue(newValues) {
      this.data.religionId = newValues.religionId;
    },

    stateValue(newValues) {
      this.data.stateId = newValues.stateId;
    }
  },
  computed: {
    isInvalid() {
      return this.isTouched && this.value.length === 0;
    }
  },
  filters: {
    formatDate: function(value) {
      if (value) {
        return moment(String(value)).format("DD-MM-YYYY HH:mm:ss");
      }
    }
  },
  methods: {
    getMaritalData() {
      this.MaritalStatusData.forEach(MaritalStatusData => {
        this.maritaloptions.push(MaritalStatusData);
      });
    },
    getLanguageData() {
      this.LanguageData.forEach(LanguageData => {
        this.languageoptions.push(LanguageData);
      });
    },
    getCreatedbyData() {
      this.CreatedbyData.forEach(CreatedbyData => {
        this.createdbyoptions.push(CreatedbyData);
      });
    },
    getCountryData() {
      this.CountryData.forEach(CountryData => {
        this.countryoptions.push(CountryData);
      });
    },
    getStateData() {
      this.StateData.forEach(StateData => {
        this.stateoptions.push(StateData);
      });
    },
    getCasteData() {
      this.CasteData.forEach(CasteData => {
        this.casteoptions.push(CasteData);
      });
    },
    getReligionData() {
      this.ReligionData.forEach(ReligionData => {
        this.religionoptions.push(ReligionData);
      });
    },
    getInitialSignupData() {
      if (this.$route.params && this.$route.params.signUpInitialData) {
        let { signUpInitialData } = this.$route.params;
        let name = signUpInitialData.name.split(" ");
        this.data.firstName = name[0];
        this.data.lastName = name[1];
        this.data.email = signUpInitialData.email;
        this.data.password = signUpInitialData.password;
        // this.data.password = signUpInitialData.password
      }
    },

    onNextButtonPress: function() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.data.memberDob = this.$options.filters.formatDate(
            this.data.memberDob
          );

          this.$store.commit("setSignupAboutdata", this.data);
          this.$store.commit("setActiveTab", this.activeTab + 1);
          window.scrollTo(0, 0);
        }
      });
    } // end of onNextButtonPress
  }
};
</script>