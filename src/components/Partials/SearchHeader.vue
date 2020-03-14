<template>
  <div>
    <!-- Menu & Header -->
    <header class="navbar-fixed-top">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-wrapper">
            <div class="navbar-header">
              <a class="navbar-brand" href="/">
                <img src="/images/logo.png">
              </a>
            </div>

            <!-- Header After Login -->
            <div v-if="loggedIn" class="nav-links">
              <ul class="nav-quicklinks">
                <li>
                  <router-link to="/quick-search" class="safasf">
                    <i class="material-icons">search</i>
                    Quick Search
                  </router-link>
                </li>
                <li>
                  <a href="tel:080 23386028">
                    <i class="material-icons">phone</i> 080 23386028
                  </a>
                </li>
              </ul>
              <div class="dropdown">
                <a class="dropbtn profile-btn" href="#">
                  <img :src="'https://www.ssvmatrimony.org/images/' + myProfileData.image">
                  <span class="noti-num" v-show="false">2</span>
                  <!-- TODO - v-if  -->
                  {{ myProfileData.userName }}
                </a>
                <div class="dropdown-content">
                  <div class="quick-info">
                    <div v-if="myProfileData.community.communityType">
                      <div class="left-side">Community</div>
                      <div class="right-side">{{ myProfileData.community.communityType }}</div>
                    </div>

                    <div v-if="myProfileData.membershipDaysLeft">
                      <div class="left-side">Membership</div>
                      <div
                        class="right-side"
                        v-if="myProfileData.membershipDaysLeft >= 0"
                      >{{ myProfileData.membershipDaysLeft }} days left</div>
                      <div
                        class="right-side expired"
                        v-if="myProfileData.membershipDaysLeft < 0"
                      >Expired</div>
                    </div>

                    <div v-if="myProfileData.packageDaysLeft">
                      <div class="left-side">Package</div>
                      <div class="right-side">{{ myProfileData.packageDaysLeft }} days</div>
                    </div>

                    <div v-if="myProfileData.contactsLeft">
                      <div class="left-side">Contacts Left</div>
                      <div class="right-side">{{ myProfileData.contactsLeft }}</div>
                    </div>
                  </div>
                  <a href="#" v-show="false">
                    <img src="/images/icons/bell.png"> Notification
                    <span class="notification-num">2</span>
                  </a>
                  <a @click="viewProfile(myProfileData.memberId)">
                    <img src="/images/icons/phone.png"> View Profile
                  </a>
                  <a @click="$router.push('/change-password')">
                    <img src="/images/icons/phone.png"> Change Password
                  </a>
                  <a @click="logout">
                    <img src="/images/icons/close.png"> Log Out
                  </a>
                </div>
              </div>

              <button
                type="button"
                class="navbar-toggle"
                data-toggle="collapse"
                data-target="#myNavbar"
              >
                <span class="icon-bar"/>
                <span class="icon-bar"/>
                <span class="icon-bar"/>
              </button>
            </div>
            <!-- Nav Links  -->
            <div class="clearfix"/>
          </div>
        </div>
      </nav>

      <!-- Menu After Login Starts -->
      <div class="collapse navbar-collapse" id="myNavbar">
        <div class="container">
          <ul class="nav navbar-nav">
            <li>
              <a @click="$router.push('/')">
                <i class="material-icons">chevron_left</i> Home
              </a>
            </li>
            <li @click="active = '/basic-search'" :class="{active:active === '/basic-search'}">
              <router-link to="/basic-search">Basic Search</router-link>
            </li>

            <li
              @click="active = '/advanced-search'"
              :class="{active:active === '/advanced-search'}"
            >
              <router-link to="/advanced-search">Advanced Search</router-link>
            </li>

            <li @click="active = '/keyword-search'" :class="{active:active === '/keyword-search'}">
              <router-link to="/keyword-search">Keyword Search</router-link>
            </li>
          </ul>
        </div>
      </div>
      <!-- Menu After Login Ends -->
    </header>

    <!-- Modal -->
    <div v-if="!loggedIn">
      <div v-if="showModal" class="login-modal">
        <transition name="modal">
          <div class="modal-mask">
            <div class="modal-dialog">
              <!-- Modal content-->
              <div class="modal-content">
                <div class="modal-wrapper">
                  <div class="modal-header">
                    <button type="button" class="close" @click="showModal=false">&times;</button>
                  </div>

                  <div class="modal-body">
                    <transition name="fade" mode="out-in">
                      <div v-if="show" key="1" class="signin-form">
                        <h4>Sign In</h4>
                        <form action="#" @submit.prevent="login">
                          <div class="form-group">
                            <label for="your-username">Member ID or username address</label>
                            <input
                              type="username"
                              class="form-control"
                              placeholder="Enter your id or username"
                              v-model="username"
                            >
                          </div>
                          <div class="form-group">
                            <label for="your-password">Password:</label>
                            <input
                              type="password"
                              class="form-control"
                              placeholder="Password"
                              v-model="password"
                            >
                          </div>
                          <div class="sign-in-btn">
                            <button type="submit" class="btn btn-red">Sign In</button>
                            <span>
                              <a @click="show = !show" class="forgot-password">Forgot Password ?</a>
                            </span>
                          </div>
                        </form>
                      </div>

                      <div v-else key="2" class="password-forgot">
                        <h4>Forgot password</h4>
                        <form>
                          <div class="form-group">
                            <label for="your-email">Memeber ID or email address</label>
                            <input
                              type="email"
                              class="form-control"
                              id="your-email"
                              placeholder="Enter your id or email"
                            >
                          </div>

                          <div class="sign-in-btn">
                            <button type="submit" class="btn btn-red">Send</button>
                            <span>
                              <a @click="show = !show" class="remember-password">Remember Password!</a>
                            </span>
                          </div>
                        </form>
                      </div>
                    </transition>
                  </div>

                  <div class="modal-footer">
                    <p>New to SSV Matrimony?</p>
                    <a href="#" class="sign-up-link">Sign Up Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <!-- Modal Ends -->
    <transition
      name="router-animation"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      mode="out-in"
    >
      <router-view/>
    </transition>
    <loading :active.sync="isLoading" :is-full-page="true"></loading>
  </div>
</template>


<script>
import Loading from "vue-loading-overlay";

/* global */
export default {
  data() {
    return {
      username: "",
      password: "",
      serverError: "",
      // successMessage: this.dataSuccessMessage,
      loading: false,
      showModal: false,
      show: true,
      active: null
    };
  },
  components: {
    Loading
  },

  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
    myProfileData: function() {
      return this.$store.getters.getMyData;
    },
    isLoading(){
      return this.$store.state.isLoading;
    },
  },

  methods: {
    login() {
      this.loading = true;
      this.$store
        .dispatch("retrieveToken", {
          username: this.username,
          password: this.password
        })
        .then(() => {
          this.loading = false;
          this.$router.push({
            name: "dashboard"
          });
        })
        .catch(error => {
          this.loading = false;
          this.serverError = error.response.data;
          this.password = "";
          this.successMessage = "";
        });
    },

    logout() {
      this.$store.dispatch("destroyToken").then(() => {
        this.$router.push("/");
        this.isLoggedIn = false;
      });
    }
  },
  mounted() {
    this.active = this.$route.path;
  }
};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.nav-quicklinks li a {
  color: #ff0000 !important;
}
</style>