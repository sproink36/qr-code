import { createRouter, createWebHistory } from "vue-router";

import Main from "@/views/Main.vue";

const Dashboard = () => import("@/views/Dashboard.vue");
const DashboardMain = () => import("@/components/dashboard/main/Main.vue");
const DashboardStorage = () =>
  import("@/components/dashboard/storage/Storage.vue");

const DashboardStatistic = () =>
  import("@/components/dashboard/statistic/Statistic.vue");

const InnerQr = () => import("@/components/dashboard/inner_qr/InnerQr.vue");
const InnerFolder = () =>
  import("@/components/dashboard/inner_folder/InnerFolder.vue");
const Settings = () => import("@/components/dashboard/settings/Settings.vue");
const NewQr = () => import("@/components/dashboard/new_qr/NewQr.vue");
const routes = [
  { path: "/", name: "main", component: Main },
  {
    path: "/dashboard",
    name: "dashboard",
    redirect: "dashboard/main",
    component: Dashboard,
    children: [
      { path: "main", component: DashboardMain },
      { path: "storage", component: DashboardStorage },
      { path: "statistic", component: DashboardStatistic },
      { path: "inner_qr/:id", component: InnerQr },
      { path: "InnerFolder/:id", component: InnerFolder },
      { path: "settings", component: Settings },
      { path: "new_qr", component: NewQr },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
