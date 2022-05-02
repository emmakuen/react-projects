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
        {keys.map((key, index) => (
          <tr
            key={key}
            className={`t-row${index % 2 !== 0 ? " gray" : " dark-gray"}`}
          >
            <td className="t-row-header cell">{rowHeaders[key]}</td>
            {chairs.map((chair) => (
              <td key={chair.id} className="t-row cell">
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
        <th className="t-header cell">Chair</th>
        {renderHeaders()}
      </thead>
      {renderBody()}
    </table>
  );
}
