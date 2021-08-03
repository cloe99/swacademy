<template>
  <nav class="navbar navbar-expand-lg  navbar-dark fixed-top">
    <a href="#home"><img src="../assets/SWa Logo.png" class="img-fluid" width="100px" height="100px" alt="logoNav"></a>
    <button id="nav-toggle-button" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span id="navbar-toggler-icon" class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ml-auto">
        <a class="nav-item nav-link" href="#home">Home</a>
        <a class="nav-item nav-link" href="#about">About</a>
        <a class="nav-item nav-link" href="#price">Price</a>
        <a class="nav-item nav-link" href="#contact">Contact</a>
      </div>
    </div>
  </nav>
</template>

<style>

.navbar{
  background-color: rgb(8, 8, 8);
  box-shadow: 2px 2px 5px rgb(29, 29, 29)
} 

.navbar .navbar-collapse .navbar-nav a{
  color: rgb(163, 127, 29);
  text-decoration: none;
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: .3s;
}

.navbar .navbar-collapse .navbar-nav a:hover, a:active {
  color: rgb(163, 127, 29);
  background-size: 100% 2px;
}

</style>