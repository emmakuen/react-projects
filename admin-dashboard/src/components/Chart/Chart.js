import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./chart.css";
import { data } from "./data";

export default function Chart() {
  return (
    <section className="chart">
      <h3 className="chartTitle">Ticket Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="month" stroke="var(--gray-secondary)" />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="var(--gray-ghost)" strokeDasharray="3 3" />
          <Line
            type="monotone"
            dataKey="tickets"
            stroke="var(--red)"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="resolved" stroke="var(--primary)" />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}
