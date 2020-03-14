<template>

  <div>

    <div class="tabs">
      <a :class="[ getActiveTab === 1 ? 'active' : '' ]">Tab 1</a>
      <a :class="[ getActiveTab === 2 ? 'active' : '' ]">Tab 2</a>
      <a :class="[ getActiveTab === 3 ? 'active' : '' ]">Tab 3</a>
    </div>

    <div class="content">
      <div v-if="getActiveTab === 1" class="tabcontent">
        Is this the real life? Is this just fantasy?
      </div>
      <div v-if="getActiveTab === 2" class="tabcontent">
        Caught in a landslide, no escape from reality
      </div>
      <div v-if="getActiveTab === 3" class="tabcontent">
        Open your eyes, look up to the skies and see
      </div>
    </div>

    <div class="bottom-buttons">
      <a href="#" class="btn blank-btn" @click="onBackButtonPress">Back</a>
      <button class="btn btn-red" @click="onNextButtonPress">Next</button>
      <a href="#" class="btn blank-btn">Cancel</a>
    </div>

  </div>
</template>

<script>
import moment from "moment"



export default {
 data: function () {
    return {
      activeTab: this.$store.state.activeTab
    }
  },

 computed: {

    getActiveTab: function(){
      return  this.$store.getters.getActiveTab
    },

  },
  
  watch: {
    getActiveTab: function(){
      this.activeTab = this.$store.state.activeTab;
      },
    },

  methods: {
    onNextButtonPress: function(event) {  
      this.$store.commit ('setActiveTab', (this.activeTab + 1));
    },
    onBackButtonPress: function(event) {  
      this.$store.commit ('setActiveTab', (this.activeTab - 1));
    }  

  }

}
</script>

<style>

/* Style the tabs */
.tabs {
    overflow: hidden;
    margin-left: 20px;
    margin-bottom: -2px; 
}

.tabs ul {
    list-style-type: none;
    margin-left: 20px;
}

.tabs a{
    float: left;
    cursor: pointer;
    padding: 12px 24px;
    transition: background-color 0.2s;
    border: 1px solid #ccc;
    border-right: none;
    background-color: #f1f1f1;
    border-radius: 10px 10px 0 0;
    font-weight: bold;
}
.tabs a:last-child { 
    border-right: 1px solid #ccc;
}

/* Change background color of tabs on hover */
.tabs a:hover {
    background-color: #aaa;
    color: #fff;
}

/* Styling for active tab */
.tabs a.active {
    background-color: #fff;
    color: #484848;
    border-bottom: 2px solid #fff;
    cursor: default;
}

/* Style the tab content */
.tabcontent {
    padding: 30px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 3px 3px 6px #e1e1e1
}

</style>