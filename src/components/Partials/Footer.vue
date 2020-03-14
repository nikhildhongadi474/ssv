<template>
  <!-- Footer Starts -->
  <footer>
    <div class="container">
      <div class="row">
        <!-- <div class="col-md-4 col-sm-4">
          <h3>Contact Us</h3>
          <div class="footer-form">
            <form action>
              <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" class="form-control" placeholder="Enter email">
              </div>

              <div class="form-group">
                <label for="pwd">Message</label>
                <textarea class="form-control" rows="5" placeholder="Enter your message here" />
              </div>

              <button type="submit" class="btn btn-red">Submit</button>
            </form>
          </div>
        </div> -->

        <div class="col-md-6 col-sm-6">
          <h3>Help & Support</h3>

          <ul class="footer-links">
            <!-- <li>
              <a href="#">24*7 Live Help</a>
            </li> -->
            <li>
              <router-link to="/about-us">
                About Us
              </router-link>
            </li>
            <li>
              <router-link to="/contact-us">
                Contact Us
              </router-link>
            </li>
            <li>
              <router-link to="/feedback">
                Feedback
              </router-link>
            </li>
            <li>
              <router-link to="/terms-conditions">
                Terms & Conditions
              </router-link>
            </li>
            <li>
              <router-link to="/privacy-policy">
                Privacy Policy
              </router-link>  
            </li>
          </ul>
        </div>

        <div class="col-md-6 col-sm-6">
          <h3>Our Other Services</h3>

          <ul class="footer-links">
            <li>
              <a href="#">Assisted Matrimony</a>
            </li>
            <li>
              <a href="#">Elite matrimony</a>
            </li>
            <li>
              <a href="#">Tumbulya</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="copyright">
          <ul class="social-links">
            <li>
              <a href="#" target="_blank">
                <i class="fa fa-facebook-official" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i class="fa fa-twitter-square" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i class="fa fa-google-plus-square" aria-hidden="true" />
              </a>
            </li>
          </ul>
          <p>Copyright © 2016. All rights reserved</p>
        </div>
      </div>
    </div>
  </footer>
  <!-- Footer Ends -->
</template>