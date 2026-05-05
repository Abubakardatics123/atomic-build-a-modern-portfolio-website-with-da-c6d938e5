import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // In production, integrate with Resend or Nodemailer here.
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'portfolio@yourdomain.com',
    //   to: 'alex@example.com',
    //   subject: subject || `New contact from ${name}`,
    //   html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
    // });

    console.log("Contact form submission:", { name, email, subject, message });

    return NextResponse.json(
      { success: true, message: "Message received successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
