import nodemailer from 'nodemailer';
import config from '../config/config.js';
import { Resend } from "resend";

const transporter = nodemailer.createTransport({
    host: "142.250.4.109",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        type: "OAuth2",
        user: config.GOOGLE_USER,
        clientId: config.GOOGLE_CLIENT_ID,
        clientSecret: config.GOOGLE_CLIENT_SECRET,
        refreshToken: config.GOOGLE_REFRESH_TOKEN
    },
    tls: {
        servername: "smtp.gmail.com"
    }
});



// Verify the connection configuration
transporter.verify((error, success) => {
    if (error) {
        console.error('Error connecting to email server:', error);
    } else {
        console.log('Email server is ready to send messages');
    }
});



const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(to, subject, text, html) {
    return await resend.emails.send({
        from: "onboarding@resend.dev",
        to,
        subject,
        text,
        html
    });
};