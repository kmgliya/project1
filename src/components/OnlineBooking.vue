<template>
  <div class="head">
    <div class="video">
      <video class="video__media" src="../assets/Hospital.mp4" autoplay muted loop></video>
      <Header
        style="position: fixed;z-index: 3"
      />
    </div>
  </div>


  <div class="book">
<div class="book__main">
  <h1>ONLINE BOOKING PORTAL</h1>
  <hr>
  <div class="book__btn">
    <div class="book__btn-part">
      <div class="wrapper">
      <a href="" class="wave-btn">
        <span class="wave-btn__text">{{$t('OurDoctor')}}</span>
        <span class="wave-btn__waves"></span>
      </a>
    </div>
      <div class="wrapper">
        <a href="" class="wave-btn">
          <span class="wave-btn__text">{{$t('OurDoctor')}}</span>
          <span class="wave-btn__waves"></span>
        </a>
      </div>
    </div>
    <div class="wrapper">
      <a href="" class="wave-btn">
        <span class="wave-btn__text">{{$t('OurDoctor')}}</span>
        <span class="wave-btn__waves"></span>
      </a>
    </div>
  </div>

  <div class="book__update">
    <h2>COVID-19 UPDATE</h2>
    <br>
    <h3>AS PART OF SOCIAL DISTANCING, OUR OFFICE WILL BE "VIRTUAL FIRST" ALL APPOINTMENTS WILL BE TELEMEDICINE/TELEPHONE CONSULTATIONS.</h3>
    <ul>
      <li>We will call you at the time of your appointment</li>
      <li>Please allow for 10 - 15 minute delay</li>
      <li>We may contact you from an 'Unknown/ Blocked caller'</li>
    </ul>
    <br>
    <p>*** If you are unable to book your appointment online or contact us through live chat or through email due to a disability, please call the clinic and select option 8 to leave a voicemail.***</p>
  <hr>
    <h2>FOR CANCELLATIONS PLEASE EMAIL: CANCELLATIONS@WELLONE.CA </h2>
    <strong>To avoid fees, we require 24 hours (1 business day) notice for cancellations of family practice appointments</strong>
    <strong>To avoid fees, we require 48 hours (2 business days) notice for cancellations of specialist appointments including CBT /  Weight Management / Pediatrics</strong>
    <hr>
    <strong>We currently have NO doctors accepting new patients. Please continue to visit our website for updates. </strong>
  </div>
</div>
  </div>
  <Footer/>

</template>

<script>
  import Header from "./Header";
  import Footer from "./Footer";
  export default {
    name: "OnlineBooking",
    components: {
      Header,
      Footer
    },
  }
</script>

<style scoped>

</style>
