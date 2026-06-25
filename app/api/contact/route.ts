import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const RESEND_KEY = process.env.RESEND_API_KEY;
    const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "s.m.sunny97@gmail.com";

    if (!RESEND_KEY) {
      // Dev mode: just log and return success so the form still works locally
      console.log("📬 Contact form submission (no RESEND_API_KEY set):", { name, email, message });
      return NextResponse.json({ ok: true, dev: true });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_KEY}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: [TO_EMAIL],
        reply_to: email,
        subject: `Portfolio contact from ${name}`,
        html: `
          <div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#060914;color:#EEF0FF;border-radius:12px;border:1px solid rgba(99,130,255,0.2)">
            <h2 style="color:#6382FF;margin:0 0 16px">New Portfolio Message</h2>
            <p><strong style="color:#A78BFA">From:</strong> ${name} (${email})</p>
            <hr style="border-color:rgba(255,255,255,0.1);margin:16px 0"/>
            <p style="white-space:pre-wrap;color:#9AA3C2;line-height:1.7">${message}</p>
            <hr style="border-color:rgba(255,255,255,0.1);margin:16px 0"/>
            <p style="font-size:12px;color:#3D4B6B">Sent from your portfolio contact form at portfolio-mainul.vercel.app</p>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return NextResponse.json({ error: "Email send failed" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
