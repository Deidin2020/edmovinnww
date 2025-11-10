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
        <form class="space-y-4" @submit.prevent="onSubmit('signin')">
          <!-- method chooser (Email / Phone) -->
          <div class="space-y-2">
            <label class="text-sm font-medium leading-none">{{ $t('auth.sign_in_with')
            }}</label>
            <div class="flex rounded-md border overflow-hidden">
              <button type="button"
                :class="['inline-flex items-center justify-center gap-2 flex-1 px-4 py-2 h-10', method === 'email' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent']"
                @click="method = 'email'" aria-pressed="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-mail h-4 w-4 mr-2">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                {{ $t('auth.email') }}
              </button>

              <button type="button"
                :class="['inline-flex items-center justify-center gap-2 flex-1 px-4 py-2 h-10', method === 'phone' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent']"
                @click="method = 'phone'" aria-pressed="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-phone h-4 w-4 mr-2">
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72">
                  </path>
                </svg>
                {{ $t('auth.phone') }}
              </button>
            </div>
          </div>

          <!-- Email fields -->
          <div v-show="method === 'email'">
            <div class="space-y-2">
              <label for="identifier" class="text-sm font-medium leading-none">{{
                $t('auth.email_address') }}</label>
              <input v-model="form.email" type="email" id="identifier" name="email"
                :placeholder="$t('auth.email_placeholder')" required
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
            </div>

            <div class="space-y-2">
              <label for="password" class="text-sm font-medium leading-none">{{
                $t('auth.password') }}</label>
              <div class="relative">
                <input v-model="form.password" type="password" id="password" name="password"
                  :placeholder="$t('auth.password_placeholder')" required
                  class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
                <button type="button" @click="toggleShowPassword" class="absolute right-0 top-0 h-full px-3 py-2">
                  <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path
                      d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0">
                    </path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-4.97 0-9.5-3.2-11-8 1.08-3.14 3.37-5.64 6.42-6.9">
                    </path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Phone fields -->
          <div v-show="method === 'phone'">
            <div class="space-y-2">
              <label for="phoneInput" class="text-sm font-medium leading-none">{{
                $t('auth.phone_number') }}</label>
              <input v-model="form.phone" type="tel" id="phoneInput" name="phone"
                :placeholder="$t('auth.phone_placeholder')" required
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
            </div>

            <div class="space-y-2">
              <label for="pin" class="text-sm font-medium leading-none">
                {{ $t('auth.pin') }}</label>
              <input v-model="form.pin" type="text" id="pin" name="pin" :placeholder="$t('auth.pin_placeholder')"
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
            </div>
          </div>

          <div class="flex justify-end">
            <button type="button"
              class="underline-offset-4 hover:underline py-2 px-0 h-auto text-sm text-muted-foreground"
              @click.prevent="onForgot">
              {{ $t('auth.forgot_password') }}
            </button>
          </div>

          <button type="submit"
            class="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
            {{ $t('auth.sign_in') }}
          </button>
        </form>
        <form>
          <div class="form-group mobile">
            <label>{{ $t('inputs.phone') }}</label>

            <vue-phone-number-input v-model="form.contact_number" :default-country-code="country_code"
              :placeholder="$t('inputs.phone')" mode="international" :translations="translations"
              @update="updatePhoneNumber" />

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
            <NuxtLink class="password-reset" :to="localePath('/auth/forgot-password')">{{ $t('auth.forget_password') }}
            </NuxtLink>
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
              <GoogleLogin />
            </div>
            <div class="col-md-12">
              <FacebookLogin />
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
import { mapActions, mapGetters } from 'vuex';

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
        if (errors.response.status === 400) {
          this.error = errors.response.data.message ?? this.$t('notification.error_occurred');
        }
        else if (errors.response.status !== 422) {
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

    updatePhoneNumber({ countryCode, formattedNumber }) {
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
