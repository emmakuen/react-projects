import "./ticketList.css";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { tickets } from "../../data/ticketsData";
import { EditOutlined, DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { routes } from "../../constants/routes";
import ContributorImages from "../common/ContributorImages";
import PriorityBubble from "../common/PriorityBubble";

const ROW_WIDTH_SMALL = 160;
const ROW_WIDTH_AVG = 200;
const ROW_WIDTH_LARGE = 250;

export default function TicketList() {
  const [data, setData] = React.useState(tickets);

  const handleDelete = (params) => {
    setData(data.filter((item) => item.id !== params.id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "projectName", headerName: "Project", width: ROW_WIDTH_AVG },
    { field: "name", headerName: "Ticket", width: ROW_WIDTH_LARGE },
    {
      field: "severity",
      headerName: "Severity",
      width: ROW_WIDTH_SMALL,
      renderCell: (params) => {
        return <PriorityBubble severity={params.row.severity} />;
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: ROW_WIDTH_SMALL,
    },
    {
      field: "assignees",
      headerName: "Assignees",
      width: ROW_WIDTH_AVG,
      renderCell: (params) => {
        return <ContributorImages ids={params.row.assigneeIds} />;
      },
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: ROW_WIDTH_SMALL,
      cellClassName: "actions",
      renderCell: (params) => {
        return (
          <>
            <Link to={`${routes.tickets.path}/${params.row.id}`}>
              <button className="dg-button">
                <EditOutlined className="dg-green" />
              </button>
            </Link>
            <button className="dg-button" onClick={() => handleDelete(params)}>
              <DeleteOutline className="dg-red" />
            </button>
          </>
        );
      },
    },
  ];

  return (
    <div style={{ height: "90%", width: "100%" }}>
      <DataGrid
        disableSelectionOnClick
        rows={data}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[5, 10, 15]}
        checkboxSelection
      />
    </div>
  );
}
