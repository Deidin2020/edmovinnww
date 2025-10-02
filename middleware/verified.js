export default function ({ $auth, redirect, app }) {
    const user = $auth.user

        if (user && !user.is_verified) {
           return redirect(app.localePath(`/auth/verify?mobile=${user.mobile}`));
        }
}
