import Vue from 'vue'

function initialState() {
    return {
        membershipTypes: {},
        packageTypes: [{
                "packageId": 1,
                "packageName": "Basic",
                "community": {
                    "communityId": 1,
                    "communityType": "SSV"
                },
                "amount": 350,
                "duration": 3,
                "contacts": 50
            },
            {
                "packageId": 2,
                "packageName": "Standard",
                "community": {
                    "communityId": 1,
                    "communityType": "SSV"
                },
                "amount": 600,
                "duration": 6,
                "contacts": 100
            },
            {
                "packageId": 3,
                "packageName": "Special",
                "community": {
                    "communityId": 1,
                    "communityType": "SSV"
                },
                "amount": 1000,
                "duration": 12,
                "contacts": 200
            },
            {
                "packageId": 4,
                "packageName": "Basic",
                "community": {
                    "communityId": 2,
                    "communityType": "NSS"
                },
                "amount": 350,
                "duration": 3,
                "contacts": 40
            },
            {
                "packageId": 5,
                "packageName": "Standard",
                "community": {
                    "communityId": 2,
                    "communityType": "NSS"
                },
                "amount": 600,
                "duration": 6,
                "contacts": 60
            },
            {
                "packageId": 6,
                "packageName": "Special",
                "community": {
                    "communityId": 2,
                    "communityType": "NSS"
                },
                "amount": 1000,
                "duration": 12,
                "contacts": 100
            }
        ]
    }
}

const getters = {
    membershipTypes: state => state.membershipTypes,
    packageTypes: state => state.packageTypes
}

const actions = {
    fetchMemberTypes({
        commit
    }) {
        return new Promise((resolve, reject) => {
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            axios.defaults.baseURL = 'http://18.216.27.3:8080/api' //TODO - update the correct url
            axios.get('/membership-type')
                .then(response => {
                    if (response.data.status) {

                        // Need to check if there is token coming or not
                        if (response.data.statusCode == 200) {
                            // Vue.prototype.$toastS(response.data.message)

                            // commit both dta and token
                            commit('setMembershipTypes', response.data.components)
                            resolve(response)
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
                    console.log(error)
                    reject(error)
                })
        })
    },
    fetchPackageTypes({
        commit
    }) {
        return new Promise((resolve, reject) => {
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            axios.defaults.baseURL = 'http://18.216.27.3:8080/api' //TODO - update the correct url
            axios.get('/membership-type')
                .then(response => {
                    if (response.data.status) {

                        // Need to check if there is token coming or not
                        if ((response.data.statusCode == 200) && (response.data.message != null)) {
                            // Vue.prototype.$toastS(response.data.message)
                            // commit both dta and token
                            commit('setPackageTypes', response.data.components)
                            resolve(response)
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
    setMembershipTypes(state, value) {
        state.membershipTypes = value;
    },
    setPackageTypes(state, value) {
        state.packageTypes = value;
    },

}

export default {
    namespaced: true,
    state: initialState,
    getters,
    actions,
    mutations
}