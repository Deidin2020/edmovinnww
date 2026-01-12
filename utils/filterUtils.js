import debounce from 'lodash.debounce';

export const saveFiltersInBackEnd = debounce(function($axios, $auth, newFilters) {
    if (!$auth.loggedIn) {
        localStorage.setItem('savedWizard', JSON.stringify(newFilters));
        return;
    }

    return $axios.$post('/api/tenant/wizards', newFilters)
        .then(response => {
         //   console.log(response);
        })
        .catch(error => {
         //   console.error(error);
        });
}, 1000);
