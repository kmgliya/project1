<template>
  <Header style="background: #171717;"
  />

  <div class="fees">
    <div class="fees__main">
      <div class="fees__column">
        <div class="fees__column-row">
            <h1>ONE-ON-ONE PHYSIOTHERAPY</h1>
          <span>Initial Assessment and Treatment
$110</span>
          <br>
          <span>Follow-up
$75</span>
        </div>
        <div class="fees__column-row">
            <h1>ONE-ON-ONE PHYSIOTHERAPY</h1>
          <span>Initial Assessment and Treatment
$150</span>
          <br>
          <span>Follow-up
$100</span>
        </div>
      </div>
      <div class="fees__poor">
        <h1>PRODUCTS / SERVICES</h1>
        <span>Laser Therapy Only
$60</span>
        <br>
        <span>Compression Stockings</span>
        <p>Knee High / Thigh High / Pantyhose</p>
        <span>$160 / $200 / $200</span>
        <br>
        <span>Orthotics
$450</span>
        <br>
        <span>Custom Braces</span>
        <p>Variable</p>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<script>
  import Header from "./Header";
  import Footer from "./Footer";
  export default {
    name: "News",
    components: {
      Header,
      Footer
    },
  }
</script>

<style scoped>

</style>
