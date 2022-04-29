import {
  Dashboard,
  Timeline,
  ConfirmationNumber,
  Group,
  Apartment,
  GroupWork,
} from "@material-ui/icons";

export const routes = Object.freeze({
  home: {
    path: "/",
    name: "Dashboard",
    icon: <Dashboard />,
  },
  tickets: {
    path: "/tickets",
    name: "Tickets",
    icon: <ConfirmationNumber />,
  },
  analytics: {
    path: "/analytics",
    name: "Analytics",
    icon: <Timeline />,
  },
  projects: {
    path: "/projects",
    name: "Projects",
    icon: <Apartment />,
  },
  teams: {
    path: "/teams",
    name: "Teams",
    icon: <Group />,
  },
  contributors: {
    path: "/contributors",
    name: "Contributors",
    icon: <GroupWork />,
  },
});
