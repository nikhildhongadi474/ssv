// import App from './App'
import LandingPage from './components/LandingPage'
import Dashboard from "./components/Dashboard.vue"
import EditProfile from "./components/EditProfile.vue"
import Matches from "./components/Matches.vue"
import PerfectMatches from "./components/PerfectMatches.vue"
import Profile from "./components/Profile.vue"
import RecentlyJoined from "./components/RecentlyJoined.vue"
import SearchListing from "./components/SearchListing.vue"
import ProfileShortlist from "./components/ProfileShortlist.vue"
import ResetPassword from "./components/ResetPassword.vue"
import ChangePassword from "./components/ChangePassword.vue"
import NoResultFound from "./components/NoResultFound.vue"
import PageNotFound from "./components/PageNotFound.vue"
import UpgradeMembership from "./components/UpgradeMembership.vue"
import BasicSearch from "./components/BasicSearch.vue"
import QuickSearch from "./components/QuickSearch.vue"
import AdvancedSearch from "./components/AdvancedSearch.vue"
import KeywordSearch from "./components/KeywordSearch.vue"
import ServerMessage from "./components/ServerMessage.vue"
import SignUp from "./components/SignUp.vue"
import ContactUs from "./components/ContactUs.vue"
import TermsConditions from "./components/TermsConditions.vue"
import PrivacyPolicy from "./components/PrivacyPolicy.vue"
import Help from "./components/Help.vue"
import Feedback from "./components/Feedback.vue"
import AboutUs from "./components/AboutUs.vue"
import ThankYou from "./components/ThankYou.vue"

import TestTabs from "./components/TestTabs.vue"

// import About from './components/About'
//TODO import rest of the components here. 

const routes = [{
    path: '/',
    name: 'home',
    component: LandingPage,
    meta: {
      requiresVisitor: true,
    }
  },

  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true,
      requiresMembership: true
    }
  },

  {
    path: '/edit-profile',
    name: 'editProfile',
    component: EditProfile,
    meta: {
      requiresAuth: true,
      requiresMembership: true

    }
  },

  {
    path: '/matches',
    name: 'matches',
    component: Matches,
    meta: {
      requiresAuth: true,
      requiresMembership: true

    }
  },

  {
    path: '/perfect-matches',
    name: 'perfectMatches',
    component: PerfectMatches,
    meta: {
      requiresAuth: true,
      requiresMembership: true
    }
  },

  {
    path: '/profile/:id',
    name: 'profile',
    component: Profile,
    meta: {
      requiresAuth: true,
      requiresMembership: true
    }
  },

  {
    path: '/recently-joined',
    name: 'recentlyJoined',
    component: RecentlyJoined,
    meta: {
      requiresAuth: true,
      requiresMembership: true
    }
  },

  {
    path: '/search-listing',
    name: 'searchListing',
    component: SearchListing,
    meta: {
      requiresAuth: true,
      requiresMembership: true
    }
  },

  {
    path: '/shortlisted',
    name: 'profileShortlist',
    component: ProfileShortlist,
    meta: {
      requiresAuth: true,
      requiresMembership: true
    }
  },

  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: ResetPassword,
    meta: {
      requiresAuth: false,
    }
  },

  {
    path: '/change-password',
    name: 'ChangePassword',
    component: ChangePassword,
    meta: {
      requiresAuth: true,
    }
  },

  {
    path: '/no-result-found',
    name: 'NoResultFound',
    component: NoResultFound,
    meta: {
      requiresAuth: true,
    }
  },

  {
    path: '/upgrade-membership',
    name: 'UpgradeMembership',
    component: UpgradeMembership,
    meta: {
      requiresAuth: false,
    }
  },

  {
    path: '/page-not-found',
    name: 'PageNotFound',
    component: PageNotFound,
    meta: {
      requiresAuth: true,
    }
  },

  {
    path: '/basic-search',
    name: 'BasicSearch',
    component: BasicSearch,
    props: true,
    meta: {
      requiresAuth: true,
      requiresMembership: true
    }
  },

  {
    path: '/quick-search',
    name: 'QuickSearch',
    component: QuickSearch,
    props: true,
    meta: {
      requiresAuth: true,
      requiresMembership: true
    }
  },

  {
    path: '/advanced-search',
    name: 'AdvancedSearch',
    component: AdvancedSearch,
    props: true,
    meta: {
      requiresAuth: true,
      requiresMembership: true
    }
  },
  
  {
    path: '/keyword-search',
    name: 'KeywordSearch',
    component: KeywordSearch,
    props: true,
    meta: {
      requiresAuth: true,
      requiresMembership: true
    }
  },
  
  {
    path: '/server-message',
    name: 'ServerMessage',
    component: ServerMessage,
    props: true,
    meta: {
      requiresVisitor: true,
    }
  },

  {
    path: '/sign-up',
    name: 'signUp',
    component: SignUp,
    props: true,
    meta: {
      requiresVisitor: true,
    }
  },

  {
    path: '/registration-successful',
    name: 'registration-successful',
    component: ThankYou,
    props: true,
    meta: {
      requiresVisitor: true,
    }
  },

  {
    path: '/contact-us',
    name: 'contact-us',
    component: ContactUs,
    props: true,
    meta: {
      requiresAuth: false,
    }
  },

  {
    path: '/terms-Conditions',
    name: ' TermsConditions',
    component:  TermsConditions,
    props: true,
    meta: {
      requiresAuth: false,
    }
  },

  {
    path: '/privacy-policy',
    name: ' PrivacyPolicy',
    component:  PrivacyPolicy,
    props: true,
    meta: {
      requiresAuth: false,
    }
  },

  {
    path: '/help',
    name: ' Help',
    component:  Help,
    props: true,
    meta: {
      requiresAuth: false,
    }
  },

  {
    path: '/feedback',
    name: ' Feedback',
    component:  Feedback,
    props: true,
    meta: {
      requiresAuth: false,
    }
  },


  {
    path: '/about-us',
    name: ' AboutUs',
    component:  AboutUs,
    props: true,
    meta: {
      requiresAuth: false,
    }
  },

  {
    path: '/test',
    name: 'test',
    component: TestTabs,
    props: true,
    meta: {
      requiresAuth: false,
    }
  },
  
 

]

export default routes