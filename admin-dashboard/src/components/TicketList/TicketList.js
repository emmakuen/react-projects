import "./ticketList.css";
import { columns } from "./columnData";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { tickets } from "../../data/ticketsData";

export default function TicketList() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div style={{ height: "90%", width: "100%" }}>
      <DataGrid
        rows={tickets}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[5]}
        checkboxSelection
        isOpen={isOpen}
      />
    </div>
  );
}
