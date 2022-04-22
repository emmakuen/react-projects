import React from "react";
import "./widgets.css";

export default function WidgetLargeRow() {
  return (
    <tr className="widgetLgTr">
      <td className="widgetLgName">Page not found</td>
      <td className="widgetLgContributors">
        <img
          src="https://images.unsplash.com/photo-1649174778814-eb25702b6b0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1649174778814-eb25702b6b0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
          alt=""
        />
      </td>
      <td>
        <span className={`widgetLgDetail ${"high"}`}>Critical</span>
      </td>
      <td>
        <span className={`widgetLgStatus ${"resolved"}`}>Resolved</span>
      </td>
    </tr>
  );
}
