<template>
  <main class="flex-1 pt-16">
    <div class="min-h-screen bg-background">
      <main class="container mx-auto px-4 pt-24 pb-16">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <h1 class="text-4xl font-bold text-foreground mb-4">Contact Us</h1>
            <p class="text-lg text-muted-foreground max-w-2xl mx-auto">Get in touch with our team. We're here to help
              you find the perfect accommodation.</p>
          </div>
          <div class="grid lg:grid-cols-2 gap-12">
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div class="flex flex-col space-y-1.5 p-6">
                <h3 class="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2"><svg
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-send w-5 h-5">
                    <path
                      d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z">
                    </path>
                    <path d="m21.854 2.147-10.94 10.939"></path>
                  </svg>Send us a message</h3>
                <p class="text-sm text-muted-foreground">Fill out the form below and we'll respond as soon as possible.
                </p>
              </div>
              <div class="p-6 pt-0">
                <form class="space-y-6">
                  <div class="grid grid-cols-2 gap-4">
                    <div class="space-y-2"><label
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for=":r1o:-form-item">First Name</label><input
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        placeholder="John" name="firstName" id=":r1o:-form-item"
                        aria-describedby=":r1o:-form-item-description" aria-invalid="false" value=""></div>
                    <div class="space-y-2"><label
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for=":r1p:-form-item">Last Name</label><input
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        placeholder="Doe" name="lastName" id=":r1p:-form-item"
                        aria-describedby=":r1p:-form-item-description" aria-invalid="false" value=""></div>
                  </div>
                  <div class="space-y-2"><label
                      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      for=":r1q:-form-item">Email Address</label><input type="email"
                      class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      placeholder="john.doe@example.com" name="email" id=":r1q:-form-item"
                      aria-describedby=":r1q:-form-item-description" aria-invalid="false" value=""></div>
                  <div class="space-y-2"><label
                      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      for=":r1r:-form-item">Phone Number (Optional)</label><input type="tel"
                      class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      placeholder="+1 (555) 123-4567" name="phone" id=":r1r:-form-item"
                      aria-describedby=":r1r:-form-item-description" aria-invalid="false" value=""></div>
                  <div class="space-y-2"><label
                      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      for=":r1s:-form-item">Message</label><textarea
                      class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[120px]"
                      placeholder="Tell us about your accommodation needs, questions, or feedback..." name="message"
                      id=":r1s:-form-item" aria-describedby=":r1s:-form-item-description"
                      aria-invalid="false"></textarea></div><button
                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                    type="submit">Send Message</button>
                </form>
              </div>
            </div>
            <div class="space-y-8">
              <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div class="flex flex-col space-y-1.5 p-6">
                  <h3 class="text-2xl font-semibold leading-none tracking-tight">Contact Information</h3>
                  <p class="text-sm text-muted-foreground">Reach out to us through any of these channels.</p>
                </div>
                <div class="p-6 pt-0 space-y-6">
                  <div class="flex items-start gap-4">
                    <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"><svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-mail w-5 h-5 text-primary">
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg></div>
                    <div>
                      <h3 class="font-semibold text-foreground">Email</h3>
                      <p class="text-muted-foreground">info@movinn.com</p>
                      <p class="text-muted-foreground">support@movinn.com</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-4">
                    <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"><svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-phone w-5 h-5 text-primary">
                        <path
                          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                        </path>
                      </svg></div>
                    <div>
                      <h3 class="font-semibold text-foreground">Phone</h3>
                      <p class="text-muted-foreground">+90 (212) 123-4567</p>
                      <p class="text-muted-foreground">+90 (533) 987-6543</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-4">
                    <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"><svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-map-pin w-5 h-5 text-primary">
                        <path
                          d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
                        </path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg></div>
                    <div>
                      <h3 class="font-semibold text-foreground">Office</h3>
                      <p class="text-muted-foreground">Levent Mahallesi<br>Büyükdere Caddesi No: 123<br>Şişli, Istanbul,
                        Turkey</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div class="flex flex-col space-y-1.5 p-6">
                  <h3 class="text-2xl font-semibold leading-none tracking-tight">Office Hours</h3>
                </div>
                <div class="p-6 pt-0">
                  <div class="space-y-2">
                    <div class="flex justify-between"><span class="text-muted-foreground">Monday - Friday</span><span
                        class="font-medium">9:00 AM - 6:00 PM</span></div>
                    <div class="flex justify-between"><span class="text-muted-foreground">Saturday</span><span
                        class="font-medium">10:00 AM - 4:00 PM</span></div>
                    <div class="flex justify-between"><span class="text-muted-foreground">Sunday</span><span
                        class="font-medium">Closed</span></div>
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
