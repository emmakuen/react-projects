import "./priorityBubble.css";

export default function PriorityBubble({ severity }) {
  return (
    <span
      className={`priority-bubble ${severity ? severity.toLowerCase() : ""}`}
    >
      {severity}
    </span>
  );
}
