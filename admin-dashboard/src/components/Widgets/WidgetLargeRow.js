import React from "react";
import "./widgets.css";
import {
  getContributorImagesByIds,
  getContributorNamesByIds,
} from "../../helpers/dataHelpers";

export default function WidgetLargeRow(props) {
  const { name, status, severity, assigneeIds } = props;
  const imgs = getContributorImagesByIds(assigneeIds);
  const assigneeNames = getContributorNamesByIds(assigneeIds);
  return (
    <tr className="widgetLgTr">
      <td className="widgetLgName">{name}</td>
      <td className="widgetLgContributors">
        {imgs &&
          imgs.map((imgUrl, idx) => (
            <img src={imgUrl} alt={assigneeNames[idx]} key={assigneeIds[idx]} />
          ))}
      </td>
      <td>
        <span
          className={`widgetLgDetail ${severity ? severity.toLowerCase() : ""}`}
        >
          {severity}
        </span>
      </td>
      <td>
        <span
          className={`widgetLgStatus ${status ? status.toLowerCase() : ""}`}
        >
          {status}
        </span>
      </td>
    </tr>
  );
}
