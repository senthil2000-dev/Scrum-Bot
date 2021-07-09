<script src='../../js/data/home.js'></script>
<Nav/>
{#if topics === undefined}
	<div class="load-container">
		<img class="loading" src="https://icon-library.com/images/loading-icon-transparent-background/loading-icon-transparent-background-12.jpg" alt="Loading...">
	</div>
{:else}	
	<h1 class="title-dis">{title}</h1>
	<div class="filters">
		<div class="select">
			<select name="slct" id="slct" bind:value="{filterval}">
			  <option selected disabled>Choose an option</option>
			  <option value="author">Author</option>
			  <option value="search">Tags</option>
			</select>
		</div>
		{#if filterval == "author"}
			<div class="select">
				<select name="slct" id="slct" bind:value="{filterFor}">
					<option selected disabled>Choose an option</option>
					<option>Pure CSS</option>
					<option>No JS</option>
					<option>Nice!</option>
				</select>
			</div>
		{:else if filterval == "search"}
			<div class="search-container">
				<input type="text" id="search-bar" placeholder="What can I help you with today?" bind:value="{filterFor}">
				<a href="#/"><img class="search-icon" alt="search-btn" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"></a>
		  	</div>
		{/if}
		{#if filterval}
			<a href="/{filterval}/{filterFor}"><button class="btn filter-btn">FILTER</button></a>
		{/if}
	</div>
	{#if topics.length === 0}
		<p class="no-results">No active topics</p>
	{:else}
		<section class="container">
			{#each topics as topic}
			<Topic
				id={topic.messageId}
				num={topic.replies.length}
				date={topic.timestamp}
				name={topic.author.name}
				topic={"Scrum"} 
				desc={topic.message}
				keywords = {topic.tags}/>
			{/each}		
		</section>
		<div class="pagination">
		<a href="#/" class="prev">Prev</a>
		<div class="pages">
			<a href="#/">1</a>
			<a href="https://www.google.com">2</a>
			<a href="#/" class="active">3</a>
			<a href="#/">4</a>
			<a href="#/">5</a>
			<a href="#/">6</a>
			<a href="#/">7</a>
			<a href="#/">8</a>
			<a href="#/">9</a>
			<a href="#/">10</a>
		</div>
		<a href="#/" class="next">Next</a>
		</div>
	{/if}
{/if}
<style src="../../css/home.scss" lang="scss"></style>
