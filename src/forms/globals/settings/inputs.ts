import Vue from "vue";
import TextInputComponent from "@/utils/form/components/Text.vue";
import FileInputComponent from "@/utils/form/components/File.vue";
import ComboInputComponent from "@/utils/form/components/Combo.vue";
import switchInputComponent from "@/utils/form/components/Switch.vue";
import {
  TextInputInterface,
  SelectInputInterface,
  SwitchInputInterface,
} from "@/utils/form/interface";
import { required } from "@/utils/validations/validations";

export const logo: TextInputInterface = {
  name: "mainLogo",
  generateInputHtml: () => Vue.extend(FileInputComponent),
  label: "logo",
  cols: 6,
  type: "file",
  value: "",
};

export const color: TextInputInterface = {
  name: "mainColor",
  generateInputHtml: () => Vue.extend(TextInputComponent),
  rules: [(value: string) => required(value)],

  label: "mainColor",
  cols: 6,
  type: "text",
  required: true,
  value: "",
};

export const darkBg: TextInputInterface = {
  name: "darkBg",
  generateInputHtml: () => Vue.extend(TextInputComponent),
  rules: [(value: string) => required(value)],
  label: "darkBg",
  cols: 6,
  required: true,
  type: "text",
  value: "",
};

export const lightBg: TextInputInterface = {
  name: "lightBg",
  generateInputHtml: () => Vue.extend(TextInputComponent),
  rules: [(value: string) => required(value)],
  label: "lightBg",
  cols: 6,
  required: true,
  type: "text",
  value: "",
};

export const title: TextInputInterface = {
  name: "title",
  generateInputHtml: () => Vue.extend(TextInputComponent),
  rules: [(value: string) => required(value)],
  label: "title",
  cols: 6,
  required: true,
  type: "text",
  value: "",
};
export const description: TextInputInterface = {
  name: "description",
  generateInputHtml: () => Vue.extend(TextInputComponent),
  rules: [(value: string) => required(value)],
  label: "description",
  cols: 6,
  required: true,
  type: "text",
  value: "",
};

export const keywords: TextInputInterface = {
  name: "keywords",
  generateInputHtml: () => Vue.extend(TextInputComponent),
  rules: [(value: string) => required(value)],
  label: "keywords",
  cols: 6,
  required: true,
  type: "text",
  value: "",
};
export const cover: TextInputInterface = {
  name: "cover",
  generateInputHtml: () => Vue.extend(FileInputComponent),
  label: "cover",
  cols: 6,
  type: "file",
  value: "",
};

export const showEstimatedTime: SwitchInputInterface = {
  name: "showEstimatedTime",
  generateInputHtml: () => Vue.extend(switchInputComponent),
  label: "showEstimatedTime",
  cols: 6,
  type: "switch",
  value: "",
  initial: true,
};
