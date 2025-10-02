<template>
    <div>
        <div class="widget-header">
            <span class="widget-title">Select your university</span>
            <span class="widget-clear" @click="clearSelections">Clear</span>
        </div>
        <div class="search-box">
            <input type="text" v-model="searchQuery" placeholder="Search universities" @input="filterItems">
        </div>
        <div class="content" ref="scrollContainer" style="max-height: 300px; overflow-y: scroll;">
            <div v-for="(university, index) in filteredItems" :key="university.id" class="edu-form-check">
                <label>
                    <input type="checkbox" v-model="universityIds[university.id]" @change="updateSelections" />
                    {{ university.name }}
                </label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        items: Array,
    },
    data() {
        return {
            universityIds: {},
            searchQuery: '',
        };
    },
    methods: {
        clearSelections() {
            this.universityIds = {};
            this.updateSelections();
        },
        toggleSelection(id) {
            this.universityIds[id] = !this.universityIds[id];
        },
        updateSelections() {
            const universityIds = Object.keys(this.universityIds).filter(key => this.universityIds[key]);
            this.$emit('updateUniversityName', universityIds);
        },
        filterItems() {
            // Filtering logic based on searchQuery
        },
        scrollHandler() {
            // Handle scroll event if needed
        }
    },
    computed: {
        filteredItems() {
            if (!this.searchQuery) {
                return this.items;
            } else {
                const query = this.searchQuery.toLowerCase();
                return this.items.filter(university => university.name.toLowerCase().includes(query));
            }
        }
    },
    mounted() {
        this.$refs.scrollContainer.addEventListener('scroll', this.scrollHandler);
    },
    beforeDestroy() {
        this.$refs.scrollContainer.removeEventListener('scroll', this.scrollHandler);
    }
};
</script>
