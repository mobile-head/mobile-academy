/*!

=========================================================
* Now UI Dashboard React - v1.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/TableList.js";
import Maps from "views/Maps.js";
import Upgrade from "views/Upgrade.js";
import UserPage from "views/UserPage.js";

//-------------------------------------------------------------------------
import EvologMotorista from "./views/Overview/EvologMotorista.js";
import EvologComercial from "./views/Overview/EvologComercial.js";
import EvologChecklist from "./views/Overview/EvologChecklist.js";
import EvologCanhoto from "./views/Overview/EvologCanhoto.js";
import Evolog4PL from "./views/Overview/Evolog4PL.js";

//-------------------------------------------------------------------------
import Code from "./views/Documentation/Code.js";
import Components from "./views/Documentation/Components.js";
import Structure from "./views/Documentation/Structure.js";

//-------------------------------------------------------------------------
import Windows from "./views/WorkspacePreparation/Windows.js";
import Mac from "./views/WorkspacePreparation/Mac.js";

var dashRoutes = [
  {
    path: "/overview/EvologMotorista",
    name: "Overview",
    icon: "text_align-left",
    component: EvologMotorista,
    layout: "/admin",
    dropdown: [
      {
        path: "/overview/EvologMotorista",
        name: "Evolog Motorista",
        component: EvologMotorista,
        layout: "/admin",
      },
      {
        path: "/overview/EvologComercial",
        name: "Evolog Comercial",
        component: EvologComercial,
        layout: "/admin",
      },
      {
        path: "/overview/EvologChecklist",
        name: "Evolog Checklist",
        component: EvologChecklist,
        layout: "/admin",
      },
      {
        path: "/overview/EvologCanhoto",
        name: "Evolog Canhoto",
        component: EvologCanhoto,
        layout: "/admin",
      },
      {
        path: "/overview/Evolog4PL",
        name: "Evolog 4PL",
        component: Evolog4PL,
        layout: "/admin",
      },
    ],
  },
  {
    path: "/workspacePreparation/Windows",
    name: "Workspace Preparation",
    icon: "business_briefcase-24",
    component: Windows,
    layout: "/admin",
    dropdown: [
      {
        path: "/workspacePreparation/Windows",
        name: "Windows OS",
        component: Windows,
        layout: "/admin",
      },
      {
        path: "/workspacePreparation/Mac",
        name: " Mac OS",
        component: Mac,
        layout: "/admin",
      },
    ],
  },
  {
    path: "/documentation/Code",
    name: "Documentation",
    icon: "files_box",
    component: Code,
    layout: "/admin",
    dropdown: [
      {
        path: "/documentation/Code",
        name: "Código",
        component: Code,
        layout: "/admin",
      },
      {
        path: "/documentation/Components",
        name: "Componentes",
        component: Components,
        layout: "/admin",
      },
      {
        path: "/documentation/Structure",
        name: "Estruturação",
        component: Structure,
        layout: "/admin",
        dropdown: [
          {
            path: "/documentation/Structure",
            name: "Estruturação",
            component: Structure,
            layout: "/admin",
          },
        ],
      },
    ],
  },
  {
    path: "/icons",
    name: "Components",
    icon: "design_image",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "ui-1_bell-53",
    component: Notifications,
    layout: "/admin",
  },
  // {
  //   path: "/user-page",
  //   name: "User Profile",
  //   icon: "users_single-02",
  //   component: UserPage,
  //   layout: "/admin",
  // },
  {
    path: "/extended-tables",
    name: "Table List",
    icon: "files_paper",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "design-2_ruler-pencil",
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/overview/EvologMotorista",
    name: "Evolog Motorista",
    component: EvologMotorista,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/overview/EvologComercial",
    name: "Evolog Comercial",
    component: EvologComercial,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/overview/EvologChecklist",
    name: "Evolog Checklist",
    component: EvologChecklist,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/overview/EvologCanhoto",
    name: "Evolog Canhoto",
    component: EvologCanhoto,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/overview/Evolog4PL",
    name: "Evolog 4PL",
    component: Evolog4PL,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/documentation/Code",
    name: "Código",
    component: Code,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/documentation/Components",
    name: "Componentes",
    component: Components,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/documentation/Structure",
    name: "Estruturação",
    component: Structure,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/workspacePreparation/Windows",
    name: "Windows OS",
    component: Windows,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/workspacePreparation/Mac",
    name: " Mac OS",
    component: Mac,
    layout: "/admin",
    invisible: true,
  },
];
export default dashRoutes;
