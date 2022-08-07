<template>
  <v-container>
    <datatable :table="data" />
  </v-container>
</template>

<script>
import data from "@/datatables/halls/index";
import datatable from "@/utils/datatable/components/datatable.vue";
export default {
  name: "halls",
  data() {
    return {
      data,
    };
  },
  components: {
    datatable,
  },
};
</script>
