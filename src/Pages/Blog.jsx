import { Title } from "../Components/Title";
import { Card } from "../Components/card";
import "./blog.css";

export function Blog() {
  return (
    <>
      <Title>Ini Halaman Blog</Title>
      <div className="card-container">
        <Card title="Blog-1" desc="deskripsi 1" />
        <Card title="Blog-2" desc="deskripsi 2" />
        <Card title="Blog-3" desc="deskripsi 3" />
        <Card title="Blog-4" desc="deskripsi 4" />
        <Card title="Blog-5" desc="deskripsi 5" />
        <Card title="Blog-6" desc="deskripsi 6" />
      </div>
    </>
  );
}
