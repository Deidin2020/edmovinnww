export default function ({ $auth, redirect , app}) {
    const user = $auth.user

    if (user && !user.mobile) {
        const lang = app.i18n.locale;

        if (lang === 'en') {
            redirect('/auth/complete-profile');
        } else {
            redirect('/' + lang + '/auth/complete-profile');
        }
    }
}
