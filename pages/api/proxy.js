import { init, enc, dec } from "../../public/runnable.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { friendCode } = req.body;
  if (!friendCode) {
    return res.status(400).json({ error: "friendCode is required" });
  }

  try {
    // Init wasm
    await init();

    // Encrypt friendCode → crypt
    const crypt = enc(friendCode);

    // Kirim ke API arona
    const response = await fetch("https://api.arona.icu/api/friends/find", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "User-Agent": "Mozilla/5.0",
        "Origin": "https://arona.icu",
      },
      body: JSON.stringify({ crypt }),
    });

    // Ambil response (masih terenkripsi)
    const encrypted = await response.text();

    // Decrypt response
    const decrypted = dec(encrypted);

    // Return hasil ke client
    return res.status(200).json(JSON.parse(decrypted));
  } catch (error) {
    console.error("Proxy error:", error);
    return res
      .status(500)
      .json({ error: "Proxy failed", detail: error.toString() });
  }
}
