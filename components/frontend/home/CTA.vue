<template>
  <div :class="addClassName" class="edu-cta-banner-area bg-image">
    <div class="container">
      <div class="edu-cta-banner">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="section-title section-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
              <h2 class="title">{{ $t('pages.home.cta.title') }}</h2>
              <p class="description cta-button-p">{{ $t('pages.home.cta.description') }}</p>
              <button :class="btnClass" class="btn btn-primary-white btn-no-border btn-home-cta cta-button"
                @click="openModal">
                <span class=" animation-bg-blue"> {{ $t('actions.explore_your_options') }}</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-modal id="myModal" ref="myModal" :title="$t('pages.home.contact.title')" bodyClass="ModelContactus" centered
      headerClass="ModelContactus" hide-footer hide-header>
      <ModelContactus @hide="hideModal" />
    </b-modal>
  </div>
</template>

<script>
import {BModal} from 'bootstrap-vue'

export default {
  props: {
    buttonText: {
      type: String,
      default: "Get started now"
    },
    buttonLink: {
      type: String,
      default: "/contact-us"
    },
    addClassName: {
      type: String,
      default: "home-one-cta-wrapper"
    },
    btnClass: {
      type: String
    }
  },
  components : {BModal},
  methods: {
    openModal() {
      if (this.$refs.myModal) {
        this.$refs.myModal.show()
      } else {
       // console.error('Modal reference is not defined.')
      }
    },
    hideModal () {
      if (this.$refs.myModal) {
        this.$refs.myModal.hide()
      } else {
       // console.error('Modal reference is not defined.')
      }
    }
  }
}
</script>
