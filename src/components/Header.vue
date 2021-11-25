<template>
  <div class="intro__content">
    <div class="container">
      <img class="intro__img" src="../assets/logofinal.png" alt="">
      <div>
        <span @click="AboutUs">About Us</span>
        <span>Our Doctors</span>
        <span>Services</span>
        <span>Fees</span>
        <span>Education</span>
        <span>Online Booking</span>
        <span>Payments</span>
        <span>Patient Portal</span>
        <span>News</span>
        <span>Contact Us</span>

      </div>
    </div>


  </div>
</template>

<script>
    export default {
        name: "Header",
      methods:{
         AboutUs(){
           this.$router.push("/aboutus")
         }
      }
    }
</script>

<style scoped>

</style>
