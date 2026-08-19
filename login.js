const params = new URLSearchParams(window.location.search);
if (params.get('error') === '1') {
    document.getElementById('login-error').hidden = false;
    history.replaceState({}, '', '/login');
}
