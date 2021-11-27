<template>
    <div class="skull">
      <div class="video">
        <video class="video__media" src="../assets/Hospital.mp4" autoplay muted loop></video>
        <Header
          style="position: fixed;z-index: 3"
        />
      </div>
    </div>
  <div class="family">

    <div class="family__main">
      <div class="family__main-title">
        <h1>FAMILY MEDICINE</h1>
        <h2>NOT ACCEPTING PATIENTS FOR FAMILY PRACTICE AT THIS TIME</h2>
        <h3>Check back here for updates.</h3>
        <hr>
      </div>
      <div class="family__doctors">
        <div class="family__doctors-columns">
          <div class="family__text">
            <h2>DR. REYHANEH GHADAKI MD, CCFP</h2>
            <h3>Adjunct Professor - University of Toronto, DFCM</h3>
            <p>Dr. Chen attended medical school in the USA at Chicago Medical School, then returned to Ontario to complete his training in Family Medicine at McMaster University. He enjoys practicing comprehensive family medicine, and is experienced with helping patients of all ages, from newborns to the elderly. He looks forward to working together with his patients to achieve their optimal health, both physically and mentally.</p>
          </div>

          <img src="../assets/doc2.jpg" alt="">
        </div>
        <hr>
        <div class="family__doctors-columns">
          <div class="family__text">

            <h2>DR. RYAN CHEN MD, CCFP</h2>
            <p>Dr. Ghadaki graduated from St Matthews University in the Grand Cayman Islands, and went on to complete her Family Medicine residency at Dalhousie University. She is certified by the College of Family Physicians of Canada and the College of Physicians and Surgeons of Ontario.</p>
          </div>

          <img src="../assets/doc3.jpg" alt="">
        </div>
        <hr>
        <div class="family__doctors-columns">
          <div class="family__text">
            <h2>DR. JEFFREY CHAN MD, CCFP</h2>
            <p>Originally born and raised in Montreal, Quebec, Dr. Chan arrives to Toronto after finishing medical school at McGill University, and completing his Family Medicine residency at McGill as well. Dr. Chan is fluent in English and French. He is looking forward to building a new family practice in downtown Toronto at the WellOne Medical Centre.</p>
          </div>

          <img src="../assets/doc4.jpeg" alt="">
      </div>
        <hr>
        <div class="family__doctors-columns">
          <div class="family__text">
            <h2>DR. MICHELLE HANNA MD, CCFP</h2>
            <p>Dr. Hanna grew up in the GTA with her parents and brother. She later moved to London, Ontario where she attended the University of Western Ontario for both her undergraduate and medical degree. She graduated with a specialization in Pharmacology and Toxicology, and completed her medical degree at the Schulich School of Medicine. After medical school, she returned to the GTA for her Family Medicine residency training at McMaster University.  Dr. Hanna has a keen interest in women’s health and obstetrics, and plans to incorporate this as a major component of her practice.  Most recently, she completed a fellowship in Low Risk Obstetrics through the University of Toronto</p>
          </div>

          <img src="../assets/doc5.jpeg" alt="">
        </div>
        <hr>
        <div class="family__doctors-columns">
          <div class="family__text">
            <h2>DR. NADIRA MOHABIR MD, CCFP</h2>
            <p>Dr. Nadira Mohabir is an experienced family physician and walk-in physician.  She attended medical school at the University of Alberta in her hometown Edmonton.  She then completed a Family Medicine Residency at Toronto Western Hospital in 2009.  She has maintained a strong network of health professional colleagues and an awareness of the resources within Toronto to connect you with.  She is passionate about advocating for your health, the health of our community, and the health of our planet through prevention and education.  To provide the best care to her patients, she enhances her knowledge by attending numerous educational courses. </p>
          </div>

          <img src="../assets/logostart.png" alt="">
        </div>
        <hr>

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
        name: "OurDoctors",
      components: {
        Header,
        Footer
      },
    }
</script>

<style scoped>

</style>
