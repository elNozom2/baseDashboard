<template>
  <app-form :form="data"></app-form>
</template>

<script lang="ts">
import AppForm from "@/utils/form/components/Form.vue";
import data from "@/forms/globals/settings";
// import {snackBar} from '@/utils/Helpers'
export default {
  data() {
    return {
      data,
    };
  },
  components: {
    "app-form": AppForm,
  },
};
</script>
