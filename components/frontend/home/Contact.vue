<template>
  <div class="contact-us-area">
    <div class="container">
      <div class="row">
        <div class="col-xl-5 mb-500">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-12">
                <SectionTitle :spanTitle="$t('pages.home.contact.title')"
                              :subTitle="$t('pages.home.contact.description')"
                              alignment="section-left font-25"/>
                <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="900">
                  <ContactUsForm @hide="$emit('hide')"/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-7 position-relative" data-aos="fade-right" data-aos-delay="200"
             data-aos-duration="900">
          <div class="contact-us-image">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
