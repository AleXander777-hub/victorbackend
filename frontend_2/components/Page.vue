<template>
  <div>
    <div>
      <div class="container mt-5 mb-3">
        <div class="row ml-auto">
          <div class="col-12 col-lg-8">
            <div class="col-12 col-lg-4 mt-5">
              <div class="popular-news-widget">
                <h3 class="mt-2">Категории</h3>

                <div class="single-popular-post">
                  <a href="/filtered/Politics/1" style="text-decoration: none;">
                    <h5 style="color: black !important;">Политика</h5>
                  </a>
                </div>

                <div class="single-popular-post">
                  <a href="/filtered/World/1" style="text-decoration: none;">
                    <h5 style="color: black !important;">В мире</h5>
                  </a>
                </div>
                <div class="single-popular-post">
                  <a href="/filtered/Economy/1" style="text-decoration: none;">
                    <h5 style="color: black !important;">Экономика</h5>
                  </a>
                </div>
                <div class="single-popular-post">
                  <a href="/filtered/Society/1" style="text-decoration: none;">
                    <h5 style="color: black !important;">Общество</h5>
                  </a>
                </div>
                <div class="single-popular-post">
                  <a
                    href="/filtered/Incidents/1"
                    style="text-decoration: none;"
                  >
                    <h5 style="color: black !important;">Происшествия</h5>
                  </a>
                </div>
                <div class="single-popular-post">
                  <a href="/filtered/Army/1" style="text-decoration: none;">
                    <h5 style="color: black !important;">Армия</h5>
                  </a>
                </div>
                <div class="single-popular-post">
                  <a href="/filtered/Science/1" style="text-decoration: none;">
                    <h5 style="color: black !important;">Наука</h5>
                  </a>
                </div>
                <div class="single-popular-post">
                  <a href="/filtered/Culture/1" style="text-decoration: none;">
                    <h5 style="color: black !important;">Культура</h5>
                  </a>
                </div>
                <div class="single-popular-post">
                  <a href="/filtered/Religion/1" style="text-decoration: none;">
                    <h5 style="color: black !important;">Религия</h5>
                  </a>
                </div>
                <div class="single-popular-post">
                  <a href="/filtered/Sport/1" style="text-decoration: none;">
                    <h5 style="color: black !important;">Спорт</h5>
                  </a>
                </div>
                <div class="single-popular-post">
                  <a href="/filtered/Tourism/1" style="text-decoration: none;">
                    <h5 style="color: black !important;">Туризм</h5>
                  </a>
                </div>
                <div class="single-popular-post">
                  <a href="/filtered/Animals/1" style="text-decoration: none;">
                    <h5 style="color: black !important;">Животные</h5>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  scrollToTop: true
};
</script>

<style>
.container-pag {
  display: inline-flex;
  flex-direction: row;
}
.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  background-color: transparent;
  border-radius: 5px;
}
.pagination a.active {
  color: floralwhite;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  background-color: red;
  border-radius: 5px;
}

.btn-test {
  background-color: red;
}
.newspaper-main-menu {
  position: relative;
  width: 100% !important;
  z-index: 200;
  height: 6rem;
}
/*.stickyMenu {
    background-color: #007bff;
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.15);
  }*/

.stickyMenu {
  background-color: #ee002d;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.15);
}
.stickyMenu_2 {
  background-color: transparent;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.15);
}
.wrapper-2 {
  background-color: #02031c;
  height: 50%;
}
.post-catagory {
  font-size: 14px;
  color: #ee002d;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 10px;
  display: block;
  text-decoration: none;
}
.post-author {
  margin-bottom: 15px;
  width: 100%;
  display: block;
  color: #ee002d;
}
p {
  color: #828282;
  font-size: 14px;
  line-height: 2;
  font-weight: 400;
}
.post-title {
  transition-duration: 500ms;
  text-decoration: none !important;
  outline: 0 solid transparent;
  color: #1c1c1c;
  font-weight: 500;
  font-size: 14px;
  color: #828282;
}
.post-title_h6 {
  font-size: 24px;
  transition-duration: 500ms;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  clear: both;
  -ms-word-wrap: break-word;
  word-wrap: break-word;
  color: #333;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 700;
}
.downMenu {
  background-color: #f8f9fa !important;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.15);
}
.popular-news-widget {
  position: relative;
  z-index: 1;
  background-color: #eff4f9;
  padding: 60px 25px;
}

.scrollUp {
  background-color: #ee002d;
  border-radius: 0;
  bottom: 60px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.3);
  color: #ffffff;
  font-size: 24px;
  height: 40px;
  line-height: 38px;
  right: 60px;
  text-align: center;
  width: 40px;
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
}
.single-popular-post {
  position: relative;
  z-index: 1;
  margin-bottom: 30px;
}
.post-excerp {
  font-weight: 500;
  margin-bottom: 40px;
  display: block;
  line-height: 2.1;
  color: #828282;
}

.drops {
  background-color: #ee002d !important;
  height: 80px;
}

.classy-navbar {
  height: 80px;
  padding: 0;
}
.top-header-content {
  width: 100%;
  height: 100px;
  background-color: #ee002d;
  position: relative;
  z-index: 1;
}
.logo {
  display: block;
  max-width: 160px;
}

.classynav ul li a {
  font-weight: 500;
}

.classynav a {
  text-transform: capitalize;
  padding: 12px 12px 11px;

  line-height: 1;
  color: white;
  font-weight: 500;
}

.classy-menu {
  background-color: #fff;
  position: fixed;
  top: 0;
  left: -310px;
  z-index: 1000;
  width: 300px;
  height: 100%;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
  padding: 0;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  display: block;
  overflow-x: hidden;
  overflow-y: scroll;
}
.classy-navbar-toggler {
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: none;
}

ul-dropdown {
  margin-left: 0;
  margin-right: 15px;
  background-color: red;
}

.cn-dropdown-item ul li {
  position: relative;
  z-index: 10;
}

.widget-title {
  display: block;
  margin-bottom: 30px;
  color: #fff;
}
.menuCont {
  margin-right: auto;
  margin-left: 7rem;
  width: 50%;
  display: flex;
  align-items: left;
  justify-content: space-between !important;
}

.list {
  position: relative;
  z-index: 1;
}

.li-footer {
  display: block;
}
.a-footer {
  display: block;
  padding: 5px 0;
  color: rgba(255, 255, 255, 0.5);
}

.list-footer {
  position: relative;
  z-index: 1;
}

.header-area {
  position: relative;
  z-index: 100;
  width: 100%;
}

ul,
ol {
  margin: 0;
}

html,
body {
  height: 100%;
}

body {
  font-family: "Roboto", sans-serif;
  font-size: 14px;
}
.section-padding-80 {
  padding-top: 80px;
  padding-bottom: 80px;
}

.text_menu {
  color: black;
}
.section-padding-80-0 {
  padding-top: 80px;
  padding-bottom: 0;
}
.wrapper {
  position: relative;
  width: 100% !important;
  z-index: 100;
  height: 100% !important;
}

.section-padding-0-80 {
  padding-top: 0;
  padding-bottom: 80px;
}

.section-padding-80-50 {
  padding-top: 80px;
  padding-bottom: 50px;
}

/* Section Heading */
.section-heading {
  position: relative;
  z-index: 1;
  margin-bottom: 90px;
  border-bottom: 1px solid #d0d5d8;
}
.section-heading h6 {
  font-size: 16px;
  margin-bottom: 0;
  line-height: 45px;
  height: 45px;
  min-width: 140px;
  padding: 0 30px;
  background-color: #ee002d;
  color: #fff;
  font-weight: 700;
  display: inline-block;
  text-align: center;
}
.header-area {
  position: relative;
  z-index: 100;
  width: 100%;
}

.mt-80 {
  margin-top: 80px !important;
}

.copyright {
  background-color: #02031c;
  width: 100%;
  color: white;
  margin-left: auto;
  margin-right: auto;
}

.header-area {
  position: relative;
  z-index: 100;
  width: 100%;
}

.dropbtn {
  background-color: transparent;
  clear: both;
  -ms-word-wrap: break-word;
  word-wrap: break-word;
  color: #333;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 700;
  font-size: 20px;
  padding: 16px;
  border: none;
  cursor: pointer;
}

.dropbtn:hover,
.dropbtn:focus {
  background-color: transparent;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: red;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown a:hover {
  background-color: #ddd;
  color: #333;
  text-decoration: none;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 700;
}

.show {
  display: block;
}
.topnav {
  overflow: hidden;
  background-color: transparent;
  border: 4px double black;
}

.topnav a {
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: transparent;
  color: black;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {
    display: none;
  }
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {
    position: relative;
  }
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
#back2Top {
  width: 40px;
  line-height: 40px;
  overflow: hidden;
  z-index: 999;
  display: none;
  cursor: pointer;
  -moz-transform: rotate(270deg);
  -webkit-transform: rotate(270deg);
  -o-transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  transform: rotate(270deg);
  position: fixed;
  bottom: 50px;
  right: 0;
  background-color: red;
  color: #555;
  text-align: center;
  font-size: 30px;
  text-decoration: none;
}
#back2Top:hover {
  background-color: red;
  color: #000;
}
#myBtn {
  display: block;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  font-size: 18px;
  border: none;
  outline: none;
  background-color: red;
  color: white;
  cursor: pointer;
  padding: 15px;
  border-radius: 4px;
}

#myBtn:hover {
  background-color: #555;
}
</style>
