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
    assigneeIds: [1, 3, 4],
  },
  {
    id: 2,
    name: "Mobile friendly screens",
    status: statuses.inProgress,
    severity: severityLevels.medium,
    assigneeIds: [1, 2],
  },
  {
    id: 3,
    name: "Toggle button not working",
    status: statuses.tobeTested,
    severity: severityLevels.low,
    assigneeIds: [2, 3],
  },
  {
    id: 4,
    name: "Replace old table design",
    status: statuses.tobeTested,
    severity: severityLevels.low,
    assigneeIds: [2, 3],
  },
  {
    id: 5,
    name: "Support screen review",
    status: statuses.inProgress,
    severity: severityLevels.medium,
    assigneeIds: [4],
  },
  {
    id: 6,
    name: "Data incorrectly displayed",
    status: statuses.todo,
    severity: severityLevels.high,
    assigneeIds: [2, 3, 4],
  },
];
