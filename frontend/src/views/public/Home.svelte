<script>
	import Nav from './Nav.svelte';
	import Topic from './Topic.svelte';
	let topics = [
    {
	  id: 1,
	  username: "Ajitha",
	  upvotes: 20,
      topic: "react",
	  keywords: ["React", "webrtc", "lexer"]
    },
    {
	  id: 2,
	  username: "Pradeep",
	  upvotes: 20,
      topic: "vue",
	  keywords: ["Vue", "webrtc", "lexer"]
    },
    {
	  id: 3,
	  username: "Bestin",
      upvotes: 200,
	  topic: "lightning talks",
	  keywords: ["Algos", "peerjs", "parser"]
    }
  ];
  const addtag = (e) => {
	topics = topics.map(element => element.id == e.detail.id ? {...element, keywords: [...element.keywords, e.detail.tag]} : element);
  }
</script>

<Nav/>	
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