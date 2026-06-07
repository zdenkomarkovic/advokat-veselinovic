import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Neispravan zahtev." }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Podaci nisu ispravni.", fields: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const { name, email, phone, message } = parsed.data;

  const apiKey = process.env.MAILJET_API_KEY;
  const secretKey = process.env.MAILJET_SECRET_KEY;
  const sender = process.env.SITE_MAIL_SENDER;
  const receiver = process.env.SITE_MAIL_RECEIVER;

  if (!apiKey || !secretKey || !sender || !receiver) {
    console.error("Mailjet env varijable nisu podešene.");
    return NextResponse.json({ error: "Serverska greška." }, { status: 500 });
  }

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #1a2744; padding: 24px 32px;">
        <h2 style="color: #c9a84c; margin: 0; font-size: 20px;">Nova poruka sa sajta</h2>
        <p style="color: #ffffff99; margin: 4px 0 0; font-size: 13px;">Advokatska kancelarija Veselinović</p>
      </div>
      <div style="padding: 32px; background: #f8f5ef; border: 1px solid #ede9e0;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #666; font-size: 13px; width: 120px; vertical-align: top;">Ime i prezime:</td>
            <td style="padding: 8px 0; color: #1a1a2e; font-size: 14px; font-weight: bold;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666; font-size: 13px; vertical-align: top;">E-mail:</td>
            <td style="padding: 8px 0; color: #1a1a2e; font-size: 14px;"><a href="mailto:${email}" style="color: #1a2744;">${email}</a></td>
          </tr>
          ${
            phone
              ? `<tr>
            <td style="padding: 8px 0; color: #666; font-size: 13px; vertical-align: top;">Telefon:</td>
            <td style="padding: 8px 0; color: #1a1a2e; font-size: 14px;">${phone}</td>
          </tr>`
              : ""
          }
        </table>
        <hr style="border: none; border-top: 1px solid #ede9e0; margin: 20px 0;" />
        <p style="color: #666; font-size: 13px; margin: 0 0 8px;">Poruka:</p>
        <p style="color: #1a1a2e; font-size: 14px; line-height: 1.7; white-space: pre-wrap; margin: 0;">${message}</p>
      </div>
      <div style="padding: 16px 32px; background: #1a2744;">
        <p style="color: #ffffff55; font-size: 12px; margin: 0;">Poruka primljena sa sajta advokatveselinovic.rs</p>
      </div>
    </div>
  `;

  const textBody = `Nova poruka sa sajta\n\nIme: ${name}\nE-mail: ${email}${phone ? `\nTelefon: ${phone}` : ""}\n\nPoruka:\n${message}`;

  try {
    const res = await fetch("https://api.mailjet.com/v3.1/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic " + Buffer.from(`${apiKey}:${secretKey}`).toString("base64"),
      },
      body: JSON.stringify({
        Messages: [
          {
            From: {
              Email: sender.trim(),
              Name: "Advokatska kancelarija Veselinović",
            },
            To: [{ Email: receiver.trim(), Name: "Advokat Veselinović" }],
            ReplyTo: { Email: email, Name: name },
            Subject: `Nova poruka sa sajta — ${name}`,
            TextPart: textBody,
            HTMLPart: htmlBody,
          },
        ],
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Mailjet greška:", err);
      return NextResponse.json({ error: "Slanje poruke nije uspelo." }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Mailjet fetch greška:", err);
    return NextResponse.json({ error: "Serverska greška." }, { status: 500 });
  }
}
