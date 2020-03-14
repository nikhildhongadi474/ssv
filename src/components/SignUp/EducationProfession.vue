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
              v-validate="{ max: 500 }"
			  maxlength="500"
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
              <h5 class="field-label">Highest Education
			  <span class="required">*</span></h5>
              <Multiselect
                v-model="educationLevelValue"
			    placeholder="Select or start typing"
                label="educationLevelDesc"
                track-by="educationLevelId"
				:options="educationleveloptions"
                :multiple="false"
                :close-on-select="true"
                :preserve-search="true"
                :searchable="true"
				v-validate="'required'"
                data-vv-name="educationlevel"
                data-vv-value-path="educationlevel"
            />
            <div v-show="errors.has('educationlevel')" class="error">{{ errors.first('educationlevel') }}</div>
          </div>
             

            <div v-if="educationLevelValue.educationLevelDesc">
              <div v-if="educationLevelValue.degrees">
                <div class="col-md-12 form-group">
                  <h5 class="field-label">Specialisation</h5>
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
                  />
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
			  maxlength="125"
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
            <h5 class="field-label">Occupation Summary</h5>
            <textarea
              v-validate="{ max: 1000 }"
			  maxlength="1000"
              name="occupation-summary"
              class="form-control"
              rows="5"
              placeholder="Write some paragraph here"
              v-model="data.occupationDetails"
            />
            <div class="error">{{ errors.first('occupation-summary') }}</div>
          </div>

          <!-- Occupation, Employer / Organization -->
          <div class="col-md-6">
            <div class="col-md-12 form-group">
              <h5 class="field-label">Occupation
			  <span class="required">*</span></h5>
              <Multiselect
                v-model="data.occupation"
                placeholder="Select or start typing"
                label="occupationName"
                track-by="occupationId"
				:options="occupationoptions"
                :multiple="false"
                :close-on-select="true"
                :preserve-search="true"
                :searchable="true"
				v-validate="'required'"
              data-vv-name="occupation"
              data-vv-value-path="occupation"
            />
            <div v-show="errors.has('occupation')" class="error">{{ errors.first('occupation') }}</div>
          </div>
             

            <div class="col-md-12 form-group">
              <h5 class="field-label">Employer / Organization</h5>
              <input
                type="text"
                class="form-control"
				maxlength="500"
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
			  v-validate="{ required: true, max: 14 |'numeric' }"
              name="annual-income"
              type="number"
              class="form-control"
              id="annual-income"
              min="1"
              placeholder="Enter your annual income"
              data-vv-as="field" 
              v-model="incomeValue"
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
export default {
  data() {
    return {
      activeTab: this.$store.state.activeTab,
      occupationoptions: [],
      educationLevelValue:[],
      educationleveloptions: [],
      degreeValue:[],
      degreeoptions: [],
      currencyoptions: [],
      incomeValue: null,
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
          employer :  '' 
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

  watch: {

    degreeValue(newValues) {
      this.data.degree = newValues;
    }, 
    incomeValue(newValues) {
     let incomeValue = Math.abs(parseInt(newValues))
     if (incomeValue != newValues){
       this.incomeValue = incomeValue
     }
      this.data.income = Math.abs(parseInt(newValues))
    }
  },
 
  methods: {

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
    onNextButtonPress: function() {

      this.$validator.validateAll().then(result => {
        if (result) {
          this.$store.commit ('setSignupEducationInfo', this.data)
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
  }
};
</script>