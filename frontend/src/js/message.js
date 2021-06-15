export let topic;
export let name;
export let upvotes;
export let keywords;
export let id;
export let date;
export let desc;
import { createEventDispatcher } from "svelte";
const dispatch = createEventDispatcher();
let controls = false;
let tag = '';
const addVote = () => {
    upvotes+=1;
}
const downvote = () => {
    upvotes-=1;
}
const expand = () => {
    controls = !controls;
}
const addTag = () => {
    dispatch("addtag", {id, tag});
    tag = '';
}
