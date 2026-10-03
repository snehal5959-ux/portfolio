from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import pickle
import re
import math
from urllib.parse import urlparse
import whois
import datetime
import google.generativeai as genai
from dotenv import load_dotenv
import os

load_dotenv()
genai.configure(api_key=os.getenv('GEMINI_API_KEY'))
model_ai = genai.GenerativeModel('gemini-1.5-flash')

app = FastAPI()

class AnalyzeRequest(BaseModel):
    text: str

# Load model (assume trained and saved as model.pkl)
try:
    with open('model.pkl', 'rb') as f:
        model = pickle.load(f)
except FileNotFoundError:
    model = None  # For MVP, we'll simulate

def extract_features(text: str):
    features = {}
    # URL features
    if 'http' in text:
        url = text  # Assume text is URL for simplicity
        parsed = urlparse(url)
        domain = parsed.netloc
        features['url_length'] = len(url)
        features['domain_length'] = len(domain)
        features['has_ip'] = 1 if re.match(r'\d+\.\d+\.\d+\.\d+', domain) else 0
        features['tld_suspicious'] = 1 if parsed.netloc.split('.')[-1] in ['tk', 'ml', 'ga'] else 0
        features['entropy'] = -sum((url.count(c)/len(url)) * math.log2(url.count(c)/len(url)) for c in set(url)) if url else 0
        try:
            w = whois.whois(domain)
            creation_date = w.creation_date
            if isinstance(creation_date, list):
                creation_date = creation_date[0]
            age = (datetime.datetime.now() - creation_date).days if creation_date else 0
            features['domain_age'] = age
        except:
            features['domain_age'] = 0
    else:
        # Email text features
        features['url_length'] = 0
        features['domain_length'] = 0
        features['has_ip'] = 0
        features['tld_suspicious'] = 0
        features['entropy'] = 0
        features['domain_age'] = 0
        # Add NLP features, e.g., word count, suspicious words
        suspicious_words = ['urgent', 'click here', 'verify', 'account suspended']
        features['suspicious_word_count'] = sum(1 for word in suspicious_words if word in text.lower())
    
    return features

def generate_explanations_with_ai(text: str, verdict: str):
    prompt = f"Analyze this text for phishing indicators: '{text}'. Verdict: {verdict}. Provide 2-4 concise reasons why it is {verdict.lower()}."
    try:
        response = model_ai.generate_content(prompt)
        explanations = response.text.strip().split('\n')[:4]
        return [exp.strip('- ') for exp in explanations if exp.strip()]
    except:
        return ["AI analysis unavailable", "Check for suspicious links", "Verify sender", "Avoid clicking unknown links"]

def predict(text: str, features):
    if model:
        # Assume model expects list of feature values
        feature_list = [features.get(k, 0) for k in ['url_length', 'domain_length', 'has_ip', 'tld_suspicious', 'entropy', 'domain_age', 'suspicious_word_count']]
        prob = model.predict_proba([feature_list])[0][1]  # Prob of phishing
        risk_score = int(prob * 100)
        verdict = 'Phishing' if prob > 0.5 else 'Safe'
    else:
        # Simulate for MVP
        risk_score = 75 if 'phish' in features else 25
        verdict = 'Phishing' if risk_score > 50 else 'Safe'
    
    # Use Gemini for explanations
    explanations = generate_explanations_with_ai(text, verdict)
    
    highlighted_text = text.replace('phish', '<span class="highlight">phish</span>')  # Simple highlight
    
    return {
        'verdict': verdict,
        'riskScore': risk_score,
        'explanations': explanations,
        'highlightedText': highlighted_text
    }

@app.post('/analyze')
async def analyze(request: AnalyzeRequest):
    text = request.text
    features = extract_features(text)
    result = predict(text, features)
    return result

@app.get('/')
async def root():
    return {'message': 'ML Service Running'}