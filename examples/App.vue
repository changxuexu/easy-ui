<template>
    <div>
        <!-- <test-button></test-button> -->
        <!-- <test-dialog></test-dialog> -->
        <!-- <test-table></test-table> -->
        <test-radio></test-radio>
    </div>
</template>

<script>
// TestDialog
import TestButton from "./TestButton"
import TestDialog from "./TestDialog"
import TestTable from "./TestTable"
import TestRadio from "./TestRadio"
export default {
    components: {
        TestButton,
        TestTable,
        TestRadio
    }
}
</script>

<style lang="scss" scoped>
.row {
    padding: 10px 0;
}
.hm-button {
    margin-left: 10px;
}
</style>
