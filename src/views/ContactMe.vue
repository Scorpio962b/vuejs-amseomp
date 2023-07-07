<template>
   <div class="card">
        Name: Abdoelmaaliek <br>
        Surname: Samaai <br>
        Address: 8 Crusader Crescent, The Hague, Delft 7100, Cape town <br>
        Cellphone: 0676083395 <br>
        Email: samaaiab962@gmail.com <br>   
    </div>
  <div class="formb">
    <form class="form" action="https://formspree.io/f/xjvqvkbp" method="post">
      <label name="Name">Name and surname:</label>
      <input type="text"><br>
      <label for="email">Email:</label>
      <input type="text" name="email"><br>
      <label for="email">Your number:</label>
      <input type="text" name="cellphone"><br>
      <label for="email">Message:</label>
      <textarea name="message"></textarea>

      <button type="submit" name="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.formb{
  padding-left:40.1% ;
  padding-top: 100px;
}
.form{
  --bg-color: #fff;
  --box-color: #007BB8;
  padding: 1%;
  background: linear-gradient(to left,#ffc922  0% 50% ,#007BB8  50% 100%);
  display: flex;
  flex-direction: column; 
  align-items: center; 
  justify-content: center; 
  gap: 1px; 
  border-radius: 50px;
  border: 2px solid var(--box-color); 
  box-shadow: 5px 5px var(--box-color); 
  width: 300px;
  justify-content: center;
}
</style>