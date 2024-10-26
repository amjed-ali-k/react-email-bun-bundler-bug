import { Resend } from "resend";
import * as React from "react";
// import { render } from "@react-email/render";
import Email from "./emails/my-email";

const resend = new Resend(Bun.env.EMAIL_API_KEY!);

const SUPPORT_EMAIL = "support@care24.ca";
const FROM_EMAIL = "Care24 <noreply@updates.codebolt.in>";

export async function sendTestEmail(): Promise<any> {
  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: "amjedmgm@gmail.com",
      subject: "Email for testing",
      react: <Email />,
    });
    console.log("Email sent successfully");
  } catch (error) {
    console.error(error);
  }
  return true;
}

sendTestEmail()