import "./ticketList.css";

import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
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

const rows = [
  {
    id: 1,
    projectName: "Snow",
    ticketName: "Jon",
    reporterName: "Bla",
    createdDate: 35,
  },
  {
    id: 2,
    projectName: "Lannister",
    ticketName: "Cersei",
    reporterName: "Bla",
    createdDate: 42,
  },
  {
    id: 3,
    projectName: "Lannister",
    ticketName: "Jaime",
    reporterName: "Bla",
    createdDate: 45,
  },
  {
    id: 4,
    projectName: "Stark",
    ticketName: "Arya",
    reporterName: "Bla",
    createdDate: 16,
  },
  {
    id: 5,
    projectName: "Targaryen",
    ticketName: "Daenerys",
    reporterName: "Bla",
    createdDate: null,
  },
  {
    id: 6,
    projectName: "Melisandre",
    ticketName: null,
    reporterName: "Bla",
    createdDate: 150,
  },
  {
    id: 7,
    projectName: "Clifford",
    ticketName: "Ferrara",
    reporterName: "Bla",
    createdDate: 44,
  },
  {
    id: 8,
    projectName: "Frances",
    ticketName: "Rossini",
    reporterName: "Bla",
    createdDate: 36,
  },
  {
    id: 9,
    projectName: "Roxie",
    ticketName: "Harvey",
    reporterName: "Bla",
    createdDate: 65,
  },
];

export default function TicketList() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
