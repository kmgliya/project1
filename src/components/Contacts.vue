<template>
 <div class="head">
   <div class="video">
     <video class="video__media" src="../assets/Hospital.mp4" autoplay muted loop></video>
     <Header
       style="position: fixed;z-index: 3"
     />
   </div>
 </div>
  <div class="contacts">
    <div class="contacts__main">
      <div class="contacts__title">
        <h1>HOW TO GET HERE</h1>
        <div class="contacts__title-p">
          <span>{{$t('Contacts')}}</span>
          <span>Toronto. ON M5E 1Z8</span>
        </div>
      </div>
      <hr>

    <div class="contacts__column">
      <div class="contacts__column-pillar">
        <h2>PUBLIC TRANSIT</h2>
        <p>Take transit to Union Station, walk one block East to Yonge St. and then one block South to Lake Shore Blvd. </p>
      </div >
      <div class="contacts__column-pillar">
        <h2>DRIVING</h2>
        <p>We are located at the North West corner of Yonge St. and Lake Shore Blvd. West.</p>
      </div>
      <div class="contacts__column-pillar">
        <h2>PARKING</h2>
        <p>There is a paid visitors parking located underneath our building, entrance on Lake Shore Blvd W. past Yonge St.</p>
      </div>
    </div>
    <div class="map">
      <GoogleMap
        :styles="grey"
        api-key="AIzaSyCi1aT6mir5DnV2Fgo-61NinHCirw_1jIQ"
        style="width: 100%; height: 200px"
        :center="center"
        :zoom="15"
      >
        <Marker :options="{ position: center }" />
      </GoogleMap>
      <!--          <iframe class="map__near" src="https://www.google.com/maps/d/u/0/embed?mid=1BPzqllK1PHh6z2eBFakYewnxqBrquc1W" width="640" height="480"></iframe>-->
    </div>
    <hr>
    <div class="contacts__number">
      <div class="contacts__number-1">
        <h1>PHONE NUMBER</h1>
        <span>647.748.5663</span>
      </div>
      <div class="contacts__number-1">
        <h1>FAX NUMBER</h1>
        <span>647.740.7166</span>
      </div>
    </div>
      <div class="registrtered">
        <div class="registrtered__start">
          <p>Email Address *</p>
          <input type="email" v-model="email" placeholder="Введите email" name="email">
        </div>
          <div class="registrtered__start">
          <p>Subject *</p>
          <input type="subject" v-model="subject" placeholder="Введите subject" name="subject">
        </div>
        <div class="registrtered__start">
          <p>Message *</p>
        </div>
        <div class="registrtered__start">
          <span>Note: THIS IS NOT A SECURED NETWORK. Please DO NOT DISCLOSE ANY PERSONAL MEDICAL INFORMATION.</span>
          <input type="message" v-model="message" name="message">
        </div>


      </div>

  </div>
  </div>
  <Footer/>

</template>

<script>
  import Header from "./Header";
  import Footer from "./Footer";
  import { GoogleMap, Marker,grey } from 'vue3-google-map'
  export default {
    name: "Main",
    components: {
      Footer,
      Header,
      GoogleMap,
      Marker
    },
    data() {
      return{
        grey: grey,
        email: '',
        subject: '',
        message: '',

        center: {lat: 51.093048, lng: 6.842120},
        markers: [
          {
            position: {
              lat: 51.093048, lng: 6.842120
            },
          }
          , // Along list of clusters
        ]
      }
    },
    computed:{
      screenHeight: ()=> screen.height
    }
  }
</script>

<style scoped>

</style>
