<template>
    <div>

        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-12">
                    <b-button variant="close" @click="$emit('hide')" class="close-model">
                        x</b-button>
                    <SectionTitle alignment="section-left font-25" :title="$t('pages.home.contact.title')"
                        :subTitle="$t('pages.home.contact.description')" />
                    <div data-aos-delay="200" data-aos="fade-left" data-aos-duration="900">
                        <ContactUsForm @hide="$emit('hide')" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
