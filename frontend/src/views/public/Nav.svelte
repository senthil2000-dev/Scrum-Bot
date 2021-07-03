<header class="header__navbar bg-primary">
    <div class="navbar">
        <div class="mob-nav">
            <h1 class="navbar__logo">
                <a href="/">Delta Scrumbot</a>
                <div class="menu-wrapper" on:click="{cross}">
                    <div class="menu-line line1"></div>
                    <div class="menu-line line2"></div>
                    <div class="menu-line line3"></div>
                </div>
            </h1>
        </div>
        <ul class="navbar__links desktop">
            <li><a href="/scrum">SCRUMS</a></li>
            <li><a href="/register">REGISTER</a></li>
            <li><a href="/login">LOGIN</a></li>
        </ul>       
        {#if disp}
            <ul class="navbar__links mobile">
                <li><a href="/scrum">SCRUMS</a></li>
                <li><a href="/register">REGISTER</a></li>
                <li><a href="/login">LOGIN</a></li>
            </ul>           
        {/if}   
    </div>
</header>

<script src='../../js/nav.js'></script>
<style src="../../css/nav.scss" lang="scss"></style>
