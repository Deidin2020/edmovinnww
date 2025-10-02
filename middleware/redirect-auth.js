export default function ({ app, redirect, route }) {
    // Access the current locale
    const locale = app.i18n.locale;

    // Redirect to the login page if the user is not authenticated
    if (!app.$auth.loggedIn) {
        if (locale === 'en') {
            redirect('/login');
        } else {
            redirect('/' + locale + '/login');
        }
    }
}
