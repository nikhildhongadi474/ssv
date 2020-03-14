<template>
  <div>

    <div v-for="(line, index) in lines" :key="index" class="row">
      <div class="col-md-11 col-sm-11 p-0">
        <!-- Gender -->
        <div class="col-md-2 form-group">
          <select v-model="line.gender">
            <option disabled :value="null">Select gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>None</option>
          </select>
        </div>        

        <div class="col-md-4 col-sm-4 form-group">
          <!-- <h5 class="field-label">Marital Status</h5> -->
          <Multiselect
            v-model="line.maritalStatus"
            :options="maritaloptions"
            placeholder="Marital Status"
            label="msName"
            track-by="maritalStatusId"
            :multiple="false"
            :close-on-select="true"
            :preserve-search="true"
            :searchable="true"
          />
        </div>

        <div class="col-md-4 col-sm-4 form-group">
          <!-- <h5 class="field-label">Occupation</h5> -->
          <Multiselect
            v-model="line.occupation"
            :options="occupationoptions"
            placeholder="Occupation"
            label="occupationName"
            track-by="occupationId"
            :multiple="false"
            :close-on-select="true"
            :preserve-search="true"
            :searchable="true"
          />
        </div>

        <div class="col-md-2 form-group">
          <select v-model="line.siblingRelation">
            <option :value="null" disabled >Select relation</option>
            <option>Younger</option>
            <option>Elder</option>
          </select>
        </div> 
      </div>

      <div class="col-md-1 col-sm-1 p-0">  
        <div class="col-md-1 form-group">
          <button class="btn btn-red sibling" v-if="index + 1 === lines.length" @click="addLine"><i class="large material-icons">add</i></button>
        </div>
        <div class="col-md-1 form-group">
          <button class="btn btn-red sibling" @click="removeLine(index)"><i class="large material-icons">remove</i></button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
//plugins
import Multiselect from "vue-multiselect";

import MaritalStatusData from "../../assets/json/info/marital-status.json";
import OccupationData from "../../assets/json/info/occupation.json";

export default {
  name: "SiblingModule",

  components: {
    Multiselect
  },  

  data() {
    return {
      lines: [],
      blockRemoval: true,
      saveSiblingsDataFlag: false,

      occupationoptions: [],
      maritaloptions: [],

      MaritalStatusData: MaritalStatusData, 
      OccupationData: OccupationData, 
    
    }
  },

  computed: {
    getSaveFamilyInfo(){
      return  this.$store.getters.getSaveFamilyInfo
    },    
  },

  watch: {
    lines (){
      this.blockRemoval = this.lines.length <= 1
    },

    getSaveFamilyInfo(){
      this.saveSiblingsDataFlag = this.$store.state.saveFamilyInfo
      if (this.saveSiblingsDataFlag){
        this.$store.commit ('setSignupSiblingInfo', this.lines)
        this.$emit('siblingInfoSaved')
      }
    }
  },


  methods: {

    addLine () {
      let checkEmptyLines = this.lines.filter(line => line.gender === null)

      if (checkEmptyLines.length >= 1 && this.lines.length > 0) return

      this.lines.push({
        gender: '',  
        siblingRelation: '',
        maritalStatus: '', 
        occupation: ''
      })
    },

    removeLine (lineId) {
      if (!this.blockRemoval) this.lines.splice(lineId, 1)
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
  },

  mounted() {
    this.getMaritalData();
    this.getOccupationData();
    this.addLine();
  },  

}
</script>