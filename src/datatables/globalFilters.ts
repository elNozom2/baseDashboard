import Vue from "vue";
import TextInputComponent from "@/utils/form/components/Text.vue";
import FileInputComponent from "@/utils/form/components/File.vue";
import ComboInputComponent from "@/utils/form/components/Combo.vue";
import dateImputComponent from "@/utils/form/components/Date.vue";
import {
  TextInputInterface,
  SelectInputInterface,
  DateInputInterface,
} from "@/utils/form/interface";
import { required } from "@/utils/validations/validations";
import { num } from "@/utils/validations/validations";
export const Name: TextInputInterface = {
  name: "filterName",
  generateInputHtml: () => Vue.extend(TextInputComponent),
  label: "filterName",
  cols: 6,
  type: "text",
  required: false,
  value: "",
};
export const DateFrom: DateInputInterface = {
  name: "DateFromFilter",
  generateInputHtml: () => Vue.extend(dateImputComponent),
  label: "DateFromFilter",
  cols: 6,
  type: "text",
  required: false,
  value: "",
  min: "",
  max: "",
  limit: "",
};
export const DateTo: DateInputInterface = {
  name: "DateToFilter",
  generateInputHtml: () => Vue.extend(dateImputComponent),
  label: "DateToFilter",
  cols: 6,
  type: "text",
  required: false,
  value: "",
  min: "",
  max: "",
  limit: "date",
};
export const category: SelectInputInterface = {
  name: "categoryFilter",
  cache: false,
  initialFetch: true,
  generateInputHtml: () => Vue.extend(ComboInputComponent),
  label: "categoryFilter",
  cols: 6,
  type: "text",
  required: false,
  value: "",
};
export const priceFrom: TextInputInterface = {
  name: "priceFromFilter",
  generateInputHtml: () => Vue.extend(TextInputComponent),
  rules: [(value: string) => num(value)],
  label: "priceFromFilter",
  cols: 6,
  type: "number",
  required: false,
  value: "",
};
export const priceTo: TextInputInterface = {
  name: "priceToFilter",
  generateInputHtml: () => Vue.extend(TextInputComponent),
  rules: [(value: string) => num(value)],
  label: "priceToFilter",
  cols: 6,
  type: "number",
  required: false,
  value: "",
};
