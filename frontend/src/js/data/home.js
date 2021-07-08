import Nav from '../../views/public/Nav.svelte';
import Topic from '../../views/public/Topic.svelte';
import { onMount } from 'svelte';
import config from '../../../env';
let topics;
export let currentRoute;
let {filterType, value, limit, offset} = currentRoute.namedParams;
console.log(limit, offset);

if(limit === undefined)
  limit = 10;
if(offset === "/" || offset === undefined)
  offset = 0;

onMount(async () => {  
  console.log(`${config.backendurl}/api/discussions`);
  const response = await fetch(`${config.backendurl}/api/discussions/?limit=${limit}&offset=${offset}`); //dummy url
  const resp = await response.json();
  topics = resp.data.discussions; 
  console.log(topics);
});
