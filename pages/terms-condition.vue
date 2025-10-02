<template>
    <div id="main-wrapper" class="main-wrapper">

        <HomeHeader />
        <BreadCrumb title="Terms and conditions" />

        <section class="privacy-policy-area">
            <div class="container">
                <div class="row row--30">
                    <div class="col-lg-8 m-auto">
                        <div class="privacy-policy">
                            <div class="text-block">
                                <h3 class="title">Terms and conditions</h3>
                            </div>
                            <p>

                                The wind whispered secrets as it danced through the trees, carrying with it the scent of
                                adventure. The sky was painted with hues of orange and pink, casting a warm glow over the
                                landscape. Birds chirped their melodious tunes, adding to the symphony of nature. With each
                                step, I felt a sense of liberation, as if the world was inviting me to explore its wonders

                            </p>
                            <p>

                                The wind whispered secrets as it danced through the trees, carrying with it the scent of
                                adventure. The sky was painted with hues of orange and pink, casting a warm glow over the
                                landscape. Birds chirped their melodious tunes, adding to the symphony of nature. With each
                                step, I felt a sense of liberation, as if the world was inviting me to explore its wonders

                            </p>
                            <p>

                                The wind whispered secrets as it danced through the trees, carrying with it the scent of
                                adventure. The sky was painted with hues of orange and pink, casting a warm glow over the
                                landscape. Birds chirped their melodious tunes, adding to the symphony of nature. With each
                                step, I felt a sense of liberation, as if the world was inviting me to explore its wonders

                            </p>
                            <p>

                                The wind whispered secrets as it danced through the trees, carrying with it the scent of
                                adventure. The sky was painted with hues of orange and pink, casting a warm glow over the
                                landscape. Birds chirped their melodious tunes, adding to the symphony of nature. With each
                                step, I felt a sense of liberation, as if the world was inviting me to explore its wonders

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <WebsiteFooter />
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: 'Edmov | Make your journey to study abroad easier with Edmov',
            meta_description: 'Make your journey to study abroad easier with Edmov.',
            meta_title: 'Edmov | Make your journey to study abroad easier with Edmov',
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
              name: 'Terms Condition',
              url: 'https://edmovinn.com/terms-condition'
            }
          ])
        }
      ]
    };
  },
};
</script>
