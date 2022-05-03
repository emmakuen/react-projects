import React from "react";
import { chairs, rowHeaders, rowUnits } from "../../data/tableData";
import "./table.css";

export default function Table() {
  const renderHeaders = () =>
    chairs.map((chair) => (
      <th key={chair.id} className="t-header cell">
        {chair.type}
      </th>
    ));

  const renderBody = () => {
    const keys = Object.keys(chairs[0]).slice(2);
    return (
      <tbody>
        {keys.map((key) => (
          <tr key={key} className="t-row">
            <th className="t-row-header cell">{rowHeaders[key]}</th>
            {chairs.map((chair) => (
              <td key={chair.id} className="cell">
                {chair[key]} {rowUnits[key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  };

  return (
    <table className="table">
      <thead className="t-header">
        <tr>
          <th className="t-header cell">Chair</th>
          {renderHeaders()}
        </tr>
      </thead>
      {renderBody()}
    </table>
  );
}
