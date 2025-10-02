<template>
  <div>
    <form @submit.prevent="submitForm()">
      <div class="row row--10">
        <div class="form-group col-lg-12">
          <p v-if="alert_message" :class="alert_type" class="alert text-center py-3 mt-4 ">
            {{ alert_message }}
          </p>
        </div>

        <div class="form-group col-lg-12">
          <label for="full_name">{{ $t('inputs.full_name') }}</label>
          <input id="full_name" v-model="form.full_name" :placeholder="$t('inputs.full_name_placeholder')" type="text">
          <small v-if="errors && 'full_name' in errors" class="text-sm text-danger">{{
            errors['full_name'][0] }}</small>
        </div>

        <div class="form-group col-lg-12">
          <label for="phone_number">
            {{ $t('inputs.phone') }}

          </label>
            <vue-phone-number-input
                id="phone_number"
                v-model="form.phone"
                :default-country-code="country_code"
                :translations="translations"
                :placeholder="`${$t('inputs.enter')} ${$t('inputs.phone')}`" 
                @update="updatePhoneNumber"
            />

          <small v-if="errors && 'phone_number' in errors" class="text-sm text-danger">
            {{ errors['phone_number'][0] }}
          </small>
        </div>
        <div class="form-group col-lg-12">
          <label for="specialty">{{ $t('inputs.specialty') }}</label>
          <input id="specialty" v-model="form.specialty" :placeholder="$t('inputs.specialty_placeholder')" type="text">
          <small v-if="errors && 'specialty' in errors" class="text-sm text-danger">{{
            errors['specialty'][0] }}</small>
        </div>
        <div class="form-group col-lg-12">
          <button class="btn btn-primary w-100 zindex1" name="submit" type="submit">
            {{ $t('actions.send_message') }}
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      alert_message: null,
      alert_type: null,
      form: {
        full_name: null,
        country_code: null,
        phone: null,
        phone_number: null,
        specialty: null
      },
      translations: {
        phoneNumberLabel: this.$t('inputs.phone_number_placeholder'),
      },
      errors: {},
    }
  },
  mounted() {
    this.fetchVisitorInfo()
  },
  methods: {
    async submitForm() {
      this.emptyInitialAlerts();
      try {
        const response = await this.$axios.post('/api/new_consultant_request', this.form)
        this.alert_message = response.data.message;
        this.alert_type = response.data.success ? 'alert-success' : 'alert-danger';
        this.errors = response.data.errors;
        if (response.data.success) {
          this.$successAlert(this.alert_message);
          this.resetFormData();
          this.$emit('hide');
        }
      } catch (e) {
        if (e.response.status !== 422) {
          this.alert_message = e.response.data.message;
          this.alert_type = e.response.data.status ? 'alert-success' : 'alert-danger';
        }
        this.errors = e.response.data.errors;
      }

    //   setTimeout(() => {
    //     this.emptyInitialAlerts();
    //   }, 5000);
    },
    resetFormData() {
      this.form = {
        full_name: null,
        country_code: null,
        phone: null,
        phone_number: null,
        specialty: null
      };
    },
    emptyInitialAlerts() {
      this.alert_message = null;
      this.alert_type = null;
      this.errors = {};
    },
    updatePhoneNumber({countryCode, formattedNumber}) {
      this.form.country_code = countryCode;
      this.form.phone_number = formattedNumber;

    },
    ...mapActions('visitor', ['fetchVisitorInfo'])
  },
  computed: {
    ...mapGetters({
      country_code: 'visitor/countryCode'
    })
  }
};
</script>

