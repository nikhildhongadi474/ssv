import Vue from 'vue'
import axios from 'axios'
import store from '../../store'

function initialState() {
  return {
    loading: true,
    memberData: {
      personalInfoEntity: {},
      memberDTO: {},
      educationDTOs: [],
      familyInfoEntity: {},
      partnerPrefEntity: {},
      photoAlbumEntities: []
    },
    personalInformationData: {
      birthCountry: {},
      birthState: {},
    },
    partnerPrefrencesData: {
      minAge: 0,
      countryValues: [],
      states: [],
      countries: [],
      degrees: [],
      educationLevels: [],
      casts: [],
      religions: [],
      maritalStatuses: [],
      languages: [],
      occupations: [],
      dietTypes: [],
      complexions: [],
      bodyTypes: [],
      smokeTypes: [],
      drinkTypes: [],
    },
    siblingData: [{
      gender: null,
      siblingRelation: null,
      maritalStatus: null,
      occupation: null,
    }],
    lightBoxImages: [],
    photoAlbumEntities: [],
    noImage: 'https://dummyimage.com/400x600/fff/000.png&text=No+image'
  }
}

const getters = {
  memberData: state => state.memberData,
  personalInformationData: state => state.personalInformationData,
  partnerPrefrencesData: state => state.partnerPrefrencesData,
  loading: state => state.loading,
  noImage: state => state.noImage,
  siblingData: state => state.siblingData,
  lightBoxImages: state => state.lightBoxImages
}
const actions = {
  viewProfile({
    commit,
    rootState
  }, profileId) {

    // Override the base url as its not fixed 
    axios.defaults.baseURL = 'http://18.216.27.3:8080/api' //TODO - update the correct url

    // change the timeout 
    axios.defaults.timeout = 0
    commit(
      'setLoading',
      true,
      { root: true }
    )
    // Send async request to API
    return new Promise((resolve, reject) => {

      axios.get('/profile-view/' + profileId)
        // handle response
        .then(response => {
          // Send the respnse back to caller
          if (response.data.status) {
            commit(
              'setMemberData',
              response.data.component,
            )
            commit(
              'setPersonalInformationData',
              response.data.component.personalInfoEntity,
            )
            commit(
              'setPartnerPrefrencesData',
              response.data.component.partnerPrefEntity,
            )
            commit(
              'siblingData',
              response.data.component.siblingEntity,
            )
            commit(
              'setLightBoxImages',
              response.data.component.photoAlbumEntities,
            )
            commit(
              'setLoading',
              false,
              { root: true }

            )
            resolve(response)
          } else {
            commit(
              'setLoading',
              true,
              { root: true }

            )
            //TODO  handle - API status is okie but it returns with error code
          }
        })
        .catch(error => {
          commit(
            'setLoading',
            true,
            { root: true }
          )
          reject(error)
        })
    })
  },
  updateAboutData({ }, data) {
    // Override the base url as its not fixed 
    axios.defaults.baseURL = 'http://18.216.27.3:8080/api' //TODO - update the correct url

    // change the timeout 
    axios.defaults.timeout = 0
    context.commit('setLoading', true)

    return new Promise((resolve, reject) => {
      axios.put('/basic/update', {
        memberId: data.memberId,
        fullName: data.fullName,
        firstName: data.fullName,
        lastName: data.lastName,
        createdForId: data.createdForId,
        castId: data.castId,
        subCastId: data.subCastId,
        maritalStatusId: data.maritalStatusId,
        languageId: data.languageId,
        currentPlace: data.currentPlace,
        countryId: data.countryId,
        primaryPhone: data.primaryPhone,
        religionId: data.religionId,
        alternativePhone: data.alternativePhone,
        stateId: data.stateId,
        createdBy: data.createdBy
      })
        .then(response => {
          context.commit('setLoading', false)

          if ((response.data.statusCode == 200) && (response.data.message != null)) {
            Vue.prototype.$toastS('Successfully udpated member ' + response.data.component.username)
            resolve(response)

          } else {
            // handle error 
            Vue.prototype.$toastE(response.data.message)
          }
        })
        .catch(error => {
          context.commit('setLoading', false)

          localStorage.removeItem('setMyData');
          reject(error)
        })
    })
  },
  updatePersonalData({
    state
  }) {
    // Override the base url as its not fixed 
    axios.defaults.baseURL = 'http://18.216.27.3:8080/api' //TODO - update the correct url

    // change the timeout 
    axios.defaults.timeout = 0
    context.commit('setLoading', true)

    return new Promise((resolve, reject) => {
      axios.put('/personal-info', {
        memberId: state.personalInformationData.memberId,
        height: state.personalInformationData.height,
        weight: state.personalInformationData.weight,
        bodyType: state.personalInformationData.bodyType,
        bloodGroup: state.personalInformationData.bloodGroup,
        complexion: state.personalInformationData.complexion,
        disability: state.personalInformationData.disability,
        birthCountry: state.personalInformationData.birthCountry,
        birthState: state.personalInformationData.birthState,
        birthCity: state.personalInformationData.birthCity,
        moonSign: state.personalInformationData.moonSign,
        star: state.personalInformationData.star,
        gotra: state.personalInformationData.gotra,
        smoke: state.personalInformationData.smoke,
        diet: state.personalInformationData.diet,
        description: state.personalInformationData.description,
        facebook: state.personalInformationData.facebook,
        drink: state.personalInformationData.drink,
        interests: state.personalInformationData.interests,
        hobbies: state.personalInformationData.hobbies,
      })
        .then(response => {
          context.commit('setLoading', false)

          if ((response.data.statusCode == 200) && (response.data.message != null)) {
            Vue.prototype.$toastS(response.data.message)
            resolve(response)

          } else {
            // handle error 
            Vue.prototype.$toastE(response.data.message)
          }
        })
        .catch(error => {
          context.commit('setLoading', false)

          localStorage.removeItem('setMyData');
          reject(error)
        })
    })
  },
  updateEducationData({

  }, data) {
    // Override the base url as its not fixed 
    axios.defaults.baseURL = 'http://18.216.27.3:8080/api' //TODO - update the correct url

    // change the timeout 
    axios.defaults.timeout = 0
    context.commit('setLoading', true)

    return new Promise((resolve, reject) => {
      axios.put('/education', {
        memberId: data.memberId,
        degree: data.degree,
        institution: data.institution,
        educationDetails: data.institution,
        occupation: data.occupation,
        income: data.income,
        currency: data.currency,
        occupationDetails: data.occupationDetails,
        employer: data.employer
      })
        .then(response => {
          context.commit('setLoading', false)

          if ((response.data.statusCode == 200) && (response.data.message != null)) {
            Vue.prototype.$toastS(response.data.message)
            resolve(response)

          } else {
            // handle error 
            Vue.prototype.$toastE(response.data.message)
          }
        })
        .catch(error => {
          context.commit('setLoading', false)

          localStorage.removeItem('setMyData');
          reject(error)
        })
    })
  },
  updateFamilyData({

  }, data) {
    // Override the base url as its not fixed 
    axios.defaults.baseURL = 'http://18.216.27.3:8080/api' //TODO - update the correct url

    // change the timeout 
    axios.defaults.timeout = 0
    context.commit('setLoading', true)

    return new Promise((resolve, reject) => {
      axios.put('/family-info', {
        memberId: data.memberId,
        familyStatus: data.familyStatus,
        familyValue: data.familyValue,
        familyType: data.familyType,
        motherOccupation: data.motherOccupation,
        motherOccupationDetails: data.motherOccupationDetails,
        fatherOccupation: data.fatherOccupation,
        fatherOccupationDetails: data.fatherOccupationDetails,
        orgCountry: data.orgCountry,
        orgState: data.orgState,
        familyDetails: data.familyDetails,
        fatherName: data.fatherName,
        motherId: data.memberId,
        motherName: data.motherName,
        orgCity: data.orgCity,
        familyAddress: data.familyAddress,
        orgDistrict: data.orgDistrict
      })
        .then(response => {
          context.commit('setLoading', false)

          if ((response.data.statusCode == 200) && (response.data.message != null)) {
            Vue.prototype.$toastS(response.data.message)
            resolve(response)

          } else {
            // handle error 
            Vue.prototype.$toastE(response.data.message)
          }
        })
        .catch(error => {
          localStorage.removeItem('setMyData');
          reject(error)
        })
    })
  },
  updatePartnerPreferencesData({
    state
  }) {
    // Override the base url as its not fixed 
    axios.defaults.baseURL = 'http://18.216.27.3:8080/api' //TODO - update the correct url

    // change the timeout 
    axios.defaults.timeout = 0
    context.commit('setLoading', true)
    return new Promise((resolve, reject) => {
      axios.put('/partner-preference', {
        memberId: state.partnerPrefrencesData.memberId,
        bodyTypes: state.partnerPrefrencesData.bodyTypes,
        complexions: state.partnerPrefrencesData.complexions,
        languages: state.partnerPrefrencesData.languages,
        dietTypes: state.partnerPrefrencesData.dietTypes,
        smokeTypes: state.partnerPrefrencesData.smokeTypes,
        drinkTypes: state.partnerPrefrencesData.drinkTypes,
        maritalStatuses: state.partnerPrefrencesData.maritalStatuses,
        educationLevels: state.partnerPrefrencesData.educationLevels,
        degrees: state.partnerPrefrencesData.degrees,
        countries: state.partnerPrefrencesData.countries,
        states: state.partnerPrefrencesData.states,
        countryStateVal: state.partnerPrefrencesData.countryStateVal,
        occupations: state.partnerPrefrencesData.occupations,
        religions: state.partnerPrefrencesData.religions,
        casts: state.partnerPrefrencesData.casts,
        subCasts: state.partnerPrefrencesData.subCasts,
        minHeight: state.partnerPrefrencesData.minHeight,
        maxHeight: state.partnerPrefrencesData.maxHeight,
        minAge: state.partnerPrefrencesData.minAge,
        maxAge: state.partnerPrefrencesData.maxAge,
        minSalary: state.partnerPrefrencesData.minSalary,
        maxSalary: state.partnerPrefrencesData.maxSalary,
        expectation: state.partnerPrefrencesData.expectation,
        currencyId: state.partnerPrefrencesData.currencyId
      })
        .then(response => {
          context.commit('setLoading', false)
          if ((response.data.statusCode == 200) && (response.data.message != null)) {

            Vue.prototype.$toastS(response.data.message)
            resolve(response)

          } else {
            // handle error 
            Vue.prototype.$toastE(response.data.message)
          }
        })
        .catch(error => {
          localStorage.removeItem('setMyData');
          reject(error)
        })
    })
  },
  saveSiblingsInfoData({
    state
  }) {
    // Override the base url as its not fixed 
    axios.defaults.baseURL = 'http://18.216.27.3:8080/api' //TODO - update the correct url

    // change the timeout 
    axios.defaults.timeout = 0
    context.commit('setLoading', true)
    return new Promise(() => {
      let newSiblings = state.siblingData.filter(sibling => {
        return sibling.siblingId == undefined
      })
      newSiblings = newSiblings.map(sibling => {
        sibling.memberId = state.personalInformationData.memberId
        return sibling;
      })
      let oldSiblings = state.siblingData.filter(sibling => {
        return sibling.siblingId != undefined
      })
      oldSiblings = oldSiblings.map(sibling => {
        sibling.memberId = state.personalInformationData.memberId
        return sibling;
      })
      if (newSiblings.length) {
        axios.post('/siblings', newSiblings)
          .then(() => {
            context.commit('setLoading', false)
          })
          .catch(() => {
            // localStorage.removeItem('setMyData');
            // reject(error)
            context.commit('setLoading', false)

          })
      }

      if (oldSiblings.length) {
        axios.put('/siblings', oldSiblings)
          .then(() => {
            context.commit('setLoading', false)

          })
          .catch(() => {
            context.commit('setLoading', false)

          })
      }

    })
  },
  setProfilePicture({

  }, photoid) {
    return new Promise((resolve, reject) => {
      axios.put('/set-profile-pic/' + photoid)
        .then(response => {
          if (response.data.statusCode == 200) {
            Vue.prototype.$toastS(response.data.message)
          }
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  removePicture({

  }, photoid) {
    context.commit('setLoading', true)

    return new Promise((resolve, reject) => {
      axios.delete('/photo/' + photoid)
        .then(response => {
          context.commit('setLoading', false)

          if (response.data.statusCode == 200) {
            Vue.prototype.$toastS(response.data.message)
          }
          resolve(response)
        })
        .catch(error => {
          reject(error)
          context.commit('setLoading', false)

        })
    })
  },
}

const mutations = {
  setMemberData(state, value) {
    state.memberData = value;
  },

  setPersonalInformationData(state, value) {
    state.personalInformationData = value;
  },
  setPartnerPrefrencesData(state, value) {
    state.partnerPrefrencesData = value;
  },
  siblingData(state, value) {
    state.siblingData = value;
  },
  setLightBoxImages(state, value) {
    let images = value.map(image => {
      return {
        thumb: "https://www.ssvmatrimony.org/images" + image.thumbnail,
        src: "https://www.ssvmatrimony.org/images" + image.image,
      }
    })
    state.lightBoxImages = images
  }
}

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations
}