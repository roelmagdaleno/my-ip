export async function onRequest({ request }) {
    // Cloudflare adds the CF-Connecting-IP header to the request.
    const ip = request.headers.get("CF-Connecting-IP") || "Unknown IP";

    // Return the IP as JSON.
    return new Response(JSON.stringify({ ip }), {
        headers: { "Content-Type": "application/json" },
    });
}
