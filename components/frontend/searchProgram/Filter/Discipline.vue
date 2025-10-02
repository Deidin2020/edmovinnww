<template>
    <div>
        <div class="widget-header">
            <span class="widget-title">Select your Discipline</span>
            <span class="widget-clear" v-on:click="clearSelections">Clear</span>
        </div>
        <div class="search-box">
            <input type="text" v-model="searchQuery" placeholder="Search disciplines" @input="filterItems">
        </div>
        <div class="content" ref="scrollContainer" style="max-height: 300px; overflow-y: scroll;">
            <div v-for="(data, index) in filteredItems">
                <h4 style="font-size: 14px;margin: 5px 0px;">{{ data.name }}</h4>
                <div v-for="(discipline, index) in data.children" :key="discipline.id" class="edu-form-check">
                    <label><input type="checkbox" v-model="fieldIds[discipline.id]" @change="updateSelections" />
                        {{ discipline.name }}</label>
                </div>
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
            fieldIds: {},
            searchQuery: '',
        };
    },
    methods: {
        clearSelections() {
            this.fieldIds = {};
            this.updateSelections();
        },
        toggleSelection(id) {
            this.fieldIds[id] = !this.fieldIds[id];
        },
        updateSelections() {
            const fieldIds = Object.keys(this.fieldIds).filter(key => this.fieldIds[key]);
            this.$emit('updateDiscipline', fieldIds);
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
                let filtered = [];
                this.items.forEach(discipline => {
                    let filteredChildren = discipline.children.filter(child => {
                        return child.name.toLowerCase().includes(query);
                    });
                    if (filteredChildren.length > 0) {
                        let clonedDiscipline = Object.assign({}, discipline);
                        clonedDiscipline.children = filteredChildren;
                        filtered.push(clonedDiscipline);
                    }
                });
                return filtered;
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
