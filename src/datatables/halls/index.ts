import { HeaderInterface } from "@/utils/datatable/header/headerInterface";
import DatatableIntetrface from "@/utils/datatable/datatableInterface";
import TextHeader from "@/utils/datatable/header/textHeader";
import ActionsHeader from "@/utils/datatable/header/actions/actionsHeader";
import dateHeader from "@/utils/datatable/header/dateHeader";
import Datatable from "@/utils/datatable/datatable";
import filters from "./filters";
const headers: HeaderInterface[] = [
  new TextHeader("name"),
  new TextHeader("start table"),
  new dateHeader("created at"),
  new ActionsHeader("categories", { edit: true, delete: true }),
];
const url = "group/hierarchy?lang=en";
const params: DatatableIntetrface = {
  title: "Halls",
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
