import { HeaderInterface } from "@/utils/datatable/header/headerInterface";
import DatatableIntetrface from "@/utils/datatable/datatableInterface";
import TextHeader from "@/utils/datatable/header/textHeader";
import ActionsHeader from "@/utils/datatable/header/actions/actionsHeader";
import Datatable from "@/utils/datatable/datatable";
import filters from "./filters";
const headers: HeaderInterface[] = [
  new TextHeader("id"),
  new TextHeader("groupName"),
  new TextHeader("groupNameEn"),
  new TextHeader("parentCode"),
  new TextHeader("code"),
  new TextHeader("childrenLength"),
  new ActionsHeader("categories", { edit: true, delete: true }),
];
const url = "group/hierarchy?lang=en";
const params: DatatableIntetrface = {
  title: "categories",
  headers,
  description: "categories_desc",
  searchable: true,
  url,
  filters,
  hasFooter: false,
  hasEdit: true,
  hasCreate: true,
};

const datatable = new Datatable(params);
export default datatable;
