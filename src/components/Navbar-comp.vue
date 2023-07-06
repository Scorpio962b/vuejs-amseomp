<template>
  <nav class="navBar">
    <img
      src="https://i.postimg.cc/RZ1Xv89t/my-logo.jpg"
      class="logo"
      alt="logo"
      />
      <input type="checkbox" id="hamburger-btn" />
      <label class="btn" for="hamburger-btn"
        ><div class="hamburger">&#9776;</div>
        <div class="links">
          <router-link class="active" to="/">Home</router-link> ||
          <router-link to="/about">About</router-link> ||
          <router-link to="/ContactMe">Contact me</router-link> ||
          <router-link to="/Project">Projects</router-link> ||
          <router-link to="/testimonial">Testimonials</router-link> ||
          <router-link to="/resume">Resume</router-link>
        </div>
      </label>
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

#hamburger-btn {
  display: none;
}

#hamburger-btn:checked + label > div {
  display: block;
}
</style>
   
  