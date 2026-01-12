<template>
  <div>
    <div class="row form-section col-md-10">
      <div class="login-form-box">
        <h3 class="title">
          {{ $t('pages.changeMobile.title') }}
        </h3>

        <p>
          {{ $t('pages.changeMobile.description') }}
        </p>

        <div v-if="error" class="alert alert-danger">
          {{ error }}
        </div>

        <form>
          <div class="form-group mobile">
            <label>{{ $t('inputs.phone') }}</label>

            <vue-phone-number-input v-model="contact_number" :placeholder="$t('phone_number.placeholder')"
              mode="international" @update="updatePhoneNumber" :translations="translations"
              :default-country-code="country_code" />
            <small v-if="errors && 'mobile' in errors" class="text-sm text-danger">
              {{ errors['mobile'][0] }}
            </small>
          </div>

          <div class="form-group pt-3">
            <button class="btn btn-primary w-100 mt-15" type="button" @click="changeMobile">
              {{ $t('actions.change_mobile') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  mounted() {
    this.fetchVisitorInfo();
  },
  data() {
    return {
      contact_number: '',
      mobile: '',
      errors: {},
      translations: {
        phoneNumberLabel: this.$t('inputs.phone_number_placeholder'),
      },
    }
  },
  computed: {
    ...mapGetters({
      country_code: 'visitor/countryCode'
    })
  },
  methods: {
    ...mapActions('visitor', ['fetchVisitorInfo']),
    changeMobile() {
      this.$axios.$put('/api/tenant/complete-profile', {
        mobile: this.mobile,
      }).then((res) => {
        this.$auth.setUser(res.data);
        localStorage.setItem('mobile', this.mobile);

        this.$successAlert(this.$t('notification.updated_successfully'))
        setTimeout(() => {
          window.location.href = this.localePath('/dashboard');
        }, 1000);
      }).catch((errors) => {
        if (errors.response.status !== 422) {
          this.$dangerAlert(this.$t('notification.error_occurred'))
        }
        this.errors = errors.response.data.errors;
      });
    },
    updatePhoneNumber({ countryCode, formattedNumber }) {
      this.mobile = formattedNumber;
    }
  }
};
</script>
