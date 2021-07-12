import Nav from '../../views/public/Nav.svelte';
import Message from '../../views/public/Message.svelte';
import Reply from '../../views/public/Reply.svelte';
import { onMount } from 'svelte';
import config from '../../../env';
export let currentRoute;
let {id} = currentRoute.namedParams;
let message, error = "";
let replies = [];

function createReplies(conversations) {
  if(conversations.length == 0) return;
  
  conversations.forEach(reply => {
    replies.push(reply);
    createReplies(reply.replies);
  });
}

onMount(async () => {
  const resp = await fetch(`${config.backendurl}/api/discussions/${id}`);
  const response = await resp.json();
  if(response.data) {
    message = response.data.discussion;
    createReplies(message.replies);
  }
  else
    error= response.detail.message;
});
