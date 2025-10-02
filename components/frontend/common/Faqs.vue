<template v-if="hasFAQ">
  <section :class="extraClass" class="faq-university-page-area" style="padding-bottom: 50px" v-if="items.length">
    <div :class="{ 'container': hasContainer }">
      <div class="row">
        <div class="col-lg-12">
          <div class="main-title-university">
            <h2 class="title" :class="titleClass" >{{ $t('header.faq') }}</h2>
          </div>
        </div>
        <div class="col-lg-12">
          <div id="faq-accordion" class="tab-content faq-page-tab-content">
            <div class="tab-pane fade show active" role="tabpanel">
              <div class="faq-accordion faq-university">
                <div class="accordion">
                  <div v-for="(item, index) in items" :key="index" class="accordion-item">
                    <h3 class="accordion-header">
                      <button :data-bs-target="'#question-' + item.id" aria-expanded="false"
                        class="accordion-button collapsed" data-bs-toggle="collapse" type="button">
                        {{ stripHtml(item.question) }}
                      </button>
                    </h3>
                    <div :id="'question-' + item.id" class="accordion-collapse collapse"
                      data-bs-parent="#faq-accordion">
                      <div class="accordion-body">
                        <p>{{ stripHtml(item.answer) }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-4 d-flex align-items-center justify-content-center">
          <AppPagination :pagination="pagination" @page-changed="fetchItems" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    extraClass: {
      type: String,
    },
    hasContainer: {
      type: Boolean,
      default: true
    },
    query: {
      type: Object,
    },
    titleClass: String,
  },

  data() {
    return {
      items: [],
      hasFAQ: false,
      index: null,
      pagination: {
        current_page: 1,
        last_page: 1,
        from: 1,
        to: 1,
        total: 0
      },
    };
  },

  mounted() {
    this.fetchItems(1);
  },

  methods: {
    truncate(text, limit) {
      if (text.length <= limit) {
        return text;
      }
      return text.substring(0, limit) + '...';
    },
    stripHtml(html) {
      return html.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, '').replace(/&euro;/g, '€');
    },
    fetchItems(page) {
      this.$axios.get(`/api/faqs?page=${page}`, {
        params: this.query
      }).then((response) => {
        this.items = response.data.data;
        this.pagination = response.data.meta;
          const hasFAQ = this.items.length > 0;
          if (this.hasFAQ !== hasFAQ) {
              this.hasFAQ = hasFAQ;
              this.$emit('has-faq-changed', hasFAQ);
          }
      });
    },
  }
};
</script>
