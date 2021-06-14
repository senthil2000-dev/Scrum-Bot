<script src='../../js/data/home.js'></script>
<Nav/>	
<section class="container">
	{#if topics.length === 0}
		<p>No active topics</p>
	{:else}
		{#each topics as topic}
		<Topic
			id={topic.id}
			date={topic.date}
			name={topic.name}
			upvotes={topic.upvotes}
			topic={topic.topic} 
			desc={topic.desc}
			keywords = {topic.keywords}/>
		{/each}
	{/if}
</section>

<style src="../../css/home.scss" lang="scss"></style>
