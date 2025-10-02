<template>
    <div>
        <div class="row form-section col-md-10">
            <div class="login-form-box">
                <h1 class="title h2"> {{ $t('pages.sign_up.title') }}</h1>
                <p> {{ $t('Sign up as a individual') }}</p>
                <form @submit.prevent="submitForm()">
                    <div class="form-group col-lg-12">
                        <p v-if="alert_message" class="alert text-center py-3 mt-4 " :class="alert_type">
                            {{ alert_message }}
                        </p>
                    </div>

                    <input type="hidden" name="type" v-model="form.type">

                    <div class="form-group">
                        <label class="icon-on-label"><img src="/img/auth/icon-user.svg" alt="user"
                                title="user" /></label>
                        <label for="name">{{ $t('inputs.full_name') }} *</label>
                        <input type="name" name="name" v-model="form.name" id="name"
                            :placeholder="$t('inputs.full_name')">
                        <small v-if="errors && 'name' in errors" class="text-sm text-danger">
                            {{ errors['name'][0] }}</small>
                    </div>
                    <!-- <div class="form-group">
                        <label for="lead_source_id">How did you hear about us?</label>
                        <select name="lead_source_id" v-model="form.lead_source_id" id="lead_source_id" placeholder="Select an option...">
                            <option  value="" selected>Select an option...</option>
                            <option v-for="source in sources" :value="source.id">{{ source.name }}</option>
                        </select>
                        <small v-if="errors && 'lead_source_id' in errors" class="text-sm text-danger">{{ errors['lead_source_id'][0] }}</small>
                    </div> -->
                    <div class="form-group">
                        <label for="contact_number">{{ $t('inputs.phone') }} *</label>

                        <vue-phone-number-input v-model="form.phone" id="phone_number" required
                            :translations="translations" :placeholder="$t('phone_number.placeholder')"
                            @update="updatePhoneNumber" />
                        <small v-if="errors && 'contact_number' in errors" class="text-sm text-danger">
                            {{ errors['contact_number'][0] }}</small>
                    </div>
                    <div class="form-group">
                        <label class="icon-on-label"><img src="/img/auth/icon-email.svg" alt="email"
                                title="email" /></label>
                        <label for="email">{{ $t('inputs.email') }} *</label>
                        <input type="email" name="email" v-model="form.email" id="email" placeholder="Email@mail.com">
                        <small v-if="errors && 'email' in errors" class="text-sm text-danger">
                            {{ errors['email'][0] }}</small>
                    </div>

                    <div class="form-group">
                        <label class="icon-on-label"><img src="/img/auth/icon-current-work.svg" alt="email"
                                title="email" /></label>
                        <label for="current_work">{{ $t('inputs.Current Work') }} </label>
                        <input type="name" name="current_work" id="current_work"
                            :placeholder="this.$t('inputs.Current Work Placeholder')">
                        <small v-if="errors && 'current_work' in errors" class="text-sm text-danger">
                            {{ errors['current_work'][0] }}</small>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary w-100 mt-15">{{ $t('actions.sign_up') }}</button>
                    </div>
                </form>

                <div class="row  mt-3">
                    <div class="col-md-12">
                        <div class="sign-helper text-center mt-3">
                            <p> {{ $t('auth.do_have_account') }} <n-link :to="localePath('/login')">{{
                                    $t('auth.sign_in') }}</n-link> </p>
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
            alert_message: null,
            alert_type: null,
            sources: [],
            form: {
                name: "",
                lead_source_id: "",
                phone: "",
                email: "",
                contact_number: "",
                country_code: "",
                phone: "",
                current_work: "",
                type: "Individual",
            },
            errors: {},
            translations: {
                phoneNumberLabel: this.$t('inputs.phone_number_placeholder'),
            },
        }

    },
    async created() {
        await this.fetchSource();
    },

    methods: {
        async fetchSource() {
            try {
                const res = await this.$axios.get('/api/sources');
                this.sources = res.data.result.items.map(item => ({
                    id: item.id,
                    name: item.name,
                }));
            } catch (error) {
                // console.error("Error fetching sources:", error);
            }
        },
        async submitForm() {
            // console.log(this.form);
            this.emptyInitialAlerts();
            try {
                const res = await this.$axios.post('/api/leadSubscription', this.form);
                this.alert_message = res.data.message;
                this.alert_type = res.data.success ? 'alert-success' : 'alert-danger';
                this.errors = res.data.errors;
                if (res.data.success) {
                    this.resetFormData();
                }

            } catch (e) {
                if (e.response.status !== 422) {
                    this.alert_message = e.response.data.message;
                    this.alert_type = e.response.data.status ? 'alert-success' : 'alert-danger';
                }
                this.errors = e.response.data.errors;
            }
        },
        resetFormData() {
            this.form = {
                name: "",
                lead_source_id: "",
                phone: "",
                email: "",
                contact_number: "",
                country_code: "",
                phone: "",
                current_work: "",
                type: "Individual",
            };
        },
        emptyInitialAlerts() {
            this.alert_message = null;
            this.alert_type = null;
            this.errors = {};
        },
        updatePhoneNumber({ countryCode, formattedNumber }) {
            this.form.country_code = countryCode;
            this.form.contact_number = formattedNumber;

        }
    }

};
</script>
