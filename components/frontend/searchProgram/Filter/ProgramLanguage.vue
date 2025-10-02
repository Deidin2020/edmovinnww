<template>
    <div>
        <div class="widget-header">
            <span class="widget-title">Select your language</span>
            <span class="widget-clear" v-on:click="clearSelections">Clear</span>
        </div>
        <div class="search-box">
            <input type="text" v-model="searchQuery" placeholder="Search languages" @input="filterItems">
        </div>
        <div class="content" ref="scrollContainer" style="max-height: 300px; overflow-y: scroll;">
            <div v-for="(language, index) in filteredItems" :key="language.id" class="edu-form-check">
                <label><input type="checkbox" v-model="languageIds[language.id]" @change="updateSelections" />{{
                    language.name }}</label>
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
            languageIds: {},
            searchQuery: '',
        };
    },
    methods: {
        clearSelections() {
            this.languageIds = {};
            this.updateSelections();
        },
        toggleSelection(id) {
            this.languageIds[id] = !this.languageIds[id];
        },
        updateSelections() {
            const languageIds = Object.keys(this.languageIds).filter(key => this.languageIds[key]);
            this.$emit('updateLanguage', languageIds);
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
                return this.items.filter(language => language.name.toLowerCase().includes(query));
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
