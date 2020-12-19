<template>
  <div class="footer-area">
    <div class="main-footer-area">
      <div class="container">
        <div class="row pt-3">
          <div class="footer-logo">
            <div id="logo">
              <h2
                className="textLogo"
                style="color: aliceblue; padding-right: 15px; padding-left: 15px;"
              >
                Блог N 1
              </h2>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4">
            <div class="footer-widget-area mt-80"></div>
          </div>

          <div class="col-12 col-sm-6 col-lg-2">
            <div class="footer-widget-area mt-80"></div>
          </div>

          <div class="col-12 col-sm-4 col-lg-2">
            <div class="footer-widget-area mt-80"></div>
          </div>

          <div class="col-12 col-sm-4 col-lg-2">
            <div class="footer-widget-area mt-80"></div>
          </div>

          <div class="col-12 col-sm-4 col-lg-2">
            <div class="footer-widget-area mt-80"></div>
          </div>
        </div>
        <p class="copyright">Copyright © Pereselkov CRM-2020</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style>
.textLogo {
  font-family: Georgia, "Times New Roman", Times, serif;
  color: "white";
  text-transform: "uppercase";
}
.footer-area {
  width: 100%;
  margin-right: 0;
  margin-left: 0;
  background-color: #02031c;
  margin-bottom: 0%;
}
.footer-widget-area {
  position: relative;
  z-index: 1;
}
.footer-logo {
  margin-bottom: 30px;
}
.main-footer-area {
  margin: 0;
  padding: 0;
}
</style>
