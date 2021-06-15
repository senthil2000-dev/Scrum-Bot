<Nav/>
<svelte:head>
  <title>Login</title>
</svelte:head>
<section class="login">
  <div class="login-container">
      <h3 class="title">Login</h3>
      <p class="separator"><span>&nbsp;</span></p>
      <form
        class="signup-form"
        on:submit|preventDefault="{submit}"
      >
        {#if error}
          <span class="error-message">
            {error}
          </span>
        {/if}
        <div class="form-group">
          <label for="rollno">Rollno</label>
          <input
            class="text-input rollno-input"
            bind:value="{user.rollno}"
            type="text"
            placeholder="Rollno"
            id="rollno"
            required pattern="[0-9]&#123;9&#125;"
          >
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            class="text-input password-input"
            bind:value="{user.password}"
            type="password"
            placeholder="Password"
            id="password"
            required
          >
        </div>
        
        <button
          class="signup-button"
          disabled="{inProgress}"
        >
          SIGN UP
        </button>
      </form>
      <p class="additional-act">Don't have an account? <a href="/register"><span>Register</span></a></p>
  </div>
</section>

<style src="../../css/login.scss" lang="scss"></style>
<script src='../../js/login.js'></script>
