<template>
    <div class="border-b border-filter-border last:border-b-0" :class="{ active: isActive }">
        <!-- Header -->
        <div class="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
            @click="toggleFilter">
            <span class="filter-title ms-4 px-0 py-0 mx-0 my-0">{{ title }}</span>
            <span class="toggle-icon">
                <svg v-if="isActive" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-chevron-up w-4 h-4 text-muted-foreground">
                    <path d="m18 15-6-6-6 6"></path>
                </svg>

                <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-chevron-down w-4 h-4 text-muted-foreground">
                    <path d="m6 9 6 6 6-6"></path>
                </svg>
            </span>

        </div>

        <div class="px-4 pb-4 mt-4 py-1"
            style="color: rgb(22, 163, 74);display: flex; justify-content: flex-end; margin: 0px; padding: 0px 1rem;"
            v-if="(hasSelected && !isActive) || isActive">
            <!-- {{ placeholder }} -->
            <span v-if="clearable" style="cursor: pointer" @click="clearSelection">
                {{ $t('filter.clear_all') }} ({{ selectedCount }})
            </span>
        </div>

        <div class="px-4 pb-4" v-if="isActive">
            <!-- Search box -->
            <!-- <div v-if="searchable" class="search-box my-3">
                <input type="text" v-model="searchQuery" :placeholder="$t('Search_universities')"
                    class="form-control" />
            </div> -->

            <!-- Fee range -->
            <div v-if="type === 'fees'" class="filter-items mt-4">
                <div class="d-flex align-items-center">
                    <AppInput :label="$t('filter.min_fees')" type="number" v-model="model.fees_from" />
                    <div class="mx-3" />
                    <AppInput :label="$t('filter.max_fees')" type="number" v-model="model.fees_to" />
                </div>
            </div>

            <!-- Checkbox list -->
            <div v-if="type === 'checkbox'" class="filter-items mt-4">
                <div v-if="filteredItems.length === 0 && searchQuery.trim() !== ''" class="no-results mt-2">
                    {{ $t('no_result') }}
                </div>
                <div class="filter-item mb-1" v-for="(item, index) in filteredItems" :key="keyName + '-' + index">
                    <input type="checkbox" v-model="model[keyName]" :value="item.id" :id="keyName + '-' + item.id" />
                    <label :for="keyName + '-' + item.id">
                        <span v-if="item.icon_svg" v-html="item.icon_svg" class="svg-icon"></span>
                        {{ item.title || item.name }}
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: "FilterItem",
    props: {
        title: String,
        placeholder: String,
        model: Object,          // filtersData
        keyName: String,        //  countryKeys, cityKeys
        items: { type: Array, default: () => [] },
        show: Boolean,
        clearable: { type: Boolean, default: true },
        searchable: { type: Boolean, default: false },
        type: { type: String, default: 'checkbox' } // checkbox | fees
    },
    data() {
        return { searchQuery: '' }
    },
    computed: {
        isActive() {
            return this.show
        },
        selectedCount() {
            return this.model[this.keyName]?.length || 0
        },
        hasSelected() {
            if (this.type === 'fees') {
                return this.model.fees_from || this.model.fees_to
            }
            return this.selectedCount > 0
        },
        filteredItems() {
            if (!this.searchQuery) return this.items
            return this.items.filter(i =>
                (i.name || '').toLowerCase().includes(this.searchQuery.toLowerCase())
            )
        }
    },
    methods: {
        toggleFilter() {
            this.$emit('toggle')
        },
        clearSelection() {
            if (this.type === 'fees') {
                this.model.fees_from = ''
                this.model.fees_to = ''
            } else {
                this.model[this.keyName] = []
            }
        }
    }
}
</script>

<style>
.filter-item {
    display: flex;
    align-items: center;
}

.filter-item input[type="checkbox"] {
    margin: 0px 5px;
}

.filter-item label {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.filter-item span {
    margin: 0px 3px;
}

.svg-icon svg {
    width: 18px;
    height: 18px;
}

.d-flex {
    display: flex;
    align-items: center;
}

.app-input {
    width: 50%;
    margin-right: 10px;
}

.app-input input {
    background-color: #fff;
    background-color: var(--color-white);
    border: 1px solid #c0c4e2;
    border: 1px solid var(--color-border-form);
    border-radius: 5px;
    border-radius: var(--border-radius-btn);
    box-shadow: none;
    color: #050066;
    color: #000;
    color: var(--color-heading);
    font-size: 12px;
    width: 95%;
    height: 45px;
    outline: none;
    padding: 0 20px;
}

.filter-items {
    max-height: 150px;
    overflow-y: auto;
}
</style>