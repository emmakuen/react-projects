import "./widgets.css";
import WidgetLargeRow from "./WidgetLargeRow";

export default function WidgetLarge() {
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Tickets</h3>
      <table className="widgetLgTable">
        <thead className="widgetLgTrHeaders">
          <tr>
            <th className="widgetLgTh">Ticket Name</th>
            <th className="widgetLgTh">Assignees</th>
            <th className="widgetLgTh">Priority</th>
            <th className="widgetLgTh">Status</th>
          </tr>
        </thead>
        <tbody>
          <WidgetLargeRow />
          <WidgetLargeRow />
          <WidgetLargeRow />
          <WidgetLargeRow />
          <WidgetLargeRow />
          <WidgetLargeRow />
          <WidgetLargeRow />
          <WidgetLargeRow />
          <WidgetLargeRow />
          <WidgetLargeRow />
        </tbody>
      </table>
    </div>
  );
}
