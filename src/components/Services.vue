<template>
  <div class="head">
    <div class="video">
      <video class="video__media" src="../assets/Hospital.mp4" autoplay muted loop></video>
      <Header
        style="position: fixed;z-index: 3"
      />
    </div>
  </div>

  <div class="services">
    <div class="services__main">
      <div class="services__title">
        <div class="services__title-part">
          <h1>FAMILY MEDICINE</h1>
          <div class="wrapper">
            <a href="" class="wave-btn">
              <span class="wave-btn__text">Get to know our doctors</span>
              <span class="wave-btn__waves"></span>
            </a>
          </div>
        </div>

        <hr>
        <div class="services__title-part">
          <h1>ONE MISSION</h1>
          <p>Our focus is ensuring you receive evidence-based medical treatment.
            Our mission is helping you obtain your individualized healthcare goals.
            We believe in the importance of fostering a strong patient-doctor relationship.
            Together, utilizing a team based approach, we strive to have one vision, one goal, your optimal health.</p>
        </div>
      </div>
      <div class="services__faq">
        <h2>FAQ</h2>
        <div class="services__faq-text">
            <strong>How do I register for a family physician and book appointments?</strong>
          <p>We are currently NOT accepting new patients.</p>
          <br>
          <p>At WellOne Medical Centre, we believe in the importance of having a family doctor that you can trust and feel comfortable with.
            <br>This is why we start with an initial meet and greet appointment where you and the doctor can get acquainted. </p>
          <br>
          <strong>How can I communicate with my physician?</strong>
          <p>In order to ensure your privacy, we ask that all communications with physicians be done in an appointment setting.
            The physicians will not accept or respond to personal emails, text messages, etc.</p>
          <br>
          <strong>How should I follow- up regarding my test results?</strong>
          <p>Never assume that no news is good news.  In the event that you are not contacted for a follow-up appointment within two weeks of completing your test, please call us to book a follow-up with your doctor.</p>
          <br>
          <strong>Can I get my test results over the phone?</strong>
          <p>In order to protect your confidentiality, results will NOT be discussed over the phone by any of our clinic staff. Please book a follow-up appointment to thoroughly discuss your results with the doctor.</p>
          <br>
          <strong>Cancellation Policy</strong>
          <p>If a booked appointment needs to be cancelled or rescheduled it must be done at least 24 business hours in advance, by phone or in person, with a live individual. Answering machine messages will not be accepted. Cancellations less than 24 hours may be subject to a late cancellation fee, depending on the type of appointment.</p>
          <br>
          <strong>Late Appointment Policy</strong>
          <p>If a patient is more than 5 minutes late for a 15 minute appointment, 10 minutes late for a 30 minute appointment, or 20 minutes late for 45+ minute appointment - that constitutes a missed appointment and the appropriate fee will apply.</p>
          <br>
          <strong>OHIP Policy</strong>
          <p>A valid health card is required for all OHIP visits. If your health card is invalid or expired, a fee will be charged, which may later be reimbursed with the proper valid documentation.</p>
          <hr>
          <span>For more information please email patients@wellone.ca</span>
        </div>

      </div>
    </div>

  </div>
      <Footer/>



</template>

<script>
  import { ref } from 'vue'
  import Header from "./Header";
  import Footer from "./Footer";
  export default {
    name: "Services",
    components: {
      Header,
      Footer
    },
  }
</script>

<style scoped>

</style>
