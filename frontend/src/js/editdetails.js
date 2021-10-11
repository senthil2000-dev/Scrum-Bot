import Nav from '../../views/public/Nav.svelte';
import FootNote from '../../views/public/FootNote.svelte';
import { navigate } from 'svelte-routing';
import { auth } from '../../utils/auth.ts';
import { toasts, ToastContainer, FlatToast } from 'svelte-toasts';
import config from '../../../env';
import { axiosInstance } from '../../utils/axios.ts';
let user = { name: '', rollno:'', discordHandle: '', batch:''}
let inProgress = false
let error = null

async function save () {
    inProgress = true;
}
