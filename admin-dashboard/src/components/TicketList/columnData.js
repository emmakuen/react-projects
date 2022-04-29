import "./ticketList.css";
import { EditOutlined, DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { routes } from "../../constants/routes";

const handleDelete = (id) => {};
const ROW_WIDTH_SMALL = 160;
const ROW_WIDTH_AVG = 200;
const ROW_WIDTH_LARGE = 250;

export const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "projectName", headerName: "Project", width: ROW_WIDTH_SMALL },
  { field: "name", headerName: "Ticket", width: ROW_WIDTH_LARGE },
  {
    field: "severity",
    headerName: "Severity",
    width: ROW_WIDTH_SMALL,
  },
  {
    field: "status",
    headerName: "Status",
    width: ROW_WIDTH_SMALL,
  },
  {
    field: "assignees",
    headerName: "Assignees",
    type: "assignees",
    width: ROW_WIDTH_AVG,
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
          <button className="dg-button">
            <DeleteOutline className="dg-red" />
          </button>
        </>
      );
    },
  },
];
