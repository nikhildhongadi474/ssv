<template>
  <div>
    <!-- Header Start -->
    <HeaderSection />
    <!-- Header Ends -->

    <div class="inner-content">
      <div class="container">
        <div class="col-md-12 col-sm-12 top-title">
          <h3>
            <i class="large material-icons">people</i> Reset Password
          </h3>
        </div>

        <div class="col-md-6 col-sm-7">
          <form class="reset-password" action="#" @submit.prevent="resetPassword">
            <p>Please choose a new password .</p>

            <div class="form-group">
              <!-- <label for="your-password">Reset Password:</label> -->
              <input 
                v-validate="'required'"
                name="reset password" 
                v-model="newPassword" 
                type="password" 
                class="form-control" 
                placeholder="Type New Password"
              >
              <div class="error">{{ errors.first('reset password') }}</div>
            </div>

            <div class="form-group">
              <!-- <label for="your-password">Confirm Password:</label> -->
              <input 
                v-validate="'required'"
                name="confirm password" 
                v-model="confirmPassword" 
                type="password" 
                class="form-control" 
                placeholder="Confirm New Password"
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
  name: "ResetPassword",
  data(){
    return {
      token:"",
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
    
    resetPassword() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.loading = true;
          
          this.$store
            .dispatch("resetPasswordReq", {
                token:this.token,
                newPassword:this.newPassword
              }
            )
            .then(response => {
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