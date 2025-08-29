import { useState } from "react";
import { init, enc, dec } from "../src/runnable.js";

export default function Home() {
  const [output, setOutput] = useState("");

  const fetchAndDecrypt = async () => {
    const code = document.getElementById("friendcode").value;

    try {
      // init wasm di client
      await init();

      // encrypt di client
      const crypt = enc(code);

      // kirim crypt ke proxy
      const res = await fetch("/api/proxy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ crypt }),
      });

      const data = await res.json();
      if (!data.encrypted) {
        setOutput("❌ Tidak ada data terenkripsi dari server.");
        return;
      }

      // decrypt di client
      const decrypted = dec(data.encrypted);

      try {
        const json = JSON.parse(decrypted);
        setOutput(JSON.stringify(json, null, 2));
      } catch {
        setOutput(decrypted);
      }
    } catch (err) {
      setOutput(`❌ Error: ${err}`);
    }
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
        onClick={fetchAndDecrypt}
        style={{ marginLeft: "1rem", padding: "0.5rem 1rem" }}
      >
        Cari
      </button>
      <pre
        style={{
          marginTop: "2rem",
          background: "#f0f0f0",
          padding: "1rem",
          whiteSpace: "pre-wrap",
        }}
      >
        {output}
      </pre>
    </main>
  );
}
