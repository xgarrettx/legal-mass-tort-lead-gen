import type { NextApiRequest, NextApiResponse } from "next";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyjUdbIBpq2LCSrMwXUBO9K8opgk_-0VQ1Poptiyd7veCJugbXhWsr92YfaN2SXLecE/exec";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Forward request to Google Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    if (!response.ok) {
      const text = await response.text();
      return res
        .status(response.status)
        .json({ error: "Google Script error", details: text });
    }

    const data = await response.json();

    // Set CORS headers so other origins could call your API if needed
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (err: any) {
    console.error("Proxy error:", err);
    res.status(500).json({ error: "Failed to submit lead", details: err.message });
  }
}
