# AI Phishing Detection Website

## Overview
This project implements an AI-powered phishing detection system with a web interface. It analyzes URLs and email text to determine if they are phishing attempts, providing a risk score and explanations.

## Architecture
- **Frontend**: React with TypeScript
- **Backend**: Node.js with Express
- **ML Service**: Python with FastAPI and scikit-learn
- **Data**: Public phishing datasets

## Phases
### MVP (4-6 weeks)
- Basic input/output functionality
- Simple ML model (logistic regression)
- Core features: verdict, risk score, explanations

### Enhancements
- Improved models, user accounts, better UI, deployment

## Setup and Run

### Prerequisites
- Node.js
- Python 3.8+
- npm/yarn

### Local Development
1. Clone the repo
2. Setup backend: `cd backend && npm install && npm start`
3. Setup ML: `cd ml && pip install -r requirements.txt && python app.py`
4. Setup frontend: `cd frontend && npm install && npm start`

### Production Build
- Backend: Use PM2 or similar
- ML: Containerize with Docker
- Frontend: `npm run build`

## Project Structure
```
/
├── frontend/     # React app
├── backend/      # Node.js API
├── ml/          # Python ML service
├── data/        # Datasets
└── docs/        # Documentation
```