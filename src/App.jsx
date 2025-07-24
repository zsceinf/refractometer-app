import { useState } from 'react';

const data = [
  { refractiveIndex: 1.336, concentration: '2%' },
  { refractiveIndex: 1.339, concentration: '4%' },
  { refractiveIndex: 1.343, concentration: '6%' },
  { refractiveIndex: 1.347, concentration: '8%' },
  { refractiveIndex: 1.350, concentration: '10%' },
];

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const value = parseFloat(e.target.value);
    setInputValue(e.target.value);

    const match = data.find((item) => item.refractiveIndex === value);
    setResult(match ? match.concentration : null);
  };

  return (
    <div style={{
      maxWidth: '400px', margin: '50px auto', padding: '2rem',
      borderRadius: '1rem', boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      backgroundColor: '#fff', fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Oblicz stężenie roztworu</h1>
      <label htmlFor="refractiveIndex">Współczynnik załamania:</label>
      <input
        id="refractiveIndex"
        type="number"
        step="0.001"
        value={inputValue}
        onChange={handleChange}
        placeholder="Np. 1.339"
        style={{
          marginTop: '0.5rem', marginBottom: '1rem', width: '100%',
          padding: '0.5rem', fontSize: '1rem', borderRadius: '0.5rem', border: '1px solid #ccc'
        }}
      />
      {result !== null ? (
        <p style={{ fontSize: '1.2rem' }}>Stężenie roztworu: <strong>{result}</strong></p>
      ) : (
        inputValue && <p style={{ color: 'red' }}>Brak danych dla tego współczynnika.</p>
      )}
    </div>
  );
}