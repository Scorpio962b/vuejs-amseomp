<template>
    <nav class="navBar">
      <img src="https://i.postimg.cc/RZ1Xv89t/my-logo.jpg" class="logo" alt="logo">
      <div>
          <router-link class="active" to="/">Home</router-link> ||
          <router-link to="/about">About</router-link> ||
          <router-link to="/ContactMe">Contact me</router-link> ||
          <router-link to="/Projects">Projects</router-link> ||
          <router-link to="/testimonial">Testimonials</router-link> ||
          <router-link to="/resume">Resume</router-link>
      </div>
    </nav>
  </template>
   <script>
  export default {
   
  };
 
  </script>
  
   <style scoped>
  .navBar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 11px;
      
  }
  .logo{
      width: 120px;
      height: 80px;
  }
  </style>
   
  