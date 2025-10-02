<template>
    <div>
        <div class="row form-section col-md-10">
            <div class="login-form-box">
                <h3 class="title">
                    {{ $t('pages.sign_up.title') }}
                </h3>

                <p>
                    {{ $t('pages.sign_up.description') }}
                </p>

                <form @submit.prevent="submitForm()">
                    <AppInput v-model="form.full_name"
                        :error="errors && 'full_name' in errors ? errors['full_name'][0] : null"
                        :label="$t('inputs.full_name')" icon="/img/auth/icon-user.svg" />

                    <div class="form-group mobile">
                        <label>{{ $t('inputs.phone') }}</label>

                        <vue-phone-number-input v-model="form.contact_number" :translations="translations"
                            mode="international" @update="updatePhoneNumber" :default-country-code="country_code" />

                        <small v-if="errors && 'mobile' in errors" class="text-sm text-danger">
                            {{ errors['mobile'][0] }}
                        </small>
                    </div>

                    <AppInput v-model="form.email" type="email"
                        :error="errors && 'email' in errors ? errors['email'][0] : null" :label="$t('inputs.email')"
                        icon="/img/auth/icon-email.svg" placeholder="Email@mail.com" />

                    <AppInput v-model="form.password"
                        :error="errors && 'password' in errors ? errors['password'][0] : null"
                        :label="$t('inputs.password')" :type="passwordFieldType" icon="/img/auth/icon-password.svg" />

                    <AppInput v-model="form.password_confirmation"
                        :error="errors && 'password' in errors ? errors['password'][0] : null"
                        :label="$t('inputs.password_confirmation')" :type="passwordConfirmationFieldType"
                        icon="/img/auth/icon-password.svg" />

                    <div class="form-group mt-4">
                        <button class="btn btn-primary w-100 mt-15" type="submit" :disabled="disabledButton">
                            {{ $t('actions.sign_up') }}
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
                    <div class="primary-auth-container">
                        <div class="row  mt-3">
                            <div class="col-md-12">
                                <div class="sign-helper text-center mt-3">
                                    <p>{{ $t('auth.do_have_account') }}
                                        <NuxtLink :to="localePath('/login')">
                                            {{ $t('auth.sign_in') }}
                                        </NuxtLink>
                                    </p>
                                </div>
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
    props: {
        apiUrl: {
            type: String,
            default: '/api/student/register'
        }
    },
    data() {
        return {
            alert_message: null,
            alert_type: null,
            sources: [],
            form: {
                full_name: null,
                email: null,
                password: null,
                password_confirmation: null,
                country_code: null,
                contact_number: null,
            },
            errors: {},
            passwordFieldType: 'password',
            passwordConfirmationFieldType: 'password',
            disabledButton: false,
            translations: {
                phoneNumberLabel: this.$t('inputs.phone_number_placeholder'),
            },
        }

    },
    methods: {
        ...mapActions('visitor', ['fetchVisitorInfo']),

        togglePasswordVisibility(fieldType) {
            this[fieldType] = this[fieldType] === 'password' ? 'text' : 'password';
        },
        async submitForm() {
            this.disabledButton = true;
            this.emptyInitialAlerts();

            await this.$axios.post('/api/student/register', this.form)
                .then((res) => {
                    if (res.data.success) {
                        this.loginUser().then(() => {
                            this.disabledButton = false;
                            localStorage.setItem('mobile', this.form.mobile);
                            this.gotToVerifyPage();
                        });
                    }
                }).catch((errors) => {
                    // 502 that's mean there is a problem with send OTP
                    if (errors.response.status === 502) {
                        this.loginUser().then(() => {
                            localStorage.setItem('mobile', this.form.mobile);
                            this.gotToVerifyPage(errors.response.data.message);
                        });
                        // this.gotToVerifyPage(errors.response.data.message);
                    } else if (errors.response.status === 422) {
                        this.errors = errors.response.data.errors;
                    } else {
                        this.$dangerAlert(this.$t('notification.error_occurred'))
                    }
                    this.disabledButton = false;
                }
                )
                ;
        },
        gotToVerifyPage(message) {
            setTimeout(() => {
                this.$router.push({
                    path: this.localePath('/auth/verify'),
                    query: { mobile: this.form.mobile, error: message }
                });
            }, 2500);
        }
        ,
        resetFormData() {
            this.form = {
                full_name: null,
                email: null,
                password: null,
                password_confirmation: null,
                country_code: null,
                mobile: null,
                contact_number: null,
            };
        },
        emptyInitialAlerts() {
            this.alert_message = null;
            this.alert_type = null;
            this.errors = {};
        },
        updatePhoneNumber({ countryCode, formattedNumber }) {
            this.form.country_code = countryCode;
            this.form.mobile = formattedNumber;
        },
        async loginUser() {
            await this.$auth.loginWith('local', {
                data: {
                    mobile: this.form.mobile,
                    password: this.form.password,
                },
            }).then((res) => {
                this.$successAlert(this.$t('notification.register_successfully'))
            }).catch((error) => {
                this.errors = error.response.data.errors;
                this.error = error.response.data.message;
            });
        }
    },
    async mounted() {
        await this.fetchVisitorInfo();
    },
    computed: {
        ...mapGetters({
            country_code: 'visitor/countryCode'
        })
    }
};
</script>
