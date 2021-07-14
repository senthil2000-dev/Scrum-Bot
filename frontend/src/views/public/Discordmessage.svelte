<script src='../../js/data/messages.js'></script>

<Nav/>
<section class="container">
    {#if message !== undefined}
        <Message
            date={message.timestamp}
            username={message.author.name}
            desc={message.message}
            keywords = {message.tags}/>
        {#if message.replies.length === 0}
            <h1>No replies</h1>
        {:else}
            <h1>{replies.length + (replies.length == 1? " Reply": " Replies")}</h1>
            {#each replies as reply}
            <Reply
                name={reply.author.name}
                desc={reply.message}/>
            {/each}
        {/if}
    {:else}
        <h1>{error}</h1>
    {/if}
</section>
<FootNote/>

<style src="../../css/disc.scss" lang="scss"></style>
