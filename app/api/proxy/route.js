import { NextResponse } from "next/server";
import { init, enc, dec } from "../../../src/runnable.js";

export async function POST(req) {
  try {
    const { friendCode } = await req.json();
    if (!friendCode) {
      return NextResponse.json({ error: "friendCode is required" }, { status: 400 });
    }

    await init();
    const crypt = enc(friendCode);

    const response = await fetch("https://api.arona.icu/api/friends/find", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "User-Agent": "Mozilla/5.0",
        "Origin": "https://arona.icu",
      },
      body: JSON.stringify({ crypt }),
    });

    const encrypted = await response.text();
    const decrypted = dec(encrypted);

    return NextResponse.json(JSON.parse(decrypted));
  } catch (err) {
    console.error("Proxy error:", err);
    return NextResponse.json({ error: "Proxy failed", detail: err.toString() }, { status: 500 });
  }
}
