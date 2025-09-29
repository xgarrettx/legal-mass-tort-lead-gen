export default function TestEnv() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Environment Variable Test</h1>
      <p>GA Measurement ID: {gaId || 'NOT SET'}</p>
      <p>Status: {gaId ? '✅ Available' : '❌ Missing'}</p>
    </div>
  );
}
