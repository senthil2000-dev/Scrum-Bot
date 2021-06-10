// import { goto } from '@sapper/app'

import Nav from '../../views/public/Nav.svelte';

let user = { name: '', email:'', rollno:'', password: '', password_repeat: '', discordhandle: '', batch:''}
let inProgress = false
let error = null

async function submit () {
    try {
        inProgress = true
        console.log('send request to register user ' + user.rollno + ' with user object')
        console.log(user)
        inProgress = false
        error = null
        // goto('/')
    } catch (err) {
        error = err.response.data.message
        inProgress = false
    }
}