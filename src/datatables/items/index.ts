import { HeaderInterface } from "@/utils/datatable/header/headerInterface";
import DatatableIntetrface from "@/utils/datatable/datatableInterface";
import TextHeader from "@/utils/datatable/header/textHeader";
import ImgHeader from "@/utils/datatable/header/imgHeader";
import PriceHeader from "@/utils/datatable/header/priceHeader";
import DateHeader from "@/utils/datatable/header/dateHeader";
import ActionsHeader from "@/utils/datatable/header/actions/actionsHeader";
import Datatable from "@/utils/datatable/datatable";
import filters from "./filters";
const headers: HeaderInterface[] = [
  new TextHeader("name"),
  new ImgHeader("img"),
  new TextHeader("category"),
  new PriceHeader("price"),
  new TextHeader("estimated time"),
  new DateHeader("created at"),
  new ActionsHeader("categories", { edit: true, delete: true }),
];
const url = "group/hierarchy?lang=en";
const params: DatatableIntetrface = {
  title: "Tables",
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
