import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(to, subject, text, html) {
    try {
        const result = await resend.emails.send({
            from: "Authentication System <onboarding@resend.dev>",
            to,
            subject,
            text,
            html
        });

        console.log("Email sent:", result);
        return result;
    } catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
}