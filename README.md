# Event Echo - Event Feedback & Sentiment Analysis Platform

A comprehensive web application for analyzing event feedback with sentiment analysis support for both English and Tanglish (Tamil-English mix) text. Features real-time analysis, PDF report generation, and interactive dashboards for organizing clubs of the Computer Science and Engineering Departement in Thiagarajar College of Engineering, Madurai

---

## Project Overview

**Event Echo** is designed to help clubs and event organizers collect, analyze, and visualize feedback from their events. The platform combines:

- **Frontend**: React-based interactive dashboard with real-time feedback analysis
- **Backend**: FastAPI-powered sentiment analysis engine with MongoDB data persistence
- **Analytics**: Sentiment classification, trend detection, engagement scoring, and word clouds
- **Reports**: Automated PDF report generation with charts and visualizations

---

##  Project Structure

```
event-analyzer/
├── event-app/                    # React Frontend
│   ├── public/                   # Static assets
│   ├── src/
│   │   ├── components/
│   │   │   ├── App.js           # Main application entry
│   │   │   ├── Login.js         # Authentication
│   │   │   ├── ClubSelection.js # Club selection interface
│   │   │   ├── EventForm.jsx    # Event feedback upload form
│   │   │   ├── EventAnalysis.jsx# Real-time analysis display
│   │   │   ├── ClubDashboard.jsx# Club performance dashboard
│   │   │   ├── ReportsPage.jsx  # Reports archive and management
│   │   │   └── About.jsx        # About page
│   │   ├── utils/
│   │   │   └── auth.jsx         # Authentication utilities
│   │   ├── index.js             # React entry point
│   │   └── styles/              # CSS files
│   └── package.json             # Node dependencies
│
├── fastapi/                      # Python Backend
│   ├── sentiment_api.py         # Main FastAPI application
│   ├── tanglish_model.pkl       # Pre-trained sentiment model
│   ├── tanglish_vectorizer.pkl  # Feature vectorizer
│   ├── venv/                    # Python virtual environment
│   ├── reports/                 # Generated PDF reports by club
│   │   ├── AlgoGeeks/
│   │   ├── ARVR/
│   │   ├── CSEA/
│   │   ├── Glugot/
│   │   └── IEEE/
│   ├── uploads/                 # Temporary file uploads
│   ├── data/                    # Training data
│   └── club_data/               # Club-specific information
│
└── Test_files/                  # Test data and samples
```

---

## Quick Start

### Prerequisites

- **Node.js** (v14 or higher)
- **Python** (v3.8 or higher)
- **MongoDB** (local instance on `localhost:27017`)
- **pip** (Python package manager)

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/Sairathna123/EventEcho.git
cd event-analyzer
```

#### 2. Backend Setup (FastAPI)

```bash
# Navigate to backend directory
cd fastapi

# Create and activate virtual environment (if not already created)
python -m venv venv

# Activate virtual environment
# On Windows:
.\venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install fastapi uvicorn pandas joblib nltk textblob pymongo fpdf wordcloud matplotlib

# Download required NLTK data
python -c "import nltk; nltk.download('words')"
```

#### 3. Frontend Setup (React)

```bash
# Navigate to frontend directory
cd ../event-app

# Install dependencies
npm install
```

---

## Running the Application

### Starting the Backend (FastAPI)

Open a terminal and run:

```bash
cd fastapi

# Activate virtual environment
.\venv\Scripts\activate  # Windows
# or
source venv/bin/activate  # macOS/Linux

# Start the FastAPI server
python -m uvicorn sentiment_api:app --host 127.0.0.1 --port 8000
```

**Backend will be available at:** `http://127.0.0.1:8000`

### Starting the Frontend (React)

Open a new terminal and run:

```bash
cd event-app

# Start development server
npm start
```

**Frontend will be available at:** `http://localhost:3000`

---

## Features

### 1. **Sentiment Analysis**
   - Dual-language support: English and Tanglish
   - ML-based classification (Positive, Neutral, Negative)
   - TextBlob for English sentiment polarity detection
   - Pre-trained model for Tanglish feedback

### 2. **Event Feedback Management**
   - Bulk upload via Excel/CSV files
   - Real-time feedback analysis
   - Club-specific feedback organization
   - Event metadata tracking (date, strength, description)

### 3. **Analytics Dashboard**
   - Sentiment distribution charts
   - Word clouds for trending topics
   - Engagement score calculation
   - Top positive/negative feedback highlights
   - Historical report archive

### 4. **Report Generation**
   - Automated PDF reports with:
     - Event information summary
     - Sentiment distribution charts
     - Individual feedback entries
     - Generated timestamps
   - Organized by club and event
   - Static file serving for easy access

### 5. **Data Persistence**
   - MongoDB integration for report storage
   - Event metadata and sentiment summaries
   - Trending topics and engagement metrics
   - Full audit trail with timestamps

---

## Dependencies

### Frontend (React)
- **react** ^19.1.1 - UI framework
- **react-router-dom** ^7.8.2 - Routing
- **axios** ^1.11.0 - HTTP client
- **chart.js** & **react-chartjs-2** - Charts
- **recharts** ^3.1.2 - Advanced visualizations
- **@react-pdf/renderer** - PDF rendering
- **react-pdf** - PDF viewing

### Backend (Python)
- **fastapi** - Web framework
- **uvicorn** - ASGI server
- **pandas** - Data processing
- **nltk** - NLP toolkit
- **textblob** - Sentiment analysis
- **sklearn** (joblib) - ML models
- **pymongo** - MongoDB driver
- **fpdf** - PDF generation
- **wordcloud** - Word cloud generation
- **matplotlib** - Plotting

---

## Database Setup

### MongoDB Local Instance

1. **Install MongoDB** from [mongodb.com](https://www.mongodb.com/try/download/community)

2. **Start MongoDB service:**
   ```bash
   # Windows
   net start MongoDB
   
   # macOS (with Homebrew)
   brew services start mongodb-community
   
   # Linux
   sudo systemctl start mongod
   ```

3. **Verify connection:**
   ```bash
   mongo mongodb://localhost:27017
   ```

The backend automatically creates the database and collections on first run.

---

## Sample Workflow

1. **Start Backend**: `python -m uvicorn sentiment_api:app --host 127.0.0.1 --port 8000`
2. **Start Frontend**: `npm start`
3. **Login**: Use club credentials
4. **Create Event**: Fill event details
5. **Upload Feedback**: Upload Excel/CSV with feedback
6. **View Analysis**: Real-time dashboard with sentiments
7. **Download Report**: PDF with charts and summaries
8. **Archive**: Reports auto-saved in MongoDB

---

## Screen Recordings

### Club Dashboard Overview
[Watch Club Dashboard Demo](https://drive.google.com/file/d/1AsXORC3uHopMsFRoEmKNCgEcxv-HxHl7/view?usp=sharing)

### Admin Dashboard Overview
[Watch Admin Dashboard Demo](https://drive.google.com/file/d/1RLLVWdi0qzy0z_3CLhgFrkgzX2SdbKJN/view?usp=sharing)



---





