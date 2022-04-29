import React from "react";
import "./widgets.css";
import ContributorImages from "../common/ContributorImages";

export default function WidgetLargeRow(props) {
  const { name, status, severity, assigneeIds } = props;
  return (
    <tr className="widgetLgTr">
      <td className="widgetLgName">{name}</td>
      <td className="widgetLgContributors">
        <ContributorImages ids={assigneeIds} />
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
