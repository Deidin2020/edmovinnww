<template>
    <div>
        <div class="widget-header">
            <span class="widget-title">Enter Tuition Fees</span>
            <span class="widget-clear" v-on:click="clearSelections">clear</span>
        </div>
        <div class="content">
            <div>
                <div class="row">
                    <div class="col-md-6">
                        <label for="fees_from">Fees From:</label>
                        <input type="number" id="fees_from" v-model="feesFrom" @keyup.enter="updateSelections" @blur="updateSelections"
                            placeholder="Enter fees from">
                    </div>
                    <div class="col-md-6">
                        <label for="fees_to">Fees To:</label>
                        <input type="number" id="fees_to" v-model="feesTo" @keyup.enter="updateSelections" @blur="updateSelections"
                            placeholder="Enter fees to">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            feesFrom: null,
            feesTo: null,
        };
    },
    methods: {
        clearSelections() {
            this.feesTo = null;
            this.feesFrom = null;
            this.updateSelections();
        },
         updateSelections() {
                const minTuition = this.feesFrom !== '' ? this.feesFrom : null;
                const maxTuition = this.feesTo !== '' ? this.feesTo : null;
                this.$emit('updateMinTuition', minTuition);
                this.$emit('updateMaxTuition', maxTuition);
        },
        delayedUpdate() {

            setTimeout(() => {
                this.updateSelections();
            }, 1000); 
        }

    },
}
</script>
