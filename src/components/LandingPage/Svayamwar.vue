<template>
  <!-- Upcoming Svayamwars Starts -->
  <section class="svayamwar-listing">
    <div class="container">
      <h1 class="section-title">Upcoming Syamvars</h1>
      <div class="row">
        <!-- Events Starts -->
        <div class="col-md-4 col-sm-4" v-for="events in eventsJson" :key="events.id">
          <div class="card">
            <img src="/images/dummy/svayamwar.jpg">
            <div class="svyamwar-block">
              <h4>{{ events.eventType }}</h4>
              <h5>{{ events.eventDate }} | {{ events.eventDate }}</h5>
              <p>{{ events.eventDesc }}</p>
              <a href="#" class="btn enroll-now">Enroll Now</a>
            </div>
          </div>
        </div>
        <!-- Events End -->
      </div>
    </div>
  </section>
  <!-- Upcoming Svayamwars Ends -->
</template>

<script>
import eventsData from "../../assets/json/homepage/SsvEvent.json";

export default {
  data() {
    return {
      eventsJson: eventsData
    };
  }
};
</script>