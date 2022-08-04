import Input from "@/utils/form/inputs/Input";
import Form from "@/utils/form/Form";
import { FormInterface } from "@/utils/form/interface";
import { name, nameEn, groupCode, barCode, price, costPrice } from "./inputs";

const inputs: Input[] = [
  new Input(name),
  new Input(nameEn),
  new Input(groupCode),
  new Input(barCode),
  new Input(price),
  new Input(costPrice),
];

const params: FormInterface = {
  inputs,
};

const categoryForm = new Form(params);

export default categoryForm;
