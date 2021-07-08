import Nav from '../../views/public/Nav.svelte';
import { navigate } from 'svelte-routing';
import { auth } from '../../utils/auth.ts';
import { toasts, ToastContainer, FlatToast } from 'svelte-toasts';
import config from '../../../env';
import { axiosInstance } from '../../utils/axios.ts';
let user = { name: '', rollno:'', password: '', password_repeat: '', discordHandle: '', batch:''}
let inProgress = false
let error = null

async function submit () {
    inProgress = true;
    axiosInstance({
        method: 'post',
        url: `${config.backendurl}/auth/register`,
        data: user,
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
        localStorage.setItem('scrumAuth', 'true');
        auth.set('true');
        window.location.href = '/';
        inProgress = false;
        error = null;
    })
    .catch(err => {
        let error = 'Something went wrong, please try again!';
        console.log(err);
        if (err.response) {
            error = err.response.data.detail[0].msg;
        }
        inProgress = false;
        toasts.add({
            title: 'Oops',
            description: error,
            duration: 5000,
            placement: 'bottom-right',
            type: 'error',
            showProgress: true
        });
    });
}
