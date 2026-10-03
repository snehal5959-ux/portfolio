import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report
import pickle

# Load dataset (assume CSV with 'text' and 'label' columns, label 1 for phishing)
# For MVP, use a small sample or public dataset like phishing-dataset.csv
# Download from https://www.kaggle.com/datasets/shashwatwork/phishing-dataset or similar

df = pd.read_csv('../data/phishing_dataset.csv')  # Assume prepared

def extract_features(text):
    # Same as in app.py
    features = {}
    if 'http' in text:
        from urllib.parse import urlparse
        import re
        import math
        url = text
        parsed = urlparse(url)
        domain = parsed.netloc
        features['url_length'] = len(url)
        features['domain_length'] = len(domain)
        features['has_ip'] = 1 if re.match(r'\d+\.\d+\.\d+\.\d+', domain) else 0
        features['tld_suspicious'] = 1 if parsed.netloc.split('.')[-1] in ['tk', 'ml', 'ga'] else 0
        features['entropy'] = -sum((url.count(c)/len(url)) * math.log2(url.count(c)/len(url)) for c in set(url)) if url else 0
        features['domain_age'] = 0  # Simplify for MVP
    else:
        features['url_length'] = 0
        features['domain_length'] = 0
        features['has_ip'] = 0
        features['tld_suspicious'] = 0
        features['entropy'] = 0
        features['domain_age'] = 0
        suspicious_words = ['urgent', 'click here', 'verify', 'account suspended']
        features['suspicious_word_count'] = sum(1 for word in suspicious_words if word in text.lower())
    return features

# Prepare data
X = df['text'].apply(lambda x: list(extract_features(x).values()))
y = df['label']

X_train, X_test, y_train, y_test = train_test_split(X.tolist(), y, test_size=0.2, random_state=42)

# Train model
model = LogisticRegression()
model.fit(X_train, y_train)

# Evaluate
y_pred = model.predict(X_test)
print(classification_report(y_test, y_pred))

# Save model
with open('model.pkl', 'wb') as f:
    pickle.dump(model, f)