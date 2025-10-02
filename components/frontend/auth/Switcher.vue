<template>
    <div>
        <div class="row form-section col-md-10 switcher-section">
            <div class="login-form-box">
                <h1 class="title h2">{{ $t('auth.create_account') }}</h1>
                <p>{{ $t('auth.sign_up_as') }}</p>
                <div class="row switcher-register-type">
                    <div class="col-md-6">
                        <div :class="{ 'border-sign-up-box': true, 'active': selectedOption === 'individual' }"
                            @click="selectOption('individual')">
                            <input type="radio" name="signup" class="signup-radio" id="individual" @click.stop />
                            <div class="title">
                                <img src="/img/auth/admin.svg" alt="admin" title="admin" />
                                <p>{{ $t('auth.Individual') }} </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div :class="{ 'border-sign-up-box': true, 'active': selectedOption === 'corporate' }"
                            @click="selectOption('corporate')">
                            <input type="radio" name="signup" class="signup-radio" id="corporate" checked @click.stop />
                            <div class="title">
                                <img src="/img/auth/user.svg" alt="user" title="user" />
                                <p>{{ $t('auth.Corporate') }} </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-12">
                        <button class="btn btn-primary w-100 mt-15" @click="redirectToNextPage">{{ $t('actions.next')
                        }}</button>
                    </div>

                </div>
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
            selectedOption: 'corporate'
        };
    },
    methods: {
        selectOption(option) {
            this.selectedOption = option;
            if (option === 'individual') {
                document.getElementById('individual').checked = true;
            } else if (option === 'corporate') {
                document.getElementById('corporate').checked = true;
            }
        },
        redirectToNextPage() {
            if (this.selectedOption === 'individual') {
                this.$router.push(this.localePath(`/agents/individual`));
            } else if (this.selectedOption === 'corporate') {
                this.$router.push(this.localePath(`/agents/corporate`));
            }
        }
    }
}
</script>
