<template>
  <ul class="profile-connect">
    <!-- TODO check if paid memnberships, then enable  -->
    <li class="call-me">
      <a
        href="javascript:void(0);"
        target="_blank"
        v-if="ifConnectionAllowed"
        @click="getPhoneNumber"
      >
        <i class="fa fa-phone" aria-hidden="true"/>
      </a>
      <a href="javascript:void(0);" v-tooltip.top-center="'Please Purchase packages to contact'" v-else>
        <i class="fa fa-phone" aria-hidden="true"/>
      </a>
    </li>
    <li class="fb-connect">
      <a href="javascript:void(0);" v-if="ifConnectionAllowed" target="_blank" @click="getFblink">
        <i class="fa fa-facebook" aria-hidden="true"/>
      </a>
      <a href="javascript:void(0);" v-tooltip.top-center="'Please Purchase packages to contact'" v-else>
        <i class="fa fa-facebook" aria-hidden="true"/>
      </a>
    </li>
    <li class="email-me">
      <a href="javascript:void(0);" v-if="ifConnectionAllowed" target="_blank" @click="getEmail">
        <i class="fa fa-envelope" aria-hidden="true"/>
      </a>
      <a href="javascript:void(0);" v-tooltip.top-center="'Please Purchase packages to contact'" v-else>
        <i class="fa fa-envelope" aria-hidden="true"/>
      </a>
    </li>
    <a :href="'mailto:'+emailInfo" v-if="ifConnectionAllowed" ref="emailInfo" target="_blank" v-show="false">email</a>
    <a :href="'tel:'+phoneInfo" ref="phoneInfo" target="_blank" v-show="false">telephone</a>
    <a :href="fblinkInfo" ref="fblinkInfo" target="_blank" v-show="false">telephone</a>
  </ul>
</template>
 
<script>
import { mapGetters, mapActions } from "vuex";
import Swal from "sweetalert2";

export default {
  name: "SocialConnect",

  props: {
    profile: {
      default: () => ({
        id: null,
        reqFrom: null
      })
    }
  },

  data() {
    return {};
  },

  computed: {
    ...mapGetters("SocialConnects", ["fblinkInfo", "emailInfo", "phoneInfo"]),
    ifConnectionAllowed() {
      // if membership and packages have not expired, allow connections
      return (
        this.$store.getters.getIfMyContactsLeft &&
        !this.$store.getters.getIfMyPackageExpired
      );
    }
  },

  mounted() {},
  watch: {},

  methods: {
    ...mapActions("SocialConnects", [
      "fetchFacebookLink",
      "fetchEmail",
      "fetchPhoneInfo"
    ]),
    getPhoneNumber() {
      this.fetchPhoneInfo(this.profile.memberId).then((response) => {
        let htmlData = "Primary Number: "+response.primaryPhone+"<br>";
        if (response.alternativePhone){
          htmlData += "Alternate Number "+response.alternativePhone;
        }
         
        Swal.fire({
        title: "Contact Info",
        html: htmlData,
        type: "info",
        showCancelButton: false,
        confirmButtonText: "Ok",
      });
        // this.$refs.phoneInfo.click();
      });
    },
    getEmail() {
      this.fetchEmail(this.profile.memberId).then((response) => {
        if (response) {
          let htmlData = "Email Address: " + response.emailId + "<br>";
          Swal.fire({
            title: "Email Info",
            html: htmlData,
            type: "info",
            showCancelButton: false,
            confirmButtonText: "Ok"
          });
        }
      });
    },
    getFblink() {
      this.fetchFacebookLink(this.profile.memberId).then((response) => {
        if (response) {
          let htmlData = "Facebook Link: " + response.facebook + "<br>";
          Swal.fire({
            title: "Facebook Info",
            html: htmlData,
            type: "info",
            showCancelButton: false,
            confirmButtonText: "Ok"
          });
        }
      });
    }
  }
};
</script>

<style>
</style>
