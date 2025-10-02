<template>
  <div>
    <div class="row form-section col-md-10">
      <div class="login-form-box mt-5 pt-5">
        <h3 class="title">
          {{ $t('pages.verify.title') }}
        </h3>

        <p>
          {{ $t('pages.verify.description') }}
          <span class="text-primary">
            {{ form?.mobile }}
            <span class="text-dark" @click="editMobile" style="cursor:pointer; font-weight: 600">
              ({{ $t('edit') }})
            </span>
          </span>
        </p>

        <div class="row">
          <OtpInput
            @value="form.code = $event"
            :is-valid="!error"
          >
            <template #errorMessage>
              <small class="text-sm text-danger">
                {{ error }}
              </small>
            </template>
          </OtpInput>

          <div class="form-group w-100 mt-5">
            <button
              class="btn btn-primary w-100 mt-15"
              type="button"
              @click="verifyMobile"
            >
              {{ $t('actions.verify') }}
            </button>
          </div>

          <div class="resend pt-2 text-center w-100">
            <p>
              {{ $t('pages.verify.did_not_receive_code') }}
              <span v-if="resendTimer > 0">
                ({{ resendTimer }}s)
              </span>
              <a
                href="#"
                @click.prevent="handleManualResend"
                v-else
              >
                {{ $t('actions.resend') }}
              </a>
            </p>
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
        mobile: null,
        code: null,
      },
      error: null,
      resendTimer: 0,
      resendInterval: null,
      initialCodeSent: false,
    };
  },
  mounted() {
    this.showErrorQueryMessage();
    const queryMobile = this.$route.query.mobile;
    if (queryMobile) {
      this.form.mobile = queryMobile.startsWith('+')
        ? queryMobile.replace(/\s/g, '')
        : '+' + queryMobile.replace(/\s/g, '');

      localStorage.setItem('mobile', this.form.mobile);
    }

   

  },
  methods: {
    verifyMobile() {
      this.error = null;

      if (!this.form.code || this.form.code.length !== 6) {
        this.error = this.$t('notification.invalid_code');
        return;
      }

      this.$axios.$post('api/student/verify-mobile', this.form)
        .then(response => {
          console.log(response);
          this.$successAlert(response.message);
           this.$auth.fetchUser().then(() => {
            this.$router.push(this.localePath('/dashboard'));
          });
        })
        .catch(error => {
          this.error = error.response?.data?.message || this.$t('notification.error_occurred');
        });
    },

  
    resendCode() {
      this.removeErrorQuery();

      this.$axios.$post('api/student/resend-mobile-code', { mobile: this.form.mobile })
        .then(response => {
          this.$successAlert(response.message);
          this.resendTimer = 30;

          clearInterval(this.resendInterval);
          this.resendInterval = setInterval(() => {
            if (this.resendTimer > 0) {
              this.resendTimer--;
            } else {
              clearInterval(this.resendInterval);
            }
          }, 1000);
        })
        .catch(error => {
          this.$dangerAlert(error.response?.data?.message || this.$t('notification.error_occurred'));
        });
    },

    handleManualResend() {
      if (this.resendTimer === 0) {
        this.resendCode();
      }
    },

    editMobile() {
      this.$router.push(this.localePath('/auth/change-mobile'));
    },

    showErrorQueryMessage() {
      if (this.$route.query.error) {
        setTimeout(() => {
          this.$dangerAlert(this.$route.query.error);
          this.removeErrorQuery();
        }, 3000);
      }
    },

    removeErrorQuery() {
      this.$router.replace({
        path: this.$route.path,
        query: { mobile: this.$route.query.mobile },
      });
    },
  },
  beforeDestroy() {
    clearInterval(this.resendInterval);
  },
};
</script>
