<template>
    <div>

        <div class="col-md-12 col-lg-12">
            <div class="university-image-details">
                <div class="col-md-12 university-img-full">
                    <iframe v-if="item.youtube_video_id" width="100%" height="500"
                        :src="`https://www.youtube.com/embed/` + item.youtube_video_id"></iframe>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Array,
        }
    },
}
</script>
