<div class="card-grid-space">
	<div class="num">{num ? num + " people replied": "No replies"}</div>
	<a class="card" href="/tech/{id}" style="--bg-img: url(https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80)">
	  <div>
		<h1>By {name}</h1>
		{#if keywords.length != 0}
			<h3>{keywords.length} {keywords.length == 1? "tag": "tags"}</h3>
		{/if}
		<p>{desc.substr(0, 20)}...</p>
		<div class="date">{date}</div>
		<div class="tags">
			<p>
				{#each keywords as key}
					<a href='#/'>{key}</a>
				{/each}
			</p>
		</div>
	  </div>
	</a>
  </div>
<style src="../../css/card.scss" lang="scss"></style>
<script src='../../js/topic.js'></script>
