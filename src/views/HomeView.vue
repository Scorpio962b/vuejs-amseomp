<template>
  <div class="container">
    <div>
      <img class="myHomeImage" :src="'https://i.postimg.cc/4N6sJMBc/c12-abdoelmaaliek-samaai-1-720.jpg'" :alt="myphoto">
      <div class="flicker">
     <h1>Welcome to my portfolio. I am AbdoelMaaliek Samaai.</h1>  
    </div>
    </div>

  </div>

</template>

<script>
// @ is an alias to /src


export default {
 
}
</script>
<style>
.myHomeImage{
  border-radius: 550px;
  height: 550px;
  width: 450px;
}

.myHomeImage {
	-webkit-animation: myHomeImage 0.6s ease-out both;
	        animation: myHomeImage 0.6s ease-out both;
}
@-webkit-keyframes myHomeImage {
  0% {
    -webkit-transform: rotate(-540deg) scale(0);
            transform: rotate(-540deg) scale(0);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotate(0) scale(1);
            transform: rotate(0) scale(1);
    opacity: 1;
  }
}
@keyframes myHomeImage {
  0% {
    -webkit-transform: rotate(-540deg) scale(0);
            transform: rotate(-540deg) scale(0);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotate(0) scale(1);
            transform: rotate(0) scale(1);
    opacity: 1;
  }
}


.flicker {
	-webkit-animation: flicker 0.6s both;
	        animation: flicker 1.8s infinite;
}
@-webkit-keyframes flicker {
  0%,
  50%,
  100% {
    opacity: 1;
  }
  25%,
  75% {
    opacity: 0;
  }
}
@keyframes flicker {
  0%,
  50%,
  100% {
    opacity: 1;
  }
  25%,
  75% {
    opacity: 0;
  }
}


@media(max-width:600px){
  .myHomeImage{
    border-radius: 400px;
    height: 550px;
    width: 400px;
  }
}
@media(max-width:423px){
  .myHomeImage{
    border-radius: 300px;
    height: 550px;
    width: 300px;
  }
}
@media(max-width:323px){
  .myHomeImage{
    border-radius: 130px;
    min-height: 280px;
    width: 230px;
  }
}
</style>