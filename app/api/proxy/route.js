import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { crypt } = await req.json();
    if (!crypt) {
      return NextResponse.json({ error: "crypt is required" }, { status: 400 });
    }

    // Forward langsung ke Arona
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

    return NextResponse.json({ encrypted });
  } catch (err) {
    console.error("Proxy error:", err);
    return NextResponse.json(
      { error: "Proxy failed", detail: err.toString() },
      { status: 500 }
    );
  }
}
