# Problem Statement
Citizens face delays and confusion while reporting grievances due to manual handling, lack of prioritization, and improper routing to authorities. There is a need for an intelligent system that can automatically analyze complaints, determine urgency, and route them efficiently.

# Project Name
Smart Grievance Management Platform

# Collaborators
- Soumya Ghosh
- Aishani Banerjee

# Deployed Link (Optional)
Backend deployed on Render (Free Tier – may sleep when inactive)


# Deployed server link
https://smart-grievance-management-platform.onrender.com

---

## 📌 Project Overview
The **AI Grievance Redressal System** is a smart web-based platform that allows citizens to submit grievances in natural language.  
Using rule-based NLP and intelligent prioritization logic, the system:

- Analyzes complaint text
- Classifies the issue type
- Assigns priority based on urgency & severity
- Routes complaints to the appropriate authority
- Displays an ordered admin dashboard for faster decision-making

This system simulates how real-world e-governance platforms can automate grievance handling efficiently.

---

## ⚙️ Tech Stack
- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js, Express.js  
- **AI / Logic:** Rule-based NLP + Severity Scoring  
- **Deployment:** Render (Backend)  

---

## 🚀 Features
- Natural language complaint submission
- AI-based complaint classification
- Priority detection (High / Medium / Low)
- Severity-based ranking within same priority
- Real-time Admin Dashboard
- Offline handling with retry
- Voice-to-text input (browser supported)

---

## 🛠️ Setup & Installation

### Backend
```bash
cd backend
npm install
npm start

Backend runs on:

http://localhost:3000