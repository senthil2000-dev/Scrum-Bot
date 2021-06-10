import Home from './views/public/Home.svelte'
import Discordmessage from './views/public/Discordmessage.svelte'
import Signin from './views/public/Signin.svelte'
import Register from './views/public/Register.svelte'
import Talks from './views/public/Talks.svelte'

const routes = [
  { name: '/', component: Home },
  { name: '/tech/:id', component: Discordmessage },
  {name: '/login', component: Signin},
  {name: '/register', component: Register},
  {name: '/lightningtalks', component: Talks}
]

export { routes }