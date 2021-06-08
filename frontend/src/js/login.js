// import { goto } from '@sapper/app'

import Nav from '../../views/public/Nav.svelte';

let user = { rollno: '', password: '' }
let inProgress = false
let error = null

async function submit () {
    try {
        inProgress = true
        console.log('send request to login user ' + user.rollno)
        inProgress = false
        error = null
        user = { rollno: '', password: '' }
        // goto('/')
    } catch (err) {
        error = err.response.data.message
        inProgress = false
    }
}