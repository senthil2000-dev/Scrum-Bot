<h1>Each message page</h1>

<script src='../../js/messages.js'></script>

<Nav/>	
<section class="container">
    <Message
        on:addtag={addtag}
        id={message.id}
        date={message.date}
        username={message.username}
        upvotes={message.upvotes}
        topic={message.topic} 
        desc={message.desc}
        keywords = {message.keywords}/>
    {#if replies.length === 0}
		<p>No replies</p>
	{:else}
		{#each replies as topic}
		<Reply
			id={topic.id}
			username={topic.username}
			desc={topic.desc}/>
		{/each}
	{/if}
</section>

<style src="../../css/disc.scss" lang="scss"></style>