<script src='../../js/topic.js'></script>

<div class="card">
    <h1>{topic}
        <button class="btn btn-sm" on:click="{expand}">
            {#if controls}-{:else}+{/if}
        </button>
    </h1>
    <h3>{upvotes} upvotes</h3>
	<h5>By {username}</h5>
	<div class="tags">
		<p>
			{#each keywords as key}
				<a href='#{key}'>{key}</a>
			{/each}
		</p>
		
	</div>
    {#if controls}
    <button class="btn" on:click="{addVote}">Upvote</button>
    <button class="btn btn-dark" on:click="{downvote}">Downvote</button>
	<input type="text" placeholder="Tag to be added" bind:value={tag} />
	<button class="btn" on:click="{addTag}">Add</button>
    {/if}
</div>

<style>
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 100;
	}

	h5 {
		margin-bottom: 10px;
	}

	.tags a {    
		display: inline-block;
		height: 24px;
		line-height: 24px;
		position: relative;
		margin: 0 16px 8px 0;
		padding: 0 10px 0 12px;
		background: #00a6df;    
		-webkit-border-bottom-right-radius: 3px;    
		border-bottom-right-radius: 3px;
		-webkit-border-top-right-radius: 3px;    
		border-top-right-radius: 3px;
		-webkit-box-shadow: 0 1px 2px rgba(0,0,0,0.2);
		box-shadow: 0 1px 2px rgba(0,0,0,0.2);
		color: #fff;
		font-size: 12px;
		font-family: "Lucida Grande","Lucida Sans Unicode",Verdana,sans-serif;
		text-decoration: none;
		text-shadow: 0 1px 2px rgba(0,0,0,0.2);
		font-weight: bold;
    }

	.tags a:before {
		content: "";
		position: absolute;
		top:0;
		left: -12px;
		width: 0;
		height: 0;
		border-color: transparent #00a6df transparent transparent;
		border-style: solid;
		border-width: 12px 12px 12px 0;        
    }

	.tags a:after {
		content: "";
		position: absolute;
		top: 10px;
		left: 1px;
		float: left;
		width: 5px;
		height: 5px;
		-webkit-border-radius: 50%;
		border-radius: 50%;
		background: #fff;
		-webkit-box-shadow: -1px -1px 2px rgba(0,0,0,0.4);
		box-shadow: -1px -1px 2px rgba(0,0,0,0.4);
	}
</style>