import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
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
import CreatingProject from "./views/Structure/CreatingProject.js";
import EnvironmentDivision from "./views/Structure/EnvironmentDivision.js";
import CodePush from "./views/Structure/CodePush.js";
import Prettier from "./views/Structure/Prettier.js";
import ESLint from "./views/Structure/ESLint.js";
import Husky from "./views/Structure/Husky.js";
import Analytics from "./views/Structure/Analytics.js";
import Crashlytics from "./views/Structure/Crashlytics.js";
import Commitzen from "./views/Structure/Commitzen.js";
import Pipeline from "./views/Structure/Pipeline.js";

//-------------------------------------------------------------------------
import Windows from "./views/WorkspacePreparation/Windows.js";
import Mac from "./views/WorkspacePreparation/Mac.js";

//-------------------------------------------------------------------------
import NativeModulesAndroid from "./views/Components/NativeModulesAndroid.js";
import NativeModulesIos from "./views/Components/NativeModulesIos.js";

//-------------------------------------------------------------------------
import Navegacao from "./views/Help/Navegacao.js";
import Armazenamento from "./views/Help/Armazenamento.js";
import Componente from "./views/Help/Componente.js";
import Logica from "./views/Help/Logica.js";

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
        name: "Code/Rules",
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
      },
    ],
  },
  {
    path: "/help/Componente",
    name: "Help",
    icon: "objects_support-17",
    component: Componente,
    layout: "/admin",
    dropdown: [
      {
        path: "/help/Componente",
        name: "Componente",
        component: Componente,
        layout: "/admin",
      },
      {
        path: "/help/Logica",
        name: "Lógica",
        component: Logica,
        layout: "/admin",
      },
      {
        path: "/help/Armazenamento",
        name: "Armazenamento",
        component: Armazenamento,
        layout: "/admin",
      },
      {
        path: "/help/Navegacao",
        name: "Navegação",
        component: Navegacao,
        layout: "/admin",
      },
    ],
  },
  {
    path: "/structure/CreatingProject",
    name: "Structure",
    icon: "design_bullet-list-67",
    component: CreatingProject,
    layout: "/admin",
    dropdown: [
      {
        path: "/structure/CreatingProject",
        name: "Gerando um projeto",
        component: CreatingProject,
        layout: "/admin",
      },
      {
        path: "/structure/EnvironmentDivision",
        name: "Divisão de ambientes",
        component: EnvironmentDivision,
        layout: "/admin",
      },
      {
        path: "/structure/CodePush",
        name: "CodePush",
        component: CodePush,
        layout: "/admin",
      },
      {
        path: "/structure/Crashlytics",
        name: "Crashlytics",
        component: Crashlytics,
        layout: "/admin",
      },
      {
        path: "/structure/Analytics",
        name: "Analytics",
        component: Analytics,
        layout: "/admin",
      },
      {
        path: "/structure/ESLint",
        name: "ESLint",
        component: ESLint,
        layout: "/admin",
      },
      {
        path: "/structure/Prettier",
        name: "Prettier",
        component: Prettier,
        layout: "/admin",
      },
      {
        path: "/structure/Husky",
        name: "Husky",
        component: Husky,
        layout: "/admin",
      },
      {
        path: "/structure/Commitzen",
        name: "Commitzen",
        component: Commitzen,
        layout: "/admin",
      },
      {
        path: "/structure/Pipeline",
        name: "Pipeline",
        component: Pipeline,
        layout: "/admin",
      },
    ],
  },
  {
    path: "/components/native-modules/",
    name: "Componentes",
    icon: "objects_diamond",
    component: NativeModulesAndroid,
    layout: "/admin",
    dropdown: [
      {
        path: "/components/native-modules/android",
        name: "Native Modules - Android",
        component: NativeModulesAndroid,
        layout: "/admin",
      },
      {
        path: "/components/native-modules/ios",
        name: "Native Modules - Ios",
        component: NativeModulesIos,
        layout: "/admin",
      },
    ],
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
    name: "Code/Rules",
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
  {
    path: "/structure/CreatingProject",
    name: "Gerando um projeto",
    component: CreatingProject,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/structure/EnvironmentDivision",
    name: "Divisão de ambientes",
    component: EnvironmentDivision,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/structure/CodePush",
    name: "CodePush",
    component: CodePush,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/structure/Crashlytics",
    name: "Crashlytics",
    component: Crashlytics,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/structure/Analytics",
    name: "Analytics",
    component: Analytics,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/structure/ESLint",
    name: "ESLint",
    component: ESLint,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/structure/Prettier",
    name: "Prettier",
    component: Prettier,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/structure/Husky",
    name: "Husky",
    component: Husky,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/structure/Commitzen",
    name: "Commitzen",
    component: Commitzen,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/structure/Commitzen",
    name: "Pipeline",
    component: Pipeline,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/components/native-modules/android",
    name: "Native Modules - Android",
    component: NativeModulesAndroid,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/components/native-modules/ios",
    name: "Native Modules - Ios",
    component: NativeModulesIos,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/help/Componente",
    name: "Componente",
    component: Componente,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/help/Logica",
    name: "Lógica",
    component: Logica,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/help/Armazenamento",
    name: "Armazenamento",
    component: Armazenamento,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/help/Navegacao",
    name: "Navegação",
    component: Navegacao,
    layout: "/admin",
    invisible: true,
  },
];
export default dashRoutes;
