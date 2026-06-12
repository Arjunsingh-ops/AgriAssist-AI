export default function Card({ title }) {
  return (
    <div style={{
      border: '1px solid #bdc3c7',
      borderRadius: '8px',
      padding: '1.5rem',
      margin: '1rem',
      backgroundColor: '#ecf0f1',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ margin: '0 0 0.5rem 0', color: '#2c3e50' }}>{title}</h3>
      <p style={{ color: '#555' }}>Learn more about this topic to improve your farming practices.</p>
    </div>
  );
}
