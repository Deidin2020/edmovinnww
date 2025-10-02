<template>
  <main class="flex-1 pt-16">
    <div class="min-h-screen bg-background">
      <section class="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style="background-image: url('/assets/mall-istanbul-hero-CtsvBOyl.webp');">
          <div class="absolute inset-0 bg-primary/70"></div>
        </div>
        <div class="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">İdeal Öğrenci Konaklama<br><span class="text-accent">Burada
              Başlıyor</span></h1>
          <p class="text-xl md:text-2xl mb-8 text-white/90">Üniversite yaşamınız için güvenli, konforlu ve modern
            konaklama çözümleri</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center"><a
              class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-11 rounded-md px-8 bg-accent hover:bg-accent/90 text-white"
              href="/search">Konaklama Yerlerini Keşfet</a><a
              class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border h-11 rounded-md px-8 bg-white/10 border-white text-white hover:bg-white hover:text-primary"
              href="/about">Hakkımızda</a></div>
        </div>
      </section>
      <section class="py-16 bg-muted">
        <div class="max-w-6xl mx-auto px-4">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div class="text-muted-foreground font-medium">Memnun Öğrenci</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <div class="text-muted-foreground font-medium">Konaklama Seçeneği</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
              <div class="text-muted-foreground font-medium">Ortak Üniversite</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div class="text-muted-foreground font-medium">Destek Hizmeti</div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-20">
        <div class="max-w-6xl mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">Neden Bizi Tercih Etmelisiniz?</h2>
            <p class="text-xl text-muted-foreground max-w-2xl mx-auto">Öğrenci yaşamınızı kolaylaştıracak modern
              olanaklar ve profesyonel hizmetler</p>
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-lg transition-shadow border-border">
              <div class="p-0">
                <div class="mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-search w-8 h-8 text-accent">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg></div>
                <h3 class="text-xl font-semibold text-primary mb-3">Kolay Arama</h3>
                <p class="text-muted-foreground">Gelişmiş filtreleme sistemi ile size uygun öğrenci konaklama yerini
                  kolayca bulun.</p>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-lg transition-shadow border-border">
              <div class="p-0">
                <div class="mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-map-pin w-8 h-8 text-accent">
                    <path
                      d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
                    </path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg></div>
                <h3 class="text-xl font-semibold text-primary mb-3">İdeal Konum</h3>
                <p class="text-muted-foreground">Üniversitelere yakın, ulaşım imkanları yüksek lokasyonlarda konaklama
                  seçenekleri.</p>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-lg transition-shadow border-border">
              <div class="p-0">
                <div class="mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-shield w-8 h-8 text-accent">
                    <path
                      d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z">
                    </path>
                  </svg></div>
                <h3 class="text-xl font-semibold text-primary mb-3">Güvenli Ortam</h3>
                <p class="text-muted-foreground">24/7 güvenlik, kartlı giriş sistemi ve güvenli yaşam alanları.</p>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-lg transition-shadow border-border">
              <div class="p-0">
                <div class="mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-star w-8 h-8 text-accent">
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                    </path>
                  </svg></div>
                <h3 class="text-xl font-semibold text-primary mb-3">Kaliteli Hizmet</h3>
                <p class="text-muted-foreground">Modern olanaklar, temizlik hizmeti ve konforlu yaşam alanları.</p>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-lg transition-shadow border-border">
              <div class="p-0">
                <div class="mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-users w-8 h-8 text-accent">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg></div>
                <h3 class="text-xl font-semibold text-primary mb-3">Sosyal Yaşam</h3>
                <p class="text-muted-foreground">Ortak alanlar, etkinlikler ve sosyal aktiviteler ile aktif kampüs
                  yaşamı.</p>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-lg transition-shadow border-border">
              <div class="p-0">
                <div class="mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-clock w-8 h-8 text-accent">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg></div>
                <h3 class="text-xl font-semibold text-primary mb-3">7/24 Destek</h3>
                <p class="text-muted-foreground">Her zaman yanınızda olan profesyonel destek ve yardım hizmetleri.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-20 bg-primary text-white">
        <div class="max-w-4xl mx-auto text-center px-4">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">Üniversite Yaşamınıza Başlamaya Hazır mısınız?</h2>
          <p class="text-xl mb-8 text-white/90">Size en uygun konaklama seçeneğini bulun ve güvenli rezervasyon yapın
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center"><a
              class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-11 rounded-md px-8 bg-accent hover:bg-accent/90 text-white"
              href="/search">Hemen Başla</a><a
              class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border h-11 rounded-md px-8 bg-white/10 border-white text-white hover:bg-white hover:text-primary"
              href="/about">Daha Fazla Bilgi</a></div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import Vue from 'vue';
import VueMeta from 'vue-meta';
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true,
});
export default {

  data() {
    return {
      HOST_NAME: process.env.HOST_NAME
    }
  },
  head() {
    return {
      title: this.SEO_RESULT?.title,
      meta: [
        {
          name: 'title',
          content: this.SEO_RESULT?.title
        },
        {
          name: 'description',
          content: this.SEO_RESULT?.description
        },
        {
          name: 'keywords',
          content: this.SEO_RESULT?.keywords
        }
      ],
    }
  },
  async asyncData({ $axios, params }) {
    try {

      const SEO = await $axios.get('/api/seo/show/HomePage');
      const SEO_RESULT = SEO.data.result.seo;

      return { SEO_RESULT };
    } catch (error) {
      return { SEO_RESULT: {} };
    }
  }
};
</script>
