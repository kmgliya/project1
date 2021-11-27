<template>
  <div class="intro__content">
    <div class="container">
      <router-link to="/main">
        <img class="intro__img" src="../assets/logofinal.png" alt="">
      </router-link>
      <div>
        <span @click="AboutUs">About Us</span>
        <span @click="OurDoctors">Our Doctors</span>
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
         },
        OurDoctors(){
           this.$router.push("/ourdoctors")
        }
      }
    }
</script>

<style scoped>

</style>
