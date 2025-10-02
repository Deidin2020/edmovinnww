<template>
    <div>
        <div class="university-search-box">
            <div class="thumbnail">
                <NuxtLink :to="localePath('/accommodations/' + accommodation.slug)">
                    <img :src="accommodation.image" alt="accommodation" title="accommodation"
                        style="height: 80px;width: 90px; object-fit: cover;" />
                </NuxtLink>
            </div>
            <div class="content">
                <h2 class="title" style="    margin-bottom: 0px;">
                    <NuxtLink :to="localePath('/accommodations/' + accommodation.slug)">
                        {{ accommodation.name }}
                    </NuxtLink>
                </h2>
                <p>
                    <span v-if="accommodation.state"></span>
                    {{ accommodation.state }}
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        accommodation: Object,
    },
};
</script>
