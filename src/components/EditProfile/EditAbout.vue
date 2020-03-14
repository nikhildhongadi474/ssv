<template>
  <div class="container">
    <div class="col-md-3 col-sm-3 profile-picture">
      <img :src="profilePic">
    </div>

    <div class="col-md-9 col-sm-9">
      <ul class="nav nav-tabs">
        <li class="active">
          <a data-toggle="tab" href="#personal-info">Personal Information</a>
        </li>
        <li class="view-profile">
          <a href="javascript:void(0);" @click="openProfile">View Your Profile</a>
        </li>
      </ul>

      <div class="tab-content">
        <div id="personal-info" class="tab-pane fade in active">
          <!-- Profile Info Starts -->
          <div class="col-md-6 col-sm-12">
            <!-- Member Name -->
            <div class="row profile-info">
              <div class="col-md-6 col-sm-12 col-xs-12">
                <p class="profile-que">
                  Full Name
                  <span class="required">*</span>
                </p>
              </div>

              <div class="col-md-6 col-sm-6 col-xs-6">
                <p class="profile-ans">
                  <input
                    v-validate="{ required: true, min: 3, max: 60 }"
                    name="full-name"
                    type="text"
                    class="form-control"
                    placeholder="Full Name"
                    v-model="data.fullName"
                  >
                </p>
                <div class="error">{{ errors.first('full-name') }}</div>
              </div>
            </div>

            <!-- Member ID -->
            <div class="row profile-info">
              <div class="col-md-6 col-sm-6 col-xs-6">
                <p class="profile-que">Member ID</p>
              </div>

              <div class="col-md-6 col-sm-6 col-xs-6">
                <p class="profile-id">SSVB5072</p>
              </div>
            </div>

            <!-- Created By -->
            <div class="row profile-info">
              <div class="col-md-6 col-sm-6 col-xs-6">
                <p class="profile-que">
                  Created By
                  <span class="required">*</span>
                </p>
              </div>

              <div class="col-md-6 col-sm-6 col-xs-6">
                <p class="profile-ans">
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
                  />
                </p>
              </div>
            </div>

            <!-- Gender -->
            <div class="row profile-info">
              <div class="col-md-6 col-sm-6 col-xs-6">
                <p class="profile-que">Gender</p>
              </div>

              <div class="col-md-6 col-sm-6 col-xs-6">
                <p class="profile-ans">{{ data.gender }}</p>
              </div>
            </div>

            <!-- Maritial status -->
            <div class="row profile-info">
              <div class="col-md-6 col-sm-6 col-xs-6">
                <p class="profile-que">
                  Maritial status
                  <span class="required">*</span>
                </p>
              </div>

              <div class="col-md-6 col-sm-6 col-xs-6">
                <p class="profile-ans">
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
                </p>
                <div
                  v-show="errors.has('Marital Status')"
                  class="error"
                >{{ errors.first('Marital Status') }}</div>
              </div>
            </div>

            <!-- Languages -->
            <div class="row profile-info">
              <div class="col-md-6 col-sm-6 col-xs-6">
                <p class="profile-que">
                  Language
                  <span class="required">*</span>
                </p>
              </div>

              <div class="col-md-6 col-sm-6 col-xs-6">
                <p class="profile-ans">
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
                </p>
                <div v-show="errors.has('Language')" class="error">{{ errors.first('Language') }}</div>
              </div>
            </div>

            <!-- Date of Birth with Time -->
            <div class="row profile-info">
              <div class="col-md-6 col-sm-6 col-xs-6">
                <p class="profile-que">DOB with Time</p>
              </div>

              <div class="col-md-6 col-sm-6 col-xs-6">
                <p class="profile-ans">{{ dob }}</p>
              </div>
            </div>

            <!-- Religion -->
            <div class="row profile-info">
              <div class="col-md-6 col-sm-6 col-xs-6">
                <p class="profile-que">
                  Religion
                  <span class="required">*</span>
                </p>
              </div>

              <div class="col-md-6 col-sm-6 col-xs-6">
                <p class="profile-ans">
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
                </p>
                <div v-show="errors.has('Religion')" class="error">{{ errors.first('Religion') }}</div>
              </div>
            </div>

            <!-- Caste -->
            <div class="row profile-info">
              <div class="col-md-6 col-sm-6 col-xs-6">
                <p class="profile-que">
                  Caste
                  <span class="required">*</span>
                </p>
              </div>

              <div class="col-md-6 col-sm-6 col-xs-6">
                <p class="profile-ans">
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
                </p>
                <div v-show="errors.has('Caste')" class="error">{{ errors.first('Caste') }}</div>
              </div>
            </div>

            <!-- Sub Caste -->
            <div v-if="selectedSubcasts.length">
              <div class="row profile-info">
                <div class="col-md-6 col-sm-6 col-xs-6">
                  <p class="profile-que">
                    Sub Caste
                    <span class="required">*</span>
                  </p>
                </div>

                <div class="col-md-6 col-sm-6 col-xs-6">
                  <p class="profile-ans">
                    <Multiselect
                      v-model="subcasteValue"
                      :options="selectedSubcasts"
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
                  </p>
                  <div v-show="errors.has('Subcaste')" class="error">{{ errors.first('Subcaste') }}</div>
                </div>
              </div>
            </div>

            <!-- Current Country -->
            <div class="row profile-info">
              <div class="col-md-6 col-sm-6 col-xs-6">
                <p class="profile-que">
                  Current Country
                  <span class="required">*</span>
                </p>
              </div>

              <div class="col-md-6 col-sm-6 col-xs-6">
                <p class="profile-ans">
                  <Multiselect
                    v-model="countryValue"
                    :options="countryoptions"
                    :multiple="false"
                    :close-on-select="true"
                    :preserve-search="true"
                    :searchable="true"
                    placeholder="Select country"
                    label="countryName"
                    track-by="countryId"
                    v-validate="'required'"
                    data-vv-name="Country"
                    data-vv-value-path="Country"
                  />
                </p>
                <div v-show="errors.has('Country')" class="error">{{ errors.first('Country') }}</div>
              </div>
            </div>

            <!-- Current State -->
            <div v-if="stateoptions && stateoptions.length"> 
              <div class="row profile-info">
                <div class="col-md-6 col-sm-6 col-xs-6">
                  <p class="profile-que">
                    Current State
                    <span class="required">*</span>
                  </p>
                </div>

                <div class="col-md-6 col-sm-6 col-xs-6">
                  <p class="profile-ans">
                    <Multiselect
                      v-model="stateValue"
                      placeholder="Select state"
                      label="stateName"
                      track-by="stateId"
                      :options="stateoptions"
                      :multiple="false"
                      v-validate="'required'"
                      data-vv-name="State"
                      data-vv-value-path="State"
                    />
                  </p>
                  <div v-show="errors.has('State')" class="error">{{ errors.first('State') }}</div>
                </div>
              </div>
            </div>

            <!-- Current City -->
            <div class="row profile-info">
              <div class="col-md-6 col-sm-6 col-xs-6">
                <p class="profile-que">
                  Current City
                  <span class="required">*</span>
                </p>
              </div>

              <div class="col-md-6 col-sm-6 col-xs-6">
                <p class="">
                  <input
                    v-validate="{ required: true, max: 125 }"
                    v-model="data.currentPlace"
                    name="City"
                    class="form-control"
                    type="text"
                    id="city"
                    placeholder="City"
                  >
                </p>
                <div class="error">{{ errors.first('City') }}</div>
              </div>
            </div>
          </div>

          <!-- Profile Right Starts -->
          <div class="col-md-6 col-sm-12">
            <!-- Quick Social Connect Starts -->
            <div class="row quick-connect">
              <div class="col-md-12">
                <p class="profile-ans">
                  <i class="material-icons">phone</i>
                  {{ data.primaryPhone }}
                </p>
              </div>

              <div class="col-md-12">
                <p class="profile-shortlist">
                  <i class="material-icons">phone</i>
                  <input
                    v-model="data.alternativePhone"
                    name="alternate-mobile-number"
                    class="form-control"
                    type="tel"
                    id="alternate-contact-no"
                    placeholder="Alternate Phone no"
                  >
                </p>
              </div>

              <div class="col-md-12">
                <p class="profile-email">
                  <i class="material-icons">email</i>
                  {{ data.email }}
                </p>
              </div>
            </div>
            <!-- Quick Social Connect Ends -->
          </div>
          <!-- Profile Right Ends -->
          <div class="clearfix"/>

          <div class="bottom-buttons">
            <button class="btn btn-red" @click="onSaveButtonPress">Save</button>
            <a href="javascript:void(0);" class="btn blank-btn" @click="viewProfile(data.memberId)">Reset</a>
          </div>
        </div>
        <!-- Personal Info Ends -->
      </div>
      <!-- Tab Content Ends -->
    </div>
  </div>
  <!-- Container Ends -->
</template>

<script>
//plugins
import Multiselect from "vue-multiselect";
import moment from "moment";

// Json files
import MaritalStatusData from "../../assets/json/info/marital-status.json";
import LanguageData from "../../assets/json/info/language.json";
import CreatedbyData from "../../assets/json/info/created-by.json";
import CountryData from "../../assets/json/info/country.json";
import StateData from "../../assets/json/info/state.json";
import CasteData from "../../assets/json/info/casts.json";
import ReligionData from "../../assets/json/info/religion.json";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      dob: null,
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
      selectedStates: [],
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
      selectedSubcasts: [],

      MaritalStatusData: MaritalStatusData,
      LanguageData: LanguageData,
      CreatedbyData: CreatedbyData,
      CasteData: CasteData,
      CountryData: CountryData,
      StateData: StateData,
      ReligionData: ReligionData,

      data: {
        createdForId: "",
        fullName: "",
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
        stateId: "",
        memberId: null,
        createdFor: "",
        createdBy: ""
      }
    };
  },
  components: {
    Multiselect
    },
  mounted() {
    this.getMaritalData();
    this.getLanguageData();
    this.getCreatedbyData();
    this.getCountryData();
    this.getStateData();
    this.getCasteData();
    this.getReligionData();
  },
  watch: {
    createdbyValue(newValues) {
      this.data.createdForId = newValues.createdById;
      this.data.createdBy = newValues.createdByDesc;
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
      this.data.stateId = newValues ? newValues.stateId: null;
    },

    memberData(memberData) {
      let member = memberData;
      if (member && Object.keys(member).length) {
        this.data.memberId = member.personalInfoEntity.memberId;
        this.data.createdForId = member.memberDTO.createdFor.createdById;
        this.data.fullName =member.memberDTO.fullName
        this.data.memberId = member.personalInfoEntity.memberId;
        this.data.firstName = member.memberDTO.firstName;
        this.data.lastName = member.memberDTO.lastName;
        this.data.memberDob = member.memberDTO.memberDob;
        this.data.gender = member.memberDTO.gender;
        this.data.castId = member.memberDTO.cast.castId;
        this.data.subCastId = member.memberDTO.subCast.subCastId;
        this.data.maritalStatusId =
          member.memberDTO.maritalStatus.maritalStatusId;
        this.data.languageId = member.memberDTO.language.languageId;
        this.data.currentPlace = member.memberDTO.currentPlace;
        this.data.countryId = member.memberDTO.country.countryId;
        this.data.primaryPhone = member.memberDTO.primaryPhone;
        this.data.email = member.memberDTO.email;
        // this.data.password = member.personalInfoEntity.
        this.data.religionId = member.memberDTO.religion.religionId;
        this.data.alternativePhone = member.memberDTO.alternativePhone;
        this.data.stateId = member.memberDTO.state ? member.memberDTO.state.stateId : null;

        //created for
        this.createdbyValue = member.memberDTO.createdFor;
        this.data.createdBy = member.memberDTO.createdFor.createdByDesc;


        //religionValue
        this.religionValue = member.memberDTO.religion;

        //maritalStatusValue
        this.maritalStatusValue = member.memberDTO.maritalStatus;

        //languageValue
        this.languageValue = member.memberDTO.language;

        //casteValue
        this.casteValue = member.memberDTO.cast;

        let selectedCaste = this.CasteData.find(caste => {
          return caste.castId == member.memberDTO.cast.castId;
        })
        this.selectedSubcasts = selectedCaste.subCasts

        //subcasteValue
        this.subcasteValue = member.memberDTO.subCast;

        //countryValue
        this.countryValue = member.memberDTO.country;

        let selectedCountry = this.CountryData.find(country => {
          return country.countryId == member.memberDTO.country.countryId
        })
        this.selectedStates = selectedCountry.states

        //stateValue
        this.stateValue = member.memberDTO.state;

        this.dob = moment.unix(member.birthDate).format("DD-MM-YYYY LT");
      }
    }
  },
  computed: {
    ...mapGetters("Profile", ["memberData"]),
    profilePic: {
      get() {
        let profileImage = this.memberData.photoAlbumEntities.find(gallery => {
          return gallery.isProfilePic == "Y";
        });

        if (profileImage) {
          return "https://www.ssvmatrimony.org/images/" + profileImage.image;
        }
        return "/images/dummy/noimage.png";
      },
      set() {}
    },
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
    ...mapActions("Profile", ["updateAboutData", "viewProfile"]),
    findInArray(array, key, value) {
      return array.find(arr => {
        return arr[key] == value;
      });
    },
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
      let countries = CountryData.map(country => {
        return {
          countryId: country.countryId,
          countryName: country.countryName,
          states: country.states
        };
      });
      this.countryoptions = countries;
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

    onSaveButtonPress: function() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.data.createdFor = this.data.createdForId
          this.data.memberDob = this.$options.filters.formatDate( this.data.memberDob );
      
          this.updateAboutData(this.data)
            .then(() => {
              // this.$router.push({ name: "" });
            })
            .catch(() => {
              
            });
        }
      });
    },
    openProfile() {
      const { memberId } = this.$store.getters.getMyData
      this.$router.push('profile/'+memberId)
    }
  }
};
</script>