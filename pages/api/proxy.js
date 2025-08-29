export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: "Method not allowed "});
    }

    try {
        const { crypt } = req.body ;
        if (!crypt) {
            return res.status(400).json({ error: "Crypt is required" });
        }

        const response = await fetch("https://api/arona.icu/api/friends/find", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=UTF-8",
                "User-Agent": "https://arona.icu",
                "Origin": "https://api.arona/icu",
            },
            body: JSON.stringify({ crypt }),
        });

        const encrypted = await response.text();

        return res.status(200).json({ encrypted });
    } catch (err) {
        console.error("Proxy error: ", err);
        return res.status(500).json(
            { error: "Proxy failed", detail: err.toString() }
        );
    }
}