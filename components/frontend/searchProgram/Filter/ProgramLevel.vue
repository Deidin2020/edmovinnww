<template>
    <div>
        <div class="widget-header">
            <span class="widget-title">select your level</span>
            <span class="widget-clear" v-on:click="clearSelections">clear</span>
        </div>

        <div class="content">
            <div v-for="(level, index) in computedItems" :key="level.id" class="edu-form-check">
                <label>
                    <input type="checkbox" v-model="degreeIds[level.id]" @change="updateSelections" />
                    {{ level.name }}
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
            degreeIds: {},
        };
    },
    methods: {
        clearSelections() {
            this.degreeIds = {};
            this.updateSelections();
        },
        toggleSelection(id) {
            this.degreeIds[id] = !this.degreeIds[id];
        },
        updateSelections() {
            const degreeIds = Object.keys(this.degreeIds).filter(key => this.degreeIds[key]);
            this.$emit('updateLevel', degreeIds);
        }
    },
    computed: {
        computedItems() {
            return this.items;
        }
    },
    mounted() {
        this.degreeIds = this.$route.query.degreeIds ? this.$route.query.degreeIds.split(',').map(Number) : [];
    }
};
</script>
