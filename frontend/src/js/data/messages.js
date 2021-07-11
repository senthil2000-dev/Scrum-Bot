import Nav from '../../views/public/Nav.svelte';
import Message from '../../views/public/Message.svelte';
import Reply from '../../views/public/Reply.svelte';
import { onMount } from 'svelte';
import config from '../../../env';
export let currentRoute;
let {id} = currentRoute.namedParams;
let message, error = "";

onMount(async () => {
  const resp = await fetch(`${config.backendurl}/api/discussions/${id}`);
  const response = await resp.json();
  if(response.data)
    message = response.data.discussion;
  else
    error= response.detail.message;
});
