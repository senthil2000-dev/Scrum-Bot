<div class="card">
	<h1>By {username} on {date}</h1>
    <p>{desc}</p>
	<div class="tags">
		<p>
			{#each keywords as key}
				<a href='/search/{key}'>{key}</a>
			{/each}
		</p>
	</div>
</div>
<style src="../../css/topic.scss" lang="scss"></style>
<script src='../../js/message.js'></script>
