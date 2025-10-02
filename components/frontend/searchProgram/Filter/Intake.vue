<template>
  <div>
    <div>
      <div class="widget-header">
        <span class="widget-title">Select your intake</span>
        <span class="widget-clear" @click="clearIntakeSelections">Clear</span>
      </div>
      <div class="search-box">
        <input type="text" v-model="intakeSearchQuery" placeholder="Search intakes" @input="filterIntakes">
      </div>
      <div class="content">
        <div v-for="(intake, index) in filteredIntakes" :key="intake.id" class="edu-form-check">
          <label>
            <input type="checkbox" v-model="selectedIntakeIds[intake.id]" @change="updateIntakeSelections" />
            {{ intake.name }}
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    locations: Array, // Array of location objects
    items: Array, // Array of intake objects
  },
  data() {
    return {
      selectedIntakeIds: {},
      intakeSearchQuery: '',
    };
  },
  methods: {
    clearIntakeSelections() {
      this.selectedIntakeIds = {};
      this.updateIntakeSelections();
    },
    updateIntakeSelections() {
      const selectedIntakeIds = Object.keys(this.selectedIntakeIds).filter(key => this.selectedIntakeIds[key]);
      this.$emit('updateIntake', selectedIntakeIds);
    },
    filterIntakes() {
      const query = this.intakeSearchQuery.toLowerCase();
      return this.items.filter(intake => intake.name.toLowerCase().includes(query));
    },
  },
  computed: {
    filteredIntakes() {
      if (!this.intakeSearchQuery) {
        return this.items;
      } else {
        return this.filterIntakes();
      }
    },
  },
};
</script>