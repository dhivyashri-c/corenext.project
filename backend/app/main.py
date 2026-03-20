from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
import logging

from app.core.database import engine, SessionLocal, Base
from app.core.config import settings
from app.core.security import get_password_hash
from app.api import projects, publishing, hardware, inquiries, admin, homepage

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(
    title="FYP Services API",
    description="API for Final Year Projects & Research Publishing Services",
    version="1.0.0",
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routers
app.include_router(homepage.router, prefix="/api/homepage", tags=["Homepage"])
app.include_router(projects.router, prefix="/api/projects", tags=["Projects"])
app.include_router(publishing.router, prefix="/api/publishing-services", tags=["Publishing"])
app.include_router(hardware.router, prefix="/api/hardware", tags=["Hardware"])
app.include_router(inquiries.router, prefix="/api/inquiries", tags=["Inquiries"])
app.include_router(admin.router, prefix="/api/admin", tags=["Admin"])


def seed_data(db: Session):
    from app.models.project import Project
    from app.models.publishing import PublishingService
    from app.models.hardware import HardwareProject
    from app.models.testimonial import Testimonial
    from app.models.admin import AdminUser

    # Seed projects
    if db.query(Project).count() == 0:
        projects_data = [
            Project(title="AI Resume Analyzer", category="AI/ML", tech_stack=["Python", "TensorFlow", "Flask", "React"], short_description="Analyzes resumes using NLP and provides ATS score with improvement suggestions.", is_featured=True),
            Project(title="Deep Learning Image Classifier", category="AI/ML", tech_stack=["Python", "PyTorch", "CNN", "Streamlit"], short_description="Multi-class image classification system with 95%+ accuracy using custom CNN.", is_featured=True),
            Project(title="AWS Cloud Deployment Pipeline", category="Cloud Computing", tech_stack=["AWS", "Docker", "Jenkins", "Terraform"], short_description="Automated CI/CD pipeline for cloud application deployment on AWS ECS.", is_featured=True),
            Project(title="Full Stack E-commerce Platform", category="Web Development", tech_stack=["React", "Node.js", "MongoDB", "Stripe"], short_description="Complete online shopping platform with payment gateway and admin dashboard.", is_featured=True),
            Project(title="Smart Home IoT System", category="IoT", tech_stack=["Arduino", "MQTT", "Node-RED", "Python"], short_description="Home automation system with voice control, scheduling, and mobile app.", is_featured=True),
            Project(title="Sentiment Analysis Dashboard", category="Data Science", tech_stack=["Python", "VADER", "Pandas", "Plotly"], short_description="Real-time social media sentiment analysis with interactive visualizations.", is_featured=True),
            Project(title="Hospital Management System", category="Java", tech_stack=["Java", "Spring Boot", "MySQL", "Hibernate"], short_description="Complete hospital management with patient records, billing, and appointments.", is_featured=False),
            Project(title="Network Intrusion Detection System", category="Cyber Security", tech_stack=["Python", "Scikit-learn", "Wireshark", "Snort"], short_description="ML-based IDS that detects network anomalies with 99% accuracy.", is_featured=False),
        ]
        db.add_all(projects_data)
        logger.info("Seeded projects")

    # Seed publishing services
    if db.query(PublishingService).count() == 0:
        services = [
            PublishingService(service_name="Abstract Writing", description="Professional abstract drafting aligned with journal scope and keywords.", icon="FileText"),
            PublishingService(service_name="Full Paper Drafting", description="Complete research paper writing including literature review, methodology, and results.", icon="BookOpen"),
            PublishingService(service_name="IEEE/Elsevier Formatting", description="Precise formatting as per IEEE, Elsevier, Springer, or Wiley templates.", icon="Layout"),
            PublishingService(service_name="Plagiarism Reduction", description="Paraphrasing and rewriting to bring similarity below 10% with Turnitin report.", icon="Shield"),
            PublishingService(service_name="Journal Selection Guidance", description="Identify best-fit journals for your research (Scopus, UGC, SCI, Web of Science).", icon="Search"),
            PublishingService(service_name="Conference Submission", description="End-to-end conference paper preparation and submission assistance.", icon="Send"),
            PublishingService(service_name="Reviewer Correction Support", description="Respond to reviewer comments and revise paper for acceptance.", icon="CheckCircle"),
        ]
        db.add_all(services)
        logger.info("Seeded publishing services")

    # Seed hardware projects
    if db.query(HardwareProject).count() == 0:
        hardware = [
            HardwareProject(title="Smart Irrigation System", category="Arduino", components=["Arduino Uno", "Soil Moisture Sensor", "Relay Module", "Water Pump", "LCD Display"], short_description="Automated plant watering system based on soil moisture with mobile alerts.", is_featured=True),
            HardwareProject(title="Home Automation System", category="Raspberry Pi", components=["Raspberry Pi 4", "Relay Board", "PIR Sensor", "DHT22", "Android App"], short_description="Control lights, fans, and appliances via voice or smartphone app.", is_featured=True),
            HardwareProject(title="Health Monitor Wearable", category="IoT", components=["ESP32", "MAX30102 Pulse Oximeter", "MPU6050", "OLED Display", "Li-Po Battery"], short_description="Wearable device tracking heart rate, SpO2, and activity levels in real-time.", is_featured=True),
            HardwareProject(title="Line Following Robot", category="Robotics", components=["Arduino Mega", "IR Sensors", "L298N Motor Driver", "DC Motors", "Chassis"], short_description="Autonomous robot that follows a line path using IR sensor array.", is_featured=True),
            HardwareProject(title="Smart Energy Meter", category="Automation", components=["Arduino", "ACS712 Current Sensor", "ZMPT101B Voltage Sensor", "ESP8266", "LCD"], short_description="IoT-enabled electricity meter with real-time consumption monitoring dashboard.", is_featured=True),
            HardwareProject(title="Temperature Alert System", category="Sensor Based", components=["Arduino", "DS18B20 Temperature Sensor", "GSM Module", "Buzzer", "LED"], short_description="Industrial temperature monitoring with SMS alerts when threshold is exceeded.", is_featured=True),
        ]
        db.add_all(hardware)
        logger.info("Seeded hardware projects")

    # Seed testimonials
    if db.query(Testimonial).count() == 0:
        testimonials = [
            Testimonial(student_name="Priya Sharma", college_name="Anna University, Chennai", review="Got my AI project done with complete source code, report, and PPT. The team was very professional and delivered on time. Highly recommend!", rating=5.0),
            Testimonial(student_name="Rahul Verma", college_name="VIT University, Vellore", review="My IEEE paper got accepted in a Scopus journal with their help. The plagiarism was reduced to 8% and the formatting was perfect. Amazing service!", rating=5.0),
            Testimonial(student_name="Divya Krishnan", college_name="Sri Ramachandra Institute, Chennai", review="The IoT hardware project was delivered with full circuit diagram and working demo. My professor was impressed with the quality. Worth every penny!", rating=4.5),
            Testimonial(student_name="Arun Kumar", college_name="PSG College of Technology, Coimbatore", review="They helped me with my final year cloud computing project. Complete documentation, presentation, and live demo support. Excellent work!", rating=5.0),
            Testimonial(student_name="Meera Nair", college_name="College of Engineering, Trivandrum", review="Got my conference paper published with zero plagiarism and perfect IEEE formatting. The review response support was also very helpful. Thank you!", rating=4.5),
        ]
        db.add_all(testimonials)
        logger.info("Seeded testimonials")

    # Seed admin user
    if db.query(AdminUser).count() == 0:
        admin_user = AdminUser(
            username="admin",
            email="admin@fypservices.com",
            hashed_password=get_password_hash("Admin@123"),
            is_active=True
        )
        db.add(admin_user)
        logger.info("Seeded admin user (username: admin, password: Admin@123)")

    db.commit()


@app.on_event("startup")
def startup_event():
    # Create tables
    Base.metadata.create_all(bind=engine)
    logger.info("Database tables created")

    # Seed data
    db = SessionLocal()
    try:
        seed_data(db)
    finally:
        db.close()


@app.get("/")
def root():
    return {
        "message": "FYP Services API is running",
        "docs": "/docs",
        "version": "1.0.0"
    }


@app.get("/health")
def health_check():
    return {"status": "healthy"}
