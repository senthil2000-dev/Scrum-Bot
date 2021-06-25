<Nav/>
<svelte:head>
  <title>Register</title>
</svelte:head>
<section class="login">
  <div class="login-container register-container">
      <h3 class="title">Register</h3>
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
          <label for="batch">Batch</label>
          <input
            class="text-input batch-input"
            bind:value="{user.batch}"
            type="text"
            placeholder="Batch (eg: 2021)"
            id="batch"
            required pattern="[0-9]&#123;4&#125;"
          >
        </div>
        <div class="form-group">
          <label for="name">Name</label>
          <input
            class="text-input name-input"
            bind:value="{user.name}"
            type="text"
            placeholder="Name"
            id="name"
            required
          >
        </div>
        <div class="form-group">
            <label for="dischandle">Discord username</label>
            <input
              class="text-input name-input"
              bind:value="{user.discordHandle}"
              type="text"
              placeholder="Discord username"
              id="dischandle"
              required
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
        <div class="form-group">
            <label for="confirmpassword">Confirm Password</label>
            <input
              class="text-input password-input"
              bind:value="{user.password_repeat}"
              type="password"
              placeholder="Reenter password"
              id="confirmpassword"
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
      <p class="additional-act">Already have an account? <a href="/login"><span>Login</span></a></p>
  </div>
</section>

<style src="../../css/login.scss" lang="scss"></style>
<script src='../../js/register.js'></script>
