<template>
  <div class="edu-categorie-area">
    <div class="container">
      <SectionTitle :subTitle="$t('pages.home.category.description')" :title="$t('pages.home.category.title')"
                    alignment="section-center" subTitleClass="d-m-none"/>

      <div class="row g-5 mt-2" data-aos="fade-up" data-aos-delay="200" data-aos-duration="900">
        <div v-for="(category, index) in categories" :key="index" class="col-lg-4 col-md-6" data-aos="fade-up"
             data-aos-delay="50" data-aos-duration="800">
          <div class="categorie-grid">
            <div class="icon">
              <img :src="category.imgUrl" :title="$t(category.title)" :alt="$t(category.alt)" loading="lazy" style="width: 100%; height: auto;">
            </div>
            <div class="content">
              <h3 class="title">{{ $t(category.title) }}</h3>
              <p class="description">{{ $t(category.description) }}</p>
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
      categories: [
        {
          title: "pages.home.category.categories.careerCounselling.title",
          description: "pages.home.category.categories.careerCounselling.description",
          imgUrl: "/img/home/Frame3.svg",
          alt: "pages.home.category.categories.careerCounselling.title",
          imgClass: "image-categories"
        },
        {
          title: "pages.home.category.categories.personalizedConsultations.title",
          description: "pages.home.category.categories.personalizedConsultations.description",
          imgUrl: "/img/home/Frame1.svg",
          alt: "pages.home.category.categories.personalizedConsultations.title",
          imgClass: "image-categories"
        },
        {
          title: "pages.home.category.categories.programMatching.title",
          description: "pages.home.category.categories.programMatching.description",
          imgUrl: "/img/home/Frame4.svg",
          alt: "pages.home.category.categories.programMatching.title",
          imgClass: "image-categories"
        },
        {
          title: "pages.home.category.categories.admissionAssistance.title",
          description: "pages.home.category.categories.admissionAssistance.description",
          imgUrl: "/img/home/Frame5.svg",
          alt: "pages.home.category.categories.admissionAssistance.title",
          imgClass: "image-categories"
        },
        {
          title: "pages.home.category.categories.scholarshipsFunding.title",
          description: "pages.home.category.categories.scholarshipsFunding.description",
          imgUrl: "/img/home/Frame2.svg",
          alt: "pages.home.category.categories.scholarshipsFunding.title",
          imgClass: "image-categories"
        },
        {
          title: "pages.home.category.categories.visaAssistance.title",
          description: "pages.home.category.categories.visaAssistance.description",
          imgUrl: "/img/home/Frame6.svg",
          alt: "pages.home.category.categories.visaAssistance.title",
          imgClass: "image-categories"
        }
      ]
    }
  }
}
</script>
