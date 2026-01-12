<template>
  <div>
    <div class="row form-section col-md-10">
      <div class="login-form-box">
        <h3 class="title">
          {{ $t('pages.completeProfile.title') }}
        </h3>

        <p>
          {{ $t('pages.completeProfile.description') }}
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

            <small v-if="error" class="text-sm text-danger">
              {{ error }}
            </small>
          </div>

          <div class="form-group pt-3">
            <button class="btn btn-primary w-100 mt-15" type="button" @click="completeProfile">
              {{ $t('actions.complete_profile') }}
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
      error: null,
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
    completeProfile() {
      this.$axios.$put('/api/tenant/complete-profile', {
        mobile: this.mobile,
      }).then((res) => {
        this.$auth.setUser(res.data);

        setTimeout(() => {
          window.location.href = this.localePath('/dashboard');
        }, 1000);
      }).catch((error) => {
        this.$dangerAlert(error.response.data.message);
      });
    },
    updatePhoneNumber({ countryCode, formattedNumber }) {
      this.mobile = formattedNumber;
    }
  }
};
</script>
