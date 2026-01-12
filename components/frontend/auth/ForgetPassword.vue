<template>
    <div>
        <div class="row form-section col-md-10">
            <div class="login-form-box">
                <h3 class="title">
                    {{ $t('pages.forgotPassword.title') }}
                </h3>

                <p>
                    {{ $t('pages.forgotPassword.description') }}
                </p>

                <form>
                    <div class="form-group mobile">
                        <label>{{ $t('inputs.phone') }}</label>

                        <vue-phone-number-input v-model="contact_number" :placeholder="$t('phone_number.placeholder')"
                            mode="international" :translations="translations" :default-country-code="country_code"
                            @update="updatePhoneNumber" />

                        <small v-if="errors && 'mobile' in errors" class="text-sm text-danger"
                            v-for="(error, index) in errors['mobile']">
                            {{ error }} <br>
                        </small>

                        <small v-if="error" class="text-sm text-danger">
                            {{ error }}
                        </small>

                    </div>

                    <div class="form-group pt-5">
                        <button type="button"
                            class="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                            @click="forgotPassword">
                            {{ $t('actions.continue') }}
                        </button>
                    </div>
                </form>

                <div class="row">
                    <div class="col-md-12 mt-3">
                        <div class="sign-helper text-center mt-3">
                            <p><i class="ri ri-arrow-right"></i>
                                {{ $t('back_to') }} <NuxtLink :to="localePath('/auth')">{{ $t('actions.login') }}
                                </NuxtLink>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    mounted() {
        this.fetchVisitorInfo()
    },
    computed: {
        ...mapGetters({
            country_code: 'visitor/countryCode'
        })
    },

    data() {
        return {
            contact_number: null,
            mobile: null,
            error: null,
            errors: {},
            translations: {
                phoneNumberLabel: this.$t('inputs.phone_number_placeholder'),
            },
        }
    },
    methods: {
        ...mapActions('visitor', ['fetchVisitorInfo']),
        updatePhoneNumber({ countryCode, formattedNumber, countryCallingCode }) {
            this.mobile = formattedNumber;
            this.error = null;
        },
        forgotPassword() {
            if (!this.mobile) {
                this.error = this.$t('validations.required');
                return;
            }

            this.$axios.$post('/api/tenant/forgot-password', {
                mobile: this.mobile
            })

                .then((value) => {
                    this.$successAlert(value.message ?? this.$t('notification.success'));
                    this.$router.push(this.localePath('/auth/password-otp?mobile=' + this.mobile));
                })
                .catch((errors) => {
                    if (errors.response.status !== 422) {
                        this.$dangerAlert(this.$t('notification.error_occurred'))
                    }
                    this.errors = errors.response.data.errors;

                });
        }
    }
}
</script>
