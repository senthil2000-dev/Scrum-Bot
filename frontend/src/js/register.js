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
        toasts.add({
            title: 'Success!',
            description: response.data.message,
            duration: 10000, // 0 or negative to avoid auto-remove
            placement: 'bottom-right',
            type: 'success',
            showProgress: true
        });
    })
    .catch(err => {
        let error = 'Something went wrong, please try again!';
        console.log(err);
        if (err.response) {
            error = err.response.data.message;
        } else if (err.request) {
            error = err.request.data.message;
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
