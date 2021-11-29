<template>
  <Header
    style="position: fixed;z-index: 3"
  />
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
   </div>
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
     <iframe class="map__near" src="https://www.google.com/maps/d/u/0/embed?mid=1BPzqllK1PHh6z2eBFakYewnxqBrquc1W" width="640" height="480"></iframe>
   </div>
   <hr>
   <div class="contacts__number">
     <div class="contacts__number-1">
       <h1></h1>
       <span></span>
     </div>
     <div class="contacts__number-1">
       <h1></h1>
       <span></span>
     </div>
   </div>


 </div>
  <Footer/>

</template>

<script>
  import Header from "./Header";
  import Footer from "./Footer";
  export default {
    name: "Contacts",
    components: {
      Header,
      Footer
    },
  }
</script>

<style scoped>

</style>
