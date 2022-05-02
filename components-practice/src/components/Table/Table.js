import React from "react";
import { chairs, rowHeaders } from "../../data/tableData";

export default function Table() {
  const renderHeaders = () =>
    chairs.map((chair) => (
      <th key={chair.id} className="t-header">
        {chair.type}
      </th>
    ));

  const renderBody = () => {
    const keys = Object.keys(chairs[0]).slice(2);
    return (
      <tbody>
        {keys.map((key) => (
          <tr key={key}>
            <td>{rowHeaders[key]}</td>
            {chairs.map((chair) => (
              <td key={chair.id}>{chair[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  };

  return (
    <table>
      <thead>
        <th className="t-header">Chair</th>
        {renderHeaders()}
      </thead>
      {renderBody()}
    </table>
  );
}
