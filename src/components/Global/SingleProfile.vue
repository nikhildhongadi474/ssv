<template>
  <div>
    <div>
      <!-- Header Ends -->
      <div class="inner-content" v-if="memberData && Object.keys(memberData).length">
        <div class="container">
          <div class="col-md-3 col-sm-3 profile-picture" v-if="memberData.photoAlbumEntities">
            <a href="javascript:void(0);">
              <img
                v-if="memberData.photoAlbumEntities.length"
                :src="profilePic"
                @click="openGallery(0)"
                onerror="this.onerror=null;this.src='/images/dummy/noimage.png';"
              >
            </a>
          </div>

          <div class="col-md-9 col-sm-9">
            <ul class="nav nav-tabs">
              <li class="active">
                <a data-toggle="tab" href="#personal-info">Personal Information</a>
              </li>
              <li class="view-profile" v-if="ifLoggedInMember">
                <a href="javascript:void(0);" @click="editProfile">Edit Your Profile</a>
              </li>
            </ul>

            <div class="tab-content" v-if="Object.keys(memberData.memberDTO).length">
              <div id="personal-info" class="tab-pane fade in active">
                <!-- Profile Info Starts -->
                <div class="col-md-6 col-sm-6">
                  <!-- Full NAme -->
                  <div class="row profile-info">
                    <div class="col-md-6 col-sm-6 col-xs-6">
                      <p class="profile-que">Full name</p>
                    </div>

                    <div class="col-md-6 col-sm-6 col-xs-6">
                      <p class="profile-ans name">
                        <span
                          v-if="Object.keys(memberData.memberDTO).length"
                        >{{ memberData.memberDTO.fullName }}</span>
                        <span v-else>Not Mentioned</span>
                      </p>
                    </div>
                  </div>
                  <!-- username -->
                  <div class="row profile-info">
                    <div class="col-md-6 col-sm-6 col-xs-6">
                      <p class="profile-que">Username</p>
                    </div>

                    <div class="col-md-6 col-sm-6 col-xs-6">
                      <p class="profile-ans username">
                        <span
                          v-if="Object.keys(memberData.memberDTO).length"
                        >{{ memberData.memberDTO.username }}</span>
                        <span v-else>Not Mentioned</span>
                      </p>
                    </div>
                  </div>
                  <!-- Age -->
                  <div class="row profile-info">
                    <div class="col-md-6 col-sm-6 col-xs-6">
                      <p class="profile-que">Age</p>
                    </div>

                    <div class="col-md-6 col-sm-6 col-xs-6">
                      <p class="profile-ans">
                        <span
                          v-if="Object.keys(memberData.memberDTO).length"
                        >{{ memberData.memberDTO.age }}</span>
                        <span v-else>Not Mentioned</span>
                      </p>
                    </div>
                  </div>

                  <!-- Height -->
                  <div class="row profile-info">
                    <div class="col-md-6 col-sm-6 col-xs-6">
                      <p class="profile-que">Height</p>
                    </div>

                    <div class="col-md-6 col-sm-6 col-xs-6">
                      <p class="profile-ans">
                        <span v-if="Object.keys(memberData.memberDTO).length">{{ memberHeight }}</span>
                        <span v-else>Not Mentioned</span>
                      </p>
                    </div>
                  </div>
                  <!-- Caste -->
                  <div class="row profile-info">
                    <div class="col-md-6 col-sm-6 col-xs-6">
                      <p class="profile-que">Caste</p>
                    </div>

                    <div class="col-md-6 col-sm-6 col-xs-6">
                      <p class="profile-ans">
                        <span
                          v-if="Object.keys(memberData.memberDTO).length && memberData.memberDTO.cast"
                        >{{ memberData.memberDTO.cast.castName }}</span>
                      </p>
                    </div>
                  </div>

                  <!-- Sub Caste -->
                  <div class="row profile-info">
                    <div class="col-md-6 col-sm-6 col-xs-6">
                      <p class="profile-que">Sub Caste</p>
                    </div>

                    <div class="col-md-6 col-sm-6 col-xs-6">
                      <p class="profile-ans">
                        <span
                          v-if="Object.keys(memberData.memberDTO).length"
                        >{{ memberData.memberDTO.subCast.subCastName }}</span>
                      </p>
                    </div>
                  </div>

                  <!-- Location -->
                  <div class="row profile-info">
                    <div class="col-md-6 col-sm-6 col-xs-6">
                      <p class="profile-que">Location</p>
                    </div>

                    <div class="col-md-6 col-sm-6 col-xs-6">
                      <p class="profile-ans">
                        <span
                          v-if="memberData.memberDTO.currentPlace"
                        >{{ memberData.memberDTO.currentPlace }},</span>

                        <span
                          v-if="memberData.memberDTO.state && Object.keys(memberData.memberDTO.state).length"
                        >{{ memberData.memberDTO.state.stateName }},</span>

                        <span
                          v-if="Object.keys(memberData.memberDTO.country).length"
                        >{{ memberData.memberDTO.country.countryName }}</span>
                      </p>
                    </div>
                  </div>

                  <!-- Marital Status -->
                  <div class="row profile-info">
                    <div class="col-md-6 col-sm-6 col-xs-6">
                      <p class="profile-que">Marital Status</p>
                    </div>

                    <div class="col-md-6 col-sm-6 col-xs-6">
                      <p class="profile-ans">
                        <span
                          v-if="memberData.memberDTO.maritalStatus"
                        >{{ memberData.memberDTO.maritalStatus.msName }}</span>
                        <span v-else>Not Mentioned</span>
                      </p>
                    </div>
                  </div>

                  <!-- Language -->
                  <div class="row profile-info">
                    <div class="col-md-6 col-sm-6 col-xs-6">
                      <p class="profile-que">Language</p>
                    </div>

                    <div class="col-md-6 col-sm-6 col-xs-6">
                      <p class="profile-ans">
                        <span
                          v-if="memberData.memberDTO.language"
                        >{{ memberData.memberDTO.language.languageName }}</span>
                        <span v-else>Not Mentioned</span>
                      </p>
                    </div>
                  </div>

                  <!-- Religion -->
                  <div class="row profile-info">
                    <div class="col-md-6 col-sm-6 col-xs-6">
                      <p class="profile-que">Religion</p>
                    </div>

                    <div class="col-md-6 col-sm-6 col-xs-6">
                      <p class="profile-ans">
                        <span
                          v-if="memberData.memberDTO.religion"
                        >{{ memberData.memberDTO.religion.religionName }}</span>
                        <span v-else>Not Mentioned</span>
                      </p>
                    </div>
                  </div>

                  <!-- DOB -->
                  <div class="row profile-info">
                    <div class="col-md-6 col-sm-6 col-xs-6">
                      <p class="profile-que">DOB</p>
                    </div>

                    <div class="col-md-6 col-sm-6 col-xs-6">
                      <p class="profile-ans">
                        <span
                          v-if="memberData.memberDTO.memberDob"
                        >{{ memberData.memberDTO.memberDob }}</span>
                        <span v-else>Not Mentioned</span>
                      </p>
                    </div>
                  </div>
                </div>
                <!-- Profile Info Ends -->
                <!-- Profile Right Starts -->
                <div class="col-md-6 col-sm-6">
                  <!-- Quick Social Connect Starts -->
                  <div class="row quick-connect">
                    <div class="col-md-12">
                      <p v-if="!ifLoggedInMember  && !ifConnectionAllowed">
                        <a
                          href="javascript:void(0);"
                          v-tooltip.top-center="'Please Purchase packages to contact'"
                        >
                          <i class="material-icons">phone</i> Call On Phone
                        </a>
                      </p>
                      <p v-if="!ifLoggedInMember && ifConnectionAllowed">
                        <a href="javascript:void(0);" @click="getPhoneNumber">
                          <i class="material-icons fd">phone</i> Call On Phone
                          <span>{{ memberData.memberDTO.primaryPhone }}</span>
                        </a>
                      </p>
                      <p v-if="ifLoggedInMember">
                        <a href="javascript:void(0);">
                          <i class="material-icons">phone</i>
                          {{ memberData.memberDTO.primaryPhone }}
                        </a>
                      </p>
                    </div>

                    <div class="col-md-12">
                      <p class="profile-email" v-if="!ifLoggedInMember">
                        <a
                          href="javascript:void(0);"
                          v-if="!ifConnectionAllowed"
                          v-tooltip.top-center="'Please Purchase packages to contact'"
                        >
                          <i class="material-icons">email</i> Contact On Email
                          <span v-if="ifConnectionAllowed"></span>
                        </a>
                        <a href="javascript:void(0);" @click="getEmail" v-else>
                          <i class="material-icons">email</i> Contact On Email
                          <span
                            v-if="ifConnectionAllowed"
                          >{{ memberData.memberDTO.email }}</span>
                        </a>
                      </p>
                      <p class="profile-email" v-else>
                        <a href="javascript:void(0);">
                          <i class="material-icons">email</i>
                          {{ memberData.memberDTO.email }}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div class="row quick-connect">
                    <div class="col-md-12">
                      <p class="profile-facebook" v-if="!ifLoggedInMember">
                        <a
                          href="javascript:void(0);"
                          v-if="!ifConnectionAllowed"
                          v-tooltip.top-center="'Please Purchase packages to contact'"
                        >
                          <i class="fa fa-facebook" aria-hidden="true"/>
                          <span>Connect on facebook</span>
                        </a>
                        <a href="javascript:void(0);" @click="getFblink" v-else>
                          <i class="fa fa-facebook" aria-hidden="true"/>
                          <span>Connect on facebook</span>
                          <span
                            v-if="ifConnectionAllowed || ifLoggedInMember"
                          >{{ memberData.personalInfoEntity.facebook }}</span>
                        </a>
                      </p>
                      <!-- <p class="profile-facebook" v-else>
                        <a href="javascript:void(0);">
                          <i class="fa fa-facebook" aria-hidden="true"/>
                          <span
                            v-if="ifConnectionAllowed || ifLoggedInMember"
                          >{{ memberData.personalInfoEntity.facebook }}</span>
                        </a>
                      </p>-->
                    </div>
                  </div>
                  <!-- Quick Social Connect Ends -->
                  <!-- Profile Gallery Starts -->
                  <div class="row profile-gallery">
                    <div class="col-md-12">
                      <p class="gallery-title">Photos</p>
                    </div>

                    <div class="single-gallery">
                      <ul v-if="memberData.photoAlbumEntities">
                        <li
                          class="min-height-140"
                          v-for="(gallery, index) in memberData.photoAlbumEntities"
                          :key="gallery.id"
                        >
                          <div class="col-md-12" v-if="gallery.isProfilePic=='N'">
                            <a href="javascript:void(0);">
                              <img
                                v-if="gallery.isProfilePic=='N' && gallery.photoStatus.statusId == 1"
                                :src="'https://www.ssvmatrimony.org/images' + memberData.photoAlbumEntities[index].image"
                                @click="openGallery(index)"
                                onerror="this.onerror=null;this.src='/images/dummy/noimage.png';"
                              >
                            </a>
                            <div v-if="ifLoggedInMember">
                              <a
                                href="javascript:void(0);"
                                class="set-as-profile-pic"
                                @click="setAsProfilePicture(gallery.photoId)"
                                v-tooltip.top-center="'Set as profile pic'"
                              >
                                <i class="fa fa-user picture-actions"></i>
                              </a>
                              <a
                                href="javascript:void(0);"
                                class="remove-profile-pic"
                                @click="deletePicture(gallery.photoId)"
                                v-tooltip.top-center="'Remove from gallery'"
                              >
                                <i class="fa fa-remove picture-actions"></i>
                              </a>
                            </div>
                          </div>
                          <div class="col-md-12" v-else>
                            <a href="javascript:void(0);">
                              <img
                                :src="'https://www.ssvmatrimony.org/images' + memberData.photoAlbumEntities[index].image"
                                @click="openGallery(index)"
                                onerror="this.onerror=null;this.src='/images/dummy/noimage.png';"
                              >
                            </a>
                            <div>
                              <a
                                href="javascript:void(0);"
                                class="current-profile-pic"
                              >Current Profile Pic</a>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <span v-else>No images found</span>
                    </div>
                  </div>
                  <!-- Profile Gallery Ends -->
                </div>
                <!-- Profile Right Ends -->
              </div>
              <!-- Personal Info Ends -->
            </div>
            <!-- Tab Content Ends -->
          </div>
        </div>
        <LightBox
          :siteLoading="'/images/dummy/noimage.png'"
          :images="lightBoxImages"
          ref="lightbox"
          :showThumbs="true"
          :show-caption="true"
          :show-light-box="false"
        ></LightBox>
        <!-- Container Ends -->
      </div>

      <!-- Inner Content Ends -->
      <div class="row detailed-info">
        <div class="container">
          <ul class="nav nav-tabs">
            <li class="active">
              <a data-toggle="tab" href="#personal-information">Personal Information</a>
            </li>
            <li>
              <a data-toggle="tab" href="#education-details">Education Details</a>
            </li>
            <li>
              <a data-toggle="tab" href="#family-details">Family Details</a>
            </li>
            <li>
              <a data-toggle="tab" href="#partner-preference">Partner Preference</a>
            </li>
          </ul>

          <div class="tab-content">
            <!-- Tab 1 -->
            <div id="personal-information" class="tab-pane fade in active">
              <!-- Profile Info Starts -->
              <div class="col-md-6 col-sm-6 profile-div">
                <!-- Description -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Description</p>
                  </div>

                  <div class="col-md-12 col-sm-12 col-xs-12">
                    <p class="profile-ans">
                      <span
                        v-if="memberData.personalInfoEntity"
                      >{{ memberData.personalInfoEntity.description }}</span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- alternative phone -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Alternative Phone</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span
                        v-if="Object.keys(memberData.memberDTO).length"
                      >{{ memberData.memberDTO.alternativePhone }}</span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Weight -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Weight</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span
                        v-if="memberData.personalInfoEntity.weight"
                      >{{ memberData.personalInfoEntity.weight }} kg</span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Body Type -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Body Type</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span
                        v-if="memberData.personalInfoEntity.bodyType"
                      >{{ memberData.personalInfoEntity.bodyType.bodyTypeName }}</span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Blood Group -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Blood Group</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span
                        v-if="memberData.personalInfoEntity.bloodGroup"
                      >{{ memberData.personalInfoEntity.bloodGroup.bgType }}</span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Complexion -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Complexion</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span
                        v-if="memberData.personalInfoEntity.complexion"
                      >{{ memberData.personalInfoEntity.complexion.complexionType }}</span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Diet -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Diet</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span
                        v-if="memberData.personalInfoEntity.diet"
                      >{{ memberData.personalInfoEntity.diet.dietType }}</span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Smoke -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Smoke</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span
                        v-if="memberData.personalInfoEntity.smoke"
                      >{{ memberData.personalInfoEntity.smoke.smokeLevel }}</span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-sm-6 profile-div">
                <!-- Drink -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Drink</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span
                        v-if="memberData.personalInfoEntity.drink"
                      >{{ memberData.personalInfoEntity.drink.drinkDesc }}</span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Disability -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Disability</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span
                        v-if="memberData.personalInfoEntity.disability"
                      >{{ memberData.personalInfoEntity.disability.disabilityType }}</span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Interests -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Interests</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span v-if="memberData.personalInfoEntity.interests">
                        <div
                          v-for="interest in memberData.personalInfoEntity.interests"
                          :key="interest.id"
                        >{{ interest.interestName }}</div>
                      </span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Hobbies -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Hobbies</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span v-if="memberData.personalInfoEntity.hobbies">
                        <div
                          v-for="hobby in memberData.personalInfoEntity.hobbies"
                          :key="hobby.id"
                        >{{ hobby.hobbyName }}</div>
                      </span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Birth Country -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Birth Country</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span
                        v-if="memberData.personalInfoEntity.birthCountry"
                      >{{ memberData.personalInfoEntity.birthCountry.countryName }}</span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Birth State -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Birth State</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span
                        v-if="memberData.personalInfoEntity.birthState"
                      >{{ memberData.personalInfoEntity.birthState.stateName }}</span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Birth City -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Birth City</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span
                        v-if="memberData.personalInfoEntity.birthCity"
                      >{{ memberData.personalInfoEntity.birthCity }}</span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Moon Sign -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Moon Sign</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span
                        v-if="memberData.personalInfoEntity.moonSign"
                      >{{ memberData.personalInfoEntity.moonSign.moonSignName }}</span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Star -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Star</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span
                        v-if="memberData.personalInfoEntity.star"
                      >{{ memberData.personalInfoEntity.star.starName }}</span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Gotra -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Gotra</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span
                        v-if="memberData.personalInfoEntity.gotra"
                      >{{ memberData.personalInfoEntity.gotra }}</span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>
                <!-- Profile Info Ends -->
              </div>
            </div>
            <!-- Tab 2 educatinal tab -->
            <div id="education-details" class="tab-pane fade in">
              <!-- Profile Info Starts -->
              <div class="col-md-6 col-sm-6 profile-div">
                <!-- Education Details -->
                <div class="row profile-info" v-if="memberData.educationDTOs.length">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Education Details</p>
                  </div>

                  <div class="col-md-12 col-sm-12 col-xs-12">
                    <p class="profile-ans">
                      <span
                        v-if="memberData.educationDTOs[0].educationDetails"
                      >{{ memberData.educationDTOs[0].educationDetails }}</span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Education Level -->
                <div class="row profile-info" v-if="memberData.educationDTOs.length">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Education level</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span
                        v-if="memberData.educationDTOs[0].educationLevel"
                      >{{ memberData.educationDTOs[0].educationLevel.educationLevelDesc }}</span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Degree -->
                <div class="row profile-info" v-if="memberData.educationDTOs.length">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Degree</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span
                        v-if="memberData.educationDTOs[0].degree"
                      >{{ memberData.educationDTOs[0].degree.degreeName }}</span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Institution -->
                <div class="row profile-info" v-if="memberData.educationDTOs.length">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Institution</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span
                        v-if="memberData.educationDTOs[0].institution"
                      >{{ memberData.educationDTOs[0].institution }}</span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Occupation -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Occupation</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span
                        v-if="memberData.educationDTOs.length"
                      >{{ memberData.educationDTOs[0].occupationName }}</span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Occupation -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Occupation Details</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span
                        v-if="memberData.educationDTOs.length"
                      >{{ memberData.educationDTOs[0].occupationDetails }}</span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Currency -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Currency</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span
                        v-if="memberData.personalInfoEntity.currency"
                      >{{ memberData.personalInfoEntity.currency.currency }}</span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Employer -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Employer</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span
                        v-if="memberData.personalInfoEntity.employer"
                      >{{ memberData.personalInfoEntity.employer }}</span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Annual Income -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Annual Income</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span
                        v-if="memberData.personalInfoEntity.income"
                      >₹ {{ memberData.personalInfoEntity.income }}</span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Profile Info Ends -->

            <!-- Personal Info Ends -->
            <!-- Tab 2 -->
            <div id="family-details" class="tab-pane fade in">
              <!-- Profile Info Starts -->
              <div class="col-md-6 col-sm-6 profile-div">
                <!-- family details -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Family Details</p>
                  </div>

                  <div class="col-md-12 col-sm-12 col-xs-12">
                    <p class="profile-ans">
                      <span
                        v-if="memberData.familyInfoEntity.familyDetails"
                      >{{ memberData.familyInfoEntity.familyDetails }}</span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Family Type -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Family Type</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span
                        v-if="memberData.familyInfoEntity.familyType"
                      >{{ memberData.familyInfoEntity.familyType.familyTypeDesc }}</span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Family Value -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Family Value</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span
                        v-if="memberData.familyInfoEntity.familyValue"
                      >{{ memberData.familyInfoEntity.familyValue.familyValueDesc }}</span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Family Status -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Family Status</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span
                        v-if="memberData.familyInfoEntity.familyStatus"
                      >{{ memberData.familyInfoEntity.familyStatus.familyStatusDesc }}</span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Family Address -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Family Address</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span
                        v-if="memberData.familyInfoEntity.familyAddress"
                      >{{ memberData.familyInfoEntity.familyAddress }}</span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Origin Location -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Origin Location</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span
                        v-if="memberData.familyInfoEntity.orgCity"
                      >{{ memberData.familyInfoEntity.orgCity }},</span>

                      <span
                        v-if="memberData.familyInfoEntity.orgState"
                      >{{ memberData.familyInfoEntity.orgState.stateName }},</span>

                      <span
                        v-if="memberData.familyInfoEntity.orgDistrict"
                      >{{ memberData.familyInfoEntity.orgDistrict }},</span>

                      <span
                        v-if="memberData.familyInfoEntity.orgCountry"
                      >{{ memberData.familyInfoEntity.orgCountry.countryName }}</span>
                    </p>
                  </div>
                </div>
              </div>
              <!-- Profile Info Ends -->
              <!-- Profile Info Starts -->
              <div class="col-md-6 col-sm-6 profile-div">
                <!-- Father name -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Father Name</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span
                        v-if="memberData.familyInfoEntity.fatherName"
                      >{{ memberData.familyInfoEntity.fatherName }}</span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Father Occupation -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Father Occupation</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span
                        v-if="memberData.familyInfoEntity.fatherOccupation"
                      >{{ memberData.familyInfoEntity.fatherOccupation.occupationName }}</span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Father Occupation Details -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Father Occupation Details</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span
                        v-if="memberData.familyInfoEntity.fatherOccupationDetails"
                      >{{ memberData.familyInfoEntity.fatherOccupationDetails }}</span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Mother name -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Mother Name</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span
                        v-if="memberData.familyInfoEntity.motherName"
                      >{{ memberData.familyInfoEntity.motherName }}</span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Mother Occupation -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Mother Occupation</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span
                        v-if="memberData.familyInfoEntity.motherOccupation"
                      >{{ memberData.familyInfoEntity.motherOccupation.occupationName }}</span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Mother Occupation Details -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Mother Occupation Details</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span
                        v-if="memberData.familyInfoEntity.motherOccupationDetails"
                      >{{ memberData.familyInfoEntity.motherOccupationDetails }}</span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>
              </div>
              <!-- Profile Info Ends -->
              <!-- Sibling Details -->
              <div class="col-md-12 col-sm-12 sibling-profile">
                <div class="row profile-info">
                  <div class="col-md-3 col-sm-3 col-xs-12">
                    <p class="profile-que">Sibling Details</p>
                  </div>

                  <table
                    v-if="memberData.siblingEntity"
                    class="col-md-9 col-sm-9 col-xs-12 sibling-data"
                  >
                    <tr>
                      <th>Gender</th>
                      <th>Relationsip</th>
                      <th>Marital Status</th>
                      <th>Occupation</th>
                    </tr>

                    <tr v-for="sibling in memberData.siblingEntity" :key="sibling.id">
                      <td v-if="sibling.gender">{{ sibling.gender }}</td>
                      <td v-else>-</td>

                      <td v-if="sibling.siblingRelation">{{ sibling.siblingRelation }}</td>
                      <td v-else>-</td>

                      <td v-if="sibling.maritalStatus">{{ sibling.maritalStatus.msName }}</td>
                      <td v-else>-</td>

                      <td v-if="sibling.occupation">{{ sibling.occupation.occupationName }}</td>
                      <td v-else>-</td>
                    </tr>
                  </table>

                  <span v-else class="col-md-9 col-sm-9 col-xs-12">Not Mentioned</span>
                </div>
              </div>
            </div>
            <!-- Family Detail Ends -->
            <!-- Tab 3 -->
            <div id="partner-preference" class="tab-pane fade in">
              <!-- Profile Info Starts -->
              <div class="col-md-6 col-sm-6 profile-div">
                <!-- Expectations -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Expectations</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span
                        v-if="memberData.partnerPrefEntity.expectation"
                      >{{ memberData.partnerPrefEntity.expectation }}</span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Min Age -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Min Age</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span
                        v-if="memberData.partnerPrefEntity.minAge"
                      >{{ memberData.partnerPrefEntity.minAge }} years</span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Max Age -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Max Age</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span
                        v-if="memberData.partnerPrefEntity.maxAge"
                      >{{ memberData.partnerPrefEntity.maxAge }} years</span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Min Height -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Min Height</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span
                        v-if="memberData.partnerPrefEntity.minHeight"
                      >{{ inFeet(memberData.partnerPrefEntity.minHeight) }}</span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Max Height -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Max Height</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span
                        v-if="memberData.partnerPrefEntity.maxHeight"
                      >{{ inFeet(memberData.partnerPrefEntity.maxHeight) }}</span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Min Salary -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Min Salary</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span
                        v-if="memberData.partnerPrefEntity.minSalary"
                      >₹ {{ memberData.partnerPrefEntity.minSalary }}</span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Max Salary -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Max Salary</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span
                        v-if="memberData.partnerPrefEntity.maxSalary"
                      >₹ {{ memberData.partnerPrefEntity.maxSalary }}</span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Expectation -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Expectation</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span
                        v-if="memberData.partnerPrefEntity.expectation"
                      >{{ memberData.partnerPrefEntity.expectation }}</span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Body Type -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Body Type</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span v-if="memberData.partnerPrefEntity.bodyTypes">
                        <div
                          v-for="bodytype in memberData.partnerPrefEntity.bodyTypes"
                          :key="bodytype.id"
                        >{{ bodytype.bodyTypeName }}</div>
                      </span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Complexion -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Complexion</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span v-if="memberData.partnerPrefEntity.complexions">
                        <div
                          v-for="complexion in memberData.partnerPrefEntity.complexions"
                          :key="complexion.id"
                        >{{ complexion.complexionType }}</div>
                      </span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Diet -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Diet</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span v-if="memberData.partnerPrefEntity.dietTypes">
                        <div
                          v-for="diettype in memberData.partnerPrefEntity.dietTypes"
                          :key="diettype.id"
                        >{{ diettype.dietType }}</div>
                      </span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Smoke -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Smoke</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span v-if="memberData.partnerPrefEntity.smokeTypes">
                        <div
                          v-for="smoketype in memberData.partnerPrefEntity.smokeTypes"
                          :key="smoketype.id"
                        >{{ smoketype.smokeLevel }}</div>
                      </span>
                      <span v-else>-</span>
                    </p>
                  </div>
                </div>

                <!-- Drink -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Drink</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span v-if="memberData.partnerPrefEntity.drinkTypes">
                        <div
                          v-for="drinktype in memberData.partnerPrefEntity.drinkTypes"
                          :key="drinktype.id"
                        >{{ drinktype.drinkDesc }}</div>
                      </span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Marital Status -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Marital Status</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span v-if="memberData.partnerPrefEntity.maritalStatuses">
                        <div
                          v-for="maritalstatus in memberData.partnerPrefEntity.maritalStatuses"
                          :key="maritalstatus.id"
                        >{{ maritalstatus.msName }}</div>
                      </span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>
              </div>
              <!-- Profile Info Ends -->
              <!-- Profile Info Starts -->
              <div class="col-md-6 col-sm-6 profile-div">
                <!-- Language -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Languages</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span v-if="memberData.partnerPrefEntity.languages">
                        <div
                          v-for="languages in memberData.partnerPrefEntity.languages"
                          :key="languages.id"
                        >{{ languages.languageName }}</div>
                      </span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Religion -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Religion</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span v-if="memberData.partnerPrefEntity.religions">
                        <div
                          v-for="religions in memberData.partnerPrefEntity.religions"
                          :key="religions.id"
                        >{{ religions.religionName }}</div>
                      </span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Cast -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Cast</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span v-if="memberData.partnerPrefEntity.casts">
                        <div
                          v-for="casts in memberData.partnerPrefEntity.casts"
                          :key="casts.id"
                        >{{ casts.castName }}</div>
                      </span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Sub Cast -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Sub Cast</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span v-if="memberData.partnerPrefEntity.subCasts">
                        <div
                          v-for="subcast in memberData.partnerPrefEntity.subCasts"
                          :key="subcast.id"
                        >{{ subcast.subCastName }}</div>
                      </span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Education -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Education</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span v-if="memberData.partnerPrefEntity.educationLevels">
                        <div
                          v-for="education in memberData.partnerPrefEntity.educationLevels"
                          :key="education.id"
                        >{{ education.educationLevelDesc }}</div>
                      </span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Degrees -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Degree</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span v-if="memberData.partnerPrefEntity.degrees">
                        <span
                          v-for="degree in memberData.partnerPrefEntity.degrees"
                          :key="degree.id"
                        >{{ degree.degreeName }}</span>
                      </span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Occupations -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Occupations</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span v-if="memberData.partnerPrefEntity.occupations">
                        <span
                          v-for="occupation in memberData.partnerPrefEntity.occupations"
                          :key="occupation.id"
                        >
                          <span
                            v-if="Object.keys(occupation).length"
                          >{{ occupation.occupationName }}</span>
                        </span>
                      </span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- State -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">State</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span v-if="memberData.partnerPrefEntity.states">
                        <div
                          v-for="state in memberData.partnerPrefEntity.states"
                          :key="state.id"
                        >{{ state.stateName }}</div>
                      </span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>

                <!-- Country -->
                <div class="row profile-info">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-que">Country</p>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <p class="profile-ans">
                      <span v-if="memberData.partnerPrefEntity.countries">
                        <div
                          v-for="countries in memberData.partnerPrefEntity.countries"
                          :key="countries.id"
                        >{{ countries.countryName }}</div>
                      </span>
                      <span v-else>Not Mentioned</span>
                    </p>
                  </div>
                </div>
              </div>
              <!-- Profile Info Ends -->
            </div>
            <!-- Partner Info Ends -->
          </div>
          <!-- Tab Content Ends -->
          <a :href="'mailto:'+emailInfo" ref="emailInfo" target="_blank" v-show="false">email</a>
          <a :href="'tel:'+phoneInfo" ref="phoneInfo" target="_blank" v-show="false">telephone</a>
          <a :href="fblinkInfo" ref="fblinkInfo" target="_blank" v-show="false">telephone</a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Vue from "vue";
import LightBox from "vue-image-lightbox";
import { mapGetters, mapActions } from "vuex";
import VTooltip from "v-tooltip";
import Swal from "sweetalert2";

Vue.use(VTooltip);

export default {
  name: "SingleProfile",
  data() {
    return {
      msg: "This is a button.",
      heightoptions: [
        { heightId: "48", heightDesc: "4 ft 0 in" },
        { heightId: "49", heightDesc: "4 ft 1 in" },
        { heightId: "50", heightDesc: "4 ft 2 in" },
        { heightId: "51", heightDesc: "4 ft 3 in" },
        { heightId: "52", heightDesc: "4 ft 4 in" },
        { heightId: "53", heightDesc: "4 ft 5 in" },
        { heightId: "54", heightDesc: "4 ft 6 in" },
        { heightId: "55", heightDesc: "4 ft 7 in" },
        { heightId: "56", heightDesc: "4 ft 8 in" },
        { heightId: "57", heightDesc: "4 ft 9 in" },
        { heightId: "58", heightDesc: "4 ft 10 in" },
        { heightId: "59", heightDesc: "4 ft 11 in" },
        { heightId: "60", heightDesc: "5 ft 0 in" },
        { heightId: "61", heightDesc: "5 ft 1 in" },
        { heightId: "62", heightDesc: "5 ft 2 in" },
        { heightId: "63", heightDesc: "5 ft 3 in" },
        { heightId: "64", heightDesc: "5 ft 4 in" },
        { heightId: "65", heightDesc: "5 ft 5 in" },
        { heightId: "66", heightDesc: "5 ft 6 in" },
        { heightId: "67", heightDesc: "5 ft 7 in" },
        { heightId: "68", heightDesc: "5 ft 8 in" },
        { heightId: "69", heightDesc: "5 ft 9 in" },
        { heightId: "70", heightDesc: "5 ft 10 in" },
        { heightId: "71", heightDesc: "5 ft 11 in" },
        { heightId: "72", heightDesc: "6 ft 0 in" },
        { heightId: "73", heightDesc: "6 ft 1 in" },
        { heightId: "74", heightDesc: "6 ft 2 in" },
        { heightId: "75", heightDesc: "6 ft 3 in" },
        { heightId: "76", heightDesc: "6 ft 4 in" },
        { heightId: "77", heightDesc: "6 ft 5 in" }
      ]
    };
  },
  components: {
    LightBox
  },

  computed: {
    ...mapGetters("Profile", [
      "memberData",
      "loading",
      "noImage",
      "lightBoxImages"
    ]),
    ...mapGetters("SocialConnects", ["fblinkInfo", "emailInfo", "phoneInfo"]),
    member: {
      get() {
        return this.memberData;
      },
      set() {}
    },
    memberShipAvailable: {
      get() {
        return (
          this.$store.getters.getMyData.membershipDaysLeft > 0 &&
          this.$store.getters.getMyData.contactsLeft > 0
        );
      }
    },
    profilePic: {
      get() {
        let profileImage = this.memberData.photoAlbumEntities.find(gallery => {
          return gallery.isProfilePic == "Y";
        });

        if (profileImage) {
          return "https://www.ssvmatrimony.org/images/" + profileImage.image;
        }
        return "/images/dummy/noimage.png";
      },
      set() {}
    },
    ifLoggedInMember() {
      return (
        this.memberData.memberDTO.memberId == this.$store.getters.getMyMemberId
      );
    },

    ifConnectionAllowed() {
      // if membership and packages have not expired, allow connections
      return (
        this.$store.getters.getIfMyContactsLeft &&
        !this.$store.getters.getIfMyPackageExpired
      );
    },

    isShortListed() {
      return false;
    },
    memberHeight() {
      let height = this.heightoptions.find(height => {
        return height.heightId == this.memberData.personalInfoEntity.height;
      });
      if (height) return height.heightDesc;
      return "Not Mentioned";
    }
  },

  created() {
    let memberId = this.$route.params.id;
    this.viewProfile(memberId);
  },
  methods: {
    ...mapActions("Profile", [
      "viewProfile",
      "setProfilePicture",
      "removePicture"
    ]),
    ...mapActions("SocialConnects", [
      "fetchFacebookLink",
      "fetchEmail",
      "fetchPhoneInfo"
    ]),
    getPhoneNumber() {
      this.fetchPhoneInfo(this.$route.params.id).then(response => {
        let htmlData = "Primary Number: " + response.primaryPhone + "<br>";
        if (response.alternativePhone) {
          htmlData += "Alternate Number " + response.alternativePhone;
        }
        Swal.fire({
          title: "Contact Info",
          html: htmlData,
          type: "info",
          showCancelButton: false,
          confirmButtonText: "Ok"
        });
      });
    },
    getEmail() {
      this.fetchEmail(this.$route.params.id).then(response => {
        if (response) {
          let htmlData = "Email Address: " + response.emailId + "<br>";
          Swal.fire({
            title: "Email Info",
            html: htmlData,
            type: "info",
            showCancelButton: false,
            confirmButtonText: "Ok"
          });
        }
      });
    },
    getFblink() {
      this.fetchFacebookLink(this.$route.params.id).then(response => {
        if (response) {
          let htmlData = "Facebook Link: " + response.facebook + "<br>";
          Swal.fire({
            title: "Facebook Info",
            html: htmlData,
            type: "info",
            showCancelButton: false,
            confirmButtonText: "Ok"
          });
        }
      });
    },
    //edit profile call
    editProfile() {
      this.$router.push("/edit-profile");
    },
    openGallery(index) {
      this.$refs.lightbox.showImage(index);
    },
    setAsProfilePicture(photoid) {
      this.setProfilePicture(photoid)
        .then(() => {
          this.viewProfile(this.memberData.memberDTO.memberId);
        })
        .catch(() => {});
    },
    deletePicture(photoid) {
      Swal.fire({
        title: "Are you sure?",
        text: "You will not be able to recover this image!",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, keep it"
      }).then(result => {
        if (result.value) {
          this.removePicture(photoid)
            .then(() => {
              this.viewProfile(this.memberData.memberDTO.memberId);
            })
            .catch(() => {});
        }
      });
    },
    //unlist call
    unlistProfile() {
      this.$store
        .dispatch("unlistProfile", this.memberData.memberDTO.memberId)
        .then(() => {});
    },
    // shortlist call
    shortlistProfile() {
      this.$store
        .dispatch("shortlistProfile", this.memberData.memberDTO.memberId)
        .then(() => {});
    },
    inFeet(heightId) {
      let height = this.heightoptions.find(height => {
        return height.heightId == heightId;
      });
      if (height) return height.heightDesc;
      return "Not Mentioned";
    }
  }
};
</script>
