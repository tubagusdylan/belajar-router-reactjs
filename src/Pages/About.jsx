import { Link } from "react-router-dom";
import { Title } from "../Components/Title";
import "./title.css";
import { Outlet } from "react-router-dom";

export function About() {
  return (
    <div className="judul">
      <Title>Ini Halaman About</Title>
      <Link to="/about/detail">Selengkapnya_cara_1</Link>
      <Outlet />
      <br />
      <Link to="/about/detail_2">Selengkapnya_cara_2</Link>
    </div>
  );
}
