import React, { useState } from 'react';
import './App.css';

interface AnalysisResult {
  verdict: 'Phishing' | 'Safe';
  riskScore: number;
  explanations: string[];
  highlightedText: string;
}

function App() {
  const [input, setInput] = useState('');
  const [consent, setConsent] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:3001/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: input, consent }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error:', error);
      setError(error instanceof Error ? error.message : 'An error occurred');
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <h1>AI Phishing Detection</h1>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Paste URL or email text here"
        rows={10}
        cols={50}
      />
      <br />
      <label>
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
        />
        I consent to anonymized analysis data being stored for improvement
      </label>
      <br />
      <button onClick={handleAnalyze} disabled={loading}>
        {loading ? 'Analyzing...' : 'Analyze'}
      </button>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {result && (
        <div>
          <h2>Verdict: {result.verdict}</h2>
          <p>Risk Score: {result.riskScore}/100</p>
          <ul>
            {result.explanations.map((exp, idx) => <li key={idx}>{exp}</li>)}
          </ul>
          <div dangerouslySetInnerHTML={{ __html: result.highlightedText }} />
        </div>
      )}
    </div>
  );
}

export default App;