"use server";

import nodemailer from "nodemailer";

class Email {
  transporter: any;
  APP_PASSWORD: string;
  APP_EMAIL: string;

  constructor() {
    this.APP_EMAIL = process.env.STORE_CONTACT_EMAIL as string;
    this.APP_PASSWORD = process.env.STORE_CONTACT_PASSWORD as string;

    this.transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: process.env.NODE_ENV === "production",
      auth: {
        user: this.APP_EMAIL,
        pass: this.APP_PASSWORD,
      },
    });
  }
}

const submit = async ({
  data,
}: {
  data: {
    name: string;
    email: string;
    message: string;
    subject: string;
  };
}) => {
  const { email, subject, message, name } = data;
  try {
    const instance = new Email();
    const htmlContent = `
  <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
    <h2 style="color: #1a73e8;">New Contact Us Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p style="padding: 10px 15px; background: #f4f4f4; border-radius: 5px;">${message}</p>
    <hr />
    <p style="font-size: 0.85rem; color: #555;">This email was sent from your Shopify store contact form.</p>
  </div>
`;

    await instance.transporter.sendMail({
      from: instance.APP_EMAIL,
      to: process.env.RECIPIENT_EMAIL,
      subject: "Contact Us Form Submission",
      html: htmlContent,
    });
    console.log(" Email sent successfully");
    return { success: true };
  } catch (err) {
    console.error(" Error while sending mail", err);
    return { success: false };
  }
};

export { submit };
