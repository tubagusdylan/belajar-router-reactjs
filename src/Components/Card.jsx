/* eslint-disable react/prop-types */
import "./card.css";

export function Card({ title, desc }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
