<template>
    <main class="container mx-auto px-4 py-8 space-y-12">
        <section class="text-center space-y-6">
            <div class="relative mb-8">
                <div
                    class="aspect-[21/9] rounded-2xl overflow-hidden bg-gradient-to-br from-green-primary/10 to-gold-primary/10 border-2 border-gold-primary/20">
                    <img src="/assets/hero-about-new-CIJYpUxp.png" alt="Movinn Öğrenci Yurdu Hero"
                        class="w-full h-full object-cover"></div>
            </div>
            <div class="space-y-4">
                <h1 class="text-4xl md:text-5xl font-bold text-green-primary">Movinn Öğrenci Yurdu</h1>
                <p class="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">Movinn,
                    İstanbul'da modern otel konseptiyle tasarlanmış bir öğrenci yurdudur. Sadece bir konaklama alanı
                    değil, aynı zamanda ikinci evinizdir. Stratejik konumu, kapsamlı hizmetleri ve uzman kadrosuyla
                    sizlere konfor, güvenlik, akademik ve sosyal destek sunar.</p>
            </div>
        </section>
        <section class="space-y-8">
            <h2 class="text-3xl font-bold text-center text-foreground">Neden Movinn'i Tercih Etmelisiniz?</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div
                    class="rounded-lg border bg-card text-card-foreground shadow-sm border-green-primary/20 bg-gradient-to-br from-green-primary/5 to-green-secondary/5 hover:shadow-lg transition-all duration-300 hover:border-green-primary/40">
                    <div class="flex flex-col space-y-1.5 p-6">
                        <h3 class="font-semibold tracking-tight text-lg flex items-center gap-3 text-green-primary"><svg
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-settings h-6 w-6 text-gold-primary">
                                <path
                                    d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z">
                                </path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>Kapsamlı Hizmetler</h3>
                    </div>
                    <div class="p-6 pt-0">
                        <p class="text-muted-foreground">Eşyalı odalar, yüksek hızlı internet, merkezi ısıtma-soğutma.
                            Kayıt işlemleri hızlı ve basittir.</p>
                    </div>
                </div>
                <div
                    class="rounded-lg border bg-card text-card-foreground shadow-sm border-green-primary/20 bg-gradient-to-br from-green-primary/5 to-green-secondary/5 hover:shadow-lg transition-all duration-300 hover:border-green-primary/40">
                    <div class="flex flex-col space-y-1.5 p-6">
                        <h3 class="font-semibold tracking-tight text-lg flex items-center gap-3 text-green-primary"><svg
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-map-pin h-6 w-6 text-gold-primary">
                                <path
                                    d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
                                </path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>Stratejik Konum</h3>
                    </div>
                    <div class="p-6 pt-0">
                        <p class="text-muted-foreground">Mall of Istanbul'un karşısında, metro ve otobüs duraklarına
                            birkaç dakika yürüme mesafesinde.</p>
                    </div>
                </div>
                <div
                    class="rounded-lg border bg-card text-card-foreground shadow-sm border-green-primary/20 bg-gradient-to-br from-green-primary/5 to-green-secondary/5 hover:shadow-lg transition-all duration-300 hover:border-green-primary/40">
                    <div class="flex flex-col space-y-1.5 p-6">
                        <h3 class="font-semibold tracking-tight text-lg flex items-center gap-3 text-green-primary"><svg
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-users h-6 w-6 text-gold-primary">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>Aktif Öğrenci Hayatı</h3>
                    </div>
                    <div class="p-6 pt-0">
                        <p class="text-muted-foreground">Farklı üniversitelerden öğrencilerle sosyal aktiviteler ve
                            etkinlikler sayesinde yeni arkadaşlıklar.</p>
                    </div>
                </div>
                <div
                    class="rounded-lg border bg-card text-card-foreground shadow-sm border-green-primary/20 bg-gradient-to-br from-green-primary/5 to-green-secondary/5 hover:shadow-lg transition-all duration-300 hover:border-green-primary/40">
                    <div class="flex flex-col space-y-1.5 p-6">
                        <h3 class="font-semibold tracking-tight text-lg flex items-center gap-3 text-green-primary"><svg
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-house h-6 w-6 text-gold-primary">
                                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                                <path
                                    d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z">
                                </path>
                            </svg>Destek ve Özel Alan</h3>
                    </div>
                    <div class="p-6 pt-0">
                        <p class="text-muted-foreground">Tek kişilik ya da paylaşımlı oda tercih edin, her zaman
                            yanınızda olan 7/24 idari ve güvenlik ekibimizle kendinizi güvende ve rahat hissedin.</p>
                    </div>
                </div>
                <div
                    class="rounded-lg border bg-card text-card-foreground shadow-sm border-green-primary/20 bg-gradient-to-br from-green-primary/5 to-green-secondary/5 hover:shadow-lg transition-all duration-300 hover:border-green-primary/40">
                    <div class="flex flex-col space-y-1.5 p-6">
                        <h3 class="font-semibold tracking-tight text-lg flex items-center gap-3 text-green-primary"><svg
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-shield-check h-6 w-6 text-gold-primary">
                                <path
                                    d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z">
                                </path>
                                <path d="m9 12 2 2 4-4"></path>
                            </svg>Güvenlik</h3>
                    </div>
                    <div class="p-6 pt-0">
                        <p class="text-muted-foreground">Modern güvenlik sistemleri, elektronik giriş kartları ve
                            düzenli bakım ile güvenli konaklama.</p>
                    </div>
                </div>
                <div
                    class="rounded-lg border bg-card text-card-foreground shadow-sm border-green-primary/20 bg-gradient-to-br from-green-primary/5 to-green-secondary/5 hover:shadow-lg transition-all duration-300 hover:border-green-primary/40">
                    <div class="flex flex-col space-y-1.5 p-6">
                        <h3 class="font-semibold tracking-tight text-lg flex items-center gap-3 text-green-primary"><svg
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-star h-6 w-6 text-gold-primary">
                                <path
                                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                                </path>
                            </svg>Düzenli Hizmetler</h3>
                    </div>
                    <div class="p-6 pt-0">
                        <p class="text-muted-foreground">Düzenli temizlik, yemekhane, kütüphane, spor salonu, sauna ve
                            Türk hamamı, mescit.</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="space-y-6">
            <div class="relative">
                <div
                    class="aspect-[3/1] rounded-xl overflow-hidden bg-gradient-to-br from-green-primary/10 to-gold-primary/10 border border-gold-primary/20">
                    <img src="/assets/mall-istanbul-hero-CtsvBOyl.webp" alt="Mall of Istanbul ve Çevre - Kolay Ulaşım"
                        class="w-full h-full object-cover"></div>
            </div>
        </section>
        <section class="space-y-8">
            <div class="text-center space-y-4">
                <h2 class="text-3xl font-bold text-foreground">Kolay Ulaşım</h2>
                <p class="text-muted-foreground max-w-3xl mx-auto">Movinn, Küçükçekmece Belediyesi sınırları içinde,
                    Mall of Istanbul'un karşısında yer almaktadır. Basın Ekspres Caddesi ile TEM otoyolunun kesişiminde
                    bulunan bu bölge, İstanbul'un önemli ulaşım ağlarının merkezindedir.</p>
            </div>
            <div class="grid md:grid-cols-2 gap-8">
                <div
                    class="rounded-lg border bg-card text-card-foreground shadow-sm border-green-primary/20 bg-gradient-to-br from-green-primary/5 to-transparent">
                    <div class="flex flex-col space-y-1.5 p-6">
                        <h3
                            class="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2 text-green-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-clock h-5 w-5 text-gold-primary">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>Yürüme Mesafesinde</h3>
                    </div>
                    <div class="p-6 pt-0 space-y-4">
                        <div
                            class="flex items-center justify-between p-3 rounded-lg bg-green-primary/5 border border-green-primary/10">
                            <div class="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"
                                    class="lucide lucide-shopping-bag h-5 w-5 text-gold-primary">
                                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                                    <path d="M3 6h18"></path>
                                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                                </svg><span class="font-medium text-green-primary">Mall of Istanbul</span></div>
                            <div
                                class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 bg-green-primary/10 text-green-primary border-green-primary/20">
                                9 dk</div>
                        </div>
                        <div
                            class="flex items-center justify-between p-3 rounded-lg bg-green-primary/5 border border-green-primary/10">
                            <div class="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"
                                    class="lucide lucide-tram-front h-5 w-5 text-gold-primary">
                                    <rect width="16" height="16" x="4" y="3" rx="2"></rect>
                                    <path d="M4 11h16"></path>
                                    <path d="M12 3v8"></path>
                                    <path d="m8 19-2 3"></path>
                                    <path d="m18 22-2-3"></path>
                                    <path d="M8 15h.01"></path>
                                    <path d="M16 15h.01"></path>
                                </svg><span class="font-medium text-green-primary">Bahriye Metro İstasyonu</span></div>
                            <div
                                class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 bg-green-primary/10 text-green-primary border-green-primary/20">
                                12 dk</div>
                        </div>
                        <div
                            class="flex items-center justify-between p-3 rounded-lg bg-green-primary/5 border border-green-primary/10">
                            <div class="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"
                                    class="lucide lucide-tram-front h-5 w-5 text-gold-primary">
                                    <rect width="16" height="16" x="4" y="3" rx="2"></rect>
                                    <path d="M4 11h16"></path>
                                    <path d="M12 3v8"></path>
                                    <path d="m8 19-2 3"></path>
                                    <path d="m18 22-2-3"></path>
                                    <path d="M8 15h.01"></path>
                                    <path d="M16 15h.01"></path>
                                </svg><span class="font-medium text-green-primary">Masko Metro İstasyonu</span></div>
                            <div
                                class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 bg-green-primary/10 text-green-primary border-green-primary/20">
                                7 dk</div>
                        </div>
                        <div
                            class="flex items-center justify-between p-3 rounded-lg bg-green-primary/5 border border-green-primary/10">
                            <div class="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"
                                    class="lucide lucide-bus h-5 w-5 text-gold-primary">
                                    <path d="M8 6v6"></path>
                                    <path d="M15 6v6"></path>
                                    <path d="M2 12h19.6"></path>
                                    <path
                                        d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3">
                                    </path>
                                    <circle cx="7" cy="18" r="2"></circle>
                                    <path d="M9 18h5"></path>
                                    <circle cx="16" cy="18" r="2"></circle>
                                </svg><span class="font-medium text-green-primary">Otobüs durağı</span></div>
                            <div
                                class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 bg-green-primary/10 text-green-primary border-green-primary/20">
                                3 dk</div>
                        </div>
                    </div>
                </div>
                <div
                    class="rounded-lg border bg-card text-card-foreground shadow-sm border-green-primary/20 bg-gradient-to-br from-green-primary/5 to-green-secondary/5 hover:shadow-lg transition-all duration-300 hover:border-green-primary/40">
                    <div class="flex flex-col space-y-1.5 p-6">
                        <h3
                            class="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2 text-green-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-graduation-cap h-5 w-5 text-gold-primary">
                                <path
                                    d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z">
                                </path>
                                <path d="M22 10v6"></path>
                                <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                            </svg>Üniversitelere Kolay Ulaşım</h3>
                    </div>
                    <div class="p-6 pt-0 space-y-3 max-h-96 overflow-y-auto">
                        <div
                            class="flex items-center justify-between p-3 rounded-lg bg-green-primary/5 border border-green-primary/10">
                            <div class="flex items-center gap-3 flex-1">
                                <div
                                    class="w-10 h-10 rounded-full bg-white flex items-center justify-center border-2 border-green-primary/20 overflow-hidden">
                                    <img src="/assets/altinbas-university-BFjF5TWK.jpg" alt="Altınbaş Üniversitesi logo"
                                        class="w-8 h-8 object-contain"></div>
                                <div>
                                    <p class="font-medium text-sm text-green-primary">Altınbaş Üniversitesi</p>
                                    <p class="text-xs text-muted-foreground">otobüs</p>
                                </div>
                            </div>
                            <div class="flex flex-col items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    class="lucide lucide-bus h-4 w-4 text-gold-primary">
                                    <path d="M8 6v6"></path>
                                    <path d="M15 6v6"></path>
                                    <path d="M2 12h19.6"></path>
                                    <path
                                        d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3">
                                    </path>
                                    <circle cx="7" cy="18" r="2"></circle>
                                    <path d="M9 18h5"></path>
                                    <circle cx="16" cy="18" r="2"></circle>
                                </svg>
                                <div
                                    class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 bg-green-primary/10 text-green-primary border-green-primary/20">
                                    7 dk</div>
                            </div>
                        </div>
                        <div
                            class="flex items-center justify-between p-3 rounded-lg bg-green-primary/5 border border-green-primary/10">
                            <div class="flex items-center gap-3 flex-1">
                                <div
                                    class="w-10 h-10 rounded-full bg-white flex items-center justify-center border-2 border-green-primary/20 overflow-hidden">
                                    <img src="/assets/sabahattin-zaim-university-DxbK60kZ.jpg"
                                        alt="Sabahattin Zaim Üniversitesi logo" class="w-8 h-8 object-contain"></div>
                                <div>
                                    <p class="font-medium text-sm text-green-primary">Sabahattin Zaim Üniversitesi</p>
                                    <p class="text-xs text-muted-foreground">otobüs/metro</p>
                                </div>
                            </div>
                            <div class="flex flex-col items-center gap-1">
                                <div class="relative"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round"
                                        class="lucide lucide-circle h-4 w-4 text-gold-primary">
                                        <circle cx="12" cy="12" r="10"></circle>
                                    </svg><span
                                        class="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-white">M</span>
                                </div>
                                <div
                                    class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 bg-green-primary/10 text-green-primary border-green-primary/20">
                                    21 dk</div>
                            </div>
                        </div>
                        <div
                            class="flex items-center justify-between p-3 rounded-lg bg-green-primary/5 border border-green-primary/10">
                            <div class="flex items-center gap-3 flex-1">
                                <div
                                    class="w-10 h-10 rounded-full bg-white flex items-center justify-center border-2 border-green-primary/20 overflow-hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-graduation-cap h-5 w-5 text-green-primary">
                                        <path
                                            d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z">
                                        </path>
                                        <path d="M22 10v6"></path>
                                        <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                                    </svg></div>
                                <div>
                                    <p class="font-medium text-sm text-green-primary">İstanbul Özel Üniversitesi</p>
                                    <p class="text-xs text-muted-foreground">metro</p>
                                </div>
                            </div>
                            <div class="flex flex-col items-center gap-1">
                                <div class="relative"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round"
                                        class="lucide lucide-circle h-4 w-4 text-gold-primary">
                                        <circle cx="12" cy="12" r="10"></circle>
                                    </svg><span
                                        class="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-white">M</span>
                                </div>
                                <div
                                    class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 bg-green-primary/10 text-green-primary border-green-primary/20">
                                    22 dk</div>
                            </div>
                        </div>
                        <div
                            class="flex items-center justify-between p-3 rounded-lg bg-green-primary/5 border border-green-primary/10">
                            <div class="flex items-center gap-3 flex-1">
                                <div
                                    class="w-10 h-10 rounded-full bg-white flex items-center justify-center border-2 border-green-primary/20 overflow-hidden">
                                    <img src="/assets/istanbul-aydin-university-CWuviAf-.jpg"
                                        alt="İstanbul Aydın Üniversitesi logo" class="w-8 h-8 object-contain"></div>
                                <div>
                                    <p class="font-medium text-sm text-green-primary">İstanbul Aydın Üniversitesi</p>
                                    <p class="text-xs text-muted-foreground">metro</p>
                                </div>
                            </div>
                            <div class="flex flex-col items-center gap-1">
                                <div class="relative"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round"
                                        class="lucide lucide-circle h-4 w-4 text-gold-primary">
                                        <circle cx="12" cy="12" r="10"></circle>
                                    </svg><span
                                        class="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-white">M</span>
                                </div>
                                <div
                                    class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 bg-green-primary/10 text-green-primary border-green-primary/20">
                                    36 dk</div>
                            </div>
                        </div>
                        <div
                            class="flex items-center justify-between p-3 rounded-lg bg-green-primary/5 border border-green-primary/10">
                            <div class="flex items-center gap-3 flex-1">
                                <div
                                    class="w-10 h-10 rounded-full bg-white flex items-center justify-center border-2 border-green-primary/20 overflow-hidden">
                                    <img src="/assets/kultur-university-mMnMFioj.jpg" alt="Kültür Üniversitesi logo"
                                        class="w-8 h-8 object-contain"></div>
                                <div>
                                    <p class="font-medium text-sm text-green-primary">Kültür Üniversitesi</p>
                                    <p class="text-xs text-muted-foreground">metro</p>
                                </div>
                            </div>
                            <div class="flex flex-col items-center gap-1">
                                <div class="relative"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round"
                                        class="lucide lucide-circle h-4 w-4 text-gold-primary">
                                        <circle cx="12" cy="12" r="10"></circle>
                                    </svg><span
                                        class="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-white">M</span>
                                </div>
                                <div
                                    class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 bg-green-primary/10 text-green-primary border-green-primary/20">
                                    29 dk</div>
                            </div>
                        </div>
                        <div
                            class="flex items-center justify-between p-3 rounded-lg bg-green-primary/5 border border-green-primary/10">
                            <div class="flex items-center gap-3 flex-1">
                                <div
                                    class="w-10 h-10 rounded-full bg-white flex items-center justify-center border-2 border-green-primary/20 overflow-hidden">
                                    <img src="/assets/beykent-university-new-DkRmgs1m.jpg"
                                        alt="Beykent Üniversitesi logo" class="w-8 h-8 object-contain"></div>
                                <div>
                                    <p class="font-medium text-sm text-green-primary">Beykent Üniversitesi</p>
                                    <p class="text-xs text-muted-foreground">metro + otobüs</p>
                                </div>
                            </div>
                            <div class="flex flex-col items-center gap-1">
                                <div class="relative"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round"
                                        class="lucide lucide-circle h-4 w-4 text-gold-primary">
                                        <circle cx="12" cy="12" r="10"></circle>
                                    </svg><span
                                        class="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-white">M</span>
                                </div>
                                <div
                                    class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 bg-green-primary/10 text-green-primary border-green-primary/20">
                                    1 saat</div>
                            </div>
                        </div>
                        <div
                            class="flex items-center justify-between p-3 rounded-lg bg-green-primary/5 border border-green-primary/10">
                            <div class="flex items-center gap-3 flex-1">
                                <div
                                    class="w-10 h-10 rounded-full bg-white flex items-center justify-center border-2 border-green-primary/20 overflow-hidden">
                                    <img src="/assets/istanbul-bilgi-university-BeCWtw1T.jpg"
                                        alt="Bilgi Üniversitesi logo" class="w-8 h-8 object-contain"></div>
                                <div>
                                    <p class="font-medium text-sm text-green-primary">Bilgi Üniversitesi</p>
                                    <p class="text-xs text-muted-foreground">metro</p>
                                </div>
                            </div>
                            <div class="flex flex-col items-center gap-1">
                                <div class="relative"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round"
                                        class="lucide lucide-circle h-4 w-4 text-gold-primary">
                                        <circle cx="12" cy="12" r="10"></circle>
                                    </svg><span
                                        class="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-white">M</span>
                                </div>
                                <div
                                    class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 bg-green-primary/10 text-green-primary border-green-primary/20">
                                    55 dk</div>
                            </div>
                        </div>
                        <div
                            class="flex items-center justify-between p-3 rounded-lg bg-green-primary/5 border border-green-primary/10">
                            <div class="flex items-center gap-3 flex-1">
                                <div
                                    class="w-10 h-10 rounded-full bg-white flex items-center justify-center border-2 border-green-primary/20 overflow-hidden">
                                    <img src="/assets/nisantasi-university-new-27pHWj06.jpg"
                                        alt="Nişantaşı Üniversitesi logo" class="w-8 h-8 object-contain"></div>
                                <div>
                                    <p class="font-medium text-sm text-green-primary">Nişantaşı Üniversitesi</p>
                                    <p class="text-xs text-muted-foreground">metro + otobüs</p>
                                </div>
                            </div>
                            <div class="flex flex-col items-center gap-1">
                                <div class="relative"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round"
                                        class="lucide lucide-circle h-4 w-4 text-gold-primary">
                                        <circle cx="12" cy="12" r="10"></circle>
                                    </svg><span
                                        class="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-white">M</span>
                                </div>
                                <div
                                    class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 bg-green-primary/10 text-green-primary border-green-primary/20">
                                    1 saat 27 dk</div>
                            </div>
                        </div>
                        <div
                            class="flex items-center justify-between p-3 rounded-lg bg-green-primary/5 border border-green-primary/10">
                            <div class="flex items-center gap-3 flex-1">
                                <div
                                    class="w-10 h-10 rounded-full bg-white flex items-center justify-center border-2 border-green-primary/20 overflow-hidden">
                                    <img src="/assets/istinye-university-BjYNMcYp.jpg" alt="İstinye Üniversitesi logo"
                                        class="w-8 h-8 object-contain"></div>
                                <div>
                                    <p class="font-medium text-sm text-green-primary">İstinye Üniversitesi</p>
                                    <p class="text-xs text-muted-foreground">otobüs</p>
                                </div>
                            </div>
                            <div class="flex flex-col items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    class="lucide lucide-bus h-4 w-4 text-gold-primary">
                                    <path d="M8 6v6"></path>
                                    <path d="M15 6v6"></path>
                                    <path d="M2 12h19.6"></path>
                                    <path
                                        d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3">
                                    </path>
                                    <circle cx="7" cy="18" r="2"></circle>
                                    <path d="M9 18h5"></path>
                                    <circle cx="16" cy="18" r="2"></circle>
                                </svg>
                                <div
                                    class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 bg-green-primary/10 text-green-primary border-green-primary/20">
                                    41 dk</div>
                            </div>
                        </div>
                        <div
                            class="flex items-center justify-between p-3 rounded-lg bg-green-primary/5 border border-green-primary/10">
                            <div class="flex items-center gap-3 flex-1">
                                <div
                                    class="w-10 h-10 rounded-full bg-white flex items-center justify-center border-2 border-green-primary/20 overflow-hidden">
                                    <img src="/assets/gelisim-university-CCgYd3i4.jpg" alt="Gelişim Üniversitesi logo"
                                        class="w-8 h-8 object-contain"></div>
                                <div>
                                    <p class="font-medium text-sm text-green-primary">Gelişim Üniversitesi</p>
                                    <p class="text-xs text-muted-foreground">metro + otobüs</p>
                                </div>
                            </div>
                            <div class="flex flex-col items-center gap-1">
                                <div class="relative"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round"
                                        class="lucide lucide-circle h-4 w-4 text-gold-primary">
                                        <circle cx="12" cy="12" r="10"></circle>
                                    </svg><span
                                        class="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-white">M</span>
                                </div>
                                <div
                                    class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 bg-green-primary/10 text-green-primary border-green-primary/20">
                                    50 dk</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="space-y-8">
            <div class="text-center space-y-4">
                <h2 class="text-3xl font-bold text-foreground">Farklı Oda Seçenekleri</h2>
                <p class="text-muted-foreground max-w-3xl mx-auto">Movinn, farklı tercih ve bütçelere uygun çeşitli oda
                    tipleri sunar: tek kişilik, çift kişilik, üç kişilik ve dört kişilik. Her oda, rahat ve verimli bir
                    çalışma ortamı sunacak şekilde tasarlanmıştır.</p>
            </div>
            <div
                class="rounded-lg border bg-card text-card-foreground shadow-sm border-green-primary/20 bg-gradient-to-br from-green-primary/5 to-green-secondary/5 hover:shadow-lg transition-all duration-300 hover:border-green-primary/40">
                <div class="flex flex-col space-y-1.5 p-6">
                    <h3 class="text-2xl font-semibold leading-none tracking-tight text-green-primary">Oda Özellikleri
                    </h3>
                </div>
                <div class="p-6 pt-0">
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div
                            class="flex items-center gap-3 p-3 rounded-lg bg-green-primary/5 border border-green-primary/10 hover:border-green-primary/30 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-bed h-5 w-5 text-gold-primary flex-shrink-0">
                                <path d="M2 4v16"></path>
                                <path d="M2 8h18a2 2 0 0 1 2 2v10"></path>
                                <path d="M2 17h20"></path>
                                <path d="M6 8v9"></path>
                            </svg><span class="font-medium text-green-primary">Yatak</span></div>
                        <div
                            class="flex items-center gap-3 p-3 rounded-lg bg-green-primary/5 border border-green-primary/10 hover:border-green-primary/30 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-laptop h-5 w-5 text-gold-primary flex-shrink-0">
                                <path
                                    d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16">
                                </path>
                            </svg><span class="font-medium text-green-primary">Çalışma masası</span></div>
                        <div
                            class="flex items-center gap-3 p-3 rounded-lg bg-green-primary/5 border border-green-primary/10 hover:border-green-primary/30 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-shirt h-5 w-5 text-gold-primary flex-shrink-0">
                                <path
                                    d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z">
                                </path>
                            </svg><span class="font-medium text-green-primary">Kişisel dolap</span></div>
                        <div
                            class="flex items-center gap-3 p-3 rounded-lg bg-green-primary/5 border border-green-primary/10 hover:border-green-primary/30 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-wifi h-5 w-5 text-gold-primary flex-shrink-0">
                                <path d="M12 20h.01"></path>
                                <path d="M2 8.82a15 15 0 0 1 20 0"></path>
                                <path d="M5 12.859a10 10 0 0 1 14 0"></path>
                                <path d="M8.5 16.429a5 5 0 0 1 7 0"></path>
                            </svg><span class="font-medium text-green-primary">Yüksek hızlı internet</span></div>
                        <div
                            class="flex items-center gap-3 p-3 rounded-lg bg-green-primary/5 border border-green-primary/10 hover:border-green-primary/30 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-thermometer h-5 w-5 text-gold-primary flex-shrink-0">
                                <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path>
                            </svg><span class="font-medium text-green-primary">Merkezi ısıtma-soğutma</span></div>
                        <div
                            class="flex items-center gap-3 p-3 rounded-lg bg-green-primary/5 border border-green-primary/10 hover:border-green-primary/30 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-credit-card h-5 w-5 text-gold-primary flex-shrink-0">
                                <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                                <line x1="2" x2="22" y1="10" y2="10"></line>
                            </svg><span class="font-medium text-green-primary">Elektronik öğrenci kartı ile giriş
                                sistemi</span></div>
                    </div>
                </div>
            </div>
        </section>
        <section class="space-y-8">
            <div class="text-center">
                <h2 class="text-3xl font-bold text-foreground">Konforlu Yaşam</h2>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div
                    class="rounded-lg border bg-card text-card-foreground shadow-sm border-green-primary/20 bg-gradient-to-br from-green-primary/5 to-green-secondary/5 hover:shadow-lg transition-all duration-300 hover:border-green-primary/40">
                    <div class="p-4">
                        <div class="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-shield h-6 w-6 text-gold-primary flex-shrink-0">
                                <path
                                    d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z">
                                </path>
                            </svg><span class="font-medium text-green-primary">7/24 güvenlik ve elektronik giriş
                                kartları</span></div>
                    </div>
                </div>
                <div
                    class="rounded-lg border bg-card text-card-foreground shadow-sm border-green-primary/20 bg-gradient-to-br from-green-primary/5 to-green-secondary/5 hover:shadow-lg transition-all duration-300 hover:border-green-primary/40">
                    <div class="p-4">
                        <div class="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-sparkles h-6 w-6 text-gold-primary flex-shrink-0">
                                <path
                                    d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z">
                                </path>
                                <path d="M20 3v4"></path>
                                <path d="M22 5h-4"></path>
                                <path d="M4 17v2"></path>
                                <path d="M5 18H3"></path>
                            </svg><span class="font-medium text-green-primary">Düzenli oda ve tesis temizliği</span>
                        </div>
                    </div>
                </div>
                <div
                    class="rounded-lg border bg-card text-card-foreground shadow-sm border-green-primary/20 bg-gradient-to-br from-green-primary/5 to-green-secondary/5 hover:shadow-lg transition-all duration-300 hover:border-green-primary/40">
                    <div class="p-4">
                        <div class="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-book-open h-6 w-6 text-gold-primary flex-shrink-0">
                                <path d="M12 7v14"></path>
                                <path
                                    d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z">
                                </path>
                            </svg><span class="font-medium text-green-primary">Kütüphane</span></div>
                    </div>
                </div>
                <div
                    class="rounded-lg border bg-card text-card-foreground shadow-sm border-green-primary/20 bg-gradient-to-br from-green-primary/5 to-green-secondary/5 hover:shadow-lg transition-all duration-300 hover:border-green-primary/40">
                    <div class="p-4">
                        <div class="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-gamepad2 h-6 w-6 text-gold-primary flex-shrink-0">
                                <line x1="6" x2="10" y1="11" y2="11"></line>
                                <line x1="8" x2="8" y1="9" y2="13"></line>
                                <line x1="15" x2="15.01" y1="12" y2="12"></line>
                                <line x1="18" x2="18.01" y1="10" y2="10"></line>
                                <path
                                    d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z">
                                </path>
                            </svg><span class="font-medium text-green-primary">Etkinlik odası: PlayStation, bilardo,
                                masa tenisi</span></div>
                    </div>
                </div>
                <div
                    class="rounded-lg border bg-card text-card-foreground shadow-sm border-green-primary/20 bg-gradient-to-br from-green-primary/5 to-green-secondary/5 hover:shadow-lg transition-all duration-300 hover:border-green-primary/40">
                    <div class="p-4">
                        <div class="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-dumbbell h-6 w-6 text-gold-primary flex-shrink-0">
                                <path d="M14.4 14.4 9.6 9.6"></path>
                                <path
                                    d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z">
                                </path>
                                <path d="m21.5 21.5-1.4-1.4"></path>
                                <path d="M3.9 3.9 2.5 2.5"></path>
                                <path
                                    d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z">
                                </path>
                            </svg><span class="font-medium text-green-primary">Spor salonu</span></div>
                    </div>
                </div>
                <div
                    class="rounded-lg border bg-card text-card-foreground shadow-sm border-green-primary/20 bg-gradient-to-br from-green-primary/5 to-green-secondary/5 hover:shadow-lg transition-all duration-300 hover:border-green-primary/40">
                    <div class="p-4">
                        <div class="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-waves h-6 w-6 text-gold-primary flex-shrink-0">
                                <path
                                    d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1">
                                </path>
                                <path
                                    d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1">
                                </path>
                                <path
                                    d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1">
                                </path>
                            </svg><span class="font-medium text-green-primary">Sauna ve Türk hamamı</span></div>
                    </div>
                </div>
                <div
                    class="rounded-lg border bg-card text-card-foreground shadow-sm border-green-primary/20 bg-gradient-to-br from-green-primary/5 to-green-secondary/5 hover:shadow-lg transition-all duration-300 hover:border-green-primary/40">
                    <div class="p-4">
                        <div class="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-utensils-crossed h-6 w-6 text-gold-primary flex-shrink-0">
                                <path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"></path>
                                <path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7">
                                </path>
                                <path d="m2.1 21.8 6.4-6.3"></path>
                                <path d="m19 5-7 7"></path>
                            </svg><span class="font-medium text-green-primary">Yemekhane (günlük açık büfe)</span></div>
                    </div>
                </div>
                <div
                    class="rounded-lg border bg-card text-card-foreground shadow-sm border-green-primary/20 bg-gradient-to-br from-green-primary/5 to-green-secondary/5 hover:shadow-lg transition-all duration-300 hover:border-green-primary/40">
                    <div class="p-4">
                        <div class="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-washing-machine h-6 w-6 text-gold-primary flex-shrink-0">
                                <path d="M3 6h3"></path>
                                <path d="M17 6h.01"></path>
                                <rect width="18" height="20" x="3" y="2" rx="2"></rect>
                                <circle cx="12" cy="13" r="5"></circle>
                                <path d="M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5"></path>
                            </svg><span class="font-medium text-green-primary">Çamaşırhane</span></div>
                    </div>
                </div>
                <div
                    class="rounded-lg border bg-card text-card-foreground shadow-sm border-green-primary/20 bg-gradient-to-br from-green-primary/5 to-green-secondary/5 hover:shadow-lg transition-all duration-300 hover:border-green-primary/40">
                    <div class="p-4">
                        <div class="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-building h-6 w-6 text-gold-primary flex-shrink-0">
                                <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
                                <path d="M9 22v-4h6v4"></path>
                                <path d="M8 6h.01"></path>
                                <path d="M16 6h.01"></path>
                                <path d="M12 6h.01"></path>
                                <path d="M12 10h.01"></path>
                                <path d="M12 14h.01"></path>
                                <path d="M16 10h.01"></path>
                                <path d="M16 14h.01"></path>
                                <path d="M8 10h.01"></path>
                                <path d="M8 14h.01"></path>
                            </svg><span class="font-medium text-green-primary">Mescit</span></div>
                    </div>
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
                                class="w-full h-full object-cover"></div><button
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
