<template>
  <main class="flex-1 pt-16">
    <div class="min-h-screen bg-background flex items-center justify-center p-4">
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-md">
        <div class="flex flex-col space-y-1.5 p-6 text-center">
          <h3 class="tracking-tight text-2xl font-bold">{{ $t('auth.welcome') }}</h3>
          <p class="text-sm text-muted-foreground">{{ $t('auth.subtitle') }}</p>
        </div>
        <div class="p-6 pt-0">
          <div dir="ltr" class="space-y-4">
            <div class="row row--45 align-items-center">
              <div class="col-lg-5 col-md-12 margin-top--200">
                <RestPassword />
              </div>
              <div class="col-lg-6 d-mobile-none">
                <div class="auth-thumbnail">
                  <AuthHero />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
