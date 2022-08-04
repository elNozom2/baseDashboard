import i18n from "@/i18n";
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Base from "@/components/base/base.vue";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: Base,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/items",
        name: "items-list",
        component: () => import("@/views/items/index.vue"),
      },
      {
        path: "/items/create",
        name: "items-create",
        component: () => import("@/views/items/create.vue"),
      },
      {
        path: "/items/edit/:id",
        name: "items-edit",
        component: () => import("@/views/items/edit.vue"),
      },
      {
        path: "/items/view/:id",
        name: "items-view",
        component: () => import("@/views/items/view.vue"),
      },
      {
        path: "/items/groups",
        name: "items-groups",
        component: () => import("@/views/items/group-base.vue"),
        children: [
          {
            path: "/items/groups",
            name: "items-groups-create",
            component: () => import("@/views/items/group-edit-add.vue"),
          },
          {
            path: "/items/groups/:id",
            name: "items-groups-edit",
            component: () => import("@/views/items/group-edit-add.vue"),
          },
        ],
      },
      {
        path: "/itemsForm",
        name: "itemsForm",
        component: () => import("@/views/items/itemsForm.vue"),
      },
      {
        path: "/itemsFormHalf",
        name: "itemsFormHalf",
        component: () => import("@/views/items/itemsFormHalf.vue"),
      },
      {
        path: "/groupTable",
        name: "group-tables",
        component: () => import("@/views/items/groupTable.vue"),
      },
      {
        path: "/groupTable/create",
        name: "group-tables-insert",
        component: () => import("@/views/items/groupTableEditAdd.vue"),
      },
      {
        path: "/groupTable/:id",
        name: "group-tables-edit",
        component: () => import("@/views/items/groupTableEditAdd.vue"),
      },
    ],
  },
  {
    path: "/server-error",
    component: () => import("@/views/errors/server.vue"),
  },
  {
    path: "/login",
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
