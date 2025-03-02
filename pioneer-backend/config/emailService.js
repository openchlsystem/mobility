const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

// ✅ Create a transporter for sending emails
const transporter = nodemailer.createTransport({
    service: "gmail", // Use your email service provider (Gmail, Outlook, etc.)
    auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password or app password
    },
});

// ✅ Function to send a ride confirmation email
const sendRideConfirmationEmail = async (userEmail, rideDetails) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: userEmail,
            subject: "Ride Booking Confirmation - Pioneer Mobility",
            html: `
                <h2>Your Ride is Confirmed! 🚗</h2>
                <p>Dear ${rideDetails.contactName},</p>
                <p>Your ride has been successfully scheduled.</p>
                <h3>Ride Details:</h3>
                <ul>
                    <li><strong>Pickup Location:</strong> ${rideDetails.pickupLocation}</li>
                    <li><strong>Drop-off Location:</strong> ${rideDetails.dropoffLocation}</li>
                    <li><strong>Date & Time:</strong> ${rideDetails.dateTime}</li>
                    <li><strong>Service Type:</strong> ${rideDetails.serviceType}</li>
                    <li><strong>Payment Method:</strong> ${rideDetails.paymentMethod}</li>
                </ul>
                <p>Thank you for choosing Pioneer Mobility Services! 🚀</p>
                <p>For any inquiries, contact us at <a href="mailto:support@pioneermobility.com">support@pioneermobility.com</a></p>
            `,
        };

        await transporter.sendMail(mailOptions);
        console.log(`📧 Confirmation email sent to ${userEmail}`);
    } catch (error) {
        console.error("❌ Error sending email:", error);
    }
};

module.exports = sendRideConfirmationEmail;
