<template>
  <div>
    <!-- Education and Occupation -->
    <div class="form-division">
      <div class="top-title">
        <h3>
          <i class="large material-icons">business</i> Education and Occupation
        </h3>
      </div>

      <!-- Education Summary, Highest Education, Degree -->
      <div class="card-content">
        <div class="row form-wrapper">
          <!-- Education Summary -->
          <div class="col-md-6 form-group">
            <h5 class="field-label">Education Summary</h5>
            <textarea
              v-validate="{ max: 255 }"
              name="education-summary"
              class="form-control"
              rows="5"
              id="education-description"
              placeholder="Write some paragraph here"
              v-model="data.educationDetails"
            />
            <div class="error">{{ errors.first('education-summary') }}</div>
          </div>

          <!-- Highest Education, Degree -->
          <div class="col-md-6">
            <div class="col-md-12 form-group">
              <h5 class="field-label">Highest Education <span class="required">*</span></h5>
              <Multiselect
                v-model="educationLevelValue"
                :options="educationleveloptions"
                placeholder="Select or start typing"
                label="educationLevelDesc"
                track-by="educationLevelId"
                :multiple="false"
                :close-on-select="true"
                :preserve-search="true"
                :searchable="true"
                v-validate="'required'"
                data-vv-name="Highest Education"
                data-vv-value-path="Highest Education"
              />
              <div v-show="errors.has('Highest Education')" class="error">{{ errors.first('Highest Education') }}</div>
            </div>

            <div v-if="educationLevelValue.educationLevelDesc">
              <div v-if="educationLevelValue.degrees">
                <div class="col-md-12 form-group">
                  <h5 class="field-label">Specialisation <span class="required">*</span></h5>
                  <Multiselect
                    v-model="degreeValue"
                    placeholder="Select or start typing"
                    label="degreeName"
                    track-by="degreeId"
                    :options="educationLevelValue.degrees"
                    :multiple="false"
                    :close-on-select="true"
                    :preserve-search="true"
                    :searchable="true"
                    v-validate="'required'"
                    data-vv-name="Specialisation"
                    data-vv-value-path="Specialisation"
                  />
                  <div v-show="errors.has('Specialisation')" class="error">{{ errors.first('Specialisation') }}</div>
                </div>
              </div>
            </div>
          </div>
          <!-- End -->
        </div>
        <!-- End -->
        
        <!-- Institute /College/ University -->
        <div class="row form-wrapper">
          <div class="col-md-6">
            <h5 class="field-label">Institution / College / University</h5>
            <input
              v-validate="{ max: 125 }"
              name="institute"
              type="text"
              class="form-control"
              id="institute"
              placeholder="Enter your institute name"
              v-model="data.institution"
            >
            <div class="error">{{ errors.first('institute') }}</div>
          </div>
        </div>
        <!-- End -->
        <div class="group-seperator"/>

        <!-- Occupation Summary -->
        <div class="row form-wrapper">
          <div class="col-md-6 form-group">
            <h5 class="field-label">Occupation Summarys</h5>
            <textarea
              v-validate="{ max: 1000 }"
              name="occupation-summary"
              class="form-control"
              rows="5"
              placeholder="Write some paragraph here"
              v-model="data.occupationDetails"
              data-vv-name="Occupation Summary"
              data-vv-value-path="Occupation Summary"
            />
            <div class="error">{{ errors.first('Occupation Summary') }}</div>
          </div>

          <!-- Occupation, Employer / Organization -->
          <div class="col-md-6">
            <div class="col-md-12 form-group">
              <h5 class="field-label">Occupation <span class="required">*</span></h5>
              <Multiselect
                v-model="data.occupation"
                :options="occupationoptions"
                placeholder="Select or start typing"
                label="occupationName"
                track-by="occupationId"
                :multiple="false"
                :close-on-select="true"
                :preserve-search="true"
                :searchable="true"
                v-validate="'required'"
                data-vv-name="Occupation"
                data-vv-value-path="Occupation"
              />
              <div class="error">{{ errors.first('Occupation') }}</div>
            </div>

            <div class="col-md-12 form-group">
              <h5 class="field-label">Employer / Organization</h5>
              <input
                type="text"
                class="form-control"
                id="organization"
                placeholder="Enter your work place"
                v-model="data.employer"
              >
            </div>
          </div>
          <!-- End -->
        </div>
        <!-- End -->
        <!-- Annual Income -->
        <div class="row form-wrapper">
          <div class="col-md-4">
            <h5 class="field-label">Annual Income</h5>
            <input
              v-validate="'max:15'|'numeric' "
              name="annual-income"
              type="number"
              class="form-control"
              id="annual-income"
              placeholder="Enter your annual income"
              data-vv-as="field" 
              v-model="data.income"
            >
            <div class="error">{{ errors.first('annual-income') }}</div>
          </div>

          <div class="col-md-4">
            <h5 class="field-label">Currency</h5>
            <Multiselect
              v-model="data.currency"
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
      </div>
      <!-- Card Content Ends -->

      <div class="bottom-buttons">
        <button class="btn btn-red" @click="onSaveButtonPress">Save</button>
        <a href="#" class="btn blank-btn">Clear</a>
      </div> 

    </div>
    <!-- Education and Occupation Ends -->
  </div>
</template>

<script>
//plugins
import Multiselect from "vue-multiselect";

// Json files
import OccupationData from "../../assets/json/info/occupation.json";
import EducationlevelData from "../../assets/json/info/education-level.json";
import DegreeData from "../../assets/json/info/degree.json";
import CurrencyData from "../../assets/json/info/currency.json";
import { mapGetters, mapActions } from "vuex";

export default {
  props: ["member"],
  data() {
    return {
      activeTab: this.$store.state.activeTab,
      occupationoptions: [],
      educationLevelValue:[],
      educationleveloptions: [],
      degreeValue:[],
      degreeoptions: [],
      currencyoptions: [],
      OccupationData: OccupationData,
      EducationlevelData: EducationlevelData,
      DegreeData: DegreeData,
      CurrencyData: CurrencyData,
      
      data :{  
          degree :[],
          institution : '' ,
          educationDetails : '' ,
          occupation: [],
          income : '' ,
          currency: [],
          occupationDetails : '' ,
          employer :  '',
          memberId: null 
      },
    };
  },

  components: {
    Multiselect,
  },
  
  mounted() {
    this.getOccupationData();
    this.getEducationlevelData();
    this.getDegreeData();
    this.getCurrencyData();
  },

  computed: {
    ...mapGetters("Profile", ["memberData"]),
    isInvalid() {
      return this.isTouched && this.value.length === 0;
    }
  },

  watch: {

    degreeValue(newValues) {
      this.data.degree = newValues;
    }, 

    educationLevelValue() {
      this.degreeValue = {};
    },

    memberData(memberData) {
      let member = memberData;
      if (member && Object.keys(member).length) {
        this.data.memberId = member.personalInfoEntity.memberId;
        this.data.institution = memberData.educationDTOs[0].institution 
        this.data.educationDetails = memberData.educationDTOs[0].educationDetails
        this.data.occupation = memberData.educationDTOs[0].occupation
        this.data.income =  memberData.educationDTOs[0].income 
        this.data.currency =  memberData.educationDTOs[0].currency
        this.data.occupationDetails =  memberData.educationDTOs[0].occupationDetails
        this.data.employer =   memberData.educationDTOs[0].employer

        // educationLevelValue
        let educationLevel = this.findInArray(
          EducationlevelData,
          "educationLevelId",
          memberData.educationDTOs[0].degree.educationLevelId
        );

        this.educationLevelValue = educationLevel

        this.degreeoptions = this.educationLevelValue.degrees

        this.degreeValue = memberData.educationDTOs[0].degree
      }
    }


  },
 
  methods: {
    ...mapActions("Profile", ["updateEducationData", "viewProfile"]),
    
    findInArray(array, key, value) {
      return array.find(arr => {
        return arr[key] == value;
      });
    },

    getOccupationData() {
      this.OccupationData.forEach(OccupationData => {
        this.occupationoptions.push(OccupationData);
      });
    },

    getEducationlevelData() {
      this.EducationlevelData.forEach(EducationlevelData => {
        this.educationleveloptions.push(EducationlevelData);
      });
    },

    getDegreeData() {
      this.DegreeData.forEach(DegreeData => {
        this.degreeoptions.push(DegreeData);
      });
    },

    getCurrencyData() {
      this.CurrencyData.forEach(CurrencyData => {
        this.currencyoptions.push(CurrencyData);
      });
    },
    onSaveButtonPress: function() {

      this.$validator.validateAll().then(result => {
        if (result) {
          this.updateEducationData(this.data)
            .then(() => {
              // this.$router.push({ name: "" });
            })
            .catch(() => {
              
            });   
        }
      });           
    }, // end of onNextButtonPress    

    onBackButtonPress: function() { 
      if (this.activeTab > 1)
      {
        this.$store.commit ('setActiveTab', (this.activeTab - 1));          
      }
    }  
  }
};
</script>