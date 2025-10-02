export default function ({ $axios, redirect, $cookiz, app }) {
  $axios.setHeader('local', app.i18n.locale);

  //console.log(app.i18n.locale);
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);

    if (code === 401) {
        const lang = app.i18n.locale;
        
        if (lang === 'en') {
            redirect('/login');
        } else {
            redirect('/' + lang + '/login');
        }
    }
  });
}



