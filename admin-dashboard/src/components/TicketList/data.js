export const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "projectName", headerName: "Project", width: 130 },
  { field: "ticketName", headerName: "Ticket", width: 130 },
  { field: "reporterName", headerName: "Reporter", width: 130 },
  {
    field: "createdDate",
    headerName: "Created",
    type: "date",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];
