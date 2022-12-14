import Input from "@/utils/form/inputs/Input";
import Form from "@/utils/form/Form";
import { FormInterface } from "@/utils/form/interface";
import {
  logo,
  color,
  darkBg,
  lightBg,
  title,
  description,
  keywords,
  cover,
  showEstimatedTime,
} from "./inputs";
import Api from "@/utils/axios/Api";
const Http = Api.getInstance();

const inputs: Input[] = [
  new Input(logo),
  new Input(color),
  new Input(darkBg),
  new Input(lightBg),
  new Input(title),
  new Input(description),
  new Input(keywords),
  new Input(cover),
  new Input(showEstimatedTime),
];
const submit = (form: any): Promise<any> => {
  Http.put("settings");
  return new Promise((resolve, reject) => {});
};
const params: FormInterface = {
  inputs,
  submit,
};

const categoryForm = new Form(params);

export default categoryForm;
