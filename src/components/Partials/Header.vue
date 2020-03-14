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

            <!-- Header Before Login -->
            <div v-if="!loggedIn" class="nav-links">
              <ul class="nav-quicklinks">
                <li>
                  <a href="#">
                    <i class="material-icons">phone</i> 080 23386028
                  </a>
                </li>
                <li>
                  <button type="button" @click="showModal = true">
                    <i class="material-icons">perm_identity</i> Login
                  </button>
                </li>
              </ul>

              <!-- Right Slide Menu Start -->
              <div class="navigator">
                <div class="nav-wrapper">
                  <ul class="nav">
                    <li class="nav_tab">
                      <router-link to="/upgrade-membership">
                        <i class="material-icons">card_giftcard</i> Upgrade
                      </router-link>
                    </li>
                    <li class="nav_tab">
                      <a href="tel:080 23386028">
                        <i class="material-icons">local_phone</i> 080 23386028
                      </a>
                    </li>
                    <li class="nav_tab">
                      <a href="#">
                        <i class="material-icons">chrome_reader_mode</i> Plans
                      </a>
                    </li>
                    <li class="nav_tab">
                      <router-link to="/about-us">
                        <i class="material-icons">people</i> About Us
                      </router-link>
                    </li>
                    <li class="nav_tab">
                      <router-link to="/help">
                        <i class="material-icons">info</i> Help
                      </router-link>
                    </li>
                  </ul>

                  <div class="below-menu">
                    <p>For feedback, write to us at</p>
                    <p class="feedback">
                      <a
                        href="mailto:feedback@ssvmatrimontny.com"
                        target="_top"
                      >feedback@ssvmatrimontny.com</a>
                    </p>

                    <h6>Follow Us</h6>
                    <ul class="social-links">
                      <li>
                        <a href="#" target="_blank">
                          <i class="fa fa-facebook-official" aria-hidden="true"/>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i class="fa fa-twitter-square" aria-hidden="true"/>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i class="fa fa-google-plus-square" aria-hidden="true"/>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- Right Slide Menu Ends -->

              <div class="menu-icon">
                <div class="line_one"/>
                <div class="line_two"/>
                <div class="line_three"/>
                <p class="menu-text">Menu</p>
              </div>
            </div>

            <!-- Header After Login -->
            <div v-if="loggedIn" class="nav-links">
              <ul class="nav-quicklinks" v-if="!membershipExpired">
                <li>
                  <router-link to="/quick-search">
                    <i class="material-icons">search</i> Quick Search
                  </router-link>
                </li>
                <li>
                  <a href="tel:08023386028">
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
      <div v-if="loggedIn" class="collapse navbar-collapse" id="myNavbar">
        <div class="container">
          <ul class="nav navbar-nav">
            <li
              @click="active = '/dashboard'"
              :class="{active:active === '/dashboard'}"
              v-if="!membershipExpired"
            >
              <router-link to="/dashboard">Home</router-link>
            </li>

            <li class="dropdown" v-if="!membershipExpired">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                Matches
                <b class="caret"/>
              </a>
              <ul class="dropdown-menu">
                <li @click="active = '/matches'" :class="{active:active === '/matches'}">
                  <router-link to="/matches">Matches</router-link>
                </li>

                <li
                  @click="active = '/recently-joined'"
                  :class="{active:active === '/recently-joined'}"
                >
                  <router-link to="/recently-joined">Recently Joined</router-link>
                </li>
              </ul>
            </li>
            <li
              @click="active = '/shortlisted'"
              :class="{active:active === '/shortlisted'}"
              v-if="!membershipExpired"
            >
              <router-link to="/shortlisted">Shortlisted</router-link>
            </li>

            <li v-if="!membershipExpired">
              <a @click="$router.push('/basic-search')">Search</a>
            </li>

            <li
              @click="active = '/upgrade-membership'"
              :class="{active:active === '/upgrade-membership'}"
            >
              <router-link to="/upgrade-membership">Upgrade Membership</router-link>
            </li>

            <li @click="active = '/help'" :class="{active:active === '/help'}">
              <router-link to="/help">Help</router-link>
            </li>
          </ul>
        </div>
      </div>
      <!-- Menu After Login Ends -->
    </header>

    <!-- Modal -->
    <div v-if="!loggedIn">
      <div v-if="showModal" class="login-modal" @keyup.esc="showModal=false">
        <Transition name="modal">
          <div class="modal-mask">
            <div class="modal-dialog">
              <!-- Modal content-->
              <!-- TODO / Forgotton password modal reopens when clicking login-->
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
                              v-validate="'required'"
                              name="email"
                              type="username"
                              class="form-control"
                              placeholder="Enter your id or username"
                              v-model="username"
                            >
                            <div class="error">{{ errors.first('email') }}</div>
                          </div>
                          <div class="form-group">
                            <label for="your-password">Password:</label>
                            <input
                              v-validate="'required'"
                              name="password"
                              type="password"
                              class="form-control"
                              placeholder="Password"
                              v-model="password"
                            >
                            <div class="error">{{ errors.first('password') }}</div>
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
                        <form action="#" @submit.prevent="forgetPassword">
                          <div class="form-group">
                            <label for="your-email">Member ID or email address</label>
                            <input
                              type="email"
                              class="form-control"
                              id="your-email"
                              placeholder="Enter your id or email"
                              v-model="username"
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
                    <a @click="$router.push('/sign-up')" class="sign-up-link">Sign Up Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
    <!-- Modal Ends -->

    <transition
      name="router-anismation"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      mode="out-in"
    >
      <router-view/>
    </transition>
    <loading
      :active.sync="isLoading"
      :is-full-page="true"
    ></loading>
  </div>
</template>


<script>
/* global $ */
import Loading from "vue-loading-overlay";

export default {
  name: "Header",

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
    isLoading(){
      return this.$store.state.isLoading;
    },

    membershipExpired() {
      return this.$store.getters.getIfMyMembershipExpired;
    },

    onEmailSentNotification() {
      return this.$store.getters.onEmailSentNotification;
    },

    myProfileData: function() {
      return this.$store.getters.getMyData;
    }
  },

  methods: {
    //view profile call
    viewProfile(memberId) {
      this.$router.push("/profile/" + memberId);
    },

    login() {
      this.$validator.validateAll().then(result => {
        if (result) {
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

    forgetPassword() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.loading = true;
          this.$store
            .dispatch("sendForgetPasswordReq", this.username)
            .then(() => {
              this.loading = false;
              this.showModal = false;
              this.show = true;
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

    logout() {
      this.$store.dispatch("destroyToken").then(() => {
        this.$router.push("/");
        this.isLoggedIn = false;
      });
    },
    onEsc() {
      if (this.visible && this.closeOnEsc) {
        this.hide();
      }
    }
  },
  mounted() {
    $(".menu-icon").click(function() {
      if ($(".navigator").css("right") == "-300px") {
        $(".navigator").animate(
          {
            right: "0px"
          },
          350
        );
        $(".menu-text")
          .empty()
          .text("Menu");
        //$('.menu-text').toggleClass("on");
      } else {
        $(".navigator").animate(
          {
            right: "-300px"
          },
          350
        );
        $(".menu-text")
          .empty()
          .text("Menu");
      }
    });
    $(document).click(function() {
      if (
        $(".navigator").css("right") == "0px" &&
        $(".menu-icon").hasClass("on")
      ) {
        $(".navigator").animate(
          {
            right: "-300px"
          },
          350
        );
        $(".menu-text")
          .empty()
          .text("Menu");
        $(".menu-icon").toggleClass("on");
      }
    });
    $(".menu-icon").click(function() {
      $(this).toggleClass("on");
    }); // animation = -> x
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
</style>
