<template>
  <div class="space-y-4">
    <form class="space-y-4">
      <div class="space-y-2"> <label>{{ $t('inputs.phone') }}</label>

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
      <div class=" space-y-4">
        <div class="edu-form-check">
          <input id="remember-me" v-model="form.remember_me" type="checkbox">
          <label for="remember-me">{{ $t('auth.remember_me') }}</label>
        </div>
        <NuxtLink class="password-reset" :to="localePath('/auth/forgot-password')">{{ $t('auth.forget_password') }}
        </NuxtLink>
      </div>

      <div class="form-group space-y-4">
        <button
          class="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
          type="button" @click="login">
          {{ $t('actions.login') }}
        </button>
      </div>
    </form>
  </div>

  <!-- 
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
        </div> -->
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
      }).catch((errors) => {
        if (errors.response.status == 422) {
          this.errors = errors.response.data.errors;
        } else {
          this.$dangerAlert(errors.response.data.message ?? this.$t('notification.error_occurred'))
        }
      });

      // setTimeout(() => {
      //   if (this.$auth.loggedIn) {
      //     const redirect = localStorage.getItem('redirect');

      //     if (redirect) {
      //       localStorage.removeItem('redirect');

      //       window.location.href = this.localePath(redirect);
      //     } else {
      //       window.location.href = this.localePath('/dashboard/discover');
      //     }
      //   }
      // }, 500);
    },


    updatePhoneNumber({ countryCode, formattedNumber }) {
      this.form.country_code = countryCode;
      this.form.mobile = formattedNumber;
    },
  },
  computed: {
    ...mapGetters({
      country_code: 'visitor/countryCode'
    })
  }


};
</script>
<style>
input[type="tel"] {
  margin-top: calc(.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(.5rem * var(--tw-space-y-reverse));

  /* typography */
  font-size: 1rem;
  line-height: 1.5rem;
  font-family: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  color: inherit;

  /* padding */
  padding-top: .5rem;
  padding-bottom: .5rem;
  padding-left: .75rem;
  padding-right: .75rem;

  /* background & border */
  background-color: hsl(var(--background));
  border-color: hsl(var(--input));
  border-width: 1px;
  border-radius: calc(var(--radius) - 2px);

  /* size */
  width: 100%;
  height: 2.5rem;

  /* display */
  display: flex;

  /* remove default input/button styles */
  margin: 0;
  padding: 0;
}
</style>