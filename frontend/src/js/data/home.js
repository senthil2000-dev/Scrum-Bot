import Nav from '../../views/public/Nav.svelte';
import Topic from '../../views/public/Topic.svelte';
import { onMount } from 'svelte';
let topics;
export let currentRoute;
let {filterType, value, limit, offset} = currentRoute.namedParams;

if(limit === undefined)
  limit = 10;
if(offset === undefined)
  offset = 0;  
console.log(limit, filterType, value);

onMount(async () => {  
  const response = await fetch('https://swapi.dev/api/people/1');
  const character = await response.json();
  topics = [
    {
      id: 1,
      name: character.name,
      upvotes: 20,
      topic: "react",
      keywords: ["React", "webrtc", "lexer"],
      date: '8 Jun 2021',
      desc: 'Worked on ppl, reviewed prs in rembook and smart note'
    },
    {
      id: 2,
      name: "Pradeep",
      upvotes: 20,
      topic: "vue",
      keywords: ["Vue", "webrtc", "lexer"],
      date: '10 Jun 2021',
      desc: 'Learnt a bit about communication protocols used in satellites for a gsoc pro'
    },
    {
      id: 3,
      name: "Bestin",
      upvotes: 200,
      topic: "lightning talks",
      keywords: ["Algos", "peerjs", "parser"],
      date: '9 Jun 2021',
      desc: 'Since last mega scrum ,I worked on finishing touches of Dcop,PPL21 dailychallenges'
    },
    {
      id: 4,
      name: "Bestin",
      upvotes: 200,
      topic: "lightning talks",
      keywords: ["Algos", "peerjs", "parser"],
      date: '5 Jun 2021',
      desc: 'exploring saucelabs for cross-browser testing , trying to integrate litcomponents in react'
    },
    {
      id: 5,
      name: "Pradeep",
      upvotes: 20,
      topic: "vue",
      keywords: ["Vue", "webrtc", "lexer"],
      date: '10 Jun 2021',
      desc: 'Learnt a bit about communication protocols used in satellites for a gsoc pro'
    },
    {
      id: 6,
      name: "Ajitha",
      upvotes: 20,
      topic: "react",
      keywords: ["React", "webrtc", "lexer"],
      date: '8 Jun 2021',
      desc: 'Worked on ppl, reviewed prs in rembook and smart note'
    }
    ];
});
