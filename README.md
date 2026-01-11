# Event Echo - Event Feedback & Sentiment Analysis Platform

A comprehensive web application for analyzing event feedback with sentiment analysis support for both English and Tanglish (Tamil-English mix) text. Features real-time analysis, PDF report generation, and interactive dashboards for organizing clubs.

---

## Project Overview

**Event Analyzer** is designed to help clubs and event organizers collect, analyze, and visualize feedback from their events. The platform combines:

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
git clone <repository-url>
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
- API Documentation: `http://127.0.0.1:8000/docs`
- ReDoc: `http://127.0.0.1:8000/redoc`

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

## API Endpoints

### Core Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Health check - API status |
| `POST` | `/analyze/` | Analyze event feedback from uploaded file |
| `GET` | `/api/reports/{club}` | Retrieve all reports for a club |
| `DELETE` | `/api/reports/{pdf_path}` | Delete a specific report |
| `GET` | `/reports/{club}/{filename}` | Download PDF report |

### Request Example

**POST `/analyze/`**

```bash
curl -X POST "http://127.0.0.1:8000/analyze/" \
  -F "file=@feedback.xlsx" \
  -F "eventName=Tech Talk 2025" \
  -F "club=AlgoGeeks" \
  -F "description=Python Workshop" \
  -F "date=2025-01-11" \
  -F "strength=150"
```

**Response:**

```json
{
  "success": true,
  "pdfPath": "AlgoGeeks/Tech_Talk_2025_20250111_143022.pdf",
  "event": "Tech Talk 2025",
  "club": "AlgoGeeks",
  "analysis": {
    "sentimentCounts": {
      "Positive": 85,
      "Neutral": 45,
      "Negative": 20
    },
    "pieChart": "base64_encoded_image",
    "wordCloud": "base64_encoded_image",
    "trendingTopics": ["excellent", "speaker", "engaging", "interactive"],
    "engagementScore": 56.67,
    "positiveKeywords": "base64_encoded_image",
    "negativeKeywords": "base64_encoded_image"
  }
}
```

---

## CORS Configuration

The backend is configured to accept requests from:
- `http://localhost:3000` (React development server)

To add additional origins, modify in `sentiment_api.py`:

```python
origins = [
    "http://localhost:3000",
    "http://yourdomain.com",  # Add here
]
```

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

## Troubleshooting

### Backend Won't Start

**Error: "Module not found"**
```bash
# Ensure virtual environment is activated
.\venv\Scripts\activate

# Reinstall dependencies
pip install -r requirements.txt
```

**Error: "Connection refused" on port 8000**
```bash
# Check if port is already in use
netstat -ano | findstr :8000  # Windows

# Use different port
python -m uvicorn sentiment_api:app --port 8001
```

### Frontend Issues

**Error: "Cannot find module"**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Blank React page**
- Check browser console for errors
- Ensure backend is running and accessible
- Verify CORS settings

### MongoDB Connection Failed

```bash
# Check MongoDB service status
# Windows
net start MongoDB  # Start service

# Verify connection
python -c "from pymongo import MongoClient; MongoClient('mongodb://localhost:27017/').admin.command('ping')"
```

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

## Development

### Adding New Features

1. **Backend Changes**: Modify `sentiment_api.py`
2. **Frontend Changes**: Edit components in `src/`
3. **Test Locally**: Verify on localhost before deployment

### Code Structure

- **API Routes**: Lines 120-388 in `sentiment_api.py`
- **Sentiment Logic**: `classify_sentiment()` function
- **File Handling**: `read_tabular_upload()` function
- **PDF Generation**: Custom FPDF wrapper functions

---





