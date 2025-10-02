<template>
</template>
<script>
export default {
    middleware: ['impersonate'],
    mounted() {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        const impersonate = urlParams.get('impersonate');
        if (token) {
            this.$auth.setUserToken(token);
            if (impersonate) {
                localStorage.setItem('impersonate', impersonate);
            }
            const redirect = localStorage.getItem('redirect');
            if (redirect) {
                localStorage.removeItem('redirect');
                window.location.href = this.localePath(redirect);
            } else {
                window.location.href = this.localePath('/dashboard');
            }
        }
    },
};
</script>
