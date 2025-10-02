<template>
    <section class="search-banner-program">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-10">
                    <form @submit.prevent="updateName">
                        <div class="row search-banner-program-area-form">
                            <div class="col-lg-10 col-sm-12">
                                <input placeholder="Search by name" type="text" id="name" v-model="name"
                                    autocomplete="off" @keyup.enter="updateName">
                            </div>
                            <div class="col-lg-2 d-none-m flex-align-items-center ">
                                <button type="submit" class="btn btn-primary flex-align-items-center"
                                    @click="updateName">
                                    <img src="/img/search/icon-search.svg" class="filter-image-svg" title="search"
                                        alt="search">search
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-lg-2 col-sm-12 search-sorting-btn-area flex-align-items-center ">
                    <div class="dropdown">
                        <button class="btn btn-primary-white-without-border flex-align-items-center dropdown-toggle"
                            type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src=" /img/search/icon-sort.svg" title="search" alt="search"> sort
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li>
                                <a class="dropdown-item" @click="handleSortOptionClick('tuition', 'asc')">
                                    Tuition cost
                                    low - high
                                </a>
                            </li>
                            <li><a class="dropdown-item" v-on:click="handleSortOptionClick('tuition', 'desc')">Tuition
                                    cost
                                    high - low</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            name: null,
        };
    },
    methods: {
        updateName() {
            this.$emit('update-name-search-data', this.name);
        },
        handleSortOptionClick(sortBy, sortDirection) {
            this.$emit('update-sort-by-data', sortBy);
            this.$emit('update-sort-direction-data', sortDirection);
        },
    },
}
</script>
