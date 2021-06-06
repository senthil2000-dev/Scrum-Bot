import Home from './views/public/Home.svelte'
import Discordmessage from './views/public/Discordmessage.svelte'

const routes = [
  { name: '/', component: Home },
  { name: '/tech/:id', component: Discordmessage },
]

export { routes }