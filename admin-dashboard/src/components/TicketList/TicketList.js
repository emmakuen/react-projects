import "./ticketList.css";

import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { convertToDate } from "../../utils/formatters";
import { statuses, severityLevels } from "../../data/ticketsData";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "projectName", headerName: "Project", width: 130 },
  { field: "ticketName", headerName: "Ticket", width: 130 },
  { field: "reporterName", headerName: "Reporter", width: 130 },
  {
    field: "createdDate",
    headerName: "Created",
    type: "date",
    width: 200,
  },
  {
    field: "severity",
    headerName: "Severity",
    width: 160,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
  },
];

const rows = [
  {
    id: 1,
    projectName: "Snow",
    ticketName: "Jon",
    reporterName: "Bla",
    createdDate: convertToDate("2022-01-21"),
    severity: severityLevels.high,
    status: statuses.inProgress,
  },
  {
    id: 2,
    projectName: "Lannister",
    ticketName: "Cersei",
    reporterName: "Bla",
    createdDate: convertToDate("2022-05-28"),
    severity: severityLevels.low,
    status: statuses.inProgress,
  },
  {
    id: 3,
    projectName: "Lannister",
    ticketName: "Jaime",
    reporterName: "Bla",
    createdDate: convertToDate("2022-08-21"),
    severity: severityLevels.medium,
    status: statuses.inProgress,
  },
  {
    id: 4,
    projectName: "Stark",
    ticketName: "Arya",
    reporterName: "Bla",
    createdDate: convertToDate("2020-03-18"),
    severity: severityLevels.high,
    status: statuses.inProgress,
  },
  {
    id: 5,
    projectName: "Targaryen",
    ticketName: "Daenerys",
    reporterName: "Bla",
    severity: severityLevels.low,
    createdDate: null,
  },
  {
    id: 6,
    projectName: "Melisandre",
    ticketName: null,
    reporterName: "Bla",
    createdDate: convertToDate("2021-04-25"),
    status: statuses.inProgress,
  },
  {
    id: 7,
    projectName: "Clifford",
    ticketName: "Ferrara",
    reporterName: "Bla",
    createdDate: convertToDate("2022-02-13"),
    status: statuses.inProgress,
  },
  {
    id: 8,
    projectName: "Frances",
    ticketName: "Rossini",
    reporterName: "Bla",
    createdDate: convertToDate("2021-07-15"),
    status: statuses.inProgress,
  },
  {
    id: 9,
    projectName: "Roxie",
    ticketName: "Harvey",
    reporterName: "Bla",
    createdDate: convertToDate("2021-09-2"),
    status: statuses.inProgress,
  },
];

export default function TicketList() {
  return (
    <div style={{ height: "90%", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
