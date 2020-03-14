<template>
  <div>
    <!-- Header Start -->
    <HeaderSection />
    <!-- Header Ends -->
    <div class="inner-content">
      <div class="container">
        <div class="col-md-12 col-sm-12 top-title">
          <h3>
            <i class="large material-icons">people</i> Change Password
          </h3>
        </div>

        <div class="col-md-6 col-sm-7">
          <form class="reset-password" action="#" @submit.prevent="changePassword">

            <p>Please enter your current password</p>
            <div class="form-group">
              <!-- <label for="your-password">Current Password:</label> -->
              <input 
                v-validate="'required'"
                name="current password"
                v-model="currentPassword" 
                type="password" 
                class="form-control" 
                placeholder="Enter Current Password"

              >
              <div class="error">{{ errors.first('current password') }}</div>
            </div>

            <p>Please enter a new password</p>

            <div class="form-group">
              <!-- <label for="your-password">New Password:</label> -->
              <input 
                v-validate="'required'"
                name="new password"
                v-model="newPassword" 
                type="password" 
                class="form-control" 
                placeholder="Enter New Password"
                ref="password"
              >
              <div class="error">{{ errors.first('new password') }}</div>
            </div>

            <div class="form-group">
              <!-- <label for="your-password">Confirm Password:</label> -->
              <input 
                name="confirm password"
                v-model="confirmPassword" 
                type="password" 
                class="form-control" 
                placeholder="Please Confirm Password"
                v-validate="'required|confirmed:password'"
              >
              <div class="error">{{ errors.first('confirm password') }}</div>
            </div>



            <div class="sign-in-btn">
              <button type="submit" class="btn btn-red">Change Password</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Footer Section Start-->
    <FooterSection />
    <!-- Footer Section Ends-->
  </div>
</template>

<script>
import Header from "@/components/Partials/Header.vue";
import Footer from "@/components/Partials/Footer.vue";
export default {
  name:"ChangePassword",

  data(){
    return {
      currentPassword: "",
      newPassword:"",
      confirmPassword:"",
      serverError: "",
    }
  },

  computed: {
    getMyUserName(){
      return this.$store.getters.getMyUserName
    },

  },

  mounted() {},
  methods: {
    matchPassword(){
      return this.password == this.confirmPassword ? true : false
    },  
    
    changePassword() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.loading = true;
          
          this.$store
            .dispatch("changePasswordReq", {
                userName: this.getMyUserName,
                currentPassword:this.currentPassword,
                newPassword:this.newPassword,
                confirmPassword:this.confirmPassword
              }
            )
            .then(() => {
              this.loading = false;
              
              this.$router.push({
                name: "ServerMessage"
              });
            });

          // .catch(error => {
          //   // TODO Handle this case with some animation
          //   this.loading = false;
          //   this.serverError = error;
          //   this.password = "";
          //   this.successMessage = "";
          //   this.isLoggedIn = false;
          // });
        }
        //alert('Correct the errors!');
      });
    },
  },
  components: {
    "HeaderSection": Header,
    "FooterSection": Footer
  }
};
</script>