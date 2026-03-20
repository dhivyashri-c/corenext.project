import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from app.core.config import settings
import logging

logger = logging.getLogger(__name__)


def send_inquiry_notification(inquiry_data: dict) -> bool:
    """Send email notification to admin when a new inquiry is submitted."""
    if not settings.MAIL_USERNAME or not settings.ADMIN_EMAIL:
        logger.info("Email not configured, skipping notification")
        return False

    try:
        msg = MIMEMultipart("alternative")
        msg["Subject"] = f"New Inquiry: {inquiry_data['service_type']} - {inquiry_data['name']}"
        msg["From"] = f"{settings.MAIL_FROM_NAME} <{settings.MAIL_FROM}>"
        msg["To"] = settings.ADMIN_EMAIL

        html = f"""
        <html>
        <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 8px 8px 0 0;">
                <h1 style="color: white; margin: 0;">New Inquiry Received</h1>
            </div>
            <div style="background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px;">
                <table style="width: 100%; border-collapse: collapse;">
                    <tr><td style="padding: 8px; font-weight: bold; color: #555;">Name:</td><td style="padding: 8px;">{inquiry_data['name']}</td></tr>
                    <tr style="background: #fff;"><td style="padding: 8px; font-weight: bold; color: #555;">Email:</td><td style="padding: 8px;">{inquiry_data['email']}</td></tr>
                    <tr><td style="padding: 8px; font-weight: bold; color: #555;">Phone:</td><td style="padding: 8px;">{inquiry_data['phone']}</td></tr>
                    <tr style="background: #fff;"><td style="padding: 8px; font-weight: bold; color: #555;">College:</td><td style="padding: 8px;">{inquiry_data['college_name']}</td></tr>
                    <tr><td style="padding: 8px; font-weight: bold; color: #555;">Department:</td><td style="padding: 8px;">{inquiry_data['department']}</td></tr>
                    <tr style="background: #fff;"><td style="padding: 8px; font-weight: bold; color: #555;">Service:</td><td style="padding: 8px;"><strong>{inquiry_data['service_type']}</strong></td></tr>
                    <tr><td style="padding: 8px; font-weight: bold; color: #555;">Topic:</td><td style="padding: 8px;">{inquiry_data['topic']}</td></tr>
                    <tr style="background: #fff;"><td style="padding: 8px; font-weight: bold; color: #555;">Message:</td><td style="padding: 8px;">{inquiry_data['message']}</td></tr>
                </table>
            </div>
        </body>
        </html>
        """

        msg.attach(MIMEText(html, "html"))

        with smtplib.SMTP(settings.MAIL_SERVER, settings.MAIL_PORT) as server:
            server.starttls()
            server.login(settings.MAIL_USERNAME, settings.MAIL_PASSWORD)
            server.sendmail(settings.MAIL_FROM, settings.ADMIN_EMAIL, msg.as_string())

        logger.info(f"Inquiry notification sent for {inquiry_data['name']}")
        return True

    except Exception as e:
        logger.error(f"Failed to send email notification: {e}")
        return False
