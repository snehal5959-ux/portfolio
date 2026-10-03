# Architecture

## Diagram
```mermaid
graph TD
    A[User] --> B[Frontend (React)]
    B --> C[Backend (Node.js Express)]
    C --> D[ML Service (Python FastAPI)]
    D --> E[Model (scikit-learn)]
    E --> D
    D --> C
    C --> B
    B --> A
```

## Components
- **InputHandler**: Frontend input area
- **Verifier**: Backend validation and routing
- **FeatureExtractor**: ML feature extraction from text/URL
- **Model**: Trained classifier for prediction