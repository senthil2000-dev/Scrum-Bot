<script src='../../js/data/home.js'></script>
<Nav/>
{#if topics === undefined}
	<div class="load-container">
		<img class="loading" src="https://icon-library.com/images/loading-icon-transparent-background/loading-icon-transparent-background-12.jpg" alt="Loading...">
	</div>
{:else}	
	<section class="container">
		{#if topics.length === 0}
			<p>No active topics</p>
		{:else}
			{#each topics as topic}
			<Topic
				id={topic.messageId}
				num={topic.replies.length}
				date={topic.date}
				name={topic.author.name}
				topic={"Scrum"} 
				desc={topic.message}
				keywords = {topic.tags}/>
			{/each}
		{/if}	
	</section>
{/if}
<style src="../../css/home.scss" lang="scss"></style>
