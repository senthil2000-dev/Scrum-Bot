import Nav from '../../views/public/Nav.svelte';
import Message from '../../views/public/Message.svelte';
import Reply from '../../views/public/Reply.svelte';
import FootNote from '../../views/public/FootNote.svelte';
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
  let token = localStorage.getItem('token');
  if(token == null)
    window.location.href = '/login';
  const resp = await fetch(`${config.backendurl}/api/discussions/${id}`, {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });
  const response = await resp.json();
  if(response.data) {
    message = response.data.discussion;
    createReplies(message.replies);
  }
  else
    error= response.detail.message;
});
