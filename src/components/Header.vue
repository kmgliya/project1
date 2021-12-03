<template>
  <div class="intro__content">
    <div class="container">
      <router-link to="/">
        <img class="intro__img" src="../assets/logofinal.png" alt="">
      </router-link>
      <div>
        <span @click="AboutUs">{{$t('About')}}</span>
        <span @click="OurDoctors">{{$t('Doctor')}}</span>
        <span @click="Services">{{$t('Services')}}</span>
        <span @click="Fees">{{$t('Fees')}}</span>
        <span @click="OnlineBooking">{{$t('OnlineBook')}}</span>
        <span>{{$t('Payments')}}</span>
        <span>{{$t('Patient')}}</span>
        <span @click="News">{{$t('News')}}</span>
        <span @click="Contacts">{{$t('Contact')}}</span>
        <div class="q-pa-md">
          <div id="q-app">
            <div class="q-pa-md">
              <q-btn-dropdown  label="LANGUAGES">
                <q-list>
                  <q-item clickable v-close-popup @click="setLocale('en-US')">
                    <q-item-section>
                      <q-item-label>English</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="setLocale('ru-RU')">
                    <q-item-section>
                      <q-item-label>Russian</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
    export default {
        name: "Header",
      setup () {
        return {
          onItemClick () {
            // console.log('Clicked on an Item')
          }
        }
      },
      methods:{
         AboutUs(){
          this.$router.push("/aboutus")
        },
        OurDoctors(){
           this.$router.push("/ourdoctors")
        },
        Contacts(){
          this.$router.push("/contacts")
        },
        Services(){
          this.$router.push("/services")
        },
        News(){
          this.$router.push("/news")
        },
        Fees(){
          this.$router.push("/fees")
        },
        OnlineBooking(){
          this.$router.push("/onlinebooking")
        },
        setLocale(lang){
          this.$i18n.locale = lang
        },

      }
    }
</script>

<style scoped>
.q-app{
  width: 0%!important;
}
</style>
