<template>
  <div>
    <div class="row form-section col-md-10">
      <div class="login-form-box">
        <h3 class="title">
          {{ $t('pages.login.title') }}
        </h3>

        <p>
          {{ $t('pages.login.description') }}
        </p>

        <form>
          <div class="form-group mobile">
              <label>{{ $t('inputs.phone') }}</label>

              <vue-phone-number-input
                  v-model="form.contact_number"
                  :default-country-code="country_code"
                  :placeholder="$t('inputs.phone')"
                  mode="international"
                :translations="translations"
                  @update="updatePhoneNumber"
              />

              <small v-if="errors && 'mobile' in errors" class="text-sm text-danger">
                  {{ errors['mobile'][0] }}
              </small>
          </div>

          <AppInput v-model="form.password" :error="errors && 'password' in errors ? errors['password'][0] : null"
            :label="$t('inputs.password')" icon="/img/auth/icon-password.svg" type="password" />

          <small v-if="error" class="text-sm text-danger">
            {{ error }}
          </small>

          <div class="form-group chekbox-area">
            <div class="edu-form-check">
              <input id="remember-me" v-model="form.remember_me" type="checkbox">
              <label for="remember-me">{{ $t('auth.remember_me') }}</label>
            </div>
          <NuxtLink class="password-reset" :to="localePath('/auth/forgot-password')">{{ $t('auth.forget_password') }}</NuxtLink>
          </div>

          <div class="form-group">
            <button class="btn btn-primary w-100 mt-15" type="button" @click="login">
              {{ $t('actions.login') }}
            </button>
          </div>
        </form>

        <div class="primary-auth-container">
            <div class="auth-divider">
                <span class="auth-divider-text">{{ $t('auth.Or') }}</span>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <GoogleLogin/>
                </div>
                <div class="col-md-12">
                    <FacebookLogin/>
                </div>
            </div>
            <div class="row  mt-3">
                <div class="col-md-12">
                    <div class="sign-helper text-center mt-3">
                        <p>{{ $t('auth.have_account') }}
                            <NuxtLink :to="localePath('/signup')">{{ $t('auth.sing_up') }}</NuxtLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
    data() {
        return {
            sources: null,
            form: {
                email: null,
                password: null,
                remember_me: null,
                mobile: null,
            },
            errors: {},
            error: null,
            showPassword: false,
            translations: {
                phoneNumberLabel: this.$t('inputs.phone_number_placeholder'),
            },
        }
    },
    mounted() {
        this.fetchVisitorInfo();
    },
    methods: {
        ...mapActions('visitor', ['fetchVisitorInfo']),
        async login() {
          this.error = null;
            await this.$auth.loginWith('local', {
                data: this.form,
            }).then((res) => {
                localStorage.setItem('mobile', this.form.mobile);
                this.$successAlert(this.$t('notification.login_successfully'));
                this.saveFiltersInDatabase();
            }).catch((errors) => {
               if(errors.response.status === 400){
                this.error = errors.response.data.message ?? this.$t('notification.error_occurred');
              }
              else if(errors.response.status !== 422){
                this.$dangerAlert(errors.response.data.message ?? this.$t('notification.error_occurred'))
              }
              this.errors = errors.response.data.errors;
            });
            
            setTimeout(() => {
                if (this.$auth.loggedIn) {
                    const redirect = localStorage.getItem('redirect');
                    
                    if (redirect) {
                        localStorage.removeItem('redirect');

                        window.location.href = this.localePath(redirect);
                    } else {
                        window.location.href = this.localePath('/dashboard/discover');
                    }
                }
            }, 500);
        },

        emptyInitialAlerts() {
            this.alert_message = null;
            this.alert_type = null;
            this.errors = {};
        },

    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
      const passwordField = document.getElementById('current-log-password');
      if (this.showPassword) {
        passwordField.type = 'text';
      } else {
        passwordField.type = 'password';
      }
    },

    updatePhoneNumber({countryCode, formattedNumber}) {
      this.form.country_code = countryCode;
      this.form.mobile = formattedNumber;
    },
    async saveFiltersInDatabase() {
            const savedFilters = JSON.parse(localStorage.getItem('savedWizard'));
            if (savedFilters) {
                try {
                    await this.$axios.$post('/api/student/wizards', savedFilters).then(() => {
                        localStorage.removeItem('savedWizard');
                    });
                } catch (error) {
                    //console.error('Error occurred while saving filters:', error.response ? error.response.data : error);
                }
            }
        }    
    },
  computed: {
    ...mapGetters({
      country_code: 'visitor/countryCode'
    })
  }


};
</script>
