import Vue from "vue";
import TextInputComponent from "@/utils/form/components/Text.vue";
import FileInputComponent from "@/utils/form/components/File.vue";
import ComboInputComponent from "@/utils/form/components/Combo.vue";
import { required, num } from "@/utils/validations/validations";
import {
  TextInputInterface,
  SelectInputInterface,
} from "@/utils/form/interface";

export const name: TextInputInterface = {
  name: "name",
  generateInputHtml: () => Vue.extend(TextInputComponent),
  rules: [(value: string) => required(value)],
  label: "name",
  cols: 6,
  type: "text",
  value: "",
};
export const startTable: TextInputInterface = {
  name: "startTable",
  generateInputHtml: () => Vue.extend(TextInputComponent),
  rules: [(value: string) => required(value), (value: string) => num(value)],
  label: "start table",
  cols: 6,
  type: "number",
  value: "",
};
export const countTable: TextInputInterface = {
  name: "tableCount",
  generateInputHtml: () => Vue.extend(TextInputComponent),
  rules: [(value: string) => required(value), (value: string) => num(value)],
  label: "countTable",
  cols: 6,
  type: "number",
  value: "",
};
