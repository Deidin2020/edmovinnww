<template>
    <div>
        <div class="widget-header">
            <span class="widget-title">Select your location</span>
            <span class="widget-clear" v-on:click="clearSelections">Clear</span>
        </div>
        <div class="search-box">
            <input type="text" v-model="searchQuery" placeholder="Search locations" @input="filterItems">
        </div>
        <div class="content" ref="scrollContainer" style="max-height: 300px; overflow-y: scroll;">
            <div v-for="(location, index) in filteredItems" :key="location.id" class="edu-form-check">
                <label><input type="checkbox" v-model="countryIds[location.id]" @change="updateSelections" />{{
                    location.name }}</label>
            </div>
            <label class="disabled"><input type="checkbox" disabled />USA <label class="coming">Coming
                    soon</label></label>
            <label class="disabled"><input type="checkbox" disabled />Malaysia <label class="coming">Coming
                    soon</label></label>
            <label class="disabled"><input type="checkbox" disabled />UK <label class="coming">Coming
                    soon</label></label>
            <label class="disabled"><input type="checkbox" disabled />Australia <label class="coming">Coming
                    soon</label></label>
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
            countryIds: {},
            searchQuery: '',
        };
    },
    methods: {
        clearSelections() {
            this.countryIds = {};
            this.updateSelections();
        },
        toggleSelection(id) {
            this.countryIds[id] = !this.countryIds[id];
        },
        updateSelections() {
            const countryIds = Object.keys(this.countryIds).filter(key => this.countryIds[key]);
            this.$emit('updateLocation', countryIds);
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
                return this.items.filter(location => location.name.toLowerCase().includes(query));
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
