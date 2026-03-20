# FYP Services — Full Stack Website

**Final Year Projects, Journal Publishing & Hardware Project Support**

---

## Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | Next.js 14, TypeScript, Tailwind CSS, Framer Motion |
| Backend | FastAPI, SQLAlchemy, PostgreSQL |
| Auth | JWT (python-jose) |
| DB Migrations | Alembic |

---

## Quick Start

### 1. Backend Setup

```bash
cd backend

# Copy and configure env
cp .env.example .env
# Edit .env with your PostgreSQL credentials

# Create virtual environment
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run server (auto-creates tables + seeds data)
uvicorn app.main:app --reload --port 8000
```

Backend runs at: http://localhost:8000
API docs at: http://localhost:8000/docs

**Default admin:** username: `admin`, password: `Admin@123`

---

### 2. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Run dev server
npm run dev
```

Frontend runs at: http://localhost:3000

---

## PostgreSQL Setup (if not installed)

```sql
-- In psql:
CREATE DATABASE fypservices;
CREATE USER postgres WITH PASSWORD 'password';
GRANT ALL PRIVILEGES ON DATABASE fypservices TO postgres;
```

Update `DATABASE_URL` in `backend/.env` accordingly.

---

## Project Structure

```
webpage/
├── frontend/          # Next.js 14 app
│   ├── app/           # App router (layout, page, globals.css)
│   ├── components/    # All UI components
│   ├── lib/           # API client, utilities
│   └── types/         # TypeScript interfaces
│
└── backend/           # FastAPI app
    └── app/
        ├── api/       # Route handlers
        ├── core/      # Config, DB, security
        ├── models/    # SQLAlchemy models
        ├── schemas/   # Pydantic schemas
        └── services/  # Business logic
```

---

## Website Sections

1. Navbar (sticky, smooth scroll, active highlight)
2. Hero Section (animated, gradient background)
3. Services Overview (3 glassmorphism cards with modals)
4. Featured Projects (searchable, filterable cards)
5. Journal/Research Publishing (timeline + FAQ accordion)
6. Hardware Projects (horizontal scrollable carousel)
7. Why Choose Us (animated counters + feature cards)
8. Testimonials (auto-playing carousel)
9. Contact Form (React Hook Form + Zod validation)
10. Footer (4-column layout)
11. WhatsApp Floating Button

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/homepage | Full homepage data |
| GET | /api/projects/featured | Top 6 featured projects |
| GET | /api/publishing-services | All publishing services |
| GET | /api/hardware/featured | Top 6 hardware projects |
| POST | /api/inquiries | Submit inquiry form |
| POST | /api/admin/login | Admin JWT login |
| GET | /api/admin/inquiries | View all inquiries (auth) |
