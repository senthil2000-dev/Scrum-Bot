let disp = false;
const cross = () => {
    disp = !disp;
}

const home = () => {
    window.location.href = '/';
}

let pathRequested = window.location.pathname;
if(pathRequested != '/register' &&	pathRequested != '/login') {
    if(!localStorage.getItem("scrumAuth"))
        window.location.href = '/login';
}
