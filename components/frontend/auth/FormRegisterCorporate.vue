<template>
    <div>
        <div class="row form-section col-md-10">
            <div class="login-form-box">
                <h1 class="title h2"> {{ $t('pages.sign_up.title') }}</h1>
                <p> {{ $t('Sign up as a corporate') }}</p>

                <form @submit.prevent="submitForm()" enctype="multipart/form-data">
                    <div class="form-group col-lg-12">
                        <p v-if="alert_message" class="alert text-center py-3 mt-4 " :class="alert_type">
                            {{ alert_message }}
                        </p>
                    </div>
                    <div class="form-group">
                        <label class="icon-on-label"><img src="/img/auth/icon-user.svg" alt="user"
                                title="user" /></label>
                        <label for="name">{{ $t('inputs.full_name') }} *</label>
                        <input type="name" name="name" v-model="form.name" id="name"
                            :placeholder="$t('inputs.full_name')">
                        <small v-if="errors && 'name' in errors" class="text-sm text-danger">
                            {{ errors['name'][0] }}</small>
                    </div>
                    <div class="form-group">
                        <label class="icon-on-label"><img src="/img/auth/icon-user.svg" alt="user"
                                title="user" /></label>
                        <label for="contact_person">{{ $t('inputs.Contact Person') }}</label>
                        <input type="contact_person" name="contact_person" v-model="form.contact_person"
                            id="contact_person" :placeholder="$t('inputs.Contact Person placeholder')">
                        <small v-if="errors && 'contact_person' in errors" class="text-sm text-danger">
                            {{ errors['contact_person'][0] }}</small>
                    </div>
                    <div class="form-group">
                        <label for="contact_number">{{ $t('inputs.phone') }} *</label>
                        <vue-phone-number-input v-model="form.phone" id="contact_number"
                            :placeholder="$t('phone_number.placeholder')" @update="updatePhoneNumber" />
                        <small v-if="errors && 'contact_number' in errors" class="text-sm text-danger">
                            {{ errors['contact_number'][0] }}</small>
                    </div>
                    <div class="form-group">
                        <label class="icon-on-label"><img src="/img/auth/icon-website.svg" alt="user"
                                title="user" /></label>
                        <label for="website">{{ $t('inputs.Website') }}</label>
                        <input type="name" name="website" v-model="form.website" id="website"
                            placeholder="www.website.com">
                        <small v-if="errors && 'website' in errors" class="text-sm text-danger">
                            {{ errors['website'][0] }}</small>
                    </div>
                    <div class="form-group">
                        <label class="icon-on-label"><img src="/img/auth/icon-email.svg" alt="email"
                                title="email" /></label>
                        <label for="email">{{ $t('inputs.email') }} *</label>
                        <input type="email" name="email" v-model="form.email" id="email" placeholder="Email@mail.com">
                        <small v-if="errors && 'email' in errors" class="text-sm text-danger">
                            {{ errors['email'][0] }}</small>
                    </div>
                    <!-- <div class="form-group">
                        <label for="hear-about-us">How did you hear about us?</label>
                        <select  v-model="form.lead_source_id" id="hear-about-us" placeholder="Select an option...">
                            <option  value="" selected>Select an option...</option>
                            <option v-for="source in sources" :value="source.id">{{ source.name }}</option>
                        </select>
                        <small v-if="errors && 'lead_source_id' in errors" class="text-sm text-danger">{{ errors['lead_source_id'][0] }}</small>
                    </div> -->
                    <div class="form-group">
                        <label for="formFile">{{ $t('inputs.Attachments') }}</label>
                        <input class="form-control" type="file" id="formFile" @change="handleFileChange">
                        <small v-if="errors && 'documents' in errors" class="text-sm text-danger">
                            {{ errors['documents'][0] }}</small>
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
                website: "",
                contact_person: "",
                contact_number: "",
                email: "",
                lead_source_id: "",
                type: "Corporate",
                country_code: "",
                phone: "",
                contact_number: "",
                documents: "",
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
        updateLeadSource() {
            this.form.lead_source_id = this.selectedSource;
        },
        async fetchSource() {
            try {
                const res = await this.$axios.get('/api/sources');
                this.sources = res.data.result.items.map(item => ({
                    id: item.id,
                    name: item.name,
                }));
            } catch (error) {
                //console.error("Error fetching sources:", error);
            }
        },
        handleFileChange(event) {
            const file = event.target.files[0];
            if (!file) return;
            this.form.documents = [];
            this.form.documents.push(file);
        },
        async submitForm() {
            this.emptyInitialAlerts();
            try {
                const formData = new FormData();
                formData.append('name', this.form.name);
                formData.append('website', this.form.website);
                formData.append('contact_person', this.form.contact_person);
                formData.append('contact_number', this.form.contact_number);
                formData.append('email', this.form.email);
                formData.append('lead_source_id', this.form.lead_source_id);
                formData.append('type', "Corporate");
                if (this.form.documents?.length > 0) {
                    formData.append('document', this.form.documents[0]);
                }

                const response = await this.$axios.post('/api/leadSubscription', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                this.alert_message = response.data.message;
                this.alert_type = response.data.success ? 'alert-success' : 'alert-danger';
                this.errors = response.data.errors;
                if (response.data.success) {
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
                website: "",
                contact_person: "",
                contact_number: "",
                email: "",
                lead_source_id: "",
                type: "Corporate",
                country_code: "",
                phone: "",
                documents: "",
            };
            const fileInput = document.getElementById('formFile');
            // console.log(fileInput);
            // console.log(fileInput.value);
            fileInput.value = '';
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
