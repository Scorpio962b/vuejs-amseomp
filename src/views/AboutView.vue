<template>
        <div class="d-flex about-div">
        <div class="about-grid w-75">
          <div class="b1">
            <h4>Skills</h4>
            
            </div>
          
          
          </div>
          <div class="b2">
            <h4>About myself</h4>
            <p>
              Name: Abdoelmaaliek Samaai DOB: 25th October 2000 Location: Crusader
              Crescent The Hague Delft 7100 Email:Samaaiab962@gmail.com Willing to
              Relocate : Yes
            </p>
          </div>
          <div class="b3" >
            <h4>Bio</h4>
            <p>
              Im a vibrant person who loves adventures. I am caring and loving
              person. I do not get angry easily. I love making friends and meeting
              new people. I am a cat lover.
            </p>
          </div>
          <div class="b4" >
            <h4>My hobbies/Passion Board</h4>
            <p>
              I have multiple hobbies which is video gaming, playing chess,
              writing lyrics, writing short stories, listening to music, drawing,
              watching series, ice skating, go carting, bowling, reading books,
              volleyball, tablet tennis and more.
            </p>
          </div>
          <div class="b5" >
            <h4>More about me</h4>
            <p>
              I love going to different places and and taking part in physical
              activities/sport such as soccer, hiking, cycling and more. I grew up
              in Delft with both my parents and to older siblings. I was the first
              child to matriculate in my household in the year 2018. I do not
              drink alcohol nor do i smoke.
            </p>
          </div>
          <div class="b6" >
            <h4>Education</h4>
  
            <p>
              School: Rosendaal High Year:2014-2018 Grade:12 Academy:Life choices
              Year:2023
            </p>
          </div>
          <div class="b7">
            <h4>Work Experience</h4>
            <p>Company :Skylab Title: Mergindiser</p>
  
            <p>Company :Shoprite Title: Picker</p>
  
            <p>Company :AM/PM Stocktaking Title: Stocktaker</p>
  
            <p>
              Company :Westerncape Department of Community Safety Title: Admin
              clerk
            </p>
          </div>
        </div>
        <div class="b8 w-29 p-2" style="background-color: ;">
        
          <img id="image"
          src="https://i.postimg.cc/P5N4F6RD/C12-Abdoelmaaliek-Samaai-3.jpg"
          class=" img-fluid "
          alt="pic" 
          style="object-fit: contain;"/>  
        </div>
      
</template>


<script>
</script>

<style scoped>

/* about start */
.about-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, auto);
  grid-gap: 10px;
 
}

.about-grid>* {
  background-color: rgba(255, 255, 255, 0.219);
  /* padding: 5px; */
}

.about-grid img {
  width: 100%;
  height: 100%;
}

.b1 {
  grid-area: span 2/ span 1;
}

.b2 {
  grid-area: span 1/ span 1;
}

.b3 {
  grid-area: span 1/ span 2;
}

.b4 {
  grid-area: span 1/ span 2;
}

.b5 {
  grid-area: span 2/ span 1;
}

.b6 {
  grid-area: span 1/ span 2;
}

.b7 {
  grid-area: span 1/ span 1;
}
.b8 {
  grid-area: span 1/ span 1;
}

</style>