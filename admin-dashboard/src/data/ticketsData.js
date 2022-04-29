import { convertToDate } from "../utils/formatters";

const severityLevels = {
  medium: "Medium",
  high: "High",
  low: "Low",
};

const statuses = {
  todo: "To do",
  inProgress: "In Progress",
  tobeTested: "To be Tested",
  resolved: "Resolved",
};

export const tickets = [
  {
    id: 1,
    projectName: "Bug Tracker App",
    name: "Issue in design format",
    reporterName: "John",
    createdDate: convertToDate("2022-01-21"),
    status: statuses.resolved,
    severity: severityLevels.high,
    assigneeIds: [1, 3, 4],
  },
  {
    id: 2,
    projectName: "Marketing Dashboard",
    name: "Mobile friendly screens",
    reporterName: "John",
    createdDate: convertToDate("2020-12-04"),
    status: statuses.inProgress,
    severity: severityLevels.medium,
    assigneeIds: [1, 2],
  },
  {
    id: 3,
    projectName: "Bug Tracker App",
    name: "Toggle button not working",
    reporterName: "John",
    createdDate: convertToDate("2021-04-15"),
    status: statuses.tobeTested,
    severity: severityLevels.low,
    assigneeIds: [2, 3],
  },
  {
    id: 4,
    projectName: "Bug Tracker App",
    name: "Replace old table design",
    reporterName: "John",
    createdDate: convertToDate("2022-02-03"),
    status: statuses.tobeTested,
    severity: severityLevels.low,
    assigneeIds: [2, 3],
  },
  {
    id: 5,
    projectName: "Marketing Dashboard",
    name: "Support screen review",
    reporterName: "John",
    createdDate: convertToDate("2021-11-12"),
    status: statuses.inProgress,
    severity: severityLevels.medium,
    assigneeIds: [4],
  },
  {
    id: 6,
    projectName: "E-commerce Website",
    name: "Data incorrectly displayed",
    reporterName: "John",
    createdDate: convertToDate("2022-03-01"),
    status: statuses.todo,
    severity: severityLevels.high,
    assigneeIds: [2, 3, 4],
  },
];
