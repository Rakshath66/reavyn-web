import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  try {
    const { name, email, service, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Name, email, and message are required." }), {
        status: 400,
      });
    }

    const msg = {
      to: process.env.RECEIVER_EMAIL,
      from: process.env.SENDGRID_SENDER_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service Interest:</strong> ${service || "Not specified"}</p>
        <p><strong>Message:</strong><br/> ${message}</p>
      `,
    };

    await sendgrid.send(msg);

    return new Response(JSON.stringify({ message: "Email sent successfully" }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
  }
}
