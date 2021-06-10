<div class="col-12">
  <div class="bolt"></div>
  <article class="blog-card">
    <div class="blog-card__background">
      <div class="card__background--wrapper">
        <div class="card__background--main" style="background-image: url('https://i.pinimg.com/originals/a8/46/2e/a8462ec3f7c4addbe50c596712c8644e.jpg');">
          <div class="card__background--layer"></div>
        </div>
      </div>
    </div>
    <div class="blog-card__head">
      <span class="date__box">
        <span class="date__day">{date.substr(0,date.indexOf(' '))}</span>
        <span class="date__month">{date.substr(date.indexOf(' ')+1)}</span>
      </span>
    </div>
    <div class="blog-card__info">
      <h5>{topic}</h5>
      <p>
        <a href="#/" class="icon-link mr-3 author"><img src="https://cdn4.iconfinder.com/data/icons/web-app-flat-circular-icons-set/64/Iconos_Redondos_Flat_Escribir_Icn-512.png" class="pencil" alt="">{author}</a>
      </p>
      <p class="content">{content.substring(0, length)}
        {#if ellipses}....{/if}
      </p>
      <a href="#/" on:click="{read}" class="btn btn--with-icon"><i class="btn-icon">&nbsp;</i>{#if ellipses}READ MORE{:else}READ LESS{/if}</a>
    </div>
  </article>
</div>

<style src="../../css/lightningtalk.scss" lang="scss"></style>
<script src='../../js/lightningtalk.js'></script>