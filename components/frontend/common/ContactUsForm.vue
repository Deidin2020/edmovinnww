<template>
  <div>
    <form @submit.prevent="submitForm()">
      <div class="row row--10">
        <div class="form-group col-lg-12">
          <p v-if="alert_message" :class="alert_type" class="alert text-center py-3 mt-4 ">
            {{ alert_message }}
          </p>
        </div>

        <div class="space-y-2" style="margin-top:15px">
          <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"> {{
            $t('contact.full_name') }}</label>
          <input type="text" v-model="form.full_name"
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            :placeholder="$t('contact.full_name_placeholder')" name="full_name">
          <small v-if="errors && 'full_name' in errors" class="text-sm text-danger">
            {{ errors['full_name'][0] }}</small>
        </div>

        <!-- <div class="form-group col-lg-12">
          <label for="phone_number">
            {{ $t('inputs.phone') }}

          </label>
          <vue-phone-number-input id="phone_number" v-model="form.phone" :default-country-code="country_code"
            :translations="translations" :placeholder="`${$t('inputs.enter')} ${$t('inputs.phone')}`"
            @update="updatePhoneNumber" />
        </div> -->

        <div class="space-y-2" style="margin-top:15px"><label
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for=":ra:-form-item"> {{ $t('contact.phone') }}</label><input type="tel"
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            :placeholder="$t('contact.phone_placeholder')" name="phone_number" v-model="form.phone_number">
          <small v-if="errors && 'phone_number' in errors" class="text-sm text-danger">
            {{ errors['phone_number'][0] }}
          </small>
        </div>
        <div class="space-y-2" style="margin-top:15px"><label
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for=":rb:-form-item"> {{ $t('contact.message') }}</label><textarea
            class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[120px]"
            :placeholder="$t('contact.message_placeholder')" v-model="form.message" name="message" id=":rb:-form-item"
            aria-describedby=":rb:-form-item-description"></textarea>

          <small v-if="errors && 'message' in errors" class="text-sm text-danger">{{ errors['message'][0] }}</small>

        </div>

        <div class="form-group col-lg-12">
          <button style="margin-top: 15px;"
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
            name="submit" type="submit">
            {{ $t('contact.send_button') }}
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
        message: null
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
        const response = await this.$axios.post('/api/edmovinn/new_consultant_request', this.form)
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
        message: null
      };
    },
    emptyInitialAlerts() {
      this.alert_message = null;
      this.alert_type = null;
      this.errors = {};
    },
    updatePhoneNumber({ countryCode, formattedNumber }) {
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
<style>
.text-danger {
  color: #be2626;
}
</style>