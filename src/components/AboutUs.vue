<template>
  <div class="about">
    <Header />
  <div class="about__main">
    <div class="about__main-title">
      <h1>{{$t('AboutW')}}</h1>
      <hr>
    </div>

    <div class="about__column">
      <div class="about__column-list">
        <h2>{{$t('OurClinic')}}</h2>
        <p>{{$t('Routine')}}</p>
      </div>
      <div class="about__column-list">
        <h2>{{$t('Philosophy')}}</h2>
        <p>{{$t('Respect')}}</p>
      </div>
    </div>

  </div>

  <div class="policies">
    <div class="policies__btn">
      <div class="wrapper">
        <a href="" class="wave-btn">
          <span class="wave-btn__text">{{$t('Clinic')}}</span>
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
