<template>
  <data-table :tables="d" />
</template>

<script lang="ts">
import details from "@/datatables/categories";
import DataTableComponent from "@/utils/datatable/components/datatable.vue";
export default {
  name: "groupTable",
  components: {
    "data-table": DataTableComponent,
  },
  computed: {
    d() {
      return details;
    },
  },
};
</script>
