<template>
  <div class="intro">
    <div class="video">
      <video class="video__media" src="../assets/new.mp4" autoplay muted loop></video>
      <Header
      style="position: fixed;z-index: 3"
      />
    </div>
  </div>
    <section class="content">
      <div class="content__same">
        <hr>
        <div class="content__same-title">
          <p>{{$t('Some')}}</p>
          <span>{{$t('Book')}}</span>
        </div>
        <div class="additional">
          <div class="additional__img">
            <img class="additional__img-magazine" src="../assets/magazine.jpg" alt="">
          </div>
          <div class="wrapper">
            <a href="" class="wave-btn">
              <span class="wave-btn__text">{{$t('Online')}}</span>
              <span class="wave-btn__waves"></span>
            </a>
          </div>
        </div>
        <hr>
        <div class="content__same-title">
          <p>{{$t('Located')}}</p>
          <span>{{$t('Northwest')}}</span>
        </div>
        <hr>
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
        <section class="info">
          <div class="info__card">
            <div class="info__img">
              <img src="../assets/mobile.png" alt="">
            </div>
            <span>647.748.5663</span>
          </div>

            <div class="info__card">
              <div>
                <img src="../assets/local.png" alt="">
              </div>
              <span>18 Yonge Street</span>
            </div>

              <div class="info__card">
                <div>
                  <img src="../assets/time.png" alt="">
                </div>
                <span>Mon-fri : 10am-6pm</span>
          </div>
    </section>
      </div>
    </section>

  <section class="cognition">
    <div class="parallax">
      <div>
        <q-parallax :height="screenHeight">
          <template v-slot:media>
            <img src="../assets/Reception.jpg">
          </template>

          <template v-slot:content="scope">
            <div
              class="absolute column items-center"
              :style="{
            opacity: 0.45 + (1 - scope.percentScrolled) * 0.55,
            top: (scope.percentScrolled * 60) + '%',
            left: 0,
            right: 0

          }"
            >
            </div>
          </template>
        </q-parallax>
      </div>

      <div class="appointments">
        <div class="appointments__text">
          <div class="appointments__text-title">
            <p>{{$t('Appointment')}}</p>
          </div>

          <div>
            <div class="wrapper">
              <a href="" class="wave-btn">
                <span class="wave-btn__text">{{$t('OurDoctor')}}</span>
                <span class="wave-btn__waves"></span>
              </a>
            </div>

            <div class="wrapper">
              <a href="" class="wave-btn">
                <span class="wave-btn__text">{{$t('BookAn')}}</span>
                <span class="wave-btn__waves"></span>
              </a>
            </div>
          </div>
        </div>

        <div class="parallax">
          <div>
            <q-parallax :height="screenHeight">
              <template v-slot:media>
                <img src="../assets/examroom.jpg">
              </template>

              <template v-slot:content="scope">
                <div
                  class="absolute column items-center"
                  :style="{
            opacity: 0.45 + (1 - scope.percentScrolled) * 0.55,
            top: (scope.percentScrolled * 60) + '%',
            left: 0,
            right: 0

          }"
                >
                </div>
              </template>
            </q-parallax>
          </div>
        </div>

        <div class="service">
          <div class="service__guts">
            <div class="service__guts__img">
              <img class="service__guts__img-img1"  src="../assets/pills.jpg" alt="">
              <img class="service__guts__img-img1" src="../assets/girls.jpg" alt="">
              <img class="service__guts__img-img3" src="../assets/thing.jpg" alt="">
            </div>
            <div class="service__directions">
              <p>{{$t('ServicesH')}}</p>
              <hr>
              <div class="service__directions__list">
                <div class="service__directions__list-list1">
                  <span>{{$t('FamilyM')}}</span>
                  <span>{{$t('Walk')}}</span>
                  <span>{{$t('Pediatrics')}}</span>
                </div>

                <div class="service__directions__list-list1">
                  <span>{{$t('Travel')}}</span>
                  <span>{{$t('Weight')}}</span>
                  <span>{{$t('Physiotherapy')}}</span>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div>
          <q-parallax :height="screenHeight">
            <template v-slot:media>
              <img src="../assets/hall.jpg">
            </template>

            <template v-slot:content="scope">
              <div
                class="absolute column items-center"
                :style="{
            opacity: 0.45 + (1 - scope.percentScrolled) * 0.55,
            top: (scope.percentScrolled * 60) + '%',
            left: 0,
            right: 0

          }"
              >
              </div>
            </template>
          </q-parallax>
        </div>
        <div class="final">
          <div class="final__speech">
            <div class="wrapper">
              <a href="" class="wave-btn">
                <span class="wave-btn__text">{{$t('wellOne')}}</span>
                <span class="wave-btn__waves"></span>
              </a>
            </div>
            <hr>
            <div class="final__column">
              <div class="final__column-first">
                <p>{{$t('Review')}}</p>
                <span>— Paul Kozlowski - Google</span>
              </div>
              <div class="final__column-first">
                <p>{{$t('Feedback')}}</p>
                <span>— Mike Taylor - Google</span>
              </div>
              <div class="final__column-first">
                <p>{{$t('information')}}</p>
                <span>— Ljubica D - Google</span>
              </div>
            </div>
          </div>
        </div>
<Footer/>






</div>

      </div>

  </section>


</template>

<script>
  import Footer from "./Footer";
  import Header from "./Header";
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
