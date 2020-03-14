import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Profile from './modules/Profile/profile'
import Membership from './modules/Membership/index'
import SocialConnects from './modules/SocialConnects/index'


Vue.use(Vuex)
axios.defaults.baseURL = 'http://18.216.27.3:8080/api/member' //TODO - update the correct url
//axios.defaults.baseURL = process.env.VUE_APP_SSV_MEMBER_API
axios.defaults.timeout = 0

export const store = new Vuex.Store({
  modules: {
    Profile,
    Membership,
    SocialConnects
  },
  state: {
    token: localStorage.getItem('access_token') || null,
    myData: JSON.parse(localStorage.getItem('myData')) || [],
    myPartnerPref: JSON.parse(localStorage.getItem('myPartnerPref')) || [],
    totalRecentMatches: 0,
    recentMatches: [],
    totalRecentlyJoined: 0,
    recentlyJoined: [],
    shortlistedProfiles: [],
    totalShortlistedProfiles: 0,
    searchReq: [],
    searchedProfiles: [],
    totalSearchResults: 0,
    memberData: [],
    paidMembership: false, // enable property
    serverMessage: [],

    // signup state
    activeTab: 1,
    signupAboutdata: [],
    signupPersonalInfo: [],
    signupFamilyInfo: [],
    signupSiblingInfo: [],
    saveFamilyInfo: false,
    signupEducationInfo: [],
    signupPartnerInfo: [],

    // edit profile 
    editTab: 1,
    editAboutdata: [],
    editPersonalInfo: [],
    editFamilyInfo: [],
    editSiblingInfo: [],
    saveEditFamilyInfo: false,
    editEducationInfo: [],
    editPartnerInfo: [],
    lightBoxImages: [],
    isLoading: false
  },

  getters: {
    loggedIn(state) {
      return state.token !== null
    },
    getToken(state) {
      return state.token
    },

    getMyData(state) {
      return state.myData
    },

    getMyMemberId(state) {
      return state.myData.memberId
    },

    getIfMyMembershipExpired(state) {
      return (state.myData.membershipDaysLeft <= 0)
    },

    getIfMyPackageExpired(state) {
      return (state.myData.packageDaysLeft <= 0)
    },

    getIfMyContactsLeft(state) {
      return (state.myData.contactsLeft > 0)
    },

    getMyUserName(state) {
      return state.myData.userName
    },

    getMyPartnerPref(state) {
      return state.myPartnerPref
    },

    getTotalRecentMatches(state) {
      return state.totalRecentMatches
    },

    getRecentMatches(state) {
      return state.recentMatches
    },

    getRMProfileById: (state) => (id) => {
      return state.recentMatches.find(recentMatches => recentMatches.memberId === id)
    },

    getTotalRecentlyJoined(state) {
      return state.totalRecentlyJoined
    },

    getRecentlyJoined(state) {
      return state.recentlyJoined
    },

    getRJProfileById: (state) => (id) => {
      return state.recentlyJoined.find(recentlyJoined => recentlyJoined.memberId === id)
    },

    getTotalShortlistedProfiles(state) {
      return state.totalShortlistedProfiles
    },

    getShortlistedProfiles(state) {
      return state.shortlistedProfiles
    },

    getTotalSearchResults(state) {
      return state.totalSearchResults
    },

    getSearchedProfiles(state) {
      return state.searchedProfiles
    },

    getSearchedProfileById: (state) => (id) => {
      return state.searchedProfiles.find(searchedProfiles => searchedProfiles.memberId === id)
    },
    getSearchedReq(state) {
      return state.searchReq
    },

    getSLProfileById: (state) => (id) => {
      return state.shortlistedProfiles.find(shortlistedProfiles => shortlistedProfiles.memberId === id)
    },

    getMember(state) {
      return state.memberData
    },

    getServerMessage(state) {
      return state.serverMessage
    },

    getActiveTab(state) {
      return state.activeTab
    },

    getSaveFamilyInfo(state) {
      return state.saveFamilyInfo
    },

    // Edit profiles

    getEditTab(state) {
      return state.editTab
    },

    getEditAboutdata(state) {
      return state.editAboutdata
    },

    getEditPersonalInfo(state) {
      return state.editPersonalInfo
    },

    getEditFamilyInfo(state) {
      return state.editFamilyInfo
    },

    getEditSiblingInfo(state) {
      return state.editSiblingInfo
    },

    getSaveEditFamilyInfo(state) {
      return state.editSiblingInfo
    },

    getEditEducationInfo(state) {
      return state.editEducationInfo
    },
    getEditPartnerInfo(state) {
      return state.editPartnerInfo
    },
    getLightBoxImages(state) {
      return state.lightBoxImages
    },
  },

  mutations: {

    setMyData(state, myData) {
      state.myData = myData
    },

    setMyPartnerPref(state, myPartnerPref) {
      state.myPartnerPref = myPartnerPref
    },

    retrieveRecentMatches(state, {
      recentMatches,
      totalRecentMatches
    }) {
      state.recentMatches = recentMatches
      state.totalRecentMatches = totalRecentMatches

    },

    retrieveRecentlyJoined(state, {
      recentlyJoined,
      totalRecentlyJoined
    }) {
      state.recentlyJoined = recentlyJoined
      state.totalRecentlyJoined = totalRecentlyJoined
    },

    retrieveShortlistedProfiles(state, {
      shortlistedProfiles,
      totalShortlistedProfiles
    }) {
      state.shortlistedProfiles = shortlistedProfiles
      state.totalShortlistedProfiles = totalShortlistedProfiles

    },

    retrieveSearchResults(state, {
      searchReq,
      searchedProfiles,
      totalSearchResults
    }) {
      state.searchReq = searchReq
      state.searchedProfiles = searchedProfiles
      state.totalSearchResults = totalSearchResults

    },

    retrieveToken(state, token) {
      state.token = token
    },

    destroyToken(state) {
      state.token = null
    },

    setMember(state, memberData) {
      state.memberData = memberData
    },

    // signup

    setSignupAboutdata(state, dataReq) {
      state.signupAboutdata = dataReq
    },

    setSignupPersonalInfo(state, dataReq) {
      state.signupPersonalInfo = dataReq
    },

    setSignupFamilyInfo(state, dataReq) {
      state.signupFamilyInfo = dataReq
    },

    saveFamilyInfo(state, dataReq) {
      state.saveFamilyInfo = dataReq
    },

    setSignupSiblingInfo(state, dataReq) {
      state.signupSiblingInfo = dataReq
    },

    setSignupEducationInfo(state, dataReq) {
      state.signupEducationInfo = dataReq
    },

    setSignupPartnerInfo(state, dataReq) {
      state.signupPartnerInfo = dataReq
    },

    setServerMessage(state, serverMessage) {
      state.serverMessage = serverMessage
    },

    setActiveTab(state, activeTab) {
      state.activeTab = activeTab
    },

    //Edit profile
    setEditTab(state, activeTab) {
      state.editTab = activeTab
    },

    setEditAboutdata(state, dataReq) {
      state.editAboutdata = dataReq
    },

    setEditPersonalInfo(state, dataReq) {
      state.editPersonalInfo = dataReq
    },

    setEditFamilyInfo(state, dataReq) {
      state.editFamilyInfo = dataReq
    },

    setEditSiblingInfo(state, dataReq) {
      state.editSiblingInfo = dataReq
    },

    setSaveEditFamilyInfo(state, dataReq) {
      state.editSiblingInfo = dataReq
    },

    setEditEducationInfo(state, dataReq) {
      state.editEducationInfo = dataReq
    },

    setEditPartnerInfo(state, dataReq) {
      state.editPartnerInfo = dataReq
    },
    setUnsetAsShortlistedInRecentMatches(state, { profileId, set }) {
      return state.recentMatches.map((member) => {
        if (member.memberId == profileId) {
          if (member.contactActivity) {
            member.contactActivity.shortListed = set
          } else {
            member.contactActivity = {}
            member.contactActivity.shortListed = set
          }
        }
        return member
      })
    },
    setUnsetAsShortlistedInRecentJoined(state, { profileId, set }) {
      return state.recentlyJoined.map((member) => {
        if (member.memberId == profileId) {
          if (member.contactActivity) {
            member.contactActivity.shortListed = set
          } else {
            member.contactActivity = {}
            member.contactActivity.shortListed = set
          }
        }
        return member
      })
    },

    setLightBoxImages(state, dataReq) {
      let images = dataReq.map(image => {
        return {
          thumb: "https://www.ssvmatrimony.org/images" + image.thumbnail,
          src: "https://www.ssvmatrimony.org/images" + image.image,
        }
      })
      state.lightBoxImages = images
    },
    setLoading(state, value) {
      console.log(value)
      state.isLoading = value
    }

  },

  ///// Start of actions  //////////////////// 

  actions: {
    // Auth - get token from server
    retrieveToken(context, credentials) {

      context.commit('setLoading', true)
      var username = credentials.username;
      var password = credentials.password;
      var basicAuth = 'Basic ' + btoa(username + ':' + password);

      axios.defaults.headers.common['Authorization'] = basicAuth;
      axios.defaults.baseURL = 'http://18.216.27.3:8080/api' //TODO - update the correct url          
      axios.defaults.timeout = 0

      return new Promise((resolve, reject) => {

        axios.post('/member/login', {
          username: credentials.username,
          password: credentials.password,
        })
          .then(response => {
            context.commit('setLoading', false)
            if (response.data.status) {

              // Need to check if there is token coming or not
              if (response.data.component != null) {
                const token = response.data.component.token

                // set token in local storage
                localStorage.setItem('access_token', token)
                // set userdata in local storage
                localStorage.setItem('myData', JSON.stringify(response.data.component))

                // commit both dta and token
                context.commit('setMyData', response.data.component)
                context.commit('retrieveToken', token)
                resolve(response)
              } else {
                //TODO  clean the local store
                localStorage.removeItem('access_token');
                localStorage.removeItem('myData')
                context.commit('destroyToken')
                Vue.prototype.$toastE(response.data.message)

              }
            } else {
              // handle error 
              Vue.prototype.$toastE(response.data.message)
            }
          })
          .catch(error => {
            localStorage.removeItem('access_token');
            localStorage.removeItem('myData')
            context.commit('destroyToken')
            reject(error)
          })
      })
    },

    // Destory token when logging out
    destroyToken(context) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
      axios.defaults.baseURL = 'http://18.216.27.3:8080/api' //TODO - update the correct url          
      axios.defaults.timeout = 0
      if (context.getters.loggedIn) {
        return new Promise((resolve, reject) => {
          axios.post('/logout')
            .then(response => {
              // remove items from local storage
              localStorage.removeItem('access_token')
              localStorage.removeItem('myData')

              context.commit('destroyToken')
              resolve(response)

            })
            .catch(error => {
              // remove items form local storage
              localStorage.removeItem('access_token')
              localStorage.removeItem('myData')

              context.commit('destroyToken')
              reject(error)
            })
        })
      }
    },

    // Forget password
    sendForgetPasswordReq(context, username) {

      return new Promise((resolve, reject) => {
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.defaults.baseURL = 'http://18.216.27.3:8080/api/member' //TODO - update the correct url
        axios.get('/forgot-password/' + username)
          .then(response => {
            if (response.data.status) {

              // Need to check if there is token coming or not
              if ((response.data.statusCode == 200) && (response.data.message != null)) {
                Vue.prototype.$toastS(response.data.message)
                // commit both dta and token
                context.commit('setServerMessage', response.data.message)
                resolve(response)
              } else {
                //TODO  clean the local store
                Vue.prototype.$toastE(response.data.message)
                context.commit('setServerMessage', response.data.message)
              }
            } else {
              Vue.prototype.$toastE(response.data.message)
              context.commit('setServerMessage', response.data.message)
              // handle error 
            }
          })
          .catch(error => {
            context.commit('setServerMessage', error.message)
            reject(error)
          })
      })
    },

    // reset password     
    resetPasswordReq(context, credentials) {

      if (!context.getters.loggedIn) {
        return new Promise((resolve, reject) => {
          axios.post('/reset-password' + credentials.token, {
            newPassword: credentials.newPassword
          })
            .then(response => {
              if (response.data.status) {

                // Need to check if there is token coming or not
                if ((response.data.statusCode == 200) && (response.data.message != null)) {

                  Vue.prototype.$toastS(response.data.message)

                  // commit both dta and token
                  context.commit('setServerMessage', response.data.message)
                  resolve(response)
                } else {
                  Vue.prototype.$toastE(response.data.message)
                  //TODO  clean the local store
                  context.commit('setServerMessage', response.data.message)
                }
              } else {
                Vue.prototype.$toastE(response.data.message)
              }
            })
            .catch(error => {
              Vue.prototype.$toastE(error.message)
              context.commit('setServerMessage', error.message)
              reject(error)
            })
        })
      }
    },

    // change password
    changePasswordReq(context, credentials) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
      axios.defaults.headers.post['Content-Type'] = 'application/json';
      axios.defaults.baseURL = 'http://18.216.27.3:8080/api/member' //TODO - update the correct url          
      axios.defaults.timeout = 0

      if (context.getters.loggedIn) {
        return new Promise((resolve, reject) => {
          axios.post('/change-password', {
            username: credentials.userName,
            currentPassword: credentials.currentPassword,
            newPassword: credentials.newPassword
          })
            .then(response => {
              if (response.data.status) {

                // Need to check if there is token coming or not
                if ((response.data.statusCode == 200) && (response.data.message != null)) {
                  Vue.prototype.$toastS(response.data.message)

                  // commit both dta and token
                  context.commit('setServerMessage', response.data.message)
                  resolve(response)
                } else {
                  Vue.prototype.$toastE(response.data.message)

                  //TODO  clean the local store
                  context.commit('setServerMessage', response.data.message)
                }
              } else {
                Vue.prototype.$toastE(response.data.message)
              }
            })
            .catch(error => {
              Vue.prototype.$toastE(error.message)

              context.commit('setServerMessage', error.message)
              reject(error)
            })
        })
      }
    },


    // Destory token when logging out
    retrieveMyPartnerPref(context, profileId) {

      // change the timeout 
      axios.defaults.timeout = 0

      // Override the base url as its not fixed 
      axios.defaults.baseURL = 'http://18.216.27.3:8080/api' //TODO - update the correct url          

      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

      if (context.getters.loggedIn) {
        return new Promise((resolve, reject) => {
          axios.get('/partner-preference' + profileId)
            .then(response => {
              if (response.data.status) {

                // Need to check if data is null or not
                if (response.data.component != null) {
                  // set preferences in local storage
                  localStorage.setItem('myPartnerPref', JSON.stringify(response.data.component))

                  // commit data to store
                  context.commit('setMyPartnerPref', response.data.component)
                  resolve(response)
                } else {
                  //TODO  clean the local store
                  localStorage.removeItem('myPartnerPref')
                }
              } else {
                // handle error 
              }
            })
            .catch(error => {
              localStorage.removeItem('myPartnerPref');
              reject(error)
            })
        })
      }
    },

    // Get recent matches and pass the page number and size 
    retrieveRecentMatches(context, {
      pageNum,
      records
    }) {
      axios.defaults.baseURL = 'http://18.216.27.3:8080/api' //TODO - update the correct url          
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
      // change the timeout 
      axios.defaults.timeout = 0
      context.commit('setLoading', true)

      if (context.getters.loggedIn) {

        return new Promise((resolve, reject) => {
          axios.get('/member/recent-matches', {
            params: {
              page: pageNum, // which page data you want
              size: records, // how many profles you want to display
            }
          })
            .then(response => {
              context.commit('setLoading', false)

              // Need to check if there is token coming or not
              if (response.data.status) {
                context.commit(
                  'retrieveRecentMatches', {
                    recentMatches: response.data.component.items,
                    totalRecentMatches: response.data.component.totalRecords
                  })
                resolve(response)
              } else {
                //TODO  clean the local store
              }
            })
            .catch(error => {
              reject(error)
              context.commit('setLoading', false)

            })
        })
      }
    },

    retrieveRecentlyJoined(context, {
      pageNum,
      records
    }) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
      axios.defaults.baseURL = 'http://18.216.27.3:8080/api' //TODO - update the correct url

      // change the timeout 
      axios.defaults.timeout = 0
      context.commit('setLoading', true)

      if (context.getters.loggedIn) {
        return new Promise((resolve, reject) => {
          axios.get('/member/recently-joined', {
            params: {
              page: pageNum, // which page data you want
              size: records, // how many profles you want to display
            }
          })
            .then(response => {
              context.commit('setLoading', false)

              // Need to check if there is token coming or not
              if (response.data.status) {
                context.commit(
                  'retrieveRecentlyJoined', {
                    recentlyJoined: response.data.component.items,
                    totalRecentlyJoined: response.data.component.totalRecords
                  })
                resolve(response)
              } else {
                //TODO  clean the local store
              }
            })
            .catch(error => {
              context.commit('setLoading', false)

              reject(error)
            })
        })
      }
    },

    retrieveShortlistedProfiles(context, {
      pageNum,
      records
    }) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
      axios.defaults.baseURL = 'http://18.216.27.3:8080/api' //TODO - update the correct url
      // change the timeout 
      axios.defaults.timeout = 0
      context.commit('setLoading', true)

      if (context.getters.loggedIn) {
        return new Promise((resolve, reject) => {
          axios.get('/member/shortlisted', {
            params: {
              page: pageNum, // which page data you want
              size: records, // how many profles you want to display
            }
          })
            .then(response => {
              context.commit('setLoading', false)

              // Need to check if there is token coming or not
              if (response.data.status) {
                context.commit(
                  'retrieveShortlistedProfiles', {
                    shortlistedProfiles: response.data.component.items,
                    totalShortlistedProfiles: response.data.component.totalRecords
                  })
                resolve(response)
              } else {
                //TODO  clean the local store
              }
            })
            .catch(error => {
              context.commit('setLoading', false)

              reject(error)
            })
        })
      }
    },


    // Shortlist profiles
    shortlistProfile(context, profileId) {
      // Sent token for authentication 
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
      axios.defaults.baseURL = 'http://18.216.27.3:8080/api' //TODO - update the correct url
      // change the timeout 
      axios.defaults.timeout = 0

      // Check if logged in user or not
      if (context.getters.loggedIn) {
        // Send async request to API
        context.commit('setLoading', true)
        return new Promise((resolve, reject) => {
          axios.put('/member/shortlist/' + profileId)
            // handle response
            .then(response => {
              context.commit('setLoading', false)
              // Send the respnse back to caller
              if (response.data.status) {
                Vue.prototype.$toastS(response.data.message)
                resolve(response)
              } else {
                //TODO  handle - API status is okie but it returns with error code
              }
            })
            .catch(error => {
              reject(error)
            })
        })
      }
    },

    // Unlist profiles
    unlistProfile(context, profileId) {
      // Sent token for authentication 
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
      axios.defaults.baseURL = 'http://18.216.27.3:8080/api' //TODO - update the correct url
      // change the timeout 
      axios.defaults.timeout = 0
      // Check if logged in user or not
      if (context.getters.loggedIn) {
        context.commit('setLoading', true)
        // Send async request to API
        return new Promise((resolve, reject) => {
          axios.put('/member/un-shortlist/' + profileId)
            // handle response
            .then(response => {
              context.commit('setLoading', false)
              // Send the respnse back to caller
              if (response.data.status) {
                Vue.prototype.$toastS(response.data.message)

                resolve(response)
              } else {
                //TODO  handle - API status is okie but it returns with error code
              }
            })
            .catch(error => {
              reject(error)
            })
        })
      }
    },

    // View profiles
    viewProfile(context, profileId) {
      // Override the base url as its not fixed 
      axios.defaults.baseURL = 'http://18.216.27.3:8080/api' //TODO - update the correct url

      // Sent token for authentication 
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
      // Check if logged in user or not

      // change the timeout 
      axios.defaults.timeout = 0
      context.commit('setLoading', true)
      if (context.getters.loggedIn) {
        // Send async request to API
        return new Promise((resolve, reject) => {
          axios.get('/profile-view/' + profileId)
            // handle response
            .then(response => {
              context.commit('setLoading', false)

              // Send the respnse back to caller
              if (response.data.status) {
                context.commit(
                  'setMember',
                  response.data.component,
                )
                context.commit(
                  'setLightBoxImages',
                  response.data.component.photoAlbumEntities,
                )
                resolve(response)
              } else {
                //TODO  handle - API status is okie but it returns with error code
              }
            })
            .catch(error => {
              reject(error)
            })
        })
      }
    },

    retrieveSearchResults(context, {
      pageNum,
      records,
      dataReq
    }) {
      const data = {
        ageMin: parseInt(dataReq.minAge),
        ageMax: parseInt(dataReq.maxAge),
        maritalStatus: dataReq.maritalStatus, //array
        heightMin: parseInt(dataReq.minHeight),
        heightMax: parseInt(dataReq.maxHeight)
      }
      if (dataReq.reqFrom == 1) {
        data.cast = dataReq.cast //array
        data.subCast = dataReq.subCast //array
        data.occupation = dataReq.occupation //array
        data.language = dataReq.language //array
        data.country = dataReq.country //array
        data.state = dataReq.state //array
        data.educationLevel = dataReq.educationLevel //array
        data.degree = dataReq.degree //array
      }

      if (dataReq.reqFrom == 2) {
        data.occupation = dataReq.occupation //array
        data.language = dataReq.language //array
        data.country = dataReq.country //array
        data.state = dataReq.state //array
        data.educationLevel = dataReq.educationLevel //array
        data.degree = dataReq.degree //array
        data.cast = dataReq.cast //array
        data.subCast = dataReq.subCast //array
        data.raashi = dataReq.raashi
        data.nakshatra = dataReq.nakshatra
        // data.withPhoto = dataReq.withPhoto
        data.diet = dataReq.diet
        data.smoke = dataReq.smoke
        data.drink = dataReq.drink
        data.bodyType = dataReq.bodyType
        data.complexion = dataReq.complexion
      }
      const config = {
        params: {
          page: pageNum, // which page data you want
          size: records, // how many profles you want to display              
        },
      }

      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
      axios.defaults.headers.post['Content-Type'] = 'application/json';
      axios.defaults.baseURL = 'http://18.216.27.3:8080/api/member' //TODO - update the correct url

      // change the timeout 
      axios.defaults.timeout = 0
      context.commit('setLoading', true)
      if (context.getters.loggedIn) {
        return new Promise((resolve, reject) => {
          axios.post('/search', data, config)
            .then(response => {

              context.commit('setLoading', false)
              // Need to check if there is token coming or not
              if (response.data.status == "OK") {
                context.commit(
                  'retrieveSearchResults', {
                    searchReq: data,
                    searchedProfiles: response.data.component.items,
                    totalSearchResults: response.data.component.totalRecords
                  })
                resolve(response.data.component)
              } else {
                //TODO  clean the local store
              }
            })
            .catch(error => {
              reject(error)
            })
        })
      }
    },

    retrieveKeySearchResults(context, {
      pageNum,
      records,
      dataReq
    }) {


      const config = {
        params: {
          page: pageNum, // which page data you want
          size: records, // how many profles you want to display              
        },
      }

      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
      axios.defaults.headers.post['Content-Type'] = 'application/json';
      axios.defaults.baseURL = 'http://18.216.27.3:8080/api/member' //TODO - update the correct url

      if (context.getters.loggedIn) {
        context.commit('setLoading', true)
        return new Promise((resolve, reject) => {
          axios.get('/search/' + dataReq,
            config)
            .then(response => {
              context.commit('setLoading', false)
              // Need to check if there is token coming or not
              if (response.data.status == "OK") {
                context.commit(
                  'retrieveSearchResults', {
                    searchReq: dataReq,
                    searchedProfiles: response.data.component.items,
                    totalSearchResults: response.data.component.totalRecords
                  })
                resolve(response.data.component)
              } else {
                //TODO  clean the local store
              }
            })
            .catch(error => {
              reject(error)
            })
        })
      }
    },

    // signup profile

    setSignupAboutdata(context, dataReq) {
      if (!context.getters.loggedIn) {
        context.commit(
          'setSignupAboutdata', dataReq
        )
      }
    },

    setSignupPersonalInfo(context, dataReq) {
      if (!context.getters.loggedIn) {
        context.commit(
          'setSignupPersonalInfo', dataReq
        )
      }
    },

    setSignupFamilyInfo(context, dataReq) {
      if (!context.getters.loggedIn) {
        context.commit(
          'setSignupFamilyInfo', dataReq
        )
      }
    },

    saveFamilyInfo(context, dataReq) {
      if (!context.getters.loggedIn) {
        context.commit(
          'saveFamilyInfo', dataReq
        )
      }
    },

    setSignupSiblingInfo(context, dataReq) {
      if (!context.getters.loggedIn) {
        context.commit(
          'setSignupSiblingInfo', dataReq
        )
      }
    },

    setSignupEducationInfo(context, dataReq) {
      if (!context.getters.loggedIn) {
        context.commit(
          'setSignupEducationInfo', dataReq
        )
      }
    },

    setSignupPartnerInfo(context, dataReq) {
      if (!context.getters.loggedIn) {
        context.commit(
          'setSignupPartnerInfo', dataReq
        )
      }
    },


    submitSignupReq(context) {

      // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
      axios.defaults.timeout = 0

      if (!context.getters.loggedIn) {
        return new Promise((resolve, reject) => {
          axios.post('', {
            member: context.state.signupAboutdata,
            personalInfo: context.state.signupPersonalInfo,
            familyInfo: context.state.signupFamilyInfo,
            partnerPref: context.state.signupPartnerInfo,
            education: context.state.signupEducationInfo,
            siblings: context.state.signupSiblingInfo
          })
            .then(response => {

              // Need to check if there is token coming or not
              if ((response.data.statusCode == 200) && (response.data.message != null)) {
                Vue.prototype.$toastS(response.data.message)

                resolve(response)
              } else {
                Vue.prototype.$toastE(response.data.message)
              }
            })
            .catch(error => {
              Vue.prototype.$toastE(error.message)
              reject(error)
            })
        })
      }
    },

    // Edit profile actions

    setEditAboutdata(context) {
      // Sent token for authentication 
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
      axios.defaults.headers.put['Content-Type'] = 'application/json';


      if (!context.getters.loggedIn) {
        axios.put('' + this.editAboutdatamemberId, {
          memberId: this.editAboutdata.memberId,
          createdForId: this.editAboutdata.createdForId,
          castId: this.editAboutdata.castId,
          subCastId: this.editAboutdata.subCastId,
          maritalStatdusId: this.editAboutdata.maritalStatdusId,
          languageId: this.editAboutdata.languageId,
          currentPlace: this.editAboutdata.currentPlace,
          countryId: this.editAboutdata.countryId,
          primaryPhone: this.editAboutdatap.primaryPhone,
          religionId: this.editAboutdata.religionId,
          alternativePhone: this.editAboutdata.alternativePhone,
          stateId: this.editAboutdata.stateId
        })
          .then(response => {
            if ((response.data.statusCode == 200) && (response.data.message != null)) {

              // Need to check if data is null or not
              if (response.data.component != null) {
                // set preferences in local storage
                localStorage.setItem('setMyData', JSON.stringify(response.data.component))

                // commit data to store
                context.commit('setMyData', response.data.component)
                Vue.prototype.$toastS(response.data.message)

              } else {
                //TODO  clean the local store
                localStorage.removeItem('setMyData')
                Vue.prototype.$toastE(response.data.message)

              }
            } else {
              // handle error 
              Vue.prototype.$toastE(response.data.message)
            }
          })
          .catch(() => {
            localStorage.removeItem('setMyData');
          })
      }
    },

    setEditPersonalInfo(context, dataReq) {
      if (!context.getters.loggedIn) {
        context.commit(
          'setEditPersonalInfo', dataReq
        )
      }
    },

    setEditFamilyInfo(context, dataReq) {
      if (!context.getters.loggedIn) {
        context.commit(
          'setEditFamilyInfo', dataReq
        )
      }
    },
    setUnsetAsShortlistedInRecentMatches(context, { profileId, set }) {
      context.commit(
        'setUnsetAsShortlistedInRecentMatches', { profileId, set }
      )
    },
    setUnsetAsShortlistedInRecentJoined(context, { profileId, set }) {
      context.commit(
        'setUnsetAsShortlistedInRecentJoined', { profileId, set }
      )
    }


  }
})