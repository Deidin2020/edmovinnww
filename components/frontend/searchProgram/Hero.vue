<template>
    <section class="search-program-hero">
        <div class="container">
            <div class="row">
                <div class="page-title">
                    <h1 class="title">now you can discover <span>{{ programCount }}</span><br> program with edmov to find your
                        <br><span>dream career</span>
                    </h1>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props:{
            programCount: [String, Number]        }
    }
</script>
