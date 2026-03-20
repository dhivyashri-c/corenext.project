from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.models.project import Project
from app.models.publishing import PublishingService
from app.models.hardware import HardwareProject
from app.models.testimonial import Testimonial

router = APIRouter()


@router.get("/")
def get_homepage_data(db: Session = Depends(get_db)):
    featured_projects = db.query(Project).filter(Project.is_featured == True).limit(6).all()
    publishing_services = db.query(PublishingService).filter(PublishingService.is_active == True).all()
    hardware_projects = db.query(HardwareProject).filter(HardwareProject.is_featured == True).limit(6).all()
    testimonials = db.query(Testimonial).filter(Testimonial.is_active == True).all()

    return {
        "hero": {
            "title": "Final Year Projects, Journal Publishing & Hardware Project Support",
            "subtitle": "Get ready-made project guidance, research paper support, and hardware implementation help for your academic success.",
            "stats": [
                {"label": "Projects Completed", "value": "500+"},
                {"label": "Papers Supported", "value": "200+"},
                {"label": "Hardware Kits", "value": "100+"},
                {"label": "Years Experience", "value": "5+"},
            ]
        },
        "services": [
            {
                "id": 1,
                "title": "Final Year Projects",
                "description": "Complete project guidance with source code, documentation, PPT, and implementation support.",
                "icon": "GraduationCap",
                "tags": ["AI/ML", "Web Dev", "Cloud", "Python", "IoT", "Java"]
            },
            {
                "id": 2,
                "title": "Journal / Conference Publishing",
                "description": "End-to-end research paper support from abstract writing to final journal submission.",
                "icon": "BookOpen",
                "tags": ["IEEE Format", "Scopus", "UGC", "Plagiarism Check", "Conference"]
            },
            {
                "id": 3,
                "title": "Hardware Projects",
                "description": "Physical hardware project implementation with components, circuit design, and coding.",
                "icon": "Cpu",
                "tags": ["Arduino", "Raspberry Pi", "IoT", "Robotics", "Embedded"]
            }
        ],
        "featured_projects": [
            {
                "id": p.id,
                "title": p.title,
                "category": p.category,
                "tech_stack": p.tech_stack,
                "short_description": p.short_description,
                "is_featured": p.is_featured,
                "image_url": p.image_url
            } for p in featured_projects
        ],
        "publishing_services": [
            {
                "id": s.id,
                "service_name": s.service_name,
                "description": s.description,
                "icon": s.icon,
                "is_active": s.is_active
            } for s in publishing_services
        ],
        "hardware_projects": [
            {
                "id": h.id,
                "title": h.title,
                "category": h.category,
                "components": h.components,
                "short_description": h.short_description,
                "is_featured": h.is_featured,
                "image_url": h.image_url
            } for h in hardware_projects
        ],
        "testimonials": [
            {
                "id": t.id,
                "student_name": t.student_name,
                "college_name": t.college_name,
                "review": t.review,
                "rating": t.rating,
                "avatar_url": t.avatar_url
            } for t in testimonials
        ],
        "contact": {
            "phone": "+91 98765 43210",
            "email": "info@fypservices.com",
            "whatsapp": "+919876543210",
            "address": "Available Online - Pan India"
        }
    }
