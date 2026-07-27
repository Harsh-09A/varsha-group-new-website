"use server";

import nodemailer from "nodemailer";

/**
 * Env vars required (add these to .env.local):
 *
 * SMTP_HOST=smtp.yourprovider.com
 * SMTP_PORT=587
 * SMTP_SECURE=false          // true if using port 465
 * SMTP_USER=your@email.com
 * SMTP_PASS=your-smtp-password-or-app-password
 * CONTACT_TO_EMAIL=partnerships@varshagroup.com   // where enquiries land
 */

export async function sendChannelPartnerForm(prevState, formData) {
  const organisation = (formData.get("organisation") || "").toString().trim();
  const email = (formData.get("email") || "").toString().trim();
  const phone = (formData.get("phone") || "").toString().trim();
  const orgType = (formData.get("orgType") || "").toString().trim();
  const message = (formData.get("message") || "").toString().trim();

  // Basic server-side validation
  if (!organisation || !email || !phone || !orgType) {
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
      subject: `New Channel Partner Enquiry — ${organisation}`,
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 14px; color: #333;">
          <h2 style="color:#ff481f;">New Channel Partner Enquiry</h2>
          <table cellpadding="6" style="border-collapse: collapse;">
            <tr><td><strong>Organisation</strong></td><td>${escapeHtml(organisation)}</td></tr>
            <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
            <tr><td><strong>Phone</strong></td><td>${escapeHtml(phone)}</td></tr>
            <tr><td><strong>Organisation Type</strong></td><td>${escapeHtml(orgType)}</td></tr>
            <tr><td valign="top"><strong>Message</strong></td><td>${escapeHtml(message) || "-"}</td></tr>
          </table>
        </div>
      `,
    });

    return {
      success: true,
      message:
        "Thank you! Your enquiry has been sent. Our team will reach out to you shortly.",
    };
  } catch (error) {
    console.error("Channel partner form email error:", error);
    return {
      success: false,
      message:
        "Something went wrong while sending your message. Please try again later.",
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
