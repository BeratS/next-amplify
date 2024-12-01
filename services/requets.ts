export async function getToken() {
  const res = await fetch('/api/phyllo', { method: 'POST' });
  if (!res.ok) {
    throw new Error('Failed to fetch token');
  }
  const data = await res.json();
  return data.token;
}
