"use server";

import nodemailer from "nodemailer";

/**
 * Uses the same SMTP env vars as the channel partner form
 * (add these to .env.local if not already added):
 *
 * SMTP_HOST=smtp.hostinger.com
 * SMTP_PORT=465
 * SMTP_SECURE=true
 * SMTP_USER=your@yourdomain.com
 * SMTP_PASS=your-mailbox-password
 * CONTACT_TO_EMAIL=info@varshagroup.com
 */

export async function sendContactForm(prevState, formData) {
  const name = (formData.get("name") || "").toString().trim();
  const email = (formData.get("email") || "").toString().trim();
  const phone = (formData.get("phone") || "").toString().trim();
  const subject = (formData.get("subject") || "").toString().trim();
  const message = (formData.get("message") || "").toString().trim();

  // Basic server-side validation
  if (!name || !email || !phone || !subject) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Varsha Group Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `New Contact Enquiry — ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 14px; color: #333;">
          <h2 style="color:#ff481f;">New Contact Form Submission</h2>
          <table cellpadding="6" style="border-collapse: collapse;">
            <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
            <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
            <tr><td><strong>Phone</strong></td><td>${escapeHtml(phone) || "-"}</td></tr>
            <tr><td><strong>Subject</strong></td><td>${escapeHtml(subject)}</td></tr>
            <tr><td valign="top"><strong>Message</strong></td><td>${escapeHtml(message) || "-"}</td></tr>
          </table>
        </div>
      `,
    });

    return {
      success: true,
      message: "Thank you! Your message has been sent. We'll get back to you soon.",
    };
  } catch (error) {
    console.error("Contact form email error:", error);
    return {
      success: false,
      message: "Something went wrong while sending your message. Please try again later.",
    };
  }
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
