<template>
  <div>
    <nav class="navbar navbar-expand-lg  newspaper-main-menu stickyMenu">
      <div class="container">
        <div class="col xs-12">
          <div id="logoSt">
            <a class="navbar-brand" href="/">
              <!--<h2 class="textLogo" style="color: aliceblue;">
              экспортобразования.рф
            </h2>-->

              <h2>Блог N 1</h2>
            </a>
          </div>
        </div>
        <div id="logo">
          <a
            class=" nav-link"
            href="https://xn--80ahyfc6d7ba.xn--80aabfyii3adadgocjt5p1b.xn--p1ai/"
            ><h2>Админка</h2>
          </a>
        </div>
        <div id="logo">
          <a
            class=" nav-link"
            href="https://xn--80ahyfc6d7ba.xn--80aabfyii3adadgocjt5p1b.xn--p1ai/userLogin"
            ><h2>Вход</h2>
          </a>
        </div>
      </div>
    </nav>
    <nav class="navbar navbar-expand-lg  newspaper-main-menu stickyMenu_2">
      <div class=" container">
        <div id="logo">
          <a href="/" style="color: black !important; text-decoration:none;"
            ><h4>Home</h4></a
          >
        </div>
        <div id="logo">
          <a
            href="/about"
            style="color: black !important; text-decoration:none;"
            ><h4>О проекте</h4></a
          >
        </div>
        <div id="logo">
          <a
            href="/rules"
            style="color: black !important; text-decoration:none;"
            ><h4>Правила</h4></a
          >
        </div>
        <div id="logo">
          <a
            href="/other"
            style="color: black !important; text-decoration:none;"
            ><h4>Другое</h4></a
          >
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:ital@1&display=swap");
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

#logo h2 {
  color: aliceblue;
}

@media (max-width: 1125px) {
  #logoSt h2 {
    font-family: "Fira Sans", sans-serif;

    padding-left: 0px;
    padding-right: 40px;
    color: aliceblue;
  }

  #logo h2 {
    font-size: 16pt;
    padding-left: 0px;
    padding-right: 40px;
    color: aliceblue;
  }
  #logo h4 {
    font-size: 11pt;
    color: black;
  }
}
@media (min-width: 542px) {
  #logoSt h2 {
    font-family: "Fira Sans", sans-serif;
    font-size: 14pt;
    padding-left: 0px;
    padding-right: 40px;
    color: aliceblue;
  }
  #logo h2 {
    font-size: 16px;
    padding-left: 0px;
    margin-bottom: 0px;
    color: aliceblue;
  }
  #logo h4 {
    font-size: 11pt;
    color: black;
  }
}

@media (max-width: 540px) {
  #logoSt h2 {
    font-family: "Fira Sans", sans-serif;
    font-size: 14pt;
    padding-left: 0px;
    padding-right: 40px;
    color: aliceblue;
  }
  #logo h2 {
    font-size: 16pt;
    padding-left: 0px;
    margin-bottom: 0px;
    color: aliceblue;
  }
  #logo h4 {
    font-size: 11pt;
    color: black;
  }
}
@media (max-width: 414px) {
  #logoSt h2 {
    font-family: "Fira Sans", sans-serif;
    font-size: 14pt;
    padding-left: 0px;
    padding-right: 40px;
    color: aliceblue;
  }
  #logo h2 {
    font-size: 16pt;
    padding-left: 0px;
    padding-right: 40px;
    color: aliceblue;
  }
  #logo h4 {
    font-size: 11pt;
    color: black;
  }
}
@media (max-width: 411px) {
  #logoSt h2 {
    font-family: "Fira Sans", sans-serif;
    font-size: 14pt;
    padding-left: 0px;
    padding-right: 40px;
    color: aliceblue;
  }
  #logo h2 {
    font-size: 16pt;
    padding-left: 0px;
    padding-right: 40px;
    color: aliceblue;
  }
  #logo h4 {
    font-size: 11pt;
    color: black;
  }
}
@media (max-width: 375px) {
  #logoSt h2 {
    font-family: "Fira Sans", sans-serif;
    font-size: 14pt;
    padding-left: 0px;
    padding-right: 40px;
    color: aliceblue;
  }
  #logo h2 {
    font-size: 16pt;
    padding-left: 0px;
    padding-right: 40px;
    color: aliceblue;
  }
  #logo h4 {
    font-size: 11pt;
    color: black;
  }
}
@media (max-width: 340px) {
  #logoSt h2 {
    font-size: 10pt;
    padding-left: 0px;
    color: aliceblue;
  }
  #logo h2 {
    font-size: 10pt;
    padding-left: 0px;

    color: aliceblue;
  }
  #logo h4 {
    font-size: 10pt;
    color: black;
  }
}
@media (max-width: 280px) {
  #logoSt h2 {
    font-family: "Fira Sans", sans-serif;
    font-size: 11pt;
    padding-left: 0px;
    color: aliceblue;
  }
  #logo h2 {
    font-size: 10pt;
    padding-left: 0px;
    margin-bottom: 0px;
    color: aliceblue;
  }
  #logo h4 {
    font-size: 10pt;
    color: black;
  }
}
</style>
