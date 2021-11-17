<template>
  <div class="intro">
    <div class="video">
      <video class="video__media" src="../assets/new.mp4" autoplay muted loop></video>
    </div>
    <div class="intro__content">
      <div class="container">
        <img class="intro__img" src="../assets/logofinal.png" alt="">

        <div>
          <span>About Us</span>
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
  </div>
    <section class="content">
      <div class="content__same">
        <hr>
        <div class="content__same-title">
          <p>SAME-DAY PHONE CONSULTS</p>
          <span>BOOK ONLINE WITH DR. SIDI SALAMI</span>
        </div>
        <div class="additional">
          <div class="additional__img">
            <img class="additional__img-magazine" src="../assets/magazine.jpg" alt="">
          </div>
          <div class="wrapper">
            <!-- Контент -->
            <a href="" class="wave-btn">
              <span class="wave-btn__text"> BOOK ONLINE</span>
              <span class="wave-btn__waves"></span>
            </a>
          </div>
        </div>
        <hr>
        <div class="content__same-title">
          <p>LOCATED IN THE HEART OF DOWNTOWN TORONTO</p>
          <span>NORTHWEST CORNER OF YONGE & LAKESHORE
1 BLOCK SOUTH OF UNION STATION</span>
        </div>
        <hr>
        <div class="map">
          <iframe class="map__near" src="https://www.google.com/maps/d/u/0/embed?mid=1BPzqllK1PHh6z2eBFakYewnxqBrquc1W" width="640" height="480"></iframe>
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
        <q-parallax>
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
            <p>BOOKED SAME DAY APPOINTMENTS AVAILABLE</p>
          </div>

          <div>
            <div class="wrapper">
              <!-- Контент -->
              <a href="" class="wave-btn">
                <span class="wave-btn__text">OUR doctors</span>
                <span class="wave-btn__waves"></span>
              </a>
            </div>

            <div class="wrapper">
              <a href="" class="wave-btn">
                <span class="wave-btn__text">Book an appointment</span>
                <span class="wave-btn__waves"></span>
              </a>
            </div>
          </div>
        </div>

        <div class="parallax">
          <div class="q-pa-md">
            <q-parallax>
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
              <p>SERVICES</p>
              <hr>
              <div class="service__directions__list">
                <div class="service__directions__list-list1">
                  <span>FAMILY MEDICINE</span>
                  <span>BOOKED WALK-INS</span>
                  <span>PEDIATRICS</span>
                </div>

                <div class="service__directions__list-list1">
                  <span>TRAVEL MEDICINE</span>
                  <span>WEIGHT MANAGEMENT</span>
                  <span>PHYSIOTHERAPY</span>
                </div>
              </div>

            </div>
          </div>
        </div>




</div>

      </div>

  </section>


</template>

<script>
  export default {
    name: "Main"
  }
</script>

<style scoped>
  .q-parallax{
    height: 1000px!important;
  }

</style>
