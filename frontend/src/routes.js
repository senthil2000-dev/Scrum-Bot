import Home from './views/public/Home.svelte'
import Discordmessage from './views/public/Discordmessage.svelte'
import Signin from './views/public/Signin.svelte'
import Register from './views/public/Register.svelte'
import Talks from './views/public/Talks.svelte'

const routes = [
  { name: '/tech/:id', component: Discordmessage },
  {name: '/login', component: Signin},
  {name: '/register', component: Register},
  {name: '/scrum', component: Talks},
  { name: '/:offset/:limit/:filterType/:value', component: Home },
]

export { routes }
