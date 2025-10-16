<template>
  <main class="flex-1 pt-16">
    <div class="min-h-screen bg-background">
      <main class="container mx-auto px-4 pt-24 pb-16">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <h1 class="text-4xl font-bold text-foreground mb-4">
              {{ $t('contact.title') }}
            </h1>
            <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
              {{ $t('contact.subtitle') }}
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-12">
            <!-- Form -->
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div class="flex flex-col space-y-1.5 p-6">
                <h3 class="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-send w-5 h-5">
                    <path
                      d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z">
                    </path>
                    <path d="m21.854 2.147-10.94 10.939"></path>
                  </svg>
                  {{ $t('contact.form_title') }}
                </h3>
                <p class="text-sm text-muted-foreground">
                  {{ $t('contact.form_description') }}
                </p>
              </div>

              <div class="p-6 pt-0">
                <form class="space-y-6">
                  <div class="grid grid-cols-2 gap-4">
                    <div class="space-y-2"><label
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for=":r7:-form-item"> {{ $t('contact.first_name') }}</label><input
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        :placeholder="$t('contact.first_name_placeholder')" name="firstName" id=":r7:-form-item"
                        aria-describedby=":r7:-form-item-description" aria-invalid="false" value=""></div>
                    <div class="space-y-2"><label
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for=":r8:-form-item"> {{ $t('contact.last_name') }}</label><input
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        :placeholder="$t('contact.last_name_placeholder')" name="lastName" id=":r8:-form-item"
                        aria-describedby=":r8:-form-item-description" aria-invalid="false" value=""></div>
                  </div>
                  <div class="space-y-2"><label
                      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      for=":r9:-form-item"> {{ $t('contact.email') }}</label><input type="email"
                      class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      :placeholder="$t('contact.email_placeholder')" name="email" id=":r9:-form-item"
                      aria-describedby=":r9:-form-item-description" aria-invalid="false" value=""></div>
                  <div class="space-y-2"><label
                      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      for=":ra:-form-item"> {{ $t('contact.phone') }}</label><input type="tel"
                      class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      :placeholder="$t('contact.phone_placeholder')" name="phone" id=":ra:-form-item"
                      aria-describedby=":ra:-form-item-description" aria-invalid="false" value=""></div>
                  <div class="space-y-2"><label
                      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      for=":rb:-form-item"> {{ $t('contact.message') }}</label><textarea
                      class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[120px]"
                      :placeholder="$t('contact.message_placeholder')" name="message" id=":rb:-form-item"
                      aria-describedby=":rb:-form-item-description" aria-invalid="false"></textarea>
                  </div><button
                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                    type="submit"> {{ $t('contact.send_button') }}</button>
                </form>
              </div>
            </div>

            <!-- Contact Information -->
            <div class="space-y-8">
              <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div class="flex flex-col space-y-1.5 p-6">
                  <h3 class="text-2xl font-semibold leading-none tracking-tight">
                    {{ $t('contact.info_title') }}
                  </h3>
                  <p class="text-sm text-muted-foreground">
                    {{ $t('contact.info_description') }}
                  </p>
                </div>

                <div class="p-6 pt-0 space-y-6">
                  <div class="flex items-start gap-4">
                    <div class="icon-box">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-mail w-5 h-5 text-primary">
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-semibold text-foreground">{{ $t('contact.email_label') }}</h3>
                      <p class="text-muted-foreground">operations@edmovinn.com</p>
                    </div>
                  </div>

                  <div class="flex items-start gap-4">
                    <div class="icon-box">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-phone w-5 h-5 text-primary">
                        <path
                          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72...">
                        </path>
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-semibold text-foreground">{{ $t('contact.phone_label') }}</h3>
                      <p class="text-muted-foreground" style="
    direction: ltr;
    text-align: left;
">+90 (212) 123-4567</p>
                      <p class="text-muted-foreground" style="
    direction: ltr;
    text-align: left;
">+90 (533) 987-6543</p>
                    </div>
                  </div>

                  <div class="flex items-start gap-4">
                    <div class="icon-box">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-map-pin w-5 h-5 text-primary">
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799..."></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-semibold text-foreground">{{ $t('contact.office_label') }}</h3>
                      <p class="text-muted-foreground">
                        {{ $t('contact.office_address') }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Office Hours -->
              <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div class="flex flex-col space-y-1.5 p-6">
                  <h3 class="text-2xl font-semibold leading-none tracking-tight">
                    {{ $t('contact.office_hours') }}
                  </h3>
                </div>
                <div class="p-6 pt-0">
                  <div class="space-y-2">
                    <div class="flex justify-between">
                      <span class="text-muted-foreground">{{ $t('contact.weekdays') }}</span>
                      <span class="font-medium">{{ $t('contact.weekdays_hours') }}</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-muted-foreground">{{ $t('contact.saturday') }}</span>
                      <span class="font-medium">{{ $t('contact.saturday_hours') }}</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-muted-foreground">{{ $t('contact.sunday') }}</span>
                      <span class="font-medium">{{ $t('contact.sunday_hours') }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </main>
</template>

<script>
export default {
  watch: {
  },

  async asyncData({ $axios }) {
    try {
      const SEO = await $axios.get('/api/seo/show/ContactUs');
      const SEO_RESULT = SEO.data.result.seo;
      return { SEO_RESULT };
    } catch (error) {
      // console.error('Error fetching BlogSwiperItems:', error);
      return { SEO_RESULT: {} };
    }
  },

  data() {
    return {
      // title: 'Edmov | Make your journey to study abroad easier with Edmov',
      // meta_description: 'Contavt withas sadfas asdsada',
      // meta_title: 'Edmov | Make your journey to study abroad easier with Edmov',
    };
  },
  head() {
    return {
      script: [
        {
          type: 'application/ld+json',
          json: this.$generateBreadCrumbSchema([
            {
              name: 'Home',
              url: 'https://edmovinn.com'
            },
            {
              name: 'Contact Us',
              url: 'https://edmovinn.com/contact-us'
            }
          ])
        }
      ],
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
    };
  },
};
</script>
