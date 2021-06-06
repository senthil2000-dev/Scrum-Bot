export let topic;
export let username;
export let upvotes;
export let keywords;
export let id;
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