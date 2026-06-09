import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { ime, telefon, email, poruka } = await req.json();

  if (!ime || !email || !poruka) {
    return NextResponse.json({ greska: "Nedostaju obavezna polja." }, { status: 400 });
  }

  const apiKey = process.env.MAILJET_API_KEY;
  const secretKey = process.env.MAILJET_SECRET_KEY;
  const posiljalac = process.env.SITE_MAIL_SENDER;
  const primalac = process.env.SITE_MAIL_RECEIVER;

  if (!apiKey || !secretKey || !posiljalac || !primalac) {
    return NextResponse.json({ greska: "Konfiguracija servera nije ispravna." }, { status: 500 });
  }

  const credentials = Buffer.from(`${apiKey}:${secretKey}`).toString("base64");

  const body = {
    Messages: [
      {
        From: { Email: posiljalac, Name: "Montažni Krovovi — Web" },
        To: [{ Email: primalac, Name: "Radonjić Stojan" }],
        ReplyTo: { Email: email, Name: ime },
        Subject: `Novi upit sa sajta — ${ime}`,
        TextPart: `Ime: ${ime}\nTelefon: ${telefon || "nije unet"}\nEmail: ${email}\n\nPoruka:\n${poruka}`,
        HTMLPart: `
          <h2 style="color:#1a2e44">Novi upit sa sajta Montažni Krovovi</h2>
          <table style="border-collapse:collapse;width:100%;max-width:500px">
            <tr><td style="padding:8px;font-weight:bold;background:#f5f5f4">Ime</td><td style="padding:8px">${ime}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;background:#f5f5f4">Telefon</td><td style="padding:8px">${telefon || "nije unet"}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;background:#f5f5f4">Email</td><td style="padding:8px"><a href="mailto:${email}">${email}</a></td></tr>
          </table>
          <h3 style="color:#1a2e44;margin-top:20px">Poruka</h3>
          <p style="background:#f5f5f4;padding:12px;border-left:4px solid #d97706;white-space:pre-wrap">${poruka}</p>
        `,
      },
    ],
  };

  const res = await fetch("https://api.mailjet.com/v3.1/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${credentials}`,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("Mailjet greška:", err);
    return NextResponse.json({ greska: "Slanje nije uspelo. Pokušajte ponovo." }, { status: 500 });
  }

  return NextResponse.json({ uspeh: true });
}
