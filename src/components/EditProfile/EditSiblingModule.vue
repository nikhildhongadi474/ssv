<template>
  <div>
    <div v-for="(line, index) in siblingData" :key="index" class="row">
      <div class="col-md-11 col-sm-11 p-0">
        <!-- Gender -->
        <div class="col-md-2 form-group">
          <select v-model="line.gender">
            <option disabled :value="null">Select gender</option>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
            <option value="NONE">None</option>
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
            <option :value="null" disabled>Select relation</option>
            <option value="YOUNGER">Younger</option>
            <option value="ELDER">Elder</option>
          </select>
        </div>
      </div>
      <div class="col-md-1 col-sm-1 p-0">
        <div class="col-md-6 form-group">
          <button class="btn btn-red sibling" v-if="index + 1 === siblingData.length" @click="addLine">
            <i class="large material-icons">add</i>
          </button>
        </div>
        <div class="col-md-6 form-group">
          <button class="btn btn-red sibling" @click="removeLine(index)">
            <i class="large material-icons">remove</i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
//plugins
import Multiselect from "vue-multiselect";
import { mapGetters, mapActions } from "vuex";

import MaritalStatusData from "../../assets/json/info/marital-status.json";
import OccupationData from "../../assets/json/info/occupation.json";

export default {
  name: "SiblingModule",

  components: {
    Multiselect
  },

  data() {
    return {
      blockRemoval: true,
      saveSiblingsDataFlag: false,

      occupationoptions: [],
      maritaloptions: [],

      MaritalStatusData: MaritalStatusData,
      OccupationData: OccupationData
    };
  },
  computed: {
    ...mapGetters("Profile", ["siblingData"]),
  },

  watch: {
    siblingData() {
      this.blockRemoval = this.siblingData.length <= 1;
    },

    // getSaveFamilyInfo() {
    //   this.saveSiblingsDataFlag = this.$store.state.saveFamilyInfo;
    //   if (this.saveSiblingsDataFlag) {
    //     this.$store.commit("setSignupSiblingInfo", this.siblingData);
    //     this.$emit("siblingInfoSaved");
    //   }
    // }
  },

  methods: {
    ...mapActions("Profile", ["saveFamilyInfo"]),
    addLine() {
      let checkEmptyLines = [];
      checkEmptyLines = this.siblingData.filter(line => line.gender === null);
      if (checkEmptyLines.length >= 1 && this.siblingData.length > 0) return;

      this.siblingData.push({
        gender: null,
        siblingRelation: null,
        maritalStatus: null,
        occupation: null
      });
    },

    removeLine(lineId) {
      if (!this.blockRemoval) this.siblingData.splice(lineId, 1);
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
    }
  },

  mounted() {
    this.getMaritalData();
    this.getOccupationData();
  },
  created() {
    // this.addLine();
  }
};
</script>