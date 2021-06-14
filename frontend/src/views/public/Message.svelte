<div class="card">
	<div class="header">
		<h1>{topic}
			<button class="btn btn-sm" on:click="{expand}">
				{#if controls}-{:else}+{/if}
			</button>
		</h1>
		<h3>{upvotes} upvotes</h3>
	</div>
	<h5>By {name} on {date}</h5>
    <p>{desc}</p>
	<div class="tags">
		<p>
			{#each keywords as key}
				<a href='#{key}'>{key}</a>
			{/each}
		</p>
		
	</div>
	{#if controls}
		<div class="star">
			<button class="btn" on:click="{addVote}">Upvote</button>
			<button class="btn btn-dark" on:click="{downvote}">Downvote</button>
		</div>
		<input type="text" placeholder="Tag to be added" bind:value={tag} />
		<button class="btn" on:click="{addTag}">Add</button>
	{/if}
</div>
<style src="../../css/topic.scss" lang="scss"></style>
<script src='../../js/message.js'></script>
