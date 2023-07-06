<template>
  <div class="container">
    <form action="https://formspree.io/f/xjvqvkbp" method="post">
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

<style>
.container{
  display: flex;
  justify-content: center;
}
</style>