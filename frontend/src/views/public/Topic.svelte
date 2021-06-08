<div class="card-grid-space">
	<div class="num">{upvotes} people upvoted</div>
	<a class="card" href="/tech/{id}" style="--bg-img: url(https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80)">
	  <div>
		<h1>{topic}</h1>
		<h3>By {username}</h3>
		<p>{desc}...</p>
		<div class="date">{date}</div>
		<div class="tags">
			<p>
				{#each keywords as key}
					<a href='#{key}'>{key}</a>
				{/each}
			</p>
		</div>
	  </div>
	</a>
  </div>
<style src="../../css/card.scss" lang="scss"></style>
<script src='../../js/topic.js'></script>