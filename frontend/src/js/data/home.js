import Nav from '../../views/public/Nav.svelte';
import Topic from '../../views/public/Topic.svelte';
import { onMount } from 'svelte';
import config from '../../../env';
let topics, filterval = "", filterFor = "";
export let currentRoute;
let {filterType, value, limit, offset} = currentRoute.namedParams;
console.log(filterType, value, limit, offset);
let title = "";


if(limit === undefined)
  limit = 10;
if(offset === "/" || offset === undefined)
  offset = 0;

onMount(async () => {
  // const memberResp = await fetch(`${config.backendurl}/api/members`);
  // const memjson = await response.json();
  // const members = memjson.data.members;
  // console.log(members);
  if(filterType == "scrum_no") {
    const response = await fetch(`${config.backendurl}/api/scrums/${value}`);
    const resp = await response.json();
    topics = resp.data.scrum.messages;
    title = "Scrum on " + resp.data.scrum.created_at;
  }
  else if(filterType == "search") {
    console.log(`${config.backendurl}/api/discussions/search?tag=${value}`);
    const response = await fetch(`${config.backendurl}/api/discussions/search?tag=${value}`);
    const resp = await response.json();
    topics = resp.data.discussions;
  }
  else {
    title = "Sharing Knowledge...";
    const response = await fetch(`${config.backendurl}/api/discussions/?limit=${limit}&offset=${offset}`);
    const resp = await response.json();
    topics = resp.data.discussions;
  }
});
