<template>
  <Header style="background: #171717;"
  />

  <div class="main">
    <h1>FLU SHOTS 2020</h1>
    <span>October 21, 2020</span>
  </div>

  <div class="news">
    <div class="news__title">
      <h2>FLU SHOTS WILL BE BY APPOINTMENT ONLY
        NO WALK-INS</h2>
      <br>
      <h2>FLU SHOT BOOKING INSTRUCTIONS</h2>
      <br>
      <p>In order to comply with covid-19 public health measures, we must limit the number of people in the clinic.</p>
      <br>
      <h3> To ensure our mutual safety we ask that you read and follow the below instructions. </h3>
      <br>
      <ul>
        <li>After you submit your request, you will receive a notification to confirm submission. Once it has been reviewed and approved by our front desk you will receive another notification.</li>
        <li>Please make sure you read the second notification clearly as we might have to adjust your appointment time by 10 - 30 minutes depending on clinic traffic.</li>
        <li>On the morning of your appointment, you will receive an email containing an electronic COVID screening questionnaire as well as the consent form for the flu shot. This email will come from our secure online messaging platform with the email address noreply@cognisantmd.com. If you don’t receive this email by 9 AM on the day of your appointment, please email us.</li>
        <li>This e-form MUST be completed electronically on the day of your appointment, prior to you coming into the clinic. Failure to complete both forms will result in the cancellation of your appointment.</li>
        <li>On the day of your appointment please arrive on time (not early nor late) and wait outside the clinic until you are called in</li>
        <li>Only one person will be let in at a time. We ask that there be no more than one adult per child.</li>
        <li>Masks are required for everyone aged 2 and over entering the clinic.</li>
        <li>Please sanitize hands upon entry to the clinic.</li>
        <li>If you have symptoms of COVID, please stay home and reschedule your appointment.</li>
        <li>We have both regular and high-dose flu vaccines. The high-dose is given for patients 65+.</li>
      </ul>
      <div class="news__covid">
        <div class="news__covid-text">
          <h1>COVID-19   -   NEW CLINIC POLICIES  -  MUST READ</h1>
          <span>July  2, 2020</span>
        </div>

          <img src="../assets/covid.png" alt="">
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
    name: "News",
    components: {
      Header,
      Footer
    },
  }
</script>

<style scoped>

</style>
