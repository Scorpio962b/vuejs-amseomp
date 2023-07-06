<template>
    <div>
    <!-- modify this form HTML and place wherever you want your form -->
    <form action="https://formspree.io/f/xqkonvwj" method="POST">
        <div>
          <label>  Your email:</label>
        <input type="email" name="email" required placeholder="enter your email"/>
        </div>

        <div>
          <label>
           <p> Your mobile number:</p>
            <input type="text" name="cellphone" required />
          </label>
        </div>

        <div>
          <label>
            <p>Your message:</p>
            <textarea name="message"></textarea>
          </label>
        </div>
      <!-- your other form fields go here -->
  <div class="d-flex justify-content-center">
    <button class="btn btn-dark" type="submit" >Send</button>
  </div>
    </form>
  
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
</style>