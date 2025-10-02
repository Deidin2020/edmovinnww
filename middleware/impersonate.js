export default async function ({query, redirect, $auth, app}) {
    if ($auth.loggedIn) {
        await $auth.logout()
    }

    if (!query.impersonate && !query.token) {
        const lang = app.i18n.locale;

        if (lang === 'en') {
            redirect('/login');
        } else {
            redirect('/' + lang + '/login');
        }
    }
}
