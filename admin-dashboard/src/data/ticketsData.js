import { contributors } from "./contributorData";

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
    name: "Issue in design format",
    status: statuses.resolved,
    severity: severityLevels.high,
    assignees: [],
  },
];
