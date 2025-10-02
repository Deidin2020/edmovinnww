<template>
  <div>
    <div class="row form-section col-md-10">
      <div class="login-form-box">
        <h3 class="title">
          {{ $t('pages.resetPassword.title') }}
        </h3>

        <p>
          {{ $t('pages.resetPassword.description') }}
        </p>

        <form>
          <AppInput v-model="form.new_password"
            :error="errors && 'new_password' in errors ? errors['new_password'][0] : null"
            :label="$t('inputs.new_password')" icon="/img/auth/icon-password.svg" type="password" />

          <AppInput v-model="form.new_password_confirmation"
            :error="errors && 'new_password_confirmation' in errors ? errors['new_password_confirmation'][0] : null"
            :label="$t('inputs.confirmation_new_password')" icon="/img/auth/icon-password.svg" type="password" />

          <div class="form-group pt-3">
            <button class="btn btn-primary w-100 mt-15" type="button" @click="resetPassword"> {{
              $t('auth.reset_password') }}
            </button>
          </div>
        </form>

        <div class="row">
          <div class="col-md-12 mt-2">
            <div class="sign-helper text-center mt-3">
              <p><i class="ri ri-arrow-right"></i>{{ $t('auth.remembered_password') }}
                <n-link :to="localePath('/login')">{{ $t('auth.sign_in') }}</n-link>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        new_password: null,
        new_password_confirmation: null,
        reset_token: null,
      },
      errors: null
    }
  },
  mounted() {
    this.extractResetToken();
  },
  methods: {
    resetPassword() {
      this.$axios.$post('/api/student/reset-password', this.form)
        .then(() => {
          this.$successAlert(this.$t('notification.password_reset_successfully'))

          setTimeout(() => {
            this.$router.push(this.localePath('/login'))
          }, 1000)
          //  console.log('tt')
        })
        .catch((error) => {
          this.errors = error.response.data.errors
        })
    },
    extractResetToken() {
      try {
        this.form.reset_token = localStorage.getItem('reset_token')
      } catch (error) {
        this.$router.push(this.localePath('/auth/forgot-password'))
      }
    }
  }
}
</script>
