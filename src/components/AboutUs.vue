<template>
  <div class="about">
    <Header />
  <div class="about__main">
    <div class="about__main-title">
      <h1>ABOUT WELLONE</h1>
      <hr>
    </div>

    <div class="about__column">
      <div class="about__column-list">
        <h2>OUR CLINIC</h2>
        <p>WellOne Medical Centre is a large medical facility situated in the heart of downtown Toronto. Conveniently located near the financial district (including the First Canadian Place and the RBC Royal Bank Plaza), Union Station, Air Canada Centre and the Harbour Front, WellOne makes it easy to stay healthy without disrupting your daily routine.</p>
      </div>
      <div class="about__column-list">
        <h2>OUR PHILOSOPHY</h2>
        <p>Providing care that is respectful of and responsive to individual patient preferences, needs, and values, and ensuring that patient values guide all clinical decisions. At WellOne Medical Centre patient-centered care is one of the overreaching goals of health advocacy, in addition to greater patient involvement in healthcare delivery and design.</p>
      </div>
    </div>

  </div>

  <div class="policies">
    <div class="policies__btn">
      <div class="wrapper">
        <!-- Контент -->
        <a href="" class="wave-btn">
          <span class="wave-btn__text">CLINIC POLICIES</span>
          <span class="wave-btn__waves"></span>
        </a>
      </div>
    </div>
    <hr>
      <div class="q-pa-md">
        <q-carousel
          animated
          v-model="slide"
          arrows
          navigation
          infinite
        >
          <q-carousel-slide :name="1" img-src="https://images.squarespace-cdn.com/content/v1/564ccea3e4b078b5e5d23184/1448660004394-KAFWQVNDFR4OZF4IED71/Reception.jpg?format=2500w" />
          <q-carousel-slide :name="2" img-src="	https://images.squarespace-cdn.com/content/v1/564ccea3e4b078b5e5d23184/1448660003139-4NHKXLPJGKO2GXVEY7Y7/IMG_1234+%281%29.jpg?format=500w" />
          <q-carousel-slide :name="3" img-src="https://images.squarespace-cdn.com/content/v1/564ccea3e4b078b5e5d23184/1448660003344-PH1HCBS6VOW5UQKMSAC0/IMG_1190+%281%29.jpg?format=1500w" />
          <q-carousel-slide :name="4" img-src="https://images.squarespace-cdn.com/content/v1/564ccea3e4b078b5e5d23184/1448660002399-XZ27D2PH45QVJJAESQHS/IMG_1174.jpg?format=1500w" />
        <q-carousel-slide :name="5" img-src="https://images.squarespace-cdn.com/content/v1/564ccea3e4b078b5e5d23184/1448660001211-FNBEUSSZ70Y0K7LEFJRM/examroom.jpg?format=2500w" />
          <q-carousel-slide :name="6" img-src="https://images.squarespace-cdn.com/content/v1/564ccea3e4b078b5e5d23184/1448660001669-6OCSDLUHMC0CIM3Y0IY6/IMG_1105.jpg?format=1500w" />
          <q-carousel-slide :name="7" img-src="https://images.squarespace-cdn.com/content/v1/564ccea3e4b078b5e5d23184/1448660001819-D28B2EBP7OFYYWUTDJVO/IMG_1162.jpg?format=500w" />
          <q-carousel-slide :name="8" img-src="https://images.squarespace-cdn.com/content/v1/564ccea3e4b078b5e5d23184/1448660002428-1T3K0CSZRZ3QOZW0BYQ4/IMG_1184.jpg?format=500w" />
          <q-carousel-slide :name="9" img-src="https://images.squarespace-cdn.com/content/v1/564ccea3e4b078b5e5d23184/1448660003584-IW6MMJW47WI6DD0O1DYE/IMG_1346+%282%29.jpg?format=500w"/>
        </q-carousel>
      </div>
  </div>
    <Footer/>
</div>
</template>

<script>
  import Footer from "./Footer";
  import { ref } from 'vue'
  import Header from "./Header";
    export default {
        name: "AboutUs",
      components: {
        Footer,
          Header
      },
      setup () {
        return {
          slide: ref(1)
        }
      }
    }
</script>

<style scoped>
  .q-pa-md{
    position: relative!important;
    overflow: hidden!important;
    height: 100%!important;
  }

</style>
