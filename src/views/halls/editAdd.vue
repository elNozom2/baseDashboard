<template>
  <v-container>
    <h1>sahjklyfyasdghuguyituytusy</h1>
    <edit-add :d="d"></edit-add>
    <v-color-picker class="ma-2" hide-inputs></v-color-picker>
  </v-container>
</template>

<script lang="ts">
import EditAdd from "@/utils/crud/editAdd";
import details from "@/cruds/groupTable";
import EditAddComponent from "@/utils/crud/editAdd.vue";
export default {
  name: "groupTable",
  components: {
    "edit-add": EditAddComponent,
  },
  computed: {
    d() {
      const d = new EditAdd(details);
      return d;
    },
  },
};
</script>
