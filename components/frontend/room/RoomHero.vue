<template>
  <div class="program-details-hero">
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <div class="program-hero-box">
            <h1 class="title">{{ item.name }}</h1>

          </div>
          <div class="university-hero-img">
            <div class="thumbnail">
              <NuxtLink :to="localePath(`/accommodations/${item.accommodation?.slug}`)">
                <img v-if="item.accommodation?.image" :alt="item.accommodation?.name" :title="item.accommodation?.name"
                  :src="item.accommodation?.image" class="img-border-50">
              </NuxtLink>
            </div>

            <div class="author-content">
              <NuxtLink :to="localePath(`/accommodations/${item.accommodation?.slug}`)">
                <span class="title">{{ item.accommodation?.name }}</span>

              </NuxtLink>
            </div>
          </div>
          <div class="university-hero-location">
            <div class="location">
              <img alt="location" title="location" src="/img/program/location.svg">
              <span class="subtitle">
                {{ $t('Location') }} :
              </span>
              <span class="title" v-if="item.accommodation?.country">
                {{ item.accommodation?.country }} , {{ item.accommodation?.state }}, {{
                  item.accommodation?.city }}
              </span>
              <span class="title" v-if="item.accommodation?.address">
                {{ item.accommodation?.address }}
              </span>
            </div>
          </div>
          <div class="col-md-9 col-sm-12 row ">
            <div class="col-md-6">
              <button class="btn btn-primary w-100" @click="openApplyModal" v-if="item.availability">
                {{ $t('actions.book_now') }}
              </button>
              <button class="btn btn-warning w-100" disabled v-else>
                {{ $t('actions.book_close') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { BModal } from 'bootstrap-vue'

export default {
  components: {
    BModal,
  },
  props: {
    item: {
      type: Object,
    }
  },
  data() {
    return {
      features: [
        {
          title: "Spring , Fall",
          details: "Spring , Fall",
          imgSrc: "icon12.png",
        },
        {
          title: "Number of Courses",
          details: "88 Course",
          imgSrc: "icon13.png",
        },
        {
          title: "Cost of Living",
          details: "$ 6.500 per year",
          imgSrc: "icon14.png",
        },
        {
          title: "tuition cost",
          details: "$ 2.500 - 8.500",
          imgSrc: "icon15.png",
        },
      ],
    }
  },

  mounted() {

  }
}
</script>
