import Vue from "vue";
import TextInputComponent from "@/utils/form/components/Text.vue";
import FileInputComponent from "@/utils/form/components/File.vue";
import ComboInputComponent from "@/utils/form/components/Combo.vue";
import { required } from "@/utils/validations/validations";
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
export const nameEn: TextInputInterface = {
  name: "nameEn",
  generateInputHtml: () => Vue.extend(TextInputComponent),
  label: "nameEn",
  rules: [(value: string) => required(value)],
  cols: 6,
  type: "text",
  value: "",
};
export const groupCode: SelectInputInterface = {
  name: "groupCode",
  cache: false,
  text: "name",
  cols: 6,
  initialFetch: true,
  generateInputHtml: () => Vue.extend(ComboInputComponent),
  clearable: true,
  valueKey: "code",
  type: "combo",
  url: "groups/list",
  label: "groupCode",
};
export const barCode: TextInputInterface = {
  name: "barCode",
  generateInputHtml: () => Vue.extend(TextInputComponent),
  label: "barcode",
  cols: 6,
  type: "text",
  value: "",
};
export const price: TextInputInterface = {
  name: "price",
  generateInputHtml: () => Vue.extend(TextInputComponent),
  label: "price",
  rules: [(value: string) => required(value)],
  cols: 6,
  type: "text",
  value: "",
};

export const costPrice: TextInputInterface = {
  name: "costPrice",
  generateInputHtml: () => Vue.extend(TextInputComponent),
  label: "costPrice",
  rules: [(value: string) => required(value)],
  cols: 6,
  type: "text",
  value: "",
};
