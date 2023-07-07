<template>
  <nav  class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/">
      <img
        src="https://i.postimg.cc/RZ1Xv89t/my-logo.jpg"
        class="logo"
        alt="logo"
    /></a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link class="active" to="/">Home</router-link> ||
        </li>
        <li class="nav-item">
          <router-link to="/about">About</router-link> ||
        </li>
        <li class="nav-item">
          <router-link to="/ContactMe">Contact me</router-link> ||
        </li>
        <li class="nav-item">
          <router-link to="/Project">Projects</router-link> ||
        </li>
        <li class="nav-item">
          <router-link to="/testimonial">Testimonials</router-link> ||
        </li>
        <li class="nav-item">
          <router-link to="/resume">Resume</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
   <script>
export default {};
</script>
  
   <style scoped>
.navBar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px;
}
.logo {
  width: 120px;
  height: 80px;
}
label div.hamburger {
  scale: 2;
}
label div.links {
  display: none;
}
.links {
  list-style: none;
  text-decoration: none;
  
}
#hamburger-btn {
  display: none;
}

#hamburger-btn:checked + label > div {
  display: block;
}

@media (max-width: 373) {
  .links {
    display: list-item;
  }
}
nav {
  background-color: rgba(255, 255, 255, 0.71) !important;

}

</style>
   
  