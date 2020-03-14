<template>
  <div>
    <!-- About your family -->
    <div class="form-division">
      <div class="top-title">
        <h3>
          <i class="large material-icons">wc</i> About your family
        </h3>
      </div>

      <div class="card-content">
        <!-- Family Summary -->
        <div class="row form-wrapper">
          <div class="col-md-12">
            <h5 class="field-label">Summary about your family</h5>
          </div>

          <div class="col-md-8 form-group">
            <textarea
              v-validate="'max: 255'"
              name="family-summary"
              class="form-control"
              rows="5"
              placeholder="Write some paragraph here"
              v-model="data.familyDetails"
            />
            <div class="error">{{ errors.first('family-summary') }}</div>
          </div>
        </div>
        <!-- End -->

        <!-- Family Status, Type, Value -->
        <div class="row form-wrapper">
          <div class="col-md-4 form-group">
            <h5 class="field-label">Family Status</h5>
            <Multiselect
              v-model="data.familyStatus"
              placeholder="Select or start typing"
              label="familyStatusDesc"
              track-by="familyStatusId"
              :options="familystatusoptions"
              :multiple="false"
              :close-on-select="true"
              :preserve-search="true"
              :searchable="true"
            />
          </div>
          <!-- End -->

          <!-- Family Type -->
          <div class="col-md-4 form-group">
            <h5 class="field-label">Family Type</h5>
            <Multiselect
              v-model="data.familyType"
              placeholder="Select or start typing"
              label="familyTypeDesc"
              track-by="familyTypeId"
              :options="familytypeoptions"
              :multiple="false"
              :close-on-select="true"
              :preserve-search="true"
              :searchable="true"
            />
          </div>
          <!-- End -->

          <!-- Family Value -->
          <div class="col-md-4 form-group">
            <h5 class="field-label">Family Value</h5>
            <Multiselect
              v-model="data.familyValue"
              placeholder="Select or start typing"
              label="familyValueDesc"
              track-by="familyValueId"
              :options="familyvalueoptions"
              :multiple="false"
              :close-on-select="true"
              :preserve-search="true"
              :searchable="true"
            />
          </div>
          <!-- End -->
        </div>
        <!-- End -->

        <!-- Father's Name, Occupation -->
        <div class="row form-wrapper">
          <div class="col-md-4 form-group">
            <h5 class="field-label">Father’s Name</h5>
            <input
              v-model="data.fatherName"
              v-validate="{ max: 60 }"
              name="father-name"
              type="text"
              class="form-control"
              id="father-name"
              placeholder="Full Name"
            >
            <div class="error">{{ errors.first('father-name') }}</div>
          </div>

          <div class="col-md-5 form-group">
            <h5 class="field-label">Father’s Occupation</h5>
            <Multiselect
              v-model="data.fatherOccupation"
              :options="occupationoptions"
              placeholder="Select or start typing"
              label="occupationName"
              track-by="occupationId"
              :multiple="false"
              :close-on-select="true"
              :preserve-search="true"
              :searchable="true"
            />
          </div>

          <div class="col-md-3 form-group">
            <h5 class="field-label">Occupation details</h5>
            <input
              v-model="data.fatherOccupationDetails"
              v-validate="{ max: 100 }"
              name="father-occdetails"
              type="text"
              class="form-control"
              id="father-occdetails"
              placeholder="Occupation details"
            >
            <div class="error">{{ errors.first('father-occdetails') }}</div>
          </div>
        </div>
        <!-- End -->

        <!-- Mother's Name, Occupation -->
        <div class="row form-wrapper">
          <div class="col-md-4 form-group">
            <h5 class="field-label">Mother’s Name</h5>
            <input
              v-model="data.motherName"
              v-validate="{ max: 60 }"
              name="mother-name"
              type="text"
              class="form-control"
              id="mother-name"
              placeholder="Full Name"
            >
            <div class="error">{{ errors.first('mother-name') }}</div>
          </div>

          <div class="col-md-5 form-group">
            <h5 class="field-label">Mother’s Occupation</h5>
            <Multiselect
              v-model="data.motherOccupation"
              placeholder="Select or start typing"
              label="occupationName"
              track-by="occupationId"
              :options="occupationoptions"
              :multiple="false"
              :close-on-select="true"
              :preserve-search="true"
              :searchable="true"
            />
          </div>
          <div class="col-md-3 form-group">
            <h5 class="field-label">Occupation details</h5>
            <input
              v-model="data.motherOccupationDetails"
              v-validate="{ max: 100 }"
              name="mother-occdetails"
              type="text"
              class="form-control"
              id="mother-occdetails"
              placeholder="Occupation details"
            >
            <div class="error">{{ errors.first('mother-occdetails') }}</div>
          </div>          
        </div>
        <!-- End -->

        <!-- City, State, Country -->
        <div class="row form-wrapper">
          <div class="col-md-4 form-group">
            <h5 class="field-label">Origin Country</h5>
            <Multiselect
              v-model="countryValues"
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

          <div v-if="countryValues.countryName && countryValues.states">
            <div v-if="countryValues.states.length">
              <div class="col-md-4 form-group">
                <h5 class="field-label">Origin State</h5>
                <Multiselect
                  v-model="stateValues"
                  :options="countryValues.states"
                  placeholder="Select state or start typing"
                  label="stateName"
                  track-by="stateId"
                  :multiple="false"
                  :close-on-select="true"
                  :preserve-search="true"
                  :searchable="true"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="row form-wrapper">
          <div class="col-md-4 form-group">
            <h5 class="field-label">Origin District</h5>
            <input
              v-model="data.orgDistrict"        
              v-validate="{ required: true, max: 125 }"
              name="origin-district"
              class="form-control"
              type="text"
              placeholder="Enter district name"
            >
            <div class="error">{{ errors.first('origin-district') }}</div>
          </div>

          <div class="col-md-4 form-group">
            <h5 class="field-label">Origin City</h5>
            <input
              v-model="data.orgCity"        
              v-validate="{ required: true, max: 125 }"
              name="origin-city"
              class="form-control"
              type="text"
              placeholder="Enter city"
            >
            <div class="error">{{ errors.first('origin-city') }}</div>
          </div>

        </div>
        <!-- Family address -->
        <div class="row form-wrapper">
          <div class="col-md-12">
            <h5 class="field-label">Your family's address</h5>
          </div>

          <div class="col-md-8 form-group">
            <textarea
              v-validate="{ max: 255 }"
              name="family-address"
              class="form-control"
              rows="5"
              placeholder="Write the address here"
              v-model="data.familyAddress"
            />
            <div class="error">{{ errors.first('family-address') }}</div>
          </div>
        </div>
        <!-- End -->

        <!-- Sibling, brother, sister numbers -->
        <div class="row form-wrapper">
          <div class="col-md-12">
            <h5 class="field-label">Siblings</h5>
          </div>


          <div class="col-md-12 form-group">
            <div>
              <SiblingModule @siblingInfoSaved="setSignupFamilyInfo"/> 
            </div>
          </div>

          <div class="clearfix"/>
        </div>
        <!-- End -->
      </div>
      <!-- Card Content Ends -->

      <div class="bottom-buttons">
        <button class="btn btn-red" @click="onSaveButtonPress">Save</button>
        <a href="javascript:void(0);" class="btn blank-btn" @click="viewProfile(data.memberId)">Reset</a>
      </div>  

    </div>
    <!-- About your family Ends -->
  </div>
</template>

<script>
//plugins
import Multiselect from "vue-multiselect";


import SiblingModule from "@/components/EditProfile/EditSiblingModule.vue";

// Json files

import CountryData from "../../assets/json/info/country.json";
import StateData from "../../assets/json/info/state.json";
import MaritalStatusData from "../../assets/json/info/marital-status.json";
import OccupationData from "../../assets/json/info/occupation.json";
import FamilystatusData from "../../assets/json/info/family-status.json";
import FamilytypeData from "../../assets/json/info/family-type.json";
import FamilyvalueData from "../../assets/json/info/family-value.json";
import { mapGetters, mapActions } from 'vuex'

export default {
  name:"SiblingInfo",
  components: {
    Multiselect,
    SiblingModule: SiblingModule
  },
  data() {
    return {
      activeTab: this.$store.state.activeTab,
      maritalStatusValue: [],
      maritaloptions: [],
      occupationoptions: [],
      familystatusoptions: [],
      familytypeoptions: [],
      familyvalueoptions: [],
      countryValues:[],
      countryoptions: [],
      stateValues:[],
      stateoptions: [],
      saveSiblingsDataFlag: false,

      MaritalStatusData: MaritalStatusData, 
      OccupationData: OccupationData, 
      FamilystatusData: FamilystatusData,
      FamilytypeData: FamilytypeData,
      FamilyvalueData: FamilyvalueData,
      CountryData: CountryData,
      StateData: StateData,

      data :{  
        familyStatus :[],
        familyValue :[],
        familyType :[],
        motherOccupation :[],
        motherOccupationDetails :'',
        fatherOccupation :[],
        fatherOccupationDetails :'',
        orgCountry :[],
        orgState :[],
        familyDetails :'',
        fatherName :'',
        motherName :'',
        orgCity :'',
        familyAddress :'',
        orgDistrict :'',
        memberId: null
      },

      siblings :[]
    };
  },
  computed: {
      ...mapGetters('Profile', ['memberData', "siblingData"]),
  },
  mounted() {
    this.getMaritalData();
    this.getOccupationData();
    this.getFamilystatusData();
    this.getFamilytypeData();
    this.getFamilyvalueData();
    this.getCountryData();
    this.getStateData();
  },

  watch: {

    countryValues(newValues) {
      // Will work for single select only
      this.data.orgCountry = newValues;
    },

    stateValues(newValues) {
      this.data.orgCountry.states = [];
      this.data.orgCountry.states.push(newValues);
      this.data.orgState = newValues;
    },   
    
    memberData(memberData) {
      let member = memberData;
      if (member && Object.keys(member).length) {
        this.data.memberId = member.personalInfoEntity.memberId;

        this.data.familyStatus = member.familyInfoEntity.familyStatus
        this.data.familyValue = member.familyInfoEntity.familyValue
        this.data.familyType = member.familyInfoEntity.familyType
        this.data.motherOccupation = member.familyInfoEntity.motherOccupation
        this.data.motherOccupationDetails  = member.familyInfoEntity.motherOccupationDetails
        this.data.fatherOccupation = member.familyInfoEntity.fatherOccupation
        this.data.fatherOccupationDetails  = member.familyInfoEntity.fatherOccupationDetails
        this.data.orgState = member.familyInfoEntity.orgState
        this.data.familyDetails  = member.familyInfoEntity.familyDetails
        this.data.fatherName  = member.familyInfoEntity.fatherName
        this.data.motherName  = member.familyInfoEntity.motherName
        this.data.orgCity  = member.familyInfoEntity.orgCity
        this.data.familyAddress  = member.familyInfoEntity.familyAddress
        this.data.orgDistrict = member.familyInfoEntity.orgDistrict
        this.stateValues = member.familyInfoEntity.orgState

        // educationLevelValue
        let selectedCountry = this.findInArray(
          this.CountryData,
          "countryId",
          member.familyInfoEntity.orgCountry.countryId
        );
        let states = selectedCountry.states
          this.countryValues = {
            countryId: selectedCountry.countryId,
            countryName: selectedCountry.countryName,
            states: states
          };

          this.data.orgCountry = {
            countryId: selectedCountry.countryId,
            countryName: selectedCountry.countryName,
            states: states
          };

      }
    }
  },

  methods: {
    ...mapActions("Profile", ["updateFamilyData", "saveSiblingsInfoData", "viewProfile"]),

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
    getOccupationData() {
      this.OccupationData.forEach(OccupationData => {
        this.occupationoptions.push(OccupationData);
      });
    },
    getFamilystatusData() {
      this.FamilystatusData.forEach(FamilystatusData => {
        this.familystatusoptions.push(FamilystatusData);
      });
    },
    getFamilytypeData() {
      this.FamilytypeData.forEach(FamilytypeData => {
        this.familytypeoptions.push(FamilytypeData);
      });
    },
    getFamilyvalueData() {
      this.FamilyvalueData.forEach(FamilyvalueData => {
        this.familyvalueoptions.push(FamilyvalueData);
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
     
    onSaveButtonPress: function() {
      this.$validator.validateAll().then(result => {
        if (result) {      
          this.saveSiblingsInfoData()
          this.updateFamilyData(this.data)
            .then(() => {
              // this.$router.push({ name: "" });
            })
            .catch(() => {
            });
        } // end of onNextButtonPress 
      }); 
    },        

    setSignupFamilyInfo() {
      if (this.saveSiblingsDataFlag){
        this.$store.dispatch ('setSignupFamilyInfo', this.data)
        this.$store.commit ('setActiveTab', (this.activeTab + 1));  
        window.scrollTo(0, 0); 
      }
    },   
  },  
   
};
</script>
