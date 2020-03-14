import Vue from 'vue'
import axios from 'axios'

function initialState() {
    return {
        fblinkInfo: null,
        phoneInfo: null,
        emailInfo: null
    }
}

const getters = {
    fblinkInfo: state => state.fblinkInfo,
    phoneInfo: state => state.phoneInfo,
    emailInfo: state => state.emailInfo
}

const actions = {
    fetchFacebookLink({
        commit
    }, profileId) {
        
        return new Promise((resolve, reject) => {
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            axios.defaults.baseURL = 'http://18.216.27.3:8080/api' //TODO - update the correct url
            axios.get('/facebook/'+profileId)
                .then(response => {
                    if (response.data.status) {

                        // Need to check if there is token coming or not
                        if (response.data.statusCode == 200) {
                            // Vue.prototype.$toastS(response.data.message)

                            // commit both dta and token
                            if (response.data.component){
                                commit('setfblinkInfo', response.data.component.facebook)
                            } else {
                                Vue.prototype.$toastE(response.data.message)
                            }
                            resolve(response.data.component)
                        } else {
                            //TODO  clean the local store
                            Vue.prototype.$toastE(response.data.message)
                        }
                    } else {
                        Vue.prototype.$toastE(response.data.message)
                        // handle error 
                    }
                })
                .catch(error => {
                    reject(error)
                })
        })
    },
    fetchEmail({
        commit
    }, profileId) {
        return new Promise((resolve, reject) => {
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            axios.defaults.baseURL = 'http://18.216.27.3:8080/api' //TODO - update the correct url
            axios.get('/email-info/'+ profileId)
                .then(response => {
                    if (response.data.status) {

                        // Need to check if there is token coming or not
                        if ((response.data.statusCode == 200) && (response.data.message != null)) {
                            // Vue.prototype.$toastS(response.data.message)
                            // commit both dta and token
                            commit('setemailInfo', response.data.component.emailId)
                            resolve(response.data.component)
                        } else {
                            //TODO  clean the local store
                            Vue.prototype.$toastE(response.data.message)
                        }
                    } else {
                        Vue.prototype.$toastE(response.data.message)
                        // handle error 
                    }
                })
                .catch(error => {
                    reject(error)
                })
        })
    },
    fetchPhoneInfo({
        commit
    }, profileId) {
        return new Promise((resolve, reject) => {
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            axios.defaults.baseURL = 'http://18.216.27.3:8080/api' //TODO - update the correct url
            axios.get('/phone-info/'+ profileId)
                .then(response => {
                    if (response.data.status) {

                        // Need to check if there is token coming or not
                        if ((response.data.statusCode == 200) && (response.data.message != null)) {
                            // Vue.prototype.$toastS(response.data.message)
                            // commit both dta and token
                            commit('setphoneInfo', response.data.component.primaryPhone)
                            resolve(response.data.component)
                        } else {
                            //TODO  clean the local store
                            Vue.prototype.$toastE(response.data.message)
                        }
                    } else {
                        Vue.prototype.$toastE(response.data.message)
                        // handle error 
                    }
                })
                .catch(error => {
                    reject(error)
                })
        })
    },
}

const mutations = {
    setphoneInfo(state, value) {
        state.phoneInfo = value;
    },
    setemailInfo(state, value) {
        state.emailInfo = value;
    },
    setfblinkInfo(state, value) {
        state.fblinkInfo = value;
    },

}

export default {
    namespaced: true,
    state: initialState,
    getters,
    actions,
    mutations
}