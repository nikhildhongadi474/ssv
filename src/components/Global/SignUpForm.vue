<template>
  <div class="banner-form">
    <div class="form-block">
      <span class="form-title">Sign Up to start now</span>

      <form @submit.prevent="submitForm" novalidate>
        <div class="row">
          <div class="col-md-2 form-group">
            <label for="name">Your Name</label>
            <input
              type="text"
              name="name"
              v-validate="{ required: true }"
              class="form-control"
              placeholder="Enter your name"
              v-model="signUpInitialData.name"
              required
            >
            <div class="error">{{ errors.first('name') }}</div>
          </div>

          <div class="col-md-2 form-group">
            <label for="lookingFor">Looking For</label>
            <select
              class
              name="looking-for"
              v-model="signUpInitialData.lookingFor"
              v-validate="{ required: true }"
            >
              <option>Select</option>
              <option>Bride</option>
              <option>Groom</option>
            </select>
            <div class="error">{{ errors.first('looking-for') }}</div>
          </div>

          <div class="col-md-2 form-group">
            <label for="email">Email Address</label>
            <input
              type="email"
              name="email"
              v-validate="{ required: true }"
              class="form-control"
              required
              placeholder="Enter email"
              v-model="signUpInitialData.email"
            >
            <div class="error">{{ errors.first('email') }}</div>
          </div>

          <div class="col-md-2 form-group">
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              v-validate="{ required: true }"
              class="form-control"
              required
              placeholder="Enter password"
              v-model="signUpInitialData.password"
            >
            <div class="error">{{ errors.first('password') }}</div>
          </div>
          <div class="col-md-1 top-22" >
            <button type="submit" class="btn btn-red">Sign Up</button>
          </div>
        </div>
      </form>
    </div>
  </div>
  <!-- Banner Form Ends -->
</template>

<script>
export default {
  name: "SignUpForm",
  data() {
    return {
      signUpInitialData: {
        name: "",
        email: "",
        lookingFor: "",
        password: ""
      }
    };
  },
  components: {},

  computed: {},

  created() {},
  methods: {
    submitForm() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.$router.push({name: 'signUp', params: { signUpInitialData: this.signUpInitialData }})
        }
      });
    }
  }
};
</script>