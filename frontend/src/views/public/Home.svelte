<script src='../../js/home.js'></script>
<Nav/>	
<body>
	<div class="container">
		{#if topics.length === 0}
			<p>No active topics</p>
		{:else}
			{#each topics as topic}
			<Topic
				on:addtag={addtag}
				id={topic.id}
				username={topic.username}
				upvotes={topic.upvotes}
				topic={topic.topic} 
				keywords = {topic.keywords}/>
			{/each}
		{/if}
	</div>
</body>

<style src="../../css/home.scss" lang="scss"></style>