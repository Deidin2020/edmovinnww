<template>
    <div class="section-title" :class="alignment" >
        <div :class="{ 'col-md-10': urlLink && urlTitle }">
            <span class="pre-title" :class="preTitleClass" v-html="preTitle" v-if="preTitle"></span>
            <h2 class="title h1" :class="titleClass" v-html="title" v-if="title"></h2>
            <span class="title h1" :class="titleClass" v-html="spanTitle" v-if="spanTitle"></span>
            <p v-html="subTitle" v-if="subTitle" :class="subTitleClass"></p>
        </div>
        <div class="col-md-2 url-col-2" v-if="urlLink && urlTitle">
            <n-link :to="localePath(urlLink)" class="btn btn-primary-white btn-sm" v-html="urlTitle"></n-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        preTitle: {
            type: String
        },
        spanTitle:{
            type: String
        },
        preTitleClass: {
            type: String
        },
        title: {
            type: String,
        },
        subTitle: {
            type: String
        },
        subTitleClass: {
            type: String,
            default:'',
        },
        alignment: {
            type: String
        },
        urlLink: {
            type: String
        },
        urlTitle: {
            type: String
        },
        titleClass: {
            type: String
        },
    }
}
</script>
