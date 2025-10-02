<template>
    <div>
        <section class="blog-hero-area">
            <div class="container">
                <div class="row blog-hero-area-content">
                    <div class="row">
                        <div class="page-title m-auto">
                            <h1 class="title text-center">{{ title }}</h1>
                            <p class="title-descrption">{{ description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                required: true
            },
            description: {
                type: String,
            }
        }
    }
</script>
