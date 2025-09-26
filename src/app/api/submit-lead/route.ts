// src/app/api/submit-lead/route.ts
export async function POST(req: Request) {
  const body = await req.json();

  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyjUdbIBpq2LCSrMwXUBO9K8opgk_-0VQ1Poptiyd7veCJugbXhWsr92YfaN2SXLecE/exec";

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: "Google Script error", status: response.status }),
        { status: response.status }
      );
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    console.error("Proxy error:", err);
    return new Response(
      JSON.stringify({ error: "Failed to submit lead", details: err.message }),
      { status: 500 }
    );
  }
}
