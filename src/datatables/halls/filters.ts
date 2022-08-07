import Form from "@/utils/form/Form";
import { FormInterface } from "@/utils/form/interface";
import { Name, DateFrom, DateTo } from "../globalFilters";
import Input from "@/utils/form/inputs/Input";
const inputs: Input[] = [
  new Input(Name),
  new Input(DateFrom),
  new Input(DateTo),
];
const params: FormInterface = {
  inputs,
};

const rolesFilters = new Form(params);

export default rolesFilters;
