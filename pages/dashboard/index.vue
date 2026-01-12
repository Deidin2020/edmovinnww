<template>
  <div>
    <main class="container mx-auto px-4 py-8 space-y-12">
      <section class="text-center space-y-6">
        <div class="space-y-4" style="margin-top: 50px;height: 100vh;">
          <h1> Hi, {{ $auth.user.first_name ?? 'Guest' }}</h1>
        </div>

      </section>
    </main>
  </div>
</template>


<script>
export default {
  layout: 'dashboard',

  mounted() {
  },
  methods: {

  },
}
</script>
