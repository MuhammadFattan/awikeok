import { useState } from "react";
import AssistList from "../component/AssistList";

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    const code = document.getElementById("friendcode").value;
    setLoading(true);
    try {
      const res = await fetch("https://api.arona.icu/api/friends/find", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ friendCode: code }),
      });
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Cari Assist Murid</h1>
      <input
        id="friendcode"
        placeholder="Masukkan Friend Code"
        style={{ padding: "0.5rem", fontSize: "1rem" }}
      />
      <button
        onClick={fetchData}
        style={{ marginLeft: "1rem", padding: "0.5rem 1rem" }}
      >
        Cari
      </button>

      {loading && <p>Sedang memuat...</p>}
      {data && <AssistList data={data} />}
    </main>
  );
}
