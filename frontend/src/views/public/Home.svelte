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
					{#each members as member}
						<option value={member.id}>{member.name}</option>
					{/each}
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
		<p class="no-results">No results found</p>
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
		{#if filterType == "pages"}
			<div class="pagination">
				<a href="#/" on:click={() => navigate(Number(value)-1)}>&laquo;</a>
				{#each pageArr as page}
					{#if page == value}
						<a class = "active" href="#/">{page}</a>
					{:else}
						<a href="#/" on:click={() => navigate(page)}>{page}</a>
					{/if}
				{/each}
				<a href="#/" on:click={() => navigate(Number(value)+1)}>&raquo;</a>
			</div>
		{/if}
	{/if}
{/if}
<style src="../../css/home.scss" lang="scss"></style>
