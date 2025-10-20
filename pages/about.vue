<template>
    <main class="container mx-auto px-4 py-8 space-y-12">
        <section class="text-center space-y-6">
            <div class="relative mb-8">
                <div
                    class="aspect-[21/9] rounded-2xl overflow-hidden bg-gradient-to-br from-green-primary/10 to-gold-primary/10 border-2 border-gold-primary/20">
                    <img src="/assets/hero-about-new-CIJYpUxp.png" alt="Movinn Öğrenci Yurdu Hero"
                        class="w-full h-full object-cover">
                </div>
            </div>

            <div class="space-y-4">
                <h1 class="text-4xl md:text-5xl font-bold text-green-primary">{{ $t('about.title') }}</h1>
                <p class="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">{{
                    $t('about.intro') }}</p>
            </div>

        </section>


        <section class="space-y-8">
            <div class="text-center space-y-4">
                <h2 class="text-3xl font-bold text-foreground">{{ $t('about.vision.title') }}</h2>
            </div>
            <div
                class="rounded-lg border bg-card text-card-foreground shadow-sm border-green-primary/20 bg-gradient-to-br from-green-primary/5 to-transparent">
                <div class="flex flex-col space-y-1.5 p-6">
                    <p>
                        {{ $t('about.vision.text') }}
                    </p>
                </div>
            </div>
        </section>


        <section class="space-y-8">
            <div class="text-center space-y-4">
                <h2 class="text-3xl font-bold text-foreground">{{ $t('about.mission.title') }}</h2>
            </div>
            <div
                class="rounded-lg border bg-card text-card-foreground shadow-sm border-green-primary/20 bg-gradient-to-br from-green-primary/5 to-transparent">
                <div class="flex flex-col space-y-1.5 p-6">
                    <p>
                        {{ $t('about.mission.text') }}
                    </p>
                </div>
            </div>
        </section>

        <section class="space-y-6">
            <div class="relative">
                <div
                    class="aspect-[3/1] rounded-xl overflow-hidden bg-gradient-to-br from-green-primary/10 to-gold-primary/10 border border-gold-primary/20">
                    <img src="/assets/mall-istanbul-hero-CtsvBOyl.webp" alt="Mall of Istanbul ve Çevre - Kolay Ulaşım"
                        class="w-full h-full object-cover">
                </div>
            </div>
        </section>


        <section class="space-y-8">
            <div class="text-center space-y-4">
                <h2 class="text-3xl font-bold text-foreground">{{ $t('about.how.title') }}</h2>
            </div>
            <div
                class="rounded-lg border bg-card text-card-foreground shadow-sm border-green-primary/20 bg-gradient-to-br from-green-primary/5 to-transparent">
                <div class="flex flex-col space-y-1.5 p-6">
                    <p>
                        {{ $t('about.how.text') }}
                    </p>
                </div>
            </div>
        </section>



        <section class="space-y-8">
            <div class="text-center">
                <h2 class="text-3xl font-bold text-foreground">Galeri</h2>
            </div>
            <div
                class="rounded-lg border bg-card text-card-foreground shadow-sm border-green-primary/20 bg-gradient-to-br from-green-primary/5 to-green-secondary/5 hover:shadow-lg transition-all duration-300 hover:border-green-primary/40">
                <div class="p-6">
                    <div class="relative">
                        <div class="aspect-video rounded-lg overflow-hidden bg-muted border-2 border-gold-primary/20">
                            <img src="/assets/room-modern-C7u4OaaH.jpg" alt="Movinn Gallery 1"
                                class="w-full h-full object-cover">
                        </div><button
                            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border h-10 w-10 absolute left-4 top-1/2 -translate-y-1/2 bg-green-primary/80 border-gold-primary/30 text-gold-primary backdrop-blur-sm hover:bg-green-primary hover:text-white"><svg
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-chevron-left h-4 w-4">
                                <path d="m15 18-6-6 6-6"></path>
                            </svg></button><button
                            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border h-10 w-10 absolute right-4 top-1/2 -translate-y-1/2 bg-green-primary/80 border-gold-primary/30 text-gold-primary backdrop-blur-sm hover:bg-green-primary hover:text-white"><svg
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-chevron-right h-4 w-4">
                                <path d="m9 18 6-6-6-6"></path>
                            </svg></button>
                        <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2"><button
                                class="w-3 h-3 rounded-full transition-colors border-2 bg-gold-primary border-gold-primary"></button><button
                                class="w-3 h-3 rounded-full transition-colors border-2 bg-transparent border-white/50 hover:border-gold-primary/50"></button><button
                                class="w-3 h-3 rounded-full transition-colors border-2 bg-transparent border-white/50 hover:border-gold-primary/50"></button><button
                                class="w-3 h-3 rounded-full transition-colors border-2 bg-transparent border-white/50 hover:border-gold-primary/50"></button><button
                                class="w-3 h-3 rounded-full transition-colors border-2 bg-transparent border-white/50 hover:border-gold-primary/50"></button><button
                                class="w-3 h-3 rounded-full transition-colors border-2 bg-transparent border-white/50 hover:border-gold-primary/50"></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default {

};
</script>
