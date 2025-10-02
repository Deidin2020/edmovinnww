export default function ({ req, redirect, $auth , app}) {
    if ($auth.loggedIn) {
        return redirect(app.localePath(`/dashboard`));

    }
}
