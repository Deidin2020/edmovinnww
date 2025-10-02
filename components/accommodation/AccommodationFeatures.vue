<template>
    <div class="top-disciplines-area" v-if="items.length > 0">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="main-title-university">
                        <h2 class="title" v-html="title"></h2>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-mobile-50" v-for="(item, index) in items.slice(0, 4)" :key="index">
                    <div class="top-disciplines-grid ">
                        <div class=" content">
                            <h3 class="title">
                                {{ item.name }}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
        },
        title: {
            type: String,
        }
    },
}
</script>
